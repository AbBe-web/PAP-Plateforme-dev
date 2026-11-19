function clonePrescriptionModel(model) {
  return structuredClone(model);
}

function resetPrescriptionModel() {
  return createPrescriptionModel();
}

function validatePrescriptionModel(model) {
  if (!model || typeof model !== "object") {
    return false;
  }

  if (!Array.isArray(model.objectifs)) {
    return false;
  }

  if (!Array.isArray(model.activites)) {
    return false;
  }

  if (!Array.isArray(model.messagesPatient)) {
    return false;
  }

  // Compatibilité ascendante : l'ancien modèle sans sédentarité reste valide.
  if (model.sedentarite !== undefined) {
    const sed = model.sedentarite;
    if (
      !sed || typeof sed !== "object" ||
      !Array.isArray(sed.actions) ||
      !sed.actions.every(action => typeof action === "string") ||
      typeof sed.texteLibre !== "string"
    ) {
      return false;
    }
  }

  const validOrdonnanceTypes = [
    "simple",
    "fitt",
    "apa",
    "personnalisee",
    "consultation-rapide"
  ];

  if (!validOrdonnanceTypes.includes(model.ordonnanceType)) {
    return false;
  }

  return true;
}

function formatFrequence(valeur) {

  if (!valeur) return "";

  const n = Number(valeur);

  if (n <= 1) {
    return "1 fois/semaine";
  }

  return `${n} fois/semaine`;
}

function formatDuree(valeur) {

  if (!valeur) return "";

  const n = Number(valeur);

  if (n <= 1) {
    return "1 min/séance";
  }

  return `${n} min/séance`;
}