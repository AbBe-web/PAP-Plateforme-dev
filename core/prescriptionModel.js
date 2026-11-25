// Libellés explicites des actions facultatives, indépendants des séances d'AP.
// Les identifiants sont stables pour les futures sorties documentaires.
const PAP_SEDENTARITE_ACTION_LABELS = Object.freeze({
  pause_debout: "Se lever et marcher lors de pauses dans les périodes assises",
  appel_marche: "Marcher pendant les appels téléphoniques lorsque cela est possible",
  deplacement_collegue: "Se déplacer pour échanger avec un collègue plutôt que rester assis",
  pause_ecran: "Faire une pause debout entre deux périodes passées devant un écran"
});

const DEFAULT_PRESCRIPTION_MODEL = {
  ordonnanceType: "simple",

  objectifs: [],

  activites: [],

  // Synthétique Renforcement v19 ; les champs fréquentiels et de durée
  // restent lus des champs historiques du formulaire par buildClinicalModel().
  // programmeCandidat = brouillon explicitement non prescrit à cette étape.
  renforcement: {
    etat: "non_renseigne", general: {}, programmeCandidat: [], syntheseRetenue: false,
    seances: [], prochainIdSeance: 1 // brouillons Détaillée, hors sorties documentaires
  },

  sedentarite: {
    actions: [],
    texteLibre: ""
  },

  messagesPatient: [],

  recommandations: [],

  limitations: [],

orientationAPA: {

  necessaire: false,

  criteres: [],

  orientations: [],

  commentaire: ""

},

  texteLibreFinal: "",

  metadata: {
    version: "1",
    dateCreation: "",
    modeSaisie: "",
    source: ""
  }
};

function createPrescriptionModel() {
  return structuredClone(DEFAULT_PRESCRIPTION_MODEL);
}

// 5-RENFO-02b : contrat minimal de données Détaillée.
// Ces fonctions ne sélectionnent/prescrivent aucun exercice et ne modifient pas le DOM.
// IMPORTANT : les sorties actuelles demeurent exclusivement Synthétiques.
function papRenfoCreerSeance(renforcement) {
  if (!renforcement || !Array.isArray(renforcement.seances)) throw new Error("État Renforcement non initialisé");
  const numero = renforcement.prochainIdSeance++;
  const premiere = renforcement.seances.length === 0;
  const seance = {
    id: `renfo-seance-${numero}`, nom: "",
    // Une seule séance : référence aux champs généraux (aucune recopie).
    // Plusieurs types : fréquence/durée propres, sans distribution automatique.
    frequence: { source: premiere ? "generale" : "seance", valeur: "" },
    duree: { source: premiere ? "generale" : "seance", valeur: "" },
    // Valeurs existantes conservées pour les futurs raccordements v19 ;
    // provenance explicite sans casser le format (string/array) de 02b.
    intensite: "", intensiteSource: premiere ? "generale" : "seance",
    zones: [], zonesSource: premiere ? "generale" : "seance",
    materiel: "", organisation: {},
    exercices: [], dosageCommun: {}, modelesDosage: {},
    programmeType: { ids: [], exclusions: [] },
    dureeCalculeeRetenue: null,
    statut: "brouillon"
  };
  // Transition 1 -> plusieurs types : conserver exactement les valeurs déjà
  // affichées dans la première séance. Elles deviennent ses valeurs propres,
  // sans répartition automatique et sans préremplissage du nouveau type.
  if (!premiere) {
    for (const autre of renforcement.seances) {
      let provenanceChangee = false;
      for (const champ of ["frequence", "duree"]) {
        if (autre[champ].source === "generale") {
          autre[champ] = { source: "seance", valeur: String(renforcement.general?.[champ] ?? "") };
          provenanceChangee = true;
        }
      }
      if (provenanceChangee) autre.statut = "brouillon";
    }
  }
  renforcement.seances.push(seance);
  return seance;
}

function papRenfoTrouverSeance(renforcement, id) {
  const seance = renforcement?.seances?.find(s => s.id === id);
  if (!seance) throw new Error("Séance de renforcement inconnue");
  return seance;
}

function papRenfoValeurSeance(renforcement, id, champ) {
  if (champ !== "frequence" && champ !== "duree") throw new Error("Paramètre inconnu");
  const seance = papRenfoTrouverSeance(renforcement, id);
  const parametre = seance[champ];
  if (parametre.source === "seance") return { valeur: String(parametre.valeur ?? ""), source: "seance" };
  if (parametre.source !== "generale") throw new Error("Provenance inconnue");
  if (renforcement.seances.length !== 1) {
    return { valeur: "", source: "a_preciser" }; // pas d'héritage multi-types
  }
  return { valeur: String(renforcement.general?.[champ] ?? ""), source: "generale" };
}

// Résolution des valeurs de séance sans copier les données générales.
// Contrairement à la fréquence/durée, la zone et l'intensité de A peuvent
// rester liées au général même lorsqu'un second type de séance est ajouté.
function papRenfoIntensiteSeance(renforcement, id) {
  const seance = papRenfoTrouverSeance(renforcement, id);
  if (seance.intensiteSource === "generale") {
    return { valeur: String(renforcement.general?.intensite ?? ""), source: "generale" };
  }
  return { valeur: String(seance.intensite ?? ""), source: "seance" };
}
function papRenfoZonesSeance(renforcement, id) {
  const seance = papRenfoTrouverSeance(renforcement, id);
  const generale = seance.zonesSource === "generale";
  const zones = generale ? renforcement.general?.zones : seance.zones;
  return { valeurs: [...(Array.isArray(zones) ? zones : [])], source: generale ? "generale" : "seance" };
}

// Mise à jour EXPLICITE des champs d'une seule séance. Identité et statut
// ne sont pas modifiables par cette voie ; une vraie modification invalide la retenue.
function papRenfoModifierSeance(renforcement, id, changements) {
  const seance = papRenfoTrouverSeance(renforcement, id);
  const modifiables = new Set([
    "nom", "frequence", "duree", "intensite", "intensiteSource", "zones", "zonesSource", "materiel",
    "organisation", "exercices", "dosageCommun", "modelesDosage", "programmeType"
  ]);
  const entrees = Object.entries(changements || {});
  for (const [cle, valeur] of entrees) {
    if (!modifiables.has(cle)) throw new Error(`Champ de séance interdit : ${cle}`);
    if ((cle === "frequence" || cle === "duree") &&
        (!valeur || !["generale", "seance"].includes(valeur.source) ||
         typeof valeur.valeur !== "string")) throw new Error("Provenance de séance invalide");
    if ((cle === "zonesSource" || cle === "intensiteSource") &&
        !["generale", "seance"].includes(valeur)) throw new Error("Provenance de séance invalide");
    if (cle === "zones" && (!Array.isArray(valeur) ||
        valeur.some(zone => !["MS", "Tronc", "MI"].includes(zone)))) throw new Error("Zones invalides");
    if (cle === "intensite" && typeof valeur !== "string") throw new Error("Intensité invalide");
  }
  let change = false;
  for (const [cle, valeur] of entrees) {
    if (JSON.stringify(seance[cle]) !== JSON.stringify(valeur)) {
      seance[cle] = structuredClone(valeur);
      change = true;
    }
  }
  // Tout choix explicite dans une séance rend le champ propre, même si
  // la valeur est identique au général. L'annulation de ce choix est explicite.
  if (entrees.some(([cle]) => cle === "zones") && !Object.hasOwn(changements, "zonesSource")) {
    if (seance.zonesSource !== "seance") { seance.zonesSource = "seance"; change = true; }
  }
  if (entrees.some(([cle]) => cle === "intensite") && !Object.hasOwn(changements, "intensiteSource")) {
    if (seance.intensiteSource !== "seance") { seance.intensiteSource = "seance"; change = true; }
  }
  if (change) {
    seance.statut = "brouillon";
    if (seance.dureeCalculeeRetenue && papRenfoDureeRetenue(renforcement,id)===null) seance.dureeCalculeeRetenue=null;
  }
  return seance;
}

function papRenfoVerifierSeance(renforcement, id) {
  const frequence = papRenfoValeurSeance(renforcement, id, "frequence");
  const texte = frequence.valeur.trim();
  const nombre = Number(texte);
  const manquants = [];
  if (!texte || !Number.isInteger(nombre) || nombre <= 0 || nombre > 10) manquants.push("frequence");
  const duree = papRenfoValeurSeance(renforcement, id, "duree");
  const calcul = papRenfoCalculDuree(renforcement,id);
  if ((!calcul.complete || calcul.estimated) && (!duree.valeur.trim() || !Number.isFinite(Number(duree.valeur)) || Number(duree.valeur) <= 0)) {
    manquants.push("duree");
  }
  // Validation de l'organisation uniquement : exercices/dosages hors de 02c1-R3.
  return { ok: manquants.length === 0, manquants, frequence };
}

// À appeler uniquement depuis une action explicite du médecin, une fois
// l'interface raccordée. Aucun document Détaillé n'est généré ici.
function papRenfoRetenirSeance(renforcement, id) {
  const controle = papRenfoVerifierSeance(renforcement, id);
  if (!controle.ok) return { ...controle, retenue: false };
  const seance = papRenfoTrouverSeance(renforcement, id);
  const calcul = papRenfoCalculDuree(renforcement, id);
  seance.dureeCalculeeRetenue = calcul.complete && !calcul.estimated ? {signature:calcul.signature,secondes:calcul.total} : null;
  seance.statut = "retenue";
  return { ...controle, retenue: true };
}

// Lorsqu'un champ général change, le futur contrôleur doit appeler cette fonction
// pour invalider les séances qui en dépendent ; le DOM actuel n'en crée aucune.
function papRenfoGeneralModifie(renforcement, champs) {
  for (const seance of renforcement.seances) {
    if (champs.some(champ =>
      (["frequence", "duree"].includes(champ) && seance[champ].source === "generale") ||
      (champ === "intensite" && seance.intensiteSource === "generale") ||
      (champ === "zones" && seance.zonesSource === "generale")
    )) seance.statut = "brouillon";
    if (seance.dureeCalculeeRetenue && papRenfoDureeRetenue(renforcement,seance.id)===null) seance.dureeCalculeeRetenue=null;
  }
}

function papRenfoReinitialiserSeances(renforcement) {
  renforcement.seances = [];
  renforcement.prochainIdSeance = 1;
  // Conserve les valeurs générales et les programmes candidats Synthétique.
}

// 02c5 : calcul descriptif, en secondes, à partir des doses effectivement saisies.
// Référence du catalogue : les variantes unilatérales des mouvements bilatéraux sont reportées.
const PAP_RENFO_SIDE_IDS = new Set(['RM-03','RM-04','RM-07','RM-10','RM-11','RM-12','RM-13','RM-14','RM-16','RM-22','RM-23','RM-25','RM-30','RM-31','RM-33','RM-34','RM-35','RM-36','RM-37','RM-38']);
// Hypothèse temporelle modifiable, non prescription du nombre de répétitions par côté.
const PAP_RENFO_SUCCESSIVE_IDS = new Set(['RM-07','RM-10','RM-12','RM-13','RM-14','RM-16','RM-23','RM-35','RM-36','RM-37']);
function papRenfoSideEnabled(e) {
  const d=e.dosage||{};
  return !!(PAP_RENFO_SIDE_IDS.has(e.id)||e.libre||d.perSide===true||['Droit','Gauche','Alterné'].includes(d.side)||['each','total'].includes(d.timeSides));
}
function papRenfoTimeSides(e) {
  const d=e.dosage||{};
  if(['each','total'].includes(d.timeSides))return d.timeSides;
  const mode=d.mode||(PAP_RENFO_STATIC_IDS.has(e.id)?'iso':'dyn');
  // Une ancienne duree par serie n'est jamais doublee par simple hypothese.
  if(mode==='dyn'&&!Object.hasOwn(d,'repDuration')&&String(d.workDuration??'').trim()!=='')return '';
  return PAP_RENFO_SUCCESSIVE_IDS.has(e.id)?'each':'';
}
const PAP_RENFO_STATIC_IDS = new Set(['RM-32','RM-35','CAND-02']);
// Hypothèse de calcul uniquement ; aucune consigne de tempo ni dose enregistrée.
const PAP_RENFO_ESTIMATED_REP_SECONDS = 3;
function papRenfoCalculDuree(r,id) {
  const s=papRenfoTrouverSeance(r,id), o=s.organisation||{}, ex=s.exercices||[];
  const parts={warmup:0,work:0,series:0,exercises:0,rounds:0,cooldown:0}, missing=[], assumptions=[];
  const read=(v,min=0,integer=true)=>{
    if(v===null||v===undefined||String(v).trim()===''||typeof v==='boolean')return null;
    const n=Number(v);return Number.isFinite(n)&&n>=min&&(!integer||Number.isSafeInteger(n))?n:null;
  };
  const desired=papRenfoValeurSeance(r,id,'duree').valeur;
  const sig=[desired,o.format,o.rounds,o.restRounds,o.restEx,o.warmup,o.cooldown,ex.map(e=>[e.id,!!e.libre,...['mode','series','reps','hold','workDuration','repDuration','rest','restAfter','side','perSide','rightReps','leftReps','rightHold','leftHold','timeSides'].map(k=>e.dosage?.[k])])];
  const signature=JSON.stringify(sig);
  const requireValue=(v,label,min=0,integer=true)=>{const n=read(v,min,integer);if(n===null)missing.push(label);return n;};
  const add=(key,value)=>{if(Number.isFinite(value)&&value>=0&&Number.isSafeInteger(parts[key]+value))parts[key]+=value;else missing.push('Durée hors limites calculables');};
  for(const k of ['warmup','cooldown'])if(String(o[k]??'').trim()!==''){
    const n=requireValue(o[k],k==='warmup'?'Échauffement':'Retour au calme',0,false);if(n!==null)add(k,Math.round(n*60));
  }
  let tours=null;
  if(o.format==='classique')tours=1;
  else if(o.format==='circuit')tours=requireValue(o.rounds,'Nombre de tours',1);
  else if(ex.length)missing.push('Organisation de la séance');
  if(!ex.length)missing.push('Exercices sélectionnés');
  ex.forEach((e,i)=>{
    const d=e.dosage||{}, label=`Exercice ${i+1}`, mode=d.mode||(PAP_RENFO_STATIC_IDS.has(e.id)?'iso':'dyn');
    const series=requireValue(d.series,`${label} : nombre de séries`,1);
    const both=papRenfoSideEnabled(e)&&(d.side||'Les deux')==='Les deux';
    const timeSides=papRenfoTimeSides(e);
    const split=both&&d.perSide===true;
    let work=null;
    if(mode==='dyn'){
      // Ancienne donnée par série : ne jamais l'interpréter comme une durée unitaire.
      const legacy=!Object.hasOwn(d,'repDuration')&&String(d.workDuration??'').trim()!=='';
      if(legacy){
        const n=requireValue(d.workDuration,`${label} : ancienne durée d’une série`,1);
        if(n!==null){
          if(!both||d.timeSides==='total')work=n;
          else if(d.timeSides==='each'&&!split)work=2*n;
          else {work=n;assumptions.push(`${label} : durée ancienne comptée une fois, latéralité à préciser`);}
        }
      }else{
        const specified=String(d.repDuration??'').trim()!=='';
        const seconds=specified?requireValue(d.repDuration,`${label} : durée par répétition`,1):PAP_RENFO_ESTIMATED_REP_SECONDS;
        let repetitions=null;
        if(split){
          const a=requireValue(d.rightReps,`${label} : répétitions droite`,1),b=requireValue(d.leftReps,`${label} : répétitions gauche`,1);
          if(a!==null&&b!==null){
            if(timeSides==='each')repetitions=a+b;
            else if(timeSides==='total')repetitions=Math.max(a,b);
            else {repetitions=Math.max(a,b);assumptions.push(`${label} : côtés différenciés, simultanéité ou succession non précisée`);}
          }
        }else{
          repetitions=requireValue(d.reps,`${label} : répétitions`,1);
          if(repetitions!==null&&both){
            if(timeSides==='each')repetitions*=2;
            else if(timeSides!=='total')assumptions.push(`${label} : répétitions comptées une fois, latéralité à préciser`);
          }
        }
        if(seconds!==null&&repetitions!==null){
          work=seconds*repetitions;
          if(!specified)assumptions.push(`${label} : ${PAP_RENFO_ESTIMATED_REP_SECONDS} s par répétition estimées`);
        }
      }
    }else if(mode==='iso'){
      if(split){
        const a=requireValue(d.rightHold,`${label} : tenue droite`,1),b=requireValue(d.leftHold,`${label} : tenue gauche`,1);
        if(a!==null&&b!==null){if(timeSides==='each')work=a+b;else if(timeSides==='total')work=Math.max(a,b);else {work=Math.max(a,b);assumptions.push(`${label} : tenues simultanées ou successives à préciser`);}}
      }else{
        const n=requireValue(d.hold,`${label} : tenue`,1);
        if(n!==null){if(!both||timeSides==='total')work=n;else if(timeSides==='each')work=2*n;else {work=n;assumptions.push(`${label} : tenue comptée une fois, latéralité à préciser`);}}
      }
    }else missing.push(`${label} : mode d’exécution`);
    if(both&&timeSides==='each'&&!['each','total'].includes(d.timeSides)&&work!==null)assumptions.push(`${label} : réalisation successive, dosage par côté supposés pour l’estimation`);
    if(tours!==null&&series!==null&&work!==null)add('work',tours*series*work);
    if(series!==null&&series>1){const rest=requireValue(d.rest,`${label} : repos entre séries`);if(rest!==null&&tours!==null)add('series',tours*(series-1)*rest);}
    if(i<ex.length-1){const rest=requireValue(String(d.restAfter??'').trim()!==''?d.restAfter:o.restEx,`${label} : repos avant l’exercice suivant`);if(rest!==null&&tours!==null)add('exercises',tours*rest);}
  });
  if(tours!==null&&tours>1){const n=requireValue(o.restRounds,'Repos entre tours');if(n!==null)add('rounds',(tours-1)*n);}
  const total=Object.values(parts).reduce((a,b)=>a+b,0);
  if(!Number.isSafeInteger(total))missing.push('Durée hors limites calculables');
  return {parts,missing:[...new Set(missing)],assumptions:[...new Set(assumptions)],estimated:assumptions.length>0,total,complete:missing.length===0&&total>0,signature,desired};
}
function papRenfoDureeRetenue(r,id){
  const s=papRenfoTrouverSeance(r,id), c=papRenfoCalculDuree(r,id);
  return s.statut==='retenue'&&c.complete&&!c.estimated&&s.dureeCalculeeRetenue?.signature===c.signature&&s.dureeCalculeeRetenue?.secondes===c.total?c.total:null;
}
