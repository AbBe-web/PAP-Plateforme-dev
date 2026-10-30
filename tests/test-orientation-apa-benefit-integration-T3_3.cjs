"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const htmlFile = path.join(root, "medecin", "generateur-crc", "index.html");
const q2aFile = path.join(root, "core", "clinical-context", "buildOrientationApaBenefitContextV1.js");
assert.ok(fs.existsSync(htmlFile), "index.html not found");
assert.ok(fs.existsSync(q2aFile), "T3.3 Q2a helper not found");
const html = fs.readFileSync(htmlFile, "utf8");
const startMarker = "  // T3.3: preserve Q2a documentary benefit cues and clinical uncertainty; data only.";
const endMarker = "  // T3.3: U explicite uniquement, sans inference ni affichage.";
const scriptTag = '<script src="../../core/clinical-context/buildOrientationApaBenefitContextV1.js"></script>';
assert.equal(html.split(startMarker).length, 2, "Unique integration start expected");
assert.equal(html.split(endMarker).length, 2, "Unique next T3.3 autonomy block expected");
const functionalBoundary = "  // T3.2: clinician-only functional inputs; no orientation decision.";
assert.equal(html.split(functionalBoundary).length, 2, "Unique functional boundary expected");
assert.ok(html.indexOf(startMarker) < html.indexOf(endMarker) &&
  html.indexOf(endMarker) < html.indexOf(functionalBoundary),
  "Q2a integration precedes U and functional context");
assert.equal(html.split(scriptTag).length, 2, "Q2a script must load exactly once");
assert.ok(html.indexOf(scriptTag) < html.indexOf("const cognitiveUxViewModel"),
  "Q2a module must load before ViewModel usage");
const source = html.slice(html.indexOf(startMarker), html.indexOf(endMarker));
assert.ok(!/querySelector|orientation_framework|\.checked\s*=/.test(source),
  "Q2a integration must not read or change level selections");

const context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(q2aFile, "utf8"), context, { filename: q2aFile });
const builder = context.window.buildOrientationApaBenefitContextV1;
assert.equal(typeof builder, "function");

const applicable = {
  knowledgeItemId: "q2a-applicable", category: "apaBenefitFactor",
  condition: { type: "always" }, evidenceSourceIds: ["HAS-A"],
  presentationTargets: ["orientation.apa"]
};
const conditional = {
  knowledgeItemId: "q2a-to-verify", category: "apaBenefitFactor",
  condition: { type: "clinicianCheck", question: "Critère à vérifier" },
  evidenceSourceIds: ["HAS-B"], presentationTargets: ["orientation.apa"]
};
const clinicalContextV2 = { orientationFactors: [applicable, conditional, {
  category: "rehabilitationFactor", condition: { type: "always" }
}] };
const cognitiveUxViewModel = { orientationByArea: { apa: { items: [] } },
  orientationFunctionalContext: { globalProfile: "severe" } };
const evaluationContext = vm.createContext({
  buildOrientationApaBenefitContextV1: builder,
  clinicalContextV2,
  cognitiveUxViewModel
});
vm.runInContext(source, evaluationContext);
const q2a = cognitiveUxViewModel.orientationApaBenefitContextV1;
assert.ok(q2a, "Q2a context not attached to ViewModel");
assert.equal(q2a.status, "applicable");
assert.equal(q2a.applicable.length, 1);
assert.equal(q2a.toVerify.length, 1);
assert.equal(q2a.toVerify[0].condition.question, "Critère à vérifier");
assert.equal(q2a.applicable[0].evidenceSourceIds[0], "HAS-A");
assert.equal(q2a.toVerify[0].evidenceSourceIds[0], "HAS-B");
assert.equal(cognitiveUxViewModel.orientationFunctionalContext.globalProfile, "severe",
  "Existing T3.2 functional context must stay untouched");
assert.equal(cognitiveUxViewModel.orientationByArea.apa.items.length, 0,
  "Existing cognitive UX area must stay untouched");

const noneVm = {};
const noneCtx = vm.createContext({
  buildOrientationApaBenefitContextV1: builder,
  clinicalContextV2: { orientationFactors: [] },
  cognitiveUxViewModel: noneVm
});
vm.runInContext(source, noneCtx);
assert.equal(noneVm.orientationApaBenefitContextV1.status, "noneIdentified");
assert.equal(cognitiveUxViewModel.orientationAutonomyU, undefined);
console.log("PASS T3.3 : Q2a raccorde au ViewModel; applicable/conditionnel conserves, sources intactes, U/niveaux inchanges.");
