"use strict";

const assert = require("assert");

global.window = global;

require(
    "../../core/clinical-context/buildClinicalCognitiveUxViewModel.js"
);

const result =
    window.buildClinicalCognitiveUxViewModel({
        prescription: {
            general: [
                { knowledgeItemId: "general-1" }
            ],
            endurance: [
                { knowledgeItemId: "endurance-1" }
            ],
            strength: [
                { knowledgeItemId: "strength-1" }
            ],
            otherActivity: []
        },

        orientation: [
            { knowledgeItemId: "orientation-1" }
        ],

        orientationByArea: {
            rehabilitation: [
                {
                    knowledgeItemId:
                        "orientation-rehabilitation-1"
                }
            ],
            apa: [
                {
                    knowledgeItemId:
                        "orientation-apa-1"
                }
            ],
            ordinaryAP: [
                {
                    knowledgeItemId:
                        "orientation-ordinary-ap-1"
                }
            ]
        },

        patientInformation: [
            { knowledgeItemId: "patient-1" }
        ],

        referenceOnly: [
            { knowledgeItemId: "reference-1" }
        ],

        unassigned: [
            { knowledgeItemId: "unassigned-1" }
        ]
    });

assert.deepStrictEqual(
    result.clinician.map(function (section) {
        return {
            id: section.id,
            count: section.items.length
        };
    }),
    [
        { id: "general", count: 1 },
        { id: "endurance", count: 1 },
        { id: "strength", count: 1 },
        { id: "otherActivity", count: 0 },
        { id: "orientation", count: 1 },
        { id: "objectiveDiscussion", count: 0 }
    ]
);

assert.deepStrictEqual(
    result.orientationByArea
        .rehabilitation
        .items
        .map(function (item) {
            return item.knowledgeItemId;
        }),
    [
        "orientation-rehabilitation-1"
    ]
);

assert.deepStrictEqual(
    result.orientationByArea
        .apa
        .items
        .map(function (item) {
            return item.knowledgeItemId;
        }),
    [
        "orientation-apa-1"
    ]
);

assert.deepStrictEqual(
    result.orientationByArea
        .ordinaryAP
        .items
        .map(function (item) {
            return item.knowledgeItemId;
        }),
    [
        "orientation-ordinary-ap-1"
    ]
);

assert.strictEqual(
    result.patient.items.length,
    1
);

assert.strictEqual(
    result.reference.items.length,
    1
);

assert.strictEqual(
    result.unassigned.length,
    1
);

const emptyResult =
    window.buildClinicalCognitiveUxViewModel(
        null
    );

assert.strictEqual(
    emptyResult.clinician.length,
    6
);

assert(
    emptyResult.clinician.every(
        function (section) {
            return section.items.length === 0;
        }
    )
);

assert.strictEqual(
    emptyResult.orientationByArea
        .rehabilitation
        .items.length,
    0
);

assert.strictEqual(
    emptyResult.orientationByArea
        .apa
        .items.length,
    0
);

assert.strictEqual(
    emptyResult.orientationByArea
        .ordinaryAP
        .items.length,
    0
);

assert.strictEqual(
    emptyResult.patient.items.length,
    0
);

assert.strictEqual(
    emptyResult.reference.items.length,
    0
);

assert.strictEqual(
    emptyResult.unassigned.length,
    0
);

console.log(
    JSON.stringify(
        {
            result: "PASS",
            verified: {
                clinicianSections: true,
                patientSection: true,
                referenceSection: true,
                unassignedPreserved: true,
                emptyInputHandled: true
            }
        },
        null,
        2
    )
);
