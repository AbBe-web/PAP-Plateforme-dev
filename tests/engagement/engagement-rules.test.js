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


console.log(
  "OK — Engagement rules: normalization and TTM tests passed."
);
