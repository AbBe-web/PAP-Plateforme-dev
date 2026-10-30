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
  const filename = path.join(root, relative);
  assert.ok(fs.existsSync(filename), "Manquant : " + relative);
  vm.runInContext(fs.readFileSync(filename, "utf8"), context, { filename });
}
const buildBenefit = context.window.buildOrientationApaBenefitContextV1;
const buildDiscussion = context.window.buildOrientationAutonomyDiscussionContextV1;
const buildQuestions = context.window.buildOrientationApaQuestionsContextV1;
const q2a = buildBenefit({ orientationFactors: [{
  category: "apaBenefitFactor", knowledgeItemId: "source-test",
  condition: { type: "always" }, evidenceSourceIds: ["HAS-test"]
}] });
const expected = {
  insufficient: "Un programme d'APA accompagné présente un intérêt dans cette situation. Discuter sa faisabilité et l’accord du patient.",
  partial: "Un programme d'APA présente un intérêt dans cette situation. Discuter les niveaux 2, 3 ou 4 selon les besoins d’accompagnement, la faisabilité et les préférences du patient.",
  high: "Intérêt d'un programme d'APA dans cette situation clinique. Toutefois, le niveau 2 concerne notamment les patients ne pouvant augmenter leur activité physique de façon autonome, adaptée et sûre (HAS). Si le patient en est capable, discuter les niveaux 3 ou 4."
};
for (const [autonomy, text] of Object.entries(expected)) {
  const output = buildDiscussion(autonomy, q2a);
  assert.equal(output.message, text, "Texte approuve : " + autonomy);
  assert.equal("selectedLevel" in output, false);
}
const insufficient = buildQuestions(buildDiscussion("insufficient", q2a), "yes");
const partial = buildQuestions(buildDiscussion("partial", q2a), "no");
assert.equal(insufficient.mode, "sequential");
assert.equal(insufficient.q2c.visible, true);
assert.equal(insufficient.q2d.visible, true);
assert.equal(partial.mode, "parallel");
assert.equal(partial.q2c.visible, true);
assert.equal(partial.q2d.visible, true);
for (const message of [insufficient.q2c.text, insufficient.q2d.text, partial.q2c.text, partial.q2d.text]) {
  assert.ok(message.includes("programme d'APA"), "Terminologie APA validee");
  assert.equal(message.includes("programme APA"), false);
}
for (const rel of [
  "core/clinical-context/buildOrientationAutonomyDiscussionContextV1.js",
  "core/clinical-context/buildOrientationApaQuestionsContextV1.js"
]) {
  const source = fs.readFileSync(path.join(root, rel), "utf8");
  assert.equal(source.includes("programme APA"), false, "Lexique obsolete : " + rel);
}
assert.deepEqual(Array.from(q2a.applicable[0].evidenceSourceIds), ["HAS-test"]);
console.log("PASS T3.6a : textes U et Q2c/Q2d alignes sur les formulations validees; sources et choix preserves.");
