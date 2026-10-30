'use strict';
// Guide PAP T3.2 - focused tests of the regulatory memo and its trigger.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'medecin/generateur-crc/index.html'), 'utf8');
const marker = '  // T3.2: severe functional profile regulatory memo, data only.';
const start = html.indexOf(marker);
const end = html.indexOf('  const patientSelectionById =', start);
assert.ok(start >= 0 && end > start, 'Regulatory memo code not found');
assert.equal(html.split('cognitiveUxViewModel.orientationSevereFunctionalRegulatoryCueV1 =').length - 1, 1);
const code = html.slice(start, end);
assert.ok(!/document\.|\.checked\s*=(?!=)|orientation_framework|\.globalProfile\s*=(?!=)|\.autonomy\s*=(?!=)/.test(code),
  'Memo must not mutate DOM, global profile, clinician autonomy or levels');

function evaluate(globalProfile, initialSelection) {
  const viewModel = {selectedLevels: [...initialSelection]};
  const functional = {globalProfile, limitations: {bySeverity: {severe: [], moderate: []}}};
  const ctx = {cognitiveUxViewModel: viewModel, orientationFunctionalContextV1: functional};
  vm.runInNewContext(code, ctx);
  assert.deepEqual(viewModel.selectedLevels, initialSelection, 'Selections must not change');
  assert.equal(functional.globalProfile, globalProfile, 'Global profile must not change');
  return viewModel.orientationSevereFunctionalRegulatoryCueV1;
}
const severeNoApa = evaluate('severe', []);
assert.equal(severeNoApa.applicable, true, 'Severe profile must trigger even without APA selection');
assert.equal(evaluate('severe', ['rehabilitation']).applicable, true);
assert.equal(evaluate('severe', ['apa']).applicable, true);
for (const value of [null, 'none', 'minimal', 'moderate']) {
  assert.equal(evaluate(value, []).applicable, false, `No automatic severity for ${value}`);
}
assert.equal(severeNoApa.type, 'regulatoryReminder');
assert.equal(severeNoApa.lines.length, 3);
assert.match(severeNoApa.lines[0].text, /Kinésithérapeutes/);
assert.match(severeNoApa.lines[0].text, /ergothérapeutes et psychomotriciens/);
assert.match(severeNoApa.lines[1].text, /Enseignants en APA/);
assert.match(severeNoApa.lines[1].text, /autonomie suffisante/);
assert.match(severeNoApa.lines[1].text, /atténuation des limitations/);
assert.match(severeNoApa.lines[2].text, /Non concernés/);
assert.equal(severeNoApa.sources.length, 2);
assert.match(severeNoApa.sources[0].url, /legifrance\.gouv\.fr/);
assert.match(severeNoApa.sources[1].url, /intervenants-par-limitation-fonctionnelle\.pdf/);
assert.ok(!Object.hasOwn(severeNoApa, 'selectedLevel'));
console.log('PASS T3.2 : rappel réglementaire sévère indépendant d’APA/U/niveaux, 3 lignes et sources préservées.');
