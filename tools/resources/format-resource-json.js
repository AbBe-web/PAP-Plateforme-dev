const fs = require("node:fs");

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
  console.error(
    "Usage: node format-resource-json.js <input.json> <output.json>"
  );
  process.exit(2);
}

try {
  const source =
    fs.readFileSync(inputPath, "utf8");

  const value =
    JSON.parse(source);

  const formatted =
    JSON.stringify(
      value,
      null,
      2
    );

  fs.writeFileSync(
    outputPath,
    formatted,
    "utf8"
  );
}
catch (error) {
  console.error(
    `Échec du formatage JSON : ${error.message}`
  );

  process.exit(1);
}
