(function () {
    "use strict";


    const OBJECTIVE_GUIDANCE_SECTION_DEFINITIONS = [
        {
            sourceKey:
                "objectiveConsiderations",
            id:
                "objectiveConsiderations",
            title:
                "À prendre en compte"
        },
        {
            sourceKey:
                "objectiveCandidates",
            id:
                "objectiveCandidates",
            title:
                "Cible possible à discuter"
        },
        {
            sourceKey:
                "goalSettingAdaptations",
            id:
                "goalSettingAdaptations",
            title:
                "Pour adapter l’objectif"
        }
    ];


    function createEmptyObjectiveGuidanceViewModelV2() {
        return {
            sections: [],
            diagnostics: {
                unmappedCount: 0
            }
        };
    }


    function buildObjectiveGuidanceViewModelV2(
        objectiveGuidance
    ) {
        const viewModel =
            createEmptyObjectiveGuidanceViewModelV2();

        if (
            !objectiveGuidance ||
            typeof objectiveGuidance !==
                "object"
        ) {
            return viewModel;
        }

        viewModel.diagnostics.unmappedCount =
            Array.isArray(
                objectiveGuidance.unmapped
            )
                ? objectiveGuidance.unmapped.length
                : 0;

        OBJECTIVE_GUIDANCE_SECTION_DEFINITIONS
            .forEach(
                function (definition) {
                    const sourceItems =
                        Array.isArray(
                            objectiveGuidance[
                                definition.sourceKey
                            ]
                        )
                            ? objectiveGuidance[
                                definition.sourceKey
                            ]
                            : [];

                    const items =
                        sourceItems
                            .map(
                                function (clinicalUse) {
                                    const sourceProjection =
                                        clinicalUse
                                            ?.sourceProjection;

                                    const message =
                                        sourceProjection
                                            ?.messages
                                            ?.clinician;

                                    if (
                                        typeof message !==
                                            "string" ||
                                        !message.trim()
                                    ) {
                                        return null;
                                    }

                                    const knowledgeItemId =
                                        clinicalUse
                                            .knowledgeItemId ||
                                        "";

                                    const pathologyIds =
                                        Array.isArray(
                                            sourceProjection
                                                ?.matchedContext
                                                ?.pathologiesAny
                                        )
                                            ? [
                                                ...new Set(
                                                    sourceProjection
                                                        .matchedContext
                                                        .pathologiesAny
                                                        .map(
                                                            function (
                                                                pathologyId
                                                            ) {
                                                                return String(
                                                                    pathologyId ||
                                                                    ""
                                                                ).trim();
                                                            }
                                                        )
                                                        .filter(Boolean)
                                                )
                                            ]
                                            : [];

                                    const registry =
                                        typeof sourceProjection
                                            ?.provenance
                                            ?.registry ===
                                            "string"
                                            ? sourceProjection
                                                .provenance
                                                .registry
                                                .trim()
                                            : "";

                                    return {
                                        knowledgeItemId,

                                        semanticConceptId:
                                            sourceProjection
                                                ?.semanticConceptId ||
                                            null,

                                        message,

                                        sources: [
                                            {
                                                knowledgeItemId,
                                                pathologyIds,
                                                registry
                                            }
                                        ]
                                    };
                                }
                            )
                            .filter(Boolean);

                    if (items.length === 0) {
                        return;
                    }

                    viewModel.sections.push({
                        id:
                            definition.id,

                        title:
                            definition.title,

                        items
                    });
                }
            );

        return viewModel;
    }


    function escapeObjectiveGuidanceHtml(
        value
    ) {
        const sharedEscape =
            window
                .escapeClinicalCognitiveUxHtml;

        if (
            typeof sharedEscape ===
            "function"
        ) {
            return sharedEscape(value);
        }

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    function renderObjectiveGuidanceMessageHtml(
        message
    ) {
        const sharedRenderer =
            window
                .renderClinicalCognitiveMessageHtml;

        if (
            typeof sharedRenderer ===
            "function"
        ) {
            return sharedRenderer(message);
        }

        return escapeObjectiveGuidanceHtml(
            message
        );
    }


    function getObjectiveGuidancePathologyIdsV2(
        item
    ) {
        const sources =
            Array.isArray(
                item?.sources
            )
                ? item.sources
                : [];

        return [
            ...new Set(
                sources
                    .flatMap(
                        function (source) {
                            return Array.isArray(
                                source?.pathologyIds
                            )
                                ? source.pathologyIds
                                : [];
                        }
                    )
                    .map(
                        function (pathologyId) {
                            return String(
                                pathologyId || ""
                            ).trim();
                        }
                    )
                    .filter(Boolean)
            )
        ];
    }


    function renderObjectiveGuidanceOriginBadgesHtmlV2(
        item
    ) {
        const pathologyIds =
            getObjectiveGuidancePathologyIdsV2(
                item
            );

        if (
            pathologyIds.length === 0
        ) {
            return "";
        }

        const sharedRenderer =
            window
                .renderClinicalCognitiveOriginBadgesHtml;

        if (
            typeof sharedRenderer !==
            "function"
        ) {
            return "";
        }

        return sharedRenderer(
            pathologyIds
        );
    }


    function renderObjectiveGuidanceHtmlV2(
        viewModel
    ) {
        if (
            !viewModel ||
            !Array.isArray(
                viewModel.sections
            ) ||
            viewModel.sections.length === 0
        ) {
            return "";
        }

        const sectionsHtml =
            viewModel.sections
                .map(
                    function (section) {
                        const items =
                            Array.isArray(
                                section.items
                            )
                                ? section.items
                                : [];

                        if (items.length === 0) {
                            return "";
                        }

                        const itemsHtml =
                            items
                                .map(
                                    function (item) {
                                        const itemId =
                                            escapeObjectiveGuidanceHtml(
                                                item
                                                    .knowledgeItemId ||
                                                ""
                                            );

                                        const messageHtml =
                                            renderObjectiveGuidanceMessageHtml(
                                                item.message
                                            );

                                        const originBadgesHtml =
                                            renderObjectiveGuidanceOriginBadgesHtmlV2(
                                                item
                                            );

                                        return `
<li
  class="pap-objective-guidance-item"
  data-knowledge-item-id="${itemId}"
>
  ${messageHtml}
  ${originBadgesHtml}
</li>`;
                                    }
                                )
                                .join("");

                        return `
<div
  class="pap-objective-guidance-section"
  data-objective-guidance-section="${escapeObjectiveGuidanceHtml(
      section.id || ""
  )}"
>
  <div
    class="pap-objective-guidance-section-title"
    style="
      font-weight:600;
      margin-bottom:4px;
    "
  >
    ${escapeObjectiveGuidanceHtml(
        section.title || ""
    )}
  </div>

  <ul
    class="pap-objective-guidance-list"
    style="
      margin:0 0 8px 18px;
      padding:0;
    "
  >
    ${itemsHtml}
  </ul>
</div>`;
                    }
                )
                .filter(Boolean)
                .join("");

        if (!sectionsHtml) {
            return "";
        }

        return `
<div
  class="pap-objective-guidance"
  style="
    margin-top:8px;
    margin-bottom:12px;
    padding:10px 12px;
    border:1px solid #d9e4f2;
    border-radius:8px;
    background:#f8fbff;
    font-size:0.92rem;
    line-height:1.45;
  "
>
  <div
    style="
      font-weight:600;
      color:#0056b3;
      margin-bottom:6px;
    "
  >
    Aide à la définition des objectifs
  </div>

  ${sectionsHtml}
</div>`;
    }



    function renderObjectiveGuidanceLocalSectionHtmlV2(
        section
    ) {
        if (
            !section ||
            typeof section !==
                "object" ||
            !Array.isArray(
                section.items
            ) ||
            section.items.length === 0
        ) {
            return "";
        }

        const itemsHtml =
            section.items
                .map(
                    function (item) {
                        const knowledgeItemId =
                            escapeObjectiveGuidanceHtml(
                                item
                                    ?.knowledgeItemId ||
                                ""
                            );

                        const message =
                            item?.message;

                        if (
                            typeof message !==
                                "string" ||
                            !message.trim()
                        ) {
                            return "";
                        }

                        const originBadgesHtml =
                            renderObjectiveGuidanceOriginBadgesHtmlV2(
                                item
                            );

                        return `
<li
  class="pap-objective-guidance-local-item"
  data-knowledge-item-id="${knowledgeItemId}"
>
  ${renderObjectiveGuidanceMessageHtml(
      message
  )}
  ${originBadgesHtml}
</li>`;
                    }
                )
                .filter(Boolean)
                .join("");

        if (!itemsHtml) {
            return "";
        }

        return `
<div
  class="pap-objective-guidance-local"
  data-objective-guidance-section="${escapeObjectiveGuidanceHtml(
      section.id || ""
  )}"
  style="
    margin:4px 0 10px 0;
    font-size:0.9rem;
    line-height:1.4;
  "
>
  <div
    class="pap-objective-guidance-local-title"
    style="
      font-weight:600;
      margin-bottom:3px;
    "
  >
    ${escapeObjectiveGuidanceHtml(
        section.title || ""
    )}
  </div>

  <ul
    class="pap-objective-guidance-local-list"
    style="
      margin:0 0 0 18px;
      padding:0;
    "
  >
    ${itemsHtml}
  </ul>
</div>`;
    }


    function renderObjectiveGuidanceLocalSectionsByIdV2(
        viewModel
    ) {
        const result = {};

        if (
            !viewModel ||
            !Array.isArray(
                viewModel.sections
            )
        ) {
            return result;
        }

        viewModel.sections.forEach(
            function (section) {
                const sectionId =
                    typeof section?.id ===
                        "string"
                        ? section.id.trim()
                        : "";

                if (!sectionId) {
                    return;
                }

                const html =
                    renderObjectiveGuidanceLocalSectionHtmlV2(
                        section
                    );

                if (html) {
                    result[sectionId] =
                        html;
                }
            }
        );

        return result;
    }

    window.OBJECTIVE_GUIDANCE_SECTION_DEFINITIONS =
        OBJECTIVE_GUIDANCE_SECTION_DEFINITIONS;

    window.createEmptyObjectiveGuidanceViewModelV2 =
        createEmptyObjectiveGuidanceViewModelV2;

    window.buildObjectiveGuidanceViewModelV2 =
        buildObjectiveGuidanceViewModelV2;

    window.renderObjectiveGuidanceHtmlV2 =
        renderObjectiveGuidanceHtmlV2;

    window.renderObjectiveGuidanceLocalSectionsByIdV2 =
        renderObjectiveGuidanceLocalSectionsByIdV2;
})();