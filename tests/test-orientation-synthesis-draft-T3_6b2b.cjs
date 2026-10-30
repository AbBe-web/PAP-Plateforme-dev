"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const files = [
  "core/clinical-context/buildOrientationSynthesisBundleV1.js",
  "core/clinical-context/buildOrientationSynthesisStructureV1.js",
  "core/clinical-context/buildOrientationSynthesisDraftV1.js"
];
const context = vm.createContext({ window: {} });
for (const file of files) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}
const bundle = context.window.buildOrientationSynthesisBundleV1;
const structure = context.window.buildOrientationSynthesisStructureV1;
const draft = context.window.buildOrientationSynthesisDraftV1;
assert.equal(typeof draft, "function");

const q1 = {
  knowledgeItemId: "same-id", semanticConceptId: "same-concept", category: "rehabilitationFactor",
  clinicalFunction: "rehabilitation", condition: { type: "clinicianCheck", question: "Verifier Q1" },
  evidenceSourceIds: ["Q1-source"], matchedContext: { pathologiesAny: ["P1"] },
  messages: { clinician: "Texte Q1 existant" }
};
const q2a = {
  knowledgeItemId: "same-id", semanticConceptId: "same-concept", category: "apaBenefitFactor",
  clinicalFunction: "apaBenefit", condition: { type: "always" }, evidenceSourceIds: ["Q2-source"],
  messages: { clinician: "Texte Q2a existant" }
};
const q1Duplicate = { ...q1, evidenceSourceIds: ["autre Q1 source"], matchedContext: { pathologiesAny: ["P2"] } };
const q1DifferentCondition = { ...q1, condition: { type: "clinicianCheck", question: "Autre critere" } };
const conditional = { ...q2a, knowledgeItemId: "cond", condition: { type: "clinicianCheck", question: "Critere clinique" }, evidenceSourceIds: ["CONDITION-source"] };
const autonomyText = "Intérêt d'un programme d'APA dans cette situation clinique. Toutefois, le niveau 2 concerne notamment les patients ne pouvant augmenter leur activité physique de façon autonome, adaptée et sûre (HAS). Si le patient en est capable, discuter les niveaux 3 ou 4.";
const model = {
  clinician: [{ id: "orientation", items: [{ knowledgeItemId: "general" }] }],
  orientationByArea: {
    rehabilitation: { items: [q1, q1Duplicate, q1DifferentCondition] },
    apa: { items: [q2a, conditional] },
    ordinaryAP: { items: [] }
  },
  orientationApaBenefitContextV1: {
    status: "applicable", hasApplicable: true, hasToVerify: true,
    applicable: [q2a], toVerify: [conditional]
  },
  orientationAutonomyDiscussionContextV1: {
    status: "ready", autonomy: "high", apaEvidenceState: "applicable",
    branchId: "u.high.q2a.applicable", message: autonomyText
  },
  orientationApaQuestionsContextV1: { mode: "none", q2c: { visible: false }, q2d: { visible: false } },
  orientationFunctionalQualificationCueV1: { applicable: true, message: "Texte deja valide" },
  orientationSevereFunctionalRegulatoryCueV1: { applicable: true, sources: [{ id: "reg" }] },
  orientationFeasibilityContextV1: {
    practical: { cost: "difficulty", accessTransport: "not_explored", support: "available" },
    preferences: { settings: ["encadrement_a_confirmer"], socialModes: ["en groupe"] }
  }
};
function render(m) { return draft(structure(bundle(m))); }
const mixed = render(model);
assert.equal(mixed.status, "ready");
assert.equal(mixed.mainMessage.text, autonomyText);
assert.equal(mixed.mainMessage.branchId, "u.high.q2a.applicable");
assert.deepEqual(Array.from(mixed.additionalMessages, x => x.id), ["otherApaCriteria", "cost", "support"]);
assert.equal(mixed.additionalMessages[0].text, "Autres critères cliniques à vérifier.");
assert.equal(mixed.knowledge.rehabilitationQ1.length, 2, "Q1 identiques groupes, conditions differentes preservees");
assert.equal(mixed.knowledge.rehabilitationQ1[0].occurrences.length, 2);
assert.equal(mixed.knowledge.rehabilitationQ1[0].occurrences[1].evidenceSourceIds[0], "autre Q1 source");
assert.equal(mixed.knowledge.rehabilitationQ1[0].occurrences[0].condition.question, "Verifier Q1");
assert.equal(mixed.knowledge.rehabilitationQ1[1].condition.question, "Autre critere");
assert.equal(mixed.knowledge.apaQ2a.length, 2);
assert.equal(mixed.knowledge.sharedConcepts.length, 1);
assert.equal(mixed.knowledge.sharedConcepts[0].rehabilitationQ1.length, 2);
assert.equal(mixed.knowledge.sharedConcepts[0].apaQ2a.length, 2);
assert.equal(mixed.existing.apaBenefit.toVerify[0].evidenceSourceIds[0], "CONDITION-source");
assert.equal(mixed.existing.severeRegulatoryMemo.sources[0].id, "reg");
assert.ok(!mixed.additionalMessages.some(x => x.id === "preferenceEncadrement"), "Pas d'inference d'encadrement");
assert.equal(mixed.existing.feasibility.practical.accessTransport, "not_explored");
assert.deepEqual(Array.from(mixed.pendingMapping), ["preferenceEncadrement"]);

const onlyConditional = render({
  ...model,
  orientationApaBenefitContextV1: { status: "conditional", hasApplicable: false, hasToVerify: true, applicable: [], toVerify: [conditional] },
  orientationAutonomyDiscussionContextV1: { status: "ready", autonomy: "partial", apaEvidenceState: "conditional", message: "Ancien message conditionnel long" }
});
assert.equal(onlyConditional.mainMessage.text, "Intérêt d'un programme d'APA à préciser : critères cliniques à vérifier.");
assert.equal(onlyConditional.additionalMessages.find(x => x.id === "otherApaCriteria"), undefined, "B seulement si applicable + conditionnel");
assert.equal(onlyConditional.existing.autonomyDiscussion.message, "Ancien message conditionnel long", "Source brute conservee");

const noU = render({ ...model, orientationAutonomyDiscussionContextV1: { status: "unassessed", autonomy: null, message: "" } });
assert.equal(noU.mainMessage, null, "Ne pas inventer U");
assert.ok(noU.additionalMessages.find(x => x.id === "otherApaCriteria"));
const noBenefit = render({
  ...model,
  orientationApaBenefitContextV1: { status: "noneIdentified", hasApplicable: false, hasToVerify: false },
  orientationAutonomyDiscussionContextV1: { status: "ready", apaEvidenceState: "noneIdentified", message: "Conseils existants", branchId: "x" },
  orientationFeasibilityContextV1: { practical: { cost: null, accessTransport: "no_difficulty", support: "not_explored" } }
});
assert.equal(noBenefit.mainMessage.text, "Conseils existants");
assert.equal(noBenefit.additionalMessages.length, 0);
const unavailable = render({ ...model, orientationApaBenefitContextV1: null });
assert.equal(unavailable.mainMessage, null, "Indisponible n'est pas absence de benefice");
assert.equal(draft(null).status, "unavailable");
assert.equal(draft({ status: "unavailable", sections: [] }).mainMessage, null);
const withoutMessage = { ...q1, messages: null };
const noText = render({ ...model, orientationByArea: { ...model.orientationByArea, rehabilitation: { items: [withoutMessage, withoutMessage] } } });
assert.equal(noText.knowledge.rehabilitationQ1.length, 2, "Sans texte, pas de regroupement silencieux");
assert.equal(q1.evidenceSourceIds[0], "Q1-source", "Aucune mutation des sources");
const sourceText = fs.readFileSync(path.join(root, files[2]), "utf8");
assert.ok(!/document\.|querySelector|innerHTML|orientation_framework|localStorage/.test(sourceText));
assert.ok(!/\.checked\b|\.dispatchEvent\b/.test(sourceText));
console.log("PASS T3.6b.2b : messages valides, regroupement prudent, Q1/Q2a preserves, conditions et sources intactes, aucun HTML ni orientation automatique.");
