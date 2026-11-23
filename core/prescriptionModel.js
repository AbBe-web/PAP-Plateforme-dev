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
    intensite: "", zones: [], materiel: "", organisation: {},
    exercices: [], dosageCommun: {}, modelesDosage: {},
    programmeType: { ids: [], exclusions: [] },
    statut: "brouillon"
  };
  // Ajouter un deuxième type peut rendre indéterminée la répartition de la
  // première séance : sa confirmation antérieure ne doit pas persister.
  if (!premiere) {
    for (const autre of renforcement.seances) {
      if (autre.frequence.source === "generale" || autre.duree.source === "generale") {
        autre.statut = "brouillon";
      }
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

// Mise à jour EXPLICITE des champs d'une seule séance. Identité et statut
// ne sont pas modifiables par cette voie ; une vraie modification invalide la retenue.
function papRenfoModifierSeance(renforcement, id, changements) {
  const seance = papRenfoTrouverSeance(renforcement, id);
  const modifiables = new Set([
    "nom", "frequence", "duree", "intensite", "zones", "materiel",
    "organisation", "exercices", "dosageCommun", "modelesDosage", "programmeType"
  ]);
  const entrees = Object.entries(changements || {});
  for (const [cle, valeur] of entrees) {
    if (!modifiables.has(cle)) throw new Error(`Champ de séance interdit : ${cle}`);
    if ((cle === "frequence" || cle === "duree") &&
        (!valeur || !["generale", "seance"].includes(valeur.source) ||
         typeof valeur.valeur !== "string")) throw new Error("Provenance de séance invalide");
  }
  let change = false;
  for (const [cle, valeur] of entrees) {
    if (JSON.stringify(seance[cle]) !== JSON.stringify(valeur)) {
      seance[cle] = structuredClone(valeur);
      change = true;
    }
  }
  if (change) seance.statut = "brouillon";
  return seance;
}

function papRenfoVerifierSeance(renforcement, id) {
  const frequence = papRenfoValeurSeance(renforcement, id, "frequence");
  const texte = frequence.valeur.trim();
  const nombre = Number(texte);
  const manquants = [];
  if (!texte || !Number.isInteger(nombre) || nombre <= 0) manquants.push("frequence");
  // Le critère « au moins un exercice » reste à arbitrer cliniquement.
  return { ok: manquants.length === 0, manquants, frequence };
}

// À appeler uniquement depuis une action explicite du médecin, une fois
// l'interface raccordée. Aucun document Détaillé n'est généré ici.
function papRenfoRetenirSeance(renforcement, id) {
  const controle = papRenfoVerifierSeance(renforcement, id);
  if (!controle.ok) return { ...controle, retenue: false };
  papRenfoTrouverSeance(renforcement, id).statut = "retenue";
  return { ...controle, retenue: true };
}

// Lorsqu'un champ général change, le futur contrôleur doit appeler cette fonction
// pour invalider les séances qui en dépendent ; le DOM actuel n'en crée aucune.
function papRenfoGeneralModifie(renforcement, champs) {
  for (const seance of renforcement.seances) {
    if (champs.some(champ => ["frequence", "duree"].includes(champ) &&
        seance[champ].source === "generale")) seance.statut = "brouillon";
  }
}

function papRenfoReinitialiserSeances(renforcement) {
  renforcement.seances = [];
  renforcement.prochainIdSeance = 1;
  // Conserve les valeurs générales et les programmes candidats Synthétique.
}
