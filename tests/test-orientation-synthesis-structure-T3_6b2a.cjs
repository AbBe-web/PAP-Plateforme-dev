"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const files = [
  "core/clinical-context/buildOrientationSynthesisBundleV1.js",
  "core/clinical-context/buildOrientationSynthesisStructureV1.js"
];
const sandbox = { window: {} };
for (const file of files) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  vm.runInNewContext(code, sandbox, { filename: file });
}
const buildBundle = sandbox.window.buildOrientationSynthesisBundleV1;
const build = sandbox.window.buildOrientationSynthesisStructureV1;
assert.equal(typeof build, "function");

const q1 = {
  knowledgeItemId: "shared-id", semanticConceptId: "shared-concept",
  category: "rehabilitationFactor", condition: { type: "clinicianCheck" },
  evidenceSourceIds: ["Q1-SOURCE"], messages: { clinician: "Q1 original" }
};
const q2a = {
  knowledgeItemId: "shared-id", semanticConceptId: "shared-concept",
  category: "apaBenefitFactor", condition: { type: "always" },
  evidenceSourceIds: ["Q2A-SOURCE"], messages: { clinician: "Q2a original" }
};
const q2aConditional = {
  knowledgeItemId: "condition-1", category: "apaBenefitFactor",
  condition: { type: "clinicianCheck" }, evidenceSourceIds: ["COND-SOURCE"]
};
const memo = { applicable: true, text: "Texte deja valide", sourceIds: ["REG-SOURCE"] };
const qual = { applicable: false, message: null };
const apaBenefit = {
  status: "applicable", hasApplicable: true, hasToVerify: true,
  applicable: [q2a], toVerify: [q2aConditional]
};
const discussion = {
  autonomy: "partial", branchId: "u.partial.q2a.applicable",
  message: "Message U deja valide", hasOtherApaConditionsToVerify: true
};
const questions = { mode: "parallel", q2c: { visible: true }, q2d: { visible: true } };
const feasibility = {
  practical: { cost: "difficulty", accessTransport: "not_explored", support: null },
  preferences: { settings: ["home"] }
};
const clinicalViewModel = {
  clinician: [{ id: "orientation", items: [{ knowledgeItemId: "general" }] }],
  orientationByArea: {
    rehabilitation: { items: [q1] },
    apa: { items: [q2a, q2aConditional] },
    ordinaryAP: { items: [{ knowledgeItemId: "ordinary" }] }
  },
  orientationFunctionalContext: { globalProfile: "severe" },
  orientationFunctionalQualificationCueV1: qual,
  orientationSevereFunctionalRegulatoryCueV1: memo,
  orientationApaBenefitContextV1: apaBenefit,
  orientationAutonomyDiscussionContextV1: discussion,
  orientationApaQuestionsContextV1: questions,
  orientationFeasibilityContextV1: feasibility
};
const bundle = buildBundle(clinicalViewModel);
const outline = build(bundle);
assert.equal(outline.status, "ready");
assert.deepEqual(Array.from(outline.sections, (s) => s.id), [
  "transversal", "discussion", "feasibility"
]);
function item(sectionId, entryId) {
  const section = outline.sections.find((s) => s.id === sectionId);
  assert.ok(section, sectionId);
  const result = section.entries.find((e) => e.id === entryId);
  assert.ok(result, entryId);
  return result;
}
// Q1 et Q2a peuvent avoir le meme ID tout en gardant leurs sens et sources.
const rehabEntry = item("transversal", "rehabilitationQ1");
const apaEntry = item("discussion", "apaProjectionQ2a");
assert.equal(rehabEntry.sourcePath, "byArea.rehabilitation");
assert.equal(apaEntry.sourcePath, "byArea.apa");
assert.equal(rehabEntry.value[0], q1);
assert.equal(apaEntry.value[0], q2a);
assert.equal(rehabEntry.value[0].condition.type, "clinicianCheck");
assert.equal(apaEntry.value[0].condition.type, "always");
assert.equal(rehabEntry.value[0].evidenceSourceIds[0], "Q1-SOURCE");
assert.equal(apaEntry.value[0].evidenceSourceIds[0], "Q2A-SOURCE");
assert.equal(item("discussion", "apaBenefitQ2a").value, apaBenefit);
assert.equal(item("discussion", "apaBenefitQ2a").value.toVerify[0], q2aConditional);
assert.equal(item("transversal", "severeRegulatoryMemo").value, memo);
assert.equal(item("transversal", "functionalQualification").value, qual);
assert.equal(item("transversal", "multiprofessionalProgram").value, null);
assert.equal(item("discussion", "autonomyDiscussion").value, discussion);
assert.equal(item("discussion", "apaQuestions").value.mode, "parallel");
assert.equal(item("feasibility", "feasibilityContext").value, feasibility);
assert.equal(item("feasibility", "feasibilityContext").value.practical.accessTransport, "not_explored");
assert.equal(item("feasibility", "feasibilityContext").value.practical.support, null);
// Copier les tableaux de presentation sans modifier le bundle ou ses donnees.
rehabEntry.value.push({ knowledgeItemId: "test-extra" });
assert.equal(bundle.byArea.rehabilitation.length, 1);
assert.equal(clinicalViewModel.orientationByArea.rehabilitation.items.length, 1);
// Une absence documentaire est indisponible, et non "pas de benefice".
const unavailable = build(null);
assert.equal(unavailable.status, "unavailable");
assert.equal(itemFrom(unavailable, "discussion", "apaBenefitQ2a"), null);
assert.equal(itemFrom(unavailable, "transversal", "multiprofessionalProgram"), null);
assert.equal(itemFrom(unavailable, "feasibility", "feasibilityContext"), null);
assert.equal(itemFrom(build({ status: "unavailable", byArea: { apa: [q2a] } }), "discussion", "apaProjectionQ2a").length, 0);
function itemFrom(plan, sectionId, entryId) {
  return plan.sections.find((s) => s.id === sectionId).entries.find((e) => e.id === entryId).value;
}
const sourceText = fs.readFileSync(path.join(root, files[1]), "utf8");
assert.ok(!/document\.|querySelector|innerHTML|orientation_framework|localStorage/.test(sourceText));
assert.ok(!/\.sort\(|\.filter\(/.test(sourceText));
console.log("PASS T3.6b.2a : sections ordonnees, Q1/Q2a distincts, conditions et sources intactes, inconnus preserves, aucun texte ni decision ni UI.");
