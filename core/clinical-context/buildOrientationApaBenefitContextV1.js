(function () {
  "use strict";

  // T3.3 — Lecture documentaire des repères Q2a déjà projetés.
  // Ne sélectionne ni cadre de pratique, ni professionnel, ni autonomie U.
  const COLLECTIONS = [
    "safety",
    "prescriptionGuidance",
    "patientInformation",
    "orientationFactors",
    "objectiveDiscussion"
  ];

  function classifyCondition(condition) {
    // Identique au contrat actuel de evaluateKnowledgeConditionV2.
    if (!condition || condition.type === "always") {
      return "applicable";
    }
    if (condition.type === "clinicianCheck") {
      return "toVerify";
    }
    // En principe ces conditions sont exclues par ClinicalContextV2.
    // Une entrée non reconnue ne doit jamais devenir « applicable ».
    return "unclassified";
  }

  function buildOrientationApaBenefitContextV1(clinicalContextV2) {
    const result = {
      version: "1.0.0",
      status: "unavailable",
      applicable: [],
      toVerify: [],
      unclassified: [],
      // Les indicateurs séparés évitent de masquer les repères conditionnels
      // lorsqu'il existe simultanément un repère applicable.
      hasApplicable: false,
      hasToVerify: false
    };

    if (!clinicalContextV2 || typeof clinicalContextV2 !== "object") {
      return result;
    }

    result.status = "noneIdentified";
    const seenObjects = new Set();
    COLLECTIONS.forEach(function (collectionName) {
      const items = clinicalContextV2[collectionName];
      if (!Array.isArray(items)) return;

      items.forEach(function (item) {
        if (!item || typeof item !== "object" ||
            item.category !== "apaBenefitFactor" ||
            seenObjects.has(item)) {
          return;
        }
        seenObjects.add(item);
        const conditionStatus = classifyCondition(item.condition);
        // Copier les tableaux pour que le résultat soit exploitable sans
        // altération accidentelle de l'objet clinique initial.
        const cue = {
          ...item,
          evidenceSourceIds: Array.isArray(item.evidenceSourceIds)
            ? [...item.evidenceSourceIds] : [],
          presentationTargets: Array.isArray(item.presentationTargets)
            ? [...item.presentationTargets] : [],
          conditionStatus
        };
        result[conditionStatus].push(cue);
      });
    });

    result.hasApplicable = result.applicable.length > 0;
    result.hasToVerify = result.toVerify.length > 0;

    if (result.hasApplicable) {
      result.status = "applicable";
    } else if (result.hasToVerify) {
      result.status = "conditional";
    } else if (result.unclassified.length > 0) {
      result.status = "unclassified";
    }

    return result;
  }

  window.buildOrientationApaBenefitContextV1 =
    buildOrientationApaBenefitContextV1;
})();
