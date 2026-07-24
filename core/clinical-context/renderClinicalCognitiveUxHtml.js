(function () {
    "use strict";

    function escapeClinicalCognitiveUxHtml(
        value
    ) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function getItemIdentity(item) {
        if (
            !item ||
            typeof item !== "object"
        ) {
            return "";
        }

        return String(
            item.knowledgeItemId ||
            item.id ||
            ""
        ).trim();
    }

    function getItemMessage(
        item,
        audience
    ) {
        if (
            !item ||
            typeof item !== "object"
        ) {
            return "";
        }

        if (audience === "patient") {
            return String(
                item.messages?.patient || ""
            ).trim();
        }

        return String(
            item.messages?.clinician || ""
        ).trim();
    }

    function renderItemHtml(
        item,
        audience
    ) {
        const message =
            getItemMessage(
                item,
                audience
            );

        if (!message) {
            return "";
        }

        const itemIdentity =
            getItemIdentity(item);

        const itemIdAttribute =
            itemIdentity
                ? ` data-knowledge-item-id="${escapeClinicalCognitiveUxHtml(
                    itemIdentity
                )}"`
                : "";

        return `
<li class="pap-cognitive-ux-item"${itemIdAttribute}>
  ${escapeClinicalCognitiveUxHtml(message)}
</li>`;
    }

    function renderSectionHtml(
        section,
        audience,
        sectionClass
    ) {
        if (
            !section ||
            typeof section !== "object"
        ) {
            return "";
        }

        const items =
            Array.isArray(section.items)
                ? section.items
                : [];

        const itemsHtml =
            items
                .map(function (item) {
                    return renderItemHtml(
                        item,
                        audience
                    );
                })
                .filter(Boolean)
                .join("");

        if (!itemsHtml) {
            return "";
        }

        const sectionId =
            String(section.id || "")
                .trim();

        const sectionIdAttribute =
            sectionId
                ? ` data-section-id="${escapeClinicalCognitiveUxHtml(
                    sectionId
                )}"`
                : "";

        const title =
            escapeClinicalCognitiveUxHtml(
                section.title || ""
            );

        return `
<section class="${sectionClass}"${sectionIdAttribute}>
  <h3 class="pap-cognitive-ux-section-title">
    ${title}
  </h3>
  <ul class="pap-cognitive-ux-list">
    ${itemsHtml}
  </ul>
</section>`;
    }

    function countRenderedItems(
        sections,
        audience
    ) {
        if (!Array.isArray(sections)) {
            return 0;
        }

        return sections.reduce(
            function (total, section) {
                const items =
                    Array.isArray(section?.items)
                        ? section.items
                        : [];

                return total +
                    items.filter(function (item) {
                        return Boolean(
                            getItemMessage(
                                item,
                                audience
                            )
                        );
                    }).length;
            },
            0
        );
    }

    function renderClinicalCognitiveUxHtml(
        viewModel
    ) {
        const safeViewModel =
            viewModel &&
            typeof viewModel === "object"
                ? viewModel
                : {};

        const clinicianSections =
            Array.isArray(
                safeViewModel.clinician
            )
                ? safeViewModel.clinician
                : [];

        const clinicianHtml =
            clinicianSections
                .map(function (section) {
                    return renderSectionHtml(
                        section,
                        "clinician",
                        "pap-cognitive-ux-section pap-cognitive-ux-section-clinician"
                    );
                })
                .filter(Boolean)
                .join("");

        const patientHtml =
            renderSectionHtml(
                safeViewModel.patient,
                "patient",
                "pap-cognitive-ux-section pap-cognitive-ux-section-patient"
            );

        const referenceHtml =
            renderSectionHtml(
                safeViewModel.reference,
                "clinician",
                "pap-cognitive-ux-section pap-cognitive-ux-section-reference"
            );

        const unassigned =
            Array.isArray(
                safeViewModel.unassigned
            )
                ? safeViewModel.unassigned
                : [];

        return {
            clinicianHtml,
            patientHtml,
            referenceHtml,

            diagnostics: {
                clinicianSectionCount:
                    clinicianSections.filter(
                        function (section) {
                            return Boolean(
                                renderSectionHtml(
                                    section,
                                    "clinician",
                                    "pap-cognitive-ux-section"
                                )
                            );
                        }
                    ).length,

                clinicianItemCount:
                    countRenderedItems(
                        clinicianSections,
                        "clinician"
                    ),

                patientItemCount:
                    countRenderedItems(
                        [safeViewModel.patient],
                        "patient"
                    ),

                referenceItemCount:
                    countRenderedItems(
                        [safeViewModel.reference],
                        "clinician"
                    ),

                unassignedCount:
                    unassigned.length
            }
        };
    }

    window.escapeClinicalCognitiveUxHtml =
        escapeClinicalCognitiveUxHtml;

    window.renderClinicalCognitiveUxHtml =
        renderClinicalCognitiveUxHtml;
})();
