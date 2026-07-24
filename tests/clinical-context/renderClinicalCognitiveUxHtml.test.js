"use strict";

const assert = require("assert");

global.window = global;

require(
    "../../core/clinical-context/renderClinicalCognitiveUxHtml.js"
);

const viewModel = {
    clinician: [
        {
            id: "general",
            title: "Repères généraux",
            items: [
                {
                    knowledgeItemId: "general-1",
                    messages: {
                        clinician:
                            "Conseil général <test>",
                        patient: ""
                    }
                }
            ]
        },
        {
            id: "endurance",
            title: "Endurance",
            items: []
        },
        {
            id: "strength",
            title:
                "Renforcement musculaire",
            items: [
                {
                    knowledgeItemId:
                        "strength-1",
                    messages: {
                        clinician:
                            "Renforcement modéré",
                        patient: ""
                    }
                }
            ]
        },
        {
            id: "otherActivity",
            title: "Autres activités",
            items: [
                {
                    knowledgeItemId:
                        "empty-clinician-message",
                    messages: {
                        clinician: "",
                        patient:
                            "Message non destiné ici"
                    }
                }
            ]
        },
        {
            id: "orientation",
            title:
                "Orientation et encadrement",
            items: [
                {
                    knowledgeItemId:
                        "orientation-1",

                    condition: {
                        type: "clinicianCheck"
                    },

                    messages: {
                        clinician:
                            "Encadrement à envisager",
                        patient: ""
                    }
                }
            ]
        }
    ],

    patient: {
        id: "patientInformation",
        title:
            "Informations à transmettre",
        items: [
            {
                knowledgeItemId:
                    "patient-1",
                messages: {
                    clinician: "",
                    patient:
                        "Informer le patient & vérifier"
                }
            },
            {
                knowledgeItemId:
                    "empty-patient-message",
                messages: {
                    clinician:
                        "Message non destiné au patient",
                    patient: ""
                }
            }
        ]
    },

    reference: {
        id: "referenceOnly",
        title: "Référence détaillée",
        items: [
            {
                knowledgeItemId:
                    "reference-1",
                messages: {
                    clinician:
                        "Référence \"détaillée\"",
                    patient: ""
                }
            }
        ]
    },

    unassigned: [
        {
            knowledgeItemId:
                "unassigned-1"
        },
        {
            knowledgeItemId:
                "unassigned-2"
        }
    ]
};

const result =
    window.renderClinicalCognitiveUxHtml(
        viewModel
    );

assert(
    result.clinicianHtml.includes(
        'data-section-id="general"'
    )
);

assert(
    result.clinicianHtml.includes(
        'data-section-id="strength"'
    )
);

assert(
    result.clinicianHtml.includes(
        'data-section-id="orientation"'
    )
);

assert(
    result.clinicianHtml.includes(
        "<details"
    ),
    "Les sections doivent être repliables"
);

assert(
    result.clinicianHtml.includes(
        "pap-cognitive-ux-section-count"
    ),
    "Chaque section doit afficher un compteur"
);

assert(
    result.clinicianHtml.includes(
        "À vérifier selon la situation clinique"
    ),
    "Les conditions clinicianCheck doivent être distinguées"
);

assert(
    result.clinicianHtml.includes(
        "pap-cognitive-ux-list-clinician-check"
    ),
    "La liste des éléments à vérifier doit avoir une classe dédiée"
);

assert(
    !result.clinicianHtml.includes(
        'data-section-id="endurance"'
    ),
    "Une section vide ne doit pas être rendue"
);

assert(
    !result.clinicianHtml.includes(
        'data-section-id="otherActivity"'
    ),
    "Une section sans message clinicien ne doit pas être rendue"
);

assert(
    result.clinicianHtml.includes(
        "Conseil général &lt;test&gt;"
    ),
    "Le HTML du message clinicien doit être échappé"
);

assert(
    result.patientHtml.includes(
        "Informer le patient &amp; vérifier"
    ),
    "Le HTML du message patient doit être échappé"
);

assert(
    !result.patientHtml.includes(
        "Message non destiné au patient"
    )
);

assert(
    result.referenceHtml.includes(
        "Référence &quot;détaillée&quot;"
    )
);

assert.strictEqual(
    result.diagnostics
        .clinicianSectionCount,
    3
);

assert.strictEqual(
    result.diagnostics
        .clinicianItemCount,
    3
);

assert.strictEqual(
    result.diagnostics
        .patientItemCount,
    1
);

assert.strictEqual(
    result.diagnostics
        .referenceItemCount,
    1
);

assert.strictEqual(
    result.diagnostics
        .unassignedCount,
    2
);

const emptyResult =
    window.renderClinicalCognitiveUxHtml(
        null
    );

assert.strictEqual(
    emptyResult.clinicianHtml,
    ""
);

assert.strictEqual(
    emptyResult.patientHtml,
    ""
);

assert.strictEqual(
    emptyResult.referenceHtml,
    ""
);

assert.deepStrictEqual(
    emptyResult.diagnostics,
    {
        clinicianSectionCount: 0,
        clinicianItemCount: 0,
        patientItemCount: 0,
        referenceItemCount: 0,
        unassignedCount: 0
    }
);

console.log(
    JSON.stringify(
        {
            result: "PASS",
            verified: {
                emptySectionsHidden: true,
                clinicianMessagesRendered: true,
                patientMessagesRendered: true,
                referenceRendered: true,
                htmlEscaped: true,
                diagnosticsPreserved: true,
                emptyInputHandled: true
            }
        },
        null,
        2
    )
);
