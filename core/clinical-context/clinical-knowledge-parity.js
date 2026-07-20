// core/clinical-context/clinical-knowledge-parity.js

/*
 * PAP — Clinical Knowledge Migration Parity
 *
 * Outil technique de contrôle de migration legacy -> v2.
 *
 * Ce module :
 * - ne modifie aucune donnée ;
 * - ne lit pas le DOM ;
 * - ne modifie pas PATHO_DATA ;
 * - ne modifie pas les registres v2 ;
 * - n'est pas utilisé par l'UX ;
 * - n'est pas utilisé par les sorties.
 *
 * Il vérifie uniquement la traçabilité de migration.
 */


const CLINICAL_KNOWLEDGE_LEGACY_FIELDS = [
  "contraintes",
  "adaptations",
  "situations",
  "regles",
  "crc",
  "crc_default"
];


function normalizeParityText(value) {

  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/\s+/g, " ")
    .trim();
}


function getKnowledgeItemLegacyOrigins(item) {

  const origins =
    item?.metadata
      ?.migration
      ?.legacyOrigins;

  return Array.isArray(origins)
    ? origins
    : [];
}


function getPathologyKnowledgeItems(
  pathologyId,
  knowledgeRegistry
) {

  if (!Array.isArray(knowledgeRegistry)) {
    return [];
  }

  return knowledgeRegistry
    .filter(item => {

      const pathologies =
        item?.context
          ?.pathologiesAny;

      return (
        Array.isArray(pathologies) &&
        pathologies.includes(pathologyId)
      );
    });
}


function buildExpectedLegacyOrigins(
  pathologyId,
  legacyPathologyData
) {

  const expectedOrigins = [];

  CLINICAL_KNOWLEDGE_LEGACY_FIELDS
    .forEach(field => {

      const values =
        legacyPathologyData?.[field];

      if (!Array.isArray(values)) {
        return;
      }

      values.forEach(
        (_, index) => {

          expectedOrigins.push({
            pathologyId,
            field,
            index
          });

        }
      );
    });

  return expectedOrigins;
}


function getLegacyOriginKey(origin) {

  return [
    origin.pathologyId,
    origin.field,
    origin.index
  ].join("::");
}


function validateLegacyOrigin(
  origin,
  legacyData
) {

  if (
    !origin ||
    typeof origin !== "object"
  ) {
    return false;
  }

  const pathologyData =
    legacyData?.[
      origin.pathologyId
    ];

  if (!pathologyData) {
    return false;
  }

  const fieldValues =
    pathologyData[
      origin.field
    ];

  if (!Array.isArray(fieldValues)) {
    return false;
  }

  return (
    Number.isInteger(origin.index) &&
    origin.index >= 0 &&
    origin.index < fieldValues.length
  );
}


function getProjectionMessageForLegacyField(
  item,
  field
) {

  if (
    field === "crc" ||
    field === "crc_default"
  ) {
    return item?.messages?.patient || "";
  }

  return item?.messages?.clinician || "";
}


function compareSimpleLegacyText(
  item,
  origin,
  legacyData
) {

  if (
    origin.field === "crc_default"
  ) {
    return null;
  }

  const legacyValue =
    legacyData
      ?.[origin.pathologyId]
      ?.[origin.field]
      ?.[origin.index];

  const v2Value =
    getProjectionMessageForLegacyField(
      item,
      origin.field
    );

  return (
    normalizeParityText(legacyValue) ===
    normalizeParityText(v2Value)
  );
}


function comparePathologyMigrationParity(
  pathologyId,
  legacyData,
  knowledgeRegistry
) {

  const legacyPathologyData =
    legacyData?.[pathologyId];

  if (!legacyPathologyData) {

    return {
      valid: false,
      pathologyId,
      errors: [
        `legacy pathology not found: ${pathologyId}`
      ]
    };
  }

  const knowledgeItems =
    getPathologyKnowledgeItems(
      pathologyId,
      knowledgeRegistry
    );

  const expectedOrigins =
    buildExpectedLegacyOrigins(
      pathologyId,
      legacyPathologyData
    );

  const expectedOriginKeys =
    new Set(
      expectedOrigins.map(
        getLegacyOriginKey
      )
    );

  const originCoverage =
    new Map();

  const invalidOrigins = [];
  const contentMismatches = [];
  const warnings = [];

  knowledgeItems.forEach(item => {

    const origins =
      getKnowledgeItemLegacyOrigins(
        item
      );

    if (origins.length === 0) {

      warnings.push({
        type: "missing_legacy_origin",
        knowledgeItemId: item.id
      });

      return;
    }

    origins.forEach(origin => {

      const key =
        getLegacyOriginKey(origin);

      if (
        !validateLegacyOrigin(
          origin,
          legacyData
        )
      ) {

        invalidOrigins.push({
          knowledgeItemId: item.id,
          origin
        });

        return;
      }

      if (!originCoverage.has(key)) {
        originCoverage.set(
          key,
          []
        );
      }

      originCoverage
        .get(key)
        .push(item.id);

      /*
       * Contrôle de texte uniquement
       * lorsqu'un item possède une origine unique.
       *
       * Cela évite de considérer comme erreur
       * un futur split ou merge volontaire.
       */
      if (origins.length === 1) {

        const textMatches =
          compareSimpleLegacyText(
            item,
            origin,
            legacyData
          );

        if (textMatches === false) {

          contentMismatches.push({
            knowledgeItemId: item.id,
            origin,
            legacyText:
              legacyData
                ?.[origin.pathologyId]
                ?.[origin.field]
                ?.[origin.index],
            v2Text:
              getProjectionMessageForLegacyField(
                item,
                origin.field
              )
          });
        }
      }

    });
  });


  const uncoveredOrigins =
    expectedOrigins.filter(origin => {

      const key =
        getLegacyOriginKey(origin);

      return !originCoverage.has(key);
    });


  const unexpectedOrigins = [];

  originCoverage
    .forEach(
      (_, key) => {

        if (
          !expectedOriginKeys.has(key)
        ) {

          unexpectedOrigins.push(key);

        }
      }
    );


  /*
   * Vérification spécifique crc_default.
   *
   * Chaque élément legacy crc_default doit :
   * - être couvert ;
   * - correspondre à au moins un item
   *   selection.defaultSelected === true.
   */

  const defaultSelectionErrors = [];

  const legacyDefaults =
    legacyPathologyData
      .crc_default || [];

  legacyDefaults.forEach(
    (_, index) => {

      const origin = {
        pathologyId,
        field: "crc_default",
        index
      };

      const key =
        getLegacyOriginKey(origin);

      const coveringItemIds =
        originCoverage.get(key) || [];

      const hasDefaultSelectedItem =
        coveringItemIds.some(
          itemId => {

            const item =
              knowledgeItems.find(
                candidate =>
                  candidate.id === itemId
              );

            return (
              item
                ?.selection
                ?.defaultSelected === true
            );
          }
        );

      if (!hasDefaultSelectedItem) {

        defaultSelectionErrors.push({
          origin,
          coveringItemIds
        });
      }

    }
  );


  const coverage = {};

  CLINICAL_KNOWLEDGE_LEGACY_FIELDS
    .forEach(field => {

      const values =
        legacyPathologyData[field];

      if (!Array.isArray(values)) {
        return;
      }

      const covered =
        values.filter(
          (_, index) => {

            const key =
              getLegacyOriginKey({
                pathologyId,
                field,
                index
              });

            return originCoverage.has(key);
          }
        ).length;

      coverage[field] = {
        covered,
        total: values.length,
        complete:
          covered === values.length
      };
    });


  const valid =
    uncoveredOrigins.length === 0 &&
    invalidOrigins.length === 0 &&
    unexpectedOrigins.length === 0 &&
    defaultSelectionErrors.length === 0 &&
    contentMismatches.length === 0;


  return {
    valid,
    pathologyId,

    knowledgeItemCount:
      knowledgeItems.length,

    coverage,

    uncoveredOrigins,
    invalidOrigins,
    unexpectedOrigins,

    defaultSelectionErrors,

    contentMismatches,

    warnings
  };
}


window.comparePathologyMigrationParity =
  comparePathologyMigrationParity;