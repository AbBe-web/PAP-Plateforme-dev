PAP SPRINT1 IMPLEMENTATION MAP
Statut : VALIDÉ (pré-implémentation)
Objectif : cartographie complète Sprint 1 avant toute modification du code.
Références : PROTOCOLE_STABILITE_CLINIQUE_PAP.md ; PROTOCOLE_DSR_PAP.md ; docs/ARCHITECTURE_REFERENCE.md ; docs/ARCHITECTURE_AUDIT_2026.md ; docs/PAP_PRODUCT_ARCHITECTURE_V2.md.

====================================================================
PRINCIPE GÉNÉRAL
================

Sprint 1 = ajout de fonctionnalités métier sans modification de l'architecture globale. Objectif : ajouter des données métier ; réutiliser les pipelines existants ; éviter toute augmentation du couplage ; préparer la future PHASE 2 (découplage render/update/init, renderActiveMode modulaire, séparation init/refresh, audit reset.js, optimisation rerenders) sans l'implémenter.

Flux cible :
UI → PrescriptionModel → PrescriptionSync → PrescriptionRenderer → CRC / DPI / Ordonnance AP / Ordonnance APA.

Règles :

* aucune automatisation décisionnelle ;
* aucune prescription automatique ;
* aucune orientation automatique ;
* aucune validation/invalidation de décision ;
* médecin décisionnaire final ;
* Cognitive Layer = aide cognitive uniquement ;
* données calculées ≠ données stockées.

====================================================================
PÉRIMÈTRE SPRINT 1
==================

Inclus :

* 7A Objectifs thérapeutiques ;
* 7B Précautions / limitations ;
* 7D Recommandations ;
* 7E Orientation AP.

Existant :

* 7C Prescription AP.

Exclus :

* Bloc 4 complet ;
* Ordonnance APA V1 ;
* Phase 2 architecture ;
* refactoring render/update/init ;
* optimisation rerenders ;
* audit reset.js.

====================================================================
7A OBJECTIFS THÉRAPEUTIQUES
===========================

Question clinique : Pourquoi prescrire ?

UI :
Santé : □ Augmenter le niveau global d'activité physique ; □ Réduire la sédentarité ; □ Améliorer le contrôle d'une maladie chronique.
Condition physique : □ Améliorer la condition physique ; □ Améliorer les capacités cardiorespiratoires ; □ Renforcer la force musculaire ; □ Améliorer l'équilibre / prévenir les chutes.
Fonction : □ Préserver ou restaurer l'autonomie ; □ Réduire une limitation fonctionnelle.
Qualité de vie : □ Améliorer la qualité de vie ; □ Améliorer le bien-être psychologique.
Autre : □ Autre + champ libre.

Validation :

* sélection multiple autorisée ;
* aucun objectif principal obligatoire ;
* organisation HAS retenue (Option B).

Source de vérité :
PrescriptionModel :
objectifsTherapeutiques[] ;
objectifAutre.

PrescriptionSync :
UI ↔ PrescriptionModel uniquement ; aucun calcul ; aucune déduction ; aucun moteur.

Renderer :
CRC = Oui ; DPI = Oui ; Ordonnance AP = Oui ; Ordonnance APA = Oui.

Cognitive Layer :
Objectifs ↔ Prescription ;
Objectifs ↔ Orientation.

Exemples :
IF objectif = équilibre/prévention chute AND absence travail équilibre THEN afficher "Point à considérer".
IF objectif = limitation fonctionnelle AND orientation = en autonomie THEN afficher "Point à considérer".

Impact architecture :
Faible ; ajout UI + Model + Renderer ; aucun impact moteur HAS ; aucun impact pipeline clinique.

Risque de régression :
Très faible.

====================================================================
7B PRÉCAUTIONS / LIMITATIONS
============================

Question clinique : Quelles contraintes doivent être prises en compte pour pratiquer l'activité physique ?

Principe :
Bloc 3 = état médical.
Bloc 7B = conséquences pratiques pour l'activité physique.

7B1 Précautions générales :

□ Cardio-vasculaires ; □ Respiratoires ; □ Métaboliques ; □ Neurologiques ; □ Psychiques / cognitives ; □ Risque de chute ; □ Digestives ; □ Cutanées / infectieuses ; □ Autres ; □ Aucune.

Décisions :
Q1 = Oui → conservation Digestives + Cutanées/Infectieuses.

Source de vérité :
precautionsGenerales[].

Restitution :
CRC = Oui ; DPI = Oui ; Ordonnance APA = Oui ; Ordonnance AP simple = optionnel.

7B2 Limitations locomotrices :

Réutilisation maximale du schéma corporel PAP.

Zones :
Cervical ; Dorsal ; Lombaire ; Epaule D/G ; Coude D/G ; Main-poignet D/G ; Bassin ; Hanche D/G ; Genou D/G ; Cheville D/G ; Pied D/G.

Décisions :
Option A retenue = localisation seule.
Refus de : mineur/modéré/important.
Précisions éventuelles dans 7D.

Source de vérité :
zonesLimitation[].

Restitution :
CRC = Oui ; DPI = Oui ; Ordonnance APA = Oui.

Décision :
Pas de sous-bloc 7B3 (aide technique, orthèse, oxygène) ; futur Bloc 4 ; éviter doublons.

Cognitive Layer :
Précautions ↔ Prescription ;
Précautions ↔ Orientation.

Exemples :
IF risque chute AND absence travail équilibre THEN afficher "Point à considérer".
IF risque chute AND orientation = en autonomie THEN afficher "Point à considérer".

Impact architecture :
Faible ; ajout UI + Model + Renderer ; aucun impact moteur HAS.

Risque de régression :
Très faible.

====================================================================
7D RECOMMANDATIONS
==================

Question clinique : Quelles consignes transmettre ?

Architecture :
7D1 Recommandations contextuelles ;
7D2 Recommandations libres.

---

## 7D1 RECOMMANDATIONS CONTEXTUELLES

Source :
Bloc 3 → Pathologies sélectionnées → Fiches pathologies PAP.

Exemples :
HTA ; Coronaropathie ; Insuffisance cardiaque ; Diabète ; etc.

Principe :
Calculées ; affichées ; non stockées.

Décision :
Ne PAS créer recommandationsContextuelles dans le modèle.

UI :
☑ Tout sélectionner ;
☑ Tout désélectionner ;
☑ Désélection individuelle.

Décisions :
Précochées par défaut ;
désélection individuelle autorisée.

Restitution :
CRC = Oui ; DPI = Oui ; Ordonnance APA = Oui ; Ordonnance AP = optionnel.

Cognitive Layer :
Réutilisation du système existant.

---

## 7D2 RECOMMANDATIONS LIBRES

Source de vérité :
PrescriptionModel :
recommandationsLibres.

UI :
Zone texte libre unique.

Décisions :
Q2 = une seule zone libre ; refus de sous-catégories.

Restitution :
CRC = Oui ; DPI = Oui ; Ordonnance APA = Oui ; Ordonnance AP = optionnel.

Cognitive Layer :
Aucun.

Impact architecture :
Très faible ; ajout d'un champ libre ; réutilisation maximale des fiches pathologies existantes.

Risque de régression :
Très faible.

====================================================================
7E ORIENTATION AP
=================

Question clinique :
Avec quel niveau d'encadrement le patient va-t-il mettre en œuvre sa prescription d'activité physique ?

Principe :
7E ≠ Investigations complémentaires.
Avis cardio ; avis pneumo ; avis MPR ; biologie ; EE = Bloc 6.

7E = Mise en œuvre de l'activité physique.

UI :

Repères HAS (non saisissables ; non stockés ; non exportés ; non imprimés) :

Un encadrement spécifique peut notamment être discuté en présence de :

* risque de chute ;
* trouble de l'équilibre ;
* faiblesse musculaire importante ;
* limitation articulaire importante ;
* aide technique ;
* trouble cognitif ;
* handicap ;
* perte d'autonomie.

Orientation retenue :

□ Kinésithérapeute ;
□ Ergothérapeute ;
□ Psychomotricien ;
□ Enseignant APA ;
□ Maison Sport Santé ;
□ Association sport-santé ;
□ Educateur sportif ;
□ En autonomie ;
□ Autre.

Décisions :
Maison Sport Santé ≠ Association sport-santé → conservées séparément.
Pas de case "Aucun".
"En autonomie" retenu à la place de "Activité autonome".

Source de vérité :
orientationsAP[] ;
orientationAutre.

Restitution :
CRC = Oui ; DPI = Oui ; Ordonnance APA = Oui ; Ordonnance AP = Oui.

Cognitive Layer :
Objectifs ↔ Orientation ;
Précautions ↔ Orientation.

Exemples :
IF limitation fonctionnelle AND en autonomie THEN afficher "Point à considérer".
IF risque chute AND en autonomie THEN afficher "Point à considérer".

Impact architecture :
Faible ; ajout UI + Model + Renderer ; aucun impact moteur HAS.

Risque de régression :
Très faible.

====================================================================
DONNÉES STOCKÉES
================

PrescriptionModel :

7A :

* objectifsTherapeutiques[] ;
* objectifAutre.

7B :

* precautionsGenerales[] ;
* zonesLimitation[].

7D :

* recommandationsLibres.

7E :

* orientationsAP[] ;
* orientationAutre.

NB : AUDIT DU MODÈLE EXISTANT

DEFAULT_PRESCRIPTION_MODEL identifié.
Champs existants :
✓ activites[]
✓ objectifs[]
✓ recommandations[]
✓ limitations[]
✓ orientationAPA

Audit d'utilisation :
✓ activites[] : utilisé
⚠ objectifs[] : déclaré mais non utilisé
⚠ recommandations[] : déclaré mais non utilisé
⚠ limitations[] : déclaré mais non utilisé
⚠ orientationAPA : déclaré mais non utilisé

Conséquence :
Sprint 1 privilégie la réutilisation des conteneurs existants du modèle avant toute création de nouveaux champs.

====================================================================
DONNÉES CALCULÉES / NON STOCKÉES
================================

7D1 Recommandations contextuelles :
Pathologies → Fiches pathologies → Affichage.

Repères HAS Orientation :
Affichage uniquement.

Cognitive Layer :
Affichage uniquement.

Messages "Point à considérer" :
Affichage uniquement.

Aucune persistance.
Aucune exportation.
Aucune impression.

====================================================================
COGNITIVE LAYER V1
==================

Familles validées :

1. Objectifs ↔ Prescription ;
2. Objectifs ↔ Orientation ;
3. Précautions ↔ Prescription ;
4. Précautions ↔ Orientation ;
5. Aide HAS ↔ Décisions médicales ;
6. Pathologies ↔ Recommandations.

Familles différées (après Bloc 4) :

7. Condition physique ↔ Prescription ;
8. Condition physique ↔ Orientation.

Règles :

Afficher :

* "Point à considérer" ;
* "Repère HAS".

Ne jamais afficher :

* "Erreur" ;
* "Prescription impossible" ;
* "Vous devez" ;
* "Orientation obligatoire".

IF suggestion HAS présente AND décision correspondante absente THEN afficher rappel cognitif.
IF décision médecin plus prudente que suggestion HAS THEN aucun message.

====================================================================
IMPACT ARCHITECTURE
===================

Sprint 1 :
Ajout de données métier ; réutilisation maximale des pipelines existants ; aucun impact moteur HAS ; aucun impact calculs ; aucun impact pipeline clinique ; aucun impact sur future Phase 2.

Contrainte Phase 2 future :

* découplage render/update/init ;
* renderActiveMode modulaire ;
* séparation init/refresh ;
* audit reset.js ;
* optimisation rerenders.

Règle :
Sprint 1 ne doit pas augmenter le couplage afin de faciliter la future Phase 2.

NB : Découverte architecture :
buildClinicalModel()
↓
alimente prescriptionModel

prescriptionModel
↓
alimente les renderers documentaires

Le pattern d'implémentation existant repose déjà sur :
UI
↓
Lecture DOM
↓
prescriptionModel
↓
Renderer
Sprint 1 doit suivre ce pattern existant.

====================================================================
STATUT
======

7A Objectifs thérapeutiques : VALIDÉ.
7B Précautions / limitations : VALIDÉ.
7C Prescription AP : EXISTANT.
7D Recommandations : VALIDÉ.
7E Orientation AP : VALIDÉ.

Cartographie Sprint 1 : VALIDÉE.
Contrat de gel : RESPECTÉ.
Prochaine étape : proposition minimale de modification avant tout codage.

Audit du modèle : VALIDÉ.

Source de vérité identifiée :
core/prescriptionModel.js

Pipeline identifié :
buildClinicalModel()
↓
prescriptionModel
↓
Renderer
↓
Documents

Risque architecture Sprint 1 : FAIBLE.

# IMPACT PHASE 2 IDENTIFIÉ

L’analyse architecture post-audit confirme que Sprint 1 reste compatible avec la future PHASE 2 architecture.

Découvertes majeures :

* renderActiveMode() identifié comme orchestrateur documentaire ;
* renderers spécialisés déjà présents ;
* architecture multi-sorties déjà émergente ;
* PATHO_DATA identifié comme knowledge layer implicite ;
* buildPrescription() identifié comme moteur hybride ;
* buildCRCPathoBloc() identifié comme moteur hybride.

Conséquence :

La PHASE 2 ne nécessitera PAS une réécriture Sprint 1 mais une orchestration contextuelle progressive.

Aucun refactoring renderer massif n’est requis pour Sprint 1.

Aucune rupture pipeline clinique n’est requise.

computeClinicalContext() est désormais prévu comme future couche d’orchestration contextuelle située entre :

buildClinicalModel()
↓
renderers spécialisés
