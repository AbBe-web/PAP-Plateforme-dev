(function () {
    "use strict";

    const ALLOWED_PRESENTATION_TARGETS = new Set([
        "prescription.general",
        "prescription.endurance",
        "prescription.strength",
        "prescription.otherActivity",
        "orientation",
        "patientInformation",
        "referenceOnly"
    ]);

    const CLINICAL_CONTEXT_COLLECTIONS = [
        "safety",
        "prescriptionGuidance",
        "patientInformation",
        "orientationFactors"
    ];

    function createEmptyProjection() {
        return {
            prescription: {
                general: [],
                endurance: [],
                strength: [],
                otherActivity: []
            },
            orientation: [],
            patientInformation: [],
            referenceOnly: [],
            unassigned: []
        };
    }

    function extractClinicalItems(clinicalContextOrItems) {
        if (Array.isArray(clinicalContextOrItems)) {
            return [...clinicalContextOrItems];
        }

        if (
            !clinicalContextOrItems ||
            typeof clinicalContextOrItems !== "object"
        ) {
            return [];
        }

        return CLINICAL_CONTEXT_COLLECTIONS.flatMap(function (collectionName) {
            const collection = clinicalContextOrItems[collectionName];

            return Array.isArray(collection)
                ? collection
                : [];
        });
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

    function addItemToTarget(projection, target, item) {
        switch (target) {
            case "prescription.general":
                projection.prescription.general.push(item);
                break;

            case "prescription.endurance":
                projection.prescription.endurance.push(item);
                break;

            case "prescription.strength":
                projection.prescription.strength.push(item);
                break;

            case "prescription.otherActivity":
                projection.prescription.otherActivity.push(item);
                break;

            case "orientation":
                projection.orientation.push(item);
                break;

            case "patientInformation":
                projection.patientInformation.push(item);
                break;

            case "referenceOnly":
                projection.referenceOnly.push(item);
                break;

            default:
                break;
        }
    }

    function projectClinicalCognitiveUx(clinicalContextOrItems) {
        const projection = createEmptyProjection();
        const items = extractClinicalItems(clinicalContextOrItems);

        const seenByTarget = new Set();
        const seenUnassigned = new Set();

        items.forEach(function (item, index) {
            if (!item || typeof item !== "object") {
                return;
            }

            if (
                item.metadata &&
                item.metadata.status === "deprecated"
            ) {
                return;
            }

            const itemIdentity =
                getItemIdentity(item) ||
                "anonymous-" + index;

            const targets = Array.isArray(item.presentationTargets)
                ? item.presentationTargets
                    .map(function (target) {
                        return String(target).trim();
                    })
                    .filter(Boolean)
                : [];

            if (targets.length === 0) {
                if (!seenUnassigned.has(itemIdentity)) {
                    seenUnassigned.add(itemIdentity);
                    projection.unassigned.push(item);
                }

                return;
            }

            let hasUnknownTarget = false;

            targets.forEach(function (target) {
                if (!ALLOWED_PRESENTATION_TARGETS.has(target)) {
                    hasUnknownTarget = true;
                    return;
                }

                const deduplicationKey =
                    target + "::" + itemIdentity;

                if (seenByTarget.has(deduplicationKey)) {
                    return;
                }

                seenByTarget.add(deduplicationKey);
                addItemToTarget(
                    projection,
                    target,
                    item
                );
            });

            if (
                hasUnknownTarget &&
                !seenUnassigned.has(itemIdentity)
            ) {
                seenUnassigned.add(itemIdentity);
                projection.unassigned.push(item);
            }
        });

        return projection;
    }

    window.createEmptyClinicalCognitiveUxProjection =
        createEmptyProjection;

    window.projectClinicalCognitiveUx =
        projectClinicalCognitiveUx;
})();