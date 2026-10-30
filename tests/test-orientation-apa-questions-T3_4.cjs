"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const context = vm.createContext({ window: {} });
for (const relative of [
  "core/clinical-context/buildOrientationApaBenefitContextV1.js",
  "core/clinical-context/buildOrientationAutonomyDiscussionContextV1.js",
  "core/clinical-context/buildOrientationApaQuestionsContextV1.js"
]) {
  const file = path.join(root, relative);
  assert.ok(fs.existsSync(file), "Module manquant: " + relative);
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}

const buildQ2a = context.window.buildOrientationApaBenefitContextV1;
const buildDiscussion = context.window.buildOrientationAutonomyDiscussionContextV1;
const buildQuestions = context.window.buildOrientationApaQuestionsContextV1;
assert.equal(typeof buildQuestions, "function");

const applicable = { knowledgeItemId: "q2a-app", category: "apaBenefitFactor",
  condition: { type: "always" }, evidenceSourceIds: ["has-1"] };
const pending = { knowledgeItemId: "q2a-pending", category: "apaBenefitFactor",
  condition: { type: "clinicianCheck", question: "Critere a verifier" }, evidenceSourceIds: ["has-2"] };
const qa = buildQ2a({ orientationFactors: [applicable] });
const qc = buildQ2a({ orientationFactors: [pending] });
const qn = buildQ2a({ orientationFactors: [] });
const qm = buildQ2a({ orientationFactors: [applicable, pending] });
const contexts = [
  ["applicable", qa], ["conditional", qc], ["noneIdentified", qn],
  ["unavailable", null], ["unclassified", { status: "unclassified" }]
];

function make(u, q2a, q2cAnswer) {
  return buildQuestions(buildDiscussion(u, q2a), q2cAnswer);
}

// Matrice des quatre autonomies et cinq etats Q2a.
for (const u of ["insufficient", "partial", "high", "check"]) {
  for (const [state, q2a] of contexts) {
    for (const q2cAnswer of [null, "yes", "no", "discuss"]) {
      const output = make(u, q2a, q2cAnswer);
      const shouldShowQ2c = state === "applicable" && (u === "insufficient" || u === "partial");
      const shouldShowQ2d = state === "applicable" &&
        (u === "partial" || (u === "insufficient" && q2cAnswer === "yes"));
      assert.equal(output.q2c.visible, shouldShowQ2c, `${u}/${state}/${q2cAnswer}: Q2c`);
      assert.equal(output.q2d.visible, shouldShowQ2d, `${u}/${state}/${q2cAnswer}: Q2d`);
      assert.equal(output.q2d.answerApplicable, shouldShowQ2d);
      assert.equal(output.mode, shouldShowQ2c ? (u === "partial" ? "parallel" : "sequential") : "none");
      assert.equal("selectedLevel" in output, false);
      assert.equal("orientationFramework" in output, false);
      assert.equal("autonomy" in output, false, "ne calcule pas U");
      assert.equal(output.q2c.visible, output.q2c.text !== null);
      assert.equal(output.q2d.visible, output.q2d.text !== null);
    }
  }
}

// Formulations approuvees par le medecin : aucun texte additionnel.
const insufficient = make("insufficient", qa, "yes");
assert.equal(insufficient.q2c.text,
  "Le patient paraît-il suffisamment motivé et en mesure de suivre régulièrement un programme d'APA jusqu'à son terme ?");
assert.equal(insufficient.q2d.text, "Le patient accepte-t-il de suivre ce programme d'APA ?");
const partial = make("partial", qa, "no");
assert.equal(partial.q2d.visible, true, "U partielle : Q2d meme si Q2c non");
assert.equal(partial.q2d.text,
  "Si un programme d'APA est proposé au patient, le patient accepterait-il de le suivre ?");

// Ne pas reutiliser une ancienne reponse Q2d quand Q2c cesse d'etre oui.
assert.equal(make("insufficient", qa, "yes").q2d.answerApplicable, true);
assert.equal(make("insufficient", qa, "no").q2d.answerApplicable, false);
assert.equal(make("insufficient", qa, null).q2d.answerApplicable, false);

// Les conditions encore a verifier restent signalees en cas de repere mixte.
const mixed = make("partial", qm, "yes");
assert.equal(mixed.q2c.visible, true);
assert.equal(mixed.hasOtherApaConditionsToVerify, true);
assert.equal(qm.toVerify[0].evidenceSourceIds[0], "has-2");
assert.equal(qm.applicable[0].evidenceSourceIds[0], "has-1");

// U non renseignee ou invalide : aucune question et aucune reponse supposee.
for (const invalid of [null, "invalid", ""]) {
  const out = make(invalid, qa, "yes");
  assert.equal(out.q2c.visible, false);
  assert.equal(out.q2d.visible, false);
}
assert.equal(buildQuestions(null, "yes").status, "unavailable");
assert.equal(applicable.condition.type, "always");
console.log("PASS T3.4 : Q2c/Q2d conditionnelles, U insuffisante sequentielle, U partielle simultanee, incertitudes et choix medicaux preserves.");
