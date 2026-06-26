const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { isDeepStrictEqual } = require("node:util");

const projectRoot =
  path.resolve(__dirname, "..", "..");

const defaultCurrentPath =
  path.join(
    projectRoot,
    "core",
    "clinical-context",
    "resource-registry.js"
  );

const defaultGeneratedPath =
  path.join(
    projectRoot,
    "data",
    "resources",
    "generated",
    "resource-registry.generated.js"
  );

const currentPath =
  path.resolve(
    process.argv[2] || defaultCurrentPath
  );

const generatedPath =
  path.resolve(
    process.argv[3] || defaultGeneratedPath
  );

function loadRegistry(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(
      `Fichier introuvable : ${filePath}`
    );
  }

  const source =
    fs.readFileSync(filePath, "utf8");

  const context = {
    window: {}
  };

  vm.createContext(context);

  vm.runInContext(
    source,
    context,
    {
      filename: filePath
    }
  );

  const registry =
    context.window.RESOURCE_REGISTRY;

  if (!Array.isArray(registry)) {
    throw new Error(
      `RESOURCE_REGISTRY absent ou invalide : ${filePath}`
    );
  }

  return JSON.parse(
    JSON.stringify(registry)
  );
}

function buildRegistryMap(
  registry,
  registryLabel
) {
  const map = new Map();

  for (const resource of registry) {
    if (
      !resource ||
      typeof resource !== "object" ||
      Array.isArray(resource)
    ) {
      throw new Error(
        `Élément invalide dans ${registryLabel}`
      );
    }

    if (
      typeof resource.id !== "string" ||
      resource.id.trim() === ""
    ) {
      throw new Error(
        `Ressource sans identifiant dans ${registryLabel}`
      );
    }

    if (map.has(resource.id)) {
      throw new Error(
        `Identifiant dupliqué dans ${registryLabel} : ${resource.id}`
      );
    }

    map.set(
      resource.id,
      resource
    );
  }

  return map;
}

function getValueType(value) {
  if (Array.isArray(value)) {
    return "array";
  }

  if (value === null) {
    return "null";
  }

  return typeof value;
}

function formatValue(value) {
  if (value === undefined) {
    return "<absent>";
  }

  return JSON.stringify(
    value,
    null,
    2
  );
}

function collectDifferences(
  currentValue,
  generatedValue,
  fieldPath,
  differences
) {
  if (
    isDeepStrictEqual(
      currentValue,
      generatedValue
    )
  ) {
    return;
  }

  const currentType =
    getValueType(currentValue);

  const generatedType =
    getValueType(generatedValue);

  if (
    currentType === "object" &&
    generatedType === "object"
  ) {
    const keys = [
      ...new Set([
        ...Object.keys(currentValue),
        ...Object.keys(generatedValue)
      ])
    ].sort();

    for (const key of keys) {
      collectDifferences(
        currentValue[key],
        generatedValue[key],
        fieldPath
          ? `${fieldPath}.${key}`
          : key,
        differences
      );
    }

    return;
  }

  differences.push({
    path: fieldPath || "<racine>",
    currentValue,
    generatedValue
  });
}

function compareRegistries(
  currentRegistry,
  generatedRegistry
) {
  const currentById =
    buildRegistryMap(
      currentRegistry,
      "le registre actuel"
    );

  const generatedById =
    buildRegistryMap(
      generatedRegistry,
      "le registre généré"
    );

  const allIds = [
    ...new Set([
      ...currentById.keys(),
      ...generatedById.keys()
    ])
  ].sort();

  const comparison = {
    missingFromCurrent: [],
    missingFromGenerated: [],
    resourcesWithDifferences: []
  };

  for (const resourceId of allIds) {
    const currentResource =
      currentById.get(resourceId);

    const generatedResource =
      generatedById.get(resourceId);

    if (!currentResource) {
      comparison.missingFromCurrent.push(
        resourceId
      );
      continue;
    }

    if (!generatedResource) {
      comparison.missingFromGenerated.push(
        resourceId
      );
      continue;
    }

    const differences = [];

    collectDifferences(
      currentResource,
      generatedResource,
      "",
      differences
    );

    if (differences.length > 0) {
      comparison.resourcesWithDifferences.push({
        resourceId,
        differences
      });
    }
  }

  return comparison;
}

function printComparison(
  currentRegistry,
  generatedRegistry,
  comparison
) {
  console.log("");
  console.log("Comparaison des registres PAP");
  console.log(
    `Registre actuel : ${currentRegistry.length} ressources`
  );
  console.log(
    `Registre généré : ${generatedRegistry.length} ressources`
  );
  console.log("");

  for (
    const resourceId of
    comparison.missingFromCurrent
  ) {
    console.log(
      `Seulement dans le registre généré : ${resourceId}`
    );
  }

  for (
    const resourceId of
    comparison.missingFromGenerated
  ) {
    console.log(
      `Seulement dans le registre actuel : ${resourceId}`
    );
  }

  for (
    const resourceDifference of
    comparison.resourcesWithDifferences
  ) {
    console.log(
      `Différences : ${resourceDifference.resourceId}`
    );

    for (
      const difference of
      resourceDifference.differences
    ) {
      console.log("");
      console.log(
        `  Champ : ${difference.path}`
      );
      console.log("  Actuel :");
      console.log(
        formatValue(
          difference.currentValue
        )
      );
      console.log("  Généré :");
      console.log(
        formatValue(
          difference.generatedValue
        )
      );
    }

    console.log("");
  }

  const equivalent =
    comparison.missingFromCurrent.length === 0 &&
    comparison.missingFromGenerated.length === 0 &&
    comparison.resourcesWithDifferences.length === 0;

  console.log(
    `ÉQUIVALENCE SÉMANTIQUE : ${
      equivalent ? "OUI" : "NON"
    }`
  );

  return equivalent;
}

try {
  const currentRegistry =
    loadRegistry(currentPath);

  const generatedRegistry =
    loadRegistry(generatedPath);

  const comparison =
    compareRegistries(
      currentRegistry,
      generatedRegistry
    );

  const equivalent =
    printComparison(
      currentRegistry,
      generatedRegistry,
      comparison
    );

  process.exitCode =
    equivalent ? 0 : 1;
}
catch (error) {
  console.error("");
  console.error("COMPARAISON IMPOSSIBLE");
  console.error(error.message);

  process.exitCode = 2;
}
