const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");
const util = require("util");

const projectRoot = path.resolve(
  __dirname,
  "..",
  ".."
);

const manualRegistryPath = path.join(
  projectRoot,
  "core",
  "clinical-context",
  "pathology-knowledge-registry.js"
);

const generatedRegistryPath = path.join(
  projectRoot,
  "data",
  "clinical-knowledge",
  "generated",
  "pathology-knowledge-registry.generated.js"
);


function loadRegistry(filePath) {

  if (!fs.existsSync(filePath)) {
    throw new Error(
      `Fichier introuvable : ${filePath}`
    );
  }

  const source =
    fs.readFileSync(
      filePath,
      "utf8"
    );

  const sandbox = {
    window: {}
  };

  vm.createContext(sandbox);

  vm.runInContext(
    source,
    sandbox,
    {
      filename: filePath
    }
  );

  const registry =
    sandbox.window
      .PATHOLOGY_KNOWLEDGE_REGISTRY;

  if (!Array.isArray(registry)) {
    throw new Error(
      `Registry invalide dans : ${filePath}`
    );
  }

  /*
   * Conversion vers des objets natifs Node.
   * Les objets créés dans un contexte vm ont
   * sinon des prototypes différents.
   */
  return JSON.parse(
    JSON.stringify(registry)
  );
}


function getItemMap(registry) {

  const map =
    new Map();

  registry.forEach(
    item => {

      if (!item?.id) {
        throw new Error(
          "KnowledgeItem sans ID."
        );
      }

      if (map.has(item.id)) {
        throw new Error(
          `KnowledgeItem ID dupliqué : ${item.id}`
        );
      }

      map.set(
        item.id,
        item
      );
    }
  );

  return map;
}


function compareRegistries(
  manualRegistry,
  generatedRegistry
) {

  const errors = [];

  const manualMap =
    getItemMap(
      manualRegistry
    );

  const generatedMap =
    getItemMap(
      generatedRegistry
    );


  const manualIds =
    [...manualMap.keys()]
      .sort();

  const generatedIds =
    [...generatedMap.keys()]
      .sort();


  const missingInGenerated =
    manualIds.filter(
      id =>
        !generatedMap.has(id)
    );


  const unexpectedInGenerated =
    generatedIds.filter(
      id =>
        !manualMap.has(id)
    );


  if (
    missingInGenerated.length > 0
  ) {

    errors.push({
      type: "missing_in_generated",
      ids: missingInGenerated
    });
  }


  if (
    unexpectedInGenerated.length > 0
  ) {

    errors.push({
      type: "unexpected_in_generated",
      ids: unexpectedInGenerated
    });
  }


  const commonIds =
    manualIds.filter(
      id =>
        generatedMap.has(id)
    );


  const itemMismatches = [];


  commonIds.forEach(
    id => {

      const manualItem =
        manualMap.get(id);

      const generatedItem =
        generatedMap.get(id);

      try {

        assert.deepStrictEqual(
          generatedItem,
          manualItem
        );

      }
      catch {

        itemMismatches.push({
          id,
          manual: manualItem,
          generated: generatedItem
        });

      }
    }
  );


  if (
    itemMismatches.length > 0
  ) {

    errors.push({
      type: "item_mismatches",
      count:
        itemMismatches.length,
      items:
        itemMismatches
    });
  }


  return {

    valid:
      errors.length === 0,

    manualCount:
      manualRegistry.length,

    generatedCount:
      generatedRegistry.length,

    missingInGenerated,

    unexpectedInGenerated,

    itemMismatchCount:
      itemMismatches.length,

    itemMismatches,

    errors
  };
}


try {

  console.log("");
  console.log(
    "Comparaison des registries cliniques PAP"
  );
  console.log("");


  const manualRegistry =
    loadRegistry(
      manualRegistryPath
    );


  const generatedRegistry =
    loadRegistry(
      generatedRegistryPath
    );


  const result =
    compareRegistries(
      manualRegistry,
      generatedRegistry
    );


  console.log(
    `Registry manuel : ${result.manualCount} items`
  );

  console.log(
    `Registry généré : ${result.generatedCount} items`
  );

  console.log("");


  if (!result.valid) {

    console.error(
      "ECHEC : les registries ne sont pas équivalents."
    );

    console.error(
      util.inspect(
        result,
        {
          depth: 20,
          colors: true
        }
      )
    );

    process.exitCode = 1;

  }
  else {

    console.log(
      "OK : équivalence complète manuel ↔ généré."
    );

    console.log(
      "15 KnowledgeItems comparés sans divergence."
    );

  }

}
catch (error) {

  console.error("");
  console.error(
    "Erreur pendant la comparaison :"
  );

  console.error(
    error
  );

  process.exitCode = 1;
}