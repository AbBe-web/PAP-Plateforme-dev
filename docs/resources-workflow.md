# Workflow ressources PAP

## Objectif

Ce document décrit le workflow fiable et reproductible permettant de piloter les ressources PAP depuis un référentiel éditorial unique.

Le principe est :

```text
classeur maître Excel
→ validation
→ génération du registre
→ comparaison sémantique
→ promotion contrôlée
→ tests PAP
→ commit
```

Le registre de ressources sert à afficher des ressources disponibles ou sélectionnées. Il ne produit aucune décision clinique automatique.

Le médecin reste décisionnaire final.

## Fichiers de référence

### Source éditoriale

```text
data/resources/source/PAP_Bibliotheque_Ressources_Tableur_Maitre_v1.xlsx
```

Ce fichier est la source éditoriale officielle.

Il doit être modifié avec Excel.

### Registre généré

```text
data/resources/generated/resource-registry.generated.js
```

Ce fichier est généré automatiquement.

Il ne doit pas être modifié à la main.

### Registre utilisé par PAP

```text
core/clinical-context/resource-registry.js
```

Ce fichier est utilisé par PAP en production.

Il ne doit pas être modifié directement pour ajouter ou corriger une ressource, sauf restauration exceptionnelle.

## Outils

### Validation du classeur

```powershell
& powershell `
  -NoProfile `
  -ExecutionPolicy Bypass `
  -File "tools\resources\validate-resource-workbook.ps1"
```

### Génération du registre

```powershell
& powershell `
  -NoProfile `
  -ExecutionPolicy Bypass `
  -File "tools\resources\generate-resource-registry.ps1"
```

### Comparaison sémantique

```powershell
node `
  tools/resources/compare-resource-registries.js `
  core/clinical-context/resource-registry.js `
  data/resources/generated/resource-registry.generated.js
```

### Promotion contrôlée

Sans modification de production :

```powershell
& powershell `
  -NoProfile `
  -ExecutionPolicy Bypass `
  -File "tools\resources\promote-resource-registry.ps1"
```

Avec promotion explicite :

```powershell
& powershell `
  -NoProfile `
  -ExecutionPolicy Bypass `
  -File "tools\resources\promote-resource-registry.ps1" `
  -Apply
```

## Ajouter une nouvelle ressource

### Étape 1 — Modifier le classeur

Ouvrir :

```text
data/resources/source/PAP_Bibliotheque_Ressources_Tableur_Maitre_v1.xlsx
```

Ajouter la ressource dans Excel.

Statut initial recommandé :

```text
draft
```

### Étape 2 — Vérifier les champs

À vérifier avant activation :

* identifiant unique ;
* titre ;
* libellé affiché ;
* URL ;
* source ;
* audience ;
* pathologie ;
* thème ;
* type de ressource ;
* statut ;
* date de vérification ;
* cohérence avec les sorties attendues.

### Étape 3 — Activer si la ressource est validée

Passer le statut à :

```text
active
```

Seules les ressources actives sont exportées vers PAP.

## Modifier une ressource existante

Conserver le même identifiant si la ressource reste la même.

Modifier uniquement les champs nécessaires dans le classeur maître.

Ne pas modifier directement :

```text
resource-registry.generated.js
resource-registry.js
```

## Workflow complet après modification du classeur

### 1. Vérifier l’état Git

```powershell
git status --short
```

Si d’autres fichiers non prévus sont modifiés, arrêter et analyser.

### 2. Lancer la promotion contrôlée sans -Apply

```powershell
& powershell `
  -NoProfile `
  -ExecutionPolicy Bypass `
  -File "tools\resources\promote-resource-registry.ps1"
```

Conditions :

```text
IF les registres sont identiques
THEN aucune promotion n’est nécessaire.
```

```text
IF des différences existent
AND -Apply n’est pas utilisé
THEN le registre de production n’est pas modifié.
```

### 3. Relire les différences

Vérifier que les différences générées correspondent bien à la modification éditoriale attendue.

### 4. Promouvoir explicitement

Uniquement après vérification :

```powershell
& powershell `
  -NoProfile `
  -ExecutionPolicy Bypass `
  -File "tools\resources\promote-resource-registry.ps1" `
  -Apply
```

### 5. Vérifier Git

```powershell
git --no-pager diff --check
git status --short
```

### 6. Tester PAP

Tests minimaux après promotion :

* affichage de la ressource dans le contexte attendu ;
* sortie patient ;
* ordonnance simple ;
* ordonnance APA si concernée ;
* liens ;
* QR codes ;
* copie ;
* impression ;
* absence de ressource non pertinente ;
* absence de régression visible.

### 7. Commit

Si les tests sont corrects :

```powershell
git add `
  data/resources/source/PAP_Bibliotheque_Ressources_Tableur_Maitre_v1.xlsx `
  data/resources/generated/resource-registry.generated.js `
  core/clinical-context/resource-registry.js

git commit -m "feat(resources): update PAP resource registry"

git status
```

Puis :

```powershell
git push origin main
```

## Règles de sécurité

### Ne jamais modifier manuellement

```text
data/resources/generated/resource-registry.generated.js
core/clinical-context/resource-registry.js
```

sauf restauration exceptionnelle.

### Ne jamais promouvoir automatiquement

La génération ne modifie pas le registre de production.

La promotion nécessite une action explicite avec :

```text
-Apply
```

### Ne jamais activer une ressource non vérifiée

Si une ressource n’est pas prête :

```text
status = draft
```

### Ne jamais confondre disponibilité et sélection

```text
ressource disponible
≠ ressource sélectionnée
≠ ressource remise au patient
```

### Ne jamais introduire de décision automatique

Le registre sert à organiser des ressources.

Il ne doit pas devenir un moteur décisionnel.

## Résumé

Le workflow normal est :

```text
Excel
→ validation
→ génération
→ comparaison
→ promotion explicite
→ test PAP
→ commit
```

Le classeur maître est la source éditoriale.

Le registre généré est une sortie technique.

Le registre de production est le fichier utilisé par PAP.

Le médecin reste décisionnaire final.
