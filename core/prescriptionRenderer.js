function generatePrescriptionCRC(model) {
  if (!validatePrescriptionModel(model)) {
    return "";
  }

  const lignes = [];

  lignes.push("Une activité physique régulière est prescrite.");

  model.activites.forEach((activite) => {
    let texte = "";

    if (activite.type) {
      texte += activite.type;
    }

    if (activite.duree?.valeur) {
      texte += ` ${activite.duree.valeur} min`;
    }

    if (activite.frequence?.valeur) {
      texte += ` ${activite.frequence.valeur} fois/semaine`;
    }

    if (texte.trim()) {
      lignes.push(texte.trim() + ".");
    }
  });

  return lignes.join(" ");
}

function generatePrescriptionText(model) {
  return generatePrescriptionCRC(model);
}