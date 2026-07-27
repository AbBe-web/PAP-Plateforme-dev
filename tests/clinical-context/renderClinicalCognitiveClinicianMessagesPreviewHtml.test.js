const assert = require("assert");

global.window = global;

require(
    "../../core/clinical-context/renderClinicalCognitiveClinicianMessagesPreviewHtml.js"
);

const result =
    window
        .renderClinicalCognitiveClinicianMessagesPreviewHtml({
            sections: [
                {
                    sectionId: "general",
                    title: "Repères généraux",
                    always: [
                        {
                            message:
                                "Message directement applicable"
                        }
                    ],
                    clinicianCheck: [
                        {
                            message:
                                "Message conditionnel",
                            condition: {
                                description:
                                    "Condition clinique à confirmer"
                            }
                        }
                    ]
                },
                {
                    sectionId: "empty",
                    title: "Section vide",
                    always: [],
                    clinicianCheck: []
                }
            ]
        });

assert(
    result.includes(
        "Aperçu technique — messages médecin v2"
    )
);

assert(
    result.includes(
        "Repères applicables au contexte sélectionné"
    )
);

assert(
    result.includes(
        "Conditions à vérifier par le médecin"
    )
);

assert(
    result.includes(
        "Condition clinique à confirmer"
    )
);

assert(
    !result.includes("Section vide")
);

const escapedResult =
    window
        .renderClinicalCognitiveClinicianMessagesPreviewHtml({
            sections: [
                {
                    title: "<script>",
                    always: [
                        {
                            message:
                                "<strong>Texte</strong>"
                        }
                    ],
                    clinicianCheck: []
                }
            ]
        });

assert(
    escapedResult.includes("&lt;script&gt;")
);

assert(
    escapedResult.includes(
        "&lt;strong&gt;Texte&lt;/strong&gt;"
    )
);

assert(
    !escapedResult.includes("<script>")
);

assert.strictEqual(
    window
        .renderClinicalCognitiveClinicianMessagesPreviewHtml(
            null
        ),
    ""
);

console.log(
    JSON.stringify(
        {
            result: "PASS",
            verified: {
                sectionsRendered: true,
                alwaysItemsIdentified: true,
                clinicianChecksIdentified: true,
                conditionsDisplayed: true,
                emptySectionsHidden: true,
                htmlEscaped: true,
                emptyInputHandled: true
            }
        },
        null,
        2
    )
);
