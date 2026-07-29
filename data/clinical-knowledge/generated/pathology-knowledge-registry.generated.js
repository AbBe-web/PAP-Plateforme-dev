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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "HTA non contrôlée au suivi",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si l’HTA reste non contrôlée ou le redevient, réévaluer les conditions de reprise ou de progression de l’activité physique après stabilisation clinique."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Traitement antihypertenseur avec symptômes ou contexte évocateur d’hypotension pendant ou après l’effort",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, rechercher des vertiges, un malaise, une faiblesse ou une sensation lipothymique pendant ou après les séances, y compris dans les heures suivantes ; préciser les circonstances et les horaires de prise du traitement."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Traitement par bêtabloquant avec pratique effective d’activité physique",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier comment l’intensité a été appréciée pendant les séances, la tolérance observée et l’utilisation des sensations perçues plutôt que de la seule fréquence cardiaque."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Vertiges ou malaise pendant ou après l’effort",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, préciser les circonstances, le délai après l’effort, la durée, la récidive et l’évolution des vertiges ou malaises ; considérer une adaptation de l’activité physique et une réévaluation clinique ou thérapeutique selon la situation."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Traitement diurétique, notamment avec chaleur, effort prolongé ou symptômes pouvant évoquer une déshydratation",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, rechercher la tolérance à la chaleur et aux efforts prolongés, les modalités d’hydratation et d’éventuels symptômes pouvant évoquer une déshydratation ou un trouble électrolytique."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Contrôle glycémique insuffisant avec projet de progression vers une activité physique d’intensité élevée",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une progression vers une intensité élevée est envisagée, réévaluer le contrôle glycémique et les conditions de progression."
      }
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
      "clinician": "Si traitement exposant à l’hypoglycémie — notamment insuline, sulfamides hypoglycémiants ou glinides — : anticiper le risque lié à l’effort, prévoir selon la situation une autosurveillance glycémique avant et après l’activité, avoir une collation disponible et considérer une adaptation des apports glucidiques ou du traitement.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Traitement exposant à l’hypoglycémie avec pratique effective d’activité physique",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, rechercher les hypoglycémies survenues pendant ou après les séances, les mesures glycémiques réalisées, l’utilisation d’une collation et les adaptations effectivement mises en œuvre."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une douleur, une rougeur, une irritation, une plaie ou une difficulté liée au chaussage depuis le début des séances."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Mal perforant plantaire présent ou récemment traité",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si un mal perforant plantaire est présent ou récemment traité, réévaluer son évolution avant toute reprise d’activités sollicitant les membres inférieurs."
      }
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
      "status": "deprecated",
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Risque accru de pied diabétique identifié",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si un risque accru de pied diabétique est identifié, rechercher la tolérance des pieds à la pratique, les difficultés de chaussage et l’apparition de lésions."
      }
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
      "clinician": "Si traitement exposant à l’hypoglycémie : vérifier que les modalités d’autosurveillance glycémique et de correction d’une éventuelle hypoglycémie sont adaptées à l’activité prévue.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement hypoglycémiant : insuline, glinides ou sulfamides hypoglycémiants",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "clinicalMoments": [
      {
        "moment": "initialAssessment",
        "condition": {
          "type": "clinicianCheck",
          "description": "Traitement exposant à l’hypoglycémie : insuline, sulfamides hypoglycémiants ou glinides",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Si traitement exposant à l’hypoglycémie : vérifier que les modalités d’autosurveillance glycémique et de correction d’une éventuelle hypoglycémie sont adaptées à l’activité prévue."
      },
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Traitement exposant à l’hypoglycémie avec activité physique débutée ou poursuivie",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier que les modalités d’autosurveillance glycémique et de correction d’une éventuelle hypoglycémie restent adaptées à l’activité réellement pratiquée et à sa tolérance."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Activité inhabituelle ou prolongée réalisée ou prévue",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une activité inhabituelle ou prolongée a été réalisée ou est prévue, examiner la tolérance glycémique et les adaptations des apports glucidiques ou du traitement effectivement utilisées ou envisagées."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Lésion du pied présente ou survenue depuis la dernière consultation",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une lésion du pied est présente ou est survenue, préciser son évolution et la tolérance des activités choisies avant de considérer leur poursuite ou leur adaptation."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Bilan récent toujours absent ou incomplet",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si le bilan reste absent ou incomplet, considérer la recherche de complications du diabète et de facteurs de risque cardiovasculaire."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la régularité de l’activité physique, la progression mise en œuvre et la tolérance à l’effort."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Séance continue difficilement tolérée ou fractionnement utilisé",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une séance continue est difficilement tolérée ou si un fractionnement est utilisé, réévaluer son utilité, sa tolérance et son adéquation à la pratique."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la dyspnée et la tolérance à l’intensité réellement pratiquée."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la réalisation, la tolérance et la progression du renforcement musculaire."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Dyspnée importante pendant l’activité physique",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une dyspnée importante est survenue, préciser les circonstances et reconsidérer l’intensité ou le fractionnement selon la situation."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Exacerbation récente ou survenue depuis la dernière consultation",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une exacerbation est survenue, réévaluer la reprise de l’activité physique, sa progression et sa tolérance."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Désaturation à l’effort connue ou suspectée",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une désaturation à l’effort est connue ou suspectée, réévaluer la tolérance et les adaptations de l’activité physique mises en place."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Désaturation persistante ou limitant la pratique",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si la désaturation persiste ou limite la pratique, reconsidérer le cadre de pratique et l’intérêt d’un encadrement spécialisé."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, vérifier systématiquement l’intégration d’un échauffement et d’un retour au calme progressifs dans les séances, ainsi que leur tolérance."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la réalisation, la tolérance et la progression du renforcement musculaire, avec respiration libre et sans blocage ventilatoire."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Traitement bradycardisant : bêtabloquant, vérapamil ou diltiazem",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier comment l’intensité a été appréciée pendant les séances et la tolérance observée, en tenant compte de la perception de l’effort plutôt que de la seule fréquence cardiaque."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Déconditionnement physique ou anxiété de reprise limitant la pratique après un événement coronarien",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si un déconditionnement physique ou une appréhension limite encore la pratique, reconsidérer la progressivité et le niveau d’accompagnement."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Interruption de l’activité physique de plusieurs semaines",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une interruption de plusieurs semaines est survenue, réévaluer le niveau de reprise et les conditions d’une progression adaptée."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Activité sportive intense ou compétition envisagée",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si un projet d’activité sportive intense ou de compétition apparaît ou évolue, reconsidérer la nécessité d’un bilan cardiologique complet et d’un avis spécialisé."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Traitement antiagrégant plaquettaire avec activité comportant un risque important de contact, de choc ou de chute",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une activité comportant un risque important de contact, de choc ou de chute est pratiquée ou envisagée, réévaluer le risque traumatique et les adaptations possibles."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la réalisation, la tolérance et la progression de l’entraînement à la marche intermittente."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement l’intensité de la douleur à la marche, le délai de récupération et la tolérance globale du programme."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la fréquence, la durée, la régularité et la progression réellement atteintes dans le programme de marche."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Marche difficile ou insuffisamment tolérée",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si la marche reste difficile ou insuffisamment tolérée, réévaluer sa tolérance et l’intérêt d’une activité d’endurance alternative."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Marche difficile ou insuffisamment tolérée",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si la marche reste limitée, réévaluer la réalisation et la tolérance des exercices adaptés des membres supérieurs ou du renforcement musculaire."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la qualité du chaussage, la tolérance cutanée et l’absence de lésion liée à la pratique."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Douleurs musculaires à l’effort sous statine",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si des douleurs musculaires à l’effort sont apparues sous statine, préciser leur relation avec l’effort, leur évolution et leur retentissement sur la pratique."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Traitement antiagrégant avec activité comportant un risque important de choc ou de chute",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une activité exposant aux chocs ou aux chutes est pratiquée ou envisagée, réévaluer le risque traumatique et les adaptations possibles."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Déconditionnement physique limitant encore la pratique",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si le déconditionnement physique limite encore la pratique, reconsidérer l’intensité, le fractionnement ou le niveau d’accompagnement."
      }
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
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la claudication intermittente, le périmètre de marche, leur évolution et leur retentissement fonctionnel."
      }
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
  },
  {
    "id": "icc-constraint-decompensated-heart-failure-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "temporaryContraindication"
      }
    ],
    "messages": {
      "clinician": "En cas d’insuffisance cardiaque décompensée, considérer le report de l’activité physique et une réévaluation clinique avant reprise ou progression.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Signes ou contexte évoquant une décompensation de l’insuffisance cardiaque",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "icc-constraint-severe-hemodynamic-arrhythmic-instability-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "temporaryContraindication"
      }
    ],
    "messages": {
      "clinician": "Une HTA sévère non contrôlée, une HTAP sévère symptomatique ou un trouble rythmique ventriculaire complexe constituent des éléments à vérifier avant d’envisager l’activité physique.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "HTA sévère non contrôlée, HTAP sévère symptomatique ou trouble rythmique ventriculaire complexe",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "icc-constraint-unstable-coronary-lvot-thrombus-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Un syndrome coronarien instable, un obstacle symptomatique ou sévère de la chambre de chasse du ventricule gauche, ou un thrombus intracardiaque à haut risque sont à considérer comme contre-indications à l’activité physique tant que la situation n’est pas réévaluée.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Syndrome coronarien instable, obstacle symptomatique ou sévère de la chambre de chasse du ventricule gauche, ou thrombus intracardiaque à haut risque",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "icc-constraint-recent-venous-thromboembolism-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "temporaryContraindication"
      }
    ],
    "messages": {
      "clinician": "Une thrombose veineuse profonde ou une embolie pulmonaire récente est à prendre en compte avant toute reprise d’activité physique.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Thrombose veineuse profonde ou embolie pulmonaire récente",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "contraintes",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "icc-constraint-acute-disease-or-current-inability-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "temporaryContraindication"
      }
    ],
    "messages": {
      "clinician": "Une affection aiguë inflammatoire ou infectieuse, ou une incapacité actuelle à pratiquer liée à une limitation motrice ou à une autre cause, justifie de différer ou d’adapter l’activité selon l’évaluation clinique.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Affection aiguë inflammatoire ou infectieuse, ou incapacité actuelle à pratiquer une activité physique",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "contraintes",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "icc-constraint-sport-high-risk-cardiac-findings-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Pour une pratique sportive ou une activité intense, rechercher une dysfonction myocardique sévère, une péricardite chronique constrictive, une capacité d’effort inférieure à 5–6 METs ou des anomalies cardiologiques limitantes avant d’envisager la pratique.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Projet de sport ou d’activité intense avec élément cardiologique à risque",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "contraintes",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "icc-orientation-cardiac-rehabilitation-cardiology-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "rehabilitationFactor"
      }
    ],
    "messages": {
      "clinician": "Envisager une reprise ou une progression après réadaptation cardiaque et/ou avis cardiologique selon la stabilité, la capacité fonctionnelle et la tolérance.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Absence de réadaptation ou d’avis cardiologique, reprise après hospitalisation ou décompensation, limitation persistante ou situation complexe",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "orientation"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "icc-guidance-ischemia-angina-arrhythmia-threshold-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "intensity"
      }
    ],
    "messages": {
      "clinician": "Adapter l’intensité sous le seuil d’apparition d’une ischémie, d’un angor ou d’une arythmie lorsqu’un seuil ou une consigne cardiologique est connu.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Seuil d’ischémie, d’angor ou d’arythmie connu, ou consigne cardiologique disponible",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "icc-guidance-moderate-borg-progressive-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "intensity"
      }
    ],
    "messages": {
      "clinician": "Privilégier une intensité modérée, autour de Borg 3 à 5, avec une progression graduelle selon la tolérance.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "icc-guidance-weather-pollution-golden-rules-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "environment"
      }
    ],
    "messages": {
      "clinician": "Respecter les précautions habituelles, notamment selon la météo, la pollution et les règles d’or de la pratique cardiovasculaire.",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "adaptations",
            "index": 3
          },
          {
            "pathologyId": "icc",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "icc-guidance-altitude-over-2500m-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "environment"
      }
    ],
    "messages": {
      "clinician": "En cas de projet d’activité au-dessus de 2 500 m, envisager une adaptation ou un report selon la situation clinique et l’avis cardiologique.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Projet d’activité en altitude supérieure à 2 500 m",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "adaptations",
            "index": 4
          },
          {
            "pathologyId": "icc",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "icc-guidance-cold-water-under-25c-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "environment"
      }
    ],
    "messages": {
      "clinician": "En cas d’activité aquatique dans une eau inférieure à 25 °C, envisager une adaptation ou un évitement selon la stabilité clinique et la tolérance.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Projet d’activité aquatique dans une eau inférieure à 25 °C",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "icc-guidance-beta-blocker-borg-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Sous bêtabloquant, la fréquence cardiaque peut moins bien refléter l’intensité ; utiliser aussi l’échelle de Borg et les sensations perçues.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement bêtabloquant actuel",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "icc-guidance-diuretic-dehydration-electrolytes-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Sous diurétique, être vigilant vis-à-vis de la déshydratation et des troubles électrolytiques, notamment en cas de chaleur ou d’effort prolongé.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement diurétique actuel",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Traitement diurétique actuel, notamment avec pratique par temps chaud, effort prolongé ou symptômes pouvant évoquer une mauvaise tolérance",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, rechercher la tolérance à la chaleur et aux efforts prolongés, les modalités d’hydratation, le respect des conseils donnés et d’éventuels symptômes de déshydratation ou de trouble électrolytique."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "icc-safety-fatigue-exercise-intolerance-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "En cas de fatigue excessive, d’intolérance à l’effort, de récupération anormalement longue ou de baisse de capacité, rechercher notamment une progression trop rapide, une récupération insuffisante, une affection intercurrente, une mauvaise tolérance thérapeutique ou une aggravation cardiaque.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Fatigue excessive, intolérance à l’effort, récupération anormalement longue ou baisse de capacité",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la tolérance à l’effort, l’essoufflement, la fatigue inhabituelle, la récupération et l’évolution de la capacité physique depuis la dernière consultation."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "icc-safety-cardiac-warning-symptoms-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "warningSign"
      }
    ],
    "messages": {
      "clinician": "En cas de dyspnée inhabituelle ou aggravée, de douleur thoracique, de palpitations, de vertiges ou de malaise pendant ou après l’activité, envisager l’arrêt ou l’adaptation de la progression et une réévaluation clinique ou spécialisée selon la situation.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Dyspnée inhabituelle ou aggravée, douleur thoracique, palpitations, vertiges ou malaise pendant ou après l’activité",
      "machineEvaluable": false
    },
    "presentationTargets": [],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Dyspnée inhabituelle ou aggravée, douleur thoracique, palpitations, vertiges ou malaise pendant ou après les séances",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, préciser les circonstances et l’évolution des symptômes ; envisager l’interruption ou l’adaptation de la progression et une réévaluation clinique ou spécialisée selon la situation."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "icc-guidance-muscular-symptoms-medications-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "En cas de crampes, de myalgies ou de faiblesse musculaire inhabituelle, considérer notamment une déshydratation, un trouble électrolytique sous diurétique, un effet médicamenteux ou une progression inadaptée.",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Crampes, myalgies ou faiblesse musculaire inhabituelle pendant ou après l’activité",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Crampes, myalgies ou faiblesse musculaire inhabituelle pendant ou après les séances, notamment sous diurétique",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, considérer notamment une déshydratation, un trouble électrolytique, un effet médicamenteux ou une progression inadaptée."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-referentiel-001",
      "has-icc-synthese-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "icc-patient-weather-pollution-golden-rules-001",
    "context": {
      "pathologiesAny": [
        "icc"
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
      "patient": "Respecter les précautions habituelles selon la météo et la pollution, ainsi que les règles d’or de la pratique cardiovasculaire."
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
    "relatedResourceIds": [
      "has-icc-information-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "icc",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "icc-patient-progressive-adapted-intensity-001",
    "context": {
      "pathologiesAny": [
        "icc"
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
      "patient": "Respecter une intensité d’effort adaptée et augmenter progressivement la durée et l’intensité selon la tolérance."
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
    "relatedResourceIds": [
      "has-icc-information-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "icc",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "icc-patient-monitor-exercise-tolerance-001",
    "context": {
      "pathologiesAny": [
        "icc"
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
      "patient": "Surveiller sa tolérance à l’effort, notamment l’essoufflement, la fatigue inhabituelle et la récupération."
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "patientInformation"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        }
      }
    ],
    "selection": {
      "defaultSelected": true
    },
    "evidenceSourceIds": [],
    "relatedResourceIds": [
      "has-icc-information-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "icc",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "icc-patient-stop-warning-symptoms-001",
    "context": {
      "pathologiesAny": [
        "icc"
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
      "patient": "Interrompre l’activité physique en cas de malaise, de douleur thoracique ou d’essoufflement inhabituel et demander un avis médical selon la situation."
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
    "relatedResourceIds": [
      "has-icc-information-001"
    ],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "icc",
            "field": "crc",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "dt1-constraint-hyperglycemia-ketones-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "G > 2,5 g/L (13.9 mM) ou cétonémie > 0.5 mM/L en début d’exercice → éviter séance et corriger",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "G > 2,5 g/L (13.9 mM) ou cétonémie > 0.5 mM/L en début d’exercice",
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
            "pathologyId": "dt1",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "dt1-constraint-positive-ketones-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Cétonémie > 0,5 mmol/L ou cétonurie positive → différer activité",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Cétonémie > 0,5 mmol/L ou cétonurie positive",
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
            "pathologyId": "dt1",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt1-constraint-recent-severe-hypoglycemia-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Hypoglycémie sévère (≤2.8 mM, 0.5 g ou intervention autre personne) récente (<24 h) → contre-indication temporaire",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Hypoglycémie sévère récente depuis moins de 24 heures",
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
            "pathologyId": "dt1",
            "field": "contraintes",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "dt1-constraint-recent-mild-hypoglycemia-risk-sport-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "Hypoglycémie légère récente (2.9-3.9 mM, 0.5-0.7 g) → prudence renforcée, éviter sports à risque isolé <button type='button' class='info-trigger info-hitbox' data-info='ski alpin, escalade, natation, randonnée en solitaire'><span class='info-icon'>i</span></button>",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Hypoglycémie légère récente avec activité à risque isolé",
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
            "pathologyId": "dt1",
            "field": "contraintes",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "dt1-constraint-uncontrolled-complicated-intense-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "DT1 déséquilibré (HbA1C ↑) ou ancien ± compliqué <button type='button' class='info-trigger info-hitbox' data-info='rétinopathie proliférative instable, dysautonomie sévère, néphropathie, pathologie CV dont HTA'><span class='info-icon'>i</span></button> → CI AP intense (aérobie ou RM avec fortes charges)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "DT1 déséquilibré, ancien ou compliqué avec projet d’activité intense",
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
            "pathologyId": "dt1",
            "field": "contraintes",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "dt1-constraint-proliferative-retinopathy-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "Rétinopathie proliférante sévère <button type='button' class='info-trigger info-hitbox' data-info='polycoagulée ou non stabilisée'><span class='info-icon'>i</span></button> → éviter efforts violents et force intense (RM avec Valsalva)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Rétinopathie proliférante sévère",
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
            "pathologyId": "dt1",
            "field": "contraintes",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "dt1-constraint-plantar-ulcer-lower-limb-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Mal perforant plantaire → CI temporaire aux activités des membres inférieurs",
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
            "pathologyId": "dt1",
            "field": "contraintes",
            "index": 6
          }
        ]
      }
    }
  },
  {
    "id": "dt1-guidance-diabetologist-coordination-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Coordination diabétologue +++",
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
            "pathologyId": "dt1",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "dt1-guidance-anticipate-insulin-carbohydrates-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Anticiper AP (si possible) pour adapter dose insuline et/ou apport glucides",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement l’anticipation des séances et les adaptations d’insuline ou d’apports glucidiques effectivement utilisées."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt1-guidance-preexercise-glucose-targets-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Prendre glycémie avant AP : viser 1.3-1.9 g (7.2-10.5 mM) si AP aérobie modérée, 0.9-1.3 g (5-7.2 mM) avant AP anaérobie/intense",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la glycémie avant l’activité, sa tendance et son adéquation avec le type d’effort pratiqué."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "dt1-guidance-monitoring-material-snacks-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Avoir matériel + collations pour surveillance glycémique et correction hypoglycémie",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la disponibilité et l’utilisation du matériel de surveillance et des collations de correction."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "dt1-guidance-strength-before-aerobic-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Renforcement musculaire avant aérobie possible pour limiter risque hypoglycémie",
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
            "pathologyId": "dt1",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "dt1-guidance-unusual-exercise-vigilance-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Vigilance particulière si effort inhabituel",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, rechercher systématiquement la réalisation d’un effort inhabituel et réévaluer la réponse glycémique et les adaptations utilisées."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "adaptations",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "dt1-guidance-footwear-daily-foot-check-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Chaussage adapté + contrôle quotidien des pieds",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, vérifier systématiquement le chaussage, le contrôle des pieds et la survenue éventuelle de lésions liées à la pratique."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "adaptations",
            "index": 6
          }
        ]
      }
    }
  },
  {
    "id": "dt1-situation-respect-contraindications-limitations-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Respect des CI/limitations",
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
            "pathologyId": "dt1",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "dt1-guidance-autonomic-neuropathy-risks-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Neuropathie autonome à risque accru d’hypoglycémie, d’hypotension orthostatique, de thermorégulation réduite et de pathologie coronarienne",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Neuropathie autonome connue ou suspectée",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Neuropathie autonome connue ou suspectée",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une neuropathie autonome est connue ou suspectée, réévaluer la tolérance, les symptômes et les adaptations de la pratique."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt1-guidance-delayed-nocturnal-hypoglycemia-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Risque d’hypoglycémie retardée jusqu’à 24 h, surtout nocturne",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, rechercher systématiquement les hypoglycémies retardées ou nocturnes après les séances et réévaluer la surveillance mise en place."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "dt1-reference-microvascular-cardiovascular-complications-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Complications microvasculaires/CV fréquentes",
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
            "pathologyId": "dt1",
            "field": "situations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "dt1-guidance-cgm-pump-exercise-management-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "MCG (capteur SC) ou pompe à insuline peut faciliter la gestion de l’effort",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Utilisation d’un capteur de glucose ou d’une pompe à insuline",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Utilisation d’un capteur de glucose ou d’une pompe à insuline",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si un capteur ou une pompe est utilisé, réévaluer son utilisation pendant l’activité et l’exploitation des données observées."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "situations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "dt1-rule-prolonged-aerobic-carbohydrates-insulin-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI activité aérobie prolongée prévue → anticiper glucides et/ou réduction insuline (hypogly)",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.endurance"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Activité aérobie prolongée réalisée ou prévue",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une activité aérobie prolongée a été réalisée ou est prévue, réévaluer les adaptations glucidiques ou d’insuline utilisées et leur efficacité."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "dt1-rule-intense-anaerobic-transient-hyperglycemia-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI activité intense ou anaérobie → surveiller possible hyperglycémie transitoire",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Activité intense ou anaérobie pratiquée ou prévue",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.otherActivity"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "clinicianCheck",
          "description": "Activité intense ou anaérobie réalisée ou prévue",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si une activité intense ou anaérobie a été réalisée ou est prévue, réévaluer la réponse glycémique pendant et après l’effort."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt1-rule-low-falling-glucose-treat-before-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI glycémie basse ou tendance descendante → resucrer avant de débuter",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la survenue d’une glycémie basse ou descendante avant l’activité et la conduite effectivement mise en œuvre."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "dt1-rule-hypoglycemia-symptoms-stop-treat-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI symptômes d’hypoglycémie pendant AP → arrêter, contrôler glycémie, resucrer",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, rechercher systématiquement des symptômes d’hypoglycémie pendant l’activité et réévaluer la conduite suivie."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "dt1-rule-afternoon-major-session-nocturnal-vigilance-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI séance l’après-midi ou importante → vigilance nocturne renforcée",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, rechercher systématiquement les séances réalisées l’après-midi ou particulièrement importantes et la surveillance nocturne mise en place."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "dt1",
            "field": "regles",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "dt1-rule-neuropathy-podiatric-foot-care-activity-choice-001",
    "context": {
      "pathologiesAny": [
        "dt1"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "SI neuropathie ou problème podologique → renforcer soins des pieds et choix activités",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Neuropathie ou problème podologique",
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
            "pathologyId": "dt1",
            "field": "regles",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "dt1-patient-glucose-monitoring-001",
    "context": {
      "pathologiesAny": [
        "dt1"
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
      "patient": "Importance de surveiller sa glycémie avant, pendant et après l’effort"
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
            "pathologyId": "dt1",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "dt1",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "dt1-patient-rapid-sugar-001",
    "context": {
      "pathologiesAny": [
        "dt1"
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
      "patient": "Gardez toujours une source de sucre rapide avec soi"
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
            "pathologyId": "dt1",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "dt1",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "dt1-patient-new-activity-adjustments-001",
    "context": {
      "pathologiesAny": [
        "dt1"
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
      "patient": "Chaque activité nouvelle peut nécessiter d’adapter les apports glucidiques ou l’insuline"
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
            "pathologyId": "dt1",
            "field": "crc",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "dt1-patient-evening-night-monitoring-001",
    "context": {
      "pathologiesAny": [
        "dt1"
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
      "patient": "Après une grosse séance, surveillez la glycémie également le soir et la nuit"
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
            "pathologyId": "dt1",
            "field": "crc",
            "index": 3
          },
          {
            "pathologyId": "dt1",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "dt1-patient-footwear-foot-check-001",
    "context": {
      "pathologiesAny": [
        "dt1"
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
      "patient": "Bon chaussage et contrôle quotidien des pieds recommandés"
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
            "pathologyId": "dt1",
            "field": "crc",
            "index": 4
          },
          {
            "pathologyId": "dt1",
            "field": "crc_default",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "dt1-patient-regular-movement-001",
    "context": {
      "pathologiesAny": [
        "dt1"
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
      "patient": "Bouger régulièrement apporte plus de bénéfices que rester inactif"
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
            "pathologyId": "dt1",
            "field": "crc",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "obesite-constraint-weight-bearing-limitations-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "Limitations des activités physiques en charge (rachis, hanches, genoux, chevilles)",
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
            "pathologyId": "obesite",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "obesite-constraint-no-specific-contraindication-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "Pas de contre-indication spécifique",
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
            "pathologyId": "obesite",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "obesite-guidance-low-impact-unloaded-activities-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Privilégier les activités physiques en décharge (natation, aquagym) ou à faible impact (vélo ± électrique, marche nordique)",
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
            "pathologyId": "obesite",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "obesite-guidance-realistic-initial-goals-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Définir des objectifs initiaux réalistes",
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
            "pathologyId": "obesite",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "obesite-guidance-progressive-fractionated-start-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Progressivité ++ (fractionner l’activité physique au début)",
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
            "pathologyId": "obesite",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "obesite-guidance-endurance-and-strength-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Associer endurance et renforcement musculaire",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, vérifier systématiquement si les activités d’endurance et le renforcement musculaire prescrits ont pu être réalisés, ainsi que leur tolérance."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "obesite",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "obesite-guidance-daily-physical-activity-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Valoriser l’augmentation de l’activité physique quotidienne",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement l’évolution de l’activité physique quotidienne et les changements réellement mis en œuvre."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "obesite",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "obesite-guidance-comorbidity-screening-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Dépister les comorbidités +++ (cardiovasculaires, pulmonaires, ostéoarticulaires)",
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
            "pathologyId": "obesite",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "obesite-guidance-frequent-deconditioning-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Déconditionnement fréquent à l’effort",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement le déconditionnement à l’effort, son évolution et son retentissement sur la pratique."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "obesite",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "obesite-guidance-psychological-barriers-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Freins psychologiques ou expériences négatives antérieures possibles",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, rechercher systématiquement les freins psychologiques ou expériences négatives ayant limité la pratique depuis la consultation précédente."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "obesite",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "obesite-rule-lower-limb-pain-adapt-continue-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI apparition de douleurs des membres inférieurs → ALORS adapter et poursuivre l’activité physique",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, rechercher systématiquement l’apparition de douleurs des membres inférieurs, les adaptations réalisées et la poursuite effective de l’activité physique."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "obesite",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "obesite-rule-low-back-pain-reassure-adapt-continue-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI lombalgie (redistribution des charges lombaires) → ALORS rassurer (souvent transitoire), adapter et poursuivre l’activité physique",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une lombalgie, son évolution, les adaptations réalisées et la poursuite de l’activité physique."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "obesite",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "obesite-rule-unusual-dyspnea-poor-tolerance-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI essoufflement inhabituel ou mauvaise tolérance → ALORS réévaluation clinique à considérer",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, rechercher systématiquement un essoufflement inhabituel ou une mauvaise tolérance depuis la consultation précédente et reconsidérer la situation clinique."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "obesite",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "obesite-rule-early-discouragement-simple-progressive-goals-001",
    "context": {
      "pathologiesAny": [
        "obesite"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI découragement rapide → ALORS privilégier objectifs simples et progressifs",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "prescription.general"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, rechercher systématiquement un découragement rapide et réévaluer l’adéquation des objectifs et de la progression."
      }
    ],
    "evidenceSourceIds": [],
    "relatedResourceIds": [],
    "metadata": {
      "status": "active",
      "version": "1",
      "migration": {
        "legacyOrigins": [
          {
            "pathologyId": "obesite",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "obesite-patient-low-impact-unloaded-activities-001",
    "context": {
      "pathologiesAny": [
        "obesite"
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
      "patient": "privilégier les activités à faible impact ou en décharge (aquatiques, vélo, marche nordique)"
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
            "pathologyId": "obesite",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "obesite",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "obesite-patient-progressive-duration-intensity-001",
    "context": {
      "pathologiesAny": [
        "obesite"
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
      "patient": "être progressif dans la durée et l’intensité"
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
            "pathologyId": "obesite",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "obesite",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "obesite-patient-every-step-beneficial-001",
    "context": {
      "pathologiesAny": [
        "obesite"
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
      "patient": "chaque pas en plus est bénéfique"
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
            "pathologyId": "obesite",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "obesite",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "obesite-patient-strength-preserves-muscle-001",
    "context": {
      "pathologiesAny": [
        "obesite"
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
      "patient": "le renforcement musculaire aide à préserver la masse musculaire"
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
            "pathologyId": "obesite",
            "field": "crc",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "obesite-patient-benefits-without-weight-loss-001",
    "context": {
      "pathologiesAny": [
        "obesite"
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
      "patient": "les effets positifs de l’activité physique existent même en l’absence de diminution du poids"
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
            "pathologyId": "obesite",
            "field": "crc",
            "index": 4
          }
        ]
      }
    }
  }
];

window.PATHOLOGY_KNOWLEDGE_REGISTRY =
  PATHOLOGY_KNOWLEDGE_REGISTRY;