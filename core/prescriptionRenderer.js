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
   texte += ` (${activite.type.charAt(0).toLowerCase() + activite.type.slice(1)})`;
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
   texte += ` (${activite.type.charAt(0).toLowerCase() + activite.type.slice(1)})`;
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
texte += ` (${activite.type.charAt(0).toLowerCase() + activite.type.slice(1)})`;
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

function generatePrescriptionPatient(model) {

  if (!validatePrescriptionModel(model)) {
    return "";
  }

  if (
    !Array.isArray(model.activites) ||
    model.activites.length === 0
  ) {
    return "";
  }

  let html = `
    <div class="prescription-patient">
  `;

  model.activites.forEach((activite) => {

    html += `<div style="margin-bottom:12px;">`;

    switch (activite.categorie) {

      case "endurance":
        html += `<strong>• Activité d’endurance</strong>`;
        break;

      case "renforcement":
        html += `<strong>• Renforcement musculaire</strong>`;
        break;

      case "souplesse":
        html += `<strong>• Travail de souplesse et mobilité</strong>`;
        break;

      default:
        html += `<strong>• Activité physique</strong>`;
    }

    if (activite.type) {
   html += ` (${activite.type.charAt(0).toLowerCase() + activite.type.slice(1)})`;
    }

    html += `<div style="
  margin-left:18px;
  margin-top:4px;
  line-height:1.45;
">`;

    if (activite.intensite === "moderee") {
      html += `<div>Intensité modérée</div>`;
    }

    if (activite.intensite === "elevee") {
      html += `<div>Intensité élevée</div>`;
    }

    if (activite.duree?.valeur) {
      html += `<div>${formatDuree(activite.duree.valeur)}</div>`;
    }

    if (activite.frequence?.valeur) {
      html += `<div>${formatFrequence(activite.frequence.valeur)}</div>`;
    }

    html += `</div>`;
    html += `</div>`;
  });

  html += `</div>`;

  return html;
}

function buildPathoPlainText() {

  const selectedPathos =
    Array.from(document.querySelectorAll(".patho:checked"));

  let blocks = [];

  selectedPathos.forEach(p => {

    const container =
      document.getElementById(`crcContainer_${p.value}`);

    if (!container) return;

    const detailMode =
      document.querySelector(
        `input[name="crc_detail_${p.value}"]:checked`
      )?.value;

    let items = [];

    if (detailMode === "detail") {

      items =
        Array.from(
          container.querySelectorAll(".crc-item:checked")
        ).map(el => el.value);

    } else {

      items = PATHO_DATA[p.value]?.crc || [];
    }

    if (!items.length) return;

    const short = p.value.toUpperCase();

   const lines = items.join(", ");

blocks.push(`${short} : ${lines}`);
  });

if (blocks.length === 0) {
  return "";
}

return (
  "Conseils associés à vos problèmes de santé : "
  + blocks.join(" | ")
);
}

function generatePrescriptionPlainText(model) {

  if (!validatePrescriptionModel(model)) {
    return "";
  }

  let lines = [];

  const dureePrescription =
  document.querySelector('input[name="duree_prescription"]')?.value || "";

    model.activites.forEach((activite) => {

    switch (activite.categorie) {

      case "endurance":
        lines.push(`• Activité d’endurance${activite.type ? ` (${activite.type})` : ""}`);
        break;

      case "renforcement":
        lines.push(`• Renforcement musculaire${activite.type ? ` (${activite.type})` : ""}`);
        break;

      case "souplesse":
        lines.push(`• Travail de souplesse et mobilité${activite.type ? ` (${activite.type})` : ""}`);
        break;

      default:
        lines.push("• Activité physique");
    }

    if (activite.intensite === "moderee") {
      lines.push("  Intensité modérée");
    }

    if (activite.intensite === "elevee") {
      lines.push("  Intensité élevée");
    }

    if (activite.duree?.valeur) {
      lines.push(`  ${formatDuree(activite.duree.valeur)}`);
    }

    if (activite.frequence?.valeur) {
      lines.push(`  ${formatFrequence(activite.frequence.valeur)}`);
    }

    lines.push("");
  });

  const conseilsPatho =
  buildPathoPlainText();

  if (conseilsPatho) {

    const cleanConseils =
      conseilsPatho
        .replace(/<[^>]*>/g, "")
        .replace(/\s+/g, " ")
        .trim();

    lines.push(cleanConseils);
    lines.push("");
  }

  if (dureePrescription) {

  lines.push("");
  lines.push(`Durée prévisionnelle : ${dureePrescription}`);
}

  return lines.join("\n");
}