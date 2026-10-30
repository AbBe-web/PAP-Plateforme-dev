(function () {
  "use strict";

  // T3.6b.1 — Assemblage descriptif, sans synthese textuelle ni decision.
  // Les messages, conditions et references sont ceux des modules existants.
  // Aucun critere clinique n'est evalue ici.
  function getSectionItems(section) {
    return Array.isArray(section?.items) ? [...section.items] : [];
  }

  function objectOrNull(value) {
    return value && typeof value === "object" && !Array.isArray(value)
      ? value
      : null;
  }

  function buildOrientationSynthesisBundleV1(viewModel) {
    const source = objectOrNull(viewModel);
    if (!source) {
      return {
        version: "1.0.0",
        status: "unavailable",
        generalOrientation: [],
        byArea: { rehabilitation: [], apa: [], ordinaryAP: [] },
        functional: {
          context: null,
          qualificationCue: null,
          severeRegulatoryMemo: null
        },
        apaBenefit: null,
        autonomyDiscussion: null,
        apaQuestions: null,
        feasibility: null,
        multiprofessionalProgramCues: null
      };
    }

    const clinician = Array.isArray(source.clinician) ? source.clinician : [];
    const generalSection = clinician.find(function (section) {
      return section && section.id === "orientation";
    });
    const byArea = objectOrNull(source.orientationByArea) || {};

    return {
      version: "1.0.0",
      status: "ready",
      // Ne pas confondre ces listes avec une selection de niveau.
      // Pas de deduplication clinique automatique : T3.6b.2 apres validation.
      generalOrientation: getSectionItems(generalSection),
      byArea: {
        rehabilitation: getSectionItems(byArea.rehabilitation),
        apa: getSectionItems(byArea.apa),
        ordinaryAP: getSectionItems(byArea.ordinaryAP)
      },
      functional: {
        context: objectOrNull(source.orientationFunctionalContext),
        qualificationCue: objectOrNull(source.orientationFunctionalQualificationCueV1),
        severeRegulatoryMemo: objectOrNull(source.orientationSevereFunctionalRegulatoryCueV1)
      },
      apaBenefit: objectOrNull(source.orientationApaBenefitContextV1),
      autonomyDiscussion: objectOrNull(source.orientationAutonomyDiscussionContextV1),
      apaQuestions: objectOrNull(source.orientationApaQuestionsContextV1),
      feasibility: objectOrNull(source.orientationFeasibilityContextV1),
      // Aucun repere multiprofessionnel n'est impute sans source explicite.
      // null = provenance documentaire encore a etablir, non pas absence d'indication.
      multiprofessionalProgramCues: null
    };
  }

  window.buildOrientationSynthesisBundleV1 = buildOrientationSynthesisBundleV1;
})();
