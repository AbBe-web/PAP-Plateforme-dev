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

    });
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