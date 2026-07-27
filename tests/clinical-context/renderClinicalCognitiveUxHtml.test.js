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
                    knowledgeItemId:
                        "general-1",

                    matchedContext: {
                        pathologiesAny: [
                            "hta"
                        ]
                    },

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

                selection: {
                    defaultSelected: true
                },

                messages: {
                    clinician: "",
                    patient:
                        "Informer le patient & vérifier"
                }
            },
            {
                knowledgeItemId:
                    "patient-2",

                selection: {
                    defaultSelected: false
                },

                messages: {
                    clinician: "",
                    patient:
                        "Deuxième message patient"
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

const quickModeResult =
    window.renderClinicalCognitiveUxHtml(
        viewModel,
        {
            isQuickMode: true,
            activePathologies: [
                "hta",
                "bpco"
            ]
        }
    );

const overriddenSelectionResult =
    window.renderClinicalCognitiveUxHtml(
        viewModel,
        {
            patientSelectionById: {
                "patient-1": false,
                "patient-2": true
            }
        }
    );

const singlePathologyResult =
    window.renderClinicalCognitiveUxHtml(
        viewModel,
        {
            isQuickMode: false,
            activePathologies: [
                "hta"
            ]
        }
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
        'data-section-id="general" open'
    ),
    "Les sections doivent être ouvertes par défaut en mode complet"
);

assert(
    !quickModeResult.clinicianHtml.includes(
        'data-section-id="general" open'
    ),
    "Les sections doivent rester fermées en mode rapide"
);

assert(
    quickModeResult.clinicianHtml.includes(
        'data-pathology-id="hta"'
    ),
    "Le badge d’origine doit être affiché lorsque plusieurs pathologies sont actives"
);

assert(
    quickModeResult.clinicianHtml.includes(
        "pap-cognitive-ux-origin-badges"
    ),
    "Le conteneur des badges d’origine doit être rendu"
);

assert(
    !singlePathologyResult.clinicianHtml.includes(
        "pap-cognitive-ux-origin-badges"
    ),
    "Les badges d’origine ne doivent pas être affichés avec une seule pathologie active"
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
    result.patientHtml.includes(
        "Deuxième message patient"
    ),
    "Le second message patient doit être rendu"
);

assert(
    !result.patientHtml.includes(
        "Message non destiné au patient"
    )
);

assert(
    result.patientHtml.includes(
        "pap-cognitive-ux-patient-checkbox"
    ),
    "Les messages patient doivent afficher une case de sélection"
);

assert(
    result.patientHtml.includes(
        'data-knowledge-item-id="patient-1"'
    ),
    "La case patient doit conserver l’identifiant stable du premier message"
);

assert(
    result.patientHtml.includes(
        'data-knowledge-item-id="patient-2"'
    ),
    "La case patient doit conserver l’identifiant stable du second message"
);

const selectedPatientInputMatch =
    result.patientHtml.match(
        /<input(?=[^>]*data-knowledge-item-id="patient-1")[^>]*>/
    );

assert(
    selectedPatientInputMatch,
    "La case du message sélectionné par défaut doit être rendue"
);

assert(
    /\bchecked\b/.test(
        selectedPatientInputMatch[0]
    ),
    "La case doit refléter defaultSelected === true"
);

const unselectedPatientInputMatch =
    result.patientHtml.match(
        /<input(?=[^>]*data-knowledge-item-id="patient-2")[^>]*>/
    );

assert(
    unselectedPatientInputMatch,
    "La case du message non sélectionné par défaut doit être rendue"
);

assert(
    !/\bchecked\b/.test(
        unselectedPatientInputMatch[0]
    ),
    "La case doit rester décochée lorsque defaultSelected === false"
);

const overriddenPatient1Input =
    overriddenSelectionResult.patientHtml.match(
        /<input(?=[^>]*data-knowledge-item-id="patient-1")[^>]*>/
    );

const overriddenPatient2Input =
    overriddenSelectionResult.patientHtml.match(
        /<input(?=[^>]*data-knowledge-item-id="patient-2")[^>]*>/
    );

assert(
    overriddenPatient1Input,
    "La première case patient doit être rendue avec un état explicite"
);

assert(
    overriddenPatient2Input,
    "La seconde case patient doit être rendue avec un état explicite"
);

assert(
    !/\bchecked\b/.test(
        overriddenPatient1Input[0]
    ),
    "Un état utilisateur false doit remplacer defaultSelected true"
);

assert(
    /\bchecked\b/.test(
        overriddenPatient2Input[0]
    ),
    "Un état utilisateur true doit remplacer defaultSelected false"
);

assert(
    !result.patientHtml.includes(
        " disabled"
    ),
    "Les cases patient doivent être modifiables"
);

assert(
    !result.clinicianHtml.includes(
        "pap-cognitive-ux-patient-checkbox"
    ),
    "Les sections médecin ne doivent pas afficher de case patient"
);

assert(
    !result.referenceHtml.includes(
        "pap-cognitive-ux-patient-checkbox"
    ),
    "La section référence ne doit pas afficher de case patient"
);

assert(
    result.referenceHtml.includes(
        "Référence &quot;détaillée&quot;"
    )
);

assert.deepStrictEqual(
    Object.keys(
        result.clinicianSectionHtmlById
    ),
    [
        "general",
        "strength",
        "orientation"
    ],
    "Le renderer doit exposer uniquement les sections médecin non vides"
);

assert(
    result
        .clinicianSectionHtmlById
        .general
        .includes(
            'data-section-id="general"'
        ),
    "La section general doit être accessible séparément"
);

assert(
    result
        .clinicianSectionHtmlById
        .strength
        .includes(
            'data-section-id="strength"'
        ),
    "La section strength doit être accessible séparément"
);

assert(
    result
        .clinicianSectionHtmlById
        .orientation
        .includes(
            'data-section-id="orientation"'
        ),
    "La section orientation doit être accessible séparément"
);

assert.strictEqual(
    result
        .clinicianSectionHtmlById
        .endurance,
    undefined,
    "Une section vide ne doit pas être exposée"
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
    2
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

assert.deepStrictEqual(
    emptyResult.clinicianSectionHtmlById,
    {},
    "Un contexte vide doit exposer une table de sections vide"
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
                clinicianSectionsExposedById: true,
                patientMessagesRendered: true,
                patientSelectionControlsRendered: true,
                patientSelectionDefaultsPreserved: true,
                patientSelectionOverridesPreserved: true,
                referenceRendered: true,
                htmlEscaped: true,
                diagnosticsPreserved: true,
                emptyInputHandled: true,
                fullModeSectionsOpened: true,
                quickModeSectionsCollapsed: true,
                multiPathologyBadgesRendered: true,
                singlePathologyBadgesHidden: true
   }
        },
        null,
        2
    )
);
