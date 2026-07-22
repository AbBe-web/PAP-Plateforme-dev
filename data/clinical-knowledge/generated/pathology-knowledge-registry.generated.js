// ============================================================
// PAP â€” GENERATED FILE
//
// Source:
// PAP_Connaissances_Cliniques_Tableur_Maitre_v1.xlsx
//
// Ce fichier est gÃ©nÃ©rÃ© automatiquement.
// Ne pas Ã©diter manuellement.
// ============================================================

const PATHOLOGY_KNOWLEDGE_REGISTRY = [
    {
        "id":  "hta-constraint-bp-200-115-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "contraindication"
                             }
                         ],
        "messages":  {
                         "clinician":  "HTA non équilibrée symptomatique + PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg → CI absolue à AP ≥ modérée",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "HTA non équilibrée symptomatique avec PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "contraintes",
                                                                     "index":  0
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-constraint-bp-180-105-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "limitation"
                             }
                         ],
        "messages":  {
                         "clinician":  "HTA non équilibrée symptomatique + PAS ≥ 180 mmHg ou PAD ≥ 105 mmHg → CI relative à AP ≥ modérée (à réévaluer)",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "HTA non équilibrée symptomatique avec PAS ≥ 180 mmHg ou PAD ≥ 105 mmHg",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "contraintes",
                                                                     "index":  1
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-constraint-very-high-intensity-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "precaution"
                             }
                         ],
        "messages":  {
                         "clinician":  "HTA mal équilibrée et/ou symptomatique et/ou atteinte d’organe → précautions si AP très élevée (90-100% VO2 max) ou renforcement musculaire élevé (avis cardio, CI parfois)",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "HTA mal équilibrée, symptomatique et/ou avec atteinte d’organe",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "contraintes",
                                                                     "index":  2
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-guidance-moderate-below-ci-thresholds-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Sous les seuils de contre-indication liés à l’HTA et en l’absence d’autre limitation clinique, une AP d’intensité modérée peut être envisagée.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Pression artérielle inférieure aux seuils de contre-indication liés à l’HTA et absence d’autre limitation clinique",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1"
                     }
    },
    {
        "id":  "hta-guidance-endurance-strength-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "activityType"
                             }
                         ],
        "messages":  {
                         "clinician":  "Privilégier les activités d’endurance et le renforcement musculaire d’intensité modérée.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "always"
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "adaptations",
                                                                     "index":  0
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-guidance-avoid-valsava-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Éviter le renforcement musculaire intense en glotte fermée (Valsalva)",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "always"
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "adaptations",
                                                                     "index":  2
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-situation-post-exercise-hypotension-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Traitement antihypertenseur : risque d’hypotension post-effort, parfois subite et excessive ; prévoir une information adaptée du patient.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Traitement antihypertenseur",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "situations",
                                                                     "index":  0
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-rule-bp-200-115-delay-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "limitation"
                             }
                         ],
        "messages":  {
                         "clinician":  "SI PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg → ALORS différer l’AP d’intensité ≥ modérée",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "PAS ≥ 200 mmHg ou PAD ≥ 115 mmHg",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "regles",
                                                                     "index":  0
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-rule-uncontrolled-stabilization-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "precaution"
                             }
                         ],
        "messages":  {
                         "clinician":  "SI HTA non contrôlée → ALORS stabilisation préalable à envisager avant reprise ou progression de l’AP",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "HTA non contrôlée",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "regles",
                                                                     "index":  1
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-rule-antihypertensive-hypotension-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "monitoring"
                             }
                         ],
        "messages":  {
                         "clinician":  "SI traitement antihypertenseur → ALORS risque d’hypotension post-effort à surveiller (parfois plusieurs heures après)",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Traitement antihypertenseur",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "regles",
                                                                     "index":  2
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-guidance-beta-blocker-intensity-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Si bêtabloquant : la fréquence cardiaque reflète moins bien l’intensité de l’effort ; privilégier également les sensations perçues, notamment respiratoires.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Traitement par bêtabloquant",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1"
                     }
    },
    {
        "id":  "hta-rule-post-exercise-symptoms-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "warningSign"
                             }
                         ],
        "messages":  {
                         "clinician":  "SI symptômes à ou post effort (vertiges, malaise) → ALORS réévaluation clinique (adaptation posologie tt anti HTA à discuter avant les séances d’AP)",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Vertiges ou malaise pendant ou après l’effort",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "regles",
                                                                     "index":  4
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-rule-diuretic-dehydration-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Si diurétique : vigilance vis-à-vis de la déshydratation et des troubles électrolytiques, notamment en cas d’effort prolongé ou de chaleur.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Traitement diurétique",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "regles",
                                                                     "index":  3
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-patient-endurance-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "patientInformation",
                                 "category":  "practicalAdvice"
                             }
                         ],
        "messages":  {
                         "clinician":  "",
                         "patient":  "Privilégier une activité d’endurance régulière."
                     },
        "condition":  {
                          "type":  "always"
                      },
        "selection":  {
                          "defaultSelected":  true
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "crc",
                                                                     "index":  1
                                                                 },
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "crc_default",
                                                                     "index":  0
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-patient-bp-tolerance-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "patientInformation",
                                 "category":  "selfMonitoring"
                             }
                         ],
        "messages":  {
                         "clinician":  "",
                         "patient":  "Surveiller la tolérance pendant et après l’effort."
                     },
        "condition":  {
                          "type":  "always"
                      },
        "selection":  {
                          "defaultSelected":  true
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "crc",
                                                                     "index":  2
                                                                 },
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "crc_default",
                                                                     "index":  1
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-patient-avoid-valsava-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "patientInformation",
                                 "category":  "safety"
                             }
                         ],
        "messages":  {
                         "clinician":  "",
                         "patient":  "Éviter les efforts importants en bloquant la respiration."
                     },
        "condition":  {
                          "type":  "always"
                      },
        "selection":  {
                          "defaultSelected":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "crc",
                                                                     "index":  0
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "hta-patient-malaise-medical-advice-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "patientInformation",
                                 "category":  "safety"
                             }
                         ],
        "messages":  {
                         "clinician":  "",
                         "patient":  "En cas de malaise pendant ou après l’effort, interrompre l’activité et demander un avis médical si nécessaire."
                     },
        "condition":  {
                          "type":  "always"
                      },
        "selection":  {
                          "defaultSelected":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1"
                     }
    },
    {
        "id":  "hta-guidance-warmup-intense-001",
        "context":  {
                        "pathologiesAny":  [
                                               "hta"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "patientInformation",
                                 "category":  "practicalAdvice"
                             }
                         ],
        "messages":  {
                         "clinician":  "",
                         "patient":  "En cas de séance d’activité physique ou sportive, notamment intense, bien s’échauffer et ne pas débuter brutalement une AP intense."
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "En cas d’activité physique ou sportive, notamment intense",
                          "machineEvaluable":  false
                      },
        "selection":  {
                          "defaultSelected":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "hta",
                                                                     "field":  "adaptations",
                                                                     "index":  1
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-guidance-progressive-start-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Privilégier une progressivité : débuter si besoin par une AP de faible intensité et/ou de courte durée.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "always"
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "adaptations",
                                                                     "index":  0
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-guidance-sequential-fractionated-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Possibilité d’AP séquentielle ou fractionnée si déconditionnement.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "adaptations",
                                                                     "index":  4
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-constraint-high-intensity-uncontrolled-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "precaution"
                             },
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Si glycémie mal contrôlée : éviter les AP d’intensité élevée.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "contraintes",
                                                                     "index":  1
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-constraint-hyperglycemia-250-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "limitation"
                             },
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Si glycémie \u003e 2,5 g/L au moment de débuter l’exercice : différer l’AP tant que la glycémie reste \u003e 2 g/L.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "contraintes",
                                                                     "index":  0
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-guidance-hypoglycemia-treatment-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Si traitement à risque d’hypoglycémie : anticiper le risque d’hypoglycémie ; prévoir une autosurveillance glycémique et une adaptation du traitement et/ou des apports glucidiques selon la situation.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "adaptations",
                                                                     "index":  1
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-guidance-comorbidities-silent-ischemia-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Tenir compte des comorbidités et complications fréquentes du DT2, notamment du surpoids, du risque cardiovasculaire et de la possibilité d’une ischémie myocardique silencieuse.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "always"
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1"
                     }
    },
    {
        "id":  "dt2-guidance-foot-protection-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Surveiller et protéger les pieds.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "always"
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "adaptations",
                                                                     "index":  2
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-guidance-postprandial-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "prescriptionGuidance",
                                 "category":  "practicalAdaptation"
                             }
                         ],
        "messages":  {
                         "clinician":  "Possibilité de conseiller une AP en post-prandial pour profiter de son effet sur l’hyperglycémie post-prandiale.",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "always"
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "adaptations",
                                                                     "index":  3
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-constraint-intense-complicated-diabetes-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "contraindication"
                             }
                         ],
        "messages":  {
                         "clinician":  "Activité physique intense ou avec manœuvre de Valsalva (ex : renforcement musculaire avec charges lourdes) → CI si diabète compliqué (rétinopathie sévère, néphropathie sévère, dysautonomie sévère, HTA non contrôlée associée)",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Diabète compliqué : rétinopathie sévère, néphropathie sévère, dysautonomie sévère ou HTA non contrôlée associée",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "contraintes",
                                                                     "index":  2
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-constraint-plantar-ulcer-lower-limb-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "contraindication"
                             }
                         ],
        "messages":  {
                         "clinician":  "Mal perforant plantaire → contre-indication temporaire aux activités des membres inférieurs",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Mal perforant plantaire",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "contraintes",
                                                                     "index":  3
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-situation-hypoglycemia-risk-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "monitoring"
                             }
                         ],
        "messages":  {
                         "clinician":  "Risque d’hypoglycémie sous insuline ou traitement insulinosécréteur",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Insuline ou traitement insulinosécréteur",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "situations",
                                                                     "index":  0
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-situation-diabetic-foot-risk-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "monitoring"
                             }
                         ],
        "messages":  {
                         "clinician":  "Risque accru de pied diabétique",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "always"
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "situations",
                                                                     "index":  1
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-situation-vascular-complications-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "precaution"
                             }
                         ],
        "messages":  {
                         "clinician":  "Complications microvasculaires ou macrovasculaires associées fréquentes",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "always"
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "situations",
                                                                     "index":  2
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-rule-hypoglycemic-treatment-monitoring-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "monitoring"
                             }
                         ],
        "messages":  {
                         "clinician":  "SI traitement hypoglycémiant (insuline, glinides, sulfamides hypoglycémiants) → ALORS auto-surveillance glycémique avant et après effort, prévoir collation avec soi",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Traitement hypoglycémiant : insuline, glinides ou sulfamides hypoglycémiants",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "regles",
                                                                     "index":  0
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-rule-unusual-prolonged-activity-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "monitoring"
                             }
                         ],
        "messages":  {
                         "clinician":  "SI activité inhabituelle ou prolongée → ALORS adaptation des apports glucidiques et éventuellement du traitement",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Activité inhabituelle ou prolongée",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "regles",
                                                                     "index":  1
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-rule-foot-lesion-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "limitation"
                             }
                         ],
        "messages":  {
                         "clinician":  "SI lésion du pied → ALORS adapter ou éviter certaines activités",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Lésion du pied",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "regles",
                                                                     "index":  2
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-rule-no-recent-assessment-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "safety",
                                 "category":  "precaution"
                             }
                         ],
        "messages":  {
                         "clinician":  "SI absence de bilan récent → ALORS envisager recherche de complications et facteurs de risque cardiovasculaire",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Absence de bilan récent",
                          "machineEvaluable":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "regles",
                                                                     "index":  3
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-patient-glucose-monitoring-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "patientInformation",
                                 "category":  "selfMonitoring"
                             }
                         ],
        "messages":  {
                         "clinician":  "",
                         "patient":  "L’activité physique est un véritable traitement du diabète de type 2 et contribue à améliorer le contrôle de la glycémie."
                     },
        "condition":  {
                          "type":  "always"
                      },
        "selection":  {
                          "defaultSelected":  true
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "crc",
                                                                     "index":  0
                                                                 },
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "crc_default",
                                                                     "index":  0
                                                                 },
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "crc",
                                                                     "index":  3
                                                                 },
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "crc_default",
                                                                     "index":  2
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-patient-progressivity-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "patientInformation",
                                 "category":  "practicalAdvice"
                             }
                         ],
        "messages":  {
                         "clinician":  "",
                         "patient":  "Augmenter progressivement la durée et l’intensité de l’activité physique."
                     },
        "condition":  {
                          "type":  "always"
                      },
        "selection":  {
                          "defaultSelected":  true
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "crc",
                                                                     "index":  4
                                                                 },
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "crc_default",
                                                                     "index":  3
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-patient-pre-post-exercise-glucose-snack-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "patientInformation",
                                 "category":  "selfMonitoring"
                             }
                         ],
        "messages":  {
                         "clinician":  "",
                         "patient":  "Si la glycémie est supérieure à 2,5 g/L avant la séance, différer l’activité physique et attendre qu’elle soit revenue à 2 g/L ou moins avant de reprendre."
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "machineEvaluable":  false
                      },
        "selection":  {
                          "defaultSelected":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "crc",
                                                                     "index":  1
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-patient-foot-vigilance-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "patientInformation",
                                 "category":  "safety"
                             }
                         ],
        "messages":  {
                         "clinician":  "",
                         "patient":  "Prendre soin de ses pieds : utiliser un chaussage adapté et surveiller régulièrement l’état de ses pieds."
                     },
        "condition":  {
                          "type":  "always"
                      },
        "selection":  {
                          "defaultSelected":  true
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1",
                         "migration":  {
                                           "legacyOrigins":  [
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "crc",
                                                                     "index":  2
                                                                 },
                                                                 {
                                                                     "pathologyId":  "dt2",
                                                                     "field":  "crc_default",
                                                                     "index":  1
                                                                 }
                                                             ]
                                       }
                     }
    },
    {
        "id":  "dt2-patient-dyspnea-palpitations-001",
        "context":  {
                        "pathologiesAny":  [
                                               "dt2"
                                           ]
                    },
        "clinicalUses":  [
                             {
                                 "function":  "patientInformation",
                                 "category":  "safety"
                             }
                         ],
        "messages":  {
                         "clinician":  "",
                         "patient":  "En cas d’essoufflement inhabituel ou de palpitations lors d’une activité physique de faible intensité, arrêter l’effort et consulter rapidement."
                     },
        "condition":  {
                          "type":  "always"
                      },
        "selection":  {
                          "defaultSelected":  false
                      },
        "evidenceSourceIds":  [

                              ],
        "relatedResourceIds":  [

                               ],
        "metadata":  {
                         "status":  "active",
                         "version":  "1"
                     }
    }
];

window.PATHOLOGY_KNOWLEDGE_REGISTRY =
  PATHOLOGY_KNOWLEDGE_REGISTRY;