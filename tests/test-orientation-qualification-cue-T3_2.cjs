'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'medecin/generateur-crc/index.html'), 'utf8');
const begin = html.indexOf('  // T3.2: clinician-only functional inputs; no orientation decision.');
const end = html.indexOf('  const patientSelectionById =', begin);
assert.ok(begin >= 0 && end > begin, 'T3.2 block not found');
const snippet = html.slice(begin, end);
assert.ok(snippet.includes('orientationFunctionalQualificationCueV1'));
assert.equal((html.match(/cognitiveUxViewModel\.orientationFunctionalQualificationCueV1\s*=/g) || []).length, 1);
assert.ok(!/orientation_framework|\.autonomy\s*=|\.functionalProfile\s*=|\.checked\s*=/.test(snippet),
  'No automatic decision or DOM selection allowed');

const source = fs.readFileSync(path.join(root, 'core/clinical-context/functional-orientation-profile.js'), 'utf8');
function check(globalProfile, functionalLimitations, expected, expectedCount) {
  const sandbox = {
    window: {},
    prototypeModel: {activityConsiderations: {functionalProfile: globalProfile, functionalLimitations}},
    cognitiveUxViewModel: {},
  };
  vm.runInNewContext(source, sandbox);
  // The helper is already registered in window by the existing source.
  sandbox.buildFunctionalOrientationProfile = sandbox.window.buildFunctionalOrientationProfile;
  assert.equal(typeof sandbox.buildFunctionalOrientationProfile, 'function');
  vm.runInNewContext(snippet, sandbox);
  const cue = sandbox.cognitiveUxViewModel.orientationFunctionalQualificationCueV1;
  assert.equal(cue.applicable, expected);
  assert.equal(cue.moderateOrSevereCount, expectedCount);
  assert.equal(cue.type, 'clinicianCheck');
  assert.equal(sandbox.cognitiveUxViewModel.orientationFunctionalContext.globalProfile, globalProfile);
  assert.ok(!Object.hasOwn(sandbox.cognitiveUxViewModel, 'selectedLevel'));
}
const two = {locomotor: {neuromuscular: 'moderate', osteoarticular: 'severe'}};
check(null, two, true, 2);
check(null, {pain: 'severe'}, false, 1);
check(null, {locomotor: {neuromuscular: 'none'}}, false, 0);
check('none', two, false, 2);
check('severe', two, false, 2);
check(null, null, false, 0);
check(null, {locomotor: {neuromuscular: 'invalid', osteoarticular: 'moderate'}}, false, 1);
console.log('PASS T3.2 : repere qualification conditionnel, profil clinique conserve, aucun niveau deduit.');
