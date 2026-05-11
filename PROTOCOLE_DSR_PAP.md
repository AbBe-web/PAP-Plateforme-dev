# PROTOCOLE DSR UNIFIÉ — PAP-PLATEFORME

Debug Sans Régression & Anti-Régression Systémique

Version 1.0 – Référence officielle PAP

---

## 0. Statut et portée

Document de référence unique.
Remplace toute version antérieure du DSR.

S’applique à **toute modification**, même mineure.

Compatible et subordonné au **Protocole de stabilité clinique PAP**.

Principe cardinal :

> Aucune correction locale ne doit dégrader un invariant global.

---

## 1. Cadre d’application

* Protocole de stabilité clinique PAP strictement applicable
* Aucune modification de la logique clinique gelée
* Aucune modification des seuils, calculs ou parcours validés
* Respect du principe RGPD :

  * aucune création de stockage persistant supplémentaire
* Application mono-fichier HTML à logique clinique intégrée

---

## 2. Objectif général

Corriger un bug :

* précis
* reproductible
* objectivable

Ou améliorer la robustesse technique,

Sans modifier :

* la logique clinique
* les calculs
* les seuils
* les parcours validés
* la structure des résultats
* l’UX existante

Toute incompatibilité doit être :

1. signalée explicitement
2. expliquée
3. soumise à arbitrage avant implémentation

---

## 3. Invariants non négociables

Toute correction violant un invariant est rejetée.

### I1 — Sécurité > Élégance

Une solution robuste prévaut sur toute amélioration conceptuelle.

### I2 — Coexistence des mécanismes

Des mécanismes différents peuvent coexister s’ils répondent à des usages distincts.

### I3 — Écran ≠ État

Un écran n’est pas nécessairement reconstructible à partir de l’état seul.

### I4 — Retour utilisateur prévisible

Le bouton “Retour” doit toujours mener à un écran attendu.

### I5 — Zéro perte silencieuse

Aucune fonctionnalité existante ne peut disparaître sans validation explicite.

---

## 4. Typologie obligatoire des écrans

Avant toute correction, les écrans concernés doivent être classés.

### Type A — Écrans DOM-dépendants

* Inputs non sérialisés
* Logique implicite dans le HTML
* Retour basé sur DOM / history

### Type B — Écrans idempotents

* Summary
* Thanks
* Transitions
* Post PRINT / MAIL / reload
* Retour basé sur navigation déclarative

Interdiction d’unifier les mécanismes sans analyse structurelle validée.

---

## 5. Matrice des mécanismes autorisés

| Mécanisme      | Autorisé pour | Interdit pour       |
| -------------- | ------------- | ------------------- |
| state.history  | Type A        | Type B              |
| navStack       | Type B        | Type A              |
| render()       | Affichage     | Recalcul d’état     |
| goToScreen()   | Type B        | Type A              |
| sessionStorage | Reprise       | Navigation primaire |

---

## 6. Règles critiques sur les fonctions clés

### 6.1 render()

Fonction critique.

Toute modification impose :

* revue de back()
* test PRINT
* test MAIL
* test reload

---

### 6.2 back()

Ordre unique autorisé :

1. navigation déclarative (Type B)
2. fallback DOM (Type A)

Interdit :

* hiérarchie pure
* déclaratif pur
* refactorisation idéologique

---

## 7. Protocole opérationnel — Réglage de bug

### 7.1 Activation

Mention obligatoire :

> DSR activé – analyse uniquement

Aucune modification tant que l’analyse n’est pas validée.

---

### 7.2 Description factuelle

* Bug observable
* Sans interprétation

### 7.3 Reproduction exacte

1.
2.
3.

### 7.4 Attendu vs Observé

Comparaison claire.

### 7.5 Environnement

* Navigateur
* OS / device

### 7.6 Version de référence

* Fichier HTML complet
* Version validée identifiée

---

## 8. Amendements autorisés (cas exceptionnels)

Uniquement si nécessaires :

* Neutralisation ciblée d’un mécanisme instable
* Substitution locale par un mécanisme existant plus sûr
* Ajout de garde-fou empêchant un comportement dangereux

Interdit :

* Refactorisation globale
* Changement de flux utilisateur
* Modification silencieuse

---

## 9. Implémentation (si validée)

* Une modification ciblée
* Fichier HTML complet livré
* Exécutable tel quel
* Toute neutralisation documentée

---

## 10. Checklist de non-régression (obligatoire)

* [ ] Retour écran question
* [ ] Retour écran summary
* [ ] Retour après PRINT
* [ ] Retour après MAIL
* [ ] Retour après reload
* [ ] Aucun écran blanc
* [ ] Aucun input perdu
* [ ] Aucun parcours inaccessible

Un échec = rollback immédiat.

---

## 11. Post-mortem obligatoire

Après correction :

* Hypothèse initiale fausse identifiée
* Invariant menacé identifié
* Garde-fou manquant documenté

Le post-mortem fait partie intégrante de la correction.

---

## 12. Clause d’arbitrage

Si une correction impose une perte fonctionnelle :

* DSR suspendu
* Arbitrage explicite requis
* Décision documentée

Aucune implémentation sans décision formelle.

---

## 13. Conclusion

Ce DSR :

* Protège contre les régressions visibles et invisibles
* Autorise uniquement des améliorations neutres
* Est compatible avec le Protocole de stabilité clinique PAP
* Constitue la référence technique officielle du projet

---

## 14. Protocole d’escalade structurelle

Déclenché si :

* Le bug réapparaît après deux corrections locales
* Le bug change d’emplacement après correction
* Le bug affecte plusieurs parcours indépendants
* La navigation est impliquée

Alors :

1. Arrêt des corrections locales
2. Diagnostic console obligatoire

   * état de navStack
   * état de history
   * état critique du state
   * capture du scénario
3. Analyse du mécanisme global
4. Décision : patch local ou refonte ciblée

Interdiction de corriger écran par écran si la cause est structurelle.
