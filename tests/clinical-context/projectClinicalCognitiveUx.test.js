"use strict";

const fs = require("fs");
const vm = require("vm");
const assert = require("assert");

global.window = global;

function loadScript(path) {
    const source = fs.readFileSync(path, "utf8");

    vm.runInThisContext(source, {
        filename: path
    });
}

loadScript(
    "./data/clinical-knowledge/generated/functional-use-definitions.generated.js"
);
loadScript(
    "./core/clinical-context/clinical-knowledge-schema.js"
);
loadScript(
    "./core/clinical-context/pathology-registry.js"
);
loadScript(
    "./core/clinical-context/clinical-situation-registry.js"
);
loadScript(
    "./core/clinical-context/evidence-source-registry.js"
);
loadScript(
    "./core/clinical-context/clinical-knowledge-validation.js"
);
loadScript(
    "./data/clinical-knowledge/generated/pathology-knowledge-registry.generated.js"
);
loadScript(
    "./core/clinical-context/computeClinicalContextV2.js"
);
loadScript(
    "./core/clinical-context/projectClinicalCognitiveUx.js"
);

function getIds(items) {
    return items.map(function (item) {
        return item.knowledgeItemId;
    });
}

function computeForPathology(pathologyId) {
    const clinicalModel = {
        patient: {
            pathologies: [pathologyId]
        }
    };

    const clinicalContext =
        window.computeClinicalContextV2(
            clinicalModel,
            window.PATHOLOGY_KNOWLEDGE_REGISTRY
        );

    const cognitiveUx =
        window.projectClinicalCognitiveUx(
            clinicalContext
        );

    return {
        clinicalContext,
        cognitiveUx
    };
}

const hta = computeForPathology("hta");
const bpco = computeForPathology("bpco");

const htaGeneralIds =
    getIds(
        hta.cognitiveUx.prescription.general
    );

const htaStrengthIds =
    getIds(
        hta.cognitiveUx.prescription.strength
    );

const bpcoGeneralIds =
    getIds(
        bpco.cognitiveUx.prescription.general
    );

const bpcoOrientationIds =
    getIds(
        bpco.cognitiveUx.orientation
    );

assert(
    htaGeneralIds.includes(
        "hta-guidance-endurance-priority-001"
    ),
    "HTA : cible prescription.general absente"
);

assert(
    htaStrengthIds.includes(
        "hta-guidance-strength-moderate-001"
    ),
    "HTA : cible prescription.strength absente"
);

assert(
    bpcoGeneralIds.includes(
        "bpco-guidance-exercise-desaturation-adaptation-001"
    ),
    "BPCO : adaptation désaturation absente"
);

assert(
    bpcoOrientationIds.includes(
        "bpco-orientation-exercise-desaturation-support-001"
    ),
    "BPCO : orientation désaturation absente"
);

const allProjectedIds = [
    ...htaGeneralIds,
    ...htaStrengthIds,
    ...bpcoGeneralIds,
    ...bpcoOrientationIds
];

assert(
    !allProjectedIds.includes(
        "hta-guidance-endurance-strength-001"
    ),
    "Ancien item HTA deprecated encore projeté"
);

assert(
    !allProjectedIds.includes(
        "bpco-guidance-exercise-desaturation-001"
    ),
    "Ancien item BPCO deprecated encore projeté"
);

const orientationTargetsProbe =
    window.projectClinicalCognitiveUx([
        {
            knowledgeItemId:
                "orientation-probe-transverse",
            clinicalFunction: "orientationFactors",
            presentationTargets: [
                "orientation"
            ]
        },
        {
            knowledgeItemId:
                "orientation-probe-rehabilitation",
            clinicalFunction: "orientationFactors",
            presentationTargets: [
                "orientation.rehabilitation"
            ]
        },
        {
            knowledgeItemId:
                "orientation-probe-apa",
            clinicalFunction: "orientationFactors",
            presentationTargets: [
                "orientation.apa"
            ]
        },
        {
            knowledgeItemId:
                "orientation-probe-ordinary-ap",
            clinicalFunction: "orientationFactors",
            presentationTargets: [
                "orientation.ordinaryAP"
            ]
        }
    ]);

assert.deepStrictEqual(
    getIds(
        orientationTargetsProbe.orientation
    ),
    [
        "orientation-probe-transverse"
    ],
    "La cible orientation transverse doit rester distincte"
);

assert.deepStrictEqual(
    getIds(
        orientationTargetsProbe
            .orientationByArea
            .rehabilitation
    ),
    [
        "orientation-probe-rehabilitation"
    ],
    "La cible orientation.rehabilitation doit être projetée séparément"
);

assert.deepStrictEqual(
    getIds(
        orientationTargetsProbe
            .orientationByArea
            .apa
    ),
    [
        "orientation-probe-apa"
    ],
    "La cible orientation.apa doit être projetée séparément"
);

assert.deepStrictEqual(
    getIds(
        orientationTargetsProbe
            .orientationByArea
            .ordinaryAP
    ),
    [
        "orientation-probe-ordinary-ap"
    ],
    "La cible orientation.ordinaryAP doit être projetée séparément"
);

console.log(
    JSON.stringify(
        {
            result: "PASS",
            verifiedItems: {
                htaEndurancePriority: true,
                htaStrengthModerate: true,
                bpcoDesaturationAdaptation: true,
                bpcoDesaturationOrientation: true,
                deprecatedItemsExcluded: true
            }
        },
        null,
        2
    )
);
