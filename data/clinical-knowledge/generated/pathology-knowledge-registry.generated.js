// ============================================================
// PAP — GENERATED FILE
//
// Source:
// PAP_Connaissances_Cliniques_Tableur_Maitre_v1.xlsx
//
// Ce fichier est généré automatiquement.
// Ne pas éditer manuellement.
// ============================================================

const PATHOLOGY_KNOWLEDGE_REGISTRY = [
  {
    "id": "hta-constraint-bp-200-115-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "HTA non équilibrée symptomatique + PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg → CI absolue à AP ≥ modérée",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "HTA non équilibrée symptomatique avec PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "hta-constraint-bp-180-105-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "HTA non équilibrée symptomatique + PAS ≥ 180 mmHg ou PAD ≥ 105 mmHg → CI relative à AP ≥ modérée (à réévaluer)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "HTA non équilibrée symptomatique avec PAS ≥ 180 mmHg ou PAD ≥ 105 mmHg",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "hta-constraint-very-high-intensity-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "HTA mal équilibrée et/ou symptomatique et/ou atteinte d’organe → précautions si AP très élevée (90-100% VO2 max) ou renforcement musculaire élevé (avis cardio, CI parfois)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "HTA mal équilibrée, symptomatique et/ou avec atteinte d’organe",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "contraintes",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "hta-guidance-moderate-below-ci-thresholds-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Sous les seuils de contre-indication liés à l’HTA et en l’absence d’autre limitation clinique, une AP d’intensité modérée peut être envisagée.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Pression artérielle inférieure aux seuils de contre-indication liés à l’HTA et absence d’autre limitation clinique",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1"
    }
  },
  {
    "id": "hta-guidance-endurance-strength-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Privilégier les activités d’endurance et le renforcement musculaire d’intensité modérée.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "deprecated",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "hta-guidance-avoid-valsava-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Éviter le renforcement musculaire intense en glotte fermée (Valsalva)",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.strength"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "hta-situation-post-exercise-hypotension-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Traitement antihypertenseur : risque d’hypotension post-effort, parfois subite et excessive ; prévoir une information adaptée du patient.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement antihypertenseur",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "hta-rule-bp-200-115-delay-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "SI PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg → ALORS différer l’AP d’intensité ≥ modérée",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "hta-rule-uncontrolled-stabilization-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "SI HTA non contrôlée → ALORS stabilisation préalable à envisager avant reprise ou progression de l’AP",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "HTA non contrôlée",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "hta-rule-antihypertensive-hypotension-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI traitement antihypertenseur → ALORS risque d’hypotension post-effort à surveiller (parfois plusieurs heures après)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement antihypertenseur",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "hta-guidance-beta-blocker-intensity-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si bêtabloquant : la fréquence cardiaque reflète moins bien l’intensité de l’effort ; privilégier également les sensations perçues, notamment respiratoires.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement par bêtabloquant",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1"
    }
  },
  {
    "id": "hta-rule-post-exercise-symptoms-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "warningSign"
      }
    ],
    "messages": {
      "clinician": "SI symptômes à ou post effort (vertiges, malaise) → ALORS réévaluation clinique (adaptation posologie tt anti HTA à discuter avant les séances d’AP)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Vertiges ou malaise pendant ou après l’effort",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "regles",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "hta-rule-diuretic-dehydration-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si diurétique : vigilance vis-à-vis de la déshydratation et des troubles électrolytiques, notamment en cas d’effort prolongé ou de chaleur.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement diurétique",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "hta-patient-endurance-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Privilégier une activité d’endurance régulière."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "hta",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "hta-patient-bp-tolerance-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "selfMonitoring"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Surveiller la tolérance pendant et après l’effort."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "hta",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "hta-patient-avoid-valsava-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "safety"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Éviter les efforts importants en bloquant la respiration."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "crc",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "hta-patient-malaise-medical-advice-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "safety"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "En cas de malaise pendant ou après l’effort, interrompre l’activité et demander un avis médical si nécessaire."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1"
    }
  },
  {
    "id": "hta-guidance-warmup-intense-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "En cas de séance d’activité physique ou sportive, notamment intense, bien s’échauffer et ne pas débuter brutalement une AP intense."
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "En cas d’activité physique ou sportive, notamment intense",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt2-guidance-progressive-start-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Privilégier une progressivité : débuter si besoin par une AP de faible intensité et/ou de courte durée.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "dt2-guidance-sequential-fractionated-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Possibilité d’AP séquentielle ou fractionnée si déconditionnement.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "dt2-constraint-high-intensity-uncontrolled-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      },
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si glycémie mal contrôlée : éviter les AP d’intensité élevée.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt2-constraint-hyperglycemia-250-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      },
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si glycémie > 2,5 g/L au moment de débuter l’exercice : différer l’AP tant que la glycémie reste > 2 g/L.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "dt2-guidance-hypoglycemia-treatment-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si traitement à risque d’hypoglycémie : anticiper le risque d’hypoglycémie ; prévoir une autosurveillance glycémique et une adaptation du traitement et/ou des apports glucidiques selon la situation.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt2-guidance-comorbidities-silent-ischemia-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Tenir compte des comorbidités et complications fréquentes du DT2, notamment du surpoids, du risque cardiovasculaire et de la possibilité d’une ischémie myocardique silencieuse.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1"
    }
  },
  {
    "id": "dt2-guidance-foot-protection-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Surveiller et protéger les pieds.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "dt2-guidance-postprandial-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Possibilité de conseiller une AP en post-prandial pour profiter de son effet sur l’hyperglycémie post-prandiale.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "dt2-constraint-intense-complicated-diabetes-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Activité physique intense ou avec manœuvre de Valsalva (ex : renforcement musculaire avec charges lourdes) → CI si diabète compliqué (rétinopathie sévère, néphropathie sévère, dysautonomie sévère, HTA non contrôlée associée)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Diabète compliqué : rétinopathie sévère, néphropathie sévère, dysautonomie sévère ou HTA non contrôlée associée",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "contraintes",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "dt2-constraint-plantar-ulcer-lower-limb-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Mal perforant plantaire → contre-indication temporaire aux activités des membres inférieurs",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Mal perforant plantaire",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "contraintes",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "dt2-situation-hypoglycemia-risk-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Risque d’hypoglycémie sous insuline ou traitement insulinosécréteur",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Insuline ou traitement insulinosécréteur",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "dt2-situation-diabetic-foot-risk-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Risque accru de pied diabétique",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt2-situation-vascular-complications-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "Complications microvasculaires ou macrovasculaires associées fréquentes",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "dt2-rule-hypoglycemic-treatment-monitoring-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI traitement hypoglycémiant (insuline, glinides, sulfamides hypoglycémiants) → ALORS auto-surveillance glycémique avant et après effort, prévoir collation avec soi",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement hypoglycémiant : insuline, glinides ou sulfamides hypoglycémiants",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "dt2-rule-unusual-prolonged-activity-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI activité inhabituelle ou prolongée → ALORS adaptation des apports glucidiques et éventuellement du traitement",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Activité inhabituelle ou prolongée",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt2-rule-foot-lesion-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "SI lésion du pied → ALORS adapter ou éviter certaines activités",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Lésion du pied",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "dt2-rule-no-recent-assessment-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "SI absence de bilan récent → ALORS envisager recherche de complications et facteurs de risque cardiovasculaire",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Absence de bilan récent",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "dt2-patient-glucose-monitoring-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "selfMonitoring"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "L’activité physique est un véritable traitement du diabète de type 2 et contribue à améliorer le contrôle de la glycémie."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "dt2",
            "field": "crc_default",
            "index": 0
          },
          {
            "pathologyId": "dt2",
            "field": "crc",
            "index": 3
          },
          {
            "pathologyId": "dt2",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "dt2-patient-progressivity-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Augmenter progressivement la durée et l’intensité de l’activité physique."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "crc",
            "index": 4
          },
          {
            "pathologyId": "dt2",
            "field": "crc_default",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "dt2-patient-pre-post-exercise-glucose-snack-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "selfMonitoring"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Si la glycémie est supérieure à 2,5 g/L avant la séance, différer l’activité physique et attendre qu’elle soit revenue à 2 g/L ou moins avant de reprendre."
    },
    "condition": {
      "type": "clinicianCheck",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "crc",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt2-patient-foot-vigilance-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "safety"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Prendre soin de ses pieds : utiliser un chaussage adapté et surveiller régulièrement l’état de ses pieds."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt2",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "dt2",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt2-patient-dyspnea-palpitations-001",
    "context": {
      "pathologiesAny": [
        "dt2"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "safety"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "En cas d’essoufflement inhabituel ou de palpitations lors d’une activité physique de faible intensité, arrêter l’effort et consulter rapidement."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1"
    }
  },
  {
    "id": "bpco-constraint-severe-desaturation-old-high-intensity-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "BPCO sévère avec désaturation à l'effort ou insuffisance respiratoire chronique sous OLD : contre-indication relative aux AP d'intensité élevée.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "bpco-constraint-uncontrolled-respiratory-failure-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Insuffisance respiratoire non contrôlée ou comorbidité décompensée : contre-indication temporaire.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-always-progressive-low-intensity-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Toujours : limiter la sédentarité, augmenter l'AP d'intensité faible, être très progressif (déconditionnement fréquent).",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-endurance-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Privilégier les activités d'endurance (marche, vélo).",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-fractionated-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Fractionner les séances (5 à 10 min si besoin).",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-dyspnea-borg-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Adapter l'intensité selon la dyspnée (Borg 4-6/10 ; 3-4/10 si BPCO sévère).",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-strength-training-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Associer du renforcement musculaire adapté à la tolérance.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.strength"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1"
    }
  },
  {
    "id": "bpco-guidance-important-dyspnea-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si dyspnée importante : réduire l'intensité ou fractionner.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-recent-exacerbation-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Après exacerbation récente : éviter la sédentarité et reprendre progressivement l'AP sur 4 semaines.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-exercise-desaturation-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si désaturation à l'effort : adapter l'AP et envisager un encadrement spécialisé.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "deprecated",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-gold-3-4-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si GOLD III-IV et/ou insuffisance respiratoire chronique sous OLD et/ou ventilation non invasive (= ≥ 1 des critères suivants : ) : réadaptation respiratoire puis APA ; progression très progressive de l'intensité et du volume, ± surveillance SpO₂.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "orientation"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "situations",
            "index": 0
          },
          {
            "pathologyId": "bpco",
            "field": "situations",
            "index": 1
          },
          {
            "pathologyId": "bpco",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-gold-2-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si GOLD II sans ces critères : avec comorbidités stabilisées → réadaptation respiratoire, APA ou section sport-santé selon la situation ; sans comorbidités → idem GOLD I.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "orientation"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-gold-1-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si GOLD I : activité physique en club sport-santé ou en autonomie.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "orientation"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "situations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-common-comorbidities-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Comorbidités fréquentes : cardiovasculaires, anxiété, dépression.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "referenceOnly"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "situations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "bpco-patient-treatment-benefit-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "L'activité physique fait partie intégrante du traitement de la BPCO et aide à améliorer l'essoufflement et la tolérance à l'effort."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1"
    }
  },
  {
    "id": "bpco-patient-regular-low-intensity-inactivity-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Être actif régulièrement, même à faible intensité, et éviter de rester longtemps inactif."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "bpco",
            "field": "crc",
            "index": 3
          },
          {
            "pathologyId": "bpco",
            "field": "crc_default",
            "index": 0
          },
          {
            "pathologyId": "bpco",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "bpco-patient-progressive-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Augmenter progressivement la durée et l'intensité selon la tolérance."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1"
    }
  },
  {
    "id": "bpco-patient-dyspnea-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "selfMonitoring"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Adapter l'intensité de l'effort à l'essoufflement."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "bpco",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "bpco-patient-fractionate-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Fractionner l'activité physique en plusieurs périodes courtes si nécessaire."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "crc",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "bpco-patient-post-exacerbation-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Après une exacerbation, reprendre progressivement l'activité physique selon les consignes données par l'équipe soignante."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1"
    }
  },
  {
    "id": "hta-guidance-endurance-priority-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Privilégier les activités physiques d’endurance.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "hta-guidance-strength-moderate-001",
    "context": {
      "pathologiesAny": [
        "hta"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Les activités physiques d’endurance peuvent être complétées par des activités de renforcement musculaire d’intensité modérée.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.strength"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "hta",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "bpco-guidance-exercise-desaturation-adaptation-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si désaturation à l’effort : adapter l’activité physique.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Désaturation à l’effort",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "bpco-orientation-exercise-desaturation-support-001",
    "context": {
      "pathologiesAny": [
        "bpco"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "Si désaturation à l’effort : un encadrement spécialisé peut être envisagé.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Désaturation à l’effort",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "orientation"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "bpco",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-constraint-recent-unstable-acs-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Syndrome coronarien aigu récent ou syndrome coronarien non stabilisé : vérifier la stabilisation clinique et les préconisations spécialisées avant prescription ou reprise d’une activité physique structurée.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Syndrome coronarien aigu récent ou syndrome coronarien non stabilisé",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-safety-intense-activity-risk-criteria-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "Si une activité sportive intense ou une compétition est envisagée, vérifier ensemble les critères de risque : revascularisation complète ou absence de sténose significative, FEVG ≥ 50 %, absence de symptôme, d’ischémie ou d’arythmie sévère à l’effort, capacité physique ≥ 100 % de la valeur théorique, bonne observance et facteurs de risque équilibrés. Une revascularisation incomplète, une FEVG < 50 % ou une anomalie segmentaire, des symptômes, une ischémie ou une arythmie sévère à l’effort, un SCA avec ou sans angioplastie ≤ 3 mois ou un pontage < 12 mois constituent des éléments défavorables à considérer.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Activité sportive intense ou compétition envisagée",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "contraintes",
            "index": 1
          },
          {
            "pathologyId": "coronaropathie",
            "field": "situations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-guidance-progressive-moderate-start-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Privilégier une reprise progressive, initialement à intensité modérée.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-guidance-warmup-cooldown-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Prévoir un échauffement et un retour au calme progressifs.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-guidance-strength-moderate-free-breathing-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Associer un renforcement musculaire modéré, avec respiration libre et sans blocage ventilatoire.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.strength"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-guidance-bradycardic-treatment-rpe-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si traitement bradycardisant — bêtabloquant, vérapamil ou diltiazem — guider l’intensité par la perception de l’effort plutôt que par la seule fréquence cardiaque.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement bradycardisant : bêtabloquant, vérapamil ou diltiazem",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "adaptations",
            "index": 2
          },
          {
            "pathologyId": "coronaropathie",
            "field": "regles",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-guidance-deconditioning-anxiety-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Après un événement coronarien, rechercher un déconditionnement physique ou une anxiété de reprise pouvant nécessiter une progression plus accompagnée.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Événement coronarien avec déconditionnement physique ou anxiété de reprise à rechercher",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-orientation-cardiac-rehabilitation-general-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "Recommander une réadaptation cardiovasculaire au patient coronarien ; la prescription d’activité physique par le médecin traitant peut notamment s’inscrire dans sa phase III.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "orientation"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1"
    }
  },
  {
    "id": "coronaropathie-guidance-associated-risk-factors-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Vérifier la prise en compte des facteurs de risque cardiovasculaire associés, notamment HTA, diabète, dyslipidémie et tabagisme.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Facteurs de risque cardiovasculaire associés à vérifier",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-orientation-recent-acs-rehabilitation-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "En cas de reprise après un syndrome coronarien aigu récent, privilégier la réadaptation cardiovasculaire puis une progression encadrée selon les préconisations spécialisées.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Reprise après syndrome coronarien aigu récent",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "orientation"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-guidance-resume-after-interruption-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Après une interruption de l’activité physique de plusieurs semaines, reprendre à un niveau inférieur puis progresser.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Activité physique interrompue plusieurs semaines",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-safety-warning-symptoms-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "warningSign"
      }
    ],
    "messages": {
      "clinician": "En cas de douleur thoracique, d’essoufflement inhabituel ou de malaise à l’effort, interrompre l’activité et envisager un avis cardiologique.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Douleur thoracique, essoufflement inhabituel ou malaise à l’effort",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-orientation-intense-competition-cardiology-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "specialistInput"
      }
    ],
    "messages": {
      "clinician": "En cas de souhait d’activité sportive intense ou de compétition, envisager un bilan cardiologique complet et un avis du cardiologue.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Activité sportive intense ou compétition envisagée",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "orientation"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-guidance-antiplatelet-contact-fall-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Si traitement antiagrégant plaquettaire, être prudent avec les activités comportant un risque important de contact, de choc ou de chute.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement antiagrégant plaquettaire",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.otherActivity"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "regles",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-patient-usual-treatment-times-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Prendre les traitements aux heures habituelles, même en cas de séance d’activité physique."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "crc",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-patient-golden-rules-warmup-cooldown-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "safety"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Connaître et respecter les règles de précaution, notamment l’importance d’un échauffement et d’un retour au calme progressifs."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "coronaropathie",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-patient-stop-warning-symptoms-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "warningSign"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Arrêter l’effort en cas de douleur thoracique, de malaise ou d’essoufflement inhabituel."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "coronaropathie",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-patient-avoid-valsava-strength-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "safety"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Éviter les exercices de renforcement musculaire intenses en bloquant la respiration."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "crc",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-patient-regular-not-occasional-intense-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Bouger régulièrement chaque semaine plutôt que réaliser des efforts intenses occasionnels."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "crc",
            "index": 4
          },
          {
            "pathologyId": "coronaropathie",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "coronaropathie-patient-intense-activity-cardiology-001",
    "context": {
      "pathologiesAny": [
        "coronaropathie"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "safety"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Un avis cardiologique est nécessaire si une activité physique intense, sportive ou en compétition est envisagée."
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Activité physique intense, sportive ou en compétition envisagée",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "coronaropathie",
            "field": "crc",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "aomi-constraint-severe-chronic-ischemia-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "En cas d’ischémie chronique sévère, de douleur de repos ou de lésion tissulaire, vérifier la prise en charge vasculaire avant d’envisager ou d’intensifier une activité physique structurée.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Ischémie chronique sévère, douleur de repos ou lésion tissulaire",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "aomi-constraint-severe-femoral-lesions-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "En cas de sténose serrée de l’artère fémorale commune ou de lésions fémorales associées avant revascularisation, être prudent avec les activités sollicitant fortement les membres inférieurs et prendre en compte l’avis vasculaire.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Sténose serrée de l’artère fémorale commune ou lésions fémorales associées avant revascularisation",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "aomi-orientation-supervised-vascular-rehabilitation-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "Envisager initialement un programme supervisé de réadaptation vasculaire ou d’APA, selon la situation du patient et les possibilités locales.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "orientation"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "aomi-guidance-intermittent-walking-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Privilégier un entraînement à la marche intermittente alternant périodes de marche et récupération.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "aomi-guidance-submaximal-pain-threshold-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Adapter l’intensité de la marche à une douleur sous-maximale et supportable, permettant de poursuivre l’entraînement après récupération.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "aomi-guidance-walking-program-fitt-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "frequency"
      },
      {
        "function": "prescriptionGuidance",
        "category": "duration"
      }
    ],
    "messages": {
      "clinician": "Envisager au moins trois séances hebdomadaires de 30 à 60 minutes pendant une période initiale d’environ douze semaines, puis organiser la poursuite régulière de l’activité.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "aomi-guidance-alternative-endurance-if-walking-difficult-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Si la marche est difficile ou insuffisamment tolérée, envisager une activité d’endurance alternative, par exemple vélo ou ergomètre à bras ou à jambes.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Marche difficile ou insuffisamment tolérée",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "adaptations",
            "index": 4
          },
          {
            "pathologyId": "aomi",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "aomi-guidance-strength-if-walking-difficult-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Si la marche est difficile ou insuffisamment tolérée, envisager des exercices adaptés des membres supérieurs ou un renforcement musculaire adapté.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Marche difficile ou insuffisamment tolérée",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.strength"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "adaptations",
            "index": 4
          },
          {
            "pathologyId": "aomi",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "aomi-guidance-footwear-skin-monitoring-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Vérifier la qualité du chaussage et la surveillance cutanée, particulièrement en cas de diabète ou de fragilité cutanée.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Diabète ou fragilité cutanée",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "adaptations",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "aomi-guidance-associated-risk-factors-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Vérifier la prise en compte des facteurs de risque et comorbidités associés, notamment tabagisme, HTA, diabète et coronaropathie.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Facteurs de risque et comorbidités associés à rechercher",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "aomi-guidance-statin-myalgia-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "En cas de douleurs musculaires à l’effort sous statine, évaluer leur imputabilité et discuter si nécessaire une adaptation thérapeutique, sans interrompre systématiquement l’activité physique.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement par statine et symptômes musculaires à l’effort",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "situations",
            "index": 1
          },
          {
            "pathologyId": "aomi",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "aomi-guidance-antiplatelet-bruising-risk-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "En cas de traitement antiagrégant plaquettaire, informer du risque d’hématome et tenir compte des activités comportant un risque important de choc ou de chute.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement antiagrégant plaquettaire",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "situations",
            "index": 2
          },
          {
            "pathologyId": "aomi",
            "field": "regles",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "aomi-guidance-deconditioning-assessment-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Rechercher un déconditionnement physique pouvant justifier une intensité initiale réduite, un fractionnement ou un accompagnement renforcé.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Déconditionnement physique à rechercher",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "situations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "aomi-guidance-claudication-walking-distance-assessment-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Évaluer systématiquement la claudication intermittente, le périmètre de marche et leur retentissement fonctionnel afin d’adapter le programme.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "situations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "aomi-safety-excessive-pain-recovery-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "warningSign"
      }
    ],
    "messages": {
      "clinician": "Si la douleur devient intense ou si sa récupération est anormalement longue, réduire l’intensité de l’exercice et réévaluer la tolérance et la situation vasculaire.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Douleur intense ou récupération anormalement longue",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "aomi-safety-chest-pain-malaise-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "warningSign"
      }
    ],
    "messages": {
      "clinician": "En cas de douleur thoracique ou de malaise à l’effort, interrompre immédiatement l’activité et envisager un avis médical.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Douleur thoracique ou malaise à l’effort",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "aomi-patient-delay-walking-pain-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "L’activité physique régulière aide à retarder l’apparition de la douleur à la marche."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "aomi",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "aomi-patient-walk-to-tolerable-pain-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "selfMonitoring"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Marcher jusqu’à une douleur supportable ne nécessitant pas un arrêt immédiat, puis récupérer avant de repartir."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "aomi",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "aomi-patient-regular-fractionated-walking-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Privilégier une marche régulière, même fractionnée en plusieurs périodes."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "aomi",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "aomi-patient-warmup-cooldown-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Respecter un échauffement progressif et un retour au calme en fin d’activité."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "crc",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "aomi-patient-footwear-foot-monitoring-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "safety"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Porter des chaussures adaptées et surveiller régulièrement l’état de ses pieds."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "crc",
            "index": 4
          },
          {
            "pathologyId": "aomi",
            "field": "crc_default",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "aomi-patient-break-up-sitting-001",
    "context": {
      "pathologiesAny": [
        "aomi"
      ]
    },
    "clinicalUses": [
      {
        "function": "patientInformation",
        "category": "practicalAdvice"
      }
    ],
    "messages": {
      "clinician": "",
      "patient": "Interrompre les périodes assises prolongées par quelques minutes de mouvement."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "selection": {
      "defaultSelected": false
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "aomi",
            "field": "crc",
            "index": 5
          }
        ]
      }
    }
  }
];

window.PATHOLOGY_KNOWLEDGE_REGISTRY =
  PATHOLOGY_KNOWLEDGE_REGISTRY;