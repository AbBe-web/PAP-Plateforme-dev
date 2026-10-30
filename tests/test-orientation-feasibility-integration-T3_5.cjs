"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "medecin/generateur-crc/index.html"), "utf8");
const modulePath = path.join(root, "core/clinical-context/buildOrientationFeasibilityContextV1.js");
const moduleText = fs.readFileSync(modulePath, "utf8");
const moduleScript = '<script src="../../core/clinical-context/buildOrientationFeasibilityContextV1.js"></script>';
const count = (s, needle) => s.split(needle).length - 1;
assert.equal(count(html, moduleScript), 1, "Module T3.5 charge une fois");
assert.equal(count(html, "cognitiveUxViewModel.orientationFeasibilityContextV1 ="), 1, "Raccordement unique");
const start = html.indexOf("  // T3.5: facteurs de faisabilite deja renseignes, donnees uniquement.");
const end = html.indexOf("  // T3.2: clinician-only functional inputs; no orientation decision.", start);
assert.ok(start > 0 && end > start, "Bloc T3.5 avant T3.2");
const code = html.slice(start, end);
assert.match(code, /prototypeModel\?\.engagement\s*\?\?\s*null/, "Engagement du modele existant");
assert.doesNotMatch(code, /document\.|querySelector|\.checked|orientation_framework|\.innerHTML|\.style/, "Pas de DOM ni affichage");
assert.doesNotMatch(code, /orientationQ2cAnswerV1\s*=|orientationAutonomyForDiscussionV1\s*=/, "Ne touche pas a Q2c ni U");

const data = {
  practical_context: {
    time_organization: "not_explored", cost: "difficulty",
    access_transport: "no_difficulty", support: "available"
  },
  activities_current: [{ label: "Marche" }],
  preferences: { activities: [{label:"Natation"}], social_modes: ["with_family"] }
};
const original = JSON.stringify(data);
const context = vm.createContext({
  window: {},
  prototypeModel: { engagement: data },
  cognitiveUxViewModel: { existingSection: "preserved" }
});
vm.runInContext(moduleText, context, {filename: modulePath});
vm.runInContext("const buildOrientationFeasibilityContextV1 = window.buildOrientationFeasibilityContextV1;", context);
vm.runInContext("{\n" + code + "\n}", context);
const result = context.cognitiveUxViewModel.orientationFeasibilityContextV1;
assert.ok(result);
assert.equal(result.practical.cost, "difficulty");
assert.equal(result.practical.timeOrganization, "not_explored");
assert.equal(result.practical.accessTransport, "no_difficulty");
assert.equal(result.practical.support, "available");
assert.equal(result.activitiesCurrent[0].label, "Marche");
assert.equal(result.preferences.socialModes[0], "with_family");
assert.equal(context.cognitiveUxViewModel.existingSection, "preserved");
assert.equal(JSON.stringify(data), original, "Aucune mutation des entrees");
assert.equal(Object.prototype.hasOwnProperty.call(result, "levels"), false);

// Modele incomplet : aucun facteur pratique presume, sans erreur.
context.prototypeModel = {};
vm.runInContext("{\n" + code + "\n}", context);
const missing = context.cognitiveUxViewModel.orientationFeasibilityContextV1;
assert.equal(missing.sourceAvailable, false);
assert.equal(missing.practical.cost, null);
assert.equal(missing.practical.support, null);
console.log("PASS T3.5 : faisabilite raccordee, donnees et incertitudes preservees, aucune decision ni UI.");
