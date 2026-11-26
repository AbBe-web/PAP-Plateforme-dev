'use strict';
// PAP étape 4b — contrat de projection canonique et compatibilité historique. Node >=20, sans dépendance.
// Les anciens tests métier de compatibilité sont conservés ; producteur adapté au contrat 4d.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root,p),'utf8').replace(/\r\n/g,'\n');
const modelCode = read('core/prescriptionModel.js');
const html = read('medecin/generateur-crc/index.html');
const ctx = vm.createContext({structuredClone}); // aucune API DOM pour le métier
vm.runInContext(modelCode,ctx);
const project = ctx.papRenfoProjeterPrescription;
const make = ctx.createPrescriptionModel;
const plain = v => JSON.parse(JSON.stringify(v));
const general = (frequence='2',duree='20',type='Poids du corps') => ({etat:'actif',general:{frequence,duree,type}});
const expected = (f='2',d='20',t='Poids du corps') => ({activites:[{categorie:'renforcement',type:t,frequence:{valeur:f},duree:{valeur:d}}],frequenceClinique:f});
const empty = {activites:[],frequenceClinique:null};
let pass=0,fail=0;
function test(name,fn){try{fn();pass++;console.log('OK   '+name);}catch(e){fail++;console.error('FAIL '+name+'\n'+e.stack);}}
test('Projection historique sans DOM',()=>assert.deepEqual(plain(project(general())),expected()));
test('Absence de modèle et état initial : aucun contenu inventé',()=>{for(const r of [undefined,null,{},make().renforcement])assert.deepEqual(plain(project(r)),empty);});
test('Composante désactivée : aucune restitution, saisies conservées',()=>{const r=general();r.etat='desactive';const before=plain(r);assert.deepEqual(plain(project(r)),empty);assert.deepEqual(r,before);});
test('Fréquences invalides ou types non conformes',()=>{for(const f of ['', ' ', '0','-1','2.5','11','abc','Infinity',true,2,[],{}])assert.deepEqual(plain(project(general(f))),empty,String(f));});
test('Fréquences historiques 1 à 10 et représentation textuelle conservée',()=>{for(const f of ['1','10','02'])assert.deepEqual(plain(project(general(f))),expected(f));});
test('Durée et modalité facultatives en synthétique historique',()=>assert.deepEqual(plain(project(general('2','',''))),expected('2','','')));
test('Durée et texte historiques non transformés',()=>assert.deepEqual(plain(project(general('3','7.5','Élastique & chaise'))),expected('3','7.5','Élastique & chaise')));
test('Projection non destructive, sans référence mutable partagée',()=>{const r=general();Object.freeze(r.general);Object.freeze(r);const p=project(r);p.activites[0].frequence.valeur='9';p.activites[0].duree.valeur='99';assert.deepEqual(plain(project(r)),expected());});
test('4b uniquement : séances détaillées retenues ou brouillons encore hors projection',()=>{const r={...general(),seances:[],prochainIdSeance:1};const s=ctx.papRenfoCreerSeance(r);ctx.papRenfoModifierSeance(r,s.id,{frequence:{source:'seance',valeur:'1'},duree:{source:'seance',valeur:'25'}});assert.equal(ctx.papRenfoRetenirSeance(r,s.id).retenue,true);ctx.papRenfoCreerSeance(r);assert.deepEqual(plain(project(r)),expected());});
// Exécuter les vrais fragments du producteur et de son consommateur clinique.
function between(a,b,from=0){const i=html.indexOf(a,from),j=html.indexOf(b,i+1);assert.ok(i>=0&&j>i,'Ancres de production absentes');return html.slice(i,j);}
const helper=between('function papRenfoState() {','function initPapRenfoSynthesis() {');
const producer=between('const renforcementProjection =','const souplesseFrequence =',html.indexOf('function buildClinicalModel() {'));
const clinical=between('  renforcement: {\n    frequence: renforcementProjection.frequenceClinique','  souplesse: {',html.indexOf('function buildClinicalModel() {'));
// Le producteur est exécuté avec un DOM qui échoue à toute tentative de lecture.
let dirty=0;
ctx.document=new Proxy({}, {get(){throw Error('Lecture DOM interdite dans la projection');}});
ctx.markPrescriptionDirty=()=>dirty++;
vm.runInContext(helper,ctx);
const val=v=>({source:'seance',valeur:String(v)});
const edit=(r,s,c)=>ctx.papRenfoModifierSeance(r,s.id,c);
function fixture(freq='2',duration='20',type='Poids du corps'){
  const r=make().renforcement;edit(r,r.seances[0],{frequence:val(freq),duree:val(duration),type});return r;
}
function build(r){dirty=0;ctx.prescriptionModel=make();ctx.prescriptionModel.renforcement=r;const clinicalResult=vm.runInContext(`(()=>{${producer}\nreturn {${clinical}};})()`,ctx);return {activities:plain(ctx.prescriptionModel.activites),clinical:plain(clinicalResult.renforcement),dirty};}
test('Producteur réel sans DOM + modèle clinique : séance unique, fréquence commune',()=>assert.deepEqual(build(fixture()),{activities:expected().activites,clinical:{frequence:'2'},dirty:1}));
test('Producteur réel : changement de modèle sans valeur ancienne résiduelle',()=>{const r=fixture();build(r);edit(r,r.seances[0],{frequence:val(3),duree:val(15),type:'Chaise'});assert.deepEqual(build(r),{activities:expected('3','15','Chaise').activites,clinical:{frequence:'3'},dirty:1});});
test('Producteur réel : fréquence invalide exclue des deux consommateurs',()=>{for(const f of ['','0','2.5','11','abc'])assert.deepEqual(build(fixture(f)),{activities:[],clinical:{frequence:null},dirty:0});});
test('Producteur réel : désactivation conserve les valeurs',()=>{const r=fixture();r.etat='desactive';assert.deepEqual(build(r),{activities:[],clinical:{frequence:null},dirty:0});assert.equal(r.seances[0].frequence.valeur,'2');});
test('Contrôles historiques dupliqués et synchronisation DOM supprimés',()=>{for(const n of ['fois_renforcement','type_renforcement','duree_renforcement','papRenfoSyncGeneral','papRenfoReadGeneral','papRenfoActiveForDocuments','programmeCandidat','PAP_RENFO_PRESET_CANDIDATES'])assert.ok(!html.includes(n),n);for(const id of ['papRenfoFrequency','papRenfoDuration','papRenfoEffort','papRenfoPractice','papRenfoZones','papRenfoPreset'])assert.equal([...html.matchAll(new RegExp('id="'+id+'"','g'))].length,1,id);});
test('Deux séances retenues : données distinctes, fréquence clinique additionnée, aucun repère général',()=>{const r=fixture(),a=r.seances[0],b=ctx.papRenfoCreerSeance(r);edit(r,b,{frequence:val(1),duree:val(25),type:'Élastique'});assert.equal(ctx.papRenfoRetenirSeance(r,a.id).retenue,true);assert.equal(ctx.papRenfoRetenirSeance(r,b.id).retenue,true);assert.deepEqual(build(r),{activities:[...expected().activites,...expected('1','25','Élastique').activites],clinical:{frequence:'3'},dirty:1});});
test('Brouillon multi-séances exclu ; modification ciblée révoque la retenue',()=>{const r=fixture(),a=r.seances[0],b=ctx.papRenfoCreerSeance(r);edit(r,b,{frequence:val(1),duree:val(25)});assert.deepEqual(plain(project(r)),empty);ctx.papRenfoRetenirSeance(r,a.id);assert.deepEqual(plain(project(r)),expected());edit(r,a,{duree:val(22)});assert.deepEqual(plain(project(r)),empty);});
test('Durée calculée retenue exacte en secondes, durée souhaitée conservée',()=>{const r=fixture(),a=r.seances[0];edit(r,a,{organisation:{format:'classique'},exercices:[{id:'RM-01',dosage:{series:'1',reps:'7',repDuration:'3'}}]});ctx.papRenfoRetenirSeance(r,a.id);assert.equal(project(r).activites[0].duree.secondes,21);assert.equal(a.duree.valeur,'20');assert.equal(project(r).activites[0].duree.valeur,'0.35');});
test('Durée estimée non substituée, aucun exercice ni dosage restitué',()=>{const r=fixture(),a=r.seances[0];edit(r,a,{organisation:{format:'classique'},exercices:[{id:'RM-01',dosage:{series:'1',reps:'7'}}]});ctx.papRenfoRetenirSeance(r,a.id);assert.deepEqual(plain(project(r)),expected());});
test('Suppression dernière séance : nouvelle identité, données générales préservées',()=>{const r=fixture(),a=r.seances[0];r.general.objectif='Force';ctx.papRenfoRetirerSeance(r,a.id);assert.equal(r.seances.length,1);assert.notEqual(r.seances[0].id,a.id);assert.equal(r.general.objectif,'Force');assert.deepEqual(plain(project(r)),empty);});
// Vérifier les quatre renderers réels avec l'extension de durée exacte.
for(const file of ['core/prescriptionUtils.js','core/prescriptionRenderer.js'])vm.runInContext(read(file),ctx);
test('Quatre renderers : durée retenue en min/s, sans décimale artificielle',()=>{const r=fixture(),a=r.seances[0];edit(r,a,{organisation:{format:'classique'},exercices:[{id:'RM-01',dosage:{series:'1',reps:'19',repDuration:'4'}}]});ctx.papRenfoRetenirSeance(r,a.id);const m=make();m.activites=project(r).activites;ctx.prescriptionModel=m;ctx.window={};ctx.document={querySelector(){return null;},getElementById(){return null;},querySelectorAll(){return [];}};for(const n of ['generatePrescriptionCRC','generatePrescriptionPatient','generatePrescriptionPlainText','generatePrescriptionDPI'])assert.ok(ctx[n](m).includes('1 min 16 s/séance'),n);});
console.log(`\n${pass} tests OK ; ${fail} échec(s). Projection 4d.`);
if(fail)process.exitCode=1;
