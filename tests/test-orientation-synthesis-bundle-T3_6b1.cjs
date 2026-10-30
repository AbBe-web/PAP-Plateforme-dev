"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(
  path.join(root, "core/clinical-context/buildOrientationSynthesisBundleV1.js"),
  "utf8"
);
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox, { filename: "buildOrientationSynthesisBundleV1.js" });
const build = sandbox.window.buildOrientationSynthesisBundleV1;
assert.equal(typeof build, "function");

const sameId = "knowledge-42";
const rehab = {
  knowledgeItemId: sameId,
  semanticConceptId: "concept-1",
  category: "rehabilitationFactor",
  condition: { type: "clinicianCheck" },
  evidenceSourceIds: ["HAS-REF-1"],
  messages: { clinician: "Message clinique existant Q1" }
};
const apa = {
  knowledgeItemId: sameId,
  semanticConceptId: "concept-1",
  category: "apaBenefitFactor",
  condition: { type: "always" },
  evidenceSourceIds: ["HAS-REF-2"],
  messages: { clinician: "Message clinique existant Q2a" }
};
const qualification = { applicable: true, message: "Texte deja valide" };
const regulatory = { applicable: true, sources: [{ url: "https://www.legifrance.gouv.fr/" }] };
const q2a = { status: "applicable", applicable: [apa], toVerify: [{ ...apa, condition: { type: "clinicianCheck" } }] };
const discussion = { status: "unassessed", autonomy: null, branchId: null, message: "" };
const questions = { mode: "none", q2c: { visible: false }, q2d: { visible: false } };
const feasibility = { practical: { cost: "not_explored", accessTransport: null }, preferences: { activities: [] } };

const model = {
  clinician: [{ id: "orientation", items: [{ knowledgeItemId: "general-1" }] }],
  orientationByArea: {
    rehabilitation: { id: "orientation.rehabilitation", items: [rehab] },
    apa: { id: "orientation.apa", items: [apa] },
    ordinaryAP: { id: "orientation.ordinaryAP", items: [] }
  },
  orientationFunctionalContext: { globalProfile: "severe", limitations: { bySeverity: { severe: [{ dimension: "walking" }] } } },
  orientationFunctionalQualificationCueV1: qualification,
  orientationSevereFunctionalRegulatoryCueV1: regulatory,
  orientationApaBenefitContextV1: q2a,
  orientationAutonomyDiscussionContextV1: discussion,
  orientationApaQuestionsContextV1: questions,
  orientationFeasibilityContextV1: feasibility
};
const bundle = build(model);
assert.equal(bundle.status, "ready");
assert.equal(bundle.generalOrientation.length, 1);
assert.equal(bundle.byArea.rehabilitation.length, 1);
assert.equal(bundle.byArea.apa.length, 1);
assert.equal(bundle.byArea.rehabilitation[0].knowledgeItemId, sameId);
assert.equal(bundle.byArea.apa[0].knowledgeItemId, sameId);
assert.equal(bundle.byArea.rehabilitation[0].condition.type, "clinicianCheck");
assert.equal(bundle.byArea.apa[0].condition.type, "always");
assert.equal(bundle.byArea.rehabilitation[0].evidenceSourceIds[0], "HAS-REF-1");
assert.equal(bundle.byArea.apa[0].evidenceSourceIds[0], "HAS-REF-2");
assert.equal(bundle.apaBenefit, q2a);
assert.equal(bundle.apaBenefit.toVerify.length, 1);
assert.equal(bundle.functional.qualificationCue, qualification);
assert.equal(bundle.functional.severeRegulatoryMemo, regulatory);
assert.equal(bundle.autonomyDiscussion, discussion);
assert.equal(bundle.autonomyDiscussion.autonomy, null);
assert.equal(bundle.apaQuestions, questions);
assert.equal(bundle.feasibility, feasibility);
assert.equal(bundle.feasibility.practical.cost, "not_explored");
assert.equal(bundle.multiprofessionalProgramCues, null);
assert.notEqual(bundle.byArea.apa, model.orientationByArea.apa.items);
bundle.byArea.apa.push({ knowledgeItemId: "new" });
assert.equal(model.orientationByArea.apa.items.length, 1);
const blank = build(null);
assert.equal(blank.status, "unavailable");
assert.equal(blank.generalOrientation.length, 0);
assert.equal(blank.multiprofessionalProgramCues, null);
assert.equal(build({}).apaBenefit, null);
assert.equal(build({ orientationByArea: { rehabilitation: { items: null } } }).byArea.rehabilitation.length, 0);

console.log("PASS T3.6b.1 : assemblage Q1/Q2a et contextes preserve, aucune fusion clinique, message nouveau, UI ou selection de niveau.");
