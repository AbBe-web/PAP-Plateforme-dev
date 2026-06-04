PAP PHASE 2 TECHNICAL ROADMAP
Roadmap architecture et gouvernance système
Version : V1 governance hardened
Statut : Doctrine d’évolution architecture post audit profond 2026

====================================================================
0. OBJECTIF DU DOCUMENT
=======================

Ce document définit :

* la stratégie architecture phase 2
* la doctrine d’évolution système
* les règles de gouvernance architecture
* les protections réglementaires structurelles
* les priorités techniques réelles
* les règles de croissance du système

Objectif principal :

faire évoluer PAP
sans perdre :

* déterminisme
* explicabilité
* supervision humaine
* stabilité clinique
* cohérence cognitive
* compatibilité aide cognitive

====================================================================

1. VISION PHASE 2
   ====================================================================

La phase 2 ne correspond pas à :

* une réécriture
* un changement technologique massif
* une migration framework
* une industrialisation prématurée

La phase 2 correspond à :

la gouvernance explicite
d’une architecture clinique déjà mature.

Objectif réel :

transformer progressivement PAP depuis :

une architecture clinique implicite

vers :

une plateforme clinique gouvernée explicitement,
déterministe,
explicable,
audit-able
et
compatible supervision humaine.

====================================================================
2. PRINCIPES ABSOLUS NON NÉGOCIABLES
====================================

Contraintes absolues :

* pas de big rewrite
* pas d’automatisation décisionnelle
* pas d’IA décisionnelle opaque
* pas de scoring autonome
* pas de priorisation opaque
* pas de moteur probabiliste décisionnel
* pas de rupture pipeline clinique
* pas de dérive expert-system autonome

Le médecin reste :

* décisionnaire final
* superviseur humain
* validateur final
* interprète clinique final

====================================================================
3. HUMAN-IN-THE-LOOP BY DESIGN
==============================

La supervision humaine ne doit pas être :

* optionnelle
* implicite uniquement
* ajoutée secondairement

La supervision humaine doit être :
structurellement intégrée à l’architecture.

====================================================================
3.1 CONTRAINTES
===============

Le système ne doit jamais :

* conclure seul
* arbitrer seul
* hiérarchiser seul
* imposer une décision
* remplacer le jugement clinique

====================================================================
3.2 ADAPTATIONS
===============

Toute évolution future devra préserver :

* validation humaine
* interprétation humaine
* supervision humaine
* contrôle humain explicite

====================================================================
3.3 CONDITIONS
==============

Toute fonctionnalité future devra pouvoir répondre à :

* qui décide ?
* qui valide ?
* qui supervise ?
* qui interprète ?

La réponse doit toujours être :
le médecin.

====================================================================
4. RECOMMENDATION LAYER ≠ DECISION LAYER
========================================

Principe fondamental :

PAP peut :

* structurer
* rappeler
* contextualiser
* suggérer
* organiser

PAP ne peut pas :

* conclure
* arbitrer
* imposer
* diagnostiquer
* décider

====================================================================
4.1 RISQUE MAJEUR
=================

Risque principal :
dérive progressive vers moteur décisionnel implicite.

====================================================================
4.2 SAFEGUARDS
==============

Toute évolution devra préserver :

Recommendation Layer
≠
Decision Layer

====================================================================
5. EXPLAINABILITY BY DESIGN
===========================

Toute sortie système doit être explicable par construction.

====================================================================
5.1 CONTRAINTES
===============

Toute sortie doit pouvoir être reliée à :

* une règle
* une source knowledge-base
* un pipeline identifiable
* un contexte identifiable

====================================================================
5.2 CONDITIONS
==============

Aucune sortie ne doit dépendre :

* d’un calcul opaque
* d’une pondération cachée
* d’une logique probabiliste autonome

====================================================================
5.3 DÉCISIONS À CONSIDÉRER
==========================

Possibilités futures :

* traceability logs
* rule provenance
* explainability pipeline
* supervision trace

====================================================================
6. ARCHITECTURE LIFECYCLE GOVERNANCE
====================================

Objectif :
gouverner l’évolution architecture dans le temps.

====================================================================
6.1 CONTRAINTES
===============

Le principal risque long terme n’est pas :
la technologie.

Le principal risque est :
la dérive architecture invisible.

====================================================================
6.2 ADAPTATIONS
===============

Toute évolution majeure devra :

* expliciter ses boundaries
* expliciter ses dépendances
* expliciter ses impacts state
* expliciter ses impacts réglementaires

====================================================================
6.3 CONDITIONS
==============

Toute nouvelle couche devra justifier :

* sa valeur clinique
* sa valeur cognitive
* sa valeur technique
* son coût complexité

====================================================================
7. ARCHITECTURE DECISION RECORDS (ADR)
======================================

Objectif :
tracer les décisions architecture structurantes.

====================================================================
7.1 DÉCISIONS À DOCUMENTER
==========================

* nouvelles couches
* nouveaux pipelines
* nouveaux moteurs
* nouveaux modules critiques
* nouvelles dépendances majeures
* nouveaux mécanismes supervision

====================================================================
7.2 OBJECTIFS
=============

Les ADR permettent :

* cohérence long terme
* auditabilité
* gouvernance technique
* réduction dette implicite

====================================================================
8. COMPLEXITY BUDGET
====================

Principe fondamental :

toute complexité doit justifier :

* son coût cognitif
* son coût clinique
* son coût technique
* son coût réglementaire

====================================================================
8.1 RISQUES
===========

Risques majeurs :

* surarchitecture
* abstraction prématurée
* fragmentation excessive
* inflation pipelines
* inflation supervision
* inflation vigilance

====================================================================
8.2 CONDITIONS
==============

Toute abstraction devra :

* simplifier réellement
* réduire dette réelle
* améliorer gouvernance réelle

====================================================================
9. COGNITIVE LOAD GOVERNANCE
============================

PAP étant une aide cognitive,
la charge cognitive doit devenir :
un critère architecture officiel.

====================================================================
9.1 RISQUES
===========

* inflation alertes
* inflation vigilance
* inflation UI
* bruit supervision
* surcharge cognitive consultation

====================================================================
9.2 CONDITIONS
==============

Toute nouvelle fonctionnalité devra :

* préserver lisibilité clinique
* préserver rapidité consultation
* préserver hiérarchisation mentale humaine

====================================================================
10. KNOWLEDGE GOVERNANCE
========================

PATHO_DATA constitue :
une knowledge-base clinique gouvernée.

====================================================================
10.1 RISQUES
============

* duplication règles
* contradictions
* explosion volumétrique
* dette vigilance
* dette terminologique
* dette maintenance

====================================================================
10.2 CONDITIONS
===============

Toute nouvelle règle devra être :

* déterministe
* explicable
* relisible
* contextualisable
* testable

====================================================================
10.3 DÉCISIONS À CONSIDÉRER
===========================

Possibilités futures :

* knowledge modules
* versioning
* validation schema
* rule governance
* clinical review workflow

====================================================================
10B. RESOURCE GOVERNANCE
========================

La bibliothèque de ressources constitue désormais :
un composant architecture stratégique du système PAP.

Le système évolue progressivement vers :
une plateforme de contextualisation clinique et documentaire déterministe.

====================================================================
10B.1 OBJECTIFS
===============

Les ressources doivent pouvoir alimenter de manière cohérente :

* ordonnance APA ;
* ordonnance simple ;
* CRC ;
* documents patient ;
* QR codes ;
* aides cognitives consultation ;
* outils médecin ;
* module formation ;
* exports ;
* longitudinal futur.

====================================================================
10B.2 RISQUES MAJEURS
=====================

Risques principaux :

* chaos documentaire ;
* duplication ressources ;
* contextualisation incohérente ;
* pipelines documentaires parallèles ;
* dette documentaire invisible ;
* divergence contenu patient/médecin ;
* ressources non gouvernées ;
* perte traçabilité ;
* duplication vigilance/adaptations.

====================================================================
10B.3 OBJECTIF STRUCTUREL
=========================

Éviter que chaque renderer :

* ordonnance ;
* patient ;
* QR ;
* consultation ;
* formation ;
* export ;

développe sa propre logique documentaire indépendante.

Objectif :
centraliser progressivement la contextualisation documentaire via :
computeClinicalContext().

====================================================================
10B.4 CIBLE FUTURE
==================

Le contexte clinique/documentaire central doit progressivement produire :

```js id="7qv9hu"
{
  vigilance: [],
  precautions: [],
  adaptations: [],
  supervision: [],
  recommandations: [],
  education: [],

  resources: [],
  patientDocuments: [],
  clinicianTools: [],
  trainingModules: [],
  qrResources: []
}
```

====================================================================
10B.5 RESOURCE MODEL MINIMAL
============================

Le système devra progressivement converger vers un modèle ressource gouverné.

Exemple minimal cible :

```js id="ny08m7"
{
  id,
  type,
  audience,
  pathologies,
  objectifs,
  tags,
  format,
  source,
  version,
  relatedResources
}
```

====================================================================
10B.6 CONDITIONS
================

Toute ressource devra rester :

* déterministe ;
* contextualisable ;
* traçable ;
* audit-able ;
* compatible supervision humaine ;
* non décisionnelle ;
* compatible multi-sorties.

====================================================================
10B.7 MULTI-OUTPUT ARCHITECTURE
===============================

Les ressources doivent progressivement pouvoir être consommées par :

* ordonnance ;
* patient ;
* consultation ;
* QR ;
* formation ;
* longitudinal ;
* exports.

Le contexte clinique/documentaire central doit devenir :
la source commune de contextualisation.

====================================================================
10B.8 CONDITIONS ARCHITECTURE
=============================

Les renderers ne doivent pas :

* embarquer leur propre logique documentaire complexe ;
* dupliquer les règles de contextualisation ;
* devenir des sources documentaires indépendantes.

La contextualisation documentaire doit progressivement être :
centralisée ;
gouvernée ;
mutualisée.

====================================================================
10B.9 COMPATIBILITÉ FUTURE
==========================

La gouvernance ressources doit préserver la compatibilité future avec :

* supervision clinique ;
* moteur médicaments ;
* vigilance avancée ;
* longitudinal ;
* analytics descriptifs ;
* architecture modulaire ;
* formation contextualisée ;
* QR dynamiques ;
* exports structurés.

====================================================================
10B.10 PRIORITÉ PHASE 2
=======================

La resource governance constitue désormais :
une priorité structurelle phase 2.

Objectif :
préparer une architecture clinique/documentaire cohérente avant expansion fonctionnelle massive.

====================================================================
11. CLINICAL RULE GOVERNANCE
============================

Les règles cliniques doivent devenir :
des objets gouvernés explicitement.

====================================================================
11.1 OBJECTIFS
==============

* traçabilité
* validation clinique
* auditabilité
* maintenance
* cohérence métier

====================================================================
11.2 CONDITIONS
===============

Toute modification règle devra préciser :

* auteur
* justification
* contexte clinique
* impacts potentiels

====================================================================
12. KNOWLEDGE VERSIONING STRATEGY
=================================

Objectif :
préparer l’évolution clinique future.

====================================================================
12.1 ÉVOLUTIONS FUTURES
=======================

* mises à jour HAS
* nouvelles recommandations
* nouvelles vigilances
* nouvelles adaptations

====================================================================
12.2 CONDITIONS
===============

Toute knowledge future devra permettre :

* historique versions
* traçabilité modifications
* compatibilité backward
* audit historique

====================================================================
13. STATE GOVERNANCE
====================

Objectif :
rendre le state explicite et gouverné.

====================================================================
13.1 RISQUES
============

* mutations implicites
* enrichissements silencieux
* propagation non tracée
* dette synchronisation

====================================================================
13.2 ADAPTATIONS
================

Évolutions possibles :

* state contracts
* ownership state
* mutation conventions
* validation state

====================================================================
13.3 CONDITIONS
===============

Le state ne doit jamais :

* dépendre directement du DOM
* contenir logique renderer
* être muté silencieusement

====================================================================
14. RENDER GOVERNANCE
=====================

Objectif :
stabiliser le render layer.

====================================================================
14.1 CONTRAINTES
================

Les renderers ne doivent jamais :

* décider cliniquement
* modifier les règles métier
* porter logique clinique complexe

====================================================================
14.2 ADAPTATIONS
================

Évolutions possibles :

* pure render functions
* render contracts
* render adapters
* render isolation

====================================================================
15. GOD FUNCTION REDUCTION
==========================

Zones critiques :

* buildClinicalModel()
* generatePrescriptionCRC()

====================================================================
15.1 OBJECTIF
=============

Réduire progressivement :

* concentration métier
* dépendances implicites
* orchestration monolithique

====================================================================
15.2 CONDITIONS
===============

Aucun découplage ne doit :

* casser les pipelines existants
* modifier le déterminisme
* modifier les sorties métier

====================================================================
16. STRANGLER MIGRATION STRATEGY
================================

Objectif :
faire évoluer progressivement sans rupture.

====================================================================
16.1 STRATÉGIE
==============

Migration progressive par :

* wrappers
* adapters
* extractions ciblées
* coexistence ancien/nouveau

====================================================================
16.2 CONTRAINTES
================

Toute migration devra :

* préserver comportement clinique
* préserver sorties métier
* préserver supervision humaine

====================================================================
17. VALIDATION LAYER
====================

Objectif :
préparer une validation explicite.

====================================================================
17.1 VALIDATIONS FUTURES POSSIBLES
==================================

* validation structure
* validation cohérence
* validation conflits
* validation vigilance

====================================================================
17.2 CONDITIONS
===============

La validation ne doit jamais :

* remplacer le médecin
* imposer une décision
* arbitrer automatiquement

====================================================================
18. SUPERVISION FUTURE
======================

Le système possède déjà :

* vigilance
* prudence
* réévaluation
* avis spécialisé

====================================================================
18.1 ÉVOLUTIONS POSSIBLES
=========================

* red flags
* conflits règles
* contradictions
* vigilance thérapeutique
* supervision sécurité

====================================================================
18.2 CONDITIONS
===============

Toute supervision devra rester :

* explicable
* déterministe
* supervisée humainement

====================================================================
19. REGULATORY DRIFT PREVENTION
===============================

Risque majeur :
dérive progressive involontaire.

====================================================================
19.1 RISQUES
============

* scoring partiel
* priorisation implicite
* automatisation progressive
* moteur expert implicite
* autonomie décisionnelle émergente

====================================================================
19.2 SAFEGUARDS
===============

Toute nouvelle fonctionnalité devra être évaluée selon :

* impact décisionnel
* impact supervision
* impact explicabilité
* impact autonomie système

====================================================================
20. TEST STRATEGY
=================

Le déterminisme impose :
une stratégie de tests métier structurée.

====================================================================
20.1 TESTS PRIORITAIRES
=======================

* tests règles métier
* tests knowledge-base
* tests non régression clinique
* tests renderer
* tests supervision
* tests validation

====================================================================
20.2 OBJECTIFS
==============

* stabilité métier
* stabilité pipelines
* stabilité supervision
* prévention régressions silencieuses

====================================================================
21. ARCHITECTURAL FITNESS FUNCTIONS
===================================

Objectif :
vérifier régulièrement la cohérence architecture.

====================================================================
21.1 EXEMPLES
=============

* absence logique clinique renderer
* absence dépendance DOM knowledge
* taille fonctions critiques
* couverture règles métier
* explicabilité maintenue

====================================================================
22. FUTUR MOTEUR MÉDICAMENTS
============================

Objectif :
préparer compatibilité future sans implémentation prématurée.

====================================================================
22.1 RISQUES
============

* explosion combinatoire
* interactions croisées
* dette vigilance massive
* dette supervision

====================================================================
22.2 CONDITIONS
===============

Le futur moteur médicaments devra :

* rester séparé
* rester déterministe
* rester supervisé humainement
* rester explicable

====================================================================
23. LONGITUDINAL FUTUR
======================

Évolutions futures possibles :

* suivi prescriptions
* suivi adaptations
* suivi limitations
* suivi réévaluations

====================================================================
23.1 CONDITIONS
===============

Le longitudinal devra rester :

* explicable
* supervisé humainement
* non décisionnel

====================================================================
24. EXPORTS / ANALYTICS FUTURS
==============================

Possibilités futures :

* exports JSON
* exports structurés
* analytics descriptifs
* longitudinal analytics

====================================================================
24.1 CONDITIONS
===============

Les analytics ne doivent jamais :

* scorer automatiquement
* décider automatiquement
* prioriser automatiquement

====================================================================
25. FUTURE MODULARIZATION MAP
=============================

Architecture cible progressive :

future/
knowledge/
rules/
supervision/
vigilance/
medications/
validation/
exports/
analytics/
longitudinal/

====================================================================
26. PHASES RÉALISTES
====================

PHASE A — Stabilisation

* state governance
* render governance
* knowledge governance

PHASE B — Découplage progressif

* extractions ciblées
* adapters
* render isolation

PHASE C — Validation

* validation layer
* supervision layer
* vigilance layer

PHASE D — Extensibilité

* médicaments
* longitudinal
* analytics
* exports structurés

====================================================================
27. PRIORITÉS COURT TERME
=========================

* stabiliser prescriptionModel
* gouverner PATHO_DATA
* limiter mutations implicites
* documenter boundaries
* réduire dette renderer

====================================================================
28. PRIORITÉS MOYEN TERME
=========================

* supervision explicite
* validation layer
* render contracts
* mutation governance
* modularisation knowledge

====================================================================
29. PRIORITÉS LONG TERME
========================

* moteur vigilance structuré
* compatibilité médicaments
* longitudinal
* analytics structurés
* supervision avancée

====================================================================
30. CE QU’IL NE FAUT PAS FAIRE
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
31. CONCLUSION STRATÉGIQUE
==========================

La phase 2 ne doit pas transformer PAP en :

* moteur autonome
* plateforme opaque
* système décisionnel automatisé

La phase 2 doit préserver :

* déterminisme
* explicabilité
* supervision humaine
* aide cognitive
* gouvernance clinique
* gouvernance architecture

Objectif final :

faire évoluer PAP vers :

une plateforme clinique gouvernée explicitement,
stable,
scalable,
audit-able,
explicable,
et
structurellement supervisée par l’humain.


# PHASE 2B — CONTEXT ORCHESTRATION STRATEGY

## 1. Réévaluation architecture PHASE 2

L’analyse approfondie des pipelines réels PAP modifie la compréhension de la PHASE 2.

Découverte majeure :

PAP possède déjà implicitement :

* un knowledge layer ;
* un state layer ;
* des renderers spécialisés ;
* une architecture multi-sorties ;
* une orchestration documentaire centrale.

La priorité PHASE 2 n’est donc PAS :

* la frameworkisation ;
* la réécriture renderer ;
* la modularisation UI ;
* la refonte massive.

La priorité réelle devient :

centralisation progressive de la contextualisation clinique/documentaire.

## 2. Dette architecture principale identifiée

La dette architecture principale PAP est désormais identifiée comme :

contextualisation clinique/documentaire dispersée.

Cette dispersion concerne principalement :

* vigilance ;
* précautions ;
* adaptations ;
* supervision ;
* recommandations ;
* ressources ;
* documents patient ;
* QR resources ;
* contextualisation patient/médecin.

Les principaux moteurs hybrides identifiés sont :

* buildPrescription()
* buildCRCPathoBloc()
* buildDecisionBloc()

## 3. computeClinicalContext()

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

computeClinicalContext() doit progressivement centraliser :

* vigilance ;
* supervision ;
* adaptations ;
* recommandations ;
* ressources ;
* documents patients ;
* QR resources ;
* outils médecin ;
* modules formation.

Contraintes obligatoires :

* déterminisme ;
* explicabilité ;
* absence automatisation décisionnelle ;
* human-in-the-loop by design ;
* recommendation layer ≠ decision layer.

## 4. Stratégie de migration validée

La migration PHASE 2 doit être réalisée sous forme de surcouche progressive.

Règles impératives :

* absence de big rewrite ;
* absence de rupture pipeline clinique ;
* absence de rupture renderer ;
* absence de rupture DSR ;
* absence de rupture prescriptionModel ;
* absence de rupture buildClinicalModel() ;
* absence de frameworkisation prématurée.

Stratégie validée :

1. création computeClinicalContext() minimal ;
2. injection contexte optionnelle dans renderers ;
3. migration progressive vigilance ;
4. migration progressive supervision ;
5. migration progressive adaptations ;
6. migration progressive ressources ;
7. suppression progressive duplications anciennes.

## 5. Resource governance

Les ressources PAP sont désormais considérées comme composant architecture stratégique.

Objectifs :

* éviter duplication documentaire ;
* éviter chaos QR ;
* éviter divergence patient/médecin ;
* préparer architecture formation ;
* préparer architecture consultation ;
* préparer architecture longitudinal ;
* préparer architecture multi-sorties.

Les ressources doivent rester :

* déterministes ;
* contextualisables ;
* auditables ;
* gouvernées ;
* compatibles supervision humaine.

## 6. Renderers spécialisés

Les renderers PAP doivent progressivement évoluer vers un rôle de consommateurs de contexte clinique/documentaire.

Responsabilités conservées :

* génération HTML ;
* adaptation linguistique ;
* adaptation patient/médecin ;
* structuration documentaire ;
* export documentaire.

Responsabilités progressivement externalisées :

* vigilance ;
* recommandations ;
* ressources ;
* supervision ;
* adaptations ;
* contextualisation clinique.

## 7. Sprint technique initial recommandé

Sprint technique recommandé :

### Objectifs

* créer /core/clinical-context/ ;
* introduire computeClinicalContext() minimal ;
* préparer structure vigilance/resources/adaptations ;
* préserver pipeline actuel ;
* préserver renderers actuels.

### Hors périmètre

* refonte renderer ;
* migration complète ;
* framework state ;
* optimisation globale ;
* réécriture PATHO_DATA ;
* moteur décisionnel.

