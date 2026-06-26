param(
  [string]$WorkbookPath = (
    Join-Path `
      $PSScriptRoot `
      "..\..\data\resources\source\PAP_Bibliotheque_Ressources_Tableur_Maitre_v1.xlsx"
  ),

  [string]$OutputPath = (
    Join-Path `
      $PSScriptRoot `
      "..\..\data\resources\generated\resource-registry.generated.js"
  )
)

$ErrorActionPreference = "Stop"

$validatorPath =
  Join-Path `
    $PSScriptRoot `
    "validate-resource-workbook.ps1"

function Get-CellRaw {
  param(
    $Worksheet,
    [int]$Row,
    [int]$Column
  )

  return $Worksheet.Cells.Item(
    $Row,
    $Column
  ).Value2
}

function Get-CellText {
  param(
    $Worksheet,
    [int]$Row,
    [int]$Column
  )

  return (
    [string]$Worksheet.Cells.Item(
      $Row,
      $Column
    ).Text
  ).Trim()
}

function Get-HeaderMap {
  param($Worksheet)

  $map = @{}
  $columnCount =
    $Worksheet.UsedRange.Columns.Count

  for (
    $column = 1;
    $column -le $columnCount;
    $column++
  ) {
    $header =
      Get-CellText `
        -Worksheet $Worksheet `
        -Row 1 `
        -Column $column

    if ($header) {
      $map[$header] = $column
    }
  }

  return $map
}

function Get-FieldText {
  param(
    $Worksheet,
    [hashtable]$Headers,
    [int]$Row,
    [string]$Name
  )

  if (-not $Headers.ContainsKey($Name)) {
    return ""
  }

  return Get-CellText `
    -Worksheet $Worksheet `
    -Row $Row `
    -Column $Headers[$Name]
}

function Get-FieldRaw {
  param(
    $Worksheet,
    [hashtable]$Headers,
    [int]$Row,
    [string]$Name
  )

  if (-not $Headers.ContainsKey($Name)) {
    return $null
  }

  return Get-CellRaw `
    -Worksheet $Worksheet `
    -Row $Row `
    -Column $Headers[$Name]
}

function Split-MultipleValues {
  param([string]$Value)

  if ([string]::IsNullOrWhiteSpace($Value)) {
    return @()
  }

  return @(
    $Value.Split("|") |
    ForEach-Object {
      $_.Trim()
    } |
    Where-Object {
      $_
    }
  )
}

function ConvertTo-PapBoolean {
  param($Value)

  if ($Value -is [bool]) {
    return $Value
  }

  $normalized =
    ([string]$Value).Trim().ToLowerInvariant()

  return $normalized -in @(
    "true",
    "vrai",
    "1",
    "yes",
    "oui"
  )
}

function ConvertTo-IsoDate {
  param($Value)

  if ($null -eq $Value -or $Value -eq "") {
    return $null
  }

  if (
    $Value -is [double] -or
    $Value -is [int]
  ) {
    return [DateTime]::FromOADate(
      [double]$Value
    ).ToString("yyyy-MM-dd")
  }

  if ($Value -is [DateTime]) {
    return $Value.ToString("yyyy-MM-dd")
  }

  $parsedDate = [DateTime]::MinValue

  if (
    [DateTime]::TryParse(
      [string]$Value,
      [ref]$parsedDate
    )
  ) {
    return $parsedDate.ToString("yyyy-MM-dd")
  }

  throw "Date illisible : $Value"
}

function Get-SourceLabel {
  param([string]$Publisher)

  switch -Regex ($Publisher) {
    "Haute Autorité de santé" {
      return "HAS"
    }

    "^PAP$" {
      return "PAP"
    }

    default {
      return $Publisher
    }
  }
}

function Get-QrTarget {
  param([string]$WorkbookTarget)

  if ($WorkbookTarget -eq "canonical_url") {
    return "url"
  }

  return $WorkbookTarget
}

function Get-Outputs {
  param(
    [string[]]$ContextsAllowed,
    [bool]$QrEnabled
  )

  $outputs =
    New-Object System.Collections.Generic.List[string]

  if (
    $ContextsAllowed -contains
    "consultation_context"
  ) {
    $outputs.Add("crc")
  }

  if (
    $ContextsAllowed -contains
    "patient_output"
  ) {
    $outputs.Add("patient")
  }

  if (
    $ContextsAllowed -contains
    "prescription_output"
  ) {
    $outputs.Add("ordonnance")
  }

  if ($QrEnabled) {
    $outputs.Add("qr")
  }

  return @($outputs)
}

if (-not (Test-Path -LiteralPath $validatorPath)) {
  throw "Validateur introuvable : $validatorPath"
}

& powershell `
  -NoProfile `
  -ExecutionPolicy Bypass `
  -File $validatorPath `
  -WorkbookPath $WorkbookPath

if ($LASTEXITCODE -ne 0) {
  throw "Génération interrompue : validation du classeur échouée."
}

$excel = $null
$workbook = $null

try {
  $resolvedWorkbookPath =
    (Resolve-Path -LiteralPath $WorkbookPath).Path

  $excel =
    New-Object -ComObject Excel.Application

  $excel.Visible = $false
  $excel.DisplayAlerts = $false

  $workbook =
    $excel.Workbooks.Open(
      $resolvedWorkbookPath,
      0,
      $true
    )

  $resourcesSheet =
    $workbook.Worksheets.Item("RESSOURCES")

  $headers =
    Get-HeaderMap $resourcesSheet

  $resources =
    New-Object System.Collections.Generic.List[object]

  for (
    $row = 2;
    $row -le $resourcesSheet.UsedRange.Rows.Count;
    $row++
  ) {
    $resourceId =
      Get-FieldText `
        -Worksheet $resourcesSheet `
        -Headers $headers `
        -Row $row `
        -Name "resource_id"

    if (-not $resourceId) {
      continue
    }

    $status =
      Get-FieldText `
        -Worksheet $resourcesSheet `
        -Headers $headers `
        -Row $row `
        -Name "status"

    if ($status -ne "active") {
      continue
    }

    $audiences =
      Split-MultipleValues (
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "audiences"
      )

    $contextsAllowed =
      Split-MultipleValues (
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "contexts_allowed"
      )

    $pathologyIds =
      Split-MultipleValues (
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "pathology_ids"
      )

    $topicIds =
      Split-MultipleValues (
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "topic_ids"
      )

    $specialtyIds =
      Split-MultipleValues (
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "specialty_ids"
      )

    $trainingTopicIds =
      Split-MultipleValues (
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "training_topic_ids"
      )

    $trainingRoles =
      Split-MultipleValues (
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "training_roles"
      )

    $tags =
      Split-MultipleValues (
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "keywords"
      )

    $qrEnabled =
      ConvertTo-PapBoolean (
        Get-FieldRaw `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "qr_enabled"
      )

    $trainingEnabled =
      ConvertTo-PapBoolean (
        Get-FieldRaw `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "training_enabled"
      )

    $displayOrderRaw =
      Get-FieldRaw `
        -Worksheet $resourcesSheet `
        -Headers $headers `
        -Row $row `
        -Name "display_order"

    $resource = [ordered]@{
      id = $resourceId

      status = $status

      title =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "title"

      label =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "short_label"

      description =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "description"

      publisher =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "publisher"

      sourceLabel =
        Get-SourceLabel (
          Get-FieldText `
            -Worksheet $resourcesSheet `
            -Headers $headers `
            -Row $row `
            -Name "publisher"
        )

      type =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "resource_type"

      format =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "content_format"

      audience = @($audiences)

      contextsAllowed = @($contextsAllowed)

      contexts = [ordered]@{
        pathologies = @($pathologyIds)
      }

      topics = @($topicIds)

      specialties = @($specialtyIds)

      hostingType =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "hosting_type"

      url =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "canonical_url"

      patientIntro =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "patient_intro"

      clinicianIntro =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "clinician_intro"

      prescriptionLabel =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "prescription_label"

      trainingIntro =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "training_intro"

      outputs =
        @(
          Get-Outputs `
            -ContextsAllowed $contextsAllowed `
            -QrEnabled $qrEnabled
        )

      qr = [ordered]@{
        enabled = $qrEnabled

        target =
          Get-QrTarget (
            Get-FieldText `
              -Worksheet $resourcesSheet `
              -Headers $headers `
              -Row $row `
              -Name "qr_target"
          )
      }

      requiresInternet =
        ConvertTo-PapBoolean (
          Get-FieldRaw `
            -Worksheet $resourcesSheet `
            -Headers $headers `
            -Row $row `
            -Name "requires_internet"
        )

      offlineContent =
        ConvertTo-PapBoolean (
          Get-FieldRaw `
            -Worksheet $resourcesSheet `
            -Headers $headers `
            -Row $row `
            -Name "offline_content"
        )

      sourceVersion =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "source_version"

      publicationDate =
        ConvertTo-IsoDate (
          Get-FieldRaw `
            -Worksheet $resourcesSheet `
            -Headers $headers `
            -Row $row `
            -Name "publication_date"
        )

      verifiedAt =
        ConvertTo-IsoDate (
          Get-FieldRaw `
            -Worksheet $resourcesSheet `
            -Headers $headers `
            -Row $row `
            -Name "verified_at"
        )

      nextReviewAt =
        ConvertTo-IsoDate (
          Get-FieldRaw `
            -Worksheet $resourcesSheet `
            -Headers $headers `
            -Row $row `
            -Name "next_review_at"
        )

      urlStatus =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "url_status"

      rightsStatus =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "rights_status"

      copyrightHolder =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "copyright_holder"

      attribution =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "attribution_text"

      training = [ordered]@{
        enabled = $trainingEnabled
        topicIds = @($trainingTopicIds)
        roles = @($trainingRoles)
      }

      language =
        Get-FieldText `
          -Worksheet $resourcesSheet `
          -Headers $headers `
          -Row $row `
          -Name "language"

      displayOrder =
        [int]$displayOrderRaw

      tags = @($tags)
    }

    $resources.Add(
      [PSCustomObject]$resource
    )
  }

  $sortedResources =
    @(
      $resources |
      Sort-Object `
        displayOrder,
        id
    )

  $compactJson =
    $sortedResources |
    ConvertTo-Json `
      -Depth 12 `
      -Compress

  $formatterPath =
    Join-Path `
      $PSScriptRoot `
      "format-resource-json.js"

  if (-not (Test-Path -LiteralPath $formatterPath)) {
    throw "Formateur JSON introuvable : $formatterPath"
  }

  $temporaryInputPath =
    [IO.Path]::GetTempFileName()

  $temporaryOutputPath =
    [IO.Path]::GetTempFileName()

  $utf8WithoutBom =
    New-Object System.Text.UTF8Encoding(
      $false
    )

  try {
    [IO.File]::WriteAllText(
      $temporaryInputPath,
      $compactJson,
      $utf8WithoutBom
    )

    & node `
      $formatterPath `
      $temporaryInputPath `
      $temporaryOutputPath

    if ($LASTEXITCODE -ne 0) {
      throw "Échec du formatage JSON par Node."
    }

    $json =
      [IO.File]::ReadAllText(
        $temporaryOutputPath,
        $utf8WithoutBom
      )
  }
  finally {
    foreach (
      $temporaryPath in @(
        $temporaryInputPath,
        $temporaryOutputPath
      )
    ) {
      if (
        Test-Path `
          -LiteralPath $temporaryPath
      ) {
        Remove-Item `
          -LiteralPath $temporaryPath `
          -Force
      }
    }
  }

  $outputDirectory =
    Split-Path `
      -Parent `
      $OutputPath

  New-Item `
    -ItemType Directory `
    -Path $outputDirectory `
    -Force |
  Out-Null

  $generatedContent = @"
// GENERATED FILE — DO NOT EDIT MANUALLY
// Source: data/resources/source/PAP_Bibliotheque_Ressources_Tableur_Maitre_v1.xlsx
// Generator: tools/resources/generate-resource-registry.ps1
//
// Only validated resources with status "active" are exported.
// Final resource selection remains under the physician's control.

const RESOURCE_REGISTRY = $json;

window.RESOURCE_REGISTRY =
  RESOURCE_REGISTRY;
"@

  Set-Content `
    -LiteralPath $OutputPath `
    -Value $generatedContent `
    -Encoding UTF8

  Write-Host ""
  Write-Host "GÉNÉRATION RÉUSSIE"
  Write-Host "Ressources exportées : $($sortedResources.Count)"
  Write-Host "Fichier : $OutputPath"
  Write-Host "Registre de production non modifié."
}
finally {
  if ($workbook) {
    $workbook.Close($false)

    [void][Runtime.InteropServices.Marshal]::ReleaseComObject(
      $workbook
    )
  }

  if ($excel) {
    $excel.Quit()

    [void][Runtime.InteropServices.Marshal]::ReleaseComObject(
      $excel
    )
  }

  [GC]::Collect()
  [GC]::WaitForPendingFinalizers()
}
