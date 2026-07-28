"use strict";

const fs = require("fs");
const vm = require("vm");
const assert = require("assert");

global.window = global;


function loadScript(path) {

    const source =
        fs.readFileSync(
            path,
            "utf8"
        );

    vm.runInThisContext(
        source,
        {
            filename: path
        }
    );
}


function cloneItem(item) {

    return JSON.parse(
        JSON.stringify(item)
    );
}


loadScript(
    "./core/clinical-context/clinical-knowledge-schema.js"
);

loadScript(
    "./core/clinical-context/clinical-knowledge-validation.js"
);


const baseItem = {

    id: "test-clinical-moments-001",

    context: {
        pathologiesAny: ["hta"]
    },

    clinicalUses: [
        {
            function: "safety",
            category: "precaution"
        }
    ],

    messages: {
        clinician: "Repère clinique de test.",
        patient: ""
    },

    condition: {
        type: "always"
    },

    evidenceSourceIds: [],

    relatedResourceIds: []
};


const backwardCompatibleResult =
    window.validateClinicalKnowledgeItem(
        cloneItem(baseItem)
    );

assert.strictEqual(
    backwardCompatibleResult.valid,
    true,
    JSON.stringify(
        backwardCompatibleResult.errors
    )
);


const validMomentsItem =
    cloneItem(baseItem);

validMomentsItem.clinicalMoments = [
    {
        moment: "initialAssessment",
        condition: {
            type: "always"
        }
    },
    {
        moment: "followUp",
        condition: {
            type: "clinicianCheck",
            description:
                "Traitement bêtabloquant actuel",
            machineEvaluable: false
        },
        messageClinicianOverride:
            "Au suivi, vérifier la tolérance à l'effort."
    }
];

const validMomentsResult =
    window.validateClinicalKnowledgeItem(
        validMomentsItem
    );

assert.strictEqual(
    validMomentsResult.valid,
    true,
    JSON.stringify(
        validMomentsResult.errors
    )
);


const invalidMomentItem =
    cloneItem(baseItem);

invalidMomentItem.clinicalMoments = [
    {
        moment: "discharge",
        condition: {
            type: "always"
        }
    }
];

assert(
    window
      .validateClinicalKnowledgeItem(
          invalidMomentItem
      )
      .errors
      .includes(
          "clinicalMoments[0].moment is invalid"
      )
);


const duplicateMomentItem =
    cloneItem(baseItem);

duplicateMomentItem.clinicalMoments = [
    {
        moment: "followUp",
        condition: {
            type: "always"
        }
    },
    {
        moment: "followUp",
        condition: {
            type: "always"
        }
    }
];

assert(
    window
      .validateClinicalKnowledgeItem(
          duplicateMomentItem
      )
      .errors
      .includes(
          "clinicalMoments contains duplicate moment: followUp"
      )
);


const invalidConditionItem =
    cloneItem(baseItem);

invalidConditionItem.clinicalMoments = [
    {
        moment: "followUp",
        condition: {
            type: "automaticDecision"
        }
    }
];

assert(
    window
      .validateClinicalKnowledgeItem(
          invalidConditionItem
      )
      .errors
      .includes(
          "clinicalMoments[0].condition.type is invalid"
      )
);


const invalidOverrideItem =
    cloneItem(baseItem);

invalidOverrideItem.clinicalMoments = [
    {
        moment: "followUp",
        condition: {
            type: "always"
        },
        messageClinicianOverride: ""
    }
];

assert(
    window
      .validateClinicalKnowledgeItem(
          invalidOverrideItem
      )
      .errors
      .includes(
          "clinicalMoments[0].messageClinicianOverride must be a non-empty string"
      )
);


const invalidArrayItem =
    cloneItem(baseItem);

invalidArrayItem.clinicalMoments =
    "followUp";

assert(
    window
      .validateClinicalKnowledgeItem(
          invalidArrayItem
      )
      .errors
      .includes(
          "clinicalMoments must be an array"
      )
);


console.log(
    JSON.stringify(
        {
            result: "PASS",
            verified: {
                existingItemsRemainValid: true,
                validMultipleMomentsAccepted: true,
                invalidMomentRejected: true,
                duplicateMomentRejected: true,
                invalidConditionRejected: true,
                invalidOverrideRejected: true,
                invalidArrayRejected: true
            }
        },
        null,
        2
    )
);