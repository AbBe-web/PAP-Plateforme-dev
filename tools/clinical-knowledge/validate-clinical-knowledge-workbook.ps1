param(
  [string]$WorkbookPath = (
    Join-Path `
      $PSScriptRoot `
      "..\..\data\clinical-knowledge\PAP_Connaissances_Cliniques_Tableur_Maitre_v1.xlsx"
  )
)

$ErrorActionPreference = "Stop"

# ============================================================
# PAP — Validation du tableur maître des connaissances cliniques
#
# Lecture seule.
# Ne modifie ni le classeur, ni les registries, ni PATHO_DATA.
# ============================================================


$expectedSheets = @(
  "README",
  "KnowledgeItems",
  "ClinicalUses",
  "Contexts",
  "LegacyOrigins",
  "EvidenceRefs",
  "ResourceRefs",
  "PresentationTargets",
  "ClinicalMoments",
  "Lists",
  "Pathologies"
)


$requiredHeaders = @{

  "KnowledgeItems" = @(
    "id",
    "messageClinician",
    "messagePatient",
    "conditionType",
    "conditionDescription",
    "defaultSelected",
    "status",
    "version",
    "notes"
  )

  "ClinicalUses" = @(
    "knowledgeItemId",
    "function",
    "category"
  )

  "Contexts" = @(
    "knowledgeItemId",
    "pathologiesAny",
    "medicationsAny",
    "situationsAny",
    "limitationsAny",
    "ageGroupsAny",
    "sexAny",
    "otherAny"
  )

  "LegacyOrigins" = @(
    "knowledgeItemId",
    "pathologyId",
    "field",
    "index"
  )

  "EvidenceRefs" = @(
    "knowledgeItemId",
    "evidenceSourceId"
  )

  "ResourceRefs" = @(
    "knowledgeItemId",
    "resourceId"
  )

  "PresentationTargets" = @(
    "knowledgeItemId",
    "target"
  )

  "ClinicalMoments" = @(
    "knowledgeItemId",
    "moment",
    "conditionType",
    "conditionDescription",
    "messageClinicianOverride",
    "notes"
  )

  "Pathologies" = @(
    "id",
    "label",
    "shortLabel",
    "aliases"
  )
}


$allowedClinicalFunctions = @(
  "safety",
  "prescriptionGuidance",
  "patientInformation",
  "orientationFactors"
)


$allowedConditionTypes = @(
  "always",
  "contextual",
  "clinicianCheck"
)


$allowedStatusValues = @(
  "active",
  "draft",
  "deprecated"
)


$allowedClinicalMoments = @(
  "initialAssessment",
  "followUp"
)


$allowedPresentationTargets = @(
  "prescription.general",
  "prescription.endurance",
  "prescription.strength",
  "prescription.otherActivity",
  "orientation",
  "patientInformation",
  "referenceOnly"
)


$allowedLegacyFields = @(
  "contraintes",
  "adaptations",
  "situations",
  "regles",
  "crc",
  "crc_default"
)


$allowedCategoriesByFunction = @{

  "safety" = @(
    "constraint",
    "contraindication",
    "temporaryContraindication",
    "limitation",
    "precaution",
    "warningSign",
    "monitoring"
  )

  "prescriptionGuidance" = @(
    "activityType",
    "endurance",
    "strength",
    "balance",
    "mobility",
    "intensity",
    "frequency",
    "duration",
    "progression",
    "fractionation",
    "environment",
    "equipment",
    "monitoring",
    "practicalAdaptation"
  )

  "patientInformation" = @(
    "benefit",
    "safety",
    "selfMonitoring",
    "practicalAdvice",
    "warningSign",
    "motivation"
  )

  "orientationFactors" = @(
    "supervisionFactor",
    "functionalFactor",
    "rehabilitationFactor",
    "specialistInput",
    "assessmentNeed"
  )
}


$errors =
  New-Object System.Collections.Generic.List[string]

$warnings =
  New-Object System.Collections.Generic.List[string]


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

      if ($map.ContainsKey($header)) {
        throw (
          "En-tête dupliqué dans la feuille " +
          "'$($Worksheet.Name)' : $header"
        )
      }

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
    $Value.Split(";") |
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

  if (
    $normalized -in @(
      "true",
      "vrai",
      "1",
      "yes",
      "oui"
    )
  ) {
    return $true
  }

  if (
    $normalized -in @(
      "false",
      "faux",
      "0",
      "no",
      "non",
      ""
    )
  ) {
    return $false
  }

  throw (
    "Valeur booléenne invalide : '$Value'"
  )
}


try {

  # ==========================================================
  # OUVERTURE DU CLASSEUR
  # ==========================================================

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
  Write-Host "Validation du classeur clinique PAP"
  Write-Host "Fichier : $resolvedWorkbookPath"
  Write-Host ""


  # ==========================================================
  # FEUILLES OBLIGATOIRES
  # ==========================================================

  $sheetNames = @(
    foreach (
      $worksheet in $workbook.Worksheets
    ) {
      $worksheet.Name
    }
  )


  foreach (
    $expectedSheet in $expectedSheets
  ) {

    if (
      $sheetNames -notcontains
      $expectedSheet
    ) {

      $errors.Add(
        "Feuille obligatoire absente : $expectedSheet"
      )
    }
  }


  if ($errors.Count -gt 0) {
    throw (
      "Structure générale du classeur invalide."
    )
  }


  # ==========================================================
  # EN-TÊTES OBLIGATOIRES
  # ==========================================================

  $headerMaps = @{}


  foreach (
    $sheetName in $requiredHeaders.Keys
  ) {

    $worksheet =
      $workbook.Worksheets.Item(
        $sheetName
      )

    $headers =
      Get-HeaderMap `
        -Worksheet $worksheet

    $headerMaps[$sheetName] =
      $headers


    foreach (
      $requiredHeader
      in $requiredHeaders[$sheetName]
    ) {

      if (
        -not $headers.ContainsKey(
          $requiredHeader
        )
      ) {

        $errors.Add(
          "Colonne obligatoire absente " +
          "dans '$sheetName' : " +
          "$requiredHeader"
        )
      }
    }
  }


  if ($errors.Count -gt 0) {
    throw (
      "Structure des colonnes invalide."
    )
  }


  # ==========================================================
  # PATHOLOGIES
  # ==========================================================

  $pathologiesSheet =
    $workbook.Worksheets.Item(
      "Pathologies"
    )

  $pathologiesHeaders =
    $headerMaps["Pathologies"]

  $pathologyIds =
    New-Object `
      System.Collections.Generic.HashSet[string]


  for (
    $row = 2;
    $row -le
      $pathologiesSheet.UsedRange.Rows.Count;
    $row++
  ) {

    $pathologyId =
      Get-FieldText `
        -Worksheet $pathologiesSheet `
        -Headers $pathologiesHeaders `
        -Row $row `
        -Name "id"

    if (
      [string]::IsNullOrWhiteSpace(
        $pathologyId
      )
    ) {
      continue
    }


    if (
      -not $pathologyIds.Add(
        $pathologyId
      )
    ) {

      $errors.Add(
        "Pathology ID dupliqué : " +
        "$pathologyId"
      )
    }


    $label =
      Get-FieldText `
        -Worksheet $pathologiesSheet `
        -Headers $pathologiesHeaders `
        -Row $row `
        -Name "label"

    if (
      [string]::IsNullOrWhiteSpace(
        $label
      )
    ) {

      $errors.Add(
        "Pathologie '$pathologyId' : " +
        "label obligatoire."
      )
    }
  }


  # ==========================================================
  # KNOWLEDGE ITEMS
  # ==========================================================

  $knowledgeSheet =
    $workbook.Worksheets.Item(
      "KnowledgeItems"
    )

  $knowledgeHeaders =
    $headerMaps["KnowledgeItems"]

  $knowledgeItemIds =
    New-Object `
      System.Collections.Generic.HashSet[string]

  $knowledgeItemStatusById = @{}


  for (
    $row = 2;
    $row -le
      $knowledgeSheet.UsedRange.Rows.Count;
    $row++
  ) {

    $id =
      Get-FieldText `
        -Worksheet $knowledgeSheet `
        -Headers $knowledgeHeaders `
        -Row $row `
        -Name "id"

    if (
      [string]::IsNullOrWhiteSpace(
        $id
      )
    ) {
      continue
    }


    if (
      -not $knowledgeItemIds.Add(
        $id
      )
    ) {

      $errors.Add(
        "KnowledgeItem ID dupliqué : $id"
      )
    }


    $conditionType =
      Get-FieldText `
        -Worksheet $knowledgeSheet `
        -Headers $knowledgeHeaders `
        -Row $row `
        -Name "conditionType"


    if (
      $conditionType -notin
      $allowedConditionTypes
    ) {

      $errors.Add(
        "KnowledgeItem '$id' : " +
        "conditionType invalide " +
        "'$conditionType'."
      )
    }


    $status =
      Get-FieldText `
        -Worksheet $knowledgeSheet `
        -Headers $knowledgeHeaders `
        -Row $row `
        -Name "status"


    if (
      $status -notin
      $allowedStatusValues
    ) {

      $errors.Add(
        "KnowledgeItem '$id' : " +
        "status invalide '$status'."
      )
    }
    else {

      $knowledgeItemStatusById[$id] =
        $status
    }


    $version =
      Get-FieldText `
        -Worksheet $knowledgeSheet `
        -Headers $knowledgeHeaders `
        -Row $row `
        -Name "version"


    if (
      [string]::IsNullOrWhiteSpace(
        $version
      )
    ) {

      $errors.Add(
        "KnowledgeItem '$id' : " +
        "version obligatoire."
      )
    }


    $messageClinician =
      Get-FieldText `
        -Worksheet $knowledgeSheet `
        -Headers $knowledgeHeaders `
        -Row $row `
        -Name "messageClinician"


    $messagePatient =
      Get-FieldText `
        -Worksheet $knowledgeSheet `
        -Headers $knowledgeHeaders `
        -Row $row `
        -Name "messagePatient"


    if (
      [string]::IsNullOrWhiteSpace(
        $messageClinician
      ) -and
      [string]::IsNullOrWhiteSpace(
        $messagePatient
      )
    ) {

      $errors.Add(
        "KnowledgeItem '$id' : " +
        "au moins un message clinician " +
        "ou patient est requis."
      )
    }


    try {

      $null =
        ConvertTo-PapBoolean `
          -Value (
            Get-FieldRaw `
              -Worksheet $knowledgeSheet `
              -Headers $knowledgeHeaders `
              -Row $row `
              -Name "defaultSelected"
          )

    }
    catch {

      $errors.Add(
        "KnowledgeItem '$id' : " +
        $_.Exception.Message
      )
    }
  }


  # ==========================================================
  # FONCTION GÉNÉRIQUE :
  # RÉFÉRENCE VERS KNOWLEDGE ITEM
  # ==========================================================

  function Test-KnowledgeItemReference {

    param(
      [string]$SheetName,
      [int]$Row,
      [string]$KnowledgeItemId
    )

    if (
      [string]::IsNullOrWhiteSpace(
        $KnowledgeItemId
      )
    ) {
      return
    }


    if (
      -not $knowledgeItemIds.Contains(
        $KnowledgeItemId
      )
    ) {

      $errors.Add(
        "Feuille '$SheetName', ligne $Row : " +
        "knowledgeItemId inconnu " +
        "'$KnowledgeItemId'."
      )
    }
  }


  # ==========================================================
  # CLINICAL USES
  # ==========================================================

  $clinicalUsesSheet =
    $workbook.Worksheets.Item(
      "ClinicalUses"
    )

  $clinicalUsesHeaders =
    $headerMaps["ClinicalUses"]

  $clinicalUseCountByItem = @{}


  for (
    $row = 2;
    $row -le
      $clinicalUsesSheet.UsedRange.Rows.Count;
    $row++
  ) {

    $knowledgeItemId =
      Get-FieldText `
        -Worksheet $clinicalUsesSheet `
        -Headers $clinicalUsesHeaders `
        -Row $row `
        -Name "knowledgeItemId"


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      )
    ) {
      continue
    }


    Test-KnowledgeItemReference `
      -SheetName "ClinicalUses" `
      -Row $row `
      -KnowledgeItemId $knowledgeItemId


    $function =
      Get-FieldText `
        -Worksheet $clinicalUsesSheet `
        -Headers $clinicalUsesHeaders `
        -Row $row `
        -Name "function"


    $category =
      Get-FieldText `
        -Worksheet $clinicalUsesSheet `
        -Headers $clinicalUsesHeaders `
        -Row $row `
        -Name "category"


    if (
      $function -notin
      $allowedClinicalFunctions
    ) {

      $errors.Add(
        "ClinicalUses ligne $row : " +
        "fonction invalide '$function'."
      )

      continue
    }


    if (
      [string]::IsNullOrWhiteSpace(
        $category
      )
    ) {

      $errors.Add(
        "ClinicalUses ligne $row : " +
        "category obligatoire."
      )
    }
    elseif (
      $allowedCategoriesByFunction[
        $function
      ].Count -gt 0 -and
      $category -notin
      $allowedCategoriesByFunction[
        $function
      ]
    ) {

      $errors.Add(
        "ClinicalUses ligne $row : " +
        "catégorie '$category' invalide " +
        "pour '$function'."
      )
    }


    if (
      -not $clinicalUseCountByItem.ContainsKey(
        $knowledgeItemId
      )
    ) {

      $clinicalUseCountByItem[
        $knowledgeItemId
      ] = 0
    }

    $clinicalUseCountByItem[
      $knowledgeItemId
    ]++
  }


  foreach (
    $knowledgeItemId in
    $knowledgeItemIds
  ) {

    if (
      -not $clinicalUseCountByItem.ContainsKey(
        $knowledgeItemId
      )
    ) {

      $errors.Add(
        "KnowledgeItem '$knowledgeItemId' : " +
        "aucun ClinicalUse défini."
      )
    }
  }


  # ==========================================================
  # CONTEXTS
  # ==========================================================

  $contextsSheet =
    $workbook.Worksheets.Item(
      "Contexts"
    )

  $contextsHeaders =
    $headerMaps["Contexts"]


  for (
    $row = 2;
    $row -le
      $contextsSheet.UsedRange.Rows.Count;
    $row++
  ) {

    $knowledgeItemId =
      Get-FieldText `
        -Worksheet $contextsSheet `
        -Headers $contextsHeaders `
        -Row $row `
        -Name "knowledgeItemId"


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      )
    ) {
      continue
    }


    Test-KnowledgeItemReference `
      -SheetName "Contexts" `
      -Row $row `
      -KnowledgeItemId $knowledgeItemId


    $pathologyValues =
      Split-MultipleValues (
        Get-FieldText `
          -Worksheet $contextsSheet `
          -Headers $contextsHeaders `
          -Row $row `
          -Name "pathologiesAny"
      )


    foreach (
      $pathologyId in
      $pathologyValues
    ) {

      if (
        -not $pathologyIds.Contains(
          $pathologyId
        )
      ) {

        $errors.Add(
          "Contexts ligne $row : " +
          "pathology ID inconnu " +
          "'$pathologyId'."
        )
      }
    }
  }




  # ==========================================================
  # CLINICAL MOMENTS
  # ==========================================================

  $clinicalMomentsSheet =
    $workbook.Worksheets.Item(
      "ClinicalMoments"
    )

  $clinicalMomentsHeaders =
    $headerMaps["ClinicalMoments"]

  $clinicalMomentPairs =
    New-Object `
      System.Collections.Generic.HashSet[string]

  $clinicalMomentCount = 0


  for (
    $row = 2;
    $row -le
      $clinicalMomentsSheet.UsedRange.Rows.Count;
    $row++
  ) {

    $knowledgeItemId =
      Get-FieldText `
        -Worksheet $clinicalMomentsSheet `
        -Headers $clinicalMomentsHeaders `
        -Row $row `
        -Name "knowledgeItemId"

    $moment =
      Get-FieldText `
        -Worksheet $clinicalMomentsSheet `
        -Headers $clinicalMomentsHeaders `
        -Row $row `
        -Name "moment"

    $conditionType =
      Get-FieldText `
        -Worksheet $clinicalMomentsSheet `
        -Headers $clinicalMomentsHeaders `
        -Row $row `
        -Name "conditionType"

    $conditionDescription =
      Get-FieldText `
        -Worksheet $clinicalMomentsSheet `
        -Headers $clinicalMomentsHeaders `
        -Row $row `
        -Name "conditionDescription"


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      ) -and
      [string]::IsNullOrWhiteSpace(
        $moment
      ) -and
      [string]::IsNullOrWhiteSpace(
        $conditionType
      )
    ) {
      continue
    }


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      )
    ) {

      $errors.Add(
        "ClinicalMoments ligne $row : " +
        "knowledgeItemId obligatoire."
      )

      continue
    }


    Test-KnowledgeItemReference `
      -SheetName "ClinicalMoments" `
      -Row $row `
      -KnowledgeItemId $knowledgeItemId


    if (
      $moment -notin
      $allowedClinicalMoments
    ) {

      $errors.Add(
        "ClinicalMoments ligne $row : " +
        "moment invalide '$moment'."
      )
    }


    if (
      $conditionType -notin
      $allowedConditionTypes
    ) {

      $errors.Add(
        "ClinicalMoments ligne $row : " +
        "conditionType invalide " +
        "'$conditionType'."
      )
    }


    if (
      $conditionType -ne "always" -and
      [string]::IsNullOrWhiteSpace(
        $conditionDescription
      )
    ) {

      $warnings.Add(
        "ClinicalMoments ligne $row : " +
        "conditionDescription vide pour " +
        "conditionType '$conditionType'."
      )
    }


    $pairKey =
      "$knowledgeItemId::$moment"


    if (
      -not $clinicalMomentPairs.Add(
        $pairKey
      )
    ) {

      $errors.Add(
        "ClinicalMoments ligne $row : " +
        "couple dupliqué '$pairKey'."
      )
    }


    if (
      $knowledgeItemStatusById.ContainsKey(
        $knowledgeItemId
      ) -and
      $knowledgeItemStatusById[
        $knowledgeItemId
      ] -eq
      "deprecated"
    ) {

      $errors.Add(
        "ClinicalMoments ligne $row : " +
        "un item deprecated ne peut pas recevoir " +
        "de moment clinique ('$knowledgeItemId')."
      )
    }


    $clinicalMomentCount++
  }


  # ==========================================================
  # PRESENTATION TARGETS
  # ==========================================================

  $presentationTargetsSheet =
    $workbook.Worksheets.Item(
      "PresentationTargets"
    )

  $presentationTargetsHeaders =
    $headerMaps["PresentationTargets"]

  $presentationTargetPairs =
    New-Object `
      System.Collections.Generic.HashSet[string]

  $presentationTargetCount = 0


  for (
    $row = 2;
    $row -le
      $presentationTargetsSheet.UsedRange.Rows.Count;
    $row++
  ) {

    $knowledgeItemId =
      Get-FieldText `
        -Worksheet $presentationTargetsSheet `
        -Headers $presentationTargetsHeaders `
        -Row $row `
        -Name "knowledgeItemId"

    $target =
      Get-FieldText `
        -Worksheet $presentationTargetsSheet `
        -Headers $presentationTargetsHeaders `
        -Row $row `
        -Name "target"


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      ) -and
      [string]::IsNullOrWhiteSpace(
        $target
      )
    ) {
      continue
    }


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      )
    ) {

      $errors.Add(
        "PresentationTargets ligne $row : " +
        "knowledgeItemId obligatoire."
      )

      continue
    }


    Test-KnowledgeItemReference `
      -SheetName "PresentationTargets" `
      -Row $row `
      -KnowledgeItemId $knowledgeItemId


    if (
      [string]::IsNullOrWhiteSpace(
        $target
      )
    ) {

      $errors.Add(
        "PresentationTargets ligne $row : " +
        "target obligatoire."
      )

      continue
    }


    if (
      $target -notin
      $allowedPresentationTargets
    ) {

      $errors.Add(
        "PresentationTargets ligne $row : " +
        "target invalide '$target'."
      )
    }


    $pairKey =
      "$knowledgeItemId::$target"


    if (
      -not $presentationTargetPairs.Add(
        $pairKey
      )
    ) {

      $errors.Add(
        "PresentationTargets ligne $row : " +
        "couple dupliqué '$pairKey'."
      )
    }


    if (
      $knowledgeItemStatusById.ContainsKey(
        $knowledgeItemId
      ) -and
      $knowledgeItemStatusById[
        $knowledgeItemId
      ] -eq
      "deprecated"
    ) {

      $errors.Add(
        "PresentationTargets ligne $row : " +
        "un item deprecated ne peut pas recevoir " +
        "de cible de présentation ('$knowledgeItemId')."
      )
    }


    $presentationTargetCount++
  }

  # ==========================================================
  # LEGACY ORIGINS
  # ==========================================================

  $legacySheet =
    $workbook.Worksheets.Item(
      "LegacyOrigins"
    )

  $legacyHeaders =
    $headerMaps["LegacyOrigins"]


  for (
    $row = 2;
    $row -le
      $legacySheet.UsedRange.Rows.Count;
    $row++
  ) {

    $knowledgeItemId =
      Get-FieldText `
        -Worksheet $legacySheet `
        -Headers $legacyHeaders `
        -Row $row `
        -Name "knowledgeItemId"


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      )
    ) {
      continue
    }


    Test-KnowledgeItemReference `
      -SheetName "LegacyOrigins" `
      -Row $row `
      -KnowledgeItemId $knowledgeItemId


    $pathologyId =
      Get-FieldText `
        -Worksheet $legacySheet `
        -Headers $legacyHeaders `
        -Row $row `
        -Name "pathologyId"


    if (
      -not $pathologyIds.Contains(
        $pathologyId
      )
    ) {

      $errors.Add(
        "LegacyOrigins ligne $row : " +
        "pathologyId inconnu " +
        "'$pathologyId'."
      )
    }


    $field =
      Get-FieldText `
        -Worksheet $legacySheet `
        -Headers $legacyHeaders `
        -Row $row `
        -Name "field"


    if (
      $field -notin
      $allowedLegacyFields
    ) {

      $errors.Add(
        "LegacyOrigins ligne $row : " +
        "field invalide '$field'."
      )
    }


    $indexRaw =
      Get-FieldRaw `
        -Worksheet $legacySheet `
        -Headers $legacyHeaders `
        -Row $row `
        -Name "index"


    $indexValue = 0


    if (
      -not [int]::TryParse(
        ([string]$indexRaw),
        [ref]$indexValue
      ) -or
      $indexValue -lt 0
    ) {

      $errors.Add(
        "LegacyOrigins ligne $row : " +
        "index invalide '$indexRaw'."
      )
    }
  }


  # ==========================================================
  # EVIDENCE REFS + RESOURCE REFS
  # ==========================================================

  foreach (
    $sheetName in @(
      "EvidenceRefs",
      "ResourceRefs"
    )
  ) {

    $worksheet =
      $workbook.Worksheets.Item(
        $sheetName
      )

    $headers =
      $headerMaps[$sheetName]


    for (
      $row = 2;
      $row -le
        $worksheet.UsedRange.Rows.Count;
      $row++
    ) {

      $knowledgeItemId =
        Get-FieldText `
          -Worksheet $worksheet `
          -Headers $headers `
          -Row $row `
          -Name "knowledgeItemId"


      if (
        [string]::IsNullOrWhiteSpace(
          $knowledgeItemId
        )
      ) {
        continue
      }


      Test-KnowledgeItemReference `
        -SheetName $sheetName `
        -Row $row `
        -KnowledgeItemId $knowledgeItemId
    }
  }


  # ==========================================================
  # RÉSULTAT
  # ==========================================================

  Write-Host ""


  foreach (
    $warning in $warnings
  ) {

    Write-Warning $warning
  }


  if (
    $errors.Count -gt 0
  ) {

    Write-Host (
      "ERREURS : " +
      $errors.Count
    ) `
      -ForegroundColor Red


    foreach (
      $errorMessage in $errors
    ) {

      Write-Host (
        " - " +
        $errorMessage
      ) `
        -ForegroundColor Red
    }


    throw (
      "Validation du classeur clinique PAP échouée."
    )
  }


  Write-Host (
    "Validation réussie."
  ) `
    -ForegroundColor Green


  Write-Host (
    "Pathologies : " +
    $pathologyIds.Count
  )


  Write-Host (
    "KnowledgeItems : " +
    $knowledgeItemIds.Count
  )


  Write-Host (
    "PresentationTargets : " +
    $presentationTargetCount
  )


  Write-Host (
    "ClinicalMoments : " +
    $clinicalMomentCount
  )


  Write-Host ""

}
finally {

  # ==========================================================
  # LIBÉRATION EXCEL COM
  # ==========================================================

  if ($workbook) {

    $workbook.Close(
      $false
    )

    [void][System.Runtime.InteropServices.Marshal]::
      ReleaseComObject(
        $workbook
      )

    $workbook = $null
  }


  if ($excel) {

    $excel.Quit()

    [void][System.Runtime.InteropServices.Marshal]::
      ReleaseComObject(
        $excel
      )

    $excel = $null
  }


  [GC]::Collect()
  [GC]::WaitForPendingFinalizers()
}