// Libellés explicites des actions facultatives, indépendants des séances d'AP.
// Les identifiants sont stables pour les futures sorties documentaires.
const PAP_SEDENTARITE_ACTION_LABELS = Object.freeze({
  pause_debout: "Se lever et marcher lors de pauses dans les périodes assises",
  appel_marche: "Marcher pendant les appels téléphoniques lorsque cela est possible",
  deplacement_collegue: "Se déplacer pour échanger avec un collègue plutôt que rester assis",
  pause_ecran: "Faire une pause debout entre deux périodes passées devant un écran"
});

const PAP_RENFO_SCHEMA_VERSION = 3;

const DEFAULT_PRESCRIPTION_MODEL = {
  ordonnanceType: "simple",

  objectifs: [],

  activites: [],

  // Une séance vierge canonique, clonée à chaque consultation.
  renforcement: papRenfoCreerEtatCanonique(),

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

// 4b — Frontière documentaire du Renforcement, indépendante du DOM.
// Compatibilité de lecture des anciens modèles ; les versions 2 et 3 utilisent les séances.
// La projection est dérivée à chaque appel ; ne jamais la réinjecter dans la source.
function papRenfoProjeterPrescription(renforcement) {
  if (papRenfoEstCanonique(renforcement) || renforcement?.versionSchema === 2) return papRenfoProjeterSeances(renforcement);
  const general = renforcement?.general;
  const frequence = general?.frequence ?? "";
  const n = typeof frequence === "string" ? Number(frequence) : NaN;
  if (renforcement?.etat === "desactive" || String(frequence).trim() === "" ||
      !Number.isInteger(n) || n < 1 || n > 10) {
    return { activites: [], frequenceClinique: null };
  }
  return {
    activites: [{
      categorie: "renforcement",
      type: typeof general.type === "string" ? general.type : "",
      frequence: { valeur: frequence },
      duree: { valeur: typeof general.duree === "string" ? general.duree : "" }
    }],
    frequenceClinique: frequence
  };
}

// 4d : projection minimale des séances, sans exercices ni progression dans les sorties historiques.
// Séance unique : le parcours synthétique reste possible sans validation intermédiaire.
// Plusieurs séances : seules les séances explicitement retenues sont projetées.
function papRenfoProjeterSeances(r) {
  const empty = {activites:[],frequenceClinique:null};
  if(r.etat === "desactive") return empty;
  const activites=[];
  for(const s of r.seances) {
    if(!papRenfoSeancePrescriptible(r,s)) continue;
    const frequence=papRenfoValeurSeance(r,s.id,"frequence").valeur;
    const duree=papRenfoDureePourProjection(r,s.id);
    activites.push({categorie:"renforcement",type:s.type||"",frequence:{valeur:frequence},duree});
  }
  return {activites,frequenceClinique:activites.length===0?null:activites.length===1?activites[0].frequence.valeur:String(activites.reduce((total,a)=>total+Number(a.frequence.valeur),0))};
}

// A5 — calcul descriptif, dérivé uniquement du canonique ; pas de décision clinique.
function papRenfoSeanceRetenueValide(r,s) {
  return s.statut==="retenue" && papRenfoVerifierSeance(r,s.id).ok;
}
// 5-UX1 : même frontière d'inclusion pour les sorties et la synthèse.
function papRenfoSeancePrescriptible(r,s) {
  if(r.etat==="desactive" || (r.seances.length>1 && !papRenfoSeanceRetenueValide(r,s))) return false;
  const f=papRenfoValeurSeance(r,s.id,"frequence").valeur,n=Number(f);
  return !!f.trim() && Number.isInteger(n) && n>=1 && n<=10;
}
function papRenfoDureePourProjection(r,id) {
  const secondes=papRenfoDureeRetenue(r,id);
  return secondes===null?{valeur:papRenfoValeurSeance(r,id,"duree").valeur}:{valeur:String(secondes/60),secondes};
}
function papRenfoBilanHebdomadaire(r) {
  if(!papRenfoEstCanonique(r)) throw new Error("État canonique requis");
  const exclu=r.etat==="desactive";
  const tempsValide=n=>Number.isFinite(n)&&n>0&&n<=Number.MAX_SAFE_INTEGER;
  const seances=exclu?[]:r.seances.map(s=>{
    const brut=papRenfoValeurSeance(r,s.id,"frequence").valeur;
    const n=Number(brut);
    const frequence=brut.trim()&&Number.isInteger(n)&&n>=1&&n<=10?n:null;
    const duree=papRenfoDureePourProjection(r,s.id);
    const secondes=duree.secondes??Number(duree.valeur)*60;
    const dureeSecondes=tempsValide(secondes)?secondes:null;
    const hebdo=frequence!==null&&dureeSecondes!==null?frequence*dureeSecondes:null;
    return {seanceId:s.id,frequence,dureeSecondes,
      sourceDuree:dureeSecondes===null?null:Object.hasOwn(duree,"secondes")?"calculee_retenue":"souhaitee",
      volumeSecondes:tempsValide(hebdo)?hebdo:null,retenue:papRenfoSeanceRetenueValide(r,s)};
  });
  const total=rows=>{
    const nombreTypes=rows.length;
    const frequence=nombreTypes&&rows.every(s=>s.frequence!==null)?rows.reduce((n,s)=>n+s.frequence,0):null;
    const volume=nombreTypes&&rows.every(s=>s.volumeSecondes!==null)?rows.reduce((n,s)=>n+s.volumeSecondes,0):null;
    return {nombreTypes,frequence,volumeSecondes:tempsValide(volume)?volume:null};
  };
  return {exclu,seances,travail:total(seances),retenues:total(seances.filter(s=>s.retenue))};
}

// 5-RENFO-02b : contrat minimal de données Détaillée.
// Ces fonctions ne sélectionnent/prescrivent aucun exercice et ne modifient pas le DOM.
// Les sorties restent synthétiques ; 4d active le modèle canonique.
// La frontière historique est temporaire et ne constitue pas une seconde source dans un état canonique.
function papRenfoEstCanonique(r) { return r?.versionSchema === PAP_RENFO_SCHEMA_VERSION; }
function papRenfoCreerEtatCanonique() {
  const r = {versionSchema:PAP_RENFO_SCHEMA_VERSION, etat:"non_renseigne", general:{}, seances:[], prochainIdSeance:1};
  papRenfoCreerSeance(r);
  return r;
}
// Données de composante uniquement ; les champs de séance ne passent pas par cette frontière.
function papRenfoEtatRenseigne(r) {
  const texte=v=>typeof v==="string" && v.trim()!=="";
  const g=r.general||{};
  return texte(g.objectif)||texte(g.objectifComplementaire)||r.seances.some(s=>
    [s.nom,s.type,s.frequence?.valeur,s.duree?.valeur,s.intensite,s.materiel,s.notes].some(texte)||
    s.zones.length>0||s.jours.length>0||s.exercices.length>0||s.programmeType?.exclusions?.length>0||
    [s.organisation,s.dosageCommun,s.modelesDosage].some(o=>Object.values(o||{}).some(texte)));
}
function papRenfoActualiserEtat(r) {
  if(r.etat!=="desactive") r.etat=papRenfoEtatRenseigne(r)?"actif":"non_renseigne";
  return r;
}
function papRenfoRetirerSeance(r,id) {
  if(!papRenfoEstCanonique(r)) throw new Error("État canonique requis");
  papRenfoTrouverSeance(r,id);
  r.seances=r.seances.filter(s=>s.id!==id);
  if(!r.seances.length) papRenfoCreerSeance(r);
  return papRenfoActualiserEtat(r);
}
function papRenfoModifierGeneralCanonique(r, changements) {
  if (!papRenfoEstCanonique(r)) throw new Error("État canonique requis");
  const entrees=Object.entries(changements || {});
  for(const [cle,valeur] of entrees) if(!["objectif","objectifComplementaire"].includes(cle) || typeof valeur!=="string") throw new Error("Champ général invalide : "+cle);
  let change=false;
  for(const [cle,valeur] of entrees) if((r.general[cle]??"")!==valeur){r.general[cle]=valeur;change=true;}
  papRenfoActualiserEtat(r);
  return change;
}
function papRenfoCreerSeance(renforcement) {
  if (!renforcement || !Array.isArray(renforcement.seances)) throw new Error("État Renforcement non initialisé");
  const canonique = papRenfoEstCanonique(renforcement);
  const numero = renforcement.prochainIdSeance++;
  const premiere = renforcement.seances.length === 0;
  const source = !canonique && premiere ? "generale" : "seance";
  const seance = {
    id: `renfo-seance-${numero}`, nom: "",
    frequence: { source, valeur: "" }, duree: { source, valeur: "" },
    intensite: "", intensiteSource: source, zones: [], zonesSource: source,
    materiel: "", organisation: {}, exercices: [], dosageCommun: {}, modelesDosage: {},
    programmeType: { ids: [], exclusions: [] }, dureeCalculeeRetenue: null, statut: "brouillon"
  };
  if (canonique) Object.assign(seance,{type:"",jours:[],notes:"",prochainIdExercice:1});
  // Transition 1 -> plusieurs types : conserver exactement les valeurs déjà
  // affichées dans la première séance. Elles deviennent ses valeurs propres,
  // sans répartition automatique et sans préremplissage du nouveau type.
  if (!canonique && !premiere) {
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

// 4e.2 — Préremplissage ponctuel demandé par le médecin (A6-r).
// Liste positive de champs : ne pas copier une séance entière, ni un état de progression.
// Le modèle de dosage actif est organisation.niveau ; aucun clic de modèle simulé.
function papRenfoPreparerParametresSeance(r, id) {
  if (!papRenfoEstCanonique(r)) throw new Error("État canonique requis");
  const source=papRenfoTrouverSeance(r,id);
  const texte=v=>{if(typeof v!=="string")throw new Error("Paramètre source invalide");return v;};
  const champs=(obj,cles)=>{
    if(!obj||typeof obj!=="object"||Array.isArray(obj))throw new Error("Paramètres source invalides");
    return Object.fromEntries(cles.filter(k=>Object.hasOwn(obj,k)).map(k=>[k,texte(obj[k])]));
  };
  if(source.duree?.source!=="seance"||source.intensiteSource!=="seance"||source.zonesSource!=="seance")throw new Error("Provenance source invalide");
  if(!Array.isArray(source.zones)||new Set(source.zones).size!==source.zones.length)throw new Error("Zones source invalides");
  return {
    type:texte(source.type),duree:{source:"seance",valeur:texte(source.duree.valeur)},
    intensite:texte(source.intensite),zones:[...source.zones],materiel:texte(source.materiel),
    organisation:champs(source.organisation,["format","rounds","niveau","restRounds","restEx","warmup","cooldown"]),
    dosageCommun:champs(source.dosageCommun,["series","reps","hold","rest"]),notes:texte(source.notes)
  };
}
function papRenfoCreerSeancePreremplie(r,idSource) {
  const parametres=papRenfoPreparerParametresSeance(r,idSource);
  // Préparer hors de l'état réel : aucun numéro consommé ni mutation en cas de refus.
  if(!Number.isSafeInteger(r.prochainIdSeance)||r.prochainIdSeance<1||r.seances.some(s=>s.id===`renfo-seance-${r.prochainIdSeance}`))throw new Error("Compteur de séances invalide");
  const preparation={versionSchema:PAP_RENFO_SCHEMA_VERSION,etat:r.etat,general:{},seances:[],prochainIdSeance:r.prochainIdSeance};
  const seance=papRenfoCreerSeance(preparation);
  papRenfoModifierSeance(preparation,seance.id,parametres);
  r.seances.push(seance);r.prochainIdSeance=preparation.prochainIdSeance;
  papRenfoActualiserEtat(r);
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

// 4e.3 — A7 : jours indicatifs, sans déduction de fréquence ni effacement automatique.
const PAP_RENFO_JOURS = Object.freeze(["lun","mar","mer","jeu","ven","sam","dim"]);
function papRenfoCoherenceJours(frequence, jours) {
  const texte = typeof frequence === "string" ? frequence.trim() : "";
  const n = Number(texte);
  const maximum = texte && Number.isInteger(n) && n >= 1 && n <= 10 ? Math.min(n,7) : 7;
  const nombre = jours.length;
  return {maximum,nombre,depassement:Math.max(0,nombre-maximum)};
}

// Mise à jour EXPLICITE des champs d'une seule séance. Identité et statut
// ne sont pas modifiables par cette voie ; une vraie modification invalide la retenue.
function papRenfoModifierSeance(renforcement, id, changements) {
  const seance = papRenfoTrouverSeance(renforcement, id);
  const canonique = papRenfoEstCanonique(renforcement);
  const modifiables = new Set([
    "nom", "frequence", "duree", "intensite", "intensiteSource", "zones", "zonesSource", "materiel",
    "organisation", "exercices", "dosageCommun", "modelesDosage", "programmeType"
  ]);
  if (canonique) for (const champ of ["type","jours","notes"]) modifiables.add(champ);
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
    if (canonique) {
      if ((cle === "frequence" || cle === "duree") && valeur.source !== "seance") throw new Error("Héritage interdit dans le modèle canonique");
      if ((cle === "zonesSource" || cle === "intensiteSource") && valeur !== "seance") throw new Error("Héritage interdit dans le modèle canonique");
      if (["type","notes"].includes(cle) && typeof valeur !== "string") throw new Error("Texte de séance invalide");
      if (cle === "jours" && (!Array.isArray(valeur) || new Set(valeur).size !== valeur.length || valeur.some(j => !PAP_RENFO_JOURS.includes(j)))) throw new Error("Jours invalides");
    }
  }
  // La baisse de fréquence est autorisée sans effacement. Si la liste est
  // déjà trop longue, seuls les retraits (ou une liste redevenue cohérente)
  // sont autorisés ; aucun ajout tant que le maximum serait dépassé.
  if (canonique && Object.hasOwn(changements || {},"jours")) {
    const jours = changements.jours;
    const frequence = Object.hasOwn(changements,"frequence") ? changements.frequence.valeur : seance.frequence.valeur;
    if (papRenfoCoherenceJours(frequence,jours).depassement && jours.some(j => !seance.jours.includes(j))) {
      throw new Error("Nombre de jours supérieur à la fréquence");
    }
  }
  // Préparer les identités sans modifier la source : un refus ne consomme pas de numéro.
  let preparation = null;
  if (canonique && Object.hasOwn(changements || {},"exercices")) preparation = papRenfoPreparerOccurrences(seance,changements.exercices);
  let change = false;
  for (const [cle, valeurBrute] of entrees) {
    const valeur = cle === "exercices" && preparation ? preparation.exercices : valeurBrute;
    if (JSON.stringify(seance[cle]) !== JSON.stringify(valeur)) {
      seance[cle] = structuredClone(valeur);
      change = true;
    }
  }
  if (preparation) seance.prochainIdExercice = preparation.prochainIdExercice;
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
  if(canonique) papRenfoActualiserEtat(renforcement);
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
  if (papRenfoEstCanonique(renforcement)) {
    // Pas de réutilisation d'identité au sein de la consultation.
    papRenfoCreerSeance(renforcement);
    papRenfoActualiserEtat(renforcement);
  } else renforcement.prochainIdSeance = 1;
  // Conserve les valeurs générales et les programmes candidats Synthétique.
}

// L'identifiant catalogue (id) reste celui des règles de durée et de provenance.
// occurrenceId désigne une sélection particulière ; retirer puis réajouter crée une autre identité.
function papRenfoPreparerOccurrences(seance, liste) {
  if (!Array.isArray(liste)) throw new Error("Liste d'exercices invalide");
  const anciens = new Map((seance.exercices || []).map(e=>[e.id,e]));
  const vus = new Set();
  let prochainIdExercice = seance.prochainIdExercice;
  if (!Number.isSafeInteger(prochainIdExercice) || prochainIdExercice < 1) throw new Error("Compteur d'exercices invalide");
  const exercices = liste.map(e=>{
    if (!e || typeof e.id !== "string" || !e.id || vus.has(e.id)) throw new Error("Identité d'exercice invalide ou dupliquée");
    vus.add(e.id);
    const ancienne = anciens.get(e.id)?.occurrenceId;
    if (Object.hasOwn(e,"occurrenceId") && (!ancienne || e.occurrenceId !== ancienne)) throw new Error("Identité d'occurrence non modifiable");
    const occurrenceId = ancienne || `${seance.id}:ex-${prochainIdExercice++}`;
    return {...structuredClone(e),occurrenceId};
  });
  return {exercices,prochainIdExercice};
}

// Migration pure et non destructive. Aucun arbitrage implicite en cas de divergence.
// Une liste de candidats autonome ou une ancienne synthèse retenue nécessite
// une décision de reprise dans le contrôleur ; ne jamais les transformer en séance retenue.
// 4e.1 : supprimer la portée générale des adaptations sans perdre les textes.
// Une ancienne note générale concernait toutes les séances déjà présentes.
// La conversion n'invente aucune nouvelle consigne : texte identique ou champ vide
// seulement. Deux textes distincts nécessitent un arbitrage humain, sans concaténation.
function papRenfoMigrerNotes(r, noteGenerale) {
  const conflits=[];
  if(typeof noteGenerale!=="string") return [{code:"adaptations_generales_invalides"}];
  for(const s of r.seances) {
    if(typeof s.notes!=="string") conflits.push({code:"adaptations_seance_invalides",seance:s.id});
    else if(noteGenerale.trim() && s.notes.trim() && noteGenerale!==s.notes)
      conflits.push({code:"adaptations_a_reexaminer",seance:s.id,champ:"notes"});
  }
  if(conflits.length) return conflits;
  for(const s of r.seances) if(noteGenerale.trim() && !s.notes.trim()) s.notes=noteGenerale;
  delete r.general.notes;
  return conflits;
}
function papRenfoPreparerMigration(ancien) {
  if (papRenfoEstCanonique(ancien)) return {ok:true,etat:structuredClone(ancien),conflits:[]};
  if (!ancien || typeof ancien !== "object" || !Array.isArray(ancien.seances) || !ancien.general || typeof ancien.general !== "object") {
    return {ok:false,etat:null,conflits:[{code:"structure_invalide"}]};
  }
  const g = ancien.general, conflits = [];
  if (ancien.versionSchema === 2) {
    if (!ancien.seances.length || ancien.seances.some(s=>!s || typeof s.id!=="string"))
      return {ok:false,etat:null,conflits:[{code:"structure_invalide"}]};
    const r=structuredClone(ancien);
    const notes=Object.hasOwn(g,"notes")?g.notes:"";
    const c=papRenfoMigrerNotes(r,notes);
    if(c.length) return {ok:false,etat:null,conflits:c};
    r.versionSchema=PAP_RENFO_SCHEMA_VERSION;
    return {ok:true,etat:r,conflits:[]};
  }
  if (Object.hasOwn(ancien,"versionSchema")) return {ok:false,etat:null,conflits:[{code:"version_inconnue"}]};
  for(const [cle,v] of Object.entries(g)) {
    if(cle==="zones" ? (!Array.isArray(v)||v.some(z=>!["MI","MS","Tronc"].includes(z))) : typeof v!=="string") conflits.push({code:"valeur_generale_invalide",champ:cle});
  }
  if(conflits.length) return {ok:false,etat:null,conflits};
  if (ancien.programmeCandidat?.length) conflits.push({code:"candidats_a_reexaminer",nombre:ancien.programmeCandidat.length});
  if (ancien.syntheseRetenue) conflits.push({code:"validation_synthetique_a_reexaminer"});
  const connus = new Set(["objectif","objectifComplementaire","notes","type","frequence","duree","intensite","zones"]);
  for(const cle of Object.keys(g)) if(!connus.has(cle)) conflits.push({code:"champ_general_inconnu",champ:cle});
  const ses = ancien.seances;
  const ids = new Set();
  for(const s of ses) {
    if (!s || typeof s.id !== "string" || !/^renfo-seance-[1-9]\d*$/.test(s.id) || ids.has(s.id)) {conflits.push({code:"identite_seance_invalide"});continue;}
    ids.add(s.id);
    for(const champ of ["frequence","duree"]) if(!s[champ] || !["generale","seance"].includes(s[champ].source) || typeof s[champ].valeur!=="string") conflits.push({code:"parametre_invalide",seance:s.id,champ});
    for(const champ of ["intensite","zones"]) if(!["generale","seance"].includes(s[champ+"Source"])) conflits.push({code:"provenance_invalide",seance:s.id,champ});
    if(typeof s.intensite!=="string" || !Array.isArray(s.zones) || s.zones.some(z=>!["MI","MS","Tronc"].includes(z))) conflits.push({code:"parametre_invalide",seance:s.id,champ:"intensite_zones"});
    if (!Array.isArray(s.exercices) || new Set((s.exercices||[]).map(e=>e?.id)).size !== (s.exercices||[]).length || (s.exercices||[]).some(e=>!e || typeof e.id!=="string" || !e.id)) conflits.push({code:"exercices_invalides",seance:s.id});
  }
  if (conflits.some(c=>["identite_seance_invalide","parametre_invalide","provenance_invalide","exercices_invalides"].includes(c.code))) return {ok:false,etat:null,conflits};
  const normaliser = (champ,v) => champ === "zones" ? (Array.isArray(v) ? [...v] : []) : String(v??"");
  const nonVide = (champ,v) => champ === "zones" ? v.length>0 : v.trim()!=="";
  const egaux = (champ,a,b) => champ === "zones" ? JSON.stringify([...a].sort())===JSON.stringify([...b].sort()) : a===b;
  const champs = ["frequence","duree","intensite","zones"];
  const resoudre = (s,champ) => {
    const numerique=["frequence","duree"].includes(champ);
    const source=numerique?s[champ].source:s[champ+"Source"];
    const v=normaliser(champ,numerique?s[champ].valeur:s[champ]);
    const gv=normaliser(champ,g[champ]);
    if (source === "generale") {
      if(numerique && ses.length!==1) conflits.push({code:"heritage_multiseance_ambigu",seance:s.id,champ});
      return gv;
    }
    if(s===ses[0] && nonVide(champ,gv) && !egaux(champ,v,gv)) conflits.push({code:"divergence_general_seance",seance:s.id,champ});
    return v;
  };
  const r = {versionSchema:PAP_RENFO_SCHEMA_VERSION,etat:ancien.etat||"non_renseigne",general:{},seances:[],prochainIdSeance:Math.max(1,Number.isSafeInteger(ancien.prochainIdSeance)?ancien.prochainIdSeance:1,...[...ids].map(id=>Number(id.slice(13))+1))};
  for(const champ of ["objectif","objectifComplementaire"]) if(Object.hasOwn(g,champ)) r.general[champ]=structuredClone(g[champ]);
  if (!ses.length) {
    const s = papRenfoCreerSeance(r);
    for(const champ of champs) {
      const v=normaliser(champ,g[champ]);
      s[champ]=["frequence","duree"].includes(champ)?{source:"seance",valeur:v}:v;
    }
    s.type=normaliser("type",g.type);
  } else {
    r.seances=ses.map((s,i)=>{
      const copie=structuredClone(s);
      for(const champ of champs) {
        const v=resoudre(s,champ);
        if(["frequence","duree"].includes(champ)) copie[champ]={source:"seance",valeur:v};
        else {copie[champ]=v;copie[champ+"Source"]="seance";}
      }
      copie.type=i===0?normaliser("type",g.type):"";copie.jours=[];copie.notes=Object.hasOwn(s,"notes")?s.notes:"";
      copie.exercices=[];copie.prochainIdExercice=1;
      const preparation=papRenfoPreparerOccurrences(copie,s.exercices);
      Object.assign(copie,preparation);
      return copie;
    });
  }
  conflits.push(...papRenfoMigrerNotes(r,Object.hasOwn(g,"notes")?g.notes:""));
  return conflits.length?{ok:false,etat:null,conflits}:{ok:true,etat:r,conflits:[]};
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

// 4e.4 — P10 : fondations techniques du Progressif Renforcement.
// Registre candidat des paramètres effectivement présents dans la source canonique.
// Ni cible par défaut, ni calcul de progression, ni stockage d'un second départ.
// L'éligibilité clinique finale et les conventions de calcul relèvent de l'étape 7.
const PAP_RENFO_PROGRESSION_REGISTRE = (() => {
  const entries = {};
  const add = (id,portee,champ,libelle,unite,type,min,max=null,condition=null) => {
    entries[id] = Object.freeze({id,portee,champ,libelle,unite,type,min,max,condition,
      methodes:Object.freeze(type==='choix'?['cible']:['cible','increment'])});
  };
  add('seance.frequence','seance','frequence','Séances par semaine','seances/sem','entier',1,10);
  add('seance.duree','seance','duree','Durée souhaitée','min','decimal',Number.MIN_VALUE);
  add('seance.intensite','seance','intensite','Intensité (effort perçu)',null,'choix',null);
  add('organisation.rounds','organisation','rounds','Tours de circuit','tour','entier',1,null,'circuit');
  add('organisation.restRounds','organisation','restRounds','Repos entre tours','s','entier',0,null,'circuit');
  add('organisation.restEx','organisation','restEx','Repos entre exercices','s','entier',0);
  add('organisation.warmup','organisation','warmup','Échauffement','min','decimal',0);
  add('organisation.cooldown','organisation','cooldown','Retour au calme','min','decimal',0);
  for(const [champ,libelle,unite,min] of [['series','Séries','serie',1],['reps','Répétitions','rep',1],['hold','Tenue','s',1],['rest','Repos entre séries','s',0]])
    add('commun.'+champ,'commun',champ,libelle+' (dosage commun)',unite,'entier',min);
  for(const [champ,libelle,unite,min,condition] of [
    ['series','Séries','serie',1,null],['reps','Répétitions','rep',1,'dyn_simple'],['hold','Tenue','s',1,'iso_simple'],
    ['repDuration','Durée par répétition','s',1,'dyn'],['rest','Repos entre séries','s',0,null],
    ['restAfter','Repos spécifique après cet exercice','s',0,'transition'],
    ['rightReps','Répétitions droite','rep',1,'dyn_split'],['leftReps','Répétitions gauche','rep',1,'dyn_split'],
    ['rightHold','Tenue droite','s',1,'iso_split'],['leftHold','Tenue gauche','s',1,'iso_split']])
    add('exercice.'+champ,'exercice',champ,libelle,unite,'entier',min,null,condition);
  return Object.freeze(entries);
})();
function papRenfoProgressionRegistre(){return Object.values(PAP_RENFO_PROGRESSION_REGISTRE);}

// La référence n'est jamais un index DOM ni un identifiant catalogue.
// Elle ne vaut que dans la consultation et le modèle qui l'ont créée.
function papRenfoProgressionReference(ref){
  const p=ref&&typeof ref.parametre==='string'&&Object.hasOwn(PAP_RENFO_PROGRESSION_REGISTRE,ref.parametre)?PAP_RENFO_PROGRESSION_REGISTRE[ref.parametre]:null;
  if(!p||typeof ref.seanceId!=='string'||!ref.seanceId||
    (p.portee==='exercice'?(typeof ref.occurrenceId!=='string'||!ref.occurrenceId):Object.hasOwn(ref,'occurrenceId')))
    throw new Error('Référence de progression invalide');
  return p.portee==='exercice'?{seanceId:ref.seanceId,parametre:p.id,occurrenceId:ref.occurrenceId}:{seanceId:ref.seanceId,parametre:p.id};
}
function papRenfoProgressionLireSource(r,reference){
  const ref=papRenfoProgressionReference(reference), p=PAP_RENFO_PROGRESSION_REGISTRE[ref.parametre];
  if(!papRenfoEstCanonique(r))throw new Error('État canonique requis');
  const result=(etat,valeur=null,signature=null)=>({reference:ref,etat,valeur,unite:p.unite,type:p.type,calculable:etat==='renseigne'&&p.type!=='choix',signature});
  const s=r.seances.find(s=>s.id===ref.seanceId);
  if(!s)return result('seance_absente');
  const e=p.portee==='exercice'?s.exercices.find(e=>e.occurrenceId===ref.occurrenceId):null;
  if(p.portee==='exercice'&&!e)return result('exercice_absent');
  const d=e?.dosage||{},o=s.organisation||{};
  const mode=e?(d.mode||(PAP_RENFO_STATIC_IDS.has(e.id)?'iso':'dyn')):null;
  const side=e&&papRenfoSideEnabled(e)?(d.side||'Les deux'):null;
  const split=side==='Les deux'&&d.perSide===true;
  const legacy=mode==='dyn'&&!Object.hasOwn(d,'repDuration')&&String(d.workDuration??'').trim()!=='';
  const conditions={circuit:o.format==='circuit',dyn:mode==='dyn'&&!legacy,dyn_simple:mode==='dyn'&&!split,
    iso_simple:mode==='iso'&&!split,dyn_split:mode==='dyn'&&split,iso_split:mode==='iso'&&split,
    transition:!!e&&s.exercices.indexOf(e)<s.exercices.length-1};
  if(p.condition&&!conditions[p.condition])return result('non_eligible');
  const brut=p.portee==='exercice'?d[p.champ]:p.portee==='commun'?s.dosageCommun?.[p.champ]:p.portee==='organisation'?o[p.champ]:p.champ==='intensite'?s.intensite:s[p.champ]?.valeur;
  if(p.portee==='seance'&&p.champ!=='intensite'&&s[p.champ]?.source!=='seance')return result('source_invalide');
  if(p.champ==='intensite'&&s.intensiteSource!=='seance')return result('source_invalide');
  const contexte=e?[e.id,!!e.libre,mode,side,split,d.timeSides??'',d.load??'',d.loadDetail??'',d.effort??'']:p.condition==='circuit'?[o.format]:[];
  if(brut===undefined||brut===null||(typeof brut==='string'&&!brut.trim()))return result('non_renseigne',null,JSON.stringify([ref,contexte,null]));
  let valeur;
  if(p.type==='choix'){
    if(!['Légère','Modérée','Élevée','À adapter selon le contexte'].includes(brut))return result('source_invalide');
    valeur=brut;
  }else{
    if(typeof brut!=='string'&&typeof brut!=='number')return result('source_invalide');
    valeur=Number(brut);
    if(!Number.isFinite(valeur)||valeur<p.min||(p.max!==null&&valeur>p.max)||(p.type==='entier'&&!Number.isSafeInteger(valeur)))return result('source_invalide');
  }
  return result('renseigne',valeur,JSON.stringify([ref,contexte,valeur]));
}

// Signature de la séance : inclut aussi les paramètres non ciblés qui peuvent
// modifier un futur calendrier ou sa restitution. Ne dépend pas du DOM, du nom
// d'affichage, du statut retenu, ni de l'ordre des clés dans les objets.
// L'ordre des exercices est pertinent pour le plan, pas pour leur identité.
function papRenfoProgressionSignatureSeance(s){
  const values=(o,keys)=>keys.map(k=>o?.[k]??'');
  return JSON.stringify([s.id,s.type,s.frequence?.valeur,s.duree?.valeur,s.intensite,s.materiel,
    [...s.zones].sort(),[...s.jours].sort(),s.notes,
    values(s.organisation,['format','rounds','restRounds','restEx','warmup','cooldown']),
    values(s.dosageCommun,['series','reps','hold','rest']),
    s.exercices.map(e=>[e.occurrenceId,e.id,!!e.libre,e.nom??e.name??'',e.region??'',Object.hasOwn(e.dosage||{},'repDuration'),values(e.dosage,
      ['mode','series','reps','hold','workDuration','repDuration','rest','restAfter','load','loadDetail','effort','side','perSide','rightReps','leftReps','rightHold','leftHold','timeSides','note'])])]);
}
// Capture technique à la demande, non médicale : pas de valeur de départ éditable.
// Une cible avec départ non renseigné est possible, mais non calculable.
function papRenfoProgressionCapturerSources(r,references){
  if(!papRenfoEstCanonique(r)||!Array.isArray(references)||!references.length)throw new Error('Sources de progression invalides');
  if(r.etat==='desactive')throw new Error('Composante exclue');
  const vus=new Set(),seances=new Map();
  const parametres=references.map(reference=>{
    const source=papRenfoProgressionLireSource(r,reference),cle=JSON.stringify(source.reference);
    if(vus.has(cle)||!['renseigne','non_renseigne'].includes(source.etat))throw new Error('Source de progression indisponible ou dupliquée');
    vus.add(cle);
    const s=papRenfoTrouverSeance(r,source.reference.seanceId);
    seances.set(s.id,papRenfoProgressionSignatureSeance(s));
    return {reference:source.reference,signature:source.signature};
  });
  return {version:1,parametres,seances:[...seances].map(([seanceId,signature])=>({seanceId,signature}))};
}
// Comparaison pure : ne modifie ni les sources, ni les cibles, ni un calendrier.
// Étape 7 : raccorder cette comparaison aux mutations, marquer durablement la
// retenue caduque, ne remplacer la capture qu'après réexamen volontaire.
function papRenfoProgressionComparerSources(r,capture){
  if(!papRenfoEstCanonique(r)||capture?.version!==1||!Array.isArray(capture.parametres)||!capture.parametres.length||!Array.isArray(capture.seances))throw new Error('Capture de progression invalide');
  const refs=capture.parametres.map(p=>papRenfoProgressionReference(p?.reference));
  const ids=new Set(refs.map(ref=>ref.seanceId));
  if(new Set(refs.map(ref=>JSON.stringify(ref))).size!==refs.length||capture.parametres.some(p=>typeof p.signature!=='string')||
    capture.seances.length!==ids.size||new Set(capture.seances.map(p=>p?.seanceId)).size!==ids.size||capture.seances.some(p=>!ids.has(p?.seanceId)||typeof p.signature!=='string'))throw new Error('Capture de progression invalide');
  const parametres=capture.parametres.map(p=>{
    const source=papRenfoProgressionLireSource(r,p.reference);
    return {reference:source.reference,etat:source.etat,modifie:source.signature===null||source.signature!==p.signature};
  });
  const seances=capture.seances.map(p=>{
    const s=r.seances.find(s=>s.id===p.seanceId);
    return {seanceId:p.seanceId,absente:!s,modifie:!s||papRenfoProgressionSignatureSeance(s)!==p.signature};
  });
  const exclue=r.etat==='desactive';
  return {exclue,aReexaminer:exclue||parametres.some(p=>p.modifie)||seances.some(s=>s.modifie),parametres,seances};
}
