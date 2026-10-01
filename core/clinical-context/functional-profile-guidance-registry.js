(function() {

  "use strict";


  /*
   * PAP — Functional Profile Guidance Registry
   *
   * Connaissances d'orientation associées au
   * profil fonctionnel global qualifié par le médecin.
   *
   * Ce registre :
   * - ne lit pas le DOM ;
   * - ne calcule pas le profil fonctionnel ;
   * - ne choisit pas un professionnel ;
   * - ne coche aucune réponse d'orientation ;
   * - fournit uniquement des repères structurés.
   */


  const FUNCTIONAL_PROFILE_GUIDANCE_REGISTRY = {

    version: "1.0.0",


    itemsByProfile: {


      none: [

        {
          id:
            "functional-profile-none-context",

          type:
            "professionalGuidance",

          category:
            "functionalFactor",

          message:
            "Pas de limitation fonctionnelle identifiée : le choix du cadre dépend des autres facteurs cliniques, de l’autonomie et des préférences.",

          evidenceSourceIds: [
            "fr-instruction-2017-apa-annexe4"
          ]
        }

      ],


      minimal: [

        {
          id:
            "functional-profile-minimal-supervision",

          type:
            "professionalGuidance",

          category:
            "supervisionFactor",

          message:
            "Limitation fonctionnelle minime : encadrement sportif qualifié ou EAPA à considérer selon les autres besoins.",

          evidenceSourceIds: [
            "fr-instruction-2017-apa-annexe4",
            "fr-arrete-2025-certifications-federales-apa"
          ]
        }

      ],


      moderate: [

        {
          id:
            "functional-profile-moderate-supervision",

          type:
            "professionalGuidance",

          category:
            "supervisionFactor",

          message:
            "Limitation fonctionnelle modérée : EAPA particulièrement à considérer ; professionnel de santé selon le besoin de rééducation/réadaptation.",

          evidenceSourceIds: [
            "fr-instruction-2017-apa-annexe4"
          ]
        }

      ],


      severe: [

        {
          id:
            "functional-profile-severe-regulatory",

          type:
            "regulatoryConstraint",

          category:
            "supervisionFactor",

          message:
            "Limitation fonctionnelle sévère : dispensation initiale par un professionnel de santé habilité.",

          evidenceSourceIds: [
            "fr-csp-d1172-3"
          ]
        }

      ]

    }

  };


  function getFunctionalProfileGuidance(
    functionalProfile
  ) {

    const items =
      FUNCTIONAL_PROFILE_GUIDANCE_REGISTRY
        .itemsByProfile[
          functionalProfile
        ];

    if (!Array.isArray(items)) {
      return [];
    }


    /*
     * Retour défensif :
     * le consommateur ne doit pas pouvoir
     * modifier silencieusement le registre.
     */
    return items.map(
      item => ({
        ...item,

        evidenceSourceIds:
          Array.isArray(
            item.evidenceSourceIds
          )
            ? [
                ...item.evidenceSourceIds
              ]
            : []
      })
    );

  }


  window.FUNCTIONAL_PROFILE_GUIDANCE_REGISTRY =
    FUNCTIONAL_PROFILE_GUIDANCE_REGISTRY;

  window.getFunctionalProfileGuidance =
    getFunctionalProfileGuidance;

})();
