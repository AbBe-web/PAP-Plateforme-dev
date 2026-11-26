'use strict';
// Guide PAP 4a — tests de caractérisation. Node >= 20 ; aucune dépendance.
// Usage depuis la racine : node tests/test-prescription-renfo-reference.cjs --baseline
// Sans --baseline : protections métier et parité des renderers seulement.
// Le mode --baseline décrit les dépendances historiques à remplacer, pas à pérenniser.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const baseline = process.argv.includes('--baseline');
const canonical = !baseline && !process.argv.includes('--legacy');
const paths = ['core/prescriptionModel.js','core/prescriptionUtils.js','core/prescriptionSync.js','core/prescriptionRenderer.js','medecin/generateur-crc/index.html','medecin/generateur-crc/reset.js'];
const source = Object.fromEntries(paths.map(p=>[p,fs.readFileSync(path.join(root,p),'utf8').replace(/\r\n/g,'\n')]));
const html = source[paths[4]];
const expectedHashes = {
  "core/prescriptionModel.js": "0a909ea07afe999ae6bc864746c4a4c82d8c9f47f687ac4baf67c9355f2b6641",
  "core/prescriptionUtils.js": "4ad4b8c48b9109967a4653c2e1610c51f42741284fb925b7cddfef5b3b816e6d",
  "core/prescriptionSync.js": "3cd66bf744a8e1d618c6000f578043a590e80d9e7cea51bf38a025e2148be394",
  "core/prescriptionRenderer.js": "d8744119041419ff268f8a6bbd8d44e2915faa5cb03e3951e05fe53342a01599",
  "medecin/generateur-crc/index.html": "a1752a3ca59d753b294d7b1ffe5dade763d951d0591e75fc83af6ba1d7183084",
  "medecin/generateur-crc/reset.js": "287f8c294778b807a78676eda50cf2564454bdfa2ab00d50645285fac22f68fa"
};
let pass=0, fail=0;
function test(label,fn){try{fn();pass++;console.log('OK   '+label);}catch(e){fail++;console.error('FAIL '+label+'\n'+e.stack);}}
function sha(s){return crypto.createHash('sha256').update(s,'utf8').digest('hex');}
function hashSource(p){return sha(p===paths[0]?source[p].replace(/\n+$/,'\n'):source[p]);}
if(baseline){
  for(const p of paths) test('Identité source '+p,()=>assert.equal(hashSource(p),expectedHashes[p]));
  if(fail){console.error('Base différente : ne pas interpréter les résultats comme une référence 357e8e2.');process.exit(1);}
}
for(const p of paths.filter(p=>p.endsWith('.js'))) test('Syntaxe '+p,()=>new vm.Script(source[p],{filename:p}));
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)].filter(m=>! /\bsrc\s*=/.test(m[1])&&!/\btype\s*=\s*["'](?:application\/json|application\/ld\+json)["']/i.test(m[1]));
test('Syntaxe des scripts inline ('+scripts.length+')',()=>{assert.ok(scripts.length);scripts.forEach((m,i)=>new vm.Script(m[2],{filename:'index-inline-'+(i+1)}));});
const fields = new Map();
const document = {getElementById:id=>fields.has(id)?{value:fields.get(id)}:null,querySelector:sel=>fields.has(sel)?{value:fields.get(sel)}:null,querySelectorAll:sel=>sel.startsWith('#papRenfoZones')?(fields.get('zones')||[]).map(value=>({value})):[]};
const c=vm.createContext({structuredClone,document,window:{},console});
for(const p of paths.slice(0,4))vm.runInContext(source[p],c,{filename:p});
const run=s=>vm.runInContext(s,c);
const json=x=>JSON.parse(JSON.stringify(x));
const create=()=>run('createPrescriptionModel()');
const f=(name,...args)=>c[name](...args);
const value=(s,v)=>({source:s,valeur:String(v)});
function newRenfo(){
  if(!canonical)return {etat:'non_renseigne',general:{frequence:'2',duree:'20',intensite:'moderee',zones:['MI']},programmeCandidat:[],syntheseRetenue:false,seances:[],prochainIdSeance:1};
  const r=create().renforcement;f('papRenfoModifierSeance',r,r.seances[0].id,{frequence:value('seance',2),duree:value('seance',20),intensite:'moderee',zones:['MI']});return r;
}
function session(r=newRenfo(),changes={}){const s=canonical?r.seances[0]:f('papRenfoCreerSeance',r);f('papRenfoModifierSeance',r,s.id,{frequence:value('seance',2),duree:value('seance',20),...changes});return [r,s];}
const dyn=(d={})=>({id:'RM-01',dosage:{mode:'dyn',series:'2',reps:'8',repDuration:'3',rest:'30',...d}});
const iso=(d={})=>({id:'RM-32',dosage:{mode:'iso',series:'1',hold:'20',...d}});
const circuit={format:'circuit',rounds:'2',restEx:'15',restRounds:'40',warmup:'1',cooldown:'2'};
const calc=(r,s)=>f('papRenfoCalculDuree',r,s.id);
const mutate=(r,s,changes)=>f('papRenfoModifierSeance',r,s.id,changes);
test('Modèles indépendants / reset',()=>{const a=create(),b=create();a.renforcement.general.x=1;a.sedentarite.actions.push('pause_debout');assert.deepEqual(json(b.renforcement.general),{});assert.equal(b.sedentarite.actions.length,0);assert.deepEqual(json(f('resetPrescriptionModel')),json(b));});
test('Identifiants distincts et séance 2 vierge',()=>{const [r,s]=session();const t=f('papRenfoCreerSeance',r);assert.notEqual(s.id,t.id);assert.equal(t.exercices.length,0);assert.equal(f('papRenfoValeurSeance',r,t.id,'frequence').valeur,'');assert.equal(f('papRenfoValeurSeance',r,t.id,'duree').valeur,'');mutate(r,t,{zones:['MS'],dosageCommun:{series:'3'}});assert.notDeepEqual(json(s.zones),json(t.zones));assert.deepEqual(json(s.dosageCommun),{});});
test('Mutation défensive et champs interdits',()=>{const [r,s]=session();const exercises=[dyn()];mutate(r,s,{exercices:exercises});exercises[0].dosage.reps='99';assert.equal(s.exercices[0].dosage.reps,'8');assert.throws(()=>mutate(r,s,{id:'autre'}));assert.throws(()=>mutate(r,s,{statut:'retenue'}));});
test('Circuit exact : tours, séries, transitions, repos, échauffement et retour',()=>{const [r,s]=session(newRenfo(),{organisation:circuit,exercices:[dyn(),iso()]});const v=calc(r,s);assert.deepEqual(json(v.parts),{warmup:60,work:136,series:60,exercises:30,rounds:40,cooldown:120});assert.equal(v.total,446);assert.equal(v.complete,true);assert.equal(v.estimated,false);});
test('Calcul estimé : 3 s/répétition, aucune dose écrite',()=>{const e=dyn({repDuration:''});const [r,s]=session(newRenfo(),{organisation:{format:'classique'},exercices:[e]});const before=json(r);const v=calc(r,s);assert.equal(v.total,78);assert.equal(v.complete,true);assert.equal(v.estimated,true);assert.deepEqual(json(r),before);assert.equal(f('papRenfoRetenirSeance',r,s.id).retenue,true);assert.equal(f('papRenfoDureeRetenue',r,s.id),null);assert.equal(s.duree.valeur,'20');});
test('Durée partielle : repos absent distinct de zéro',()=>{const [r,s]=session(newRenfo(),{organisation:{format:'classique'},exercices:[dyn({rest:''})]});assert.equal(calc(r,s).complete,false);mutate(r,s,{exercices:[dyn({rest:'0'})]});assert.equal(calc(r,s).complete,true);assert.equal(calc(r,s).total,48);});
test('Durée complète retenue explicitement, souhaitée conservée, modification invalide',()=>{const [r,s]=session(newRenfo(),{organisation:circuit,exercices:[dyn(),iso()]});assert.equal(f('papRenfoDureeRetenue',r,s.id),null);assert.equal(f('papRenfoRetenirSeance',r,s.id).retenue,true);assert.equal(f('papRenfoDureeRetenue',r,s.id),446);assert.equal(s.duree.valeur,'20');mutate(r,s,{exercices:[dyn({reps:'9'}),iso()]});assert.equal(s.statut,'brouillon');assert.equal(f('papRenfoDureeRetenue',r,s.id),null);});
test('Durée souhaitée facultative seulement si calcul complet non estimé',()=>{const [r,s]=session(newRenfo(),{duree:value('seance',''),organisation:{format:'classique'},exercices:[dyn()]});assert.equal(f('papRenfoVerifierSeance',r,s.id).ok,true);mutate(r,s,{exercices:[dyn({repDuration:''})]});assert.equal(f('papRenfoVerifierSeance',r,s.id).ok,false);});
test('Ancienne durée par série non convertie en durée par répétition',()=>{const [r,s]=session(newRenfo(),{organisation:{format:'classique'},exercices:[{id:'RM-01',dosage:{mode:'dyn',series:'2',reps:'8',workDuration:'25',rest:'0'}}]});assert.equal(calc(r,s).total,50);assert.equal(calc(r,s).estimated,false);});
test('Latéralité : explicite par côté / total / ambiguïté',()=>{const [r,s]=session(newRenfo(),{organisation:{format:'classique'},exercices:[{id:'RM-35',dosage:{mode:'iso',series:'1',hold:'20',timeSides:'each'}}]});assert.equal(calc(r,s).total,40);assert.equal(calc(r,s).estimated,false);mutate(r,s,{exercices:[{id:'RM-35',dosage:{mode:'iso',series:'1',hold:'20',timeSides:'total'}}]});assert.equal(calc(r,s).total,20);mutate(r,s,{exercices:[{id:'RM-35',dosage:{mode:'iso',series:'1',hold:'20'}}]});assert.equal(calc(r,s).estimated,true);});
test('Repos individuel avant exercice prioritaire, zéro explicite',()=>{const [r,s]=session(newRenfo(),{organisation:circuit,exercices:[dyn({restAfter:'0'}),iso()]});assert.equal(calc(r,s).parts.exercises,0);assert.equal(calc(r,s).total,416);});
test('Fréquence invalide : pas de retenue',()=>{const [r,s]=session();for(const v of ['','0','-1','2.5','11','abc']){mutate(r,s,{frequence:value('seance',v)});assert.equal(f('papRenfoRetenirSeance',r,s.id).retenue,false,v);}});
test('Programme et doses conservés comme données indépendantes',()=>{const [r,s]=session(newRenfo(),{exercices:[dyn()],programmeType:{ids:['RM-01'],exclusions:['RM-02']}});const t=f('papRenfoCreerSeance',r);mutate(r,t,{programmeType:{ids:['RM-03'],exclusions:[]}});assert.deepEqual(json(s.programmeType),{ids:['RM-01'],exclusions:['RM-02']});assert.equal(s.exercices[0].dosage.reps,'8');});
test('Reset des séances sans effacement des objectifs généraux',()=>{const [r]=session();r.general.objectif='force';f('papRenfoReinitialiserSeances',r);assert.equal(r.seances.length,canonical?1:0);if(canonical){assert.equal(r.seances[0].frequence.valeur,'');assert.equal(r.seances[0].exercices.length,0);}assert.equal(r.general.objectif,'force');});
test('Cycle dirty/generated',()=>{run('markPrescriptionGenerated()');assert.deepEqual(json(run('prescriptionState')),{dirty:false,generated:true});run('markPrescriptionDirty()');assert.deepEqual(json(run('prescriptionState')),{dirty:true,generated:false});run('markPrescriptionGenerated(); invalidatePrescriptionOutputs()');assert.deepEqual(json(run('prescriptionState')),{dirty:false,generated:false});});
test('Compatibilité du modèle ancien et valeurs positives',()=>{const m=create();delete m.sedentarite;delete m.renforcement;assert.equal(f('validatePrescriptionModel',m),true);m.sedentarite={actions:[42],texteLibre:''};assert.equal(f('validatePrescriptionModel',m),false);for(const v of ['',null,false,'0','-1','Infinity','a'])assert.equal(f('parsePrescriptionPositiveNumber',v),null);assert.equal(f('parsePrescriptionPositiveNumber','7.5'),7.5);});
const renderers=['generatePrescriptionCRC','generatePrescriptionPatient','generatePrescriptionPlainText','generatePrescriptionDPI'];
const activity=(categorie,type,frequence,duree,extra={})=>({categorie,type,frequence:{valeur:String(frequence)},duree:{valeur:String(duree)},...extra});
const renfo=activity('renforcement','Poids du corps',2,20), endu=activity('endurance','Marche',3,30,{intensite:'moderee'}), souple=activity('souplesse','Mobilité',2,10), equi=activity('equilibre','Appui',2,10);
function fixture(activites=[],sedentarite,orientation){const m=create();m.activites=structuredClone(activites);if(sedentarite!==undefined)m.sedentarite=structuredClone(sedentarite);if(orientation)m.orientationAPA=structuredClone(orientation);return m;}
const sed={actions:['pause_debout','pause_debout','inconnu'],texteLibre:'Pause <test> & marche'};
const cases={vide:fixture(),renfo:fixture([renfo]),autres:fixture([endu,souple,equi]),quatre:fixture([endu,renfo,souple,equi]),pas:fixture([{categorie:'endurance',mode:'pas',objectif_pas:'4000',consignes_pas:'Selon tolérance'}]),sedSeule:fixture([],sed),mixte:fixture([renfo],sed),orientation:fixture([renfo],undefined,{active:true,orientations:['ergo','kine'],commentaire:'Coordination',bilanSouhaite:true,consentementPartage:true}),deuxRenfo:fixture([renfo,activity('renforcement','Élastique',1,25)]),ancien:fixture([renfo])};delete cases.ancien.sedentarite;delete cases.ancien.renforcement;
const expectedOutputs = {
  "vide": {
    "generatePrescriptionCRC": "",
    "generatePrescriptionPatient": "",
    "generatePrescriptionPlainText": "",
    "generatePrescriptionDPI": "\nPrécautions à prendre lors de vos séances d’activité physique (10 règles d’or) :\nhttps://www.frequenceglobale.com/Client/CCS/les-regles-dor-cardiologie-sport.pdf"
  },
  "renfo": {
    "generatePrescriptionCRC": "Une activité physique régulière est prescrite : renforcement musculaire (poids du corps), 20 min/séance, 2 fois/semaine.",
    "generatePrescriptionPatient": "\n    <div class=\"prescription-patient\">\n  <div style=\"margin-bottom:12px;\"><strong>• RENFORCEMENT MUSCULAIRE</strong> (poids du corps)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>20 min/séance</div><div>2 fois/semaine</div></div></div></div>",
    "generatePrescriptionPlainText": "• RENFORCEMENT MUSCULAIRE (Poids du corps)\n  20 min/séance\n  2 fois/semaine\n",
    "generatePrescriptionDPI": "RENFORCEMENT MUSCULAIRE : Poids du corps\n2x/sem - 20 min/séance\n\n\nPrécautions à prendre lors de vos séances d’activité physique (10 règles d’or) :\nhttps://www.frequenceglobale.com/Client/CCS/les-regles-dor-cardiologie-sport.pdf"
  },
  "autres": {
    "generatePrescriptionCRC": "Une activité physique régulière est prescrite : activité d’endurance (marche), d'intensité modérée, 30 min/séance, 3 fois/semaine ; travail de souplesse et mobilité (mobilité), 10 min/séance, 2 fois/semaine et travail de l'équilibre (appui), 10 min/séance, 2 fois/semaine.",
    "generatePrescriptionPatient": "\n    <div class=\"prescription-patient\">\n  <div style=\"margin-bottom:12px;\"><strong>• ACTIVITÉ D’ENDURANCE</strong> (marche)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>Intensité modérée</div><div>30 min/séance</div><div>3 fois/semaine</div></div></div><div style=\"margin-bottom:12px;\"><strong>• TRAVAIL DE SOUPLEESSE ET MOBILITÉ</strong> (mobilité)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>10 min/séance</div><div>2 fois/semaine</div></div></div><div style=\"margin-bottom:12px;\"><strong>• TRAVAIL DE L'ÉQUILIBRE</strong> (appui)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>10 min/séance</div><div>2 fois/semaine</div></div></div></div>",
    "generatePrescriptionPlainText": "• ACTIVITÉ D’ENDURANCE (Marche)\n  Intensité modérée\n  30 min/séance\n  3 fois/semaine\n\n• SOUPLESSE ET MOBILITÉ (Mobilité)\n  10 min/séance\n  2 fois/semaine\n\n• TRAVAIL DE L'ÉQUILIBRE (Appui)\n  10 min/séance\n  2 fois/semaine\n",
    "generatePrescriptionDPI": "ACTIVITÉ D’ENDURANCE (intensité modérée) : Marche\n3x/sem - 30 min/séance\n\nSOUPLESSE ET MOBILITÉ : Mobilité\n2x/sem - 10 min/séance\n\nTRAVAIL DE L'ÉQUILIBRE : Appui\n2x/sem - 10 min/séance\n\n\nPrécautions à prendre lors de vos séances d’activité physique (10 règles d’or) :\nhttps://www.frequenceglobale.com/Client/CCS/les-regles-dor-cardiologie-sport.pdf"
  },
  "quatre": {
    "generatePrescriptionCRC": "Une activité physique régulière est prescrite : activité d’endurance (marche), d'intensité modérée, 30 min/séance, 3 fois/semaine ; renforcement musculaire (poids du corps), 20 min/séance, 2 fois/semaine ; travail de souplesse et mobilité (mobilité), 10 min/séance, 2 fois/semaine et travail de l'équilibre (appui), 10 min/séance, 2 fois/semaine.",
    "generatePrescriptionPatient": "\n    <div class=\"prescription-patient\">\n  <div style=\"margin-bottom:12px;\"><strong>• ACTIVITÉ D’ENDURANCE</strong> (marche)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>Intensité modérée</div><div>30 min/séance</div><div>3 fois/semaine</div></div></div><div style=\"margin-bottom:12px;\"><strong>• RENFORCEMENT MUSCULAIRE</strong> (poids du corps)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>20 min/séance</div><div>2 fois/semaine</div></div></div><div style=\"margin-bottom:12px;\"><strong>• TRAVAIL DE SOUPLEESSE ET MOBILITÉ</strong> (mobilité)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>10 min/séance</div><div>2 fois/semaine</div></div></div><div style=\"margin-bottom:12px;\"><strong>• TRAVAIL DE L'ÉQUILIBRE</strong> (appui)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>10 min/séance</div><div>2 fois/semaine</div></div></div></div>",
    "generatePrescriptionPlainText": "• ACTIVITÉ D’ENDURANCE (Marche)\n  Intensité modérée\n  30 min/séance\n  3 fois/semaine\n\n• RENFORCEMENT MUSCULAIRE (Poids du corps)\n  20 min/séance\n  2 fois/semaine\n\n• SOUPLESSE ET MOBILITÉ (Mobilité)\n  10 min/séance\n  2 fois/semaine\n\n• TRAVAIL DE L'ÉQUILIBRE (Appui)\n  10 min/séance\n  2 fois/semaine\n",
    "generatePrescriptionDPI": "ACTIVITÉ D’ENDURANCE (intensité modérée) : Marche\n3x/sem - 30 min/séance\n\nRENFORCEMENT MUSCULAIRE : Poids du corps\n2x/sem - 20 min/séance\n\nSOUPLESSE ET MOBILITÉ : Mobilité\n2x/sem - 10 min/séance\n\nTRAVAIL DE L'ÉQUILIBRE : Appui\n2x/sem - 10 min/séance\n\n\nPrécautions à prendre lors de vos séances d’activité physique (10 règles d’or) :\nhttps://www.frequenceglobale.com/Client/CCS/les-regles-dor-cardiologie-sport.pdf"
  },
  "pas": {
    "generatePrescriptionCRC": "Une activité physique régulière est prescrite : activité d’endurance avec un objectif de 4000 pas/jour (Selon tolérance).",
    "generatePrescriptionPatient": "\n    <div class=\"prescription-patient\">\n  <div style=\"margin-bottom:12px;\"><strong>• ACTIVITÉ D’ENDURANCE</strong><div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>Objectif : 4000 pas/jour</div><div>Selon tolérance</div></div></div></div>",
    "generatePrescriptionPlainText": "• ACTIVITÉ D’ENDURANCE\n  Objectif : 4000 pas/jour\n  Selon tolérance\n",
    "generatePrescriptionDPI": "ACTIVITÉ D’ENDURANCE\nObjectif : 4000 pas/jour\nSelon tolérance\n\n\nPrécautions à prendre lors de vos séances d’activité physique (10 règles d’or) :\nhttps://www.frequenceglobale.com/Client/CCS/les-regles-dor-cardiologie-sport.pdf"
  },
  "sedSeule": {
    "generatePrescriptionCRC": "Lutte contre la sédentarité : Se lever et marcher lors de pauses dans les périodes assises ; Pause <test> & marche.",
    "generatePrescriptionPatient": "\n    <div class=\"prescription-patient\">\n  <div class=\"pap-prescription-sedentarite\" style=\"margin:12px 0;\"><strong>• LUTTE CONTRE LA SÉDENTARITÉ</strong><div style=\"margin-left:18px; margin-top:4px; line-height:1.45;\"><div>Se lever et marcher lors de pauses dans les périodes assises</div><div>Pause &lt;test&gt; &amp; marche</div></div></div></div>",
    "generatePrescriptionPlainText": "LUTTE CONTRE LA SÉDENTARITÉ\n  Se lever et marcher lors de pauses dans les périodes assises\n  Pause <test> & marche\n",
    "generatePrescriptionDPI": "LUTTE CONTRE LA SÉDENTARITÉ\n  Se lever et marcher lors de pauses dans les périodes assises\n  Pause <test> & marche\n"
  },
  "mixte": {
    "generatePrescriptionCRC": "Une activité physique régulière est prescrite : renforcement musculaire (poids du corps), 20 min/séance, 2 fois/semaine. Lutte contre la sédentarité : Se lever et marcher lors de pauses dans les périodes assises ; Pause <test> & marche.",
    "generatePrescriptionPatient": "\n    <div class=\"prescription-patient\">\n  <div style=\"margin-bottom:12px;\"><strong>• RENFORCEMENT MUSCULAIRE</strong> (poids du corps)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>20 min/séance</div><div>2 fois/semaine</div></div></div><div class=\"pap-prescription-sedentarite\" style=\"margin:12px 0;\"><strong>• LUTTE CONTRE LA SÉDENTARITÉ</strong><div style=\"margin-left:18px; margin-top:4px; line-height:1.45;\"><div>Se lever et marcher lors de pauses dans les périodes assises</div><div>Pause &lt;test&gt; &amp; marche</div></div></div></div>",
    "generatePrescriptionPlainText": "• RENFORCEMENT MUSCULAIRE (Poids du corps)\n  20 min/séance\n  2 fois/semaine\n\nLUTTE CONTRE LA SÉDENTARITÉ\n  Se lever et marcher lors de pauses dans les périodes assises\n  Pause <test> & marche\n",
    "generatePrescriptionDPI": "RENFORCEMENT MUSCULAIRE : Poids du corps\n2x/sem - 20 min/séance\n\nLUTTE CONTRE LA SÉDENTARITÉ\n  Se lever et marcher lors de pauses dans les périodes assises\n  Pause <test> & marche\n\n\nPrécautions à prendre lors de vos séances d’activité physique (10 règles d’or) :\nhttps://www.frequenceglobale.com/Client/CCS/les-regles-dor-cardiologie-sport.pdf"
  },
  "orientation": {
    "generatePrescriptionCRC": "Une activité physique régulière est prescrite avec accompagnement ergothérapeutique ou avec supervision par un kinésithérapeute : renforcement musculaire (poids du corps), 20 min/séance, 2 fois/semaine. Un bilan de condition et de capacités physiques est souhaité. Le patient a été informé du partage des informations nécessaires avec le professionnel encadrant et son accord oral a été recueilli. Coordination",
    "generatePrescriptionPatient": "\n    <div class=\"prescription-patient\">\n  <div style=\"margin-bottom:12px;\"><strong>• RENFORCEMENT MUSCULAIRE</strong> (poids du corps)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>20 min/séance</div><div>2 fois/semaine</div></div></div></div>",
    "generatePrescriptionPlainText": "• RENFORCEMENT MUSCULAIRE (Poids du corps)\n  20 min/séance\n  2 fois/semaine\n",
    "generatePrescriptionDPI": "RENFORCEMENT MUSCULAIRE : Poids du corps\n2x/sem - 20 min/séance\n\n\nPrécautions à prendre lors de vos séances d’activité physique (10 règles d’or) :\nhttps://www.frequenceglobale.com/Client/CCS/les-regles-dor-cardiologie-sport.pdf"
  },
  "deuxRenfo": {
    "generatePrescriptionCRC": "Une activité physique régulière est prescrite : renforcement musculaire (poids du corps), 20 min/séance, 2 fois/semaine et renforcement musculaire (élastique), 25 min/séance, 1 fois/semaine.",
    "generatePrescriptionPatient": "\n    <div class=\"prescription-patient\">\n  <div style=\"margin-bottom:12px;\"><strong>• RENFORCEMENT MUSCULAIRE</strong> (poids du corps)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>20 min/séance</div><div>2 fois/semaine</div></div></div><div style=\"margin-bottom:12px;\"><strong>• RENFORCEMENT MUSCULAIRE</strong> (élastique)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>25 min/séance</div><div>1 fois/semaine</div></div></div></div>",
    "generatePrescriptionPlainText": "• RENFORCEMENT MUSCULAIRE (Poids du corps)\n  20 min/séance\n  2 fois/semaine\n\n• RENFORCEMENT MUSCULAIRE (Élastique)\n  25 min/séance\n  1 fois/semaine\n",
    "generatePrescriptionDPI": "RENFORCEMENT MUSCULAIRE : Poids du corps\n2x/sem - 20 min/séance\n\nRENFORCEMENT MUSCULAIRE : Élastique\n1x/sem - 25 min/séance\n\n\nPrécautions à prendre lors de vos séances d’activité physique (10 règles d’or) :\nhttps://www.frequenceglobale.com/Client/CCS/les-regles-dor-cardiologie-sport.pdf"
  },
  "ancien": {
    "generatePrescriptionCRC": "Une activité physique régulière est prescrite : renforcement musculaire (poids du corps), 20 min/séance, 2 fois/semaine.",
    "generatePrescriptionPatient": "\n    <div class=\"prescription-patient\">\n  <div style=\"margin-bottom:12px;\"><strong>• RENFORCEMENT MUSCULAIRE</strong> (poids du corps)<div style=\"\n  margin-left:18px;\n  margin-top:4px;\n  line-height:1.45;\n\"><div>20 min/séance</div><div>2 fois/semaine</div></div></div></div>",
    "generatePrescriptionPlainText": "• RENFORCEMENT MUSCULAIRE (Poids du corps)\n  20 min/séance\n  2 fois/semaine\n",
    "generatePrescriptionDPI": "RENFORCEMENT MUSCULAIRE : Poids du corps\n2x/sem - 20 min/séance\n\n\nPrécautions à prendre lors de vos séances d’activité physique (10 règles d’or) :\nhttps://www.frequenceglobale.com/Client/CCS/les-regles-dor-cardiologie-sport.pdf"
  }
};
function render(name,m){c.prescriptionModel=m;return f(name,m);}
for(const [k,m] of Object.entries(cases)) for(const name of renderers) test('Parité '+k+' / '+name,()=>assert.equal(render(name,m),expectedOutputs[k][name]));
test('Sédentarité seule : dédoublonnage, échappement HTML, pas de règles de séance DPI',()=>{const m=cases.sedSeule;assert.equal(f('getSedentaritePrescriptionItems',m).length,2);const h=render('generatePrescriptionPatient',m);assert.ok(h.includes('&lt;test&gt; &amp;'));assert.ok(!h.includes('<test>'));assert.ok(!render('generatePrescriptionDPI',m).includes('10 règles'));});
if(baseline){
  // Extraction exacte du producteur historique, pas de réimplémentation du corps.
  function between(a,b){const i=html.indexOf(a),j=html.indexOf(b,i+1);assert.ok(i>=0&&j>i,'Ancres historiques absentes');return html.slice(i,j);}
  run(between('function papRenfoState() {','function initPapRenfoSynthesis() {'));
  const producer=between('  const renforcementFrequence =','const souplesseFrequence =');
  function produce(freq,enabled=true){fields.clear();for(const [id,v] of [['papRenfoFrequency',freq],['papRenfoPractice','Poids du corps'],['papRenfoDuration','20'],['input[name="fois_renforcement"]',freq],['input[name="type_renforcement"]','Poids du corps'],['input[name="duree_renforcement"]','20']])fields.set(id,v);c.prescriptionModel=create();if(!enabled)c.prescriptionModel.renforcement.etat='desactive';run('{\n'+producer+'\n}');return c.prescriptionModel;}
  test('HISTORIQUE : fréquence synthétique 2 produit une activité, sans séance détaillée',()=>{const m=produce('2');assert.deepEqual(json(m.activites),[renfo]);assert.equal(m.renforcement.seances.length,0);});
  test('HISTORIQUE : garde désactivation et fréquence invalide',()=>{for(const v of ['','0','2.5','11','abc'])assert.equal(produce(v).activites.length,0);assert.equal(produce('2',false).activites.length,0);});
  test('HISTORIQUE : création première séance hérite, seconde vierge',()=>{const r=newRenfo(),s=f('papRenfoCreerSeance',r);assert.equal(f('papRenfoValeurSeance',r,s.id,'frequence').valeur,'2');const t=f('papRenfoCreerSeance',r);assert.equal(s.frequence.source,'seance');assert.equal(t.frequence.valeur,'');});
  test('HISTORIQUE : les séances détaillées ne modifient pas encore la sortie',()=>{const m=produce('2');const r=m.renforcement;const s=f('papRenfoCreerSeance',r);mutate(r,s,{frequence:value('seance',1),duree:value('seance',25)});assert.equal(f('papRenfoRetenirSeance',r,s.id).retenue,true);m.activites=[];run('{\n'+producer+'\n}');assert.deepEqual(json(m.activites),[renfo]);});
  test('HISTORIQUE : hook de reset présent',()=>assert.ok(source[paths[5]].includes('window.papResetRenfoSynthesis();')));
}
console.log(`\n${pass} tests OK ; ${fail} échec(s). Mode ${baseline?'référence historique':canonical?'protections/parité canonique':'protections/parité historique'}.`);
if(fail) process.exitCode=1;
