(function () {
    "use strict";

    const CLINICAL_CONTEXT_COLLECTIONS = [
        "safety",
        "prescriptionGuidance",
        "patientInformation",
        "orientationFactors",
        "objectiveDiscussion"
    ];


    function extractClinicalUseSourceProjections(
        clinicalContextOrProjections
    ) {
        if (
            Array.isArray(
                clinicalContextOrProjections
            )
        ) {
            return [
                ...clinicalContextOrProjections
            ];
        }

        if (
            !clinicalContextOrProjections ||
            typeof clinicalContextOrProjections !==
                "object"
        ) {
            return [];
        }

        return CLINICAL_CONTEXT_COLLECTIONS
            .flatMap(function (
                collectionName
            ) {
                const collection =
                    clinicalContextOrProjections[
                        collectionName
                    ];

                return Array.isArray(
                    collection
                )
                    ? collection
                    : [];
            });
    }


    function projectClinicalUsesV2(
        clinicalContextOrProjections
    ) {
        const sourceProjections =
            extractClinicalUseSourceProjections(
                clinicalContextOrProjections
            );

        return sourceProjections.flatMap(
            function (sourceProjection) {
                if (
                    !sourceProjection ||
                    typeof sourceProjection !==
                        "object" ||
                    !Array.isArray(
                        sourceProjection.functionalUses
                    )
                ) {
                    return [];
                }

                return sourceProjection.functionalUses.map(
                    function (functionalUse) {
                        return {
                            knowledgeItemId:
                                sourceProjection.knowledgeItemId,

                            domainId:
                                functionalUse.domainId,

                            roleId:
                                functionalUse.roleId,

                            facets:
                                Array.isArray(
                                    functionalUse.facets
                                )
                                    ? [
                                        ...functionalUse.facets
                                    ]
                                    : [],

                            sourceProjection
                        };
                    }
                );
            }
        );
    }


    window.projectClinicalUsesV2 =
        projectClinicalUsesV2;
})();