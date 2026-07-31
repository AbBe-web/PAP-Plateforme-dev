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

        return escapeClinicalCognitiveUxHtml(
            value
        );
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
            options?.hideOriginBadges === true
                ? ""
                : renderOriginBadgesHtml(
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
      ${renderClinicalMessageHtml(message)}
      ${originBadgesHtml}
    </span>
  </label>
</li>`;
        }

        return `
<li class="pap-cognitive-ux-item"${itemIdAttribute}>
  <span class="pap-cognitive-ux-item-message">
    ${renderClinicalMessageHtml(message)}
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

    function renderPatientSelectionModeHtml(
        items,
        options
    ) {
        const patientItems =
            Array.isArray(items)
                ? items.filter(function (item) {
                    return Boolean(
                        getItemMessage(
                            item,
                            "patient"
                        )
                    );
                })
                : [];

        if (patientItems.length === 0) {
            return "";
        }

        const patientSelectionById =
            options?.patientSelectionById || {};

        const selectedCount =
            patientItems.reduce(
                function (total, item) {
                    const itemIdentity =
                        getItemIdentity(item);

                    if (!itemIdentity) {
                        return total;
                    }

                    const hasSelectionOverride =
                        Object.prototype
                            .hasOwnProperty
                            .call(
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
                                ?.defaultSelected ===
                                true;

                    return total +
                        (isSelected ? 1 : 0);
                },
                0
            );

        const selectionMode =
            selectedCount === 0
                ? "none"
                : selectedCount ===
                    patientItems.length
                    ? "all"
                    : "some";

        return `
<div
  class="pap-cognitive-ux-patient-selection-mode"
  style="
    display:flex;
    align-items:center;
    gap:10px;
    flex-wrap:wrap;
    margin:2px 0 8px;
    font-size:0.9rem;
  "
>
  <strong style="margin-right:2px;">
    Sélection des messages patient
  </strong>

  <label style="margin:0;">
    <input
      type="radio"
      class="pap-cognitive-ux-patient-selection-mode-input"
      name="clinical_cognitive_patient_selection_mode"
      value="all"
      ${selectionMode === "all" ? "checked" : ""}
    >
    Tous
  </label>

  <label style="margin:0;">
    <input
      type="radio"
      class="pap-cognitive-ux-patient-selection-mode-input"
      name="clinical_cognitive_patient_selection_mode"
      value="some"
      ${selectionMode === "some" ? "checked" : ""}
    >
    Certains
  </label>

  <label style="margin:0;">
    <input
      type="radio"
      class="pap-cognitive-ux-patient-selection-mode-input"
      name="clinical_cognitive_patient_selection_mode"
      value="none"
      ${selectionMode === "none" ? "checked" : ""}
    >
    Aucun
  </label>
</div>

<div
  class="pap-cognitive-ux-patient-document-destination"
  style="
    display:flex;
    align-items:center;
    gap:10px;
    flex-wrap:wrap;
    margin:2px 0 10px;
    font-size:0.9rem;
  "
>
  <strong style="margin-right:2px;">
    Destination des messages sélectionnés
  </strong>

  <label style="margin:0;">
    <input
      type="radio"
      class="pap-cognitive-ux-patient-document-destination-input"
      name="clinical_cognitive_patient_document_destination"
      value="allReportsAndPatient"
      ${
          options?.patientDocumentDestination ===
          "patientOnly"
              ? ""
              : "checked"
      }
    >
    Comptes rendus et version patient
  </label>

  <label style="margin:0;">
    <input
      type="radio"
      class="pap-cognitive-ux-patient-document-destination-input"
      name="clinical_cognitive_patient_document_destination"
      value="patientOnly"
      ${
          options?.patientDocumentDestination ===
          "patientOnly"
              ? "checked"
              : ""
      }
    >
    Version patient uniquement
  </label>
</div>`;
    }

    function getRelevantItemPathologyIds(
        item,
        activePathologies
    ) {
        const normalizedActivePathologies =
            normalizePathologyIds(
                activePathologies
            );

        const itemPathologies =
            normalizePathologyIds(
                item
                    ?.matchedContext
                    ?.pathologiesAny
            );

        return normalizedActivePathologies
            .filter(function (pathologyId) {
                return itemPathologies
                    .includes(pathologyId);
            });
    }

    function createPatientPathologyGroups(
        items,
        activePathologies
    ) {
        const normalizedActivePathologies =
            normalizePathologyIds(
                activePathologies
            );

        const groupsById =
            new Map();

        normalizedActivePathologies
            .forEach(function (pathologyId) {
                groupsById.set(
                    pathologyId,
                    {
                        id: pathologyId,
                        title:
                            getPathologyLabel(
                                pathologyId
                            ),
                        isShared: false,
                        always: [],
                        clinicianCheck: []
                    }
                );
            });

        const sharedGroup = {
            id: "shared",
            title:
                "Messages communs à plusieurs pathologies",
            isShared: true,
            always: [],
            clinicianCheck: []
        };

        const unassignedGroup = {
            id: "other",
            title: "Autres messages",
            isShared: false,
            always: [],
            clinicianCheck: []
        };

        items.forEach(function (item) {
            const relevantPathologyIds =
                getRelevantItemPathologyIds(
                    item,
                    normalizedActivePathologies
                );

            const targetCollection =
                item?.condition?.type ===
                "clinicianCheck"
                    ? "clinicianCheck"
                    : "always";

            if (
                relevantPathologyIds.length >
                1
            ) {
                sharedGroup[
                    targetCollection
                ].push(item);

                return;
            }

            if (
                relevantPathologyIds.length ===
                1
            ) {
                const pathologyGroup =
                    groupsById.get(
                        relevantPathologyIds[0]
                    );

                if (pathologyGroup) {
                    pathologyGroup[
                        targetCollection
                    ].push(item);

                    return;
                }
            }

            unassignedGroup[
                targetCollection
            ].push(item);
        });

        const orderedGroups =
            normalizedActivePathologies
                .map(function (pathologyId) {
                    return groupsById.get(
                        pathologyId
                    );
                })
                .filter(function (group) {
                    return Boolean(
                        group &&
                        (
                            group.always.length ||
                            group
                                .clinicianCheck
                                .length
                        )
                    );
                });

        if (
            sharedGroup.always.length ||
            sharedGroup
                .clinicianCheck
                .length
        ) {
            orderedGroups.push(
                sharedGroup
            );
        }

        if (
            unassignedGroup.always.length ||
            unassignedGroup
                .clinicianCheck
                .length
        ) {
            orderedGroups.push(
                unassignedGroup
            );
        }

        return orderedGroups;
    }

    function renderPatientPathologyGroupHtml(
        group,
        options
    ) {
        if (
            !group ||
            typeof group !== "object"
        ) {
            return "";
        }

        const groupOptions = {
            ...options,
            hideOriginBadges:
                group.isShared !== true
        };

        const alwaysHtml =
            group.always
                .map(function (item) {
                    return renderItemHtml(
                        item,
                        "patient",
                        groupOptions
                    );
                })
                .filter(Boolean)
                .join("");

        const clinicianCheckHtml =
            group.clinicianCheck
                .map(function (item) {
                    return renderItemHtml(
                        item,
                        "patient",
                        groupOptions
                    );
                })
                .filter(Boolean)
                .join("");

        if (
            !alwaysHtml &&
            !clinicianCheckHtml
        ) {
            return "";
        }

        const groupId =
            escapeClinicalCognitiveUxHtml(
                group.id || ""
            );

        const groupTitle =
            escapeClinicalCognitiveUxHtml(
                group.title || ""
            );

        const alwaysBlock =
            alwaysHtml
                ? `
<ul
  class="pap-cognitive-ux-list pap-cognitive-ux-list-always"
  style="
     margin:0;
     padding:0 0 0 4px;
     list-style:none;
     "
>
  ${alwaysHtml}
</ul>`
                : "";

        const clinicianCheckBlock =
            clinicianCheckHtml
                ? `
<div
  class="pap-cognitive-ux-clinician-check pap-cognitive-ux-patient-clinician-check"
  style="
    margin-top:10px;
    padding-top:9px;
    border-top:1px solid #b8d5e5;
  "
>
  <h4 class="pap-cognitive-ux-subsection-title">
    À vérifier selon la situation clinique
  </h4>

  <ul
    class="pap-cognitive-ux-list pap-cognitive-ux-list-clinician-check"
    style="
      margin:0;
      padding:0;
      list-style:none;
    "
  >
    ${clinicianCheckHtml}
  </ul>
</div>`
                : "";

        return `
<section
  class="pap-cognitive-ux-patient-pathology-group"
  data-patient-pathology-group="${groupId}"
  style="
    margin-top:12px;
  "
>
  <h4
    class="pap-cognitive-ux-patient-pathology-title"
    style="
      margin:0;
      font-size:0.95rem;
      font-weight:700;
    "
  >
    ${groupTitle}
  </h4>

  ${alwaysBlock}
  ${clinicianCheckBlock}
</section>`;
    }

    function renderPatientGroupedContentHtml(
        items,
        options
    ) {
        const patientItems =
            items.filter(function (item) {
                return Boolean(
                    getItemMessage(
                        item,
                        "patient"
                    )
                );
            });

        const groups =
            createPatientPathologyGroups(
                patientItems,
                options?.activePathologies
            );

        return groups
            .map(function (group) {
                return renderPatientPathologyGroupHtml(
                    group,
                    options
                );
            })
            .filter(Boolean)
            .join("");
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

        const shouldRenderClinicianChecks =
            audience !== "clinician" ||
            options
                ?.showAllClinicalSituations !==
                false;

        const visibleClinicianCheckItems =
            shouldRenderClinicianChecks
                ? partition.clinicianCheck
                : [];

        const renderedItemCount =
            partition.always.length +
            visibleClinicianCheckItems.length;

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

        let sectionBodyHtml = "";

        if (audience === "patient") {
            sectionBodyHtml = `
${renderPatientSelectionModeHtml(
    items,
    options
)}
${renderPatientGroupedContentHtml(
    items,
    options
)}`;
        } else {
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
                visibleClinicianCheckItems
                    .map(function (item) {
                        return renderItemHtml(
                            item,
                            audience,
                            options
                        );
                    })
                    .filter(Boolean)
                    .join("");

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

            sectionBodyHtml = `
${alwaysBlock}
${clinicianCheckBlock}`;
        }

        const openAttribute =
            options?.isQuickMode === true
                ? ""
                : " open";

        const sectionToggleLabel =
            audience === "patient"
                ? `
    <span
      class="pap-cognitive-ux-section-toggle-label"
      aria-hidden="true"
    >
      <span class="pap-cognitive-ux-section-toggle-open">
        ▸ Compléter
      </span>

      <span class="pap-cognitive-ux-section-toggle-close">
        ▾ Masquer
      </span>
    </span>`
                : "";

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

    ${sectionToggleLabel}
  </summary>

  <div class="pap-cognitive-ux-section-content">
    ${sectionBodyHtml}
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

        const clinicianSectionHtmlById = {};

        const clinicianHtml =
            clinicianSections
                .map(function (section) {
                    const sectionHtml =
                        renderSectionHtml(
                            section,
                            "clinician",
                            "pap-cognitive-ux-section pap-cognitive-ux-section-clinician",
                            options
                        );

                    const sectionId =
                        String(
                            section?.id || ""
                        ).trim();

                    if (
                        sectionId &&
                        sectionHtml
                    ) {
                        clinicianSectionHtmlById[
                            sectionId
                        ] = sectionHtml;
                    }

                    return sectionHtml;
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
            clinicianSectionHtmlById,
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
