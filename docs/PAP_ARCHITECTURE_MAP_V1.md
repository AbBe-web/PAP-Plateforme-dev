PAP ARCHITECTURE MAP V1
Canonical System Architecture
Version : V1 governance hardened
Statut : Référence architecture officielle PAP
Origine : Consolidation audit profond architecture 2026

====================================================================
0. OBJECTIF DU DOCUMENT
=======================

Ce document constitue :

* la cartographie architecture officielle PAP
* la constitution architecture du système
* la référence gouvernance technique
* la référence boundaries système
* la référence pipelines cliniques
* la référence contraintes réglementaires implicites
* la référence invariants architecture
* la base de la roadmap phase 2

Le document décrit :

* l’architecture réellement observée
* les couches réellement émergentes
* les pipelines réellement présents
* les responsabilités réellement identifiées
* les risques réellement observés
* les contraintes d’évolution du système

====================================================================

1. PHILOSOPHIE ARCHITECTURE PAP
   ====================================================================

Principes fondateurs :

* explicabilité > sophistication opaque
* supervision humaine > automatisation
* déterminisme > probabilité
* structuration cognitive > décision autonome
* gouvernance > croissance anarchique
* stabilité clinique > innovation non contrôlée
* séparation connaissance/rendu > couplage transversal
* architecture traçable > logique implicite

PAP est conçu comme :

* une aide cognitive structurée
* un moteur déterministe explicable
* une plateforme clinique supervisée humainement

PAP n’est pas :

* un moteur décisionnel autonome
* un système diagnostic autonome
* une IA décisionnelle opaque

====================================================================
2. VISION GLOBALE DU SYSTÈME
============================

PAP n’est plus un simple générateur documentaire.

L’architecture réelle correspond désormais à :

une plateforme clinique déterministe
knowledge-driven
state-based
renderer-oriented
audit-able
supervision-compatible.

Objectifs fonctionnels réels :

* aide cognitive clinique
* structuration raisonnement clinique
* prescription activité physique
* contextualisation clinique
* génération documentaire
* vigilance contextuelle
* supervision humaine implicite

- contextualisation documentaire clinique ;
- orchestration ressources contextualisées ;
- architecture multi-sorties contextualisées.

====================================================================
3. ARCHITECTURE GLOBALE OBSERVÉE
================================

Architecture système observée :

Knowledge Layer
↓
Clinical Reasoning Layer
↓
Clinical State Layer
↓
Prescription State Layer
↓
Orchestration Layer
↓
Render Layer
↓
UI Layer
↓
Document Output Layer

Architecture implicite déjà présente :

* séparation connaissance / rendu
* séparation état / affichage
* orchestration centralisée
* pipelines de transformation
* renderers spécialisés
* state engines implicites
* supervision implicite
* vigilance contextuelle

====================================================================
4. SYSTEM EVOLUTION CONSTRAINTS
===============================

Contraintes structurelles absolues :

* pas d’automatisation décisionnelle
* pas de scoring autonome
* pas de priorisation opaque
* pas de moteur probabiliste décisionnel
* pas d’IA décisionnelle opaque
* pas de diagnostic autonome
* pas de dérive expert-system autonome

Toute évolution future devra préserver :

* supervision humaine
* explicabilité
* déterminisme
* auditabilité
* traçabilité

====================================================================
5. HUMAN-IN-THE-LOOP BY ARCHITECTURE
====================================

La supervision humaine n’est pas :

* optionnelle
* secondaire
* décorative

Elle constitue :
une propriété structurelle du système.

====================================================================
5.1 CONTRAINTES
===============

Le système ne doit jamais :

* conclure seul
* arbitrer seul
* imposer une décision
* hiérarchiser automatiquement
* remplacer le raisonnement clinique humain

====================================================================
5.2 INVARIANT MAJEUR
====================

Toute sortie clinique nécessite :

* interprétation humaine
* validation humaine
* supervision humaine

====================================================================
6. RECOMMENDATION LAYER ≠ DECISION LAYER
========================================

Principe structurel majeur :

PAP peut :

* structurer
* contextualiser
* rappeler
* suggérer
* organiser

PAP ne peut pas :

* décider
* conclure
* arbitrer
* diagnostiquer
* imposer

====================================================================
7. EXPLAINABILITY BY DESIGN
===========================

Toute sortie système doit être explicable par construction.

====================================================================
7.1 EXIGENCES
=============

Toute sortie doit pouvoir être reliée à :

* une règle
* une source knowledge-base
* un pipeline identifiable
* un contexte identifiable

====================================================================
7.2 INTERDICTIONS
=================

Aucune sortie ne doit dépendre :

* d’un calcul opaque
* d’une pondération cachée
* d’une logique probabiliste autonome

====================================================================
8. INVARIANTS SYSTÈME
=====================

Invariants architecture obligatoires :

* toute sortie clinique doit être traçable
* toute logique clinique doit rester déterministe
* aucune logique clinique ne doit dépendre du DOM
* aucun renderer ne doit décider cliniquement
* toute supervision doit rester humaine
* toute vigilance doit être explicitable
* toute mutation state doit être traçable
* toute règle doit être audit-able
* toute séparation knowledge/render doit être maintenue

====================================================================
9. KNOWLEDGE LAYER
==================

Composant principal :
PATHO_DATA

Nature réelle :
knowledge-base clinique déterministe.

====================================================================
9.1 RESPONSABILITÉS
===================

PATHO_DATA contient :

* contraintes
* adaptations
* vigilance
* CRC
* règles IF/THEN
* contextualisation clinique
* prudence
* réévaluation
* orientation implicite

====================================================================
9.2 DSL CLINIQUE IMPLICITE
==========================

Structure dominante :

SI condition
ALORS adaptation / prudence / réévaluation

Le système contient déjà :

* un DSL clinique implicite
* un proto moteur expert déterministe
* une logique métier explicable

====================================================================
9.3 ACTIF STRATÉGIQUE
=====================

PATHO_DATA constitue :

* le principal actif clinique
* le principal actif cognitif
* le principal actif réglementaire
* le principal actif métier

====================================================================
9.4 KNOWLEDGE GOVERNANCE
========================

Toute nouvelle règle devra être :

* explicable
* relisible
* testable
* contextualisable
* validable humainement

====================================================================
9.5 BOUNDARIES
==============

PATHO_DATA ne doit jamais :

* manipuler le DOM
* produire du HTML complexe
* gérer workflow UI
* contenir logique renderer

NB : Le système évolue également vers un Resource Knowledge Layer destiné à contextualiser :
- documents patient ;
- QR ressources ;
- aides consultation ;
- contenus formation ;
- ressources médecin ;
- ressources pédagogiques.
====================================================================
10. CLINICAL REASONING LAYER
============================

Composant critique :
buildClinicalModel()

Nature :
god function clinique centrale.

====================================================================
10.1 RESPONSABILITÉS
====================

buildClinicalModel() :

* agrège les données cliniques
* applique les règles
* fusionne les contraintes
* structure les sorties
* orchestre le raisonnement métier

====================================================================
10.2 PIPELINE
=============

PATHO_DATA
↓
buildClinicalModel()
↓
clinicalModel

====================================================================
10.3 RISQUES
============

* hypercentralisation métier
* dette cognitive
* dette maintenance
* dépendances cachées
* régressions silencieuses

====================================================================
10.4 BOUNDARIES
===============

Le moteur clinique doit :

* rester déterministe
* rester explicable
* rester audit-able

====================================================================
11. CLINICAL STATE LAYER
========================

Composant :
clinicalModel

Nature :
état clinique consolidé intermédiaire.

====================================================================
11.1 RESPONSABILITÉS
====================

Le clinicalModel :

* consolide les données cliniques
* normalise les sorties
* prépare le moteur prescription
* structure le raisonnement

====================================================================
11.2 IMPORTANCE STRATÉGIQUE
===========================

Le clinicalModel constitue :

* le pivot clinique réel
* le futur point validation
* le futur point supervision

====================================================================
12. PRESCRIPTION STATE LAYER
============================

Composants :
DEFAULT_PRESCRIPTION_MODEL
createPrescriptionModel()
prescriptionModel

====================================================================
12.1 NATURE RÉELLE
==================

Le système possède déjà :
un moteur d’état prescription structuré.

====================================================================
12.2 STRUCTURE OBSERVÉE
=======================

ordonnanceType
objectifs
activites
messagesPatient
recommandations
limitations
orientationAPA
texteLibreFinal
metadata

====================================================================
12.3 IMPORTANCE STRATÉGIQUE
===========================

Le prescriptionModel constitue :

* le futur contrat système
* le futur point validation
* le futur point export
* le futur point longitudinal

====================================================================
13. CANONICAL DATA CONTRACTS
============================

PATHO_DATA
→ buildClinicalModel()
→ clinicalModel
→ createPrescriptionModel()
→ prescriptionModel
→ generatePrescriptionCRC()
→ renderers
→ DOM

====================================================================
13.1 CONTRATS IMPLICITES
========================

Knowledge Layer :
fournit règles et contraintes.

Clinical State :
fournit consolidation clinique.

Prescription State :
fournit état prescription structuré.

Renderer Layer :
transforme les états en vues.

UI Layer :
gère interactions utilisateur.

====================================================================
13.2 INTERDICTIONS
==================

Knowledge Layer
≠
DOM

Renderer Layer
≠
Décision clinique

UI Layer
≠
Business Rules

State Layer
≠
Manipulation DOM

NB : Resource Layer :
fournit ressources contextualisées multi-sorties.
====================================================================
14. STATE MUTATION MAP
======================

Entrées utilisateur
↓
Sélection clinique
↓
clinicalModel
↓
prescriptionModel
↓
renderers
↓
DOM/UI

====================================================================
14.1 RISQUES
============

* mutations silencieuses
* propagation implicite
* enrichissements non tracés
* dette synchronisation

====================================================================
15. ORCHESTRATION LAYER
=======================

Composant critique :
generatePrescriptionCRC()

Nature :
orchestrateur principal prescription.

====================================================================
15.1 RESPONSABILITÉS
====================

generatePrescriptionCRC() :

* coordonne les états
* synchronise les pipelines
* pilote les renderers
* structure les sorties documentaires

====================================================================
15.2 RISQUES
============

* dette orchestration
* accumulation responsabilités
* couplage renderer/state

====================================================================
16. RENDER LAYER
================

Composants :
prescriptionRenderer.js
renderers spécialisés

====================================================================
16.1 RESPONSABILITÉS
====================

Le Render Layer :

* transforme les états
* produit les CRC
* produit le HTML
* synchronise les vues

====================================================================
16.2 BOUNDARIES
===============

Les renderers ne doivent jamais :

* décider cliniquement
* modifier les règles métier
* contenir logique clinique complexe

====================================================================
17. UI LAYER
============

Le UI Layer reste partiellement couplé.

====================================================================
17.1 RESPONSABILITÉS
====================

* saisie utilisateur
* affichage
* déclenchement événements
* synchronisation écran

====================================================================
17.2 RISQUES
============

* dette listeners
* mutations directes
* dépendances implicites
* couplage DOM/state

====================================================================
18. DIRTY STATE PIPELINE
========================

Le système contient déjà implicitement :

* états dirty
* refresh pipelines
* synchronisations render

====================================================================
18.1 RISQUES
============

* propagation silencieuse
* refresh excessifs
* incohérences état/UI

====================================================================
19. EXPLICIT RESPONSIBILITY MATRIX
==================================

Knowledge Layer
Peut :

* stocker règles
* stocker vigilance
* stocker contraintes

Ne doit jamais :

* rendre HTML
* gérer UI
* manipuler DOM

Clinical Reasoning
Peut :

* agréger
* contextualiser
* consolider

Ne doit jamais :

* décider seul
* arbitrer automatiquement

Renderer Layer
Peut :

* afficher
* transformer state→vue

Ne doit jamais :

* décider cliniquement
* modifier règles métier

UI Layer
Peut :

* gérer interactions

Ne doit jamais :

* contenir logique clinique

====================================================================
20. PIPELINE CRITICALITY CLASSIFICATION
=======================================

HIGH CRITICALITY

* PATHO_DATA
* buildClinicalModel()
* prescriptionModel
* supervision future
* validation future

MEDIUM CRITICALITY

* renderers
* exports
* dirty pipelines

LOW CRITICALITY

* styles
* composants purement visuels

====================================================================
21. FAILURE MODES ARCHITECTURE
==============================

Modes d’échec majeurs :

* contradiction règles
* mutation silencieuse
* renderer divergent
* supervision insuffisante
* vigilance masquée
* couplage transversal
* dette orchestration

====================================================================
22. CLINICAL SAFETY ARCHITECTURE
================================

Le système contient déjà :

* vigilance
* prudence
* réévaluation
* avis spécialisé

Architecture compatible avec :

* supervision clinique
* validation humaine
* vigilance contextuelle

====================================================================
23. ARCHITECTURAL OBSERVABILITY
===============================

Le système doit progressivement pouvoir observer :

* pipelines
* mutations state
* render flows
* règles critiques
* supervision flows

Objectif :
auditabilité système.

====================================================================
24. ARCHITECTURAL DEBT TAXONOMY
===============================

Types de dette identifiés :

* knowledge debt
* state debt
* renderer debt
* supervision debt
* validation debt
* orchestration debt
* regulatory debt

====================================================================
25. NON MEDICAL DEVICE SAFEGUARDS
=================================

Compatibilité aide cognitive actuelle favorable car :

* règles explicites
* déterminisme
* supervision humaine
* absence scoring autonome
* absence décision autonome
* absence moteur opaque

====================================================================
26. ARCHITECTURE TARGET PHASE 2
===============================

Architecture cible :

Knowledge Layer
↓
Rules Engine
↓
Clinical Reasoning Layer
↓
Validation Layer
↓
Clinical State Layer
↓
Prescription State Layer
↓
Orchestration Layer
↓
Pure Render Layer
↓
UI Layer

====================================================================
27. ARCHITECTURE MATURITY ASSESSMENT
====================================

Knowledge Layer :
maturité élevée

Clinical Reasoning :
maturité intermédiaire

State Architecture :
maturité intermédiaire

Render Architecture :
maturité intermédiaire

Validation Layer :
maturité faible

Supervision Layer :
maturité embryonnaire

Governance :
maturité émergente

====================================================================
28. PRIORITÉS TECHNIQUES MAJEURES
=================================

Priorité 1 :
stabiliser state pipeline.

Priorité 2 :
empêcher monolithe PATHO_DATA.

Priorité 3 :
réduire god functions.

Priorité 4 :
séparer renderer / métier.

Priorité 5 :
préparer supervision future.

Priorité 6 :
préparer validation layer.

Priorité 7 :
préparer knowledge governance.

====================================================================
29. CE QU’IL NE FAUT PAS FAIRE
==============================

* big rewrite
* frameworkisation massive
* IA décisionnelle
* moteur opaque
* scoring autonome
* logique clinique renderer
* duplication massive PATHO_DATA
* state global incontrôlé

====================================================================
30. CONCLUSION ARCHITECTURE
===========================

Le projet PAP a franchi le seuil séparant :

un générateur documentaire enrichi

et

une plateforme clinique déterministe structurée.

L’architecture observée est déjà :

* knowledge-driven
* state-based
* deterministic
* renderer-oriented
* supervision-compatible
* audit-able

La priorité stratégique n’est plus :
“ajouter des fonctionnalités”.

La priorité devient désormais :

gouverner,
structurer,
sécuriser,
stabiliser
et
faire évoluer
une architecture clinique déjà mature.


# PHASE 2 — CONTEXT ORCHESTRATION ARCHITECTURE

## 1. Architecture réelle consolidée

L’analyse des pipelines réels PAP confirme l’architecture logique suivante :

UI / DOM
↓
buildClinicalModel()
↓
clinicalModel
↓
renderers spécialisés
↓
documents multi-sorties

Renderers actuellement identifiés :

* renderLongLetterV2()
* renderParagraphVersion()
* renderMedicalRecord()
* renderPatientVersion()
* renderOrdonnanceAP()

Le système doit désormais être considéré comme :

* knowledge-driven ;
* state-based ;
* orchestration-based ;
* renderer-oriented ;
* multi-output ;
* déterministe ;
* explicable ;
* audit-able ;
* compatible supervision humaine.

## 2. Knowledge layer identifié

PATHO_DATA est désormais reconnu comme knowledge layer clinique/documentaire implicite.

Ce composant contient déjà :

* recommandations contextualisées ;
* ressources CRC ;
* éléments pathologies ;
* contextualisation documentaire.

Conséquence :

La PHASE 2 ne nécessite PAS la création d’un nouveau moteur de connaissance clinique.

La priorité architecture devient :

centralisation de la contextualisation clinique/documentaire.

## 3. Context orchestration layer cible

La PHASE 2 introduit progressivement un nouveau composant central :

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
* outils médecin ;
* modules formation.

Règles architecture :

* aucune automatisation décisionnelle ;
* recommendation layer ≠ decision layer ;
* supervision humaine obligatoire ;
* human-in-the-loop by design ;
* déterminisme obligatoire ;
* explicabilité obligatoire.

## 4. Renderers spécialisés

Les renderers PAP doivent progressivement devenir des consommateurs de contexte clinique/documentaire centralisé.

Responsabilités des renderers :

* contextualisation linguistique ;
* adaptation patient/médecin ;
* rendu documentaire ;
* génération HTML ;
* structuration documentaire ;
* export documentaire.

Les renderers ne doivent PAS devenir :

* moteurs décisionnels ;
* moteurs de recommandations ;
* moteurs de vigilance ;
* moteurs de supervision ;
* moteurs de ressources.

## 5. Moteurs hybrides identifiés

Les composants suivants sont identifiés comme moteurs hybrides critiques :

* buildPrescription()
* buildCRCPathoBloc()
* buildDecisionBloc()

Ces composants mélangent actuellement :

* logique clinique ;
* accès knowledge layer ;
* contextualisation documentaire ;
* logique ressources ;
* logique patient/médecin ;
* rendu documentaire.

Ces composants constituent les cibles prioritaires de migration progressive vers computeClinicalContext().

## 6. Stratégie de migration validée

La stratégie PHASE 2 validée est :

surcouche progressive
et NON
refonte massive.

Règles de migration :

* préserver buildClinicalModel() ;
* préserver prescriptionModel ;
* préserver renderers existants ;
* préserver pipeline documentaire ;
* préserver DSR ;
* préserver stabilité clinique ;
* éviter toute rupture fonctionnelle.

Ordre de migration cible :

1. introduction computeClinicalContext() minimal ;
2. migration vigilance ;
3. migration supervision ;
4. migration adaptations ;
5. migration ressources ;
6. migration QR/document ;
7. migration formation ;
8. optimisation renderer progressive.

