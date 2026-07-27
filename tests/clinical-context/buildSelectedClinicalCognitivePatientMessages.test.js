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

const noSelectedMessageResult =
    window
        .buildSelectedClinicalCognitivePatientMessages(
            viewModel,
            {
                "hta-default-selected": false,
                "hta-default-unselected": false,
                "shared-item": false
            },
            [
                "hta",
                "bpco"
            ]
        );

assert.deepStrictEqual(
    noSelectedMessageResult.groups,
    [],
    "Toutes les cases décochées doivent produire zéro message patient"
);

assert.deepStrictEqual(
    noSelectedMessageResult.selectedItemIds,
    [],
    "Toutes les cases décochées doivent produire zéro knowledgeItemId sélectionné"
);

assert.deepStrictEqual(
    noSelectedMessageResult.availablePathologyIds,
    [
        "hta",
        "bpco"
    ],
    "La couverture v2 doit rester déclarée même lorsque toutes les cases sont décochées"
);


const pathologyRemovedResult =
    window
        .buildSelectedClinicalCognitivePatientMessages(
            viewModel,
            {
                "hta-default-selected": false,
                "hta-default-unselected": true,
                "shared-item": false
            },
            [
                "bpco"
            ]
        );

assert.deepStrictEqual(
    pathologyRemovedResult.groups,
    [],
    "Une pathologie inactive ne doit produire aucun message"
);

assert.deepStrictEqual(
    pathologyRemovedResult.availablePathologyIds,
    [
        "bpco"
    ],
    "Seules les pathologies actives couvertes par v2 doivent être exposées"
);


const pathologyReaddedResult =
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
    pathologyReaddedResult.selectedItemIds,
    [
        "hta-default-unselected"
    ],
    "Le retrait puis réajout d’une pathologie dans la même consultation doit conserver les choix explicites"
);

assert.deepStrictEqual(
    pathologyReaddedResult.groups,
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
                emptySelectionPreservesV2Coverage: true,
                inactivePathologiesExcluded: true,
                pathologyReadditionPreservesOverrides: true,
                emptyInputHandled: true
            }
        },
        null,
        2
    )
);
