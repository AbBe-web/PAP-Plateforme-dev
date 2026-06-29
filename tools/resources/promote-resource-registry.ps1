param(
  [switch]$Apply
)

$ErrorActionPreference = "Stop"

$generatorPath =
  Join-Path `
    $PSScriptRoot `
    "generate-resource-registry.ps1"

$comparatorPath =
  Join-Path `
    $PSScriptRoot `
    "compare-resource-registries.js"

$projectRoot =
  (
    Resolve-Path (
      Join-Path `
        $PSScriptRoot `
        "..\.."
    )
  ).Path

$sourceWorkbookPath =
  Join-Path `
    $projectRoot `
    "data\resources\source\PAP_Bibliotheque_Ressources_Tableur_Maitre_v1.xlsx"

$generatedRegistryPath =
  Join-Path `
    $projectRoot `
    "data\resources\generated\resource-registry.generated.js"

$productionRegistryPath =
  Join-Path `
    $projectRoot `
    "core\clinical-context\resource-registry.js"

$allowedModifiedPaths = @(
  "data/resources/source/PAP_Bibliotheque_Ressources_Tableur_Maitre_v1.xlsx",
  "data/resources/generated/resource-registry.generated.js",
  "core/clinical-context/resource-registry.js",
  "tools/resources/promote-resource-registry.ps1"
)

function Assert-FileExists {
  param(
    [string]$Path,
    [string]$Label
  )

  if (-not (Test-Path -LiteralPath $Path)) {
    throw "$Label introuvable : $Path"
  }
}

function Assert-NoUnexpectedGitChanges {
  $unexpectedChanges = @()

  $statusLines =
    @(
      & git `
        -C $projectRoot `
        status `
        --porcelain
    )

  foreach ($statusLine in $statusLines) {
    if (-not $statusLine) {
      continue
    }

    $relativePath =
      $statusLine.Substring(3).Trim()

    if (
      $allowedModifiedPaths -notcontains
      $relativePath
    ) {
      $unexpectedChanges +=
        $statusLine
    }
  }

  if ($unexpectedChanges.Count -gt 0) {
    Write-Host ""
    Write-Host "MODIFICATIONS NON ATTENDUES"

    foreach ($unexpectedChange in $unexpectedChanges) {
      Write-Host "- $unexpectedChange"
    }

    throw "Promotion interrompue : le depot contient d’autres modifications."
  }
}

Assert-FileExists `
  -Path $generatorPath `
  -Label "Generateur"

Assert-FileExists `
  -Path $comparatorPath `
  -Label "Comparateur"

Assert-FileExists `
  -Path $sourceWorkbookPath `
  -Label "Classeur maitre"

Assert-FileExists `
  -Path $productionRegistryPath `
  -Label "Registre de production"

Assert-NoUnexpectedGitChanges

Write-Host ""
Write-Host "Generation controlee du registre PAP"
Write-Host ""

& powershell `
  -NoProfile `
  -ExecutionPolicy Bypass `
  -File $generatorPath

if ($LASTEXITCODE -ne 0) {
  throw "Promotion interrompue : la generation a echoue."
}

Assert-FileExists `
  -Path $generatedRegistryPath `
  -Label "Registre genere"

Write-Host ""
Write-Host "Comparaison avant promotion"
Write-Host ""

& node `
  $comparatorPath `
  $productionRegistryPath `
  $generatedRegistryPath

$comparisonBefore =
  $LASTEXITCODE

if ($comparisonBefore -eq 2) {
  throw "Promotion interrompue : comparaison impossible."
}

if ($comparisonBefore -eq 0) {
  Write-Host ""
  Write-Host "AUCUNE PROMOTION NECESSAIRE"
  Write-Host "Le registre de production est deja identique au registre genere."
  exit 0
}

if (-not $Apply) {
  Write-Host ""
  Write-Host "PROMOTION NON APPLIQUEE"
  Write-Host "Des differences existent."
  Write-Host ""
  Write-Host "Apres verification éditoriale, relancer explicitement avec :"
  Write-Host ""
  Write-Host "  -Apply"
  exit 1
}

$backupPath =
  [IO.Path]::GetTempFileName()

try {
  Copy-Item `
    -LiteralPath $productionRegistryPath `
    -Destination $backupPath `
    -Force

  Copy-Item `
    -LiteralPath $generatedRegistryPath `
    -Destination $productionRegistryPath `
    -Force

  Write-Host ""
  Write-Host "Comparaison apres promotion"
  Write-Host ""

  & node `
    $comparatorPath `
    $productionRegistryPath `
    $generatedRegistryPath

  if ($LASTEXITCODE -ne 0) {
    throw "Le registre promu n’est pas equivalent au registre genere."
  }

  & git `
    -C $projectRoot `
    --no-pager `
    diff `
    --check `
    -- `
    "core/clinical-context/resource-registry.js"

  if ($LASTEXITCODE -ne 0) {
    throw "Le registre promu presente une anomalie detectee par git diff --check."
  }

  Write-Host ""
  Write-Host "PROMOTION RÉUSSIE"
  Write-Host "Le registre utilise par PAP correspond au registre genere."
  Write-Host "Aucun commit n’a été cree automatiquement."
}
catch {
  Copy-Item `
    -LiteralPath $backupPath `
    -Destination $productionRegistryPath `
    -Force

  Write-Host ""
  Write-Host "PROMOTION ANNULEE"
  Write-Host "Le registre de production precedent a ete restaure."

  throw
}
finally {
  if (Test-Path -LiteralPath $backupPath) {
    Remove-Item `
      -LiteralPath $backupPath `
      -Force
  }
}