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

const FUNCTIONAL_USE_DEFINITIONS_V2 =
  window.FUNCTIONAL_USE_DEFINITIONS;

if (
  !FUNCTIONAL_USE_DEFINITIONS_V2 ||
  typeof FUNCTIONAL_USE_DEFINITIONS_V2 !== "object" ||
  !Array.isArray(
    FUNCTIONAL_USE_DEFINITIONS_V2.definitions
  ) ||
  !Array.isArray(
    FUNCTIONAL_USE_DEFINITIONS_V2.functionalFacets
  )
) {
  throw new Error(
    "FUNCTIONAL_USE_DEFINITIONS is required before clinical-knowledge-schema.js"
  );
}

const functionalUseDefinitions =
  FUNCTIONAL_USE_DEFINITIONS_V2
    .definitions
    .map(definition => ({
      domainId: definition.domainId,
      domainLabel: definition.domainLabel,
      roleId: definition.roleId,
      roleLabel: definition.roleLabel,
      definition: definition.definition,
      allowsFacets: definition.allowsFacets
    }));

const functionalDomains =
  Array.from(
    new Set(
      functionalUseDefinitions
        .map(definition => definition.domainId)
    )
  );

const functionalRolesByDomain =
  functionalUseDefinitions
    .reduce(
      (rolesByDomain, definition) => {

        if (!rolesByDomain[definition.domainId]) {
          rolesByDomain[definition.domainId] = [];
        }

        rolesByDomain[definition.domainId]
          .push(definition.roleId);

        return rolesByDomain;
      },
      {}
    );

const functionalFacets =
  [
    ...FUNCTIONAL_USE_DEFINITIONS_V2
      .functionalFacets
  ];

const allowsFacetsByDomainRole =
  functionalUseDefinitions
    .reduce(
      (allowsFacets, definition) => {

        const key =
          `${definition.domainId}::${definition.roleId}`;

        allowsFacets[key] =
          definition.allowsFacets;

        return allowsFacets;
      },
      {}
    );

const CLINICAL_KNOWLEDGE_SCHEMA = {

  version: "2",

  functionalUseDefinitions,
  functionalDomains,
  functionalRolesByDomain,
  functionalFacets,
  allowsFacetsByDomainRole,

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
    "orientationFactors",
    "objectiveDiscussion"
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
    ],

    objectiveDiscussion: [
      "clinicalFunctional"
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