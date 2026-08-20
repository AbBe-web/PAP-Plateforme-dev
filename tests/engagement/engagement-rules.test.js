"use strict";

const fs = require("fs");
const vm = require("vm");
const assert = require("assert");

global.window = global;


function loadScript(path) {

  const source =
    fs.readFileSync(
      path,
      "utf8"
    );

  vm.runInThisContext(
    source,
    {
      filename: path
    }
  );
}


loadScript(
  "./core/engagement/engagement-rules.js"
);


/*
 * ========================================
 * NORMALISATION DU NIVEAU D'ACTIVITE
 * ========================================
 */


/* GPAQ */

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "GPAQ",
    "tres_actif"
  ),
  true
);

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "GPAQ",
    "très_actif"
  ),
  true
);

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "GPAQ",
    "moyennement_actif"
  ),
  true
);

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "GPAQ",
    "insuffisamment_actif"
  ),
  false
);

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "GPAQ",
    "inactif"
  ),
  false
);


/* Marshall */

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "Marshall",
    "suffisamment_actif"
  ),
  true
);

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "Marshall",
    "actif"
  ),
  true
);

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "Marshall",
    "insuffisamment_actif"
  ),
  false
);

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "Marshall",
    "inactif"
  ),
  false
);


/* Saisie clinique */

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "clinique",
    "tres_actif"
  ),
  true
);

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "clinique",
    "actif"
  ),
  true
);

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "clinique",
    "inactif"
  ),
  false
);


/* Valeurs inconnues */

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "GPAQ",
    "niveau_inconnu"
  ),
  null
);

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    "questionnaire_inconnu",
    "actif"
  ),
  null
);

assert.strictEqual(
  normalizeActivityStatusForEngagement(
    null,
    "actif"
  ),
  null
);


/*
 * ========================================
 * STADE TTM — RECOMMANDATIONS ATTEINTES
 * ========================================
 */

assert.deepStrictEqual(
  computeStageOfChange({
    meetsRecommendations: true,
    activeDuration: "lt_6_months"
  }),
  {
    status: "determined",
    stage: "action"
  }
);

assert.deepStrictEqual(
  computeStageOfChange({
    meetsRecommendations: true,
    activeDuration: "gte_6_months"
  }),
  {
    status: "determined",
    stage: "consolidation"
  }
);

assert.deepStrictEqual(
  computeStageOfChange({
    meetsRecommendations: true,
    activeDuration: null
  }),
  {
    status: "not_determinable",
    stage: null
  }
);


/*
 * ========================================
 * STADE TTM — SOUS LES RECOMMANDATIONS
 * ========================================
 */


/* Augmentation déjà engagée */

assert.deepStrictEqual(
  computeStageOfChange({
    meetsRecommendations: false,
    increaseAlreadyStarted: true,
    increaseWithinOneMonth: false,
    increaseWithinSixMonths: false
  }),
  {
    status: "determined",
    stage: "préparation"
  }
);


/* Augmentation prévue dans le mois */

assert.deepStrictEqual(
  computeStageOfChange({
    meetsRecommendations: false,
    increaseAlreadyStarted: false,
    increaseWithinOneMonth: true
  }),
  {
    status: "determined",
    stage: "préparation"
  }
);


/* Pas dans le mois, mais dans les 6 mois */

assert.deepStrictEqual(
  computeStageOfChange({
    meetsRecommendations: false,
    increaseAlreadyStarted: false,
    increaseWithinOneMonth: false,
    increaseWithinSixMonths: true
  }),
  {
    status: "determined",
    stage: "intention"
  }
);


/* Ni dans le mois, ni dans les 6 mois */

assert.deepStrictEqual(
  computeStageOfChange({
    meetsRecommendations: false,
    increaseAlreadyStarted: false,
    increaseWithinOneMonth: false,
    increaseWithinSixMonths: false
  }),
  {
    status: "determined",
    stage: "indétermination"
  }
);


/*
 * ========================================
 * DONNEES INSUFFISANTES
 * ========================================
 */

assert.deepStrictEqual(
  computeStageOfChange({
    meetsRecommendations: false,
    increaseAlreadyStarted: false,
    increaseWithinOneMonth: false,
    increaseWithinSixMonths: null
  }),
  {
    status: "not_determinable",
    stage: null
  }
);

assert.deepStrictEqual(
  computeStageOfChange({
    meetsRecommendations: false,
    increaseAlreadyStarted: false,
    increaseWithinOneMonth: null,
    increaseWithinSixMonths: true
  }),
  {
    status: "not_determinable",
    stage: null
  }
);

assert.deepStrictEqual(
  computeStageOfChange({
    meetsRecommendations: null
  }),
  {
    status: "not_determinable",
    stage: null
  }
);


/*
 * ========================================
 * GARDE-FOU :
 * LA BRANCHE ACTIVE IGNORE LES DONNEES
 * D'INTENTION QUI NE LUI APPARTIENNENT PAS
 * ========================================
 */

assert.deepStrictEqual(
  computeStageOfChange({
    meetsRecommendations: true,
    activeDuration: "lt_6_months",
    increaseAlreadyStarted: true,
    increaseWithinOneMonth: true,
    increaseWithinSixMonths: true
  }),
  {
    status: "determined",
    stage: "action"
  }
);


/*
 * ========================================
 * DETECTION DETERMINISTE DES SPORTS
 * ========================================
 */

assert.strictEqual(
  detectEngagementSport("football"),
  "football"
);

assert.strictEqual(
  detectEngagementSport("Foot"),
  "football"
);

assert.strictEqual(
  detectEngagementActivity("v\u00e9lo"),
  "velo_loisir"
);

assert.strictEqual(
  detectEngagementSport("v\u00e9lo"),
  null
);

assert.strictEqual(
  getEngagementActivityType("velo_loisir"),
  "physical_activity"
);

assert.strictEqual(
  detectEngagementSport("cyclisme"),
  "cyclisme"
);

assert.strictEqual(
  detectEngagementSport("marche nordique"),
  "marche_nordique"
);

assert.strictEqual(
  detectEngagementSport("natation"),
  "natation"
);

assert.strictEqual(
  detectEngagementSport("swimming"),
  "natation"
);

assert.strictEqual(
  detectEngagementSport("Karat\u00e9"),
  "karate"
);

assert.strictEqual(
  detectEngagementSport("course à pied"),
  "course_a_pied"
);

assert.strictEqual(
  detectEngagementSport("course à pieds"),
  "course_a_pied"
);

assert.strictEqual(
  detectEngagementSport("course a pieds"),
  "course_a_pied"
);

assert.strictEqual(
  detectEngagementSport("running"),
  "course_a_pied"
);

assert.strictEqual(
  detectEngagementSport("trail"),
  "trail"
);


/*
 * Nouvelles activités reconnues comme sport
 */

assert.strictEqual(
  detectEngagementActivity("tennis de table"),
  "tennis_table"
);

assert.strictEqual(
  detectEngagementSport("tennis de table"),
  "tennis_table"
);

assert.strictEqual(
  getEngagementActivityType("tennis_table"),
  "sport"
);

assert.strictEqual(
  detectEngagementActivity("VTT"),
  "vtt"
);

assert.strictEqual(
  detectEngagementSport("VTT"),
  "vtt"
);

assert.strictEqual(
  detectEngagementActivity("course d'orientation"),
  "course_orientation"
);

assert.strictEqual(
  detectEngagementSport("pétanque"),
  "petanque"
);


/*
 * Question compétition
 */

assert.strictEqual(
  shouldAskEngagementCompetition("football"),
  true
);

assert.strictEqual(
  shouldAskEngagementCompetition("natation"),
  true
);

assert.strictEqual(
  shouldAskEngagementCompetition("course_a_pied"),
  true
);

assert.strictEqual(
  shouldAskEngagementCompetition("vtt"),
  true
);

assert.strictEqual(
  shouldAskEngagementCompetition("tennis_table"),
  true
);

assert.strictEqual(
  shouldAskEngagementCompetition("sport_inconnu"),
  false
);

assert.strictEqual(
  shouldAskEngagementCompetition(null),
  false
);


/*
 * Activités physiques reconnues sans qualification de sport
 */

assert.strictEqual(
  detectEngagementActivity("marche"),
  "marche"
);

assert.strictEqual(
  detectEngagementSport("marche"),
  null
);

assert.strictEqual(
  getEngagementActivityType("marche"),
  "physical_activity"
);

assert.strictEqual(
  shouldAskEngagementCompetition("marche"),
  false
);

assert.strictEqual(
  detectEngagementActivity("randonnée"),
  "randonnee_pedestre"
);

assert.strictEqual(
  detectEngagementSport("randonnée"),
  null
);

assert.strictEqual(
  getEngagementActivityType("randonnee_pedestre"),
  "physical_activity"
);

assert.strictEqual(
  detectEngagementActivity("yoga"),
  "yoga"
);

assert.strictEqual(
  detectEngagementSport("yoga"),
  null
);

assert.strictEqual(
  shouldAskEngagementCompetition("yoga"),
  false
);

assert.strictEqual(
  detectEngagementActivity("pilates"),
  "pilates"
);

assert.strictEqual(
  detectEngagementSport("pilates"),
  null
);

assert.strictEqual(
  detectEngagementActivity("aquagym"),
  "aquagym"
);

assert.strictEqual(
  detectEngagementSport("aquagym"),
  null
);


/*
 * Garde-fou :
 * aucune détection automatique par simple sous-chaîne.
 */

assert.strictEqual(
  detectEngagementActivity("tennis de table loisir"),
  null
);

assert.strictEqual(
  detectEngagementSport("tennis de table loisir"),
  null
);

/*
 * Catalogue élargi
 */

assert.strictEqual(
  detectEngagementActivity("équitation"),
  "equitation"
);

assert.strictEqual(
  detectEngagementSport("futsal"),
  "futsal"
);

assert.strictEqual(
  detectEngagementSport("ski de fond"),
  "ski_fond"
);

assert.strictEqual(
  detectEngagementSport("plongée"),
  "plongee"
);

assert.strictEqual(
  shouldAskEngagementCompetition("plongee"),
  false
);

assert.strictEqual(
  detectEngagementActivity("vélo"),
  "velo_loisir"
);

assert.strictEqual(
  detectEngagementSport("vélo"),
  null
);

assert.strictEqual(
  getEngagementActivityType("velo_loisir"),
  "physical_activity"
);

assert.strictEqual(
  detectEngagementActivity("cyclisme"),
  "cyclisme"
);

assert.strictEqual(
  detectEngagementSport("cyclisme"),
  "cyclisme"
);

assert.strictEqual(
  detectEngagementActivity("musculation"),
  "musculation"
);

assert.strictEqual(
  getEngagementActivityType("musculation"),
  "physical_activity"
);

assert.strictEqual(
  shouldAskEngagementCompetition("musculation"),
  false
);

assert.strictEqual(
  detectEngagementActivity("gymnastique"),
  "gymnastique"
);

assert.strictEqual(
  detectEngagementSport("gymnastique"),
  "gymnastique"
);

assert.strictEqual(
  detectEngagementActivity("gym volontaire"),
  "gymnastique_volontaire"
);

assert.strictEqual(
  detectEngagementSport("gym volontaire"),
  null
);

assert.strictEqual(
  detectEngagementActivity("tai chi"),
  "tai_chi_qi_gong"
);

assert.strictEqual(
  detectEngagementActivity("danse"),
  "danse"
);


/*
 * Normalisation
 */

assert.strictEqual(
  normalizeEngagementActivityLabel("  V\u00e9lo  "),
  "velo"
);

assert.strictEqual(
  normalizeEngagementActivityLabel("Karat\u00e9"),
  "karate"
);


console.log(
  "OK — Engagement rules: normalization, TTM and sport detection tests passed."
);
