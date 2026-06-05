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

window.computeClinicalContext =
  computeClinicalContext;