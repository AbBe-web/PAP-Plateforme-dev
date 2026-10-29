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

,
  {
    id: "has-avc-parcours-2026",
    sourceType: "guideline",
    title: "HAS — Guide du parcours de santé : AVC de l’adulte (actualisé en 2026)",
    authority: "Haute Autorité de santé",
    date: "2026-09-03",
    url: "https://www.has-sante.fr/jcms/p_3445524/fr/parcours-de-sante-accident-vasculaire-cerebral-de-l-adulte",
    note: "Q1 — réévaluer déficiences, limitations et besoins actuels de rééducation/réadaptation ; la pathologie seule ne qualifie pas la phase ni l'indication."
  },
  {
    id: "has-avc-reeducation-chronique-2022",
    sourceType: "guideline",
    title: "HAS — Rééducation à la phase chronique d’un AVC de l’adulte : pertinence, indications et modalités",
    authority: "Haute Autorité de santé",
    date: "2022-07-04",
    url: "https://www.has-sante.fr/jcms/p_3150692/fr/reeducation-a-la-phase-chronique-d-un-avc-de-l-adulte-pertinence-indications-et-modalites",
    note: "Q1 — au-delà de 6 mois, recommandation de rééducation motrice adaptée et suivie en cas de séquelles d'une paralysie initiale. Les autres séquelles exigent une appréciation clinique spécifique."
  }
  ,{
    id: "has-orientation-cardio-2024",
    sourceType: "guideline",
    title: "HAS — Critères d’orientation en réadaptation cardiaque et vasculaire",
    authority: "Haute Autorité de santé",
    date: "2024-10-22",
    url: "https://www.has-sante.fr/jcms/p_3551950/fr/criteres-d-orientation-en-readaptation-cardiaque-et-vasculaire",
    note: "Repère Q1 : indication de réadaptation cardiovasculaire à apprécier dans les situations coronariennes et l'insuffisance cardiaque stabilisée. Ne présélectionne pas l'orientation individuelle."
  },
  {
    id: "has-bpco-rehabilitation-2014",
    sourceType: "guideline",
    title: "HAS — Comment mettre en œuvre la réhabilitation respiratoire pour les patients ayant une BPCO ?",
    authority: "Haute Autorité de santé",
    date: "2014-07-03",
    url: "https://www.has-sante.fr/jcms/c_1744735/fr/comment-mettre-en-oeuvre-la-rehabilitation-respiratoire-pour-les-patients-ayant-une-bronchopneumopathie-chronique-obstructive",
    note: "Repère Q1 : réadaptation en cas de dyspnée, intolérance à l'exercice ou limitation d'activité malgré prise en charge optimale, ou après exacerbation, particulièrement si hospitalisation. Fiche HAS mise en ligne le 3 juillet 2014."
  }

,
{
    "id":  "has-aps-arthrose-07-2022",
    "url":  "https://www.has-sante.fr/jcms/p_3360250/fr/synthese-prescription-d-activite-physique-arthroses-peripheriques",
    "note":  "Traitement de première intention par programme structuré d\u0027APA dans l\u0027arthrose ; prescription d\u0027AP hors poussée congestive. Ne qualifie pas automatiquement une indication individuelle du niveau 2.",
    "authority":  "Haute Autorité de santé",
    "date":  "2022-07-13",
    "sourceType":  "guideline",
    "title":  "HAS — Prescription d’activité physique : arthroses périphériques, synthèse"
}
,
{
    "id":  "has-aps-lombalgie-commune-chronique-03-2024",
    "url":  "https://www.has-sante.fr/upload/docs/application/pdf/2024-04/fiche_aps_lombalgie_commune_chronique.pdf",
    "note":  "Fiche HAS, page 8 : programme d’APA (niveau 2) pour lombalgie commune chronique avec comorbidité ou stabilisée avec déconditionnement et retentissement biopsychosocial modéré. Critères non inférés du seul diagnostic.",
    "authority":  "Haute Autorité de santé",
    "date":  "2024-03-28",
    "sourceType":  "guideline",
    "title":  "HAS — Prescription d’activité physique : lombalgie commune chronique, fiche"
}
,
{
    "id":  "has-aps-spa-03-2024",
    "url":  "https://www.has-sante.fr/upload/docs/application/pdf/2024-04/synthese_aps_spondylarthrite_axiale.pdf",
    "note":  "Synthèse HAS mars 2024, p. 3 : niveau 2 envisagé si maladie modérément active et traitement de fond stable depuis plusieurs semaines avec inactivité physique, comorbidité et/ou déconditionnement ; niveaux 3/4 si maladie stabilisée et facteurs de risque contrôlés. Critères non inférés de la seule pathologie.",
    "authority":  "Haute Autorité de santé",
    "date":  "2024-03-28",
    "sourceType":  "guideline",
    "title":  "HAS — Prescription d’activité physique : spondylarthrite axiale, synthèse"
}
,
{
    "id":  "has-aps-cancers-07-2022",
    "url":  "https://www.has-sante.fr/upload/docs/application/pdf/2022-08/synthese_aps_cancers_vf.pdf",
    "note":  "HAS, synthèse 2022, p. 1–2 : l’ensemble des patients atteints de cancer peut bénéficier d’une AP adaptée ; programme APA personnalisé décrit dans une fiche portant sur sein/colorectal/prostate. Ne pas attribuer à la HAS une indication systématique de niveau 2 pour toutes les localisations.",
    "authority":  "Haute Autorité de santé",
    "date":  "2022-07-13",
    "sourceType":  "guideline",
    "title":  "HAS — Prescription d’activité physique : cancers (sein, colorectal, prostate), synthèse"
},
{
    "id":  "inca-benefices-ap-cancer-03-2017",
    "url":  "https://www.e-cancer.fr/content/download/193374/2587278/file/Benefices_de_l_activite_physique_pendant_et_apres_cancer__mel_20170328.pdf",
    "note":  "État des connaissances INCa 2017, bénéfices de l’AP pendant et après les cancers, dont fatigue et qualité de vie ; qualité et disponibilité des données hétérogènes selon localisation.",
    "authority":  "Institut national du cancer",
    "date":  "2017-03-01",
    "sourceType":  "institutionalReference",
    "title":  "INCa — Bénéfices de l’activité physique pendant et après cancer : des connaissances scientifiques aux repères pratiques"
},
{
    "id":  "afsos-activite-physique-cancer-05-2024",
    "url":  "https://www.afsos.org/fiche-referentiel/activite-physique-et-cancer/",
    "note":  "Référentiel de soins oncologiques de support 2024 : concerne tous les patients atteints de cancer, y compris âgés et présentant des comorbidités. Référence distincte de la HAS.",
    "authority":  "Association francophone des soins oncologiques de support",
    "date":  "2024-05-27",
    "sourceType":  "guideline",
    "title":  "AFSOS — Référentiel Activité physique et cancer"
},
{
    "id":  "acsm-getp-12e-oncology-2025",
    "url":  "https://shop.lww.com/ACSM-s-Guidelines-for-Exercise-Testing-and-Prescription/p/9781975219253",
    "note":  "Extrait de la section Cancer Survivors fourni par le clinicien : bénéfices de l’exercice aérobie et de résistance, fatigue et qualité de vie ; exercice supervisé souvent plus efficace, non supervisé également bénéfique ; choisir l’encadrement selon état clinique, risques et faisabilité. Recommandation ACSM et non HAS ; références numérotées de l’extrait à vérifier si nécessaire.",
    "authority":  "American College of Sports Medicine",
    "date":  "2025-01-17",
    "sourceType":  "book",
    "title":  "ACSM — Guidelines for Exercise Testing and Prescription, 12e éd., section Oncology/Cancer Survivors"
}
,
{
    "id":  "has-aps-sep-03-2024",
    "url":  "https://www.has-sante.fr/upload/docs/application/pdf/2024-04/synthese_aps_sclerose_en_plaques.pdf",
    "note":  "HAS 28/03/2024, p. 3–4 : EDSS 0–3 AP niveau 3/4 ; EDSS 3,5–6 programme APA niveau 2 supervisé ; EDSS ≥ 6,5 rééducation/réadaptation niveau 1, APA possible au début en complément en SMR. Score non inféré ; poussée aiguë contre-indication distincte.",
    "authority":  "Haute Autorité de santé",
    "date":  "2024-03-28",
    "sourceType":  "guideline",
    "title":  "HAS — Prescription d’activité physique : Sclérose en plaques, synthèse"
}
,
{
    "id":  "has-aps-pr-03-2024",
    "url":  "https://www.has-sante.fr/upload/docs/application/pdf/2024-04/synthese_aps_polyarthrite_rhumatoide.pdf",
    "note":  "HAS, synthèse validée le 28/03/2024, p. 2–3. L’orientation dépend du DAS28, du HAQ, du contexte CV, de la stabilisation et des capacités. PR non stabilisée DAS28 élevé/HAQ important : rééducation niveau 1 ; critères moins marqués et absence de pathologie CV : APA niveau 2 possible ; PR stabilisée : niveaux 2/3, puis 4 selon autonomie. Aucun seuil conjoint DAS28/HAQ prescrit pour attribuer automatiquement un niveau. Ne pas présenter la comorbidité CV comme contre-indication générale à l’APA.",
    "authority":  "Haute Autorité de santé",
    "date":  "2024-03-28",
    "sourceType":  "guideline",
    "title":  "HAS — Polyarthrite rhumatoïde : prescription d’activité physique, synthèse"
}
,
{
    "id":  "has-aps-pa-maintien-03-2024",
    "url":  "https://www.has-sante.fr/upload/docs/application/pdf/2024-04/synthese_aps_icope.pdf",
    "note":  "Orientation HAS : SPPB 0-6 niveau 1 a examiner ; SPPB 7-9 APA niveau 2 ; niveau 3 possible sans comorbidites CV/osteoarticulaires severes ; SPPB 10-12 niveaux 3/4. Voir synthese pages 6-7.",
    "authority":  "Haute Autorite de sante",
    "date":  "2024-03-28",
    "sourceType":  "guideline",
    "title":  "HAS - Maintien des capacites motrices des personnes agees, synthese"
},
{
    "id":  "has-aps-pa-chutes-03-2024",
    "url":  "https://www.has-sante.fr/upload/docs/application/pdf/2024-04/synthese_aps_personnes_agees_a_risque_de_chute.pdf",
    "note":  "Orientation HAS : risque faible niveaux 3/4 ; intermediaire APA niveau 2 ; eleve intervention multifactorielle avec niveau 1 et/ou 2 selon besoins. Voir synthese pages 7-10.",
    "authority":  "Haute Autorite de sante",
    "date":  "2024-03-28",
    "sourceType":  "guideline",
    "title":  "HAS - Personnes agees a risque de chute, synthese"
}
];


window.EVIDENCE_SOURCE_REGISTRY =
  EVIDENCE_SOURCE_REGISTRY;
