param(
  [string]$WorkbookPath = (
    Join-Path `
      $PSScriptRoot `
      "..\..\data\resources\source\PAP_Bibliotheque_Ressources_Tableur_Maitre_v1.xlsx"
  )
)

$ErrorActionPreference = "Stop"

$expectedSheets = @(
  "README",
  "RESSOURCES",
  "PATHOLOGIES",
  "THEMES",
  "REFERENTIELS"
)

$requiredResourceHeaders = @(
  "resource_id",
  "status",
  "title",
  "short_label",
  "publisher",
  "resource_type",
  "content_format",
  "audiences",
  "contexts_allowed",
  "hosting_type",
  "qr_enabled",
  "requires_internet",
  "offline_content",
  "language",
  "display_order"
)

$expectedPilotIds = @(
  "has-hta-information-001",
  "has-dt2-information-001",
  "has-arthrose-information-001"
)

$errors = New-Object System.Collections.Generic.List[string]
$warnings = New-Object System.Collections.Generic.List[string]

$excel = $null
$workbook = $null

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

  Write-Host ""
  Write-Host "Validation du classeur PAP"
  Write-Host "Fichier : $resolvedWorkbookPath"
  Write-Host ""

  $sheetNames = @(
    foreach (
      $worksheet in $workbook.Worksheets
    ) {
      $worksheet.Name
    }
  )

  foreach ($expectedSheet in $expectedSheets) {
    if ($sheetNames -notcontains $expectedSheet) {
      $errors.Add(
        "Feuille obligatoire absente : $expectedSheet"
      )
    }
  }

  if ($errors.Count -gt 0) {
    throw "Structure générale du classeur invalide."
  }

  $resourcesSheet =
    $workbook.Worksheets.Item("RESSOURCES")

  $pathologiesSheet =
    $workbook.Worksheets.Item("PATHOLOGIES")

  $themesSheet =
    $workbook.Worksheets.Item("THEMES")

  $referentialsSheet =
    $workbook.Worksheets.Item("REFERENTIELS")

  $resourceHeaders =
    Get-HeaderMap $resourcesSheet

  foreach ($requiredHeader in $requiredResourceHeaders) {
    if (
      -not $resourceHeaders.ContainsKey(
        $requiredHeader
      )
    ) {
      $errors.Add(
        "Colonne obligatoire absente dans RESSOURCES : $requiredHeader"
      )
    }
  }

  if ($errors.Count -gt 0) {
    throw "Colonnes obligatoires absentes."
  }

  $pathologyIds = @{}

  for (
    $row = 2;
    $row -le $pathologiesSheet.UsedRange.Rows.Count;
    $row++
  ) {
    $pathologyId =
      Get-CellText `
        -Worksheet $pathologiesSheet `
        -Row $row `
        -Column 1

    if ($pathologyId) {
      $pathologyIds[$pathologyId] = $true
    }
  }

  $topicIds = @{}

  for (
    $row = 2;
    $row -le $themesSheet.UsedRange.Rows.Count;
    $row++
  ) {
    $topicId =
      Get-CellText `
        -Worksheet $themesSheet `
        -Row $row `
        -Column 1

    if ($topicId) {
      $topicIds[$topicId] = $true
    }
  }

  $allowedStatuses = @{}

  for (
    $row = 4;
    $row -le $referentialsSheet.UsedRange.Rows.Count;
    $row++
  ) {
    $status =
      Get-CellText `
        -Worksheet $referentialsSheet `
        -Row $row `
        -Column 5

    if ($status) {
      $allowedStatuses[$status] = $true
    }
  }

  $seenIds = @{}
  $pilotStatus = @{}
  $activeCount = 0
  $draftCount = 0

  for (
    $row = 2;
    $row -le $resourcesSheet.UsedRange.Rows.Count;
    $row++
  ) {
    $resourceId =
      Get-CellText `
        -Worksheet $resourcesSheet `
        -Row $row `
        -Column $resourceHeaders["resource_id"]

    if (-not $resourceId) {
      continue
    }

    if ($seenIds.ContainsKey($resourceId)) {
      $errors.Add(
        "Identifiant dupliqué ligne $row : $resourceId"
      )
    }
    else {
      $seenIds[$resourceId] = $true
    }

    $status =
      Get-CellText `
        -Worksheet $resourcesSheet `
        -Row $row `
        -Column $resourceHeaders["status"]

    if (
      -not $allowedStatuses.ContainsKey($status)
    ) {
      $errors.Add(
        "Statut non contrôlé ligne $row pour $resourceId : $status"
      )
    }

    if ($status -eq "active") {
      $activeCount++
    }

    if ($status -eq "draft") {
      $draftCount++
    }

    foreach ($requiredHeader in $requiredResourceHeaders) {
      $value =
        Get-CellText `
          -Worksheet $resourcesSheet `
          -Row $row `
          -Column $resourceHeaders[$requiredHeader]

      if (-not $value) {
        $errors.Add(
          "Valeur obligatoire absente ligne $row, ressource $resourceId : $requiredHeader"
        )
      }
    }

    $pathologyValues =
      Split-MultipleValues (
        Get-CellText `
          -Worksheet $resourcesSheet `
          -Row $row `
          -Column $resourceHeaders["pathology_ids"]
      )

    foreach ($pathologyValue in $pathologyValues) {
      if (
        -not $pathologyIds.ContainsKey(
          $pathologyValue
        )
      ) {
        $errors.Add(
          "Pathologie inconnue ligne $row pour $resourceId : $pathologyValue"
        )
      }
    }

    $topicValues =
      Split-MultipleValues (
        Get-CellText `
          -Worksheet $resourcesSheet `
          -Row $row `
          -Column $resourceHeaders["topic_ids"]
      )

    foreach ($topicValue in $topicValues) {
      if (
        -not $topicIds.ContainsKey(
          $topicValue
        )
      ) {
        $errors.Add(
          "Thème inconnu ligne $row pour $resourceId : $topicValue"
        )
      }
    }

    if ($status -eq "active") {
      $canonicalUrl =
        Get-CellText `
          -Worksheet $resourcesSheet `
          -Row $row `
          -Column $resourceHeaders["canonical_url"]

      if (
        -not $canonicalUrl.StartsWith(
          "https://"
        )
      ) {
        $errors.Add(
          "URL HTTPS obligatoire pour la ressource active $resourceId"
        )
      }

      foreach (
        $activeHeader in @(
          "verified_at",
          "next_review_at",
          "url_status"
        )
      ) {
        $activeValue =
          Get-CellText `
            -Worksheet $resourcesSheet `
            -Row $row `
            -Column $resourceHeaders[$activeHeader]

        if (-not $activeValue) {
          $errors.Add(
            "Champ obligatoire pour une ressource active $resourceId : $activeHeader"
          )
        }
      }
    }

    $qrEnabled =
      Get-CellText `
        -Worksheet $resourcesSheet `
        -Row $row `
        -Column $resourceHeaders["qr_enabled"]

    if ($qrEnabled -eq "VRAI") {
      $qrTarget =
        Get-CellText `
          -Worksheet $resourcesSheet `
          -Row $row `
          -Column $resourceHeaders["qr_target"]

      if (-not $qrTarget) {
        $errors.Add(
          "qr_target absent alors que qr_enabled est vrai pour $resourceId"
        )
      }
    }

    if ($expectedPilotIds -contains $resourceId) {
      $pilotStatus[$resourceId] = $status
    }
  }

  foreach ($pilotId in $expectedPilotIds) {
    if (-not $pilotStatus.ContainsKey($pilotId)) {
      $errors.Add(
        "Ressource pilote absente : $pilotId"
      )
    }
    elseif ($pilotStatus[$pilotId] -ne "active") {
      $errors.Add(
        "Ressource pilote non active : $pilotId"
      )
    }
  }

  Write-Host "Ressources actives : $activeCount"
  Write-Host "Ressources draft   : $draftCount"
  Write-Host ""

  if ($warnings.Count -gt 0) {
    Write-Host "AVERTISSEMENTS"
    foreach ($warning in $warnings) {
      Write-Host "- $warning"
    }
    Write-Host ""
  }

  if ($errors.Count -gt 0) {
    Write-Host "ERREURS"
    foreach ($validationError in $errors) {
      Write-Host "- $validationError"
    }

    Write-Host ""
    Write-Host "VALIDATION ÉCHOUÉE"
    exit 1
  }

  Write-Host "VALIDATION RÉUSSIE"
  Write-Host "Aucune modification du classeur."
  exit 0
}
catch {
  if (
    $errors.Count -eq 0
  ) {
    Write-Host "ERREUR TECHNIQUE"
    Write-Host $_.Exception.Message
  }
  else {
    Write-Host ""
    Write-Host "ERREURS"
    foreach ($validationError in $errors) {
      Write-Host "- $validationError"
    }
  }

  exit 1
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

