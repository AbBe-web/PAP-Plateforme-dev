(function () {
    "use strict";

    function normalizeStringArray(values) {
        if (!Array.isArray(values)) {
            return [];
        }

        return [
            ...new Set(
                values
                    .filter(function (value) {
                        return (
                            typeof value === "string" &&
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
        if (!item || typeof item !== "object") {
            return "";
        }

        return String(
            item.knowledgeItemId ||
            item.id ||
            ""
        ).trim();
    }

    function getClinicianMessage(item) {
        if (!item || typeof item !== "object") {
            return "";
        }

        return String(
            item.messages?.clinician || ""
        ).trim();
    }

    function getMatchedPathologyIds(item) {
        return normalizeStringArray(
            item
                ?.matchedContext
                ?.pathologiesAny
        );
    }

    function normalizeActivePathologies(
        activePathologies
    ) {
        return normalizeStringArray(
            activePathologies
        );
    }

    function createEmptyResult() {
        return {
            sections: [],
            itemIds: [],
            availablePathologyIds: []
        };
    }

    function buildClinicalCognitiveClinicianMessages(
        cognitiveUxViewModel,
        activePathologies
    ) {
        const result = createEmptyResult();

        const clinicianSections =
            Array.isArray(
                cognitiveUxViewModel?.clinician
            )
                ? cognitiveUxViewModel.clinician
                : [];

        const normalizedActivePathologies =
            normalizeActivePathologies(
                activePathologies
            );

        const activePathologySet =
            new Set(
                normalizedActivePathologies
            );

        const globalItemIds =
            new Set();

        const availablePathologyIds =
            new Set();

        result.sections =
            clinicianSections
                .map(function (section) {
                    const sectionId =
                        String(
                            section?.id || ""
                        ).trim();

                    const title =
                        String(
                            section?.title || ""
                        ).trim();

                    const sectionItems =
                        Array.isArray(
                            section?.items
                        )
                            ? section.items
                            : [];

                    const always = [];
                    const clinicianCheck = [];

                    const seenInSection =
                        new Set();

                    sectionItems.forEach(
                        function (item) {
                            const knowledgeItemId =
                                getItemIdentity(
                                    item
                                );

                            const message =
                                getClinicianMessage(
                                    item
                                );

                            if (
                                !knowledgeItemId ||
                                !message ||
                                seenInSection.has(
                                    knowledgeItemId
                                )
                            ) {
                                return;
                            }

                            const pathologyIds =
                                getMatchedPathologyIds(
                                    item
                                ).filter(
                                    function (
                                        pathologyId
                                    ) {
                                        return (
                                            activePathologySet
                                                .size ===
                                                0 ||
                                            activePathologySet
                                                .has(
                                                    pathologyId
                                                )
                                        );
                                    }
                                );

                            pathologyIds.forEach(
                                function (
                                    pathologyId
                                ) {
                                    availablePathologyIds
                                        .add(
                                            pathologyId
                                        );
                                }
                            );

                            const normalizedItem = {
                                knowledgeItemId,
                                message,
                                pathologyIds,
                                condition: {
                                    type:
                                        item
                                            ?.condition
                                            ?.type ||
                                        "always",
                                    description:
                                        String(
                                            item
                                                ?.condition
                                                ?.description ||
                                            ""
                                        ).trim(),
                                    machineEvaluable:
                                        item
                                            ?.condition
                                            ?.machineEvaluable ===
                                        true
                                }
                            };

                            seenInSection.add(
                                knowledgeItemId
                            );

                            globalItemIds.add(
                                knowledgeItemId
                            );

                            if (
                                normalizedItem
                                    .condition
                                    .type ===
                                "clinicianCheck"
                            ) {
                                clinicianCheck.push(
                                    normalizedItem
                                );

                                return;
                            }

                            always.push(
                                normalizedItem
                            );
                        }
                    );

                    return {
                        sectionId,
                        title,
                        always,
                        clinicianCheck
                    };
                })
                .filter(function (section) {
                    return (
                        section.always.length >
                            0 ||
                        section
                            .clinicianCheck
                            .length > 0
                    );
                });

        result.itemIds =
            [...globalItemIds];

        result.availablePathologyIds =
            normalizedActivePathologies.filter(
                function (pathologyId) {
                    return availablePathologyIds
                        .has(
                            pathologyId
                        );
                }
            );

        return result;
    }

    window
        .buildClinicalCognitiveClinicianMessages =
        buildClinicalCognitiveClinicianMessages;
})();
