'use strict';

// Guide PAP / Orientation T3.2 - targeted functional context tests.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const indexText = fs.readFileSync(
  path.join(root, 'medecin/generateur-crc/index.html'), 'utf8'
);
const expected = [
  'const orientationFunctionalContextV1 =',
  'cognitiveUxViewModel.orientationFunctionalContext =',
  'prototypeModel?.activityConsiderations?.functionalProfile ?? null',
  'buildFunctionalOrientationProfile('
];
for (const term of expected) {
  assert.ok(indexText.includes(term), 'Missing integration term: ' + term);
}
assert.equal(
  indexText.split('cognitiveUxViewModel.orientationFunctionalContext =').length - 1,
  1,
  'Functional context should be attached once'
);
const modelPos = indexText.indexOf('  const cognitiveUxViewModel =');
const integrationPos = indexText.indexOf('  const orientationFunctionalContextV1 =');
// Only find the patient-selection statement AFTER this integration.
const patientSelectionPos = indexText.indexOf('  const patientSelectionById =', integrationPos);
assert.ok(modelPos >= 0 && integrationPos > modelPos && patientSelectionPos > integrationPos,
  'Functional context must appear between the ViewModel and patient-selection blocks');

const functionalCode = fs.readFileSync(
  path.join(root, 'core/clinical-context/functional-orientation-profile.js'), 'utf8'
);
const sandbox = { window: {} };
vm.runInNewContext(functionalCode, sandbox, { filename: 'functional-orientation-profile.js' });
const build = sandbox.window.buildFunctionalOrientationProfile;
assert.equal(typeof build, 'function');
const missing = build({ functionalLimitations: null });
assert.equal(missing.evaluatedCount, 0);
assert.equal(missing.limitationCount, 0);
assert.equal(missing.bySeverity.severe.length, 0);
const sample = build({ functionalLimitations: {
  locomotor: { neuromuscular: 'severe', osteoarticular: 'moderate', endurance: 'none', strength: null, walking: 'minimal' },
  cerebral: { cognitive: 'invalid' },
  sensory: { hearing: 'none' },
  pain: 'moderate'
}});
assert.equal(sample.bySeverity.severe.length, 1);
assert.equal(sample.bySeverity.moderate.length, 2);
assert.equal(sample.bySeverity.minimal.length, 1);
assert.equal(sample.bySeverity.none.length, 2);
assert.equal(sample.evaluatedCount, 6);
assert.equal(sample.limitationCount, 4);
assert.equal(sample.invalidValues.length, 1);

const inserted = indexText.slice(integrationPos, patientSelectionPos);
assert.ok(!/orientation_framework|\.autonomy\s*=|selectedLevel|levelToSelect/.test(inserted),
  'Must not set a level or infer clinician autonomy');
console.log('PASS T3.2 : contexte fonctionnel raccordé, sévérités et none/null préservés, aucune décision automatique.');
