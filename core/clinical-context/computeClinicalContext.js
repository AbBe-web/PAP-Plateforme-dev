// core/clinical-context/computeClinicalContext.js

function addVigilance(context, item) {

  context.vigilance.push({
    type: item.type,
    level: item.level || "information",
    source: item.source || "clinical-context",
    message: item.message
  });
}

function computeClinicalContext(
  clinicalModel
) {

  const context =
    createEmptyClinicalContext();

  if (!clinicalModel) {
    return context;
  }

  const pathologies =
    clinicalModel?.patient?.pathologies || [];

  /*
   * VIGILANCE MINIMALE
   */

 if (
  pathologies.includes("diabete") ||
  pathologies.includes("dt2")
) {

    addVigilance(context, {
      type: "hypoglycemie",
      level: "information",
      source: "pathologie:diabete",
      message:
        "Surveillance des symptômes évocateurs d’hypoglycémie pendant l’activité physique."
    });
  }

/*
 * RECOMMANDATIONS CONTEXTUELLES
 */

if (pathologies.includes("hta")) {

  context.recommandations.push({
    type: "surveillance",
    source: "pathologie:hta",

    message:
      "Surveillance de la tolérance tensionnelle pendant l’activité physique."
  });
}

if (
  pathologies.includes("diabete") ||
  pathologies.includes("dt2")
) {

  context.recommandations.push({
    type: "surveillance",
    source: "pathologie:diabete",

    message:
      "Surveillance des symptômes évocateurs d’hypoglycémie pendant l’activité physique."
  });
}

  /*
   * RESOURCES
   */

  RESOURCE_REGISTRY.forEach(resource => {

    const matchesPathology =
      resource.contexts?.pathologies?.some(
        patho => pathologies.includes(patho)
      );

    if (matchesPathology) {
      context.resources.push(resource);
    }
  });

  return context;
}

function getContextResourcesByOutput(
  clinicalContext,
  output
) {

  if (!clinicalContext?.resources) {
    return [];
  }

  return clinicalContext.resources.filter(resource =>
    resource.outputs?.includes(output)
  );
}

function getContextRecommendationsByType(
  clinicalContext,
  type
) {

  if (!clinicalContext?.recommandations) {
    return [];
  }

  return clinicalContext.recommandations.filter(
    recommendation =>
      recommendation.type === type
  );
}

window.getContextRecommendationsByType =
  getContextRecommendationsByType;
  
window.getContextResourcesByOutput =
  getContextResourcesByOutput;

window.computeClinicalContext =
  computeClinicalContext;