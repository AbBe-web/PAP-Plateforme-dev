// core/clinical-context/resource-registry.js

const RESOURCE_REGISTRY = [
  {
    id: "hta-auto-mesure",

    label:
      "fiche d’automesure tensionnelle",

    sourceLabel:
      "HTA",

    type:
      "patient-document",

    audience: ["patient"],

    tags: ["hta"],

    contexts: {
      pathologies: ["hta"]
    },

    outputs: ["patient", "crc", "qr"]
  }
];

window.RESOURCE_REGISTRY =
  RESOURCE_REGISTRY;