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

// Les données historiques peuvent arriver sous forme de chaînes.
// Ne jamais transformer une fréquence/durée nulle, négative ou invalide
// en une valeur positive fictive dans un document médical.
function parsePrescriptionPositiveNumber(valeur) {
  if (valeur === null || valeur === undefined || typeof valeur === "boolean") {
    return null;
  }
  const texte = String(valeur).trim();
  if (!texte) return null;
  const nombre = Number(texte);
  return Number.isFinite(nombre) && nombre > 0 ? nombre : null;
}

function formatFrequence(valeur) {
  if (valeur === null || valeur === undefined || String(valeur).trim() === "") {
    return "";
  }
  const nombre = parsePrescriptionPositiveNumber(valeur);
  return nombre === null ? "Fréquence non valide" : `${nombre} fois/semaine`;
}

function formatDuree(valeur, secondes) {
  if(Number.isSafeInteger(secondes) && secondes>0) {
    const h=Math.floor(secondes/3600), min=Math.floor(secondes%3600/60), sec=secondes%60;
    return [h?h+" h":"",min?min+" min":"",sec?sec+" s":""].filter(Boolean).join(" ")+"/séance";
  }
  if (valeur === null || valeur === undefined || String(valeur).trim() === "") {
    return "";
  }
  const nombre = parsePrescriptionPositiveNumber(valeur);
  return nombre === null ? "Durée non valide" : `${nombre} min/séance`;
}