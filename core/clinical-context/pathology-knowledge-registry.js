// core/clinical-context/pathology-knowledge-registry.js

/*
 * PAP — Pathology Knowledge Registry
 *
 * Futur registre des ClinicalKnowledgeItem dont
 * le contexte implique une ou plusieurs pathologies.
 *
 * Principes :
 * - 1 item = 1 information clinique principale ;
 * - IDs stables ;
 * - aucune dépendance DOM ;
 * - aucun HTML ;
 * - aucune décision clinique automatique ;
 * - aucune mutation du clinicalModel ;
 * - aucune mutation du prescriptionModel.
 *
 * PATHO_DATA n'est ni modifié ni remplacé ici.
 *
 * Registre volontairement vide pendant 7A-2A.
 */

const PATHOLOGY_KNOWLEDGE_REGISTRY = [];

window.PATHOLOGY_KNOWLEDGE_REGISTRY =
  PATHOLOGY_KNOWLEDGE_REGISTRY;