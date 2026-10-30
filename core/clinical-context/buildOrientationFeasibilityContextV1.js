(function () {
  "use strict";

  // T3.5 — Projection descriptive des données de faisabilité déjà recueillies.
  // Ne lit pas le DOM, ne produit pas de message, n'infère pas U et ne choisit pas de niveau.
  // Reçoit l'objet engagement en argument : aucun chemin de modèle n'est présumé ici.
  const COMMON_VALUES = new Set(["difficulty", "no_difficulty", "not_explored"]);
  const SUPPORT_VALUES = new Set(["available", "limited_or_absent", "not_explored"]);

  function copyList(value) {
    return Array.isArray(value)
      ? value.map(function (item) {
          return item && typeof item === "object" && !Array.isArray(item)
            ? { ...item }
            : item;
        })
      : [];
  }

  function readPractical(source, field, allowed, invalidValues) {
    const value = source && typeof source === "object" ? source[field] : null;
    if (value === null || value === undefined || value === "") return null;
    if (allowed.has(value)) return value;

    // Conserver explicitement les valeurs non reconnues pour ne jamais
    // interpréter silencieusement une donnée invalide comme une absence de difficulté.
    invalidValues.push({ field: "practical_context." + field, value });
    return null;
  }

  function buildOrientationFeasibilityContextV1(engagement) {
    const available = Boolean(
      engagement && typeof engagement === "object" && !Array.isArray(engagement)
    );
    const source = available ? engagement : {};
    const practical = source.practical_context;
    const preferences = source.preferences && typeof source.preferences === "object"
      ? source.preferences
      : {};
    const invalidValues = [];

    return {
      version: "1.0.0",
      sourceAvailable: available,
      // null = non renseigné ; "not_explored" = explicitement non exploré.
      practical: {
        timeOrganization: readPractical(practical, "time_organization", COMMON_VALUES, invalidValues),
        cost: readPractical(practical, "cost", COMMON_VALUES, invalidValues),
        accessTransport: readPractical(practical, "access_transport", COMMON_VALUES, invalidValues),
        support: readPractical(practical, "support", SUPPORT_VALUES, invalidValues)
      },
      preferences: {
        activities: copyList(preferences.activities),
        intensity: typeof preferences.intensity === "string" && preferences.intensity.trim()
          ? preferences.intensity
          : null,
        settings: copyList(preferences.settings),
        socialModes: copyList(preferences.social_modes)
      },
      activitiesCurrent: copyList(source.activities_current),
      // Les questionnaires GPAQ/Marshall sont hors de ce sous-module tant que
      // leur chemin dans prototypeModel n'a pas été identifié précisément.
      invalidValues
    };
  }

  window.buildOrientationFeasibilityContextV1 =
    buildOrientationFeasibilityContextV1;
})();
