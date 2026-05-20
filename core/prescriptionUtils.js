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