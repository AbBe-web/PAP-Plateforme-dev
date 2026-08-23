// core/clinical-context/clinical-knowledge-validation.js

/*
 * PAP — Clinical Knowledge Validation v1
 *
 * Validation structurelle des futurs ClinicalKnowledgeItem.
 *
 * Ce module :
 * - ne contient aucune règle clinique ;
 * - ne lit pas le DOM ;
 * - ne modifie aucun modèle ;
 * - ne prend aucune décision clinique ;
 * - n'est pas utilisé par le moteur legacy.
 */

function validateClinicalKnowledgeItem(item) {

  const errors = [];

  if (
    !item ||
    typeof item !== "object" ||
    Array.isArray(item)
  ) {
    return {
      valid: false,
      errors: ["knowledge item must be an object"]
    };
  }

  if (
    typeof item.id !== "string" ||
    item.id.trim() === ""
  ) {
    errors.push("id is required");
  }

  if (
    item.semanticConceptId !== undefined &&
    (
      typeof item.semanticConceptId !== "string" ||
      item.semanticConceptId.trim() === ""
    )
  ) {
    errors.push(
      "semanticConceptId must be a non-empty string when provided"
    );
  }

  if (!Array.isArray(item.clinicalUses)) {
    errors.push("clinicalUses must be an array");

  } else if (item.clinicalUses.length === 0) {
    errors.push("clinicalUses must not be empty");

  } else {

    item.clinicalUses.forEach((clinicalUse, index) => {

      if (
        !clinicalUse ||
        typeof clinicalUse !== "object"
      ) {
        errors.push(
          `clinicalUses[${index}] must be an object`
        );
        return;
      }

      const clinicalFunction =
        clinicalUse.function;

      const category =
        clinicalUse.category;

      if (
        !CLINICAL_KNOWLEDGE_SCHEMA
          .clinicalFunctions
          .includes(clinicalFunction)
      ) {
        errors.push(
          `clinicalUses[${index}].function is invalid`
        );
      }

      const allowedCategories =
        CLINICAL_KNOWLEDGE_SCHEMA
          .categoriesByFunction[
            clinicalFunction
          ] || [];

      if (
        typeof category !== "string" ||
        !allowedCategories.includes(category)
      ) {
        errors.push(
          `clinicalUses[${index}].category is invalid`
        );
      }

      if (
        clinicalUse.condition !== undefined
      ) {

        if (
          !clinicalUse.condition ||
          typeof clinicalUse.condition !== "object" ||
          Array.isArray(clinicalUse.condition)
        ) {
          errors.push(
            `clinicalUses[${index}].condition must be an object`
          );

        } else if (
          !CLINICAL_KNOWLEDGE_SCHEMA
            .conditionTypes
            .includes(
              clinicalUse.condition.type
            )
        ) {
          errors.push(
            `clinicalUses[${index}].condition.type is invalid`
          );
        }

        if (
          clinicalUse.condition &&
          clinicalUse.condition.description !== undefined &&
          (
            typeof clinicalUse.condition.description !== "string" ||
            clinicalUse.condition.description.trim() === ""
          )
        ) {
          errors.push(
            `clinicalUses[${index}].condition.description must be a non-empty string`
          );
        }

        if (
          clinicalUse.condition &&
          clinicalUse.condition.machineEvaluable !== undefined &&
          typeof clinicalUse.condition.machineEvaluable !== "boolean"
        ) {
          errors.push(
            `clinicalUses[${index}].condition.machineEvaluable must be a boolean`
          );
        }
      }

      if (
        clinicalUse.messages !== undefined
      ) {

        if (
          !clinicalUse.messages ||
          typeof clinicalUse.messages !== "object" ||
          Array.isArray(clinicalUse.messages)
        ) {
          errors.push(
            `clinicalUses[${index}].messages must be an object`
          );

        } else {

          ["clinician", "patient"]
            .forEach(audience => {

              if (
                Object.prototype.hasOwnProperty.call(
                  clinicalUse.messages,
                  audience
                ) &&
                typeof clinicalUse.messages[audience] !== "string"
              ) {
                errors.push(
                  `clinicalUses[${index}].messages.${audience} must be a string`
                );
              }

            });
        }
      }

      if (
        clinicalUse.presentationTargets !== undefined &&
        (
          !Array.isArray(
            clinicalUse.presentationTargets
          ) ||
          clinicalUse.presentationTargets.some(
            target =>
              typeof target !== "string" ||
              target.trim() === ""
          )
        )
      ) {
        errors.push(
          `clinicalUses[${index}].presentationTargets must be an array of non-empty strings`
        );
      }

      if (
        clinicalUse.evidenceSourceIds !== undefined &&
        !Array.isArray(
          clinicalUse.evidenceSourceIds
        )
      ) {
        errors.push(
          `clinicalUses[${index}].evidenceSourceIds must be an array`
        );
      }

      if (
        clinicalUse.relatedResourceIds !== undefined &&
        !Array.isArray(
          clinicalUse.relatedResourceIds
        )
      ) {
        errors.push(
          `clinicalUses[${index}].relatedResourceIds must be an array`
        );
      }

    });
  }

  if (item.functionalUses !== undefined) {

    if (!Array.isArray(item.functionalUses)) {
      errors.push(
        "functionalUses must be an array when provided"
      );

    } else {

      const seenFunctionalUses =
        new Set();

      item.functionalUses
        .forEach((functionalUse, index) => {

          if (
            !functionalUse ||
            typeof functionalUse !== "object" ||
            Array.isArray(functionalUse)
          ) {
            errors.push(
              `functionalUses[${index}] must be an object`
            );
            return;
          }

          const domainId =
            functionalUse.domainId;

          const roleId =
            functionalUse.roleId;

          if (
            typeof domainId !== "string" ||
            domainId.trim() === ""
          ) {
            errors.push(
              `functionalUses[${index}].domainId is required`
            );
          }

          if (
            typeof roleId !== "string" ||
            roleId.trim() === ""
          ) {
            errors.push(
              `functionalUses[${index}].roleId is required`
            );
          }

          const domainKnown =
            typeof domainId === "string" &&
            CLINICAL_KNOWLEDGE_SCHEMA
              .functionalDomains
              .includes(domainId);

          if (!domainKnown) {
            errors.push(
              `functionalUses[${index}].domainId is invalid`
            );
          }

          const allowedRoles =
            domainKnown
              ? (
                  CLINICAL_KNOWLEDGE_SCHEMA
                    .functionalRolesByDomain[
                      domainId
                    ] || []
                )
              : [];

          const roleKnown =
            typeof roleId === "string" &&
            allowedRoles.includes(roleId);

          if (!roleKnown) {
            errors.push(
              `functionalUses[${index}].roleId is invalid for domainId`
            );
          }

          if (!Array.isArray(functionalUse.facets)) {
            errors.push(
              `functionalUses[${index}].facets must be an array`
            );

          } else {

            const seenFacets =
              new Set();

            functionalUse.facets
              .forEach((facet, facetIndex) => {

                if (
                  typeof facet !== "string" ||
                  facet.trim() === ""
                ) {
                  errors.push(
                    `functionalUses[${index}].facets[${facetIndex}] must be a non-empty string`
                  );
                  return;
                }

                if (
                  !CLINICAL_KNOWLEDGE_SCHEMA
                    .functionalFacets
                    .includes(facet)
                ) {
                  errors.push(
                    `functionalUses[${index}].facets[${facetIndex}] is invalid`
                  );
                }

                if (seenFacets.has(facet)) {
                  errors.push(
                    `functionalUses[${index}] contains duplicate facet: ${facet}`
                  );
                } else {
                  seenFacets.add(facet);
                }

              });

            if (
              domainKnown &&
              roleKnown &&
              functionalUse.facets.length > 0
            ) {

              const functionalUseKey =
                `${domainId}::${roleId}`;

              if (
                CLINICAL_KNOWLEDGE_SCHEMA
                  .allowsFacetsByDomainRole[
                    functionalUseKey
                  ] !== true
              ) {
                errors.push(
                  `functionalUses[${index}].facets are not allowed for ${functionalUseKey}`
                );
              }
            }
          }

          if (
            domainKnown &&
            roleKnown
          ) {

            const functionalUseKey =
              `${domainId}::${roleId}`;

            if (
              seenFunctionalUses
                .has(functionalUseKey)
            ) {
              errors.push(
                `duplicate functional use: ${functionalUseKey}`
              );
            } else {
              seenFunctionalUses
                .add(functionalUseKey);
            }
          }

        });
    }
  }

  if (
    item.context !== undefined &&
    item.context !== null
  ) {

    if (
      typeof item.context !== "object" ||
      Array.isArray(item.context)
    ) {
      errors.push("context must be an object");

    } else {

      Object.keys(item.context)
        .forEach(key => {

          if (
            !CLINICAL_KNOWLEDGE_SCHEMA
              .contextKeys
              .includes(key)
          ) {
            errors.push(
              `unknown context key: ${key}`
            );
          }

          if (
            !Array.isArray(item.context[key])
          ) {
            errors.push(
              `context.${key} must be an array`
            );
          }

        });
    }
  }

  if (
    !item.messages ||
    typeof item.messages !== "object" ||
    Array.isArray(item.messages)
  ) {
    errors.push("messages must be an object");

  } else {

    const clinicianMessage =
      item.messages.clinician;

    const patientMessage =
      item.messages.patient;

    const hasClinicianMessage =
      typeof clinicianMessage === "string" &&
      clinicianMessage.trim() !== "";

    const hasPatientMessage =
      typeof patientMessage === "string" &&
      patientMessage.trim() !== "";

    if (
      !hasClinicianMessage &&
      !hasPatientMessage
    ) {
      errors.push(
        "at least one clinician or patient message is required"
      );
    }
  }

  if (
    !item.condition ||
    typeof item.condition !== "object" ||
    Array.isArray(item.condition)
  ) {
    errors.push("condition must be an object");

  } else if (
    !CLINICAL_KNOWLEDGE_SCHEMA
      .conditionTypes
      .includes(item.condition.type)
  ) {
    errors.push("condition.type is invalid");
  }

  if (
    item.clinicalMoments !== undefined
  ) {

    if (
      !Array.isArray(
        item.clinicalMoments
      )
    ) {
      errors.push(
        "clinicalMoments must be an array"
      );

    } else if (
      item.clinicalMoments.length === 0
    ) {
      errors.push(
        "clinicalMoments must not be empty when provided"
      );

    } else {

      const seenClinicalMoments =
        new Set();

      item.clinicalMoments.forEach(
        (clinicalMoment, index) => {

          if (
            !clinicalMoment ||
            typeof clinicalMoment !== "object" ||
            Array.isArray(clinicalMoment)
          ) {
            errors.push(
              `clinicalMoments[${index}] must be an object`
            );
            return;
          }

          const moment =
            clinicalMoment.moment;

          if (
            typeof moment !== "string" ||
            !CLINICAL_KNOWLEDGE_SCHEMA
              .clinicalMoments
              .includes(moment)
          ) {
            errors.push(
              `clinicalMoments[${index}].moment is invalid`
            );

          } else if (
            seenClinicalMoments.has(
              moment
            )
          ) {
            errors.push(
              `clinicalMoments contains duplicate moment: ${moment}`
            );

          } else {

            seenClinicalMoments.add(
              moment
            );
          }

          const momentCondition =
            clinicalMoment.condition;

          if (
            !momentCondition ||
            typeof momentCondition !== "object" ||
            Array.isArray(momentCondition)
          ) {
            errors.push(
              `clinicalMoments[${index}].condition must be an object`
            );

          } else if (
            !CLINICAL_KNOWLEDGE_SCHEMA
              .conditionTypes
              .includes(
                momentCondition.type
              )
          ) {
            errors.push(
              `clinicalMoments[${index}].condition.type is invalid`
            );
          }

          if (
            momentCondition &&
            momentCondition.description !==
              undefined &&
            (
              typeof momentCondition
                .description !== "string" ||
              momentCondition
                .description
                .trim() === ""
            )
          ) {
            errors.push(
              `clinicalMoments[${index}].condition.description must be a non-empty string`
            );
          }

          if (
            momentCondition &&
            momentCondition.machineEvaluable !==
              undefined &&
            typeof momentCondition
              .machineEvaluable !== "boolean"
          ) {
            errors.push(
              `clinicalMoments[${index}].condition.machineEvaluable must be a boolean`
            );
          }

          if (
            clinicalMoment
              .messageClinicianOverride !==
                undefined &&
            (
              typeof clinicalMoment
                .messageClinicianOverride !==
                  "string" ||
              clinicalMoment
                .messageClinicianOverride
                .trim() === ""
            )
          ) {
            errors.push(
              `clinicalMoments[${index}].messageClinicianOverride must be a non-empty string`
            );
          }

        }
      );
    }
  }

  if (
    item.evidenceSourceIds !== undefined &&
    !Array.isArray(item.evidenceSourceIds)
  ) {
    errors.push(
      "evidenceSourceIds must be an array"
    );
  }

  if (
    item.relatedResourceIds !== undefined &&
    !Array.isArray(item.relatedResourceIds)
  ) {
    errors.push(
      "relatedResourceIds must be an array"
    );
  }

  return {
    valid: errors.length === 0,
    errors
  };
}


function validateClinicalKnowledgeRegistry(
  registry
) {

  const errors = [];

  if (!Array.isArray(registry)) {
    return {
      valid: false,
      errors: [
        "knowledge registry must be an array"
      ]
    };
  }

  const seenIds =
    new Set();

  registry.forEach((item, index) => {

    const result =
      validateClinicalKnowledgeItem(item);

    if (!result.valid) {

      result.errors.forEach(error => {

        errors.push(
          `item[${index}]: ${error}`
        );

      });
    }

    if (
      item &&
      typeof item.id === "string"
    ) {

      if (seenIds.has(item.id)) {

        errors.push(
          `duplicate knowledge item id: ${item.id}`
        );

      } else {

        seenIds.add(item.id);

      }
    }

  });

  return {
    valid: errors.length === 0,
    errors
  };
}


window.validateClinicalKnowledgeItem =
  validateClinicalKnowledgeItem;

window.validateClinicalKnowledgeRegistry =
  validateClinicalKnowledgeRegistry;