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
  ,
  {
    "id": "has-aps-dt1-07-2022",
    "sourceType": "guideline",
    "title": "HAS — Prescription d’activité physique : diabète de type 1, synthèse",
    "authority": "Haute Autorité de santé",
    "date": "2022-07-13",
    "url": "https://www.has-sante.fr/upload/docs/application/pdf/2022-08/synthese_aps_dt1_vf.pdf",
    "note": "Repère documentaire Q2a ; ne conclut pas à une indication individuelle d'APA de niveau 2."
  },
  {
    "id": "has-parcours-dt2-07-2025",
    "sourceType": "guideline",
    "title": "HAS — Parcours de soins du patient adulte vivant avec un diabète de type 2 (2025)",
    "authority": "Haute Autorité de santé",
    "date": "2025-07-16",
    "url": "https://www.has-sante.fr/upload/docs/application/pdf/2025-07/parcours_de_soins_du_patient_adulte_vivant_avec_un_diabete_de_type_2_-_guide_2025-07-15_16-42-8_797.pdf",
    "note": "Parcours DT2 actualisé : apprécier le besoin d'accompagnement, sans imposer un niveau 2."
  },
  {
    "id": "has-aps-surpoids-obesite-07-2022",
    "sourceType": "guideline",
    "title": "HAS — Prescription d’activité physique : surpoids et obésité de l’adulte, synthèse",
    "authority": "Haute Autorité de santé",
    "date": "2022-07-13",
    "url": "https://www.has-sante.fr/upload/docs/application/pdf/2022-08/synthese_aps_surpoids_obesite_vf.pdf",
    "note": "Repère documentaire Q2a ; ne conclut pas à une indication individuelle d'APA de niveau 2."
  },
  {
    "id": "has-aps-asthme-07-2022",
    "sourceType": "guideline",
    "title": "HAS — Prescription d’activité physique : asthme, synthèse",
    "authority": "Haute Autorité de santé",
    "date": "2022-07-13",
    "url": "https://www.has-sante.fr/upload/docs/application/pdf/2022-08/synthese_aps_asthme_vf.pdf",
    "note": "Repère documentaire Q2a ; ne conclut pas à une indication individuelle d'APA de niveau 2."
  },
  {
    "id": "has-aps-grossesse-07-2022",
    "sourceType": "guideline",
    "title": "HAS — Prescription d’activité physique : grossesse et post-partum, synthèse",
    "authority": "Haute Autorité de santé",
    "date": "2022-07-13",
    "url": "https://www.has-sante.fr/upload/docs/application/pdf/2022-08/synthese_aps_grossesse_post_partum_vf.pdf",
    "note": "Repère documentaire Q2a ; ne conclut pas à une indication individuelle d'APA de niveau 2."
  },

  {
    "id": "has-aps-scc-07-2022",
    "sourceType": "guideline",
    "title": "HAS — Prescription d’activité physique : syndrome coronarien chronique, synthèse",
    "authority": "Haute Autorité de santé",
    "date": "2022-07-13",
    "url": "https://www.has-sante.fr/jcms/p_3360238/fr/synthese-prescription-d-activite-physique-syndrome-coronarien-chronique",
    "note": "Après événement aigu : réadaptation cardiovasculaire puis programme d’APA selon bilan/sortie. La qualification du niveau d’intervention reste individuelle."
  },
  {
    "id": "has-aps-icc-07-2022",
    "sourceType": "guideline",
    "title": "HAS — Prescription d’activité physique : insuffisance cardiaque chronique, synthèse",
    "authority": "Haute Autorité de santé",
    "date": "2022-07-13",
    "url": "https://www.has-sante.fr/upload/docs/application/pdf/2022-08/synthese_aps_icc_vf.pdf",
    "note": "Recommande une APA régulière en ICC stable, avec réadaptation si possible puis poursuite adaptée ; ne présélectionne pas le niveau 2."
  },
  {
    "id": "has-aps-bpco-07-2022",
    "sourceType": "guideline",
    "title": "HAS — Prescription d’activité physique : BPCO, référentiel",
    "authority": "Haute Autorité de santé",
    "date": "2022-07-13",
    "url": "https://www.has-sante.fr/jcms/c_2876897/fr/referentiel-de-prescription-d-activite-physique-et-sportive-bronchopneumopathie-obstructive",
    "note": "Fiche validée par le Collège HAS le 13 juillet 2022, mise à jour en mars 2024. Réadaptation respiratoire selon le retentissement et continuité d’une activité physique adaptée, avec cadre à individualiser."
  },
  {
    "id": "has-aps-avc-09-2022",
    "sourceType": "guideline",
    "title": "HAS — Prescription d’activité physique : AVC, synthèse",
    "authority": "Haute Autorité de santé",
    "date": "2022-09-06",
    "url": "https://www.has-sante.fr/jcms/p_3360242/fr/synthese-prescription-d-activite-physique-accident-vasculaire-cerebral",
    "note": "APA après AVC selon phase et séquelles, supervision initiale selon besoins ; la rééducation des déficiences peut se poursuivre."
  }
];


window.EVIDENCE_SOURCE_REGISTRY =
  EVIDENCE_SOURCE_REGISTRY;
