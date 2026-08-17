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

window.computeStageOfChange =
  computeStageOfChange;
