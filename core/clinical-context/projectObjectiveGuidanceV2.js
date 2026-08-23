(function () {
    "use strict";


    function createEmptyObjectiveGuidanceV2() {
        return {
            objectiveConsiderations: [],
            objectiveCandidates: [],
            goalSettingAdaptations: [],
            unmapped: []
        };
    }


    function projectObjectiveGuidanceV2(
        objectiveClinicalUses
    ) {
        const projection =
            createEmptyObjectiveGuidanceV2();

        if (
            !Array.isArray(
                objectiveClinicalUses
            )
        ) {
            return projection;
        }

        objectiveClinicalUses.forEach(
            function (clinicalUse) {
                if (
                    !clinicalUse ||
                    typeof clinicalUse !==
                        "object"
                ) {
                    return;
                }

                if (
                    clinicalUse.domainId !==
                    "objectives"
                ) {
                    projection.unmapped.push(
                        clinicalUse
                    );

                    return;
                }

                switch (
                    clinicalUse.roleId
                ) {
                    case "objectiveConsideration":
                        projection
                            .objectiveConsiderations
                            .push(clinicalUse);
                        break;

                    case "objectiveCandidate":
                        projection
                            .objectiveCandidates
                            .push(clinicalUse);
                        break;

                    case "goalSettingAdaptation":
                        projection
                            .goalSettingAdaptations
                            .push(clinicalUse);
                        break;

                    default:
                        projection.unmapped.push(
                            clinicalUse
                        );
                        break;
                }
            }
        );

        return projection;
    }


    window.createEmptyObjectiveGuidanceV2 =
        createEmptyObjectiveGuidanceV2;

    window.projectObjectiveGuidanceV2 =
        projectObjectiveGuidanceV2;
})();