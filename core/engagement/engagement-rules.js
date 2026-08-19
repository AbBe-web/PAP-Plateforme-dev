// core/engagement/engagement-rules.js

/*
 * PAP — Engagement rules
 *
 * Noyau métier déterministe pour l'Engagement.
 *
 * Ce fichier :
 * - ne lit pas le DOM ;
 * - ne modifie aucun état patient ;
 * - ne dépend pas de l'interface ;
 * - ne prend aucune décision clinique ;
 * - fournit uniquement des normalisations et dérivations
 *   utilisées comme aide cognitive structurée.
 */


/*
 * Transforme une classification native d'activité physique
 * en statut fonctionnel utilisable par le moteur Engagement.
 *
 * Retour :
 * - true  : recommandations atteintes ;
 * - false : recommandations non atteintes ;
 * - null  : statut non déterminable à partir des données fournies.
 *
 * IMPORTANT :
 * la classification native n'est jamais modifiée.
 */
function normalizeActivityStatusForEngagement(
  questionnaireSource,
  nativeLevel
) {

  if (
    typeof questionnaireSource !== "string" ||
    typeof nativeLevel !== "string"
  ) {
    return null;
  }

  const source =
    questionnaireSource
      .trim()
      .toLowerCase();

  const level =
    nativeLevel
      .trim()
      .toLowerCase();


  if (source === "gpaq") {

    if (
      level === "tres_actif" ||
      level === "très_actif" ||
      level === "moyennement_actif"
    ) {
      return true;
    }

    if (
      level === "insuffisamment_actif" ||
      level === "inactif"
    ) {
      return false;
    }

    return null;
  }


  if (source === "marshall") {

    if (
      level === "suffisamment_actif" ||
      level === "actif"
    ) {
      return true;
    }

    if (
      level === "insuffisamment_actif" ||
      level === "inactif"
    ) {
      return false;
    }

    return null;
  }


  if (
    source === "clinique" ||
    source === "clinical"
  ) {

    if (
      level === "tres_actif" ||
      level === "actif"
    ) {
      return true;
    }

    if (level === "inactif") {
      return false;
    }

    return null;
  }


  return null;
}


/*
 * Registre déterministe minimal de sports reconnus.
 *
 * Objectif :
 * - déclencher certaines questions d'engagement
 *   (ex. pratique en compétition) ;
 * - sans demander à l'utilisateur de classifier
 *   chaque activité physique ;
 * - sans IA ni inférence libre.
 *
 * Le registre est volontairement non exhaustif :
 * un sport non reconnu reste simplement non détecté.
 */
const ENGAGEMENT_SPORT_REGISTRY = {
  football: [
    "football",
    "foot",
    "soccer"
  ],

  tennis: [
    "tennis"
  ],

  rugby: [
    "rugby"
  ],

  basketball: [
    "basket",
    "basketball",
    "basket ball"
  ],

  handball: [
    "handball",
    "hand ball"
  ],

  volleyball: [
    "volley",
    "volleyball",
    "volley ball"
  ],

  badminton: [
    "badminton"
  ],

  squash: [
    "squash"
  ],

  padel: [
    "padel"
  ],

  judo: [
    "judo"
  ],

  karate: [
    "karate"
  ],

  boxe: [
    "boxe",
    "boxing"
  ],

  triathlon: [
    "triathlon"
  ],

  athletisme: [
    "athletisme"
  ],

  escalade: [
    "escalade"
  ],

  aviron: [
    "aviron"
  ],

  golf: [
    "golf"
  ],

  cyclisme: [
    "cyclisme",
    "velo"
  ],

  marche_nordique: [
    "marche nordique",
    "nordic walking"
  ],

  course_a_pied: [
    "course à pied",
    "course a pied",
    "running",
    "jogging"
  ],

  trail: [
    "trail",
    "trail running"
  ]
};


/*
 * Normalise un libellé uniquement pour permettre
 * une comparaison déterministe avec le registre.
 *
 * Exemple :
 * "  Vélo " -> "velo"
 * "Karaté"   -> "karate"
 */
function normalizeEngagementActivityLabel(value) {

  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ");
}


/*
 * Détecte si un libellé correspond exactement
 * à un sport connu du registre.
 *
 * Retour :
 * - identifiant canonique du sport si reconnu ;
 * - null sinon.
 *
 * IMPORTANT :
 * pas de recherche par sous-chaîne.
 * "tennis de table" ne devient donc pas automatiquement
 * "tennis" tant qu'il n'est pas explicitement ajouté au registre.
 */
function detectEngagementSport(activityLabel) {

  const normalizedLabel =
    normalizeEngagementActivityLabel(activityLabel);

  if (!normalizedLabel) {
    return null;
  }

  for (const [sportId, aliases] of Object.entries(
    ENGAGEMENT_SPORT_REGISTRY
  )) {

    const normalizedAliases =
      aliases.map(normalizeEngagementActivityLabel);

    if (normalizedAliases.includes(normalizedLabel)) {
      return sportId;
    }
  }

  return null;
}


/*
 * Dérive le stade motivationnel TTM à partir
 * de déterminants explicites.
 *
 * Retour :
 *
 * {
 *   status: "determined" | "not_determinable",
 *   stage:
 *     "indétermination" |
 *     "intention" |
 *     "préparation" |
 *     "action" |
 *     "consolidation" |
 *     null
 * }
 *
 * IMPORTANT :
 * "indétermination" est un vrai stade TTM.
 * Une donnée insuffisante produit "not_determinable".
 */
function computeStageOfChange({
  meetsRecommendations = null,
  activeDuration = null,
  increaseAlreadyStarted = null,
  increaseWithinOneMonth = null,
  increaseWithinSixMonths = null
} = {}) {

  const notDeterminable = {
    status: "not_determinable",
    stage: null
  };


  if (meetsRecommendations === true) {

    if (activeDuration === "lt_6_months") {
      return {
        status: "determined",
        stage: "action"
      };
    }

    if (activeDuration === "gte_6_months") {
      return {
        status: "determined",
        stage: "consolidation"
      };
    }

    return notDeterminable;
  }


  if (meetsRecommendations === false) {

    if (increaseAlreadyStarted === true) {
      return {
        status: "determined",
        stage: "préparation"
      };
    }

    if (increaseWithinOneMonth === true) {
      return {
        status: "determined",
        stage: "préparation"
      };
    }

    if (increaseWithinOneMonth !== false) {
      return notDeterminable;
    }

    if (increaseWithinSixMonths === true) {
      return {
        status: "determined",
        stage: "intention"
      };
    }

    if (increaseWithinSixMonths === false) {
      return {
        status: "determined",
        stage: "indétermination"
      };
    }

    return notDeterminable;
  }


  return notDeterminable;
}


window.normalizeActivityStatusForEngagement =
  normalizeActivityStatusForEngagement;

window.normalizeEngagementActivityLabel =
  normalizeEngagementActivityLabel;

window.detectEngagementSport =
  detectEngagementSport;

window.computeStageOfChange =
  computeStageOfChange;
