// core/clinical-context/evidence-source-registry.js

/*
 * PAP — Evidence Source Registry
 *
 * Registre des références scientifiques,
 * réglementaires et institutionnelles soutenant
 * les connaissances cliniques de PAP.
 *
 * Distinct de RESOURCE_REGISTRY :
 *
 * EVIDENCE_SOURCE_REGISTRY
 * = provenance / traçabilité des connaissances
 *
 * RESOURCE_REGISTRY
 * = ressources documentaires accessibles dans PAP
 */


const EVIDENCE_SOURCE_REGISTRY = [

  {
    id:
      "fr-instruction-2017-apa-annexe4",

    sourceType:
      "institutionalGuidance",

    title:
      "Instruction interministérielle n° DGS/EA3/DGESIP/DS/SG/2017/81 du 3 mars 2017 — guide sur les conditions de dispensation de l’activité physique adaptée",

    authority:
      "Ministères chargés de la santé, de l’enseignement supérieur et des sports",

    date:
      "2017-03-03",

    url:
      "https://www.legifrance.gouv.fr/circulaire/id/42071",

    note:
      "Annexe 4 utilisée comme repère sur les domaines d’intervention préférentiels selon le profil fonctionnel. Ne pas l’interpréter comme une matrice actuelle d’autorisation professionnelle."
  },


  {
    id:
      "fr-csp-d1172-3",

    sourceType:
      "regulation",

    title:
      "Code de la santé publique — article D.1172-3",

    authority:
      "République française — Légifrance",

    date:
      "2023-04-01",

    url:
      "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047381390",

    note:
      "Cadre applicable aux patients présentant des limitations fonctionnelles sévères qualifiées par le médecin prescripteur."
  },


  {
    id:
      "fr-arrete-2025-certifications-federales-apa",

    sourceType:
      "regulation",

    title:
      "Arrêté du 12 juin 2025 fixant la liste des certifications fédérales autorisant la dispensation d’activité physique adaptée en application du 4° de l’article D.1172-2 du code de la santé publique",

    authority:
      "République française — Légifrance",

    date:
      "2025-06-12",

    url:
      "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000051862753/",

    note:
      "Les certifications fédérales visées concernent les patients ne présentant pas de limitation fonctionnelle ou présentant des limitations fonctionnelles minimes, dans les conditions prévues par l’arrêté."
  }


  ,{
    id: "has-aps-aomi-07-2022",
    sourceType: "guideline",
    title: "HAS — Prescription d’activité physique : AOMI, synthèse",
    authority: "Haute Autorité de santé",
    date: "2022-07-13",
    url: "https://www.has-sante.fr/upload/docs/application/pdf/2022-08/synthese_aps_aomi_vf.pdf",
    note: "Recommandation d’AP/APA ; distinguer un programme APA du parcours de réadaptation vasculaire spécialisé. Page exacte non contrôlée."
  },
  {
    id: "has-orientation-aomi-rehabilitation-10-2024",
    sourceType: "guideline",
    title: "HAS — Critères d’orientation d’un patient avec claudication intermittente (AOMI) vers la réadaptation vasculaire",
    authority: "Haute Autorité de santé",
    date: "2024-10-17",
    url: "https://www.has-sante.fr/upload/docs/application/pdf/2024-10/fiche_orientation_readaptation_aomi.pdf",
    note: "Réadaptation vasculaire de première intention en cas de claudication ; centre supervisé ou alternative structurée selon situation. Page exacte non contrôlée."
  },
  {
    id: "has-aps-hta-07-2022",
    sourceType: "guideline",
    title: "HAS — Prescription d’activité physique : HTA, synthèse",
    authority: "Haute Autorité de santé",
    date: "2022-07-13",
    url: "https://www.has-sante.fr/upload/docs/application/pdf/2022-08/synthese_aps_hta_vf.pdf",
    note: "La synthèse propose un programme APA supervisé ; ne pas interpréter comme une nécessité individuelle du niveau 2."
  },
  {
    id: "has-ref-aps-hta-09-2018",
    sourceType: "guideline",
    title: "HAS — Référentiel de prescription d’activité physique : hypertension artérielle",
    authority: "Haute Autorité de santé",
    date: "2018-09-26",
    url: "https://www.has-sante.fr/upload/docs/application/pdf/2018-10/ref_aps_hta_vf.pdf",
    note: "Le référentiel 2018 prévoit une AP autonome et des loisirs sportifs chez l’hypertendu équilibré ; mise en regard de la synthèse 2022. Adopté par le Collège HAS le 26 septembre 2018."
  }
];


window.EVIDENCE_SOURCE_REGISTRY =
  EVIDENCE_SOURCE_REGISTRY;
