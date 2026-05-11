PROTOCOLE DE STABILITÉ CLINIQUE PAP

Version 0.x – Stabilisation logique / Évolutions contrôlées

---

## 1. Objet du protocole

Le présent protocole définit le cadre officiel de stabilité clinique du projet PAP-Plateforme.

Il a pour objectifs :

* Garantir la stabilité scientifique et méthodologique de l’outil
* Empêcher toute modification implicite ou non demandée de la logique métier
* Encadrer strictement les évolutions autorisées
* Assurer la traçabilité et l’intégrité fonctionnelle du projet

Ce protocole s’applique à toute modification future du projet.

---

## 2. Éléments strictement gelés

Les éléments suivants sont considérés comme validés et intangibles.
Ils ne peuvent être modifiés, reformulés ou réinterprétés sans demande explicite préalable.

### 2.1 Logique clinique

* Questionnaires utilisés : GPAQ (OMS) et Marshall
* Calcul des MET-min/semaine
* Seuils d’activité :

  * Marshall : insuffisamment actif / suffisamment actif
  * GPAQ : très actif / moyennement actif / insuffisamment actif
* Logique du stade motivationnel :

  * Actif (≠ insuffisamment actif) → action / consolidation
  * Inactif (insuffisamment actif) → préparation / intention / indétermination
* Ordre intangible des étapes :

  1. Évaluation de l’activité physique
  2. Stade motivationnel
  3. EVA importance
  4. EVA confiance

---

### 2.2 Structure des résultats

Les champs suivants sont obligatoires et permanents :

* Niveau d’activité
* MET-min/semaine
* Stade motivationnel
* EVA importance (0–10)
* EVA confiance (0–10)

La distinction suivante est obligatoire :

* Affichage lisible patient / médecin
* Export structuré (JSON ou évolution ultérieure équivalente)

---

### 2.3 Intention fonctionnelle

* Outil destiné au patient
* Aucune donnée stockée
* Résultat destiné à être apporté en consultation

Toute modification de ces éléments est interdite sans validation explicite.

---

## 3. Évolutions autorisées sous validation explicite

Les éléments suivants peuvent évoluer uniquement si la demande est formulée explicitement :

* Amélioration des textes
* Ajustements UX / ergonomiques
* Ajustements de design
* Clarifications visuelles
* Adaptations de saisie (ex : heures + minutes)

Aucune modification spontanée n’est autorisée, même si elle semble pertinente.

---

## 4. Modifications interdites sans demande explicite

Il est interdit de :

* Modifier une question pour la rendre “plus claire”
* Simplifier un enchaînement logique
* Fusionner des étapes
* Modifier un seuil, score ou condition
* Supprimer une partie fonctionnelle au nom d’une optimisation
* Changer l’ordre des écrans
* Effectuer une modification implicite en cas d’ambiguïté

En cas de doute : aucune modification n’est réalisée sans validation préalable.

---

## 5. Livraison du code

Toute modification doit respecter les règles suivantes :

* Livraison du fichier HTML complet
* Code exécutable immédiatement
* Remplacement intégral du fichier précédent
* Aucune livraison partielle ou par extraits

---

## 6. Intégrité d’exécution

Chaque livraison doit garantir :

* Tous les boutons fonctionnels
* Aucune fonction appelée absente
* Aucun écran sans issue
* Aucune brique gelée supprimée

Toute brique gelée reste présente dans le code, même inactive ou masquée, sauf demande explicite de suppression.

---

## 7. Validation incrémentale obligatoire

* Une seule modification à la fois
* Livraison du fichier complet
* Phase de test
* Aucune autre modification intégrée sans validation explicite

Validation requise par message clair :
“Étape validée” ou équivalent explicite.

---

## 8. Version de référence obligatoire

Toute modification est réalisée à partir de la dernière version complète validée.

Chaque livraison doit contenir :

* L’intégralité de la version de référence
* Uniquement la modification demandée à l’étape en cours

Aucune fonctionnalité existante ne peut être :

* omise
* remplacée implicitement
* supposée inchangée

Si la version de référence n’est pas clairement identifiée, la modification ne doit pas être livrée.

---

## 9. Clause d’évolution majeure

Toute évolution majeure (ex : ajout de module, export PDF, CRC automatisé, intégration API, nouvelle logique fonctionnelle) :

* Nécessite une demande explicite préalable
* Constitue une nouvelle version du projet
* Peut modifier le périmètre gelé uniquement après validation formelle

Aucune évolution majeure n’est implémentée sans accord explicite.

---

## 10. Règle fondamentale

Si ce n’est pas explicitement demandé, ce n’est pas modifié.
