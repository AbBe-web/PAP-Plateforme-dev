function generatePrescriptionCRC(model) {

  if (!validatePrescriptionModel(model)) {
    return "";
  }

  if (
    !Array.isArray(model.activites) ||
    model.activites.length === 0
  ) {
    return "";
  }

  const activitesTextes = [];

  model.activites.forEach((activite) => {

    let texte = "";

    switch (activite.categorie) {

 case "endurance": {

  texte += "activité d’endurance";

  if (activite.type) {
    texte += ` (${activite.type})`;
  }

  const params = [];

  if (activite.intensite === "moderee") {
    params.push("d'intensité modérée");
  }

  if (activite.intensite === "elevee") {
    params.push("d'intensité élevée");
  }

  if (activite.duree?.valeur) {
    params.push(formatDuree(activite.duree.valeur));
  }

  if (activite.frequence?.valeur) {
    params.push(formatFrequence(activite.frequence.valeur));
  }

  if (params.length > 0) {
    texte += `, ${params.join(", ")}`;
  }

  break;
}

    case "renforcement": {

  texte += "renforcement musculaire";

  if (activite.type) {
    texte += ` (${activite.type})`;
  }

  const params = [];

  if (activite.duree?.valeur) {
    params.push(formatDuree(activite.duree.valeur));
  }

  if (activite.frequence?.valeur) {
    params.push(formatFrequence(activite.frequence.valeur));
  }

  if (params.length > 0) {
    texte += `, ${params.join(", ")}`;
  }

  break;
}

     case "souplesse": {

  texte += "travail de souplesse et mobilité";

  if (activite.type) {
    texte += ` (${activite.type})`;
  }

  const params = [];

  if (activite.duree?.valeur) {
    params.push(formatDuree(activite.duree.valeur));
  }

  if (activite.frequence?.valeur) {
    params.push(formatFrequence(activite.frequence.valeur));
  }

  if (params.length > 0) {
    texte += `, ${params.join(", ")}`;
  }

  break;
}

      default:

        texte += activite.type || "activité physique";
    }

    if (texte.trim()) {
      activitesTextes.push(texte.trim());
    }

  });

  if (activitesTextes.length === 0) {
    return "";
  }

  let liste = "";

  if (activitesTextes.length === 1) {

    liste = activitesTextes[0];

  } else if (activitesTextes.length === 2) {

    liste = activitesTextes.join(" et ");

 } else {

  liste =
    activitesTextes.slice(0, -1).join(" ; ")
    + " et "
    + activitesTextes[activitesTextes.length - 1];
}

  return `Une activité physique régulière est prescrite : ${liste}.`;
}

function generatePrescriptionText(model) {
  return generatePrescriptionCRC(model);
}