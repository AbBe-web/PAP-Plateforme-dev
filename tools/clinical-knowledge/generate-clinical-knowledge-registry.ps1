param(
  [string]$WorkbookPath = (
    Join-Path `
      $PSScriptRoot `
      "..\..\data\clinical-knowledge\PAP_Connaissances_Cliniques_Tableur_Maitre_v1.xlsx"
  ),

  [string]$OutputPath = (
    Join-Path `
      $PSScriptRoot `
      "..\..\data\clinical-knowledge\generated\pathology-knowledge-registry.generated.js"
  )
)

$ErrorActionPreference = "Stop"


# ============================================================
# PAP — Génération du registre des connaissances cliniques
#
# Source :
#   tableur maître clinique
#
# Sortie :
#   fichier JS généré séparé
#
# Ce script :
# - valide le tableur avant génération ;
# - ne modifie pas PATHO_DATA ;
# - n'écrase pas le registry actif ;
# - ne modifie pas l'UX ;
# - ne produit aucune décision clinique.
# ============================================================


$validatorPath =
  Join-Path `
    $PSScriptRoot `
    "validate-clinical-knowledge-workbook.ps1"


$excel = $null
$workbook = $null


# ============================================================
# HELPERS EXCEL
# ============================================================

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

  if (
    [string]::IsNullOrWhiteSpace(
      $Value
    )
  ) {
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

  return $false
}


function Add-UniqueValue {

  param(
    [System.Collections.ArrayList]$List,
    [string]$Value
  )

  if (
    [string]::IsNullOrWhiteSpace(
      $Value
    )
  ) {
    return
  }

  if (
    -not $List.Contains(
      $Value
    )
  ) {

    [void]$List.Add(
      $Value
    )
  }
}


# ============================================================
# VALIDATION PRÉALABLE
# ============================================================

Write-Host ""
Write-Host "Validation préalable du tableur clinique PAP..."
Write-Host ""

& $validatorPath `
  -WorkbookPath $WorkbookPath


# ============================================================
# OUVERTURE DU CLASSEUR
# ============================================================

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
  Write-Host "Génération du registre clinique PAP"
  Write-Host "Source : $resolvedWorkbookPath"
  Write-Host ""


  # ==========================================================
  # FEUILLES
  # ==========================================================

  $knowledgeSheet =
    $workbook.Worksheets.Item(
      "KnowledgeItems"
    )

  $clinicalUsesSheet =
    $workbook.Worksheets.Item(
      "ClinicalUses"
    )

  $contextsSheet =
    $workbook.Worksheets.Item(
      "Contexts"
    )

  $presentationTargetsSheet =
    $workbook.Worksheets.Item(
      "PresentationTargets"
    )

  $clinicalMomentsSheet =
    $workbook.Worksheets.Item(
      "ClinicalMoments"
    )

  $legacyOriginsSheet =
    $workbook.Worksheets.Item(
      "LegacyOrigins"
    )

  $evidenceRefsSheet =
    $workbook.Worksheets.Item(
      "EvidenceRefs"
    )

  $resourceRefsSheet =
    $workbook.Worksheets.Item(
      "ResourceRefs"
    )


  # ==========================================================
  # HEADER MAPS
  # ==========================================================

  $knowledgeHeaders =
    Get-HeaderMap `
      -Worksheet $knowledgeSheet

  $clinicalUsesHeaders =
    Get-HeaderMap `
      -Worksheet $clinicalUsesSheet

  $contextsHeaders =
    Get-HeaderMap `
      -Worksheet $contextsSheet

  $presentationTargetsHeaders =
    Get-HeaderMap `
      -Worksheet $presentationTargetsSheet

  $clinicalMomentsHeaders =
    Get-HeaderMap `
      -Worksheet $clinicalMomentsSheet

  $legacyOriginsHeaders =
    Get-HeaderMap `
      -Worksheet $legacyOriginsSheet

  $evidenceRefsHeaders =
    Get-HeaderMap `
      -Worksheet $evidenceRefsSheet

  $resourceRefsHeaders =
    Get-HeaderMap `
      -Worksheet $resourceRefsSheet


  # ==========================================================
  # ÉTAT INTERMÉDIAIRE
  # ==========================================================

  $itemStates = @{}

  $itemOrder =
    New-Object `
      System.Collections.Generic.List[string]


  # ==========================================================
  # KNOWLEDGE ITEMS
  # ==========================================================

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


    $state = [ordered]@{

      id =
        $id

      messageClinician =
        Get-FieldText `
          -Worksheet $knowledgeSheet `
          -Headers $knowledgeHeaders `
          -Row $row `
          -Name "messageClinician"

      messagePatient =
        Get-FieldText `
          -Worksheet $knowledgeSheet `
          -Headers $knowledgeHeaders `
          -Row $row `
          -Name "messagePatient"

      conditionType =
        Get-FieldText `
          -Worksheet $knowledgeSheet `
          -Headers $knowledgeHeaders `
          -Row $row `
          -Name "conditionType"

      conditionDescription =
        Get-FieldText `
          -Worksheet $knowledgeSheet `
          -Headers $knowledgeHeaders `
          -Row $row `
          -Name "conditionDescription"

      defaultSelected =
        ConvertTo-PapBoolean `
          -Value (
            Get-FieldRaw `
              -Worksheet $knowledgeSheet `
              -Headers $knowledgeHeaders `
              -Row $row `
              -Name "defaultSelected"
          )

      status =
        Get-FieldText `
          -Worksheet $knowledgeSheet `
          -Headers $knowledgeHeaders `
          -Row $row `
          -Name "status"

      version =
        Get-FieldText `
          -Worksheet $knowledgeSheet `
          -Headers $knowledgeHeaders `
          -Row $row `
          -Name "version"

      clinicalUses =
        New-Object `
          System.Collections.ArrayList

      context = [ordered]@{

        pathologiesAny =
          New-Object `
            System.Collections.ArrayList

        medicationsAny =
          New-Object `
            System.Collections.ArrayList

        situationsAny =
          New-Object `
            System.Collections.ArrayList

        limitationsAny =
          New-Object `
            System.Collections.ArrayList

        ageGroupsAny =
          New-Object `
            System.Collections.ArrayList

        sexAny =
          New-Object `
            System.Collections.ArrayList

        otherAny =
          New-Object `
            System.Collections.ArrayList
      }

      presentationTargets =
        New-Object `
          System.Collections.ArrayList

      clinicalMoments =
        New-Object `
          System.Collections.ArrayList

      legacyOrigins =
        New-Object `
          System.Collections.ArrayList

      evidenceSourceIds =
        New-Object `
          System.Collections.ArrayList

      relatedResourceIds =
        New-Object `
          System.Collections.ArrayList
    }


    $itemStates[$id] =
      $state

    $itemOrder.Add(
      $id
    )
  }


  # ==========================================================
  # CLINICAL USES
  # ==========================================================

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


    $clinicalUse =
      [ordered]@{

        function =
          Get-FieldText `
            -Worksheet $clinicalUsesSheet `
            -Headers $clinicalUsesHeaders `
            -Row $row `
            -Name "function"

        category =
          Get-FieldText `
            -Worksheet $clinicalUsesSheet `
            -Headers $clinicalUsesHeaders `
            -Row $row `
            -Name "category"
      }


    [void]$itemStates[
      $knowledgeItemId
    ].clinicalUses.Add(
      [pscustomobject]$clinicalUse
    )
  }


  # ==========================================================
  # CONTEXTS
  # ==========================================================

  $contextDimensions = @(
    "pathologiesAny",
    "medicationsAny",
    "situationsAny",
    "limitationsAny",
    "ageGroupsAny",
    "sexAny",
    "otherAny"
  )


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


    foreach (
      $dimension in
      $contextDimensions
    ) {

      $values =
        Split-MultipleValues (
          Get-FieldText `
            -Worksheet $contextsSheet `
            -Headers $contextsHeaders `
            -Row $row `
            -Name $dimension
        )


      foreach (
        $value in
        $values
      ) {

        Add-UniqueValue `
          -List $itemStates[
            $knowledgeItemId
          ].context[$dimension] `
          -Value $value
      }
    }
  }




  # ==========================================================
  # PRESENTATION TARGETS
  # ==========================================================

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


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      )
    ) {
      continue
    }


    $target =
      Get-FieldText `
        -Worksheet $presentationTargetsSheet `
        -Headers $presentationTargetsHeaders `
        -Row $row `
        -Name "target"


    Add-UniqueValue `
      -List $itemStates[
        $knowledgeItemId
      ].presentationTargets `
      -Value $target
  }

  # ==========================================================
  # CLINICAL MOMENTS
  # ==========================================================

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


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      )
    ) {
      continue
    }


    $momentConditionType =
      Get-FieldText `
        -Worksheet $clinicalMomentsSheet `
        -Headers $clinicalMomentsHeaders `
        -Row $row `
        -Name "conditionType"


    $momentCondition =
      [ordered]@{

        type =
          $momentConditionType
      }


    $momentConditionDescription =
      Get-FieldText `
        -Worksheet $clinicalMomentsSheet `
        -Headers $clinicalMomentsHeaders `
        -Row $row `
        -Name "conditionDescription"


    if (
      -not [string]::IsNullOrWhiteSpace(
        $momentConditionDescription
      )
    ) {

      $momentCondition[
        "description"
      ] =
        $momentConditionDescription
    }


    if (
      $momentConditionType -eq
      "clinicianCheck"
    ) {

      $momentCondition[
        "machineEvaluable"
      ] = $false
    }


    $clinicalMoment =
      [ordered]@{

        moment =
          Get-FieldText `
            -Worksheet $clinicalMomentsSheet `
            -Headers $clinicalMomentsHeaders `
            -Row $row `
            -Name "moment"

        condition =
          [pscustomobject]$momentCondition
      }


    $messageClinicianOverride =
      Get-FieldText `
        -Worksheet $clinicalMomentsSheet `
        -Headers $clinicalMomentsHeaders `
        -Row $row `
        -Name "messageClinicianOverride"


    if (
      -not [string]::IsNullOrWhiteSpace(
        $messageClinicianOverride
      )
    ) {

      $clinicalMoment[
        "messageClinicianOverride"
      ] =
        $messageClinicianOverride
    }


    [void]$itemStates[
      $knowledgeItemId
    ].clinicalMoments.Add(
      [pscustomobject]$clinicalMoment
    )
  }


  # ==========================================================
  # LEGACY ORIGINS
  # ==========================================================

  for (
    $row = 2;
    $row -le
      $legacyOriginsSheet.UsedRange.Rows.Count;
    $row++
  ) {

    $knowledgeItemId =
      Get-FieldText `
        -Worksheet $legacyOriginsSheet `
        -Headers $legacyOriginsHeaders `
        -Row $row `
        -Name "knowledgeItemId"


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      )
    ) {
      continue
    }


    $legacyOrigin =
      [ordered]@{

        pathologyId =
          Get-FieldText `
            -Worksheet $legacyOriginsSheet `
            -Headers $legacyOriginsHeaders `
            -Row $row `
            -Name "pathologyId"

        field =
          Get-FieldText `
            -Worksheet $legacyOriginsSheet `
            -Headers $legacyOriginsHeaders `
            -Row $row `
            -Name "field"

        index =
          [int](
            Get-FieldRaw `
              -Worksheet $legacyOriginsSheet `
              -Headers $legacyOriginsHeaders `
              -Row $row `
              -Name "index"
          )
      }


    [void]$itemStates[
      $knowledgeItemId
    ].legacyOrigins.Add(
      [pscustomobject]$legacyOrigin
    )
  }


  # ==========================================================
  # EVIDENCE REFS
  # ==========================================================

  for (
    $row = 2;
    $row -le
      $evidenceRefsSheet.UsedRange.Rows.Count;
    $row++
  ) {

    $knowledgeItemId =
      Get-FieldText `
        -Worksheet $evidenceRefsSheet `
        -Headers $evidenceRefsHeaders `
        -Row $row `
        -Name "knowledgeItemId"


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      )
    ) {
      continue
    }


    $evidenceSourceId =
      Get-FieldText `
        -Worksheet $evidenceRefsSheet `
        -Headers $evidenceRefsHeaders `
        -Row $row `
        -Name "evidenceSourceId"


    Add-UniqueValue `
      -List $itemStates[
        $knowledgeItemId
      ].evidenceSourceIds `
      -Value $evidenceSourceId
  }


  # ==========================================================
  # RESOURCE REFS
  # ==========================================================

  for (
    $row = 2;
    $row -le
      $resourceRefsSheet.UsedRange.Rows.Count;
    $row++
  ) {

    $knowledgeItemId =
      Get-FieldText `
        -Worksheet $resourceRefsSheet `
        -Headers $resourceRefsHeaders `
        -Row $row `
        -Name "knowledgeItemId"


    if (
      [string]::IsNullOrWhiteSpace(
        $knowledgeItemId
      )
    ) {
      continue
    }


    $resourceId =
      Get-FieldText `
        -Worksheet $resourceRefsSheet `
        -Headers $resourceRefsHeaders `
        -Row $row `
        -Name "resourceId"


    Add-UniqueValue `
      -List $itemStates[
        $knowledgeItemId
      ].relatedResourceIds `
      -Value $resourceId
  }


  # ==========================================================
  # CONSTRUCTION DU REGISTRY
  # ==========================================================

  $registry =
    New-Object `
      System.Collections.ArrayList


  foreach (
    $id in
    $itemOrder
  ) {

    $state =
      $itemStates[$id]


    # --------------------------------------------------------
    # CONTEXT
    # --------------------------------------------------------

    $context =
      [ordered]@{}


    foreach (
      $dimension in
      $contextDimensions
    ) {

      $values =
        @(
          $state.context[
            $dimension
          ]
        )


      if (
        $values.Count -gt 0
      ) {

        $context[
          $dimension
        ] = $values
      }
    }


    # --------------------------------------------------------
    # CONDITION
    # --------------------------------------------------------

    $condition =
      [ordered]@{

        type =
          $state.conditionType
      }


    if (
      -not [string]::IsNullOrWhiteSpace(
        $state.conditionDescription
      )
    ) {

      $condition[
        "description"
      ] =
        $state.conditionDescription
    }


    if (
      $state.conditionType -eq
      "clinicianCheck"
    ) {

      $condition[
        "machineEvaluable"
      ] = $false
    }


    # --------------------------------------------------------
    # ITEM
    # --------------------------------------------------------

    $item =
      [ordered]@{

        id =
          $state.id

        context =
          [pscustomobject]$context

        clinicalUses =
          @(
            $state.clinicalUses
          )

        messages =
          [pscustomobject][ordered]@{

            clinician =
              $state.messageClinician

            patient =
              $state.messagePatient
          }

        condition =
          [pscustomobject]$condition

        presentationTargets =
          @(
            $state.presentationTargets
          )
      }


    if (
      $state.clinicalMoments.Count -gt 0
    ) {

      $item[
        "clinicalMoments"
      ] =
        @(
          $state.clinicalMoments
        )
    }


    # --------------------------------------------------------
    # SELECTION PATIENT
    # --------------------------------------------------------

$hasPatientInformationUse = @(
  @(
    $state.clinicalUses
  ) |
  Where-Object {
    $_.function -eq
    "patientInformation"
  }
)


if (
  $hasPatientInformationUse.Count -gt 0
) {

  $item[
    "selection"
  ] =
    [pscustomobject][ordered]@{

      defaultSelected =
        [bool]$state.defaultSelected
    }
}


    # --------------------------------------------------------
    # REFERENCES
    # --------------------------------------------------------

    $item[
      "evidenceSourceIds"
    ] =
      @(
        $state.evidenceSourceIds
      )


    $item[
      "relatedResourceIds"
    ] =
      @(
        $state.relatedResourceIds
      )


    # --------------------------------------------------------
    # METADATA + MIGRATION
    # --------------------------------------------------------

    $metadata =
      [ordered]@{

        status =
          $state.status

        version =
          $state.version
      }


    if (
      $state.legacyOrigins.Count -gt 0
    ) {

      $metadata[
        "migration"
      ] =
        [pscustomobject][ordered]@{

          legacyOrigins =
            @(
              $state.legacyOrigins
            )
        }
    }


    $item[
      "metadata"
    ] =
      [pscustomobject]$metadata


    [void]$registry.Add(
      [pscustomobject]$item
    )
  }


  # ==========================================================
  # JSON
  # ==========================================================

  $json =
    $registry |
    ConvertTo-Json `
      -Depth 20


  # ==========================================================
  # CONTENU JS
  # ==========================================================

  $content = @"
// ============================================================
// PAP — GENERATED FILE
//
// Source:
// PAP_Connaissances_Cliniques_Tableur_Maitre_v1.xlsx
//
// Ce fichier est généré automatiquement.
// Ne pas éditer manuellement.
// ============================================================

const PATHOLOGY_KNOWLEDGE_REGISTRY = $json;

window.PATHOLOGY_KNOWLEDGE_REGISTRY =
  PATHOLOGY_KNOWLEDGE_REGISTRY;
"@


  # ==========================================================
  # DOSSIER DE SORTIE
  # ==========================================================

  $outputDirectory =
    Split-Path `
      -Parent `
      $OutputPath


  if (
    -not (
      Test-Path `
        -LiteralPath $outputDirectory
    )
  ) {

    New-Item `
      -ItemType Directory `
      -Path $outputDirectory `
      -Force |
      Out-Null
  }


  $resolvedOutputDirectory =
    (Resolve-Path `
      -LiteralPath $outputDirectory
    ).Path


  $resolvedOutputPath =
    Join-Path `
      $resolvedOutputDirectory `
      (
        Split-Path `
          -Leaf `
          $OutputPath
      )


  # UTF-8 sans BOM
  $utf8WithoutBom =
    New-Object `
      System.Text.UTF8Encoding(
        $false
      )


  [System.IO.File]::WriteAllText(
    $resolvedOutputPath,
    $content,
    $utf8WithoutBom
  )


  # ==========================================================
  # RÉSULTAT
  # ==========================================================

  Write-Host ""
  Write-Host (
    "Génération réussie."
  ) `
    -ForegroundColor Green

  $targetedItemCount =
    @(
      $registry |
      Where-Object {
        $_.presentationTargets.Count -gt 0
      }
    ).Count

  $presentationTargetCount =
    @(
      $registry |
      ForEach-Object {
        $_.presentationTargets
      }
    ).Count


  Write-Host (
    "KnowledgeItems générés : " +
    $registry.Count
  )

  Write-Host (
    "KnowledgeItems avec cible : " +
    $targetedItemCount
  )

  Write-Host (
    "PresentationTargets générées : " +
    $presentationTargetCount
  )

  Write-Host (
    "Fichier : " +
    $resolvedOutputPath
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