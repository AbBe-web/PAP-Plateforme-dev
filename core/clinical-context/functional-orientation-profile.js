"use strict";

/*
 * PAP — Profil fonctionnel pour l'aide à l'orientation
 *
 * Rôle :
 * - lire uniquement activityConsiderations ;
 * - conserver les dimensions fonctionnelles évaluées ;
 * - les regrouper selon leur sévérité ;
 * - distinguer explicitement "none" de null.
 *
 * Ce fichier :
 * - ne lit pas le DOM ;
 * - ne produit aucune orientation ;
 * - ne sélectionne aucun professionnel ;
 * - ne calcule aucun score ;
 * - ne modifie aucune donnée source.
 */

const FUNCTIONAL_ORIENTATION_DIMENSIONS = [

  {
    group: "locomotor",
    dimension: "neuromuscular"
  },

  {
    group: "locomotor",
    dimension: "osteoarticular"
  },

  {
    group: "locomotor",
    dimension: "endurance"
  },

  {
    group: "locomotor",
    dimension: "strength"
  },

  {
    group: "locomotor",
    dimension: "walking"
  },

  {
    group: "cerebral",
    dimension: "cognitive"
  },

  {
    group: "cerebral",
    dimension: "language"
  },

  {
    group: "cerebral",
    dimension: "anxietyDepression"
  },

  {
    group: "sensory",
    dimension: "vision"
  },

  {
    group: "sensory",
    dimension: "sensitivity"
  },

  {
    group: "sensory",
    dimension: "hearing"
  },

  {
    group: "sensory",
    dimension: "proprioception"
  },

  {
    group: "pain",
    dimension: "pain"
  }

];


function buildFunctionalOrientationProfile(
  activityConsiderations
) {

  const profile = {

    version: "1.0.0",

    bySeverity: {
      severe: [],
      moderate: [],
      minimal: [],
      none: []
    },

    evaluatedCount: 0,

    limitationCount: 0,

    invalidValues: []
  };


  const functionalLimitations =
    activityConsiderations
      ?.functionalLimitations;


  if (
    !functionalLimitations ||
    typeof functionalLimitations !== "object"
  ) {
    return profile;
  }


  FUNCTIONAL_ORIENTATION_DIMENSIONS.forEach(
    descriptor => {

      const {
        group,
        dimension
      } = descriptor;


      const value =
        group === "pain"
          ? functionalLimitations.pain
          : functionalLimitations
              ?.[group]
              ?.[dimension];


      /*
       * null = non renseigné.
       *
       * Il ne doit jamais devenir "none".
       */
      if (
        value === null ||
        value === undefined ||
        value === ""
      ) {
        return;
      }


      if (
        value !== "none" &&
        value !== "minimal" &&
        value !== "moderate" &&
        value !== "severe"
      ) {

        profile.invalidValues.push({
          group,
          dimension,
          value
        });

        return;
      }


      const entry = {
        group,
        dimension,
        severity: value
      };


      profile
        .bySeverity[value]
        .push(entry);


      profile.evaluatedCount += 1;


      if (value !== "none") {
        profile.limitationCount += 1;
      }

    }
  );


  return profile;
}


window.buildFunctionalOrientationProfile =
  buildFunctionalOrientationProfile;
