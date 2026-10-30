"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const ctx = vm.createContext({ window: {} });
for (const rel of [
  "../core/clinical-context/buildOrientationApaBenefitContextV1.js",
  "../core/clinical-context/buildOrientationAutonomyDiscussionContextV1.js"
]) {
  const filename = path.resolve(__dirname, rel);
  assert.ok(fs.existsSync(filename), "Module requis manquant : " + rel);
  vm.runInContext(fs.readFileSync(filename, "utf8"), ctx, { filename });
}
const q2aBuild = ctx.window.buildOrientationApaBenefitContextV1;
const build = ctx.window.buildOrientationAutonomyDiscussionContextV1;
assert.equal(typeof build, "function");

const applicableItem = {
  knowledgeItemId: "q2a-app", category: "apaBenefitFactor",
  condition: { type: "always" }, evidenceSourceIds: ["has-1"]
};
const conditionalItem = {
  knowledgeItemId: "q2a-cond", category: "apaBenefitFactor",
  condition: { type: "clinicianCheck", question: "Critère à confirmer" },
  evidenceSourceIds: ["has-2"]
};
const makeQ2a = items => q2aBuild({ orientationFactors: items });
const q2aApplicable = makeQ2a([applicableItem]);
const q2aConditional = makeQ2a([conditionalItem]);
const q2aNone = makeQ2a([]);
const q2aMixed = makeQ2a([applicableItem, conditionalItem]);

// Couverture de la matrice U × Q2a, y compris branches d'incertitude.
for (const u of ["insufficient", "partial", "high", "check"]) {
  for (const [label, source] of [
    ["applicable", q2aApplicable], ["conditional", q2aConditional],
    ["noneIdentified", q2aNone], ["unavailable", null],
    ["unclassified", { status: "unclassified" }]
  ]) {
    const answer = build(u, source);
    assert.equal(answer.status, "ready", u + "/" + label);
    assert.equal(answer.autonomy, u);
    assert.equal(answer.apaEvidenceState, label);
    assert.equal(answer.branchId, `u.${u}.q2a.${label}`);
    assert.ok(answer.message.length > 20);
    assert.equal("selectedLevel" in answer, false);
    assert.equal("orientationFramework" in answer, false);
    assert.equal("q2c" in answer, false, "Q2c/Q2d réservées à T3.4");
    assert.equal("q2d" in answer, false);
  }
}

const partial = build("partial", q2aApplicable);
assert.match(partial.message, /niveaux 2, 3 ou 4/);
const insufficient = build("insufficient", q2aApplicable);
assert.match(insufficient.message, /programme d'APA accompagné/);
const noBenefit = build("insufficient", q2aNone);
assert.match(noBenefit.message, /Aucun repère APA spécifique identifié/);
assert.match(noBenefit.message, /niveau 3 si une pratique encadrée est possible en sécurité/);
const high = build("high", q2aApplicable);
assert.match(high.message, /niveaux 3 ou 4/);
assert.equal(build(null, q2aApplicable).status, "unassessed");
assert.equal(build("bad", q2aApplicable).status, "invalidAutonomy");
assert.equal(build("check", null).apaEvidenceState, "unavailable");
assert.doesNotMatch(build("check", null).message, /aucun repère APA/i);

const mixed = build("partial", q2aMixed);
assert.equal(mixed.apaEvidenceState, "applicable");
assert.equal(mixed.hasOtherApaConditionsToVerify, true);
assert.match(mixed.caution, /critères cliniques à vérifier/);
assert.equal(q2aMixed.toVerify[0].condition.question, "Critère à confirmer");
assert.equal(q2aMixed.toVerify[0].evidenceSourceIds[0], "has-2");
assert.equal(applicableItem.evidenceSourceIds[0], "has-1");

console.log("PASS T3.3 : matrice U x Q2a, incertitudes preservées, messages non bloquants, aucune selection ni Q2c/Q2d automatiques.");
