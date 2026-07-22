// core/clinical-context/pathology-registry.js

/*
 * PAP — Pathology Registry
 *
 * Registre canonique des pathologies / populations cliniques.
 *
 * Rôle futur :
 * - définir les IDs canoniques ;
 * - porter les libellés ;
 * - centraliser les alias historiques.
 *
 * Ne contient aucune connaissance clinique.
 *
 * PATHO_DATA reste inchangé et reste utilisé par
 * le fonctionnement actuel.
 */

const PATHOLOGY_REGISTRY = {

  hta: {
    id: "hta",
    label: "Hypertension artérielle",
    shortLabel: "HTA",
    aliases: []
  },

  dt2: {
    id: "dt2",
    label: "Diabète de type 2",
    shortLabel: "DT2",
    aliases: []
  },

  bpco: {
    id: "bpco",
    label: "Bronchopneumopathie chronique obstructive",
    shortLabel: "BPCO",
    aliases: []
  }

};

window.PATHOLOGY_REGISTRY =
  PATHOLOGY_REGISTRY;