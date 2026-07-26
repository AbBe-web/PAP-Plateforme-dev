(function () {
    "use strict";

    function normalizeIds(values) {
        return Array.from(
            new Set(
                (Array.isArray(values)
                    ? values
                    : []
                )
                    .map(function (value) {
                        return String(
                            value || ""
                        ).trim();
                    })
                    .filter(Boolean)
            )
        );
    }

    function getKnowledgeItemId(item) {
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

    function getPatientMessage(item) {
        if (
            !item ||
            typeof item !== "object"
        ) {
            return "";
        }

        return String(
            item.messages?.patient || ""
        ).trim();
    }

    function isPatientItemSelected(
        item,
        selectionById
    ) {
        const knowledgeItemId =
            getKnowledgeItemId(item);

        if (!knowledgeItemId) {
            return false;
        }

        const normalizedSelectionById =
            selectionById &&
            typeof selectionById === "object"
                ? selectionById
                : {};

        if (
            Object.prototype.hasOwnProperty.call(
                normalizedSelectionById,
                knowledgeItemId
            )
        ) {
            return (
                normalizedSelectionById[
                    knowledgeItemId
                ] === true
            );
        }

        return (
            item
                ?.selection
                ?.defaultSelected === true
        );
    }

    function getItemActivePathologyIds(
        item,
        activePathologyIds
    ) {
        const activeIds =
            normalizeIds(
                activePathologyIds
            );

        const matchedPathologyIds =
            normalizeIds(
                item
                    ?.matchedContext
                    ?.pathologiesAny
            );

        return activeIds.filter(
            function (pathologyId) {
                return matchedPathologyIds
                    .includes(pathologyId);
            }
        );
    }

    function buildSelectedClinicalCognitivePatientMessages(
        cognitiveUxViewModel,
        selectionById,
        activePathologyIds
    ) {
        const patientItems =
            Array.isArray(
                cognitiveUxViewModel
                    ?.patient
                    ?.items
            )
                ? cognitiveUxViewModel.patient.items
                : [];

        const normalizedActivePathologyIds =
            normalizeIds(
                activePathologyIds
            );

        const availablePathologyIds =
            normalizeIds(
                patientItems.flatMap(
                    function (item) {
                        return getItemActivePathologyIds(
                            item,
                            normalizedActivePathologyIds
                        );
                    }
                )
            );

        const groupsByPathologyId =
            new Map();

        const selectedItemIds =
            [];

        patientItems.forEach(
            function (item) {
                const knowledgeItemId =
                    getKnowledgeItemId(item);

                const message =
                    getPatientMessage(item);

                if (
                    !knowledgeItemId ||
                    !message ||
                    !isPatientItemSelected(
                        item,
                        selectionById
                    )
                ) {
                    return;
                }

                const itemPathologyIds =
                    getItemActivePathologyIds(
                        item,
                        normalizedActivePathologyIds
                    );

                const primaryPathologyId =
                    itemPathologyIds[0] || "";

                if (!primaryPathologyId) {
                    return;
                }

                if (
                    !groupsByPathologyId.has(
                        primaryPathologyId
                    )
                ) {
                    groupsByPathologyId.set(
                        primaryPathologyId,
                        []
                    );
                }

                groupsByPathologyId
                    .get(primaryPathologyId)
                    .push({
                        knowledgeItemId,
                        message
                    });

                selectedItemIds.push(
                    knowledgeItemId
                );
            }
        );

        const groups =
            normalizedActivePathologyIds
                .filter(function (pathologyId) {
                    return groupsByPathologyId
                        .has(pathologyId);
                })
                .map(function (pathologyId) {
                    return {
                        pathologyId,
                        items: groupsByPathologyId
                            .get(pathologyId)
                    };
                });

        return {
            groups,
            selectedItemIds:
                normalizeIds(
                    selectedItemIds
                ),
            availablePathologyIds
        };
    }

    window
        .buildSelectedClinicalCognitivePatientMessages =
        buildSelectedClinicalCognitivePatientMessages;
})();
