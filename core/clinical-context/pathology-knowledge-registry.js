// core/clinical-context/pathology-knowledge-registry.js

/*
 * PAP — Pathology Knowledge Registry
 *
 * Futur registre des ClinicalKnowledgeItem dont
 * le contexte implique une ou plusieurs pathologies.
 *
 * Principes :
 * - 1 item = 1 information clinique principale ;
 * - IDs stables ;
 * - aucune dépendance DOM ;
 * - aucun HTML ;
 * - aucune décision clinique automatique ;
 * - aucune mutation du clinicalModel ;
 * - aucune mutation du prescriptionModel.
 *
 * PATHO_DATA n'est ni modifié ni remplacé ici.
 *
 * Registre volontairement vide pendant 7A-2A.
 */

const PATHOLOGY_KNOWLEDGE_REGISTRY = [

  // =========================================================
  // HTA — migration pilote depuis PATHO_DATA
  // =========================================================

  {
    id: "hta-constraint-bp-200-115-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "safety",
        category: "contraindication"
      }
    ],

    messages: {
      clinician:
        "HTA non équilibrée symptomatique + PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg → CI absolue à AP ≥ modérée",
      patient: ""
    },

    condition: {
      type: "clinicianCheck",
      description:
        "HTA non équilibrée symptomatique avec PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg",
      machineEvaluable: false
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "contraintes",
            index: 0
          }
        ]
      }
    }
  },

  {
    id: "hta-constraint-bp-180-105-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "safety",
        category: "limitation"
      }
    ],

    messages: {
      clinician:
        "HTA non équilibrée symptomatique + PAS ≥ 180 mmHg ou PAD ≥ 105 mmHg → CI relative à AP ≥ modérée (à réévaluer)",
      patient: ""
    },

    condition: {
      type: "clinicianCheck",
      description:
        "HTA non équilibrée symptomatique avec PAS ≥ 180 mmHg ou PAD ≥ 105 mmHg",
      machineEvaluable: false
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "contraintes",
            index: 1
          }
        ]
      }
    }
  },

  {
    id: "hta-constraint-very-high-intensity-001",

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
      clinician:
        "HTA mal équilibrée et/ou symptomatique et/ou atteinte d’organe → précautions si AP très élevée (90-100% VO2 max) ou renforcement musculaire élevé (avis cardio, CI parfois)",
      patient: ""
    },

    condition: {
      type: "clinicianCheck",
      description:
        "HTA mal équilibrée, symptomatique et/ou avec atteinte d’organe",
      machineEvaluable: false
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "contraintes",
            index: 2
          }
        ]
      }
    }
  },

  {
    id: "hta-guidance-endurance-strength-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "prescriptionGuidance",
        category: "activityType"
      }
    ],

    messages: {
      clinician:
        "Privilégier les activités d’endurance et le renforcement musculaire modéré",
      patient: ""
    },

    condition: {
      type: "always"
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "adaptations",
            index: 0
          }
        ]
      }
    }
  },

  {
    id: "hta-guidance-warmup-intense-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "prescriptionGuidance",
        category: "practicalAdaptation"
      }
    ],

    messages: {
      clinician:
        "En cas d'AP intense, bien s'échauffer",
      patient: ""
    },

    condition: {
      type: "clinicianCheck",
      description: "En cas d’activité physique intense",
      machineEvaluable: false
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "adaptations",
            index: 1
          }
        ]
      }
    }
  },

  {
    id: "hta-guidance-avoid-valsava-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "prescriptionGuidance",
        category: "practicalAdaptation"
      }
    ],

    messages: {
      clinician:
        "Éviter le renforcement musculaire intense en glotte fermée (Valsalva)",
      patient: ""
    },

    condition: {
      type: "always"
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "adaptations",
            index: 2
          }
        ]
      }
    }
  },

  {
    id: "hta-situation-post-exercise-hypotension-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "safety",
        category: "monitoring"
      }
    ],

    messages: {
      clinician:
        "Hypotension post-effort, notamment sous traitement antihypertenseur",
      patient: ""
    },

    condition: {
      type: "clinicianCheck",
      description:
        "Traitement antihypertenseur ou contexte exposant à une hypotension post-effort",
      machineEvaluable: false
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "situations",
            index: 0
          }
        ]
      }
    }
  },

  {
    id: "hta-rule-bp-200-115-delay-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "safety",
        category: "limitation"
      }
    ],

    messages: {
      clinician:
        "SI PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg → ALORS différer l’AP d’intensité ≥ modérée",
      patient: ""
    },

    condition: {
      type: "clinicianCheck",
      description:
        "PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg",
      machineEvaluable: false
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "regles",
            index: 0
          }
        ]
      }
    }
  },

  {
    id: "hta-rule-uncontrolled-stabilization-001",

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
      clinician:
        "SI HTA non contrôlée → ALORS stabilisation préalable à envisager avant reprise ou progression de l’AP",
      patient: ""
    },

    condition: {
      type: "clinicianCheck",
      description: "HTA non contrôlée",
      machineEvaluable: false
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "regles",
            index: 1
          }
        ]
      }
    }
  },

  {
    id: "hta-rule-antihypertensive-hypotension-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "safety",
        category: "monitoring"
      }
    ],

    messages: {
      clinician:
        "SI traitement antihypertenseur → ALORS risque d’hypotension post-effort à surveiller (parfois plusieurs heures après)",
      patient: ""
    },

    condition: {
      type: "clinicianCheck",
      description: "Traitement antihypertenseur",
      machineEvaluable: false
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "regles",
            index: 2
          }
        ]
      }
    }
  },

  {
    id: "hta-rule-diuretic-dehydration-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "safety",
        category: "monitoring"
      }
    ],

    messages: {
      clinician:
        "SI traitement diurétique → ALORS risque de déshydratation ou de troubles ioniques, notamment en cas d’effort prolongé ou de chaleur",
      patient: ""
    },

    condition: {
      type: "clinicianCheck",
      description: "Traitement diurétique",
      machineEvaluable: false
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "regles",
            index: 3
          }
        ]
      }
    }
  },

  {
    id: "hta-rule-post-exercise-symptoms-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "safety",
        category: "warningSign"
      }
    ],

    messages: {
      clinician:
        "SI symptômes à ou post effort (vertiges, malaise) → ALORS réévaluation clinique (adaptation posologie tt anti HTA à discuter avant les séances d’AP)",
      patient: ""
    },

    condition: {
      type: "clinicianCheck",
      description:
        "Vertiges ou malaise pendant ou après l’effort",
      machineEvaluable: false
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "regles",
            index: 4
          }
        ]
      }
    }
  },

  {
    id: "hta-patient-avoid-valsava-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "patientInformation",
        category: "safety"
      }
    ],

    messages: {
      clinician: "",
      patient:
        "éviter les efforts en glotte fermée"
    },

    condition: {
      type: "always"
    },

    selection: {
      defaultSelected: false
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "crc",
            index: 0
          }
        ]
      }
    }
  },

  {
    id: "hta-patient-endurance-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "patientInformation",
        category: "practicalAdvice"
      }
    ],

    messages: {
      clinician: "",
      patient:
        "privilégier les activités d’endurance régulières"
    },

    condition: {
      type: "always"
    },

    selection: {
      defaultSelected: true
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "crc",
            index: 1
          },
          {
            pathologyId: "hta",
            field: "crc_default",
            index: 0
          }
        ]
      }
    }
  },

  {
    id: "hta-patient-bp-tolerance-001",

    context: {
      pathologiesAny: ["hta"]
    },

    clinicalUses: [
      {
        function: "patientInformation",
        category: "selfMonitoring"
      }
    ],

    messages: {
      clinician: "",
      patient:
        "surveiller la tolérance tensionnelle à l’effort"
    },

    condition: {
      type: "always"
    },

    selection: {
      defaultSelected: true
    },

    evidenceSourceIds: [],
    relatedResourceIds: [],

    metadata: {
      status: "active",
      version: "1",

      migration: {
        legacyOrigins: [
          {
            pathologyId: "hta",
            field: "crc",
            index: 2
          },
          {
            pathologyId: "hta",
            field: "crc_default",
            index: 1
          }
        ]
      }
    }
  }

];

window.PATHOLOGY_KNOWLEDGE_REGISTRY =
  PATHOLOGY_KNOWLEDGE_REGISTRY;