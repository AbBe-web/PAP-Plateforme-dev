# ARCHITECTURE REFERENCE PAP

Version : 1.0

Statut : Référence technique officielle

Documents associés :

* PROTOCOLE_STABILITE_CLINIQUE_PAP.md
* PROTOCOLE_DSR_PAP.md

---

# 1. Objectif

Ce document décrit l'architecture de référence du projet PAP.

Il constitue la base technique utilisée avant toute évolution structurelle du projet.

Il ne remplace pas le contrat de stabilité clinique ni le protocole DSR.

---

# 2. Architecture générale

```text
PAP-Plateforme
│
├── patient/
│   └── auto-evaluation/
│
├── medecin/
│   └── generateur-crc/
│
├── core/
│   ├── prescriptionModel.js
│   ├── prescriptionSync.js
│   ├── prescriptionRenderer.js
│   └── prescriptionUtils.js
│
├── shared/
│
├── css/
│
├── assets/
│
└── infrastructure PWA
```

---

# 3. Modules fonctionnels

## Module Patient

Responsabilités :

* auto-évaluation activité physique ;
* GPAQ ;
* Marshall ;
* stade motivationnel ;
* génération des résultats ;
* export JSON.

Le module patient ne dépend pas du module médecin.

---

## Module Médecin

Responsabilités :

* consultation ;
* import JSON ;
* génération CRC ;
* prescription d'activité physique ;
* export documentaire.

Le module médecin constitue actuellement le principal orchestrateur du projet.

---

## Module Ordonnance

Localisation :

```text
core/
```

Architecture :

```text
Model
↓
Sync
↓
Renderer
```

Responsabilités :

* état ordonnance ;
* synchronisation ;
* génération documentaire.

---

## Shared

Localisation :

```text
shared/
```

Responsabilité prévue :

* modèle de données partagé ;
* import/export JSON ;
* compatibilité inter-modules.

---

# 4. Sources de vérité

## Source principale

Etat clinique de consultation.

Les données cliniques constituent la source de vérité de référence.

---

## Source spécialisée

Prescription Model.

Localisation :

```text
core/prescriptionModel.js
```

Cette source est limitée au sous-système ordonnance.

---

## Produits dérivés

Ne constituent jamais des sources de vérité :

* CRC ;
* ordonnance générée ;
* version patient ;
* exports.

Ces documents doivent pouvoir être reconstruits à partir des données sources.

---

# 4 bis. Sources de vérité autorisées

Le projet PAP distingue explicitement les sources de vérité des documents générés.

Sources de vérité autorisées :

* Etat clinique de consultation ;
* Prescription Model (limité au sous-système ordonnance).

Ne constituent jamais des sources de vérité :

* CRC ;
* ordonnance générée ;
* version patient ;
* exports ;
* textarea documentaires ;
* contenus imprimables.

Toute donnée documentaire doit pouvoir être reconstruite à partir des données sources.

En cas de divergence entre une donnée clinique et un document généré, la donnée clinique prévaut.

---

# 5. Flux de données

## Flux Patient

```text
Questionnaires
↓
Calculs
↓
Résultats
↓
JSON
```

---

## Flux Import

```text
JSON
↓
Import médecin
↓
Préremplissage
↓
Etat clinique
```

---

## Flux CRC

```text
Etat clinique
↓
Génération
↓
CRC
```

---

## Flux Ordonnance

```text
Etat clinique
↓
Prescription Model
↓
Renderer
↓
Ordonnance
```

---

# 6. Dépendances

## Patient

Communication avec le module médecin :

```text
JSON uniquement
```

Aucune dépendance directe au module médecin.

---

## Médecin

Dépend de :

```text
core/
shared/
css/
```

---

## Ordonnance

Architecture découplée :

```text
prescriptionModel
↓
prescriptionSync
↓
prescriptionRenderer
```

Cette séparation doit être préservée.

---

# 7. Architecture événementielle

Familles principales :

* Bootstrap ;
* Input clinique ;
* Import JSON ;
* Reset consultation ;
* Génération CRC ;
* Prescription AP ;
* Exports ;
* UI.

Toute évolution impliquant :

* listeners ;
* synchronisation ;
* rerender ;
* dirty-state ;

doit être analysée avec le protocole DSR.

---

# 8. Zones critiques

## Zone critique n°1

```text
medecin/generateur-crc/index.html
```

Cette zone concentre :

* logique clinique ;
* UI ;
* génération CRC ;
* import/export ;
* orchestration générale.

Toute modification doit être réalisée avec prudence.

---

## Zone critique n°2

```text
css/style-global.css
```

Impact transversal sur les modules.

---

# 9. Compatibilité future

L'architecture doit rester compatible avec :

* consultation rapide ;
* plateforme ressources ;
* formation ;
* import JSON ;
* préremplissage ;
* ordonnance modulaire ;
* IA facultative non décisionnelle.

---

# 9 bis. Architecture décisionnelle

Le projet PAP constitue une aide cognitive structurée à la consultation.

Le projet ne réalise aucune décision clinique automatisée.

Le moteur PAP peut :

* structurer ;
* calculer ;
* synthétiser ;
* générer des documents ;
* proposer des contenus.

Le moteur PAP ne peut pas :

* imposer une décision ;
* établir un diagnostic ;
* réaliser une décision thérapeutique autonome.

Le médecin demeure décisionnaire final.

Toute évolution future doit préserver :

* l'absence d'automatisation décisionnelle ;
* la transparence du raisonnement ;
* la possibilité pour le professionnel de modifier ou ignorer toute proposition générée.

Les futurs modules :

* consultation rapide ;
* ressources ;
* formation ;
* IA facultative ;

doivent respecter ces principes.

---

# 10. Règle d'utilisation

Avant toute modification structurelle :

1. Consulter :

   * PROTOCOLE_STABILITE_CLINIQUE_PAP.md
   * PROTOCOLE_DSR_PAP.md
   * ARCHITECTURE_REFERENCE.md

2. Identifier :

   * source(s) de vérité concernée(s) ;
   * événements concernés ;
   * dépendances concernées.

3. Réaliser :

   * modification ;
   * test ;
   * validation ;
   * commit.

---

# 11. Principes fondamentaux

* absence de backend obligatoire ;
* absence de stockage clinique persistant ;
* absence d'automatisation décisionnelle ;
* IA facultative ;
* fonctionnement hors ligne préservé ;
* médecin décisionnaire final ;
* architecture modulaire évolutive ;
* stabilité clinique prioritaire.

## Context orchestration layer (PHASE 2)

La PHASE 2 introduit progressivement un composant central :

computeClinicalContext()

Positionnement cible :

UI / DOM
↓
buildClinicalModel()
↓
clinicalModel
↓
computeClinicalContext()
↓
renderers spécialisés
↓
documents multi-sorties

Responsabilités cibles :

* vigilance ;
* précautions ;
* adaptations ;
* supervision ;
* recommandations ;
* ressources ;
* documents patient ;
* QR resources ;
* clinician tools ;
* training modules.

Contraintes obligatoires :

* déterminisme ;
* explicabilité ;
* supervision humaine ;
* recommendation layer ≠ decision layer ;
* absence automatisation décisionnelle.
