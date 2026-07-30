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

/*
 * Normalisations legacy -> v2 explicitement autorisées.
 *
 * Chaque exception est volontairement définie origine par origine.
 * Le comparateur vérifie à la fois :
 * - que le texte legacy actuel est bien celui attendu ;
 * - que le texte v2 est exactement le texte normalisé attendu.
 *
 * Cela évite qu'une normalisation générique masque une perte
 * ou une modification clinique involontaire.
 */
const CLINICAL_KNOWLEDGE_LEGACY_TEXT_OVERRIDES = {

    "hta::adaptations::0": {

    expectedLegacyText:
      "Privilégier les activités d’endurance et le renforcement musculaire modéré",

    expectedV2Text:
      "Privilégier les activités d’endurance et le renforcement musculaire d’intensité modérée."
  },


  "hta::adaptations::1": {

    expectedLegacyText:
      "En cas d'AP intense, bien s'échauffer",

    expectedV2Text:
      ""
  },


  "hta::situations::0": {

    expectedLegacyText:
      "Hypotension post-effort, notamment sous traitement antihypertenseur",

    expectedV2Text:
      "Traitement antihypertenseur : risque d’hypotension post-effort, parfois subite et excessive ; prévoir une information adaptée du patient."
  },


  "hta::regles::3": {

    expectedLegacyText:
      "SI traitement diurétique → ALORS risque de déshydratation ou de troubles ioniques, notamment en cas d’effort prolongé ou de chaleur",

    expectedV2Text:
      "Si diurétique : vigilance vis-à-vis de la déshydratation et des troubles électrolytiques, notamment en cas d’effort prolongé ou de chaleur."
  },


  "hta::crc::0": {

    expectedLegacyText:
      "éviter les efforts en glotte fermée",

    expectedV2Text:
      "Éviter les efforts importants en bloquant la respiration."
  },


  "dt2::adaptations::0": {

    expectedLegacyText:
      "Privilégier une progressivité : AP d’intensité faible et courte durée au début (ne pas décourager)",

    expectedV2Text:
      "Privilégier une progressivité : débuter si besoin par une AP de faible intensité et/ou de courte durée."
  },


  "dt2::adaptations::1": {

    expectedLegacyText:
      "Anticiper le risque d’hypoglycémie en cas de traitement hypoglycémiant <button type='button' class='info-trigger info-hitbox' data-info='Insuline, glinides, sulfamides hypoglycémiants'><span class='info-icon'>i</span></button> (auto-surveillance, adaptation posologie, collation possible)",

    expectedV2Text:
      "Si traitement à risque d’hypoglycémie : anticiper le risque d’hypoglycémie ; prévoir une autosurveillance glycémique et une adaptation du traitement et/ou des apports glucidiques selon la situation."
  },


  "dt2::adaptations::2": {

    expectedLegacyText:
      "Surveiller et protéger les pieds",

    expectedV2Text:
      "Surveiller et protéger les pieds."
  },


  "dt2::adaptations::3": {

    expectedLegacyText:
      "Possibilité de conseiller AP en post-prandial pour profiter de l’effet hypoglycémiant de l’AP",

    expectedV2Text:
      "Possibilité de conseiller une AP en post-prandial pour profiter de son effet sur l’hyperglycémie post-prandiale."
  },


  "dt2::adaptations::4": {

    expectedLegacyText:
      "Possibilité d’AP séquentielle ou fractionnée si déconditionnement",

    expectedV2Text:
      "Possibilité d’AP séquentielle ou fractionnée si déconditionnement."
  },


  "dt2::contraintes::0": {

    expectedLegacyText:
      "Glycémie > 2,5 g/L en début d’exercice → AP déconseillée tant que > 2 g/L (objectif < 2 g/L)",

    expectedV2Text:
      "Si glycémie > 2,5 g/L au moment de débuter l’exercice : différer l’AP tant que la glycémie reste > 2 g/L."
  },


  "dt2::contraintes::1": {

    expectedLegacyText:
      "Activité physique d’intensité élevée si glycémie mal contrôlée → à éviter",

    expectedV2Text:
      "Si glycémie mal contrôlée : éviter les AP d’intensité élevée."
  },


  "dt2::crc::1": {

    expectedLegacyText:
      "surveillance glycémie avant et après l’effort, avoir une collation avec soi",

    expectedV2Text:
      "Si la glycémie est supérieure à 2,5 g/L avant la séance, différer l’activité physique et attendre qu’elle soit revenue à 2 g/L ou moins avant de reprendre."
  },


  "dt2::regles::0": {

    expectedLegacyText:
      "SI traitement hypoglycémiant <button type='button' class='info-trigger info-hitbox' data-info='Insuline, glinides, sulfamides hypoglycémiants'><span class='info-icon'>i</span></button> → ALORS auto-surveillance glycémique avant et après effort, prévoir collation avec soi",

    expectedV2Text:
      "SI traitement hypoglycémiant (insuline, glinides, sulfamides hypoglycémiants) → ALORS auto-surveillance glycémique avant et après effort, prévoir collation avec soi"
  },


  "bpco::contraintes::0": {

    expectedLegacyText:
      "BPCO sévère avec désaturation à l’effort ou insuffisance respiratoire chronique sous OLD → CI relative des AP d’intensité élevée",

    expectedV2Text:
      "BPCO sévère avec désaturation à l'effort ou insuffisance respiratoire chronique sous OLD : contre-indication relative aux AP d'intensité élevée."
  },


  "bpco::contraintes::1": {

    expectedLegacyText:
      "Insuffisance respiratoire non contrôlée ou comorbidité décompensée → CI temporaire",

    expectedV2Text:
      "Insuffisance respiratoire non contrôlée ou comorbidité décompensée : contre-indication temporaire."
  },


  "bpco::adaptations::0": {

    expectedLegacyText:
      "Toujours : limiter la sédentarité, augmenter l’AP d’intensité faible, être très progressif (déconditionnement fréquent)",

    expectedV2Text:
      "Toujours : limiter la sédentarité, augmenter l'AP d'intensité faible, être très progressif (déconditionnement fréquent)."
  },


  "bpco::adaptations::1": {

    expectedLegacyText:
      "Privilégier les activités d’endurance (marche, vélo)",

    expectedV2Text:
      "Privilégier les activités d'endurance (marche, vélo)."
  },


  "bpco::adaptations::2": {

    expectedLegacyText:
      "Fractionner les séances (périodes de 5 à 10 minutes si besoin)",

    expectedV2Text:
      "Fractionner les séances (5 à 10 min si besoin)."
  },


  "bpco::adaptations::3": {

    expectedLegacyText:
      "Adapter l’intensité selon dyspnée (Borg 3 à 6)",

    expectedV2Text:
      "Adapter l'intensité selon la dyspnée (Borg 4-6/10 ; 3-4/10 si BPCO sévère)."
  },


  "bpco::regles::0": {

    expectedLegacyText:
      "SI dyspnée importante → ALORS réduire l’intensité ou fractionner",

    expectedV2Text:
      "Si dyspnée importante : réduire l'intensité ou fractionner."
  },


  "bpco::regles::1": {

    expectedLegacyText:
      "SI exacerbation récente → ALORS éviter sédentarité et reprise progressive de l’AP sur 4 semaines",

    expectedV2Text:
      "Après exacerbation récente : éviter la sédentarité et reprendre progressivement l'AP sur 4 semaines."
  },


  "bpco::regles::3": {

    expectedLegacyText:
      "SI désaturation à l’effort → ALORS adaptation ou encadrement spécialisé",

    expectedV2Text:
      "Si désaturation à l'effort : adapter l'AP et envisager un encadrement spécialisé."
  },


  "bpco::situations::2": {

    expectedLegacyText:
      "<a href='http://medicalcul.free.fr/goldbpco.html' target='_blank' rel='noopener noreferrer'>GOLD</a> 2 sans ces critères : avec comorbidités stabilisées → réadaptation, APA ou section sport santé selon situation ; sans comorbidités → idem <a href='http://medicalcul.free.fr/goldbpco.html' target='_blank' rel='noopener noreferrer'>GOLD</a> 1",

    expectedV2Text:
      "Si GOLD II sans ces critères : avec comorbidités stabilisées → réadaptation respiratoire, APA ou section sport-santé selon la situation ; sans comorbidités → idem GOLD I."
  },


  "bpco::situations::3": {

    expectedLegacyText:
      "<a href='http://medicalcul.free.fr/goldbpco.html' target='_blank' rel='noopener noreferrer'>GOLD</a> 1 : pratique d’activité physique en club sport santé ou en autonomie",

    expectedV2Text:
      "Si GOLD I : activité physique en club sport-santé ou en autonomie."
  },


  "bpco::situations::4": {

    expectedLegacyText:
      "Comorbidités fréquentes (cardio, anxiété, dépression)",

    expectedV2Text:
      "Repérer les comorbidités fréquentes associées à la BPCO, notamment cardiovasculaires, anxieuses ou dépressives."
  },


  "bpco::crc::2": {

    expectedLegacyText:
      "fractionner l’activité physique si nécessaire",

    expectedV2Text:
      "Fractionner l'activité physique en plusieurs périodes courtes si nécessaire."
  }

};

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


  const originKey =
    getLegacyOriginKey(
      origin
    );


  const override =
    CLINICAL_KNOWLEDGE_LEGACY_TEXT_OVERRIDES[
      originKey
    ];


  /*
   * Cas explicitement normalisé.
   *
   * La parité n'est acceptée que si :
   * 1. le legacy est toujours exactement celui attendu ;
   * 2. le v2 correspond exactement à la version
   *    normalisée approuvée.
   */
  if (override) {

    const legacyMatches =
      normalizeParityText(
        legacyValue
      ) ===
      normalizeParityText(
        override.expectedLegacyText
      );


    const v2Matches =
      normalizeParityText(
        v2Value
      ) ===
      normalizeParityText(
        override.expectedV2Text
      );


    return (
      legacyMatches &&
      v2Matches
    );
  }


  /*
   * Tous les autres cas restent
   * en comparaison stricte.
   */
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