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
  football: {
    label: "Football",
    aliases: [
      "football",
      "foot",
      "soccer"
    ],
    activity_type: "sport",
    competition_question: true
  },

  tennis: {
    label: "Tennis",
    aliases: [
      "tennis"
    ],
    activity_type: "sport",
    competition_question: true
  },

  rugby: {
    label: "Rugby",
    aliases: [
      "rugby"
    ],
    activity_type: "sport",
    competition_question: true
  },

  basketball: {
    label: "Basket-ball",
    aliases: [
      "basket",
      "basketball",
      "basket ball"
    ],
    activity_type: "sport",
    competition_question: true
  },

  handball: {
    label: "Handball",
    aliases: [
      "handball",
      "hand ball"
    ],
    activity_type: "sport",
    competition_question: true
  },

  volleyball: {
    label: "Volley-ball",
    aliases: [
      "volley",
      "volleyball",
      "volley ball"
    ],
    activity_type: "sport",
    competition_question: true
  },

  badminton: {
    label: "Badminton",
    aliases: [
      "badminton"
    ],
    activity_type: "sport",
    competition_question: true
  },

  squash: {
    label: "Squash",
    aliases: [
      "squash"
    ],
    activity_type: "sport",
    competition_question: true
  },

  padel: {
    label: "Padel",
    aliases: [
      "padel"
    ],
    activity_type: "sport",
    competition_question: true
  },

  judo: {
    label: "Judo",
    aliases: [
      "judo"
    ],
    activity_type: "sport",
    competition_question: true
  },

  karate: {
    label: "Karaté",
    aliases: [
      "karate"
    ],
    activity_type: "sport",
    competition_question: true
  },

  boxe: {
    label: "Boxe",
    aliases: [
      "boxe",
      "boxing"
    ],
    activity_type: "sport",
    competition_question: true
  },

  triathlon: {
    label: "Triathlon",
    aliases: [
      "triathlon"
    ],
    activity_type: "sport",
    competition_question: true
  },

  athletisme: {
    label: "Athlétisme",
    aliases: [
      "athletisme"
    ],
    activity_type: "sport",
    competition_question: true
  },

  escalade: {
    label: "Escalade",
    aliases: [
      "escalade"
    ],
    activity_type: "sport",
    competition_question: true
  },

  aviron: {
    label: "Aviron",
    aliases: [
      "aviron"
    ],
    activity_type: "sport",
    competition_question: true
  },

  golf: {
    label: "Golf",
    aliases: [
      "golf"
    ],
    activity_type: "sport",
    competition_question: true
  },

  cyclisme: {
    label: "Cyclisme",
    aliases: [
      "cyclisme",
      "cyclisme route",
      "cyclisme sur route"
    ],
    activity_type: "sport",
    competition_question: true
  },

  marche_nordique: {
    label: "Marche nordique",
    aliases: [
      "marche nordique",
      "nordic walking"
    ],
    activity_type: "sport",
    competition_question: true
  },

  natation: {
    label: "Natation",
    aliases: [
      "natation",
      "swimming"
    ],
    activity_type: "sport",
    competition_question: true
  },

  course_a_pied: {
    label: "Course à pied",
    aliases: [
      "course à pied",
      "course a pied",
      "course à pieds",
      "course a pieds",
      "running",
      "jogging"
    ],
    activity_type: "sport",
    competition_question: true
  },

  trail: {
    label: "Trail",
    aliases: [
      "trail",
      "trail running"
    ],
    activity_type: "sport",
    competition_question: true
  },

  tennis_table: {
    label: "Tennis de table",
    aliases: [
      "tennis de table",
      "ping pong",
      "ping-pong"
    ],
    activity_type: "sport",
    competition_question: true
  },

  vtt: {
    label: "VTT",
    aliases: [
      "vtt",
      "velo tout terrain",
      "vélo tout terrain",
      "mountain bike",
      "mtb"
    ],
    activity_type: "sport",
    competition_question: true
  },

  course_orientation: {
    label: "Course d’orientation",
    aliases: [
      "course d'orientation",
      "course d’orientation",
      "orientation"
    ],
    activity_type: "sport",
    competition_question: true
  },

  petanque: {
    label: "Pétanque",
    aliases: [
      "petanque",
      "pétanque"
    ],
    activity_type: "sport",
    competition_question: true
  },

  marche: {
    label: "Marche",
    aliases: [
      "marche"
    ],
    activity_type: "physical_activity",
    competition_question: false
  },

  randonnee_pedestre: {
    label: "Randonnée pédestre",
    aliases: [
      "randonnee",
      "randonnée",
      "randonnee pedestre",
      "randonnée pédestre"
    ],
    activity_type: "physical_activity",
    competition_question: false
  },

  yoga: {
    label: "Yoga",
    aliases: [
      "yoga"
    ],
    activity_type: "physical_activity",
    competition_question: false
  },

  pilates: {
    label: "Pilates",
    aliases: [
      "pilates"
    ],
    activity_type: "physical_activity",
    competition_question: false
  },

  aquagym: {
    label: "Aquagym",
    aliases: [
      "aquagym",
      "aqua gym",
      "gym aquatique"
    ],
    activity_type: "physical_activity",
    competition_question: false
  },

  equitation: {
    label: "Équitation",
    aliases: [
      "equitation",
      "équitation",
      "cheval"
    ],
    activity_type: "sport",
    competition_question: true
  },

  gymnastique: {
    label: "Gymnastique",
    aliases: [
      "gymnastique",
      "gym sportive"
    ],
    activity_type: "sport",
    competition_question: true
  },

  canoe_kayak: {
    label: "Canoë-kayak",
    aliases: [
      "canoe kayak",
      "canoë kayak",
      "canoe-kayak",
      "canoë-kayak",
      "canoe",
      "canoë",
      "kayak"
    ],
    activity_type: "sport",
    competition_question: true
  },

  escrime: {
    label: "Escrime",
    aliases: [
      "escrime",
      "fencing"
    ],
    activity_type: "sport",
    competition_question: true
  },

  tir_arc: {
    label: "Tir à l’arc",
    aliases: [
      "tir à l'arc",
      "tir a l'arc",
      "tir à l’arc",
      "tir a l’arc",
      "archery"
    ],
    activity_type: "sport",
    competition_question: true
  },

  halterophilie: {
    label: "Haltérophilie",
    aliases: [
      "halterophilie",
      "haltérophilie",
      "weightlifting"
    ],
    activity_type: "sport",
    competition_question: true
  },

  force_athletique: {
    label: "Force athlétique",
    aliases: [
      "force athletique",
      "force athlétique",
      "powerlifting"
    ],
    activity_type: "sport",
    competition_question: true
  },

  savate: {
    label: "Savate / boxe française",
    aliases: [
      "savate",
      "boxe francaise",
      "boxe française"
    ],
    activity_type: "sport",
    competition_question: true
  },

  kickboxing: {
    label: "Kick-boxing / Muay thaï",
    aliases: [
      "kick boxing",
      "kick-boxing",
      "kickboxing",
      "muay thai",
      "muay thaï"
    ],
    activity_type: "sport",
    competition_question: true
  },

  rugby_xiii: {
    label: "Rugby à XIII",
    aliases: [
      "rugby à xiii",
      "rugby a xiii",
      "rugby 13",
      "rugby à 13",
      "rugby a 13"
    ],
    activity_type: "sport",
    competition_question: true
  },

  futsal: {
    label: "Futsal",
    aliases: [
      "futsal",
      "foot en salle",
      "football en salle"
    ],
    activity_type: "sport",
    competition_question: true
  },

  ski_alpin: {
    label: "Ski alpin",
    aliases: [
      "ski alpin"
    ],
    activity_type: "sport",
    competition_question: true
  },

  ski_fond: {
    label: "Ski de fond",
    aliases: [
      "ski de fond",
      "ski nordique"
    ],
    activity_type: "sport",
    competition_question: true
  },

  ski_randonnee: {
    label: "Ski de randonnée",
    aliases: [
      "ski de randonnée",
      "ski de randonnee",
      "ski rando",
      "ski de rando"
    ],
    activity_type: "sport",
    competition_question: false
  },

  snowboard: {
    label: "Snowboard",
    aliases: [
      "snowboard",
      "snow"
    ],
    activity_type: "sport",
    competition_question: true
  },

  surf: {
    label: "Surf",
    aliases: [
      "surf"
    ],
    activity_type: "sport",
    competition_question: true
  },

  voile: {
    label: "Voile",
    aliases: [
      "voile",
      "sailing"
    ],
    activity_type: "sport",
    competition_question: true
  },

  stand_up_paddle: {
    label: "Stand-up paddle",
    aliases: [
      "stand up paddle",
      "stand-up paddle",
      "sup"
    ],
    activity_type: "sport",
    competition_question: true
  },

  roller: {
    label: "Roller",
    aliases: [
      "roller",
      "roller skating"
    ],
    activity_type: "sport",
    competition_question: true
  },

  skateboard: {
    label: "Skateboard",
    aliases: [
      "skateboard",
      "skate"
    ],
    activity_type: "sport",
    competition_question: true
  },

  hockey: {
    label: "Hockey",
    aliases: [
      "hockey",
      "hockey sur glace",
      "hockey sur gazon"
    ],
    activity_type: "sport",
    competition_question: true
  },

  patinage: {
    label: "Patinage",
    aliases: [
      "patinage",
      "patinage artistique",
      "patinage de vitesse"
    ],
    activity_type: "sport",
    competition_question: true
  },

  plongee: {
    label: "Plongée",
    aliases: [
      "plongee",
      "plongée",
      "plongee sous marine",
      "plongée sous marine",
      "plongee sous-marine",
      "plongée sous-marine"
    ],
    activity_type: "sport",
    competition_question: false
  },

  apnee: {
    label: "Apnée",
    aliases: [
      "apnee",
      "apnée"
    ],
    activity_type: "sport",
    competition_question: true
  },

  bowling: {
    label: "Bowling",
    aliases: [
      "bowling"
    ],
    activity_type: "sport",
    competition_question: true
  },

  billard: {
    label: "Billard",
    aliases: [
      "billard",
      "billiard"
    ],
    activity_type: "sport",
    competition_question: true
  },

  velo_loisir: {
    label: "Vélo loisir",
    aliases: [
      "velo",
      "vélo",
      "velo loisir",
      "vélo loisir",
      "balade a velo",
      "balade à vélo"
    ],
    activity_type: "physical_activity",
    competition_question: false
  },

  cyclotourisme: {
    label: "Cyclotourisme",
    aliases: [
      "cyclotourisme",
      "cyclo tourisme"
    ],
    activity_type: "physical_activity",
    competition_question: false
  },

  musculation: {
    label: "Musculation",
    aliases: [
      "musculation",
      "muscu"
    ],
    activity_type: "physical_activity",
    competition_question: false
  },

  fitness: {
    label: "Fitness / remise en forme",
    aliases: [
      "fitness",
      "remise en forme",
      "cardio training",
      "cardio-training"
    ],
    activity_type: "physical_activity",
    competition_question: false
  },

  gymnastique_volontaire: {
    label: "Gymnastique volontaire",
    aliases: [
      "gymnastique volontaire",
      "gym volontaire",
      "gym douce"
    ],
    activity_type: "physical_activity",
    competition_question: false
  },

  tai_chi_qi_gong: {
    label: "Tai-chi / Qi Gong",
    aliases: [
      "tai chi",
      "tai-chi",
      "taichi",
      "qi gong",
      "qi-gong",
      "qigong"
    ],
    activity_type: "physical_activity",
    competition_question: false
  },

  danse: {
    label: "Danse",
    aliases: [
      "danse",
      "dance"
    ],
    activity_type: "physical_activity",
    competition_question: false
  }
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
function detectEngagementActivity(activityLabel) {

  const normalizedLabel =
    normalizeEngagementActivityLabel(activityLabel);

  if (!normalizedLabel) {
    return null;
  }

  for (const [activityId, activityDefinition] of Object.entries(
    ENGAGEMENT_SPORT_REGISTRY
  )) {

    const aliases =
      Array.isArray(activityDefinition?.aliases)
        ? activityDefinition.aliases
        : [];

    const normalizedAliases =
      aliases.map(normalizeEngagementActivityLabel);

    if (normalizedAliases.includes(normalizedLabel)) {
      return activityId;
    }
  }

  return null;
}


/*
 * API historique conservée.
 *
 * Ne retourne un identifiant que si l'entrée reconnue
 * est explicitement classée comme sport.
 */
function detectEngagementSport(activityLabel) {

  const activityId =
    detectEngagementActivity(activityLabel);

  if (!activityId) {
    return null;
  }

  const activityDefinition =
    ENGAGEMENT_SPORT_REGISTRY[activityId];

  return activityDefinition?.activity_type === "sport"
    ? activityId
    : null;
}

function getEngagementSportDefinition(sportId) {

  if (
    typeof sportId !== "string" ||
    !sportId
  ) {
    return null;
  }

  return ENGAGEMENT_SPORT_REGISTRY[sportId] || null;
}


function getEngagementActivityType(activityId) {

  const activityDefinition =
    getEngagementSportDefinition(activityId);

  const activityType =
    activityDefinition?.activity_type;

  return (
    activityType === "sport" ||
    activityType === "physical_activity"
  )
    ? activityType
    : null;
}


function shouldAskEngagementCompetition(activityId) {

  const activityDefinition =
    getEngagementSportDefinition(activityId);

  return activityDefinition?.competition_question === true;
}


/*
 * Retourne des suggestions déterministes à partir
 * d'un fragment de saisie.
 *
 * Règles :
 * - comparaison sur label canonique + aliases ;
 * - correspondance uniquement en début de terme ;
 * - aucune correction floue ;
 * - une seule suggestion par activité ;
 * - labels canoniques retournés ;
 * - ordre déterministe :
 *   1. label canonique commençant par le fragment ;
 *   2. correspondance via alias ;
 *   3. ordre alphabétique du label.
 */
function getEngagementActivitySuggestions(
  fragment,
  limit = 8
) {

  const normalizedFragment =
    normalizeEngagementActivityLabel(fragment);

  if (!normalizedFragment) {
    return [];
  }

  const suggestions = [];

  Object.entries(
    ENGAGEMENT_SPORT_REGISTRY
  ).forEach(([activityId, activityDefinition]) => {

    const label =
      typeof activityDefinition?.label === "string"
        ? activityDefinition.label
        : "";

    const aliases =
      Array.isArray(activityDefinition?.aliases)
        ? activityDefinition.aliases
        : [];

    const normalizedLabel =
      normalizeEngagementActivityLabel(label);

    const normalizedAliases =
      aliases.map(normalizeEngagementActivityLabel);

    const labelMatches =
      normalizedLabel.startsWith(normalizedFragment);

    const aliasMatches =
      normalizedAliases.some(alias =>
        alias.startsWith(normalizedFragment)
      );

    if (!labelMatches && !aliasMatches) {
      return;
    }

    suggestions.push({
      id: activityId,
      label,
      activity_type:
        activityDefinition?.activity_type || null,
      competition_question:
        activityDefinition?.competition_question === true,
      match_priority:
        labelMatches ? 0 : 1
    });
  });

  suggestions.sort((a, b) => {

    if (a.match_priority !== b.match_priority) {
      return a.match_priority - b.match_priority;
    }

    return a.label.localeCompare(
      b.label,
      "fr",
      { sensitivity: "base" }
    );
  });

  const safeLimit =
    Number.isInteger(limit) && limit > 0
      ? limit
      : 8;

  return suggestions
    .slice(0, safeLimit)
    .map(({ match_priority, ...suggestion }) =>
      suggestion
    );
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

window.detectEngagementActivity =
  detectEngagementActivity;

window.detectEngagementSport =
  detectEngagementSport;

window.getEngagementSportDefinition =
  getEngagementSportDefinition;

window.getEngagementActivityType =
  getEngagementActivityType;

window.shouldAskEngagementCompetition =
  shouldAskEngagementCompetition;

window.getEngagementActivitySuggestions =
  getEngagementActivitySuggestions;

window.computeStageOfChange =
  computeStageOfChange;
