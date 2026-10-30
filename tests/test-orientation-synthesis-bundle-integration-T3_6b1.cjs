"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "medecin", "generateur-crc", "index.html"), "utf8");
const source = fs.readFileSync(path.join(root, "core", "clinical-context", "buildOrientationSynthesisBundleV1.js"), "utf8");
const count = (t, s) => t.split(s).length - 1;
const script = '<script src="../../core/clinical-context/buildOrientationSynthesisBundleV1.js"></script>';
const hook = "cognitiveUxViewModel.orientationSynthesisBundleV1 =";
const marker = "  // T3.6b.1: assembler les contextes existants, donnees uniquement.";
const regulatoryHook = "cognitiveUxViewModel.orientationSevereFunctionalRegulatoryCueV1 =";
const q2aHook = "cognitiveUxViewModel.orientationApaBenefitContextV1 =";
const feasibilityHook = "cognitiveUxViewModel.orientationFeasibilityContextV1 =";
assert.equal(count(html, script), 1, "Module inclus une seule fois");
assert.equal(count(html, hook), 1, "Raccordement unique");
assert.equal(count(html, marker), 1, "Bloc T3.6b.1 unique");
assert.ok(html.indexOf('<script src="../../core/clinical-context/buildOrientationFeasibilityContextV1.js"></script>') < html.indexOf(script));
assert.ok(html.indexOf(script) < html.indexOf('<script src="../../core/clinical-context/evidence-source-registry.js"></script>'));
const blockStart = html.indexOf(marker);
const nextMarker = "  // T3.6b.2a: structurer les sources deja assemblees, donnees uniquement.";
const blockEnd = html.indexOf(nextMarker, blockStart);
const selectionPos = html.indexOf("  const patientSelectionById =", blockEnd);
assert.ok(blockEnd > blockStart && blockEnd - blockStart < 1500,
  "Bloc T3.6b.1 precede immediatement la structure T3.6b.2a");
assert.ok(selectionPos > blockEnd, "Les raccordements precedent la selection patient");
for (const item of [regulatoryHook, q2aHook, feasibilityHook]) {
  assert.ok(html.indexOf(item) >= 0 && html.indexOf(item) < blockStart, item + " disponible en amont");
}
const block = html.slice(blockStart, blockEnd);
assert.match(block, /buildOrientationSynthesisBundleV1\(cognitiveUxViewModel\)/);
assert.doesNotMatch(block, /querySelector|innerHTML|setAttribute|\.checked\s*=|selectedLevels|alert\(/);

const rootSandbox = { window: {} };
vm.runInNewContext(source, rootSandbox);
const build = rootSandbox.window.buildOrientationSynthesisBundleV1;
assert.equal(typeof build, "function");
const rehab = { knowledgeItemId: "same", condition: {type: "clinicianCheck"}, evidenceSourceIds: ["ref-q1"] };
const apa = { knowledgeItemId: "same", condition: {type: "always"}, evidenceSourceIds: ["ref-q2a"] };
const viewModel = {
  clinician: [{id: "orientation", items: [{knowledgeItemId: "general"}]}],
  orientationByArea: { rehabilitation: {items: [rehab]}, apa: {items: [apa]} },
  orientationFunctionalContext: { globalProfile: null },
  orientationFunctionalQualificationCueV1: {applicable: true},
  orientationSevereFunctionalRegulatoryCueV1: {applicable: false},
  orientationApaBenefitContextV1: {status: "conditional", toVerify: [apa]},
  orientationAutonomyDiscussionContextV1: {autonomy: null, message: null},
  orientationApaQuestionsContextV1: {mode: "none"},
  orientationFeasibilityContextV1: {practical: {cost: "not_explored", support: null}}
};
const initialKeys = Object.keys(viewModel);
const sandbox = { cognitiveUxViewModel: viewModel, buildOrientationSynthesisBundleV1: build };
vm.runInNewContext(block, sandbox);
const result = viewModel.orientationSynthesisBundleV1;
assert.equal(result.status, "ready");
assert.equal(result.byArea.rehabilitation[0].condition.type, "clinicianCheck");
assert.equal(result.byArea.apa[0].condition.type, "always");
assert.equal(result.byArea.rehabilitation[0].evidenceSourceIds[0], "ref-q1");
assert.equal(result.byArea.apa[0].evidenceSourceIds[0], "ref-q2a");
assert.equal(result.functional.context, viewModel.orientationFunctionalContext);
assert.equal(result.apaBenefit, viewModel.orientationApaBenefitContextV1);
assert.equal(result.autonomyDiscussion.autonomy, null);
assert.equal(result.feasibility.practical.cost, "not_explored");
assert.equal(result.multiprofessionalProgramCues, null);
assert.deepEqual(Object.keys(viewModel).filter(k => !initialKeys.includes(k)), ["orientationSynthesisBundleV1"]);
assert.equal(viewModel.orientationByArea.rehabilitation.items.length, 1);
assert.equal(viewModel.orientationByArea.apa.items.length, 1);
console.log("PASS T3.6b.1 : bundle raccorde apres les contextes, Q1/Q2a distincts, aucune UI ni orientation automatique.");
