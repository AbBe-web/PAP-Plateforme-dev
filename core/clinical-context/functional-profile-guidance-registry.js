(function() {

  "use strict";

  /*
   * PAP — Functional Profile Guidance Registry
   *
   * Connaissances d'orientation associées au
   * profil fonctionnel global qualifié manuellement
   * par le médecin.
   *
   * Ce registre :
   * - utilise le contrat ClinicalKnowledgeItem ;
   * - ne lit pas le DOM ;
   * - ne calcule pas le profil fonctionnel ;
   * - ne choisit pas un professionnel ;
   * - ne sélectionne aucun cadre d'orientation ;
   * - fournit uniquement des repères cognitifs structurés.
   */

  const FUNCTIONAL_PROFILE_GUIDANCE_REGISTRY = [

    {
      id:
        "functional-profile-none-context",

      clinicalUses: [
        {
          function:
            "orientationFactors",

          category:
            "functionalFactor"
        }
      ],

      context: {
        functionalProfilesAny: [
          "none"
        ]
      },

      messages: {
        clinician:
          "Pas de limitation fonctionnelle identifiée : le choix du cadre dépend des autres facteurs cliniques, de l’autonomie et des préférences.",

        patient: ""
      },

      condition: {
        type:
          "always"
      },

      presentationTargets: [
        "orientation"
      ],

      evidenceSourceIds: [
        "fr-instruction-2017-apa-annexe4"
      ],

      relatedResourceIds: [],

      metadata: {
        status:
          "active",

        version:
          "1",

        guidanceNature:
          "professionalGuidance"
      }
    },

    {
      id:
        "functional-profile-minimal-supervision",

      clinicalUses: [
        {
          function:
            "orientationFactors",

          category:
            "supervisionFactor"
        }
      ],

      context: {
        functionalProfilesAny: [
          "minimal"
        ]
      },

      messages: {
        clinician:
          "Limitation fonctionnelle minime : encadrement sportif qualifié ou EAPA à considérer selon les autres besoins.",

        patient: ""
      },

      condition: {
        type:
          "always"
      },

      presentationTargets: [
        "orientation"
      ],

      evidenceSourceIds: [
        "fr-instruction-2017-apa-annexe4",
        "fr-arrete-2025-certifications-federales-apa"
      ],

      relatedResourceIds: [],

      metadata: {
        status:
          "active",

        version:
          "1",

        guidanceNature:
          "professionalGuidance"
      }
    },

    {
      id:
        "functional-profile-moderate-supervision",

      clinicalUses: [
        {
          function:
            "orientationFactors",

          category:
            "supervisionFactor"
        }
      ],

      context: {
        functionalProfilesAny: [
          "moderate"
        ]
      },

      messages: {
        clinician:
          "Limitation fonctionnelle modérée : EAPA particulièrement à considérer ; professionnel de santé selon le besoin de rééducation/réadaptation.",

        patient: ""
      },

      condition: {
        type:
          "always"
      },

      presentationTargets: [
        "orientation"
      ],

      evidenceSourceIds: [
        "fr-instruction-2017-apa-annexe4"
      ],

      relatedResourceIds: [],

      metadata: {
        status:
          "active",

        version:
          "1",

        guidanceNature:
          "professionalGuidance"
      }
    },

    {
      id:
        "functional-profile-severe-regulatory",

      clinicalUses: [
        {
          function:
            "orientationFactors",

          category:
            "supervisionFactor"
        }
      ],

      context: {
        functionalProfilesAny: [
          "severe"
        ]
      },

      messages: {
        clinician:
          "Limitation fonctionnelle sévère : dispensation initiale par un professionnel de santé habilité.",

        patient: ""
      },

      condition: {
        type:
          "always"
      },

      presentationTargets: [
        "orientation"
      ],

      evidenceSourceIds: [
        "fr-csp-d1172-3"
      ],

      relatedResourceIds: [],

      metadata: {
        status:
          "active",

        version:
          "1",

        guidanceNature:
          "regulatoryConstraint"
      }
    }

  ];

  window.FUNCTIONAL_PROFILE_GUIDANCE_REGISTRY =
    FUNCTIONAL_PROFILE_GUIDANCE_REGISTRY;

})();
