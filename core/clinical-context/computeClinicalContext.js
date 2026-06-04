// core/clinical-context/computeClinicalContext.js
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

  if (pathologies.includes("diabete")) {

    context.vigilance.push({
      type: "hypoglycemie",
      level: "information",
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