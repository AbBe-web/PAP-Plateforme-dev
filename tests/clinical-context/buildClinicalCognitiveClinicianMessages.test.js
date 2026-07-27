const assert = require("assert");

global.window = global;

require(
    "../../core/clinical-context/buildClinicalCognitiveClinicianMessages.js"
);

const viewModel = {
    clinician: [
        {
            id: "general",
            title: "Repères généraux",
            items: [
                {
                    knowledgeItemId:
                        "hta-always-1",
                    messages: {
                        clinician:
                            "Message HTA toujours applicable"
                    },
                    condition: {
                        type: "always"
                    },
                    matchedContext: {
                        pathologiesAny: [
                            "hta"
                        ]
                    }
                },
                {
                    knowledgeItemId:
                        "hta-check-1",
                    messages: {
                        clinician:
                            "Message HTA à vérifier"
                    },
                    condition: {
                        type:
                            "clinicianCheck",
                        description:
                            "Condition clinique HTA",
                        machineEvaluable:
                            false
                    },
                    matchedContext: {
                        pathologiesAny: [
                            "hta"
                        ]
                    }
                },
                {
                    knowledgeItemId:
                        "empty-clinician-message",
                    messages: {
                        clinician: "",
                        patient:
                            "Message patient seulement"
                    },
                    condition: {
                        type: "always"
                    },
                    matchedContext: {
                        pathologiesAny: [
                            "hta"
                        ]
                    }
                }
            ]
        },
        {
            id: "endurance",
            title: "Endurance",
            items: [
                {
                    knowledgeItemId:
                        "shared-item-1",
                    messages: {
                        clinician:
                            "Message partagé HTA BPCO"
                    },
                    condition: {
                        type: "always"
                    },
                    matchedContext: {
                        pathologiesAny: [
                            "hta",
                            "bpco"
                        ]
                    }
                },
                {
                    knowledgeItemId:
                        "shared-item-1",
                    messages: {
                        clinician:
                            "Doublon à ignorer dans la section"
                    },
                    condition: {
                        type: "always"
                    },
                    matchedContext: {
                        pathologiesAny: [
                            "hta",
                            "bpco"
                        ]
                    }
                }
            ]
        },
        {
            id: "strength",
            title:
                "Renforcement musculaire",
            items: []
        }
    ]
};

const result =
    window
        .buildClinicalCognitiveClinicianMessages(
            viewModel,
            [
                "hta",
                "bpco"
            ]
        );

assert.deepStrictEqual(
    result.sections.map(
        function (section) {
            return section.sectionId;
        }
    ),
    [
        "general",
        "endurance"
    ],
    "Les sections vides doivent être exclues"
);

assert.deepStrictEqual(
    result.sections[0].always,
    [
        {
            knowledgeItemId:
                "hta-always-1",
            message:
                "Message HTA toujours applicable",
            pathologyIds: [
                "hta"
            ],
            condition: {
                type: "always",
                description: "",
                machineEvaluable: false
            }
        }
    ],
    "Les éléments always doivent rester séparés"
);

assert.deepStrictEqual(
    result.sections[0].clinicianCheck,
    [
        {
            knowledgeItemId:
                "hta-check-1",
            message:
                "Message HTA à vérifier",
            pathologyIds: [
                "hta"
            ],
            condition: {
                type: "clinicianCheck",
                description:
                    "Condition clinique HTA",
                machineEvaluable: false
            }
        }
    ],
    "Les éléments clinicianCheck ne doivent pas être affirmés automatiquement"
);

assert.strictEqual(
    result.sections[1].always.length,
    1,
    "Un doublon dans une même section doit être supprimé"
);

assert.deepStrictEqual(
    result.itemIds,
    [
        "hta-always-1",
        "hta-check-1",
        "shared-item-1"
    ],
    "Les identifiants globaux doivent être dédupliqués"
);

assert.deepStrictEqual(
    result.availablePathologyIds,
    [
        "hta",
        "bpco"
    ],
    "L’ordre des pathologies actives doit être conservé"
);

const htaOnlyResult =
    window
        .buildClinicalCognitiveClinicianMessages(
            viewModel,
            [
                "hta"
            ]
        );

assert.deepStrictEqual(
    htaOnlyResult
        .availablePathologyIds,
    [
        "hta"
    ],
    "Une pathologie inactive ne doit pas être exposée"
);

assert.deepStrictEqual(
    htaOnlyResult
        .sections[1]
        .always[0]
        .pathologyIds,
    [
        "hta"
    ],
    "Les origines doivent être limitées aux pathologies actives"
);

const emptyResult =
    window
        .buildClinicalCognitiveClinicianMessages(
            null,
            null
        );

assert.deepStrictEqual(
    emptyResult,
    {
        sections: [],
        itemIds: [],
        availablePathologyIds: []
    },
    "Une entrée vide doit produire un résultat vide stable"
);

console.log(
    JSON.stringify(
        {
            result: "PASS",
            verified: {
                clinicianSectionsPreserved:
                    true,
                alwaysSeparated:
                    true,
                clinicianChecksSeparated:
                    true,
                emptyMessagesIgnored:
                    true,
                sectionDuplicatesRemoved:
                    true,
                itemIdsDeduplicated:
                    true,
                activePathologyOrderPreserved:
                    true,
                emptyInputHandled:
                    true
            }
        },
        null,
        2
    )
);
