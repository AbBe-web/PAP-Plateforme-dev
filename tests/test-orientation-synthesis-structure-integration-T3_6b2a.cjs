"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");
const html = read("medecin/generateur-crc/index.html");
const count = (text, value) => text.split(value).length - 1;
const bundleScript = '<script src="../../core/clinical-context/buildOrientationSynthesisBundleV1.js"></script>';
const structureScript = '<script src="../../core/clinical-context/buildOrientationSynthesisStructureV1.js"></script>';
const nextScript = '<script src="../../core/clinical-context/evidence-source-registry.js"></script>';
const marker = "  // T3.6b.2a: structurer les sources deja assemblees, donnees uniquement.";
const bundleHook = "cognitiveUxViewModel.orientationSynthesisBundleV1 =";
const structureHook = "cognitiveUxViewModel.orientationSynthesisStructureV1 =";
for (const token of [bundleScript, structureScript, nextScript, marker, bundleHook, structureHook]) {
  assert.equal(count(html, token), 1, "Occurrence unique : " + token);
}
assert.ok(html.indexOf(bundleScript) < html.indexOf(structureScript));
assert.ok(html.indexOf(structureScript) < html.indexOf(nextScript));
assert.ok(html.indexOf(bundleHook) < html.indexOf(marker));
const start = html.indexOf(marker);
const end = html.indexOf("  const patientSelectionById =", start);
assert.ok(end > start && end - start < 1200, "Position avant selection patient");
const block = html.slice(start, end);
assert.match(block, /buildOrientationSynthesisStructureV1\(orientationSynthesisBundleV1\)/);
assert.doesNotMatch(block, /document\.|querySelector|innerHTML|\.checked\s*=|orientation_framework|selectedLevels|\.sort\(|\.filter\(/);
const sandbox = { window: {} };
for (const filename of [
  "core/clinical-context/buildOrientationSynthesisBundleV1.js",
  "core/clinical-context/buildOrientationSynthesisStructureV1.js"
]) vm.runInNewContext(read(filename), sandbox, { filename });
const q1 = { knowledgeItemId: "same", category: "rehabilitationFactor", condition: {type: "clinicianCheck"}, evidenceSourceIds: ["q1-source"] };
const q2a = { knowledgeItemId: "same", category: "apaBenefitFactor", condition: {type: "always"}, evidenceSourceIds: ["q2-source"] };
const viewModel = {
  clinician: [{ id: "orientation", items: [] }],
  orientationByArea: { rehabilitation: {items: [q1]}, apa: {items: [q2a]}, ordinaryAP: {items: []} },
  orientationFunctionalContext: { globalProfile: null },
  orientationApaBenefitContextV1: { status: "conditional", toVerify: [q1] },
  orientationAutonomyDiscussionContextV1: { autonomy: null },
  orientationApaQuestionsContextV1: { mode: "none" },
  orientationFeasibilityContextV1: { practical: {cost: "not_explored", support: null} }
};
const bundle = sandbox.window.buildOrientationSynthesisBundleV1(viewModel);
viewModel.orientationSynthesisBundleV1 = bundle;
vm.runInNewContext(block, {
  cognitiveUxViewModel: viewModel,
  orientationSynthesisBundleV1: bundle,
  buildOrientationSynthesisStructureV1: sandbox.window.buildOrientationSynthesisStructureV1
});
const structure = viewModel.orientationSynthesisStructureV1;
assert.equal(structure.status, "ready");
assert.deepEqual(Array.from(structure.sections, section => section.id), ["transversal", "discussion", "feasibility"]);
const get = (section, id) => structure.sections.find(s => s.id === section).entries.find(e => e.id === id).value;
assert.equal(get("transversal", "rehabilitationQ1")[0], q1);
assert.equal(get("discussion", "apaProjectionQ2a")[0], q2a);
assert.equal(get("transversal", "rehabilitationQ1")[0].condition.type, "clinicianCheck");
assert.equal(get("discussion", "apaProjectionQ2a")[0].condition.type, "always");
assert.equal(get("transversal", "rehabilitationQ1")[0].evidenceSourceIds[0], "q1-source");
assert.equal(get("discussion", "apaProjectionQ2a")[0].evidenceSourceIds[0], "q2-source");
assert.equal(get("discussion", "autonomyDiscussion").autonomy, null);
assert.equal(get("feasibility", "feasibilityContext").practical.cost, "not_explored");
assert.equal(get("transversal", "multiprofessionalProgram"), null);
assert.equal(bundle.byArea.rehabilitation.length, 1);
assert.equal(bundle.byArea.apa.length, 1);
const unavailable = sandbox.window.buildOrientationSynthesisStructureV1(null);
assert.equal(unavailable.status, "unavailable");
console.log("PASS T3.6b.2a : structure raccordee, Q1/Q2a distincts, sources et inconnus preserves, aucune UI ni decision.");
