# ARCHITECTURE AUDIT 2026

Version : 1.0

Date : Mai 2026

Statut : Audit architectural du dépôt PAP

Objectif :

Documenter l'état réel du projet au moment de l'audit afin de faciliter la maintenance, les évolutions futures et les analyses DSR.

---

# 1. Résumé exécutif

## Evaluation globale

Architecture : 8,5 / 10

Gouvernance : 9,5 / 10

Maintenabilité : 7,5 / 10

Risque clinique : Faible

Risque technique : Modéré mais maîtrisé

---

# 2. Cartographie des modules

Architecture observée :

PAP-Plateforme

* patient/
* medecin/
* core/
* shared/
* css/
* assets/
* infrastructure PWA

Le projet n'est plus un simple questionnaire mais une plateforme modulaire comprenant :

* auto-évaluation patient ;
* import JSON ;
* consultation médecin ;
* génération CRC ;
* prescription d'activité physique ;
* infrastructure PWA ;
* ressources futures.

---

# 3. CRC MODULE MAP

Le générateur CRC constitue le principal orchestrateur du projet.

Fichier principal :

medecin/generateur-crc/index.html

Taille observée :

≈ 8178 lignes

Sous-systèmes identifiés :

A. Bootstrap

* initialisation
* attachement listeners
* configuration

B. Consultation clinique

* collecte données
* logique consultation

C. Import JSON

* import patient
* préremplissage

D. Génération CRC

* production documentaire

E. Prescription AP

* interaction avec core/

F. Export documentaire

* copie
* impression
* exports

G. UI dynamique

* affichages
* panneaux
* interactions

H. Ressources

* aides
* documentation

I. Infrastructure

* PWA
* offline

---

# 4. PAP STATE MAP

Familles d'états identifiées :

## Etat clinique

Source de vérité principale.

Contient notamment :

* données consultation ;
* données importées ;
* objectifs ;
* limitations ;
* informations médicales utiles à la consultation.

---

## Etat ordonnance

Localisation :

core/prescriptionModel.js

Architecture :

Model
↓
Sync
↓
Renderer

---

## Etat documentaire

Produits dérivés :

* CRC ;
* ordonnance ;
* version patient ;
* exports.

Ne doivent jamais devenir des sources de vérité.

---

## Etat UI

Contient :

* affichages ;
* onglets ;
* accordéons ;
* panneaux ;
* modales.

Doit rester séparé de l'état clinique.

---

## Etat infrastructure

Contient :

* PWA ;
* manifest ;
* service worker ;
* cache.

Aucune donnée clinique persistante.

---

# 5. PAP DEPENDENCY MAP

## Module Patient

Dépendances :

* css/
* shared/

Communication avec le module médecin :

JSON uniquement.

---

## Module Médecin

Dépendances :

* core/
* shared/
* css/

Ne dépend pas directement du module patient.

---

## Module Ordonnance

Architecture découplée :

prescriptionModel
↓
prescriptionSync
↓
prescriptionRenderer

Cette séparation doit être conservée.

---

## Shared

Prévu pour :

* modèle de données partagé ;
* utilitaires JSON ;
* compatibilité patient/médecin.

Faiblement exploité au moment de l'audit.

---

# 6. PAP EVENT MAP

Familles d'événements identifiées :

* Bootstrap
* Input clinique
* Import JSON
* Reset consultation
* Génération CRC
* Prescription AP
* Export
* UI

Risques surveillés :

* dirty-state ;
* synchronisation ;
* listeners ;
* rerender.

---

# 7. RISK REGISTER

## Critique C1

Monolithe CRC

Fichier :

medecin/generateur-crc/index.html

Constat :

Concentration importante des responsabilités.

Conséquence :

Complexité croissante de maintenance.

---

## Important I1

Connaissance implicite

Une partie importante de l'architecture n'était pas documentée avant cet audit.

---

## Important I2

Etat clinique vs état documentaire

Risque historique :

confusion entre données source et documents générés.

---

## Important I3

Import JSON futur

Risque :

duplication de logique si le dossier shared n'est pas utilisé comme point central.

---

## Moyen M1

CSS global

Impact transversal sur plusieurs modules.

---

## Moyen M2

Evolution multi-modules

Consultation rapide
Ressources
Formation
IA facultative

Nécessité de préserver le découplage.

---

## Faible F1

Core ordonnance

Architecture jugée saine.

Séparation :

Model
↓
Sync
↓
Renderer

à préserver.

---

# 8. CONTRAT DE STABILITE : CONFORMITE

Architecture modulaire :

Conforme

---

Patient indépendant du médecin :

Conforme

---

Absence de backend obligatoire :

Conforme

---

Absence de stockage clinique persistant :

Conforme

---

Source de vérité clinique :

Globalement conforme

---

Synchronisation ordonnance :

Conforme

---

Gestion des listeners :

A surveiller

---

USER EVENT vs PROGRAMMATIC UPDATE :

A surveiller

Particulièrement pour :

* import JSON ;
* reset ;
* préremplissage.

---

# 9. Opportunités futures

Priorité faible à moyenne.

## A. Poursuivre la modularisation du générateur CRC

Sans refactorisation massive.

Approche progressive uniquement.

---

## B. Développer shared/

Pour :

* modèles partagés ;
* validation JSON ;
* import/export.

---

## C. Préserver le découplage ordonnance

Conserver :

Model
↓
Sync
↓
Renderer

---

# 10. Conclusion

L'audit ne met en évidence aucun risque clinique majeur.

L'architecture globale est cohérente et compatible avec :

* consultation rapide ;
* ressources ;
* formation ;
* import JSON ;
* préremplissage ;
* ordonnance modulaire ;
* IA facultative.

Le principal point de vigilance concerne la concentration de logique dans :

medecin/generateur-crc/index.html

La priorité pour les évolutions futures est de préserver :

* les sources de vérité ;
* la séparation des états ;
* le découplage ordonnance ;
* les principes du contrat de stabilité ;
* les principes du DSR.
