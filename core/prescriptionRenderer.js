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

  if (activite.mode === "pas") {

  const objectifPas =
    String(activite.objectif_pas || "").trim();

  const consignesPas =
    String(activite.consignes_pas || "").trim();

  texte += "activité d’endurance avec un objectif de ";

  texte += `${objectifPas} pas/jour`;

  if (consignesPas) {
    texte += ` (${consignesPas})`;
  }

  break;
}

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

case "equilibre": {

  texte += "travail de l'équilibre";

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

let encadrement = "";

const orientation =
  prescriptionModel.orientationAPA;

if (
  orientation &&
  orientation.active &&
  Array.isArray(orientation.orientations) &&
  orientation.orientations.length > 0
) {

  const mapping = {

    autonome:
      "en autonomie",

    educateur:
      "avec encadrement par un éducateur sportif",

    apa:
      "dans le cadre d’un programme d’activité physique adaptée",

    kine:
      "avec supervision par un kinésithérapeute",

    ergo:
      "avec accompagnement ergothérapeutique",

    psychomot:
      "avec accompagnement psychomoteur"
  };

  const orientations =
    orientation.orientations
      .map(o => mapping[o] || o);

  if (orientations.length === 1) {

    encadrement =
      orientations[0];

  } else if (orientations.length === 2) {

    encadrement =
      orientations.join(" ou ");

  } else {

    encadrement =
      orientations.slice(0, -1).join(", ")
      + " ou "
      + orientations[orientations.length - 1];
  }
}

  let textePrescription = encadrement
  ? `Une activité physique régulière est prescrite ${encadrement} : ${liste}.`
  : `Une activité physique régulière est prescrite : ${liste}.`;

if (
  orientation &&
  orientation.bilanSouhaite
) {

  textePrescription +=
    " Un bilan de condition et de capacités physiques est souhaité.";
}

if (
  orientation &&
  orientation.consentementPartage
) {

  textePrescription +=
    " Le patient a été informé du partage des informations nécessaires avec le professionnel encadrant et son accord oral a été recueilli.";
}

if (
  orientation &&
  orientation.commentaire &&
  orientation.commentaire.trim()
) {

  textePrescription +=
    ` ${orientation.commentaire.trim()}`;
}

return textePrescription;
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
        html += `<strong>• ACTIVITÉ D’ENDURANCE</strong>`;
        break;

      case "renforcement":
        html += `<strong>• RENFORCEMENT MUSCULAIRE</strong>`;
        break;

      case "souplesse":
        html += `<strong>• TRAVAIL DE SOUPLEESSE ET MOBILITÉ</strong>`;
        break;

      case "equilibre":
        html += `<strong>• TRAVAIL DE L'ÉQUILIBRE</strong>`;
        break;

      default:
        html += `<strong>• ACTIVITÉ PHYSIQUE</strong>`;
    }

    if (activite.type) {
   html += ` (${activite.type.charAt(0).toLowerCase() + activite.type.slice(1)})`;
    }

    html += `<div style="
  margin-left:18px;
  margin-top:4px;
  line-height:1.45;
">`;

if (
  activite.categorie === "endurance" &&
  activite.mode === "pas"
) {

  html += `<div>Objectif : ${activite.objectif_pas} pas/jour</div>`;

  if (activite.consignes_pas) {
    html += `<div>${activite.consignes_pas}</div>`;
  }

  html += `</div>`;
  html += `</div>`;

  return;
}

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
    Array.from(
      document.querySelectorAll(
        ".patho:checked"
      )
    );

  const selectedPatientMessagesV2 =
    window.PAP_SELECTED_PATIENT_MESSAGES_V2 &&
    typeof window.PAP_SELECTED_PATIENT_MESSAGES_V2 ===
      "object"
      ? window.PAP_SELECTED_PATIENT_MESSAGES_V2
      : {
          groups: [],
          selectedItemIds: [],
          availablePathologyIds: []
        };

  const v2AvailablePathologyIds =
    new Set(
      Array.isArray(
        selectedPatientMessagesV2
          .availablePathologyIds
      )
        ? selectedPatientMessagesV2
            .availablePathologyIds
            .map(pathologyId =>
              String(
                pathologyId || ""
              ).trim()
            )
            .filter(Boolean)
        : []
    );

  const v2Groups =
    Array.isArray(
      selectedPatientMessagesV2.groups
    )
      ? selectedPatientMessagesV2.groups
      : [];

  const blocks = [];

  selectedPathos.forEach(pathologyInput => {

    const pathologyId =
      String(
        pathologyInput?.value || ""
      ).trim();

    if (!pathologyId) {
      return;
    }

    let items = [];

    /*
     * Source prioritaire :
     * sélection documentaire V2.
     *
     * Une pathologie couverte par V2 avec une
     * sélection vide ne doit jamais retomber
     * vers les données legacy.
     */
    if (
      v2AvailablePathologyIds.has(
        pathologyId
      )
    ) {

      const v2Group =
        v2Groups.find(group =>
          String(
            group?.pathologyId || ""
          ).trim() === pathologyId
        );

      items =
        Array.isArray(v2Group?.items)
          ? v2Group.items
              .map(item =>
                String(
                  item?.message || ""
                ).trim()
              )
              .filter(Boolean)
          : [];

    } else {

      /*
       * Fallback transitoire de données :
       * uniquement pour les pathologies
       * qui ne sont pas encore couvertes par V2.
       *
       * crc_default est prioritaire.
       * crc reste le dernier fallback disponible.
       */
      const legacyPathologyData =
        PATHO_DATA[pathologyId];

      if (!legacyPathologyData) {
        return;
      }

      const defaultItems =
        Array.isArray(
          legacyPathologyData.crc_default
        )
          ? legacyPathologyData.crc_default
              .map(item =>
                String(item || "").trim()
              )
              .filter(Boolean)
          : [];

      const allItems =
        Array.isArray(
          legacyPathologyData.crc
        )
          ? legacyPathologyData.crc
              .map(item =>
                String(item || "").trim()
              )
              .filter(Boolean)
          : [];

      items =
        defaultItems.length > 0
          ? defaultItems
          : allItems;
    }

    if (items.length === 0) {
      return;
    }

    const short =
      pathologyId.toUpperCase();

    blocks.push(
      `${short} : ${items.join(", ")}`
    );

  });

  if (blocks.length === 0) {
    return "";
  }

  return (
    "CONSEILS ASSOCIÉS à vos problèmes de santé : "
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

    const isPasEndurance =
      activite.categorie === "endurance" &&
      activite.mode === "pas";

    switch (activite.categorie) {

      case "endurance": {

        lines.push(
          `• ACTIVITÉ D’ENDURANCE${!isPasEndurance && activite.type ? ` (${activite.type})` : ""}`
        );

        if (isPasEndurance) {

          const objectifPas =
            String(activite.objectif_pas || "").trim();

          const consignesPas =
            String(activite.consignes_pas || "").trim();

          if (objectifPas) {
            lines.push(`  Objectif : ${objectifPas} pas/jour`);
          }

          if (consignesPas) {
            lines.push(`  ${consignesPas}`);
          }
        }

        break;
      }

      case "renforcement":
      lines.push(`• RENFORCEMENT MUSCULAIRE${activite.type ? ` (${activite.type})` : ""}`);
        break;

      case "souplesse":
        lines.push(`• SOUPLESSE ET MOBILITÉ${activite.type ? ` (${activite.type})` : ""}`);
        break;

      case "equilibre":
        lines.push(`• TRAVAIL DE L'ÉQUILIBRE${activite.type ? ` (${activite.type})` : ""}`);
        break;

      default:
        lines.push("• ACTIVITÉ PHYSIQUE");
    }

    if (!isPasEndurance) {

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
    }

    lines.push("");
  });

  if (dureePrescription) {
  lines.push(`DURÉE : ${dureePrescription}`);
  lines.push("");
}

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

  return lines.join("\n");
}

function generatePrescriptionDPI(model) {

  if (!validatePrescriptionModel(model)) {
    return "";
  }

  let lines = [];

  model.activites.forEach((activite) => {

    switch (activite.categorie) {

case "endurance":

  if (activite.mode === "pas") {

    lines.push("ACTIVITÉ D’ENDURANCE");

    lines.push(
      `Objectif : ${activite.objectif_pas} pas/jour`
    );

    if (activite.consignes_pas) {
      lines.push(activite.consignes_pas);
    }

  } else {

    lines.push(
`ACTIVITÉ D’ENDURANCE${
  activite.intensite === "moderee"
    ? " (intensité modérée)"
    : activite.intensite === "elevee"
      ? " (intensité élevée)"
      : ""
}${activite.type ? ` : ${activite.type}` : ""}`
    );

  }

  break;

      case "renforcement":

        lines.push(
         `RENFORCEMENT MUSCULAIRE${activite.type ? ` : ${activite.type}` : ""}`
        );

        break;

      case "souplesse":

  lines.push(
`SOUPLESSE ET MOBILITÉ${activite.type ? ` : ${activite.type}` : ""}`
  );

  break;

case "equilibre":

  lines.push(
`TRAVAIL DE L'ÉQUILIBRE${activite.type ? ` : ${activite.type}` : ""}`
  );

  break;
}

    let details = [];

    if (activite.frequence?.valeur) {
     details.push(`${activite.frequence.valeur}x/sem`);
    }

    if (activite.duree?.valeur) {
      details.push(formatDuree(activite.duree.valeur));
    }

    if (details.length > 0) {
      lines.push(details.join(" - "));
    }

    lines.push("");
  });

  const dureePrescription =
  document.querySelector(
    'input[name="duree_prescription"]'
  )?.value || "";

if (dureePrescription) {
  lines.push(`DURÉE : ${dureePrescription}`);
  lines.push("");
}

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
lines.push("");
lines.push(
  "Précautions à prendre lors de vos séances d’activité physique (10 règles d’or) :"
);

lines.push(
  "https://www.frequenceglobale.com/Client/CCS/les-regles-dor-cardiologie-sport.pdf"
);

  return lines.join("\n");
}