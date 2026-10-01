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

];


window.EVIDENCE_SOURCE_REGISTRY =
  EVIDENCE_SOURCE_REGISTRY;
