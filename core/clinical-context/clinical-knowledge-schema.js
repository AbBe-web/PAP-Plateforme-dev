// core/clinical-context/clinical-knowledge-schema.js

/*
 * PAP — Clinical Knowledge Schema v1
 *
 * Contrat structurel commun aux futures connaissances cliniques.
 *
 * Ce fichier :
 * - ne contient aucune règle clinique ;
 * - ne lit pas le DOM ;
 * - ne modifie aucun état patient ;
 * - ne prend aucune décision ;
 * - n'est pas utilisé par le moteur legacy actuel.
 *
 * Il prépare uniquement la migration progressive vers
 * la nouvelle architecture de connaissance clinique.
 */

const CLINICAL_KNOWLEDGE_SCHEMA = {

  version: "1",

  contextKeys: [
    "pathologiesAny",
    "medicationsAny",
    "situationsAny",
    "limitationsAny",
    "ageGroupsAny",
    "sexAny",
    "otherAny"
  ],

  clinicalFunctions: [
    "safety",
    "prescriptionGuidance",
    "patientInformation",
    "orientationFactors"
  ],

  categoriesByFunction: {

    safety: [
      "constraint",
      "contraindication",
      "temporaryContraindication",
      "limitation",
      "precaution",
      "warningSign",
      "monitoring"
    ],

    prescriptionGuidance: [
      "activityType",
      "endurance",
      "strength",
      "balance",
      "mobility",
      "intensity",
      "frequency",
      "duration",
      "progression",
      "fractionation",
      "environment",
      "equipment",
      "monitoring",
      "practicalAdaptation"
    ],

    patientInformation: [
      "benefit",
      "safety",
      "selfMonitoring",
      "practicalAdvice",
      "warningSign",
      "motivation"
    ],

    orientationFactors: [
      "supervisionFactor",
      "functionalFactor",
      "rehabilitationFactor",
      "specialistInput",
      "assessmentNeed"
    ]
  },

  conditionTypes: [
    "always",
    "contextual",
    "clinicianCheck"
  ],

  clinicalMoments: [
    "initialAssessment",
    "followUp"
  ],

  evidenceSourceTypes: [
    "guideline",
    "consensus",
    "positionStatement",
    "book",
    "article",
    "systematicReview",
    "institutionalReference",
    "other"
  ],

  statusValues: [
    "draft",
    "active",
    "deprecated"
  ]
};

window.CLINICAL_KNOWLEDGE_SCHEMA =
  CLINICAL_KNOWLEDGE_SCHEMA;