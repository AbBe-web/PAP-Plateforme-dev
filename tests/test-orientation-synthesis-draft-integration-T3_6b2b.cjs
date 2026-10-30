"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const read = f => fs.readFileSync(path.join(root, f), "utf8");
const html = read("medecin/generateur-crc/index.html");
const count = (text, value) => text.split(value).length - 1;
const structureScript = '<script src="../../core/clinical-context/buildOrientationSynthesisStructureV1.js"></script>';
const draftScript = '<script src="../../core/clinical-context/buildOrientationSynthesisDraftV1.js"></script>';
const nextScript = '<script src="../../core/clinical-context/evidence-source-registry.js"></script>';
const marker = '  // T3.6b.2b: raccorder la synthese approuvee, sans HTML ni selection de niveau.';
const structureHook = 'cognitiveUxViewModel.orientationSynthesisStructureV1 =';
const draftHook = 'cognitiveUxViewModel.orientationSynthesisDraftV1 =';
for (const value of [structureScript, draftScript, nextScript, marker, structureHook, draftHook]) {
  assert.equal(count(html, value), 1, "Une occurrence attendue : " + value);
}
assert.ok(html.indexOf(structureScript) < html.indexOf(draftScript));
assert.ok(html.indexOf(draftScript) < html.indexOf(nextScript));
assert.ok(html.indexOf(structureHook) < html.indexOf(marker));
const start = html.indexOf(marker);
const end = html.indexOf("  const patientSelectionById =", start);
assert.ok(end > start && end - start < 1500, "Raccordement avant la selection patient");
const block = html.slice(start, end);
assert.match(block, /buildOrientationSynthesisDraftV1\(orientationSynthesisStructureV1\)/);
assert.doesNotMatch(block, /document\.|querySelector|innerHTML|\.checked\s*=|orientation_framework|selectedLevels|\.dispatchEvent\(/);
const sandbox = vm.createContext({ window: {} });
for (const file of [
  "core/clinical-context/buildOrientationSynthesisBundleV1.js",
  "core/clinical-context/buildOrientationSynthesisStructureV1.js",
  "core/clinical-context/buildOrientationSynthesisDraftV1.js"
]) vm.runInContext(read(file), sandbox, { filename: file });
const q1 = {
  semanticConceptId: "concept", knowledgeItemId: "q1", clinicalFunction: "rehabilitation",
  category: "rehabilitationFactor", condition: { type: "clinicianCheck", question: "Q1" },
  evidenceSourceIds: ["source-q1"], messages: { clinician: "Repere Q1 existant" }
};
const q2a = {
  semanticConceptId: "concept", knowledgeItemId: "q2a", clinicalFunction: "apaBenefit",
  category: "apaBenefitFactor", condition: { type: "clinicianCheck", question: "Q2a" },
  evidenceSourceIds: ["source-q2a"], messages: { clinician: "Repere Q2a existant" }
};
const viewModel = {
  clinician: [{ id: "orientation", items: [] }],
  orientationByArea: {
    rehabilitation: { items: [q1] }, apa: { items: [q2a] }, ordinaryAP: { items: [] }
  },
  orientationApaBenefitContextV1: { status: "conditional", hasApplicable: false, hasToVerify: true, toVerify: [q2a] },
  orientationAutonomyDiscussionContextV1: { status: "unassessed", autonomy: null, message: "" },
  orientationApaQuestionsContextV1: { mode: "none" },
  orientationFunctionalContextV1: { globalProfile: null },
  orientationFeasibilityContextV1: { practical: { cost: "difficulty", accessTransport: null, support: "not_explored" } }
};
const buildBundle = sandbox.window.buildOrientationSynthesisBundleV1;
const buildStructure = sandbox.window.buildOrientationSynthesisStructureV1;
const buildDraft = sandbox.window.buildOrientationSynthesisDraftV1;
const bundle = buildBundle(viewModel);
viewModel.orientationSynthesisBundleV1 = bundle;
const structure = buildStructure(bundle);
viewModel.orientationSynthesisStructureV1 = structure;
vm.runInNewContext(block, {
  cognitiveUxViewModel: viewModel,
  orientationSynthesisStructureV1: structure,
  buildOrientationSynthesisDraftV1: buildDraft
});
const draft = viewModel.orientationSynthesisDraftV1;
assert.equal(draft.status, "ready");
assert.equal(draft.mainMessage.text, "Intérêt d'un programme d'APA à préciser : critères cliniques à vérifier.");
assert.equal(draft.knowledge.rehabilitationQ1[0].occurrences[0], q1);
assert.equal(draft.knowledge.apaQ2a[0].occurrences[0], q2a);
assert.equal(draft.knowledge.sharedConcepts.length, 1);
assert.equal(draft.knowledge.rehabilitationQ1[0].condition.question, "Q1");
assert.equal(draft.knowledge.apaQ2a[0].condition.question, "Q2a");
assert.equal(draft.knowledge.rehabilitationQ1[0].occurrences[0].evidenceSourceIds[0], "source-q1");
assert.equal(draft.knowledge.apaQ2a[0].occurrences[0].evidenceSourceIds[0], "source-q2a");
assert.equal(draft.additionalMessages.length, 1, "Seule l'aide cout connue est ajoutee");
assert.equal(draft.additionalMessages[0].id, "cost");
assert.equal(draft.existing.feasibility.practical.support, "not_explored");
assert.equal(draft.existing.autonomyDiscussion.autonomy, null);
assert.equal(draft.pendingMultiprofessionalEvidence, true);
assert.deepEqual(Array.from(draft.pendingMapping), ["preferenceEncadrement"]);
console.log("PASS T3.6b.2b : draft raccorde, Q1/Q2a distincts, textes et incertitudes preserves, aucune UI ni niveau automatique.");
