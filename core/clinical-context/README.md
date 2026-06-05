# Clinical Context Layer

Statut :
PHASE 2 — Sprint 1

Références :

* PROTOCOLE_STABILITE_CLINIQUE_PAP.md
* PROTOCOLE_DSR_PAP.md
* ARCHITECTURE_REFERENCE.md
* PHASE2_CONTEXT_ORCHESTRATION_STRATEGY.md

---

# Objectif

Introduire progressivement une couche d’orchestration clinique/documentaire explicite dans PAP.

La PHASE 2 correspond à :

* centralisation progressive de la contextualisation clinique ;
* réduction des IF/THEN dispersés ;
* préparation architecture multi-sorties ;
* gouvernance des ressources ;
* préparation supervision future ;
* préparation longitudinal futur.

La PHASE 2 ne correspond PAS à :

* une réécriture massive ;
* une frameworkisation ;
* une refonte renderer ;
* une refonte UI ;
* une automatisation décisionnelle ;
* un moteur décisionnel autonome.

---

# Architecture cible

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

---

# Responsabilités du clinical-context layer

Responsabilités autorisées :

* vigilance ;
* précautions ;
* adaptations ;
* supervision ;
* recommandations ;
* contextualisation documentaire ;
* ressources ;
* QR resources ;
* clinician tools ;
* patient documents ;
* orchestration documentaire.

Responsabilités interdites :

* rendering HTML ;
* manipulation DOM ;
* querySelector ;
* listeners ;
* logique UI ;
* export PDF ;
* mutation clinicalModel ;
* mutation prescriptionModel ;
* décision clinique automatique ;
* validation automatique ;
* scoring autonome ;
* prescription automatique.

---

# Contraintes obligatoires

Le clinical-context layer doit rester :

* déterministe ;
* explicable ;
* auditables ;
* supervisable ;
* compatible offline ;
* compatible DSR ;
* compatible pipeline existant.

Le médecin reste décisionnaire final.

Recommendation layer ≠ decision layer.

---

# Règles techniques

computeClinicalContext() doit rester :

* une pure function ;
* sans side effects ;
* sans accès DOM ;
* sans mutation globale ;
* sans dépendance renderer.

Le pipeline doit rester :

clinicalModel
↓
clinicalContext
↓
renderers

et NON :

renderers
↓
clinical logic

---

# Sprint 1

Objectifs réalisés :

* création core/clinical-context/ ;
* création computeClinicalContext() ;
* création context-schema ;
* création resource-registry ;
* wiring pipeline minimal ;
* compatibilité renderers existants ;
* zéro rupture clinique ;
* zéro rupture ordonnance ;
* zéro rupture DSR.

Contraintes Sprint 1 :

* aucun renderer migré ;
* aucun big rewrite ;
* aucune refonte PATHO_DATA ;
* aucune frameworkisation ;
* aucune refonte prescriptionModel ;
* aucun moteur décisionnel.

---

# Ordre de migration Phase 2

1. infrastructure context layer ;
2. migration vigilance ;
3. migration supervision ;
4. migration adaptations ;
5. migration resources ;
6. migration QR resources ;
7. migration formation ;
8. découplage renderer progressif ;
9. suppression progressive duplications legacy.

---

# NEXT

Priorités Sprint 2 :

* migration vigilance ;
* migration buildCRCPathoBloc() ;
* migration buildDecisionBloc() ;
* préparation supervision layer ;
* préparation resource governance.

---

# Principe fondamental

PHASE 2 = orchestration progressive
et NON
reconstruction massive.
