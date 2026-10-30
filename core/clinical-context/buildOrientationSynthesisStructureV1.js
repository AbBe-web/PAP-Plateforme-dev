(function () {
  "use strict";

  // T3.6b.2a — Plan de donnees ordonne, sans rendu ni decision clinique.
  // Chaque entree porte un objet deja produit par le moteur existant.
  // Aucun regroupement semantique Q1/Q2a, aucune evaluation de condition.
  function asObject(value) {
    return value && typeof value === "object" && !Array.isArray(value)
      ? value
      : null;
  }

  function asList(value) {
    return Array.isArray(value) ? [...value] : [];
  }

  function entry(id, sourcePath, value) {
    return { id, sourcePath, value };
  }

  function buildOrientationSynthesisStructureV1(bundle) {
    // Un bundle absent/invalide ne doit pas etre interprete comme une
    // absence de repere clinique. Conserver le statut "unavailable".
    const source = asObject(bundle);
    const ready = source?.status === "ready";
    const data = ready ? source : {};
    const byArea = asObject(data.byArea) || {};
    const functional = asObject(data.functional) || {};

    return {
      version: "1.0.0",
      status: ready ? "ready" : "unavailable",
      // Ordre editorial technique uniquement. Aucune condition d'affichage
      // et aucun message nouveau ne sont crees par ces sections.
      sections: [
        {
          id: "transversal",
          entries: [
            entry("generalOrientation", "generalOrientation", asList(data.generalOrientation)),
            entry("rehabilitationQ1", "byArea.rehabilitation", asList(byArea.rehabilitation)),
            entry("functionalContext", "functional.context", asObject(functional.context)),
            entry("functionalQualification", "functional.qualificationCue", asObject(functional.qualificationCue)),
            entry("severeRegulatoryMemo", "functional.severeRegulatoryMemo", asObject(functional.severeRegulatoryMemo)),
            entry("multiprofessionalProgram", "multiprofessionalProgramCues", data.multiprofessionalProgramCues ?? null)
          ]
        },
        {
          id: "discussion",
          entries: [
            // La projection Q2a et sa qualification documentaire sont deux
            // vues complementaires, jamais fusionnees automatiquement.
            entry("apaProjectionQ2a", "byArea.apa", asList(byArea.apa)),
            entry("apaBenefitQ2a", "apaBenefit", asObject(data.apaBenefit)),
            entry("autonomyDiscussion", "autonomyDiscussion", asObject(data.autonomyDiscussion)),
            entry("apaQuestions", "apaQuestions", asObject(data.apaQuestions)),
            entry("ordinaryActivity", "byArea.ordinaryAP", asList(byArea.ordinaryAP))
          ]
        },
        {
          id: "feasibility",
          entries: [
            entry("feasibilityContext", "feasibility", asObject(data.feasibility))
          ]
        }
      ]
    };
  }

  window.buildOrientationSynthesisStructureV1 = buildOrientationSynthesisStructureV1;
})();
