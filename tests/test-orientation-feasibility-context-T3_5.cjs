"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const file = path.resolve(__dirname, "../core/clinical-context/buildOrientationFeasibilityContextV1.js");
const source = fs.readFileSync(file, "utf8");
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox, { filename: file });
const build = sandbox.window.buildOrientationFeasibilityContextV1;
assert.equal(typeof build, "function", "Module exposé en navigateur");

// Absence de modèle : ne pas inventer de données.
const missing = build(null);
assert.equal(missing.sourceAvailable, false);
assert.equal(missing.practical.cost, null);
assert.equal(missing.practical.support, null);
assert.equal(missing.preferences.intensity, null);
assert.equal(missing.activitiesCurrent.length, 0);

const current = { label: "Marche", type: "walking" };
const choice = { label: "Natation", type: "swimming" };
const engagement = {
  practical_context: {
    time_organization: "not_explored",
    cost: "difficulty",
    access_transport: "no_difficulty",
    support: "limited_or_absent"
  },
  activities_current: [current],
  preferences: {
    activities: [choice],
    intensity: "moderate",
    settings: ["outdoor"],
    social_modes: ["with_family"]
  }
};
const original = JSON.stringify(engagement);
const result = build(engagement);
assert.equal(result.sourceAvailable, true);
assert.equal(result.practical.timeOrganization, "not_explored");
assert.equal(result.practical.cost, "difficulty");
assert.equal(result.practical.accessTransport, "no_difficulty");
assert.equal(result.practical.support, "limited_or_absent");
assert.equal(result.preferences.intensity, "moderate");
assert.equal(result.preferences.settings[0], "outdoor");
assert.equal(result.preferences.socialModes[0], "with_family");
assert.equal(result.preferences.activities[0].label, "Natation");
assert.equal(result.activitiesCurrent[0].label, "Marche");
assert.equal(result.invalidValues.length, 0);
assert.equal(JSON.stringify(engagement), original, "Entrée inchangée");
result.activitiesCurrent[0].label = "Autre";
result.preferences.activities[0].label = "Autre";
assert.equal(current.label, "Marche", "Aucune mutation des activités actuelles");
assert.equal(choice.label, "Natation", "Aucune mutation des préférences");

// L'absence de réponse ne devient jamais "no_difficulty" ou "not_explored".
const notFilled = build({ practical_context: {} });
for (const value of Object.values(notFilled.practical)) assert.equal(value, null);
const support = build({ practical_context: { support: "available" } });
assert.equal(support.practical.support, "available");

// Une valeur imprévue est tracée, non interprétée.
const unexpected = build({ practical_context: { cost: "free_for_all" } });
assert.equal(unexpected.practical.cost, null);
assert.equal(unexpected.invalidValues.length, 1);
assert.equal(unexpected.invalidValues[0].field, "practical_context.cost");
assert.equal(unexpected.invalidValues[0].value, "free_for_all");

// Ce contexte est descriptif, sans messages, U, restrictions ou cadres proposés.
for (const forbidden of ["autonomy", "U", "level", "levels", "orientation", "message", "recommendedFramework"]) {
  assert.equal(Object.prototype.hasOwnProperty.call(result, forbidden), false, "Propriété interdite: " + forbidden);
}
console.log("PASS T3.5 : faisabilite descriptive, null/non explore distincts, preferences et activites conservees, aucune orientation automatique.");
