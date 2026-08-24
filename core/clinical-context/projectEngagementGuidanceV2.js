(function () {
    "use strict";


    function createEmptyEngagementGuidanceV2() {
        return {
            determinantsToExplore: [],
            strategyConsiderations: [],
            unmapped: []
        };
    }


    function projectEngagementGuidanceV2(
        clinicalUses
    ) {
        const guidance =
            createEmptyEngagementGuidanceV2();

        if (!Array.isArray(clinicalUses)) {
            return guidance;
        }

        clinicalUses.forEach(
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
                    "engagement"
                ) {
                    guidance.unmapped.push(
                        clinicalUse
                    );

                    return;
                }

                switch (
                    clinicalUse.roleId
                ) {
                    case "determinantToExplore":
                        guidance
                            .determinantsToExplore
                            .push(
                                clinicalUse
                            );

                        break;

                    case "strategyConsideration":
                        guidance
                            .strategyConsiderations
                            .push(
                                clinicalUse
                            );

                        break;

                    default:
                        guidance.unmapped.push(
                            clinicalUse
                        );

                        break;
                }
            }
        );

        return guidance;
    }


    window.createEmptyEngagementGuidanceV2 =
        createEmptyEngagementGuidanceV2;

    window.projectEngagementGuidanceV2 =
        projectEngagementGuidanceV2;
})();