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
  },
  {
    "id": "icc-constraint-decompensated-or-severe-conditions-001",
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
      "clinician": "SI IC décompensée, HTA sévère non contrôlée, HTAP sévère symptomatique, tr rythmique ventriculaire complexe → CI à l’AP",
      "patient": ""
    },
    "condition": {
      "type": "always"
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
    "id": "icc-constraint-unstable-coronary-obstruction-thrombus-001",
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
      "clinician": "SI syndrome coronarien instable, obstacle symptomatique et/ou sévère sur la chambre de chasse du VG, thrombus intracardiaque à haut risque → CI AP",
      "patient": ""
    },
    "condition": {
      "type": "always"
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
    "id": "icc-constraint-recent-dvt-pe-001",
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
      "clinician": "SI TVP ± EP récente → CI AP",
      "patient": ""
    },
    "condition": {
      "type": "always"
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
    "id": "icc-constraint-acute-inflammatory-infectious-or-disability-001",
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
      "clinician": "SI pathologie aiguë inflammatoire ou infectieuse, incapacité à pratique AP liée à handicap moteur (ostéoarticulaire ou neurologique) ou autre cause → CI AP",
      "patient": ""
    },
    "condition": {
      "type": "always"
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
    "id": "icc-constraint-severe-myocardial-or-low-capacity-sport-001",
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
      "clinician": "SI dysfonction myocardique sévère, péricardite chronique constrictive, faible capacité d’effort (<5-6 METs), anomalies ETT (ischémie, majoration fuite mitrale, asynchronisme de contraction et/ou HTAP) → CI pratique sportive",
      "patient": ""
    },
    "condition": {
      "type": "always"
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
    "id": "icc-guidance-rehabilitation-cardiology-opinion-001",
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
      "clinician": "Prescription AP après idéalement séjour en réadaptation cardiaque et avis cardiologique",
      "patient": ""
    },
    "condition": {
      "type": "always"
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
    "id": "icc-guidance-adapt-intensity-ischemia-angina-arrhythmia-threshold-001",
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
      "clinician": "Intensité AP à adapter au seuil d’apparition ischémie/angor/arythmie (ETT, avis cardiologique)",
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
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la tolérance à l’intensité prescrite et l’apparition éventuelle d’ischémie, d’angor ou d’arythmie."
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
      "clinician": "Intensité modérée (≈ Borg 3–5) avec progressivité",
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
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "icc-guidance-weather-pollution-precautions-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "respecter les règles habituelles de précaution, notamment selon la météo et la pollution (10 règles d'or)",
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
          }
        ]
      }
    }
  },
  {
    "id": "icc-guidance-altitude-cold-water-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Adapter/éviter AP si altitude > 2500 m, dans eau < 25°",
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
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "icc-situation-beta-blocker-borg-001",
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
      "clinician": "Traitement bêtabloquant → fréquence cardiaque peu fiable → utiliser échelle de Borg",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement bêtabloquant présent ou à vérifier.",
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
          "description": "Traitement bêtabloquant présent ou à vérifier.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si un traitement bêtabloquant est présent, réévaluer l’utilisation de l’échelle de Borg plutôt que de la fréquence cardiaque pour guider l’intensité."
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
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "icc-situation-diuretic-dehydration-electrolytes-001",
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
      "clinician": "Traitement diurétique → risque de déshydratation et troubles ioniques",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement diurétique présent ou à vérifier.",
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
          "description": "Traitement diurétique présent ou à vérifier.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si un traitement diurétique est présent, rechercher une déshydratation ou des troubles ioniques en lien avec la pratique."
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
    "id": "icc-rule-fatigue-intolerance-adapt-intensity-001",
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
      "clinician": "SI fatigue excessive ou intolérance à l’effort → ALORS adapter l’intensité",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une fatigue excessive ou une intolérance à l’effort et les adaptations d’intensité réalisées."
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
    "id": "icc-rule-cardiac-symptoms-specialist-opinion-001",
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
      "clinician": "SI symptômes cardiaques (dyspnée inhabituelle, palpitations, malaise) → ALORS avis spécialisé",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement la survenue de symptômes cardiaques depuis la consultation précédente et reconsidérer la situation clinique."
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
    "id": "icc-rule-extreme-environment-adapt-avoid-001",
    "context": {
      "pathologiesAny": [
        "icc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI environnement extrême (chaleur, froid, altitude > 2500 m) → ALORS adapter ou éviter",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une exposition à un environnement extrême et les adaptations ou évitements mis en œuvre."
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
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "icc-rule-muscle-symptoms-hypokalemia-diuretic-statins-001",
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
      "clinician": "SI symptômes musculaires → ALORS recherche hypokaliémie sous diurétique, statines (rare)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Symptômes musculaires et traitement diurétique ou statine présents ou à vérifier.",
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
          "description": "Symptômes musculaires et traitement diurétique ou statine présents ou à vérifier.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, si des symptômes musculaires sont présents, rechercher une hypokaliémie sous diurétique ou un effet indésirable musculaire sous statine."
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
    "id": "icc-patient-weather-pollution-precautions-001",
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
      "patient": "Respect particulièrement important des règles de précaution (selon pollution et conditions météo, 10 règles du club des cardiologues du sport)"
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
    "id": "icc-patient-adapted-progressive-intensity-001",
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
      "patient": "respecter une intensité d’effort adaptée et progressive"
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
      "patient": "surveiller sa tolérance à l’effort (essoufflement, fatigue inhabituelle)"
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
    "id": "icc-patient-stop-for-warning-symptoms-001",
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
      "patient": "interrompre l’activité physique en cas de malaise, douleur thoracique ou essoufflement inhabituel"
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
    "id": "asthme-constraint-uncontrolled-recent-crisis-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "CI = Asthme non contrôlé / symptômes fréquents / crise récente",
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
            "pathologyId": "asthme",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "asthme-constraint-unstable-comorbidity-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "CI = Comorbidité non stabilisée (CV notamment)",
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
            "pathologyId": "asthme",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "asthme-constraint-scuba-diving-risk-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "CI = Plongée sous-marine en bouteille si ≥6 crises/an, asthme d’effort ou au froid, syndrome obstructif associé même mineur, crise récente (<48h-7j) (avis pneumologique indispensable)",
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
            "pathologyId": "asthme",
            "field": "contraintes",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "asthme-constraint-allergy-selected-sport-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "L = Allergie selon sport choisi (AP plein air en pleine saison pollinique…)",
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
            "pathologyId": "asthme",
            "field": "contraintes",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "asthme-constraint-chlorinated-pool-cold-pollution-bie-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "L = Natation dans piscine chlorée et sports d’endurance dans le froid ou si pic de pollution, ce qui peut déclencher une BIE <button type='button' class='info-trigger info-hitbox' data-info='Bronchoconstriction Induite par l’Exercice'><span class='info-icon'>i</span></button>",
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
            "pathologyId": "asthme",
            "field": "contraintes",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "asthme-guidance-progressivity-regularity-warmup-cooldown-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Importance du respect de : progressivité, régularité, échauffement et retour au calme",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la régularité de la pratique, la progressivité, l’échauffement et le retour au calme effectivement réalisés."
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
            "pathologyId": "asthme",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "asthme-guidance-bronchodilator-crisis-plan-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Avoir son bronchodilatateur sur soi + connaître CAT en cas de crise (tt, alerte, appli 114)",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement que le bronchodilatateur est disponible pendant la pratique et que la conduite à tenir en cas de crise est connue."
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
            "pathologyId": "asthme",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "asthme-guidance-nasal-breathing-moderate-effort-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Privilégier respiration nasale si effort modéré",
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
            "pathologyId": "asthme",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "asthme-guidance-nonchlorinated-pool-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "environment"
      }
    ],
    "messages": {
      "clinician": "Si natation en piscine : idéalement dans piscine non chlorée",
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
            "pathologyId": "asthme",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "asthme-guidance-ten-minute-blocks-low-tolerance-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "duration"
      }
    ],
    "messages": {
      "clinician": "Fractionner en blocs de 10 min si faible tolérance",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la tolérance aux séances et l’utilisation éventuelle d’un fractionnement en blocs de 10 minutes."
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
            "pathologyId": "asthme",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "asthme-guidance-adapt-place-time-weather-pollution-pollen-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "environment"
      }
    ],
    "messages": {
      "clinician": "Adapter l’AP (lieu/moment) selon météo, pollution, pollen",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement les adaptations du lieu ou du moment de pratique selon la météo, la pollution et les pollens."
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
            "pathologyId": "asthme",
            "field": "adaptations",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "asthme-situation-exertional-dyspnea-pulmonology-analysis-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Dyspnée d’effort : avis pneumologique pour analyse du mécanisme <button type='button' class='info-trigger info-hitbox' data-info='Asthme insuffisamment contrôlé, bronchoconstriction induite par l’exercice (BIE), syndrome d’hyperventilation, dyskinésie des cordes vocales'><span class='info-icon'>i</span></button>",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une dyspnée d’effort, son évolution, ses circonstances et les éléments permettant d’en analyser le mécanisme."
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
            "pathologyId": "asthme",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "asthme-situation-fear-of-exertion-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Peur de l’effort fréquente",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une peur de l’effort et son retentissement sur la pratique depuis la consultation précédente."
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
            "pathologyId": "asthme",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "asthme-situation-obesity-smoking-control-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Asthme ou tabagisme pouvant aggraver contrôle à prendre en charge",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Asthme ou tabagisme présent ou à vérifier.",
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
            "pathologyId": "asthme",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "asthme-rule-exercise-symptoms-analyse-mechanism-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI symptômes à l’effort → analyser le mécanisme et PEC adaptée",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement les symptômes survenus à l’effort, leurs circonstances et les adaptations de prise en charge mises en œuvre."
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
            "pathologyId": "asthme",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "asthme-rule-poor-control-optimize-before-intensification-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI asthme mal contrôlé → optimiser PEC avant intensification sportive (↑ tt et/ou observance)",
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
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement le contrôle de l’asthme, l’observance et la possibilité ou non d’intensifier la pratique."
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
            "pathologyId": "asthme",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "asthme-rule-exercise-induced-bronchoconstriction-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI symptômes après 3-8 min (<18) d’effort intense → évoquer BIE <button type='button' class='info-trigger info-hitbox' data-info='Bronchoconstriction induite par l’exercice'><span class='info-icon'>i</span></button> et adapter séance (échauffement et/ou ꞵ2 15 min avant effort)",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement des symptômes apparaissant après quelques minutes d’effort intense et les adaptations de séance utilisées."
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
            "pathologyId": "asthme",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "asthme-rule-rapid-dyspnea-hyperventilation-deconditioning-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI dyspnée très rapide avec examen habituel rassurant → évoquer hyperventilation/déconditionnement",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une dyspnée très rapide, son contexte et les éléments orientant vers une hyperventilation ou un déconditionnement."
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
            "pathologyId": "asthme",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "asthme-rule-cold-pollution-pollen-reduce-or-indoor-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "environment"
      }
    ],
    "messages": {
      "clinician": "SI froid/pollution/pollen élevé → privilégier intérieur ou intensité réduite",
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
            "pathologyId": "asthme",
            "field": "regles",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "asthme-rule-fear-negative-assessment-deconditioning-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI peur de l’effort avec bilan négatif et/ou déconditionnement +++ → rassurer et informer, progressivité/fractionnement (≤10 min)",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une peur persistante de l’effort, le déconditionnement, la progression et l’utilisation du fractionnement."
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
            "pathologyId": "asthme",
            "field": "regles",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "asthme-rule-clinical-stability-general-recommendations-001",
    "context": {
      "pathologiesAny": [
        "asthme"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI stabilité clinique → progression graduelle vers recommandations générales",
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
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la stabilité clinique et la progression graduelle vers les recommandations générales."
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
            "pathologyId": "asthme",
            "field": "regles",
            "index": 6
          }
        ]
      }
    }
  },
  {
    "id": "asthme-patient-regular-activity-control-001",
    "context": {
      "pathologiesAny": [
        "asthme"
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
      "patient": "L’activité physique régulière aide souvent à mieux contrôler l’asthme"
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
            "pathologyId": "asthme",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "asthme",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "asthme-patient-weather-pollution-pollen-atmo-001",
    "context": {
      "pathologiesAny": [
        "asthme"
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
      "patient": "Adaptez vos sorties à la météo, la pollution, les pollens (pas d’AP intense si pic de pollution, <a href='https://www.atmo-france.org/indiceatmo' target='_blank' rel='noopener noreferrer'>indice ATMO</a>)"
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
            "pathologyId": "asthme",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "asthme",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "asthme-patient-progressive-warmup-001",
    "context": {
      "pathologiesAny": [
        "asthme"
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
      "patient": "Commencer progressivement et bien s’échauffer avant l’effort"
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
            "pathologyId": "asthme",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "asthme",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "asthme-patient-carry-inhaler-crisis-plan-001",
    "context": {
      "pathologiesAny": [
        "asthme"
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
      "patient": "Avoir son inhalateur avec soi et savoir quoi faire en cas de crise"
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
            "pathologyId": "asthme",
            "field": "crc",
            "index": 3
          },
          {
            "pathologyId": "asthme",
            "field": "crc_default",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "asthme-patient-review-unusual-dyspnea-001",
    "context": {
      "pathologiesAny": [
        "asthme"
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
      "patient": "Refaire le point avec mon médecin en cas de gêne respiratoire inhabituelle à l’effort"
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
            "pathologyId": "asthme",
            "field": "crc",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "avc-constraint-anticoagulant-contact-risk-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Traitement anticoagulant CI AP et sportives à risque de chocs",
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
            "pathologyId": "avc",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "avc-orientation-acute-subacute-rehabilitation-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "rehabilitationFactor"
      }
    ],
    "messages": {
      "clinician": "Idéal : Rééducation à la phase aigüe (<14j) et kiné et/ou APA phase subaigüe (14j-6 mois)",
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
            "pathologyId": "avc",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "avc-guidance-functional-assessment-before-prescription-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Selon le bilan fonctionnel à faire avant prescription AP",
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
            "pathologyId": "avc",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "avc-guidance-prioritize-endurance-walking-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Privilégier les activités d’endurance (marche +++)",
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
            "pathologyId": "avc",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "avc-guidance-add-strength-training-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Associer renforcement musculaire (pas de risque de majoration de spasticité)",
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
            "pathologyId": "avc",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "avc-guidance-continuous-or-interval-tolerance-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Proposer activité continue ou fractionnée selon tolérance",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la tolérance à la pratique et le recours éventuel à une activité continue ou fractionnée."
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
            "pathologyId": "avc",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "avc-guidance-daily-life-activities-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Encourager les activités de la vie quotidienne en complément",
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
            "pathologyId": "avc",
            "field": "adaptations",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "avc-guidance-progressivity-fatigue-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Progressivité ++ (fatigue fréquente)",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la progression de la durée et de l’intensité ainsi que la fatigue associée à la pratique."
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
            "pathologyId": "avc",
            "field": "adaptations",
            "index": 6
          }
        ]
      }
    }
  },
  {
    "id": "avc-situation-blood-pressure-monitoring-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Mesure tensionnelle préalable à prescription AP ++ (MAPA, automesure)",
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
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement les données tensionnelles disponibles et leur évolution en lien avec la pratique d’activité physique."
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
            "pathologyId": "avc",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "avc-situation-anticoagulant-adapt-activity-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Anticoagulant : adapter type d’AP (pas de chocs)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement anticoagulant présent ou à vérifier.",
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
          "description": "Traitement anticoagulant présent pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier les activités réellement pratiquées sous anticoagulant et l’absence d’exposition à un risque de chocs."
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
            "pathologyId": "avc",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "avc-situation-motivation-fatigue-depression-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "État motivationnel (fatigue, dépression post-AVC fréquentes)",
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
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la motivation, la fatigue et leur retentissement sur la pratique depuis la consultation précédente."
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
            "pathologyId": "avc",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "avc-situation-variable-functional-disability-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Handicap fonctionnel variable",
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
            "pathologyId": "avc",
            "field": "situations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "avc-rule-major-neurological-deficit-supervision-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "rehabilitationFactor"
      }
    ],
    "messages": {
      "clinician": "SI déficit neurologique important → ALORS encadrement recommandé (rééducation)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Déficit neurologique important présent ou à vérifier.",
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
            "pathologyId": "avc",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "avc-rule-severe-fatigue-fractionate-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI fatigue importante → ALORS fractionner les séances",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une fatigue importante pendant ou après la pratique et l’utilisation éventuelle d’un fractionnement des séances."
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
            "pathologyId": "avc",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "avc-rule-uncontrolled-cardiovascular-risk-reassess-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI facteurs de risque cardiovasculaire non contrôlés → ALORS réévaluation à considérer",
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
            "pathologyId": "avc",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "avc-rule-anticoagulant-no-contact-risk-001",
    "context": {
      "pathologiesAny": [
        "avc"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "SI anticoagulant → ALORS pas d’AP à risque de chocs",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement anticoagulant présent ou à vérifier.",
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
          "description": "Traitement anticoagulant présent pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier l’absence d’activité physique à risque de chocs sous anticoagulant."
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
            "pathologyId": "avc",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "avc-patient-regular-walking-001",
    "context": {
      "pathologiesAny": [
        "avc"
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
      "patient": "privilégier la marche régulière"
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
            "pathologyId": "avc",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "avc",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "avc-patient-progressive-duration-intensity-001",
    "context": {
      "pathologiesAny": [
        "avc"
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
            "pathologyId": "avc",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "avc",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "avc-patient-daily-life-activities-001",
    "context": {
      "pathologiesAny": [
        "avc"
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
      "patient": "profiter des activités de la vie quotidienne pour bouger davantage"
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
            "pathologyId": "avc",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "avc",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "avc-patient-slow-progression-encouragement-001",
    "context": {
      "pathologiesAny": [
        "avc"
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
      "patient": "ne pas se décourager malgré une progression lente"
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
            "pathologyId": "avc",
            "field": "crc",
            "index": 3
          },
          {
            "pathologyId": "avc",
            "field": "crc_default",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-constraint-no-specific-contraindication-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "Pas de CI spécifique si activité adaptée",
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
            "pathologyId": "parkinson",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-constraint-high-fall-risk-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "Risque de chute élevé → sécuriser environnement et activités",
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
            "pathologyId": "parkinson",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-constraint-orthostatic-hypotension-dysautonomia-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "Hypotension orthostatique / dysautonomie → prudence changements rapides de position",
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
            "pathologyId": "parkinson",
            "field": "contraintes",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-constraint-severe-axial-freezing-instability-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "Atteinte axiale sévère, freezing majeur ou instabilité importante → réévaluation fonctionnelle préalable",
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
            "pathologyId": "parkinson",
            "field": "contraintes",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-constraint-significant-cognitive-disorders-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "Troubles cognitifs significatifs → simplifier consignes et supervision renforcée",
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
            "pathologyId": "parkinson",
            "field": "contraintes",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-guidance-prescribe-from-diagnosis-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Prescrire l’AP dès le diagnostic en lien avec neurologue (± kiné)",
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
            "pathologyId": "parkinson",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-guidance-multimodal-program-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Associer endurance, renforcement, équilibre, mobilité et coordination",
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
            "pathologyId": "parkinson",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-orientation-apa-program-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "Programme d’APA idéal si disponible",
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
            "pathologyId": "parkinson",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-guidance-on-phase-sessions-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Privilégier séances pendant phases ON si fluctuations motrices",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement si les séances ont été programmées aux moments de meilleure mobilité et si cette adaptation a facilité la pratique."
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
            "pathologyId": "parkinson",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-guidance-auditory-visual-cueing-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Utiliser indiçage auditif ou visuel si troubles de la marche ou freezing (tempo cadence ±10%)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Troubles de la marche ou freezing présents ou à vérifier.",
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
          "description": "Troubles de la marche ou freezing présents pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier l’utilisation d’un indiçage auditif ou visuel et son utilité pour la marche ou le freezing."
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
            "pathologyId": "parkinson",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-guidance-useful-activities-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Activités utiles : marche, marche nordique, vélo, tai-chi, yoga, danse",
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
            "pathologyId": "parkinson",
            "field": "adaptations",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-guidance-daily-task-exercises-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Exercices orientés tâches du quotidien utiles (marche, équilibre, tai-chi, danse)",
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
            "pathologyId": "parkinson",
            "field": "adaptations",
            "index": 6
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-guidance-increase-daily-activities-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Activités de la vie quotidienne à augmenter",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement l’évolution des activités de la vie quotidienne depuis la consultation précédente."
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
            "pathologyId": "parkinson",
            "field": "adaptations",
            "index": 7
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-guidance-activity-monitoring-tools-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Proposer mesures suivi AP (podomètre, smartphone)",
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
        "messageClinicianOverride": "Au suivi, examiner systématiquement les mesures disponibles et leur utilité pour documenter la régularité de l’activité physique."
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
            "pathologyId": "parkinson",
            "field": "adaptations",
            "index": 8
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-situation-cognitive-disorders-simple-instructions-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Troubles cognitifs : privilégier consignes simples et AP d’endurance",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Troubles cognitifs présents ou à vérifier.",
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
          "description": "Troubles cognitifs présents pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier si les consignes ont été suffisamment simples et si l’activité proposée a été comprise et réalisable."
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
            "pathologyId": "parkinson",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-situation-dysautonomia-position-changes-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Dysautonomie : prudence dans AP avec changement de positions (HTO)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Dysautonomie ou hypotension orthostatique présente ou à vérifier.",
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
          "description": "Dysautonomie ou hypotension orthostatique présente pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier la tolérance aux changements de position et les adaptations effectivement utilisées."
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
            "pathologyId": "parkinson",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-orientation-high-fall-risk-supervision-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "Risque de chute élevé → privilégier activité supervisée ou appui sécurisé",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Risque de chute élevé présent ou à vérifier.",
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
          "description": "Risque de chute élevé pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier le niveau de supervision, les appuis utilisés et les chutes ou quasi-chutes survenues."
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
            "pathologyId": "parkinson",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-situation-on-off-schedule-on-phase-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Fluctuations ON/OFF connues → programmer séance en phase ON",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Fluctuations ON/OFF connues ou à vérifier.",
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
          "description": "Fluctuations ON/OFF présentes pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier la programmation des séances en phase ON et son effet sur la réalisation de l’activité."
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
            "pathologyId": "parkinson",
            "field": "situations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-situation-freezing-cues-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Freezing à la marche → utiliser repères visuels ou rythme sonore",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Freezing à la marche présent ou à vérifier.",
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
          "description": "Freezing à la marche présent pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier l’utilisation de repères visuels ou d’un rythme sonore et leur utilité pendant la marche."
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
            "pathologyId": "parkinson",
            "field": "situations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-rule-good-tolerance-progress-frequency-duration-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI bonne tolérance → augmenter progressivement fréquence puis durée",
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
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la tolérance et la progression de la fréquence puis de la durée des séances."
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
            "pathologyId": "parkinson",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-rule-sudden-motor-worsening-repeated-falls-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI aggravation brutale motrice ou chutes répétées → réévaluation médicale",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une aggravation motrice brutale, des chutes répétées ou des incidents survenus pendant la période de pratique."
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
            "pathologyId": "parkinson",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-rule-faintness-dizziness-orthostatic-hypotension-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI malaise/pseudo-vertige → rechercher HTO",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement les malaises ou pseudo-vertiges survenus en lien avec la pratique ou les changements de position."
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
            "pathologyId": "parkinson",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-patient-regular-movement-benefits-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
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
      "patient": "Bouger régulièrement aide la marche, l’équilibre et l’autonomie"
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
            "pathologyId": "parkinson",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "parkinson",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-patient-slow-functional-progression-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
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
      "patient": "L’activité physique régulière peut ralentir l’évolution fonctionnelle de la maladie"
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
            "pathologyId": "parkinson",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "parkinson",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-patient-practice-best-mobility-times-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
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
      "patient": "Choisir les moments où l’on est le plus mobile pour pratiquer son activité physique"
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
            "pathologyId": "parkinson",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "parkinson",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-patient-short-sessions-useful-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
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
      "patient": "Même de courtes séances sont utiles"
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
            "pathologyId": "parkinson",
            "field": "crc",
            "index": 3
          },
          {
            "pathologyId": "parkinson",
            "field": "crc_default",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-patient-rhythmic-music-floor-cues-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
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
      "patient": "Marchez avec musique rythmée ou repères au sol si cela aide"
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
            "pathologyId": "parkinson",
            "field": "crc",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "parkinson-patient-balance-strength-training-001",
    "context": {
      "pathologiesAny": [
        "parkinson"
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
      "patient": "Travailler aussi l’équilibre et le renforcement musculaire"
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
            "pathologyId": "parkinson",
            "field": "crc",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "sep-constraint-acute-relapse-temporary-contraindication-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "temporaryContraindication"
      }
    ],
    "messages": {
      "clinician": "Poussée aiguë de SEP → CI temporaire",
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
            "pathologyId": "sep",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "sep-constraint-intense-activity-heat-humidity-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "AP intense en ambiance chaude ± humide → prudence (aggravation transitoire possible)",
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
            "pathologyId": "sep",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "sep-guidance-reassure-relapse-risk-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Rassurer contre fausses croyances : AP n’augmente pas le risque de poussée",
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
            "pathologyId": "sep",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "sep-guidance-multimodal-program-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Associer endurance + renforcement + équilibre + mobilité",
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
            "pathologyId": "sep",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "sep-guidance-progressivity-fractionation-daily-state-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Progressivité, fractionnement si besoin, adaptation à l’état du jour",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la progression, le recours éventuel au fractionnement et l’adaptation de la pratique à l’état du jour."
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
            "pathologyId": "sep",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "sep-guidance-heat-humidity-adaptations-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "environment"
      }
    ],
    "messages": {
      "clinician": "Si chaleur/humidité : intérieur frais, ↓ intensité, pauses régulières, hydratation",
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
            "pathologyId": "sep",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "sep-guidance-useful-activities-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Activités utiles : marche ± nordique, vélo, aquagym, Pilates, yoga, tai-chi, kickboxing selon capacités",
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
            "pathologyId": "sep",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "sep-orientation-framework-by-edss-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "rehabilitationFactor"
      }
    ],
    "messages": {
      "clinician": "Cadre selon <a href='http://medicalcul.free.fr/edssech.html' target='_blank' rel='noopener noreferrer' style='display:inline;color:inherit;text-decoration:underline;'>EDSS</a> : kiné ± APA si >6 (confort/fonctionnel), APA ± kiné si 3.5–6 (autonomie), ES ou autonomie si <3.5 (↓ fatigue, ↑ QDV)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Niveau de handicap selon EDSS connu ou à vérifier.",
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
            "pathologyId": "sep",
            "field": "adaptations",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "sep-situation-vesicosphincter-aquatic-precautions-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Troubles vésico-sphinctériens : précautions pour AP aquatique",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Troubles vésico-sphinctériens présents ou à vérifier.",
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
          "description": "Troubles vésico-sphinctériens présents pendant une pratique aquatique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier les précautions effectivement utilisées et la tolérance de la pratique aquatique."
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
            "pathologyId": "sep",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "sep-orientation-fall-risk-supervision-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "Risque de chute : activité supervisée ou avec appui sécurisé",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Risque de chute présent ou à vérifier.",
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
          "description": "Risque de chute présent pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier le cadre de supervision, les appuis utilisés et les chutes ou quasi-chutes survenues."
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
            "pathologyId": "sep",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "sep-situation-disability-edss-objectives-programs-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Handicap évalué par <a href='http://medicalcul.free.fr/edssech.html' target='_blank' rel='noopener noreferrer' style='display:inline;color:inherit;text-decoration:underline;'>EDSS</a> → objectifs/programmes différents",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Niveau de handicap selon EDSS connu ou à vérifier.",
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
            "pathologyId": "sep",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "sep-rule-acute-relapse-defer-structured-activity-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI poussée aiguë en cours → différer activité structurée et réévaluer ensuite",
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
            "pathologyId": "sep",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "sep-rule-symptom-worsening-stop-cool-recover-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI aggravation des symptômes pendant effort → arrêter, refroidir, récupérer puis réévaluer",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une aggravation des symptômes pendant l’effort et les mesures de récupération utilisées."
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
            "pathologyId": "sep",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "sep-rule-good-tolerance-increase-duration-frequency-001",
    "context": {
      "pathologiesAny": [
        "sep"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI bonne tolérance → augmenter progressivement durée puis fréquence",
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
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la tolérance et la progression de la durée puis de la fréquence de pratique."
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
            "pathologyId": "sep",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "sep-patient-regular-movement-benefits-001",
    "context": {
      "pathologiesAny": [
        "sep"
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
      "patient": "Bouger régulièrement améliore fatigue, mobilité, équilibre et qualité de vie"
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
            "pathologyId": "sep",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "sep",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "sep-patient-activity-does-not-trigger-relapses-001",
    "context": {
      "pathologiesAny": [
        "sep"
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
      "patient": "L’activité physique ne déclenche pas les poussées, même si certains symptômes peuvent augmenter transitoirement pendant l’effort"
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
            "pathologyId": "sep",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "sep",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "sep-patient-prefer-cool-environment-001",
    "context": {
      "pathologiesAny": [
        "sep"
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
      "patient": "Privilégiez un environnement frais"
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
            "pathologyId": "sep",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "sep",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-constraint-congestive-flare-temporary-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "temporaryContraindication"
      }
    ],
    "messages": {
      "clinician": "Poussée congestive <button type='button' class='info-trigger info-hitbox' data-info='augmentation en quelques jours des douleurs, douleurs nocturnes, raideur matinale >15 min, gonflement ou chaleur locale'><span class='info-icon'>i</span></button> → CI temporaire articulation concernée",
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
            "pathologyId": "arthrose",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-guidance-search-comorbidities-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Rechercher comorbidités modifiant l’AP : surpoids/obésité, diabète, RCV élevé",
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
            "pathologyId": "arthrose",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-guidance-deconditioning-overweight-start-low-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Si déconditionnement ++ et/ou surpoids → début faible/modéré puis progression selon tolérance",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Déconditionnement important et/ou surpoids présent ou à vérifier.",
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
          "description": "Déconditionnement important et/ou surpoids présent pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier la tolérance au niveau initial choisi et la progression effectivement réalisée."
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
            "pathologyId": "arthrose",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-guidance-targeted-and-general-exercises-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Associer RM ciblé articulation atteinte + exercices généraux (endurance, RM, mobilité)",
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
            "pathologyId": "arthrose",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-guidance-lower-limb-low-impact-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Arthrose MI → activités faible impact : marche adaptée (± bâtons), vélo, natation, aquagym",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Arthrose des membres inférieurs présente ou à vérifier.",
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
            "pathologyId": "arthrose",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-guidance-adapted-footwear-lower-limb-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Chaussage adapté si atteinte MI",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Atteinte des membres inférieurs présente ou à vérifier.",
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
            "pathologyId": "arthrose",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-guidance-search-kinesiophobia-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Rechercher kinésiophobie (fréquente)",
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
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la kinésiophobie et son retentissement sur la pratique depuis la consultation précédente."
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
            "pathologyId": "arthrose",
            "field": "adaptations",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-guidance-education-flare-postexercise-pain-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Éduquer sur adaptation AP en cas de poussée ou douleur post-exercice",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la survenue d’une poussée ou d’une douleur post-exercice et les adaptations réellement utilisées."
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
            "pathologyId": "arthrose",
            "field": "adaptations",
            "index": 6
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-orientation-physiotherapy-before-activity-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "rehabilitationFactor"
      }
    ],
    "messages": {
      "clinician": "SI raideur, déficit moteur ou instabilité marqués → ALORS kinésithérapie préalable",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Raideur, déficit moteur ou instabilité marqués présents ou à vérifier.",
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
            "pathologyId": "arthrose",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-situation-low-motivation-deconditioning-daily-activities-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI motivation faible et/ou déconditionnement ++ → ALORS activités du quotidien en 1ère étape",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Motivation faible et/ou déconditionnement important présent ou à vérifier.",
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
          "description": "Motivation faible et/ou déconditionnement important pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier la réalisation des activités du quotidien choisies comme première étape et leur progression."
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
            "pathologyId": "arthrose",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-situation-comorbidities-adapt-activity-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI comorbidités → ALORS adapter AP",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Comorbidité modifiant la pratique présente ou à vérifier.",
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
            "pathologyId": "arthrose",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-rule-congestive-flare-relative-rest-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI poussée congestive → ALORS repos relatif ± avis médical",
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
            "pathologyId": "arthrose",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-rule-persistent-pain-reduce-load-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI douleur durable après séance → ALORS diminuer charge",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une douleur durable après séance et vérifier la diminution de charge éventuellement mise en œuvre."
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
            "pathologyId": "arthrose",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-rule-impact-poorly-tolerated-low-impact-options-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "SI impact mal toléré → ALORS vélo/natation/aquatique/marche avec bâtons",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la tolérance aux impacts et les activités alternatives effectivement utilisées."
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
            "pathologyId": "arthrose",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-rule-after-weeks-off-restart-lower-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI arrêt plusieurs semaines → ALORS reprise à niveau inférieur puis progression",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement les interruptions prolongées, le niveau de reprise et la progression réalisée."
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
            "pathologyId": "arthrose",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-patient-exercise-first-line-no-wear-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
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
      "patient": "L’exercice est un traitement de 1ère intention à tous les stades : il n’use pas l’articulation"
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
            "pathologyId": "arthrose",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "arthrose",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-patient-combine-targeted-general-exercise-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
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
      "patient": "Associer exercices ciblés (renforcement, mobilité) et activité physique générale"
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
            "pathologyId": "arthrose",
            "field": "crc",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-patient-recognize-congestive-flare-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
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
      "patient": "Reconnaître une poussée congestive pour adapter temporairement l’activité physique"
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
            "pathologyId": "arthrose",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "arthrose",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-patient-distinguish-joint-pain-soreness-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
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
      "patient": "Différencier douleur articulaire et courbatures après effort inhabituel"
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
            "pathologyId": "arthrose",
            "field": "crc",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-patient-persistent-pain-reduce-intensity-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
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
      "patient": "Si douleur durable après séance → diminuer intensité"
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
            "pathologyId": "arthrose",
            "field": "crc",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-patient-adapted-footwear-lower-limb-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
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
      "patient": "Chaussage adapté si atteinte MI"
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
            "pathologyId": "arthrose",
            "field": "crc",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "arthrose-patient-weight-control-lower-limb-001",
    "context": {
      "pathologiesAny": [
        "arthrose"
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
      "patient": "Contrôle du poids utile pour les articulations des MI"
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
            "pathologyId": "arthrose",
            "field": "crc",
            "index": 6
          },
          {
            "pathologyId": "arthrose",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-constraint-acute-low-back-or-radicular-pain-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "temporaryContraindication"
      }
    ],
    "messages": {
      "clinician": "Lombalgie aiguë ou radiculalgie aiguë → contre-indication temporaire",
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
            "pathologyId": "lombalgie",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-constraint-recent-spinal-surgery-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "Suite opératoire récente rachidienne → adaptation nécessaire",
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
            "pathologyId": "lombalgie",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-guidance-maintain-physical-activity-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Maintenir une activité physique (traitement principal)",
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
            "pathologyId": "lombalgie",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-guidance-adapt-exercises-to-pain-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Adapter les exercices selon la douleur (éviter aggravation & propagation)",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement l’évolution de la douleur pendant et après les exercices ainsi que les adaptations effectivement utilisées."
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
            "pathologyId": "lombalgie",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-guidance-combine-endurance-strength-mobility-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Associer endurance, renforcement et mobilité (objectifs = personne normale)",
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
            "pathologyId": "lombalgie",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-guidance-motor-control-exercises-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Intégrer exercices de contrôle moteur (gainage, proprioception)",
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
            "pathologyId": "lombalgie",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-guidance-progressivity-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Progressivité ++",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la progression de la durée, de la fréquence ou de l’intensité de la pratique."
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
            "pathologyId": "lombalgie",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-situation-yellow-blue-black-flags-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Drapeaux jaunes <button type='button' class='info-trigger info-hitbox' data-info='Indicateurs psychosociaux d’un risque accru de passage à la chronicité'><span class='info-icon'>i</span></button>, bleus <button type='button' class='info-trigger info-hitbox' data-info='Facteurs de pronostic liés aux représentations perçues du travail et de l’environnement par le travail'><span class='info-icon'>i</span></button>, noirs <button type='button' class='info-trigger info-hitbox' data-info='Facteurs de pronostic liés à la politique de l’entreprise, au système de soins et d’assurance'><span class='info-icon'>i</span></button>",
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
            "pathologyId": "lombalgie",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-situation-effort-deconditioning-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Déconditionnement à l’effort",
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
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement le déconditionnement à l’effort et son évolution avec la reprise d’activité."
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
            "pathologyId": "lombalgie",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-situation-radicular-neurological-acute-flare-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Radiculalgies, signes neurologiques, poussées aiguës",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Radiculalgie, signe neurologique ou poussée aiguë présent ou à vérifier.",
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
            "pathologyId": "lombalgie",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-rule-strong-pain-increase-adapt-exercise-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI douleur augmente fortement → ALORS adapter ou modifier l’exercice",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une forte augmentation de la douleur et vérifier les adaptations ou modifications d’exercice utilisées."
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
            "pathologyId": "lombalgie",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-rule-fear-of-movement-reassure-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI peur du mouvement → ALORS rassurer (douleur ≠ lésion)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Peur du mouvement présente ou à vérifier.",
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
          "description": "Peur du mouvement présente pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier le retentissement de la peur du mouvement sur l’activité réalisée et l’évolution après réassurance."
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
            "pathologyId": "lombalgie",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-rule-inactivity-progressive-restart-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI inactivité → ALORS encourager reprise progressive",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la reprise progressive et le niveau d’activité réellement atteint depuis la consultation précédente."
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
            "pathologyId": "lombalgie",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-rule-biopsychosocial-impact-global-care-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI retentissement biopsychosocial → ALORS prise en charge globale à considérer",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Retentissement biopsychosocial présent ou à vérifier.",
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
            "pathologyId": "lombalgie",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-patient-stay-active-despite-pain-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
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
      "patient": "rester actif malgré la douleur (activité physique = traitement)"
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
            "pathologyId": "lombalgie",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "lombalgie",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-patient-progressive-exercise-restart-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
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
      "patient": "être progressif dans la reprise des exercices"
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
            "pathologyId": "lombalgie",
            "field": "crc",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-patient-exercises-not-worsening-symptoms-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
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
      "patient": "choisir des exercices n’aggravant pas les symptômes"
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
            "pathologyId": "lombalgie",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "lombalgie",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-patient-avoid-prolonged-rest-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
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
      "patient": "éviter le repos prolongé (repos = néfaste)"
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
            "pathologyId": "lombalgie",
            "field": "crc",
            "index": 3
          },
          {
            "pathologyId": "lombalgie",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "lombalgie-patient-treatment-effectiveness-pain-activity-daily-life-001",
    "context": {
      "pathologiesAny": [
        "lombalgie"
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
      "patient": "l’efficacité du traitement se mesure par la douleur ET par le niveau d’activité physique et les activités quotidiennes"
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
            "pathologyId": "lombalgie",
            "field": "crc",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "pr-constraint-articular-flare-temporary-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "temporaryContraindication"
      }
    ],
    "messages": {
      "clinician": "Poussée articulaire → CI temporaire pour articulations concernées",
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
            "pathologyId": "pr",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "pr-constraint-c1-c2-diastasis-cervical-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Diastasis C1-C2 → CI AP cervicale",
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
            "pathologyId": "pr",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "pr-constraint-extra-articular-flare-relative-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "Poussée extra articulaire (cœur, poumon, vascularite) → CI le plus souvent relative",
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
            "pathologyId": "pr",
            "field": "contraintes",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "pr-constraint-destructive-arthropathy-severe-lower-limb-steroids-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "Limitations : arthropathie destructrice (articulations concernées), atteinte sévère MI (sport d’impact), corticothérapie prolongée (risque tendineux et osseux)",
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
            "pathologyId": "pr",
            "field": "contraintes",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "pr-guidance-comorbidities-cardiovascular-risk-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Dépister/traiter comorbidités, surtout CV (<a href='https://ard.bmj.com/content/annrheumdis/early/2016/10/03/annrheumdis-2016-209775.full.pdf' target='_blank' rel='noopener noreferrer' style='display:inline;color:inherit;text-decoration:underline;'>RCV&nbsp;x1.5&nbsp;si&nbsp;PR selon Eular</a>)",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "pr-guidance-progressivity-fractionation-daily-state-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Progressivité (AP faible puis ↑), ± fractionnement selon état du jour",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la progressivité, le fractionnement éventuel et leur adaptation à l’état du jour."
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "pr-guidance-assess-orthotics-technical-aids-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Évaluer besoin de semelles, orthèses ou aides techniques",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "pr-guidance-adapt-by-das28-haq-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Adapter AP à évolutivité (<a href='https://www.4s-dawn.com/DAS28/' target='_blank' rel='noopener noreferrer' style='display:inline;color:inherit;text-decoration:underline;'>DAS28</a>) + état fonctionnel (<a href='http://medicalcul.free.fr/haq.html' target='_blank' rel='noopener noreferrer' style='display:inline;color:inherit;text-decoration:underline;'>HAQ</a>) : APA voire sport santé si DAS28 + HAQ ↓, sinon kiné ± APA",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "pr-guidance-combine-endurance-strength-mobility-balance-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Associer endurance, renforcement musculaire, mobilité et équilibre",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "pr-guidance-lower-limb-adapted-activities-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Si atteinte MI : marche adaptée ± bâtons, vélo, aquatique, yoga doux, tai-chi",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Atteinte des membres inférieurs présente ou à vérifier.",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "pr-guidance-intense-activity-cardiovascular-rheumatology-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Projet AP intense → évaluation RCV ++ et avis rhumatologique",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 6
          }
        ]
      }
    }
  },
  {
    "id": "pr-situation-articular-flare-relative-rest-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Poussée articulaire → repos relatif articulations concernées",
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "pr-orientation-marked-structural-damage-physiotherapy-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "rehabilitationFactor"
      }
    ],
    "messages": {
      "clinician": "Atteinte structurelle marquée : envisager kinésithérapie",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Atteinte structurelle marquée présente ou à vérifier.",
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "pr-orientation-joint-prosthesis-pre-post-surgery-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "rehabilitationFactor"
      }
    ],
    "messages": {
      "clinician": "Prothèse articulaire : idéal programme APA avant et post chirurgie ± kiné ciblée",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Prothèse articulaire ou projet d’arthroplastie présent ou à vérifier.",
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "pr-guidance-detect-kinesiophobia-reassure-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Dépister kinésiophobie + rassurer sur bénéfices de l’AP",
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
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la kinésiophobie et son retentissement sur la pratique depuis la consultation précédente."
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "pr-rule-localized-inflammatory-flare-relative-rest-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI poussée inflammatoire localisée → repos relatif des articulations concernées",
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "pr-rule-persistent-pain-reduce-load-change-modality-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI douleur durable après exercice → diminuer charge ou changer modalité",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une douleur durable après exercice et vérifier la diminution de charge ou le changement de modalité éventuellement mis en œuvre."
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "pr-rule-painful-feet-endurance-options-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "SI atteinte douloureuse des pieds → privilégier vélo, aquatique ou marche adaptée",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Atteinte douloureuse des pieds présente ou à vérifier.",
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
          "description": "Atteinte douloureuse des pieds pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier la tolérance des modalités d’endurance choisies et les adaptations réellement utilisées."
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "pr-orientation-stable-motivated-safe-autonomy-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "SI maladie stabilisée, patient motivé et apte à pratiquer seul en sécurité → envisager progression vers activité autonome",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Maladie stabilisée, patient motivé et aptitude à pratiquer seul en sécurité présentes ou à vérifier.",
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
          "description": "Conditions de progression vers une activité autonome réunies pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier la progression vers l’autonomie, la sécurité de la pratique et les difficultés rencontrées."
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "pr-patient-regular-movement-useful-treatment-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Bouger régulièrement est un traitement utile de la polyarthrite sans l’aggraver si elle est adaptée"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "pr",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "pr-patient-start-gently-progressively-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Commencer doucement puis continuer progressivement"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "pr",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "pr-patient-skip-adapt-session-pain-flare-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Savoir sauter/adapter une séance si majoration des douleurs articulaires ou poussée"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "pr",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "pr-patient-use-recommended-equipment-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Porter le matériel conseillé par son médecin (semelles, orthèse)"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "pr-patient-strength-training-protects-joints-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Le renforcement musculaire protège les articulations"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 4
          },
          {
            "pathologyId": "pr",
            "field": "crc_default",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "pr-patient-report-unusual-persistent-pain-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Signaler toute douleur inhabituelle persistante"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 5
          }
        ]
      }
    }
  },
  {
    "id": "spa-constraint-bamboo-spine-violent-sports-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Colonne bambou → CI sports violents à risque de fracture vertébrale",
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
            "pathologyId": "pr",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "spa-constraint-flare-or-pain-adapt-load-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "Poussée ou douleur → adapter AP et charge mécanique de la zone concernée",
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
            "pathologyId": "pr",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "spa-guidance-comorbidities-cardiovascular-risk-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Dépister/traiter comorbidités, surtout CV (<a href='https://ard.bmj.com/content/annrheumdis/early/2016/10/03/annrheumdis-2016-209775.full.pdf' target='_blank' rel='noopener noreferrer' style='display:inline;color:inherit;text-decoration:underline;'>RCV&nbsp;x1.5&nbsp;si&nbsp;SPA</a>)",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "spa-orientation-adapt-by-basdai-basfi-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "rehabilitationFactor"
      }
    ],
    "messages": {
      "clinician": "Adapter AP selon <a href='http://medicalcul.free.fr/basdai.html' target='_blank' rel='noopener noreferrer' style='display:inline;color:inherit;text-decoration:underline;'>BASDAI</a> + <a href='http://medicalcul.free.fr/basfi.html' target='_blank' rel='noopener noreferrer' style='display:inline;color:inherit;text-decoration:underline;'>BASFI</a> : kiné ± APA si maladie active (BASDAI ↑), sinon APA (inactivité/comorbidités/déconditionnement) ou sport santé",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "spa-guidance-simple-daily-life-exercises-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Privilégier exercices simples et intégrables à la vie quotidienne",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "spa-guidance-respiratory-thoracic-opening-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Ajouter travail respiratoire et ouverture thoracique si raideur costo-vertébrale",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Raideur costo-vertébrale présente ou à vérifier.",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "spa-guidance-useful-endurance-activities-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Vélo, marche, natation, aquatique souvent utiles",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "spa-situation-sacroiliac-lower-limb-limit-impact-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Atteinte sacro-iliaques/MI → limiter AP avec impact",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Atteinte sacro-iliaque ou des membres inférieurs présente ou à vérifier.",
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "spa-situation-bamboo-spine-violent-sport-duplicate-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Colonne bambou : CI sport violent à risque de chute ou de chocs",
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "spa-situation-severe-ankylosis-bone-risk-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Ankylose sévère : adapter AP au risque osseux (fracture), prévenir professionnel AP",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Ankylose sévère présente ou à vérifier.",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "prescription.general",
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "spa-guidance-detect-kinesiophobia-reassure-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Dépister kinésiophobie + rassurer sur bénéfices AP",
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
        "messageClinicianOverride": "Au suivi, réévaluer systématiquement la kinésiophobie et son retentissement sur la pratique depuis la consultation précédente."
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "spa-rule-localized-inflammatory-flare-adapt-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI poussée inflammatoire localisée → repos relatif local + adaptation charge/volume",
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "spa-rule-persistent-pain-reduce-load-change-modality-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI douleur durable après exercice → diminuer charge ou changer modalité",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement une douleur durable après exercice et vérifier la diminution de charge ou le changement de modalité éventuellement mis en œuvre."
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "spa-rule-unusual-symptom-worsening-stop-reassess-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI aggravation inhabituelle des symptômes → interrompre et réévaluer",
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
        "messageClinicianOverride": "Au suivi, rechercher systématiquement toute aggravation inhabituelle des symptômes, l’interruption éventuelle de la pratique et la réévaluation réalisée."
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "spa-orientation-stable-motivated-safe-autonomy-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "SI maladie stabilisée et patient motivé → envisager progression vers activité autonome sécurisée",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Maladie stabilisée et motivation pour une progression vers l’autonomie présentes ou à vérifier.",
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
          "description": "Conditions de progression vers une activité autonome réunies pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier la progression vers l’autonomie, la sécurité de la pratique et les difficultés rencontrées."
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "spa-patient-regular-movement-limits-stiffness-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Bouger régulièrement aide à limiter l’enraidissement"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "spa",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "spa-patient-benefits-symptoms-bone-cardiovascular-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "L’activité physique a des effets bénéfiques sur les symptômes, la santé osseuse et cardiovasculaire"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "spa",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "spa-patient-adapted-activity-no-flare-risk-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Une activité adaptée n’augmente pas le risque de poussée"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 2
          },
          {
            "pathologyId": "spa",
            "field": "crc_default",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "spa-patient-report-unusual-persistent-pain-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Signaler toute douleur inhabituelle persistante"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "depression-constraint-no-specific-ci-except-major-eating-disorders-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Pas de CI spécifique hors désordres majeurs de l’alimentation",
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
            "pathologyId": "pr",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "depression-constraint-orthostatic-hypotension-sedation-psychotropics-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "L : risque d’hypotension orthostatique et sédation sous antidépresseurs et autres psychotropes",
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
            "pathologyId": "pr",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "depression-orientation-supervised-apa-three-months-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "APA supervisée 3 mois (≥3 séances/sem) : traitement possible de l’EDC <button type='button' class='info-trigger info-hitbox' data-info='Épisode dépressif caractérisé'><span class='info-icon'>i</span></button> seul si intensité légère à modérée ou associé à psychotrope et/ou psychothérapie si intensité modérée à sévère",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "orientation"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, vérifier systématiquement les séances d’APA effectivement réalisées, leur régularité et leur maintien sur la période prévue."
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "depression-guidance-walking-simple-effective-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Marche = option simple, accessible et efficace",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "depression-guidance-yoga-qigong-effective-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "activityType"
      }
    ],
    "messages": {
      "clinician": "Yoga / Qi Gong : efficacité prouvée sur anxiété et dépression",
      "patient": ""
    },
    "condition": {
      "type": "always"
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "depression-guidance-general-recommendations-support-useful-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Même recommandations que population générale, accompagnement souvent utile (motivation, progressivité, maintien)",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la motivation, la progressivité, le maintien de la pratique et l’accompagnement effectivement utilisé."
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "depression-situation-tricyclic-antidepressant-resting-ecg-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Traitement par AD tricyclique : ECG de repos (allongement du QT ?)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement par antidépresseur tricyclique présent ou à vérifier.",
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "depression-situation-search-orthostatic-hypotension-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Rechercher hypotension orthostatique : si + → PEC",
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "depression-situation-assess-cardiovascular-risk-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Importance de l’évaluation du RCV (comorbidités fréquentes)",
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "depression-situation-acute-suicidal-ideation-severe-agitation-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Idées suicidaires aiguës / agitation sévère → priorité PEC psychiatrique",
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "depression-rule-psychotropic-monitor-orthostatic-hypotension-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI psychotrope → surveillance signes d’hypotension orthostatique",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Traitement psychotrope présent ou à vérifier.",
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
          "description": "Traitement psychotrope pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, rechercher les signes d’hypotension orthostatique survenus pendant la pratique et les adaptations éventuellement utilisées."
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "depression-orientation-difficult-adherence-adapt-format-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "SI observance difficile → adapter format (groupe, accompagnement si souhaité et possible)",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Difficulté d’observance présente ou à vérifier.",
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
          "description": "Difficulté d’observance pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier l’observance, le format effectivement utilisé et l’effet du groupe ou de l’accompagnement lorsqu’ils ont été choisis."
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "depression-patient-moving-a-little-useful-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Bouger un peu est déjà utile"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "depression",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "depression-patient-moving-improves-mood-anxiety-sleep-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Bouger peut améliorer l’humeur, l’anxiété et le sommeil"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "depression",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-constraint-no-specific-ci-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "contraindication"
      }
    ],
    "messages": {
      "clinician": "Pas de CI spécifique liée au trouble schizophrénique",
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
            "pathologyId": "pr",
            "field": "contraintes",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-constraint-prolonged-qt-resting-ecg-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "precaution"
      }
    ],
    "messages": {
      "clinician": "QT allongé sous neuroleptique → ECG de repos avant AP",
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
            "pathologyId": "pr",
            "field": "contraintes",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-constraint-orthostatic-hypotension-sedation-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "safety",
        "category": "limitation"
      }
    ],
    "messages": {
      "clinician": "Limitations : risque d’hypotension orthostatique et sédation sous psychotropes",
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
            "pathologyId": "pr",
            "field": "contraintes",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-guidance-screen-comorbidities-cardiovascular-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Dépister comorbidités dont CV (fréquentes)",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-guidance-deconditioned-sedentary-low-motivation-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "Population souvent déconditionnée, sédentaire, peu motivée",
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-guidance-progressivity-daily-activities-reduce-sedentarity-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Progressivité + ↑ activités quotidiennes + réduction sédentarité",
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
        "messageClinicianOverride": "Au suivi, vérifier systématiquement la progressivité, l’augmentation des activités quotidiennes et la réduction de la sédentarité réellement obtenues."
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-orientation-apa-three-months-trained-staff-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "Idéal = programme APA de 3 mois, 2-3 séances/sem avec personnel formé à la PEC de personnes atteintes de troubles psychiatriques",
      "patient": ""
    },
    "condition": {
      "type": "always"
    },
    "presentationTargets": [
      "orientation"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, vérifier systématiquement les séances réellement réalisées, leur régularité et le maintien dans le programme encadré."
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 3
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-orientation-individual-or-group-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "orientationFactors",
        "category": "supervisionFactor"
      }
    ],
    "messages": {
      "clinician": "Choisir individuel ou groupe selon stabilité clinique et préférences",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Stabilité clinique et préférences concernant le format de pratique connues ou à vérifier.",
      "machineEvaluable": false
    },
    "presentationTargets": [
      "orientation"
    ],
    "clinicalMoments": [
      {
        "moment": "followUp",
        "condition": {
          "type": "always"
        },
        "messageClinicianOverride": "Au suivi, vérifier systématiquement le format individuel ou collectif réellement utilisé, son acceptabilité et son maintien."
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
            "pathologyId": "pr",
            "field": "adaptations",
            "index": 4
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-situation-psychotropic-hypotension-sedation-avoid-risk-sports-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Hypotension orthostatique / sédation liée aux psychotropes : éviter sports à risque",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Hypotension orthostatique ou sédation liée aux psychotropes présente ou à vérifier.",
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
          "description": "Hypotension orthostatique ou sédation liée aux psychotropes pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, rechercher les incidents, les activités à risque évitées et les adaptations effectivement utilisées."
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-situation-marked-negative-symptoms-simple-progressive-goals-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "Symptômes négatifs marqués → objectifs simples et très progressifs",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Symptômes négatifs marqués présents ou à vérifier.",
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
          "description": "Symptômes négatifs marqués pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier les objectifs réellement poursuivis, leur simplicité, leur progressivité et les difficultés rencontrées."
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
            "pathologyId": "pr",
            "field": "situations",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-rule-orthostatic-hypotension-slow-transitions-hydration-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI hypotension orthostatique → transitions lentes et hydratation adaptée",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Hypotension orthostatique présente ou à vérifier.",
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
          "description": "Hypotension orthostatique pendant la période de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier les symptômes, les transitions lentes et l’hydratation adaptée effectivement mises en œuvre."
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-rule-good-tolerance-progress-duration-intensity-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "practicalAdaptation"
      }
    ],
    "messages": {
      "clinician": "SI bonne tolérance sur plusieurs semaines → augmenter progressivement durée puis intensité",
      "patient": ""
    },
    "condition": {
      "type": "clinicianCheck",
      "description": "Bonne tolérance sur plusieurs semaines présente ou à vérifier.",
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
          "description": "Bonne tolérance maintenue sur plusieurs semaines de pratique.",
          "machineEvaluable": false
        },
        "messageClinicianOverride": "Au suivi, vérifier la tolérance, puis la progression effectivement réalisée sur la durée avant l’intensité."
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-rule-clear-psychiatric-worsening-rapid-reassessment-001",
    "context": {
      "pathologiesAny": [
        "pr"
      ]
    },
    "clinicalUses": [
      {
        "function": "prescriptionGuidance",
        "category": "monitoring"
      }
    ],
    "messages": {
      "clinician": "SI aggravation psychiatrique nette → réévaluation médicale rapide",
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
            "pathologyId": "pr",
            "field": "regles",
            "index": 2
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-patient-regular-movement-morale-sleep-physical-health-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Bouger régulièrement aide le moral, le sommeil et la santé physique"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 0
          },
          {
            "pathologyId": "schizophrenie",
            "field": "crc_default",
            "index": 0
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-patient-regular-movement-reduce-fatigue-stress-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "Bouger régulièrement peut aider à réduire fatigue et stress"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 1
          },
          {
            "pathologyId": "schizophrenie",
            "field": "crc_default",
            "index": 1
          }
        ]
      }
    }
  },
  {
    "id": "schizophrenie-patient-physical-activity-improves-anxiety-mood-001",
    "context": {
      "pathologiesAny": [
        "pr"
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
      "patient": "L’activité physique peut améliorer anxiété et humeur"
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
            "pathologyId": "pr",
            "field": "crc",
            "index": 2
          }
        ]
      }
    }
  }
];

window.PATHOLOGY_KNOWLEDGE_REGISTRY =
  PATHOLOGY_KNOWLEDGE_REGISTRY;