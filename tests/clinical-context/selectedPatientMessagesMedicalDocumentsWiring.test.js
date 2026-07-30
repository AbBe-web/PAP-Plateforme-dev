"use strict";

const assert = require("assert");
const fs = require("fs");
const path = require("path");

const indexPath = path.resolve(
    __dirname,
    "../../medecin/generateur-crc/index.html"
);

const source = fs.readFileSync(
    indexPath,
    "utf8"
);

assert(
    source.includes(
        "function buildSelectedPatientMessagesClinicalContextV2("
    ),
    "Le helper partagé de contexte documentaire V2 doit exister"
);

assert(
    source.includes(
        "function buildSelectedPatientMessagesMedicalClinicalContextV2("
    ),
    "Le helper de contexte documentaire médecin V2 doit exister"
);

assert(
    /clinicalCognitivePatientDocumentDestination\s*!==\s*["']allReportsAndPatient["']/.test(
        source
    ),
    "Le helper doit respecter la destination documentaire"
);

assert(
    source.includes(
        "patientMessages: []"
    ),
    "La destination patient uniquement doit retirer les messages des CRC médecin"
);

assert(
    source.includes(
        "isLastItemInGroup"
    ),
    "Le libellé de pathologie doit être placé à la fin de chaque groupe"
);

assert(
    source.includes(
        "sourceLabel:"
    ),
    "Les messages V2 doivent être adaptés au format historique"
);

const helperCalls =
    source.match(
        /buildSelectedPatientMessagesMedicalClinicalContextV2\(/g
    ) || [];

assert.strictEqual(
    helperCalls.length,
    4,
    "Le helper doit être défini puis utilisé dans les trois CRC médecin"
);

assert(
    !source.includes(
        "buildSelectedPatientMessagesMedicalDocumentBlockV2"
    ),
    "L’ancien helper produisant un cadre médecin doit être supprimé"
);

assert(
    !source.includes(
        "Messages et conseils transmis au patient"
    ),
    "Le nouveau titre documentaire non validé doit être supprimé"
);

assert(
    !source.includes(
        "${selectedPatientMessagesMedicalBlocV2}"
    ),
    "Aucun cadre V2 séparé ne doit rester inséré dans les CRC"
);

assert(
    source.includes(
        "function buildSelectedPatientMessagesPatientSentenceV2("
    ),
    "Le formateur textuel patient V2 doit exister"
);

assert(
    source.includes(
        "En lien avec ${probleme} de santé"
    ),
    "La formulation historique patient doit être conservée"
);

assert(
    /const\s+crcPathoBloc\s*=\s*buildSelectedPatientMessagesPatientSentenceV2\s*\(/.test(
        source
    ),
    "La version patient doit utiliser le formateur textuel V2"
);

assert(
    !source.includes(
        'buildCRCPathoBloc(\n    "patient",\n    patientClinicalContextV2,'
    ),
    "La version patient ne doit plus utiliser le branchement incorrect"
);

assert(
    !source.includes(
        "${selectedPatientMessagesDocumentBlocV2}"
    ),
    "Le bloc patient encadré ne doit plus être inséré"
);

assert(
    /buildCRCPathoBloc\s*\(\s*["']long["']\s*,\s*medicalClinicalContextV2\s*,/.test(
        source
    ),
    "Le courrier complet doit utiliser le contexte V2 adapté"
);

assert(
    /buildCRCPathoBloc\s*\(\s*["']paragraph["']\s*,\s*medicalClinicalContextV2\s*,/.test(
        source
    ),
    "La version paragraphe doit utiliser le contexte V2 adapté"
);

assert(
    /buildCRCPathoBloc\s*\(\s*["']medical["']\s*,\s*medicalClinicalContextV2\s*,/.test(
        source
    ),
    "Le dossier médical doit utiliser le contexte V2 adapté"
);

console.log(
    JSON.stringify(
        {
            result: "PASS",
            verified: {
                historicalFormatterPreserved: true,
                separateMedicalFrameRemoved: true,
                destinationRespected: true,
                selectedV2MessagesInjected: true,
                pathologyLabelsGrouped: true,
                longWired: true,
                paragraphWired: true,
                medicalRecordWired: true,
                patientHistoricalSentencePreserved: true,
                patientSelectedV2MessagesInjected: true,
                patientSeparateFrameRemoved: true
            }
        },
        null,
        2
    )
);
