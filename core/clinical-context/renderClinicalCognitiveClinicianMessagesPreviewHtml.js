(function () {
    "use strict";

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function renderClinicalMessageHtml(
        value
    ) {
        const renderer =
            window
                .renderClinicalCognitiveMessageHtml;

        if (
            typeof renderer ===
            "function"
        ) {
            return renderer(value);
        }

        return escapeHtml(value);
    }

    function renderItems(items) {
        if (!Array.isArray(items) || items.length === 0) {
            return "";
        }

        const itemsHtml = items
            .map(function (item) {
                const message = String(
                    item?.message || ""
                ).trim();

                if (!message) {
                    return "";
                }

                return `
<li class="pap-cognitive-ux-item">
  <span class="pap-cognitive-ux-item-message">
    ${renderClinicalMessageHtml(message)}
  </span>
</li>`;
            })
            .filter(Boolean)
            .join("");

        return itemsHtml
            ? `<ul class="pap-cognitive-ux-items">${itemsHtml}</ul>`
            : "";
    }

    function renderClinicianChecks(items) {
        if (!Array.isArray(items) || items.length === 0) {
            return "";
        }

        const itemsHtml = items
            .map(function (item) {
                const message = String(
                    item?.message || ""
                ).trim();

                const description = String(
                    item?.condition?.description || ""
                ).trim();

                if (!message) {
                    return "";
                }

                return `
<li class="pap-cognitive-ux-item">
  ${
      description
          ? `<div><strong>Condition à vérifier :</strong> ${escapeHtml(
                description
            )}</div>`
          : ""
  }
  <div class="pap-cognitive-ux-item-message">
    ${renderClinicalMessageHtml(message)}
  </div>
</li>`;
            })
            .filter(Boolean)
            .join("");

        if (!itemsHtml) {
            return "";
        }

        return `
<div class="pap-cognitive-clinician-checks">
  <div class="pap-cognitive-ux-subsection-title">
    Conditions à vérifier par le médecin
  </div>
  <ul class="pap-cognitive-ux-items">
    ${itemsHtml}
  </ul>
</div>`;
    }

    function renderSection(section) {
        const always = Array.isArray(section?.always)
            ? section.always
            : [];

        const clinicianCheck = Array.isArray(
            section?.clinicianCheck
        )
            ? section.clinicianCheck
            : [];

        const alwaysHtml = renderItems(always);
        const clinicianCheckHtml =
            renderClinicianChecks(clinicianCheck);

        if (!alwaysHtml && !clinicianCheckHtml) {
            return "";
        }

        const title = String(
            section?.title ||
            section?.sectionId ||
            ""
        ).trim();

        return `
<section class="pap-cognitive-ux-section">
  <h4>${escapeHtml(title)}</h4>

  ${
      alwaysHtml
          ? `
  <div class="pap-cognitive-clinician-always">
    <div class="pap-cognitive-ux-subsection-title">
      Repères applicables au contexte sélectionné
    </div>
    ${alwaysHtml}
  </div>`
          : ""
  }

  ${clinicianCheckHtml}
</section>`;
    }

    function renderClinicalCognitiveClinicianMessagesPreviewHtml(
        clinicianMessages
    ) {
        const sections = Array.isArray(
            clinicianMessages?.sections
        )
            ? clinicianMessages.sections
            : [];

        const sectionsHtml = sections
            .map(renderSection)
            .filter(Boolean)
            .join("");

        if (!sectionsHtml) {
            return "";
        }

        return `
<div class="pap-cognitive-ux-experimental">
  <div class="pap-cognitive-ux-preview-title">
    Aperçu technique — messages médecin v2
  </div>

  <p>
    Les éléments conditionnels restent à vérifier par le médecin
    avant toute utilisation.
  </p>

  ${sectionsHtml}
</div>`;
    }

    window
        .renderClinicalCognitiveClinicianMessagesPreviewHtml =
        renderClinicalCognitiveClinicianMessagesPreviewHtml;
})();
