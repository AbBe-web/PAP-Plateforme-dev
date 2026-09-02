// core/clinical-context/pathology-registry.js

/*
 * PAP — Pathology Registry
 *
 * Registre canonique des pathologies / populations cliniques.
 *
 * Responsabilités :
 * - définir les IDs canoniques ;
 * - porter les libellés d’affichage ;
 * - centraliser les alias historiques éventuels.
 *
 * Ne contient aucune connaissance clinique.
 *
 * PATHO_DATA reste inchangé et continue d’être utilisé
 * par les fonctionnalités legacy tant qu’elles n’ont pas
 * été migrées.
 */

(function () {
  "use strict";

  const PATHOLOGY_REGISTRY = {

    hta: {
      id: "hta",
      label: "Hypertension artérielle",
      shortLabel: "HTA",
      aliases: []
    },

    coronaropathie: {
      id: "coronaropathie",
      label: "Coronaropathie",
      shortLabel: "Coronaropathie",
      aliases: []
    },

    icc: {
      id: "icc",
      label: "Insuffisance cardiaque chronique",
      shortLabel: "Insuffisance cardiaque",
      aliases: []
    },

    aomi: {
      id: "aomi",
      label: "Artériopathie des membres inférieurs",
      shortLabel: "AOMI",
      aliases: []
    },

    dt1: {
      id: "dt1",
      label: "Diabète de type 1",
      shortLabel: "DT1",
      aliases: []
    },

    dt2: {
      id: "dt2",
      label: "Diabète de type 2",
      shortLabel: "DT2",
      aliases: []
    },

    obesite: {
      id: "obesite",
      label: "Surpoids / Obésité",
      shortLabel: "Obésité",
      aliases: []
    },

    bpco: {
      id: "bpco",
      label: "Bronchopneumopathie chronique obstructive",
      shortLabel: "BPCO",
      aliases: []
    },

    asthme: {
      id: "asthme",
      label: "Asthme",
      shortLabel: "Asthme",
      aliases: []
    },

    avc: {
      id: "avc",
      label: "Accident vasculaire cérébral",
      shortLabel: "AVC",
      aliases: []
    },

    parkinson: {
      id: "parkinson",
      label: "Maladie de Parkinson",
      shortLabel: "Parkinson",
      aliases: []
    },

    sep: {
      id: "sep",
      label: "Sclérose en plaques",
      shortLabel: "SEP",
      aliases: []
    },

    lombalgie: {
      id: "lombalgie",
      label: "Lombalgie chronique",
      shortLabel: "Lombalgie",
      aliases: []
    },

    arthrose: {
      id: "arthrose",
      label: "Arthrose périphérique",
      shortLabel: "Arthrose",
      aliases: []
    },

    pr: {
      id: "pr",
      label: "Polyarthrite rhumatoïde",
      shortLabel: "PR",
      aliases: []
    },

    spa: {
      id: "spa",
      label: "Spondyloarthrite",
      shortLabel: "SpA",
      aliases: []
    },

    depression: {
      id: "depression",
      label: "Dépression",
      shortLabel: "Dépression",
      aliases: []
    },

    schizophrenie: {
      id: "schizophrenie",
      label: "Schizophrénie",
      shortLabel: "Schizophrénie",
      aliases: []
    },

    cancer: {
      id: "cancer",
      label: "Cancer",
      shortLabel: "Cancer",
      aliases: []
    },

    pa_maintien: {
      id: "pa_maintien",
      label: "Personnes âgées – maintien des capacités",
      shortLabel: "Maintien des capacités",
      aliases: []
    },

    pa_chute: {
      id: "pa_chute",
      label: "Personnes âgées – risque de chute",
      shortLabel: "Risque de chute",
      aliases: []
    },

    grossesse: {
      id: "grossesse",
      label: "Grossesse",
      shortLabel: "Grossesse",
      aliases: []
    },

    post_partum: {
      id: "post_partum",
      label: "Post-partum",
      shortLabel: "Post-partum",
      aliases: []
    }

  };

  window.PATHOLOGY_REGISTRY =
    PATHOLOGY_REGISTRY;
})();