"use strict";

const assert = require("assert");

global.window = global;

require(
    "../../core/clinical-context/buildSelectedClinicalCognitivePatientMessages.js"
);

const viewModel = {
    patient: {
        items: [
            {
                knowledgeItemId:
                    "hta-default-selected",

                matchedContext: {
                    pathologiesAny: [
                        "hta"
                    ]
                },

                selection: {
                    defaultSelected: true
                },

                messages: {
                    patient:
                        "Message HTA sélectionné par défaut"
                }
            },
            {
                knowledgeItemId:
                    "hta-default-unselected",

                matchedContext: {
                    pathologiesAny: [
                        "hta"
                    ]
                },

                selection: {
                    defaultSelected: false
                },

                messages: {
                    patient:
                        "Message HTA non sélectionné par défaut"
                }
            },
            {
                knowledgeItemId:
                    "shared-item",

                matchedContext: {
                    pathologiesAny: [
                        "hta",
                        "bpco"
                    ]
                },

                selection: {
                    defaultSelected: true
                },

                messages: {
                    patient:
                        "Message partagé"
                }
            },
            {
                knowledgeItemId:
                    "bpco-empty-message",

                matchedContext: {
                    pathologiesAny: [
                        "bpco"
                    ]
                },

                selection: {
                    defaultSelected: true
                },

                messages: {
                    patient: ""
                }
            }
        ]
    }
};

const defaultResult =
    window
        .buildSelectedClinicalCognitivePatientMessages(
            viewModel,
            {},
            [
                "hta",
                "bpco"
            ]
        );

assert.deepStrictEqual(
    defaultResult.availablePathologyIds,
    [
        "hta",
        "bpco"
    ],
    "Les pathologies disposant d’items patient v2 doivent être identifiées"
);

assert.deepStrictEqual(
    defaultResult.selectedItemIds,
    [
        "hta-default-selected",
        "shared-item"
    ],
    "Les valeurs defaultSelected doivent être appliquées en l’absence d’override"
);

assert.strictEqual(
    defaultResult.groups.length,
    1,
    "Les items sélectionnés doivent être regroupés sans duplication"
);

assert.strictEqual(
    defaultResult.groups[0].pathologyId,
    "hta",
    "Un item multi-pathologies doit être affecté à la première pathologie active"
);

assert.deepStrictEqual(
    defaultResult.groups[0].items.map(
        function (item) {
            return item.knowledgeItemId;
        }
    ),
    [
        "hta-default-selected",
        "shared-item"
    ]
);

const overriddenResult =
    window
        .buildSelectedClinicalCognitivePatientMessages(
            viewModel,
            {
                "hta-default-selected": false,
                "hta-default-unselected": true,
                "shared-item": false
            },
            [
                "hta",
                "bpco"
            ]
        );

assert.deepStrictEqual(
    overriddenResult.selectedItemIds,
    [
        "hta-default-unselected"
    ],
    "Les choix explicites du médecin doivent remplacer les valeurs par défaut"
);

assert.deepStrictEqual(
    overriddenResult.groups,
    [
        {
            pathologyId: "hta",
            items: [
                {
                    knowledgeItemId:
                        "hta-default-unselected",
                    message:
                        "Message HTA non sélectionné par défaut"
                }
            ]
        }
    ]
);

const reversedPathologyOrderResult =
    window
        .buildSelectedClinicalCognitivePatientMessages(
            viewModel,
            {
                "hta-default-selected": false,
                "hta-default-unselected": false,
                "shared-item": true
            },
            [
                "bpco",
                "hta"
            ]
        );

assert.strictEqual(
    reversedPathologyOrderResult
        .groups[0]
        .pathologyId,
    "bpco",
    "L’ordre des pathologies actives doit déterminer le groupe principal d’un item partagé"
);

const emptyResult =
    window
        .buildSelectedClinicalCognitivePatientMessages(
            null,
            null,
            null
        );

assert.deepStrictEqual(
    emptyResult,
    {
        groups: [],
        selectedItemIds: [],
        availablePathologyIds: []
    },
    "Une entrée absente doit produire un résultat vide stable"
);

console.log(
    JSON.stringify(
        {
            result: "PASS",
            verified: {
                defaultSelectionsApplied: true,
                physicianOverridesApplied: true,
                emptyMessagesIgnored: true,
                multiPathologyItemsDeduplicated: true,
                activePathologyOrderPreserved: true,
                availablePathologiesExposed: true,
                emptyInputHandled: true
            }
        },
        null,
        2
    )
);
