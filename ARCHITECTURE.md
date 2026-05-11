# ARCHITECTURE CLINIQUE PAP

## 1. Objectif

Définir les principes de structuration des modules cliniques du projet PAP.

---

## 2. Principe général

Le système repose sur une logique d’aide à la décision clinique structurée.

Chaque module doit produire des données :

* exploitables
* cohérentes
* utilisables en consultation

---

## 3. Workflow clinique

Le parcours doit respecter les étapes suivantes :

1. Évaluation activité physique (GPAQ / Marshall)
2. Évaluation motivationnelle
3. Stratification du risque
4. Décision clinique
5. Génération du compte rendu

---

## 4. Logique décisionnelle

Toute recommandation doit être structurée sous forme conditionnelle :

IF condition → THEN action

Exemples :

* IF RCV élevé + AP intense → CMAP + EE
* IF pathologie aiguë → contre-indication temporaire

---

## 5. Structure des modules pathologies

Chaque module doit inclure :

### 5.1 Contraintes

* contre-indications
* limitations

### 5.2 Adaptations

* type d’activité
* intensité
* progression

### 5.3 Conditions spécifiques

* situations cliniques particulières

### 5.4 Règles décisionnelles

* logique IF → THEN

---

## 6. Données cliniques

Les données doivent être :

* structurées
* cohérentes
* conservées dans le modèle clinique

---

## 7. Générateur de CRC

Le générateur doit produire :

* un contenu cohérent avec les données
* une restitution fidèle de la consultation

---

## 8. Règle de conception

Éviter le contenu non exploitable.

Chaque élément doit contribuer à une décision clinique ou à une adaptation de la prise en charge.

---
