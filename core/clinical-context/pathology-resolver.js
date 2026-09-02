// core/clinical-context/pathology-resolver.js

/*
 * PAP — Pathology Resolver
 *
 * API transversale de résolution des identités pathologiques.
 *
 * Ne contient aucune connaissance clinique.
 * Consomme uniquement window.PATHOLOGY_REGISTRY.
 */

(function () {
  "use strict";


  function normalizePathologyLookupValue(
    value
  ) {
    return String(
      value ?? ""
    )
      .trim()
      .toLowerCase();
  }


  function getPathologyRegistryEntries() {
    const registry =
      window.PATHOLOGY_REGISTRY;

    if (
      !registry ||
      typeof registry !== "object"
    ) {
      return [];
    }

    return Object.values(
      registry
    );
  }


  function normalizePathologyId(
    pathologyId
  ) {
    const normalizedValue =
      normalizePathologyLookupValue(
        pathologyId
      );

    if (!normalizedValue) {
      return "";
    }

    const registry =
      window.PATHOLOGY_REGISTRY;

    if (
      registry &&
      typeof registry === "object" &&
      registry[normalizedValue]
    ) {
      return registry[
        normalizedValue
      ].id;
    }

    const matchingEntry =
      getPathologyRegistryEntries()
        .find(function (entry) {

          if (
            !entry ||
            typeof entry !== "object"
          ) {
            return false;
          }

          const aliases =
            Array.isArray(
              entry.aliases
            )
              ? entry.aliases
              : [];

          return aliases.some(
            function (alias) {
              return (
                normalizePathologyLookupValue(
                  alias
                ) ===
                normalizedValue
              );
            }
          );
        });

    if (
      matchingEntry &&
      matchingEntry.id
    ) {
      return matchingEntry.id;
    }

    return normalizedValue;
  }


  function getPathologyDefinition(
    pathologyId
  ) {
    const canonicalId =
      normalizePathologyId(
        pathologyId
      );

    if (!canonicalId) {
      return null;
    }

    const registry =
      window.PATHOLOGY_REGISTRY;

    if (
      !registry ||
      typeof registry !== "object"
    ) {
      return null;
    }

    return (
      registry[canonicalId] ||
      null
    );
  }


  function getPathologyLabel(
    pathologyId
  ) {
    const definition =
      getPathologyDefinition(
        pathologyId
      );

    if (
      definition &&
      definition.label
    ) {
      return definition.label;
    }

    return String(
      pathologyId ?? ""
    ).trim();
  }


  function getPathologyShortLabel(
    pathologyId
  ) {
    const definition =
      getPathologyDefinition(
        pathologyId
      );

    if (definition) {
      return (
        definition.shortLabel ||
        definition.label ||
        String(
          pathologyId ?? ""
        ).trim()
      );
    }

    return String(
      pathologyId ?? ""
    ).trim();
  }


  function getPathologyDisplayLabel(
    pathologyId,
    options = {}
  ) {
    const variant =
      options?.variant === "short"
        ? "short"
        : "full";

    return variant === "short"
      ? getPathologyShortLabel(
          pathologyId
        )
      : getPathologyLabel(
          pathologyId
        );
  }


  window.normalizePathologyId =
    normalizePathologyId;

  window.getPathologyDefinition =
    getPathologyDefinition;

  window.getPathologyLabel =
    getPathologyLabel;

  window.getPathologyShortLabel =
    getPathologyShortLabel;

  window.getPathologyDisplayLabel =
    getPathologyDisplayLabel;
})();