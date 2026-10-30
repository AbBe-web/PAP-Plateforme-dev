"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const repoRoot = path.resolve(__dirname, "..");
const modulePath = path.join(
  repoRoot,
  "core",
  "clinical-context",
  "projectClinicalCognitiveUx.js"
);

if (!fs.existsSync(modulePath)) {
  throw new Error("Module introuvable : " + modulePath);
}

const context = { window: {} };
vm.runInNewContext(fs.readFileSync(modulePath, "utf8"), context, {
  filename: modulePath
});

const project = context.window.projectClinicalCognitiveUx;
assert.equal(typeof project, "function", "Fonction de projection indisponible");

function item(category, target, message, source) {
  return {
    knowledgeItemId: "test-connaissance-commune",
    semanticConceptId: "test-concept",
    clinicalFunction: "clinicianCheck",
    category,
    presentationTargets: [target],
    functionalUses: [
      { domainId: "orientation", roleId: "orientationOption", facets: [] }
    ],
    messages: { clinician: message, patient: "" },
    condition: { kind: "clinicianCheck" },
    evidenceSourceIds: [source],
    matchedContext: { pathologiesAny: ["test-pathologie"] },
    provenance: { registry: "clinicalKnowledge" }
  };
}

const q1 = item(
  "rehabilitationFactor",
  "orientation.rehabilitation",
  "Repere de readaptation",
  "HAS-TEST-Q1"
);
const q2a = item(
  "apaBenefitFactor",
  "orientation.apa",
  "Repere de benefice APA",
  "HAS-TEST-Q2A"
);
const projection = project([q1, q2a]);

assert.equal(projection.orientationByArea.rehabilitation.length, 1);
assert.equal(projection.orientationByArea.apa.length, 1);
assert.strictEqual(projection.orientationByArea.rehabilitation[0], q1);
assert.strictEqual(projection.orientationByArea.apa[0], q2a);
assert.equal(projection.orientationByArea.rehabilitation[0].evidenceSourceIds[0], "HAS-TEST-Q1");
assert.equal(projection.orientationByArea.apa[0].evidenceSourceIds[0], "HAS-TEST-Q2A");
assert.strictEqual(projection.orientationByArea.rehabilitation[0].condition, q1.condition);
assert.strictEqual(projection.orientationByArea.apa[0].matchedContext, q2a.matchedContext);

// Une connaissance pouvant viser les deux destinations doit rester accessible dans chacune.
const both = {
  ...q1,
  presentationTargets: ["orientation.rehabilitation", "orientation.apa"]
};
const bothProjection = project([both]);
assert.equal(bothProjection.orientationByArea.rehabilitation.length, 1);
assert.equal(bothProjection.orientationByArea.apa.length, 1);
assert.strictEqual(bothProjection.orientationByArea.rehabilitation[0], both);
assert.strictEqual(bothProjection.orientationByArea.apa[0], both);

// La deduplication attendue reste locale a chaque destination.
const repeated = project([q1, { ...q1 }]);
assert.equal(repeated.orientationByArea.rehabilitation.length, 1);

console.log("PASS T3.2 : Q1/Q2a distincts, metadonnees conservees, deduplication par destination.");
