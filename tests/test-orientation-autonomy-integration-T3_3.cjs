"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "medecin/generateur-crc/index.html"), "utf8");
const q2aTag = '<script src="../../core/clinical-context/buildOrientationApaBenefitContextV1.js"></script>';
const uTag = '<script src="../../core/clinical-context/buildOrientationAutonomyDiscussionContextV1.js"></script>';
assert.equal(html.split(q2aTag).length, 2, "Q2a charge une seule fois");
assert.equal(html.split(uTag).length, 2, "U x Q2a charge une seule fois");
assert.ok(html.indexOf(q2aTag) < html.indexOf(uTag), "Q2a charge avant U x Q2a");
const oldHook = "cognitiveUxViewModel.orientationApaBenefitContextV1 =";
const newHook = "cognitiveUxViewModel.orientationAutonomyDiscussionContextV1 =";
assert.equal(html.split(oldHook).length, 2, "Raccordement Q2a conserve");
assert.equal(html.split(newHook).length, 2, "Raccordement U x Q2a unique");
assert.ok(html.indexOf(oldHook) < html.indexOf(newHook), "U x Q2a apres Q2a");
assert.match(html, /prototypeModel\?\.orientation\?\.clinicianAssessment\?\.autonomy\s*\?\?\s*null/);
assert.match(html, /buildOrientationAutonomyDiscussionContextV1\(\s*orientationAutonomyForDiscussionV1,\s*orientationApaBenefitContextV1\s*\)/);

// Le contrat se comporte correctement avant meme l'existence d'une saisie U.
const context = vm.createContext({ window: {} });
for (const name of ["buildOrientationApaBenefitContextV1.js", "buildOrientationAutonomyDiscussionContextV1.js"]) {
  const location = path.join(root, "core/clinical-context", name);
  assert.ok(fs.existsSync(location), "Module manquant: " + name);
  vm.runInContext(fs.readFileSync(location, "utf8"), context, { filename: location });
}
const q2a = context.window.buildOrientationApaBenefitContextV1({ orientationFactors: [] });
const discussion = context.window.buildOrientationAutonomyDiscussionContextV1(null, q2a);
assert.equal(discussion.status, "unassessed");
assert.equal(discussion.autonomy, null);
assert.equal(discussion.branchId, null);
assert.equal(discussion.message, "");
assert.equal("selectedLevel" in discussion, false);
assert.equal("q2c" in discussion, false);
assert.equal("q2d" in discussion, false);

// Une U future explicite est lue telle quelle ; aucune deduction des limitations.
const partial = context.window.buildOrientationAutonomyDiscussionContextV1("partial", q2a);
assert.equal(partial.autonomy, "partial");
assert.equal(partial.apaEvidenceState, "noneIdentified");
assert.equal("selectedLevel" in partial, false);
console.log("PASS T3.3 : U x Q2a raccorde, U non renseignee preservee, Q2a conserve, aucun affichage ni choix automatique.");
