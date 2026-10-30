"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const sourcePath = path.resolve(__dirname,
  "../core/clinical-context/buildOrientationApaBenefitContextV1.js");
assert.ok(fs.existsSync(sourcePath), "Module T3.3 manquant");
const context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(sourcePath, "utf8"), context, {
  filename: sourcePath
});
const build = context.window.buildOrientationApaBenefitContextV1;
assert.equal(typeof build, "function");

const empty = build({ orientationFactors: [] });
assert.equal(empty.status, "noneIdentified");
assert.equal(empty.hasApplicable, false);
assert.equal(empty.hasToVerify, false);

const applicable = {
  knowledgeItemId: "q2a-one",
  category: "apaBenefitFactor",
  clinicalFunction: "orientationFactor",
  condition: { type: "always" },
  evidenceSourceIds: ["has-001"],
  presentationTargets: ["orientation.apa"],
  messages: { clinician: "Repère APA" },
  matchedContext: { pathologiesAny: ["arthrose"] }
};
const conditional = {
  knowledgeItemId: "q2a-two",
  category: "apaBenefitFactor",
  condition: { type: "clinicianCheck", question: "Critère à vérifier" },
  evidenceSourceIds: ["has-002"],
  presentationTargets: ["orientation.apa"]
};
const q1 = {
  knowledgeItemId: "kiné",
  category: "rehabilitationFactor",
  condition: { type: "always" }
};
const source = {
  orientationFactors: [applicable, conditional, q1],
  prescriptionGuidance: [applicable]
};
const mixed = build(source);
assert.equal(mixed.status, "applicable");
assert.equal(mixed.hasApplicable, true);
assert.equal(mixed.hasToVerify, true);
assert.equal(mixed.applicable.length, 1, "Ne pas dupliquer la même instance");
assert.equal(mixed.toVerify.length, 1, "Ne pas masquer les conditions à vérifier");
assert.equal(mixed.applicable[0].knowledgeItemId, "q2a-one");
assert.deepEqual(Array.from(mixed.applicable[0].evidenceSourceIds), ["has-001"]);
assert.equal(mixed.toVerify[0].condition.question, "Critère à vérifier");
assert.equal(mixed.applicable[0].matchedContext, applicable.matchedContext);
assert.equal(source.orientationFactors[0].conditionStatus, undefined,
  "Ne pas modifier les objets cliniques en entrée");

const sameIdDifferentUse = {
  ...applicable,
  clinicalFunction: "secondClinicalUse",
  evidenceSourceIds: ["has-003"]
};
const preserved = build({ orientationFactors: [applicable, sameIdDifferentUse] });
assert.equal(preserved.applicable.length, 2,
  "Ne pas fusionner deux usages cliniques différents partageant un identifiant");

const onlyConditional = build({ orientationFactors: [conditional] });
assert.equal(onlyConditional.status, "conditional");
assert.equal(onlyConditional.hasApplicable, false);
assert.equal(onlyConditional.hasToVerify, true);

const unclassified = build({ orientationFactors: [{
  ...conditional, condition: { type: "unknown" }
}] });
assert.equal(unclassified.status, "unclassified");
assert.equal(unclassified.applicable.length, 0);

assert.equal(build(null).status, "unavailable",
  "Une absence de contexte ne doit pas être assimilée à une absence de repère");
console.log("PASS T3.3 : Q2a applicable/conditionnel/non identifie, coexistence, sources et conditions conservees, aucune decision de niveau.");
