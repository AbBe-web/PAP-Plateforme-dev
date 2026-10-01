"use strict";

/*
 * Référentiel descriptif des limitations fonctionnelles.
 *
 * Rôle :
 * - fournir les critères officiels d'aide à la qualification ;
 * - servir à l'aide contextuelle du bloc 9 ;
 * - ne réalise aucun calcul automatique de sévérité ;
 * - n'est pas un ClinicalKnowledgeItem.
 *
 * Valeurs stockées dans :
 *
 *   clinicalModel.activityConsiderations.functionalLimitations
 *
 * pour chacune des 13 dimensions :
 *
 *   null
 *   | "none"
 *   | "minimal"
 *   | "moderate"
 *   | "severe"
 *
 * Sémantique :
 *
 *   null
 *   = fonction non renseignée / non évaluée.
 *
 *   "none"
 *   = fonction explicitement évaluée sans limitation identifiée.
 *
 *   "minimal"
 *   = limitation minime.
 *
 *   "moderate"
 *   = limitation modérée.
 *
 *   "severe"
 *   = limitation sévère.
 *
 * Aucune sévérité n'est calculée automatiquement :
 * le choix reste explicite et manuel par le médecin.
 */

const FUNCTIONAL_LIMITATION_REFERENCE_REGISTRY = {

  version: "1.1.0",

  sources: {
    instruction2017: {
      id: "instruction-2017-81-annexe-2",
      label:
        "Instruction interministérielle n° DGS/EA3/DGESIP/DS/SG/2017/81 du 3 mars 2017 — annexe 2"
    },

    severeCsp: {
      id: "csp-annexe-11-7-2",
      label:
        "Code de la santé publique — annexe 11-7-2"
    }
  },

  groups: {

    locomotor: {
      label: "Fonctions locomotrices",

      dimensions: {

        neuromuscular: {
          label: "Fonction neuro-musculaire",

          referenceLevels: {
            none: "Normale",

            minimal:
              "Altération minime de la motricité et du tonus",

            moderate:
              "Altération de la motricité et du tonus lors de mouvements simples",

            severe:
              "Altération de la motricité et du tonus affectant la gestuelle et l’activité au quotidien"
          }
        },

        osteoarticular: {
          label: "Fonction ostéo-articulaire",

          referenceLevels: {
            none: "Normale",

            minimal:
              "Altération au maximum de 3/5 d’amplitude, sur une ou plusieurs articulations sans altération des mouvements complexes",

            moderate:
              "Altération à plus de 3/5 d’amplitude sur plusieurs articulations avec altération de mouvements simples",

            severe:
              "Altération d’amplitude sur plusieurs articulations, affectant la gestuelle et l’activité au quotidien"
          }
        },

        endurance: {
          label: "Endurance à l’effort",

          referenceLevels: {
            none:
              "Pas ou peu de fatigue",

            minimal:
              "Fatigue rapide après une activité physique intense",

            moderate:
              "Fatigue rapide après une activité physique modérée",

            severe:
              "Fatigue invalidante dès le moindre mouvement"
          }
        },

        strength: {
          label: "Force",

          referenceLevels: {
            none:
              "Force normale",

            minimal:
              "Baisse de force, mais peut vaincre la résistance pour plusieurs groupes musculaires",

            moderate:
              "Ne peut vaincre la résistance pour un groupe musculaire",

            severe:
              "Ne peut vaincre la résistance pour plusieurs groupes musculaires"
          }
        },

        walking: {
          label: "Marche",

          referenceLevels: {
            none:
              "Distance théorique normale couverte en 6 mn = 218 + (5,14 × taille en cm) – (5,32 × âge en années) – (1,80 × poids en kg) + (51,31 × sexe), avec : sexe = 0 pour les femmes, sexe = 1 pour les hommes.",

            minimal:
              "Valeurs comprises entre la distance théorique et la limite inférieure de la normale (82 % de la distance théorique)",

            moderate:
              "Valeurs inférieures à la limite inférieure de la normale",

            severe:
              "Distance parcourue inférieure à 150 m."
          }
        }
      }
    },

    cerebral: {
      label: "Fonctions cérébrales",

      dimensions: {

        cognitive: {
          label: "Fonctions cognitives",

          referenceLevels: {
            none:
              "Bonne stratégie, vitesse normale, bon résultat",

            minimal:
              "Bonne stratégie, lenteur, adaptation possible, bon résultat",

            moderate:
              "Mauvaise stratégie de base, adaptation, résultat satisfaisant ou inversement bonne stratégie de base qui n’aboutit pas",

            severe:
              "Mauvaise stratégie pour un mauvais résultat, échec"
          }
        },

        language: {
          label: "Fonctions langagières",

          referenceLevels: {
            none:
              "Aucune altération de la compréhension ou de l’expression",

            minimal:
              "Altération de la compréhension ou de l’expression lors d’activités en groupe",

            moderate:
              "Altération de la compréhension ou de l’expression lors d’activités en individuel",

            severe:
              "Empêche toute compréhension ou expression"
          }
        },

        anxietyDepression: {
          label: "Anxiété/Dépression",

          referenceLevels: {
            none:
              "Ne présente aucun critère d’anxiété et/ou de dépression",

            minimal:
              "Arrive à gérer les manifestations d’anxiété et/ou de dépression",

            moderate:
              "Se laisse déborder par certaines manifestations d’anxiété et/ou de dépression",

            severe:
              "Présente des manifestations sévères d’anxiété et/ou de dépression"
          }
        }
      }
    },

    sensory: {
      label: "Fonctions sensorielles",

      dimensions: {

        vision: {
          label: "Capacité visuelle",

          referenceLevels: {
            none:
              "Vision des petits détails à proche ou longue distance",

            minimal:
              "Vision perturbant la lecture et l’écriture mais circulation dans l’environnement non perturbée",

            moderate:
              "Vision ne permettant pas la lecture et l’écriture / circulation possible dans un environnement non familier",

            severe:
              "Vision ne permettant pas la lecture ni l’écriture. Circulation seul impossible dans un environnement non familier"
          }
        },

        sensitivity: {
          label: "Capacité sensitive",

          referenceLevels: {
            none:
              "Stimulations sensitives perçues et localisées",

            minimal:
              "Stimulations sensitives perçues mais mal localisées",

            moderate:
              "Stimulations sensitives perçues mais non localisées",

            severe:
              "Stimulations sensitives non perçues, non localisées."
          }
        },

        hearing: {
          label: "Capacité auditive",

          referenceLevels: {
            none:
              "Pas de perte auditive",

            minimal:
              "La personne fait répéter",

            moderate:
              "Surdité moyenne. La personne comprend si l’interlocuteur élève la voix",

            severe:
              "Surdité profonde"
          }
        },

        proprioception: {
          label: "Capacités proprioceptives",

          referenceLevels: {
            none:
              "Équilibre respecté",

            minimal:
              "Déséquilibre avec rééquilibrages rapides",

            moderate:
              "Déséquilibres mal compensés avec rééquilibrages difficiles",

            severe:
              "Déséquilibres sans rééquilibrage. Chutes fréquentes lors des activités au quotidien"
          }
        }
      }
    },

    pain: {
      label: "Douleur",

      dimensions: {

        pain: {
          label: "Douleur",

          referenceLevels: {
            none:
              "Absence de douleur en dehors d’activités physiques intenses",

            minimal:
              "Douleur à l’activité physique/ Indolence à l’arrêt de l’activité",

            moderate:
              "Douleur à l’activité physique et qui se poursuit à distance de l’activité",

            severe:
              "Douleur constante avec ou sans activité"
          }
        }
      }
    }
  }
};


window.FUNCTIONAL_LIMITATION_REFERENCE_REGISTRY =
  FUNCTIONAL_LIMITATION_REFERENCE_REGISTRY;
