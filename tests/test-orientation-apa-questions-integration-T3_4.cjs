"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "medecin", "generateur-crc", "index.html"), "utf8");
const uScript = '<script src="../../core/clinical-context/buildOrientationAutonomyDiscussionContextV1.js"></script>';
const qScript = '<script src="../../core/clinical-context/buildOrientationApaQuestionsContextV1.js"></script>';
const count = (t) => html.split(t).length - 1;
assert.equal(count(uScript), 1, "Module T3.3 charge une fois");
assert.equal(count(qScript), 1, "Module T3.4 charge une fois");
assert.ok(html.indexOf(uScript) < html.indexOf(qScript), "T3.3 doit charger avant T3.4");
const uHook = "cognitiveUxViewModel.orientationAutonomyDiscussionContextV1 =";
const qHook = "cognitiveUxViewModel.orientationApaQuestionsContextV1 =";
assert.equal(count(uHook), 1, "Contexte U x Q2a intact");
assert.equal(count(qHook), 1, "Contexte Q2c/Q2d raccorde une seule fois");
assert.ok(html.indexOf(uHook) < html.indexOf(qHook));
assert.ok(html.indexOf(qHook) < html.indexOf("// T3.2: clinician-only functional inputs; no orientation decision."));
assert.match(html, /const\s+orientationQ2cAnswerV1\s*=\s*null\s*;/);
assert.match(html, /buildOrientationApaQuestionsContextV1\(\s*orientationAutonomyDiscussionContextV1,\s*orientationQ2cAnswerV1\s*\)/);
const context = vm.createContext({window: {}});
for (const relative of [
  "buildOrientationApaBenefitContextV1.js",
  "buildOrientationAutonomyDiscussionContextV1.js",
  "buildOrientationApaQuestionsContextV1.js"
]) {
  const file = path.join(root, "core", "clinical-context", relative);
  assert.ok(fs.existsSync(file), "Module absent: " + relative);
  vm.runInContext(fs.readFileSync(file, "utf8"), context, {filename: file});
}
const makeApa = context.window.buildOrientationApaBenefitContextV1;
const makeDiscussion = context.window.buildOrientationAutonomyDiscussionContextV1;
const makeQuestions = context.window.buildOrientationApaQuestionsContextV1;
const applicable = makeApa({orientationFactors:[{
  knowledgeItemId: "apa-test", category: "apaBenefitFactor",
  condition: {type:"always"}, evidenceSourceIds:["source-test"]
}]});
// Situation ACTUELLE : aucune saisie U ni Q2c -> aucune question visible.
const unassessed = makeQuestions(makeDiscussion(null, applicable), null);
assert.equal(unassessed.q2c.visible, false);
assert.equal(unassessed.q2d.visible, false);
// Comportements FUTURS, testes uniquement sur le module pur.
const insufficient = makeDiscussion("insufficient", applicable);
const partial = makeDiscussion("partial", applicable);
assert.equal(makeQuestions(insufficient, null).q2c.visible, true);
assert.equal(makeQuestions(insufficient, null).q2d.visible, false);
assert.equal(makeQuestions(insufficient, "yes").q2d.visible, true);
assert.equal(makeQuestions(partial, "no").q2d.visible, true);
for (const output of [unassessed, makeQuestions(insufficient, "yes"), makeQuestions(partial, "no")]) {
  assert.equal("selectedLevel" in output, false);
  assert.equal("orientationFramework" in output, false);
}
console.log("PASS T3.4 : questions raccordees au ViewModel, U/Q2c non renseignees, branches conservees, aucune decision automatique.");
