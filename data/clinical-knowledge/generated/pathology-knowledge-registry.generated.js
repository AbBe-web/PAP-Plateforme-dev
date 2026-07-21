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
                         "clinician":  "Privilégier les activités d’endurance et le renforcement musculaire modéré",
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
        "id":  "hta-guidance-warmup-intense-001",
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
                         "clinician":  "En cas d\u0027AP intense, bien s\u0027échauffer",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "En cas d’activité physique intense",
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
                                                                     "field":  "adaptations",
                                                                     "index":  1
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
                                 "function":  "safety",
                                 "category":  "monitoring"
                             }
                         ],
        "messages":  {
                         "clinician":  "Hypotension post-effort, notamment sous traitement antihypertenseur",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Traitement antihypertenseur ou contexte exposant à une hypotension post-effort",
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
        "id":  "hta-rule-diuretic-dehydration-001",
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
                         "clinician":  "SI traitement diurétique → ALORS risque de déshydratation ou de troubles ioniques, notamment en cas d’effort prolongé ou de chaleur",
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
                         "patient":  "éviter les efforts en glotte fermée"
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
                         "patient":  "privilégier les activités d’endurance régulières"
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
                         "patient":  "surveiller la tolérance tensionnelle à l’effort"
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
                             }
                         ],
        "messages":  {
                         "clinician":  "Glycémie \u003e 2,5 g/L en début d’exercice → AP déconseillée tant que \u003e 2 g/L (objectif \u003c 2 g/L)",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Glycémie \u003e 2,5 g/L en début d’exercice",
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
                             }
                         ],
        "messages":  {
                         "clinician":  "Activité physique d’intensité élevée si glycémie mal contrôlée → à éviter",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Glycémie mal contrôlée avec activité physique d’intensité élevée",
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
                         "clinician":  "Privilégier une progressivité : AP d’intensité faible et courte durée au début (ne pas décourager)",
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
                         "clinician":  "Anticiper le risque d’hypoglycémie en cas de traitement hypoglycémiant (insuline, glinides, sulfamides hypoglycémiants) : auto-surveillance, adaptation posologique, collation possible",
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
                                                                     "field":  "adaptations",
                                                                     "index":  1
                                                                 }
                                                             ]
                                       }
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
                         "clinician":  "Surveiller et protéger les pieds",
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
                         "clinician":  "Possibilité de conseiller AP en post-prandial pour profiter de l’effet hypoglycémiant de l’AP",
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
                         "clinician":  "Possibilité d’AP séquentielle ou fractionnée si déconditionnement",
                         "patient":  ""
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Déconditionnement",
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
                         "patient":  "surveillance glycémique recommandée"
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
                         "patient":  "surveillance glycémie avant et après l’effort, avoir une collation avec soi"
                     },
        "condition":  {
                          "type":  "clinicianCheck",
                          "description":  "Traitement ou situation exposant à une hypoglycémie",
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
                         "patient":  "vigilance pour les pieds (chaussage adapté, surveillance)"
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
        "id":  "dt2-patient-food-intake-activity-001",
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
                         "patient":  "adapter les apports alimentaires à l’activité"
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
                         "patient":  "progressivité recommandée en début de programme"
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
    }
];

window.PATHOLOGY_KNOWLEDGE_REGISTRY =
  PATHOLOGY_KNOWLEDGE_REGISTRY;