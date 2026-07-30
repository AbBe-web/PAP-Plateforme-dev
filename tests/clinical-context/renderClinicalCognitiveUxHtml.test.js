"use strict";

const assert = require("assert");

global.window = global;

require(
    "../../core/clinical-context/renderClinicalCognitiveMessageHtml.js"
);

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
                           "Conseil général <test> — voir <a href='https://example.com/clinicien' target='_blank' rel='noopener noreferrer'>le lien médecin</a> <button type='button' class='info-trigger info-hitbox' data-info='Information médecin'><span class='info-icon'>i</span></button>",
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

            matchedContext: {
                pathologiesAny: [
                    "hta"
                ]
            },

            selection: {
                    defaultSelected: true
                },

                messages: {
                    clinician: "",
                    patient:
                         "Informer le patient & vérifier — voir <a href='https://example.com/patient' target='_blank' rel='noopener noreferrer'>le lien patient</a> <button type='button' class='info-trigger info-hitbox' data-info='Information patient'><span class='info-icon'>i</span></button>"
                }
            },
            {
              knowledgeItemId:
                "patient-2",

            matchedContext: {
                pathologiesAny: [
                    "bpco"
                ]
            },

            condition: {
                type: "clinicianCheck"
            },

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

const groupedPatientResult =
    window.renderClinicalCognitiveUxHtml(
        viewModel,
        {
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

const allPatientMessagesSelectedResult =
    window.renderClinicalCognitiveUxHtml(
        viewModel,
        {
            patientSelectionById: {
                "patient-1": true,
                "patient-2": true
            }
        }
    );

const noPatientMessagesSelectedResult =
    window.renderClinicalCognitiveUxHtml(
        viewModel,
        {
            patientSelectionById: {
                "patient-1": false,
                "patient-2": false
            }
        }
    );

const patientOnlyDestinationResult =
    window.renderClinicalCognitiveUxHtml(
        viewModel,
        {
            patientSelectionById: {
                "patient-1": true,
                "patient-2": false
            },
            patientDocumentDestination:
                "patientOnly"
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

const contextualClinicianResult =
    window.renderClinicalCognitiveUxHtml(
        viewModel,
        {
            showAllClinicalSituations:
                false
        }
    );

const exhaustiveClinicianResult =
    window.renderClinicalCognitiveUxHtml(
        viewModel,
        {
            showAllClinicalSituations:
                true
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
    !contextualClinicianResult
        .clinicianHtml
        .includes(
            "À vérifier selon la situation clinique"
        ),
    "Les situations particulières doivent être masquées dans l’affichage contextuel"
);

assert(
    !contextualClinicianResult
        .clinicianHtml
        .includes(
            'data-section-id="orientation"'
        ),
    "Une section contenant uniquement des situations particulières doit être masquée dans l’affichage contextuel"
);

assert(
    exhaustiveClinicianResult
        .clinicianHtml
        .includes(
            "À vérifier selon la situation clinique"
        ),
    "L’affichage exhaustif doit rendre les situations particulières"
);

assert(
    exhaustiveClinicianResult
        .clinicianHtml
        .includes(
            'data-section-id="orientation"'
        ),
    "L’affichage exhaustif doit restaurer les sections conditionnelles"
);

assert(
    contextualClinicianResult
        .patientHtml
        .includes(
            "Informer le patient &amp; vérifier"
        ),
    "Le filtrage médecin ne doit pas masquer les messages patient"
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
    "Le texte HTML non autorisé du message clinicien doit rester échappé"
);

assert(
    result.clinicianHtml.includes(
        'href="https://example.com/clinicien"'
    ),
    "Le lien autorisé du message clinicien doit être rendu"
);

assert(
    result.clinicianHtml.includes(
        'data-info="Information médecin"'
    ),
    "Le bouton d’information du message clinicien doit être rendu"
);

assert(
    result.clinicianHtml.includes(
        'class="info-trigger info-hitbox"'
    ),
    "Le bouton médecin doit conserver les classes utilisées par le listener existant"
);

assert(
    result.patientHtml.includes(
        "Informer le patient &amp; vérifier"
    ),
    "Le texte du message patient doit rester correctement échappé"
);

assert(
    result.patientHtml.includes(
        'href="https://example.com/patient"'
    ),
    "Le lien autorisé du message patient doit être rendu"
);

assert(
    result.patientHtml.includes(
        'data-info="Information patient"'
    ),
    "Le bouton d’information du message patient doit être rendu"
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
        "pap-cognitive-ux-patient-selection-mode"
    ),
    "La section patient doit afficher les contrôles globaux de sélection"
);

assert(
    result.patientHtml.includes(
        'value="some"'
    ),
    "Une sélection mixte doit afficher l’option Certains"
);

const mixedSelectionInput =
    result.patientHtml.match(
        /<input(?=[^>]*class="pap-cognitive-ux-patient-selection-mode-input")(?=[^>]*value="some")[^>]*>/
    );

assert(
    mixedSelectionInput,
    "Le radio Certains doit être rendu"
);

assert(
    /\bchecked\b/.test(
        mixedSelectionInput[0]
    ),
    "Certains doit être actif lorsque la sélection est mixte"
);

const allSelectionInput =
    allPatientMessagesSelectedResult
        .patientHtml
        .match(
            /<input(?=[^>]*class="pap-cognitive-ux-patient-selection-mode-input")(?=[^>]*value="all")[^>]*>/
        );

assert(
    allSelectionInput,
    "Le radio Tous doit être rendu"
);

assert(
    /\bchecked\b/.test(
        allSelectionInput[0]
    ),
    "Tous doit être actif lorsque tous les messages sont sélectionnés"
);

const noSelectionInput =
    noPatientMessagesSelectedResult
        .patientHtml
        .match(
            /<input(?=[^>]*class="pap-cognitive-ux-patient-selection-mode-input")(?=[^>]*value="none")[^>]*>/
        );

assert(
    noSelectionInput,
    "Le radio Aucun doit être rendu"
);

assert(
    /\bchecked\b/.test(
        noSelectionInput[0]
    ),
    "Aucun doit être actif lorsqu’aucun message n’est sélectionné"
);

assert(
    result.patientHtml.includes(
        "pap-cognitive-ux-patient-document-destination"
    ),
    "La destination documentaire doit être affichée dans la section patient"
);

assert(
    groupedPatientResult.patientHtml.includes(
        'data-patient-pathology-group="hta"'
    ),
    "Les messages HTA doivent être regroupés dans un bloc HTA"
);

assert(
    groupedPatientResult.patientHtml.includes(
        'data-patient-pathology-group="bpco"'
    ),
    "Les messages BPCO doivent être regroupés dans un bloc BPCO"
);

assert(
    groupedPatientResult.patientHtml.includes(
        "pap-cognitive-ux-patient-pathology-title"
    ),
    "Chaque groupe patient doit afficher un titre pathologique"
);

const bpcoGroupStart =
    groupedPatientResult.patientHtml.indexOf(
        'data-patient-pathology-group="bpco"'
    );

const contextualPatientTitleStart =
    groupedPatientResult.patientHtml.indexOf(
        "À vérifier selon la situation clinique",
        bpcoGroupStart
    );

const secondPatientMessageStart =
    groupedPatientResult.patientHtml.indexOf(
        "Deuxième message patient",
        bpcoGroupStart
    );

assert(
    bpcoGroupStart >= 0 &&
    contextualPatientTitleStart >
        bpcoGroupStart &&
    secondPatientMessageStart >
        contextualPatientTitleStart,
    "Le message patient contextuel doit rester dans le groupe de sa pathologie"
);

assert(
    !groupedPatientResult.patientHtml.includes(
        "pap-cognitive-ux-origin-badges"
    ),
    "Les badges d’origine redondants doivent être masqués dans les groupes mono-pathologie"
);

const defaultDocumentDestinationInput =
    result.patientHtml.match(
        /<input(?=[^>]*class="pap-cognitive-ux-patient-document-destination-input")(?=[^>]*value="allReportsAndPatient")[^>]*>/
    );

assert(
    defaultDocumentDestinationInput,
    "La destination comptes rendus et version patient doit être rendue"
);

assert(
    /\bchecked\b/.test(
        defaultDocumentDestinationInput[0]
    ),
    "La destination par défaut doit être comptes rendus et version patient"
);

const patientOnlyDestinationInput =
    patientOnlyDestinationResult
        .patientHtml
        .match(
            /<input(?=[^>]*class="pap-cognitive-ux-patient-document-destination-input")(?=[^>]*value="patientOnly")[^>]*>/
        );

assert(
    patientOnlyDestinationInput,
    "La destination version patient uniquement doit être rendue"
);

assert(
    /\bchecked\b/.test(
        patientOnlyDestinationInput[0]
    ),
    "La destination patientOnly doit remplacer la destination par défaut"
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
                contextualClinicianChecksHidden: true,
                exhaustiveClinicianChecksRendered: true,
                patientRenderingUnaffectedByClinicianFilter: true,
                patientMessagesRendered: true,
                patientSelectionControlsRendered: true,
                patientGlobalSelectionRendered: true,
                patientGlobalSelectionStateDerived: true,
                patientDocumentDestinationRendered: true,
            patientDocumentDestinationPreserved: true,
            patientMessagesGroupedByPathology: true,
            contextualPatientMessagesRemainGrouped: true,
            redundantPatientOriginBadgesHidden: true,
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
