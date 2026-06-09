// core/clinical-context/context-schema.js

function createEmptyClinicalContext() {

  return {
    vigilance: [],
    precautions: [],
    adaptations: [],
    supervision: [],

    recommandations: [],
    patientMessages: [],

    resources: [],
    patientDocuments: [],
    clinicianTools: [],
    qrResources: [],

    metadata: {
      generatedAt: Date.now(),
      version: "phase2-v1"
    }
  };
}

window.createEmptyClinicalContext =
  createEmptyClinicalContext;