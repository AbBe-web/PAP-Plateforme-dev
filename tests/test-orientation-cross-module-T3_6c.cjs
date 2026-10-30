"use strict";
// T3.6c : verification transversale des modules existants, sans DOM ni interface.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");

const modules = [
  "buildOrientationApaBenefitContextV1.js",
  "buildOrientationAutonomyDiscussionContextV1.js",
  "buildOrientationApaQuestionsContextV1.js",
  "buildOrientationFeasibilityContextV1.js",
  "buildOrientationSynthesisBundleV1.js",
  "buildOrientationSynthesisStructureV1.js",
  "buildOrientationSynthesisDraftV1.js"
];
const sandbox = vm.createContext({ window: {} });
for (const moduleName of modules) {
  const filename = path.join(root, "core", "clinical-context", moduleName);
  assert.ok(fs.existsSync(filename), "Module existant requis : " + moduleName);
  vm.runInContext(fs.readFileSync(filename, "utf8"), sandbox, { filename });
}
const f = sandbox.window;
const builders = modules.map(name => "build" + name.slice("build".length, -".js".length));
for (const name of builders) assert.equal(typeof f[name], "function", name);

const Q1 = {
  knowledgeItemId: "clin-shared", semanticConceptId: "clin-concept", clinicalFunction: "rehabilitation",
  category: "rehabilitationFactor", condition: { type: "clinicianCheck", question: "Critere Q1" },
  evidenceSourceIds: ["reference-reeducation"], messages: { clinician: "Repere de reeducation preexistant" }
};
const Q2A_APPLICABLE = {
  knowledgeItemId: "clin-shared", semanticConceptId: "clin-concept", clinicalFunction: "apaBenefit",
  category: "apaBenefitFactor", condition: { type: "always" },
  evidenceSourceIds: ["reference-apa"], messages: { clinician: "Repere d'APA preexistant" }
};
const Q2A_CONDITIONAL = {
  ...Q2A_APPLICABLE, knowledgeItemId: "clin-conditionnel", semanticConceptId: "clin-concept-2",
  condition: { type: "clinicianCheck", question: "Critere documentaire a confirmer" },
  evidenceSourceIds: ["reference-conditionnelle"]
};
const CONDITIONAL_TEXT = "Intérêt d'un programme d'APA à préciser : critères cliniques à vérifier.";
const OTHER_TEXT = "Autres critères cliniques à vérifier.";
const HIGH_TEXT = "Intérêt d'un programme d'APA dans cette situation clinique. Toutefois, le niveau 2 concerne notamment les patients ne pouvant augmenter leur activité physique de façon autonome, adaptée et sûre (HAS). Si le patient en est capable, discuter les niveaux 3 ou 4.";

// Chaîne réelle des sept modules : qualification documentaire -> U -> Q2c/d
// -> faisabilite -> bundle -> structure -> synthese.
function run({ autonomy = null, q2aItems = [Q2A_APPLICABLE], dataAvailable = true,
               q2cAnswer = null, engagement = null } = {}) {
  const clinical = dataAvailable ? { orientationFactors: q2aItems } : null;
  const benefit = f.buildOrientationApaBenefitContextV1(clinical);
  const discussion = f.buildOrientationAutonomyDiscussionContextV1(autonomy, benefit);
  const questions = f.buildOrientationApaQuestionsContextV1(discussion, q2cAnswer);
  const feasibility = f.buildOrientationFeasibilityContextV1(engagement);
  const viewModel = {
    clinician: [{ id: "orientation", items: [] }],
    orientationByArea: {
      rehabilitation: { items: [Q1] },
      apa: { items: dataAvailable ? q2aItems : [] },
      ordinaryAP: { items: [] }
    },
    orientationApaBenefitContextV1: benefit,
    orientationAutonomyDiscussionContextV1: discussion,
    orientationApaQuestionsContextV1: questions,
    orientationFeasibilityContextV1: feasibility,
    orientationFunctionalContext: { globalProfile: null },
    orientationFunctionalQualificationCueV1: null,
    orientationSevereFunctionalRegulatoryCueV1: null
  };
  const bundle = f.buildOrientationSynthesisBundleV1(viewModel);
  const structure = f.buildOrientationSynthesisStructureV1(bundle);
  const draft = f.buildOrientationSynthesisDraftV1(structure);
  assert.equal(draft.status, "ready");
  assert.equal(draft.existing.apaBenefit.status, benefit.status);
  assert.equal(draft.existing.autonomyDiscussion.branchId, discussion.branchId);
  assert.equal(draft.existing.apaQuestions.mode, questions.mode);
  assert.equal(draft.existing.apaQuestions.q2d.visible, questions.q2d.visible);
  assert.equal(draft.knowledge.rehabilitationQ1[0].occurrences[0], Q1, "Q1 original conserve");
  assert.equal(draft.knowledge.rehabilitationQ1[0].occurrences[0].evidenceSourceIds[0], "reference-reeducation");
  assert.equal(draft.existing.feasibility.practical.cost, feasibility.practical.cost);
  // Aucune selection de niveau ou action sur le DOM n'est produite.
  for (const result of [benefit, discussion, questions, feasibility, bundle, structure, draft]) {
    assert.equal(Object.hasOwn(result, "selectedLevel"), false);
    assert.equal(Object.hasOwn(result, "orientationFramework"), false);
  }
  return { benefit, discussion, questions, feasibility, draft };
}

let n = 0;
function scenario(label, setup, check) {
  const result = run(setup);
  check(result);
  n++;
}
scenario("U insuffisante + applicable : Q2c seule", { autonomy: "insufficient" }, x => {
  assert.equal(x.benefit.status, "applicable");
  assert.equal(x.questions.mode, "sequential");
  assert.equal(x.questions.q2c.visible, true);
  assert.equal(x.questions.q2d.visible, false);
  assert.equal(x.draft.mainMessage.text, x.discussion.message);
  assert.match(x.draft.mainMessage.text, /programme d'APA accompagné/);
  assert.equal(x.draft.knowledge.apaQ2a[0].occurrences[0].evidenceSourceIds[0], "reference-apa");
  assert.equal(x.draft.knowledge.sharedConcepts.length, 1, "Q1 et Q2a relies mais distincts");
});
scenario("U insuffisante + Q2c oui : Q2d disponible", { autonomy: "insufficient", q2cAnswer: "yes" }, x => {
  assert.equal(x.questions.q2d.visible, true);
  assert.equal(x.questions.q2d.answerApplicable, true);
  assert.equal(x.questions.q2d.text, "Le patient accepte-t-il de suivre ce programme d'APA ?");
});
scenario("U insuffisante + Q2c non : pas de Q2d", { autonomy: "insufficient", q2cAnswer: "no" }, x => {
  assert.equal(x.questions.q2c.visible, true);
  assert.equal(x.questions.q2d.visible, false);
  assert.equal(x.questions.q2d.answerApplicable, false);
});
scenario("U partielle + Q2c non : Q2c et Q2d simultanees", { autonomy: "partial", q2cAnswer: "no" }, x => {
  assert.equal(x.questions.mode, "parallel");
  assert.equal(x.questions.q2c.visible, true);
  assert.equal(x.questions.q2d.visible, true);
  assert.equal(x.draft.mainMessage.text, x.discussion.message);
  assert.match(x.draft.mainMessage.text, /niveaux 2, 3 ou 4/);
});
scenario("U elevee : pas de Q2c/d ; libelle approuve intact", { autonomy: "high" }, x => {
  assert.equal(x.questions.mode, "none");
  assert.equal(x.questions.q2c.visible, false);
  assert.equal(x.questions.q2d.visible, false);
  assert.equal(x.draft.mainMessage.text, HIGH_TEXT);
});
scenario("U a verifier : pas de Q2c/d ni autonomie inferee", { autonomy: "check" }, x => {
  assert.equal(x.questions.q2c.visible, false);
  assert.equal(x.questions.q2d.visible, false);
  assert.match(x.draft.mainMessage.text, /Autonomie à vérifier/);
});
scenario("U absente : pas de message U invente", { autonomy: null }, x => {
  assert.equal(x.discussion.status, "unassessed");
  assert.equal(x.draft.mainMessage, null);
  assert.equal(x.questions.q2c.visible, false);
  assert.equal(x.questions.q2d.visible, false);
});
scenario("Q2a seulement conditionnelle : message A, pas de Q2c/d", { autonomy: "partial", q2aItems: [Q2A_CONDITIONAL] }, x => {
  assert.equal(x.benefit.status, "conditional");
  assert.equal(x.questions.q2c.visible, false);
  assert.equal(x.questions.q2d.visible, false);
  assert.equal(x.draft.mainMessage.text, CONDITIONAL_TEXT);
  assert.equal(x.draft.additionalMessages.some(m => m.id === "otherApaCriteria"), false);
  assert.equal(x.draft.existing.apaBenefit.toVerify[0].condition.question, "Critere documentaire a confirmer");
  assert.equal(x.draft.existing.apaBenefit.toVerify[0].evidenceSourceIds[0], "reference-conditionnelle");
});
scenario("Q2a applicable + conditionnelle : message B, incertitude conservee", {
  autonomy: "partial", q2aItems: [Q2A_APPLICABLE, Q2A_CONDITIONAL]
}, x => {
  assert.equal(x.benefit.status, "applicable");
  assert.equal(x.questions.q2c.visible, true);
  assert.equal(x.questions.q2d.visible, true);
  assert.equal(x.draft.mainMessage.text, x.discussion.message);
  assert.equal(x.draft.additionalMessages.find(m => m.id === "otherApaCriteria")?.text, OTHER_TEXT);
  assert.equal(x.draft.existing.apaBenefit.toVerify[0].condition.type, "clinicianCheck");
});
scenario("Q2a non identifiee : pas de questions, pas de faux benefice", { autonomy: "insufficient", q2aItems: [] }, x => {
  assert.equal(x.benefit.status, "noneIdentified");
  assert.equal(x.questions.q2c.visible, false);
  assert.equal(x.questions.q2d.visible, false);
  assert.equal(x.draft.mainMessage.text, x.discussion.message);
  assert.match(x.draft.mainMessage.text, /Aucun repère APA spécifique identifié/);
});
scenario("Q2a indisponible : pas de conclusion par defaut", { autonomy: "high", dataAvailable: false }, x => {
  assert.equal(x.benefit.status, "unavailable");
  assert.equal(x.questions.q2c.visible, false);
  assert.equal(x.questions.q2d.visible, false);
  assert.equal(x.draft.mainMessage, null);
});
scenario("Faisabilite connue : cout + transport + soutien, autres valeurs non inferees", {
  autonomy: "partial", engagement: {
    practical_context: { cost: "difficulty", access_transport: "difficulty", support: "available", time_organization: "not_explored" },
    preferences: { settings: ["lieu"], social_modes: ["groupe"] }
  }
}, x => {
  assert.equal(x.feasibility.practical.timeOrganization, "not_explored");
  assert.deepEqual(Array.from(x.draft.additionalMessages, m => m.id), ["cost", "transport", "support"]);
  assert.deepEqual(Array.from(x.draft.pendingMapping), ["preferenceEncadrement"]);
});
scenario("Absence de faisabilite : aucun message pratique", { autonomy: "high", engagement: null }, x => {
  assert.equal(x.feasibility.sourceAvailable, false);
  assert.equal(x.feasibility.practical.cost, null);
  assert.equal(x.draft.additionalMessages.length, 0);
});

const source = fs.readFileSync(path.join(root, "core/clinical-context/buildOrientationSynthesisDraftV1.js"), "utf8");
assert.doesNotMatch(source, /document\.|querySelector|innerHTML|\.checked\b|dispatchEvent|localStorage/);
console.log(`PASS T3.6c transversal : ${n} scenarios, modules Q2a/U/Q2c-Q2d/faisabilite/synthese executes ensemble; Q1, sources, textes et incertitudes preserves, aucune UI ni orientation automatique.`);
