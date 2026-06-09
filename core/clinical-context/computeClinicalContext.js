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
 * FUTURE CONTEXT CATEGORIES
 */

// TODO Phase 2:
// migrer progressivement vers :
// - context.precautions
// - context.adaptations
// - context.supervision
// selon le type clinique réel


/*
 * RECOMMANDATIONS CONTEXTUELLES
 */

if (pathologies.includes("hta")) {

  context.precautions.push({
    type: "surveillance",
    source: "pathologie:hta",
    sourceLabel: "HTA",

    message:
      "Surveillance de la tolérance tensionnelle pendant l’activité physique."
  });

context.adaptations.push({
  type: "endurance",

  source: "pathologie:hta",
  sourceLabel: "HTA",

  message:
    "Privilégier les activités d’endurance régulières."
});

  context.adaptations.push({
    type: "intensity",

    source: "pathologie:hta",
    sourceLabel: "HTA",

    message:
      "Adapter progressivement l’intensité selon la tolérance tensionnelle."
  });

  context.patientMessages.push({
  type: "conseil",
  source: "pathologie:hta",
  sourceLabel: "HTA",

  message:
    "Privilégier les activités d’endurance régulières."
});
}
  
if (
  pathologies.includes("diabete") ||
  pathologies.includes("dt2")
) {

  context.precautions.push({
    type: "surveillance",
    source: "pathologie:diabete",
    sourceLabel: "DT2",
    message:
      "Surveillance des symptômes évocateurs d’hypoglycémie pendant l’activité physique."
  });

  context.adaptations.push({
  type: "nutrition",

  source: "pathologie:diabete",

  sourceLabel: "DT2",

  message:
    "adapter les apports alimentaires à l’activité."
});

context.patientMessages.push({
  type: "conseil",
  source: "pathologie:diabete",
  sourceLabel: "DT2",

  message:
    "Adapter les apports alimentaires à l’activité."
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