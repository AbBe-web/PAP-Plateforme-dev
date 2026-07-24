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

    function partitionItemsByCondition(
        items,
        audience
    ) {
        const result = {
            always: [],
            clinicianCheck: []
        };

        if (!Array.isArray(items)) {
            return result;
        }

        items.forEach(function (item) {
            const message =
                getItemMessage(
                    item,
                    audience
                );

            if (!message) {
                return;
            }

            const conditionType =
                item?.condition?.type || "always";

            if (
                conditionType ===
                "clinicianCheck"
            ) {
                result.clinicianCheck.push(
                    item
                );

                return;
            }

            result.always.push(item);
        });

        return result;
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

        const partition =
            partitionItemsByCondition(
                items,
                audience
            );

        const alwaysHtml =
            partition.always
                .map(function (item) {
                    return renderItemHtml(
                        item,
                        audience
                    );
                })
                .filter(Boolean)
                .join("");

        const clinicianCheckHtml =
            partition.clinicianCheck
                .map(function (item) {
                    return renderItemHtml(
                        item,
                        audience
                    );
                })
                .filter(Boolean)
                .join("");

        const renderedItemCount =
            partition.always.length +
            partition.clinicianCheck.length;

        if (renderedItemCount === 0) {
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

        const alwaysBlock =
            alwaysHtml
                ? `
<ul class="pap-cognitive-ux-list pap-cognitive-ux-list-always">
  ${alwaysHtml}
</ul>`
                : "";

        const clinicianCheckBlock =
            clinicianCheckHtml
                ? `
<div class="pap-cognitive-ux-clinician-check">
  <h4 class="pap-cognitive-ux-subsection-title">
    À vérifier selon la situation clinique
  </h4>

  <ul class="pap-cognitive-ux-list pap-cognitive-ux-list-clinician-check">
    ${clinicianCheckHtml}
  </ul>
</div>`
                : "";

        return `
<details
  class="${sectionClass}"
  ${sectionIdAttribute}
>
  <summary class="pap-cognitive-ux-section-summary">
    <span class="pap-cognitive-ux-section-title">
      ${title}
    </span>

    <span class="pap-cognitive-ux-section-count">
      ${renderedItemCount}
    </span>
  </summary>

  <div class="pap-cognitive-ux-section-content">
    ${alwaysBlock}
    ${clinicianCheckBlock}
  </div>
</details>`;
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
