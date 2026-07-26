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

    function getPathologyLabel(
        pathologyId
    ) {
        const labels = {
            hta: "HTA",
            dt2: "DT2",
            bpco: "BPCO"
        };

        return (
            labels[pathologyId] ||
            String(pathologyId || "")
                .toUpperCase()
        );
    }

    function normalizePathologyIds(
        values
    ) {
        if (!Array.isArray(values)) {
            return [];
        }

        return [
            ...new Set(
                values
                    .filter(function (value) {
                        return (
                            typeof value ===
                                "string" &&
                            value.trim() !== ""
                        );
                    })
                    .map(function (value) {
                        return value.trim();
                    })
            )
        ];
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

    function renderOriginBadgesHtml(
        item,
        activePathologies
    ) {
        const normalizedActivePathologies =
            normalizePathologyIds(
                activePathologies
            );

        if (
            normalizedActivePathologies.length <
            2
        ) {
            return "";
        }

        const itemPathologies =
            normalizePathologyIds(
                item
                    ?.matchedContext
                    ?.pathologiesAny
            );

        const relevantPathologies =
            itemPathologies.filter(
                function (pathologyId) {
                    return (
                        normalizedActivePathologies
                            .includes(
                                pathologyId
                            )
                    );
                }
            );

        if (
            relevantPathologies.length === 0
        ) {
            return "";
        }

        const badgesHtml =
            relevantPathologies
                .map(function (pathologyId) {
                    return `
<span
  class="pap-cognitive-ux-origin-badge"
  data-pathology-id="${escapeClinicalCognitiveUxHtml(
      pathologyId
  )}"
>
  ${escapeClinicalCognitiveUxHtml(
      getPathologyLabel(
          pathologyId
      )
  )}
</span>`;
                })
                .join("");

        return `
<span class="pap-cognitive-ux-origin-badges">
  ${badgesHtml}
</span>`;
    }

    function renderItemHtml(
        item,
        audience,
        options
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

        const originBadgesHtml =
            renderOriginBadgesHtml(
                item,
                options?.activePathologies
            );

        if (audience === "patient") {
            const patientSelectionById =
                options
                    ?.patientSelectionById || {};

            const hasSelectionOverride =
                Boolean(itemIdentity) &&
                Object.prototype.hasOwnProperty.call(
                    patientSelectionById,
                    itemIdentity
                );

            const isSelected =
                hasSelectionOverride
                    ? patientSelectionById[
                        itemIdentity
                    ] === true
                    : item
                        ?.selection
                        ?.defaultSelected === true;

            const checkedAttribute =
                isSelected
                    ? " checked"
                    : "";

            return `
<li class="pap-cognitive-ux-item pap-cognitive-ux-item-patient"${itemIdAttribute}>
  <label class="pap-cognitive-ux-patient-selection">
    <input
      type="checkbox"
      class="pap-cognitive-ux-patient-checkbox"
      data-knowledge-item-id="${escapeClinicalCognitiveUxHtml(
          itemIdentity
      )}"
      ${checkedAttribute}
    >

    <span class="pap-cognitive-ux-item-message">
      ${escapeClinicalCognitiveUxHtml(message)}
      ${originBadgesHtml}
    </span>
  </label>
</li>`;
        }

        return `
<li class="pap-cognitive-ux-item"${itemIdAttribute}>
  <span class="pap-cognitive-ux-item-message">
    ${escapeClinicalCognitiveUxHtml(message)}
  </span>
  ${originBadgesHtml}
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
        sectionClass,
        options
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
                        audience,
                        options
                    );
                })
                .filter(Boolean)
                .join("");

        const clinicianCheckHtml =
            partition.clinicianCheck
                .map(function (item) {
                    return renderItemHtml(
                        item,
                        audience,
                        options
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

        const openAttribute =
            options?.isQuickMode === true
                ? ""
                : " open";

        return `
<details
  class="${sectionClass}"
  ${sectionIdAttribute}${openAttribute}
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
        viewModel,
        options = {}
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
                        "pap-cognitive-ux-section pap-cognitive-ux-section-clinician",
                        options
                    );
                })
                .filter(Boolean)
                .join("");

        const patientHtml =
            renderSectionHtml(
                safeViewModel.patient,
                "patient",
                "pap-cognitive-ux-section pap-cognitive-ux-section-patient",
                options
            );

        const referenceHtml =
            renderSectionHtml(
                safeViewModel.reference,
                "clinician",
                "pap-cognitive-ux-section pap-cognitive-ux-section-reference",
                options
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
                                    "pap-cognitive-ux-section",
                                    options
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
