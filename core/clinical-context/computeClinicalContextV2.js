// core/clinical-context/computeClinicalContextV2.js

/*
 * PAP — Clinical Context Engine v2
 *
 * Moteur générique expérimental de contextualisation.
 *
 * IMPORTANT :
 * - parallèle au moteur legacy ;
 * - non utilisé par l'UX actuelle ;
 * - ne remplace pas computeClinicalContext() ;
 * - ne lit pas le DOM ;
 * - ne modifie aucun modèle ;
 * - ne prend aucune décision clinique.
 */

function createEmptyClinicalContextV2() {

  return {
    safety: [],
    prescriptionGuidance: [],
    patientInformation: [],
    orientationFactors: [],

    resources: {
      eligible: []
    },

    references: {
      evidenceSourceIds: []
    },

    metadata: {
      version: "clinical-context-v2",
      generatedAt: Date.now()
    }
  };
}


function normalizeContextValues(
  values
) {

  if (!Array.isArray(values)) {
    return [];
  }

  return [
    ...new Set(
      values
        .filter(
          value =>
            typeof value === "string" &&
            value.trim() !== ""
        )
        .map(
          value =>
            value.trim()
        )
    )
  ].sort();
}


function normalizeClinicalContextV2(
  clinicalModel
) {

  return {

    pathologiesAny:
      normalizeContextValues(
        clinicalModel?.patient
          ?.pathologies || []
      ),

    medicationsAny: [],

    situationsAny: [],

    limitationsAny: [],

    ageGroupsAny: [],

    sexAny: [],

    otherAny: []
  };
}


function matchKnowledgeContextV2(
  knowledgeContext,
  normalizedContext
) {

  const context =
    knowledgeContext || {};

  const matchedContext = {};

  const activeKeys =
    CLINICAL_KNOWLEDGE_SCHEMA
      .contextKeys
      .filter(key =>
        Array.isArray(context[key]) &&
        context[key].length > 0
      );

  if (activeKeys.length === 0) {

    return {
      matches: true,
      matchedContext: {}
    };
  }

  for (const key of activeKeys) {

    const expectedValues =
      normalizeContextValues(
        context[key]
      );

    const actualValues =
      normalizeContextValues(
        normalizedContext[key]
      );

    const matches =
      expectedValues.filter(value =>
        actualValues.includes(value)
      );

    if (matches.length === 0) {

      return {
        matches: false,
        matchedContext: {}
      };
    }

    matchedContext[key] =
      matches;
  }

  return {
    matches: true,
    matchedContext
  };
}


function evaluateKnowledgeConditionV2(
  condition
) {

  const safeCondition =
    condition || {
      type: "always"
    };

  if (
    safeCondition.type === "always"
  ) {

    return {
      action: "include"
    };
  }

  if (
    safeCondition.type ===
    "clinicianCheck"
  ) {

    return {
      action:
        "include_with_condition"
    };
  }

  /*
   * Les conditions contextual machine-evaluable
   * seront implémentées uniquement lorsque leur
   * contrat structuré sera défini et testé.
   *
   * Aucun comportement clinique n'est deviné ici.
   */

  return {
    action: "exclude",
    reason:
      "unsupported_contextual_condition"
  };
}


function projectKnowledgeItemV2(
  item,
  matchedContext
) {

  return item.clinicalUses.map(
    clinicalUse => ({

      knowledgeItemId:
        item.id,

      clinicalFunction:
        clinicalUse.function,

      category:
        clinicalUse.category,

      messages: {
        clinician:
          item.messages?.clinician || "",

        patient:
          item.messages?.patient || ""
      },

      condition:
        item.condition,

      selection:
        item.selection || null,

      presentationTargets:
        Array.isArray(
          item.presentationTargets
        )
          ? [...item.presentationTargets]
          : [],

      evidenceSourceIds:

        Array.isArray(
          item.evidenceSourceIds
        )
          ? [...item.evidenceSourceIds]
          : [],

      relatedResourceIds:
        Array.isArray(
          item.relatedResourceIds
        )
          ? [...item.relatedResourceIds]
          : [],

      matchedContext:
        { ...matchedContext },

      provenance: {
        registry:
          "pathologyKnowledge"
      }

    })
  );
}


function getProjectionKeyV2(
  projection
) {

  return [
    projection.knowledgeItemId,
    projection.clinicalFunction,
    projection.category
  ].join("::");
}


function mergeMatchedContextV2(
  currentContext,
  incomingContext
) {

  const merged = {
    ...currentContext
  };

  Object.keys(
    incomingContext || {}
  ).forEach(key => {

    merged[key] =
      normalizeContextValues([
        ...(merged[key] || []),
        ...(incomingContext[key] || [])
      ]);

  });

  return merged;
}


function deduplicateContextProjectionsV2(
  projections
) {

  const projectionMap =
    new Map();

  projections.forEach(
    projection => {

      const key =
        getProjectionKeyV2(
          projection
        );

      if (
        !projectionMap.has(key)
      ) {

        projectionMap.set(
          key,
          projection
        );

        return;
      }

      const existing =
        projectionMap.get(key);

      existing.matchedContext =
        mergeMatchedContextV2(
          existing.matchedContext,
          projection.matchedContext
        );
    }
  );

 return [
  ...projectionMap.values()
];
}


function computeClinicalContextV2(
  clinicalModel,
  knowledgeRegistry =
    window
      .PATHOLOGY_KNOWLEDGE_REGISTRY ||
    []
) {

  const context =
    createEmptyClinicalContextV2();

  if (!clinicalModel) {
    return context;
  }

  const registryValidation =
    validateClinicalKnowledgeRegistry(
      knowledgeRegistry
    );

  if (!registryValidation.valid) {

    console.warn(
      "[PAP clinical-context-v2] Invalid knowledge registry",
      registryValidation.errors
    );

    return context;
  }

  const normalizedContext =
    normalizeClinicalContextV2(
      clinicalModel
    );

  const projections = [];

  knowledgeRegistry.forEach(item => {

    if (
      item?.metadata?.status ===
      "deprecated"
    ) {
      return;
    }

    const matchResult =
      matchKnowledgeContextV2(
        item.context,
        normalizedContext
      );

    if (!matchResult.matches) {
      return;
    }

    const conditionResult =
      evaluateKnowledgeConditionV2(
        item.condition
      );

    if (
      conditionResult.action ===
      "exclude"
    ) {
      return;
    }

    projections.push(
      ...projectKnowledgeItemV2(
        item,
        matchResult.matchedContext
      )
    );

  });

  const deduplicatedProjections =
    deduplicateContextProjectionsV2(
      projections
    );

  deduplicatedProjections
    .forEach(projection => {

      const target =
        context[
          projection.clinicalFunction
        ];

      if (Array.isArray(target)) {
        target.push(projection);
      }

    });

  context.references
    .evidenceSourceIds =
      normalizeContextValues(
        deduplicatedProjections
          .flatMap(
            projection =>
              projection
                .evidenceSourceIds ||
              []
          )
      );

  return context;
}


window.createEmptyClinicalContextV2 =
  createEmptyClinicalContextV2;

window.normalizeClinicalContextV2 =
  normalizeClinicalContextV2;

window.matchKnowledgeContextV2 =
  matchKnowledgeContextV2;

window.evaluateKnowledgeConditionV2 =
  evaluateKnowledgeConditionV2;

window.computeClinicalContextV2 =
  computeClinicalContextV2;