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

```text
==================================================
AUDIT MOTEUR CLINIQUE TRANSVERSAL — V1
==================================================

FUNCTION : buildPrescription()

buildPrescription() = fonction hybride majeure ; point de convergence historique entre ancien moteur prescription et nouveau moteur prescriptionModel ; mélange logique métier, lecture DOM, rendu linguistique, CRC et agrégation documentaire ; forte candidate “god function” ; priorité élevée audit/refactor futur.

ROLE :
Construit le texte final de prescription d’activité physique ; gère ordonnance ; orientation ; supervision ; CRC ; documents remis ; génération documentaire finale.

INPUTS :
- model
- model.context
- model.prescription
- prescriptionModel
- DOM crc_mode
- DOM output_type
- DOM pathologies cochées
- CRC selections
- PATHO_DATA

STATE LU :
- prescriptionModel
- model
- PATHO_DATA
- DOM actif

STATE MODIFIÉ :
- aucun direct
- dépend fortement état UI live

OUTPUTS :
- texte prescription final

EFFETS DE BORD IDENTIFIÉS :
- lecture directe DOM ;
- dépendance structure HTML active ;
- dépendance cases cochées live ;
- dépendance ordre UI ;
- dépendance coexistence anciens/nouveaux modèles.

DÉPENDANCES :
- generatePrescriptionCRC()
- getSelectedCRC()
- PATHO_DATA

SOUS-BLOCS IDENTIFIÉS :
- ancien moteur aérobie ;
- ancien moteur renforcement ;
- ancien moteur souplesse ;
- documents remis ;
- CRC ;
- logique patient/médecin ;
- logique pluriel/syntaxe ;
- agrégation documentaire finale ;
- redirection vers generatePrescriptionCRC().

POINTS IDENTIFIÉS :
- coexistence ancien moteur prescription + nouveau prescriptionModel ;
- lecture directe DOM ;
- dépendance UI live ;
- logique CRC intégrée ;
- logique patient/médecin intégrée ;
- gestion linguistique/pluriels ;
- agrégation documentaire ;
- dépendances cachées ;
- couplage fort rendu/logique métier ;
- fonction de transition legacy ;
- logique documentaire et logique clinique mélangées.

TYPE :
HYBRIDE MAJEUR

RISQUES :
- fonction “god object” ;
- duplication future ;
- ajout futur moteurs médicaments/recommandations/orientation directement dans cette fonction ;
- dette technique cumulative ;
- difficilement testable ;
- difficilement réutilisable ;
- couplage UI / métier / rendu ;
- maintenance complexe.

DESTINATION FUTURE ENVISAGÉE :
- computePrescriptionContext()
- computeCRCContext()
- renderPrescription()
- séparation RULES / RENDERER / DOM
- suppression lecture DOM directe
- migration complète vers modèle structuré unique.

NIVEAU PRIORITÉ AUDIT / REFACTOR :
ÉLEVÉ
```

````text id="v4n8ka"
FUNCTION : buildCRCPathoBloc()

buildCRCPathoBloc() = moteur documentaire transversal CRC/pathologies ; fonction hybride majeure assurant sélection CRC, regroupement pathologies, structuration texte, adaptation contextuelle multi-modes et rendu documentaire ; future candidate noyau moteur recommandations/précautions/adaptations/vigilance ; priorité très élevée audit architecture.

ROLE :
Construit les blocs CRC/documentaires liés aux pathologies ; sélectionne les éléments CRC ; regroupe les contenus par pathologie ; adapte les formulations selon le contexte documentaire ; produit les textes finaux multi-modes (patient, ordonnance, courrier, paragraphe, médical).

INPUTS :
- mode
- DOM .patho:checked
- DOM crcContainer_${pathologie}
- DOM crc_detail_${pathologie}
- DOM .crc-item:checked
- PATHO_DATA

STATE LU :
- PATHO_DATA
- DOM actif
- sélection pathologies
- sélection CRC
- modes détail/simple

STATE MODIFIÉ :
- aucun direct
- dépend fortement état UI live

OUTPUTS :
- texte/document HTML CRC contextualisé
- contenu ordonnance
- contenu patient
- contenu médical
- contenu courrier

EFFETS DE BORD IDENTIFIÉS :
- lecture DOM directe ;
- dépendance forte structure HTML ;
- dépendance UI active ;
- dépendance checkbox live ;
- dépendance conventions PATHO_DATA ;
- dépendance nomenclature modes.

DÉPENDANCES :
- PATHO_DATA
- structure crcContainer_
- structure crc_detail_
- structure .crc-item

SOUS-BLOCS IDENTIFIÉS :
- récupération pathologies cochées ;
- récupération mode détail/simple ;
- récupération CRC détaillés ;
- fallback CRC PATHO_DATA ;
- génération labels courts/longs ;
- regroupement pathologies ;
- déduplication ;
- logique pluriel/singulier ;
- adaptation patient ;
- adaptation ordonnance ;
- adaptation courrier ;
- adaptation paragraphe ;
- adaptation dossier médical ;
- rendu HTML ordonnance ;
- rendu texte brut autres modes.

POINTS IDENTIFIÉS :
- fonction centrale logique CRC ;
- moteur documentaire transversal implicite ;
- logique métier + rendu + lecture DOM mélangées ;
- modes documentaires multiples dans une seule fonction ;
- logique sémantique encore fusionnée dans items[] ;
- recommandations/précautions/adaptations/vigilance non séparées ;
- forte dépendance PATHO_DATA ;
- adaptation contextuelle directement intégrée ;
- mélange structure données + rendu linguistique ;
- logique future moteur clinique déjà présente implicitement ;
- fonction déjà utilisée comme pseudo-moteur transversal documentaire.

TYPE :
HYBRIDE MAJEUR

RISQUES :
- future “god function” majeure ;
- accumulation future recommandations/précautions/vigilance ;
- duplication future dans orientation/médicaments ;
- difficulté maintenance ;
- difficulté extension ;
- couplage fort UI/rendu/logique clinique ;
- difficulté internationalisation ;
- logique métier non normalisée ;
- évolution complexe vers moteur transversal ;
- risque augmentation dette technique si ajout règles directement dans items[] ;
- risque duplication renderers spécialisés.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement le futur noyau du moteur clinique transversal PAP ; elle contient déjà implicitement :
- recommandations ;
- éducation thérapeutique ;
- adaptations ;
- vigilance ;
- contextualisation documentaire ;
- logique patient/médecin ;
- logique multi-renderers.

LIMITATION ARCHITECTURE ACTUELLE :
Le modèle actuel :
```javascript
items[]
````

fusionne plusieurs catégories sémantiques différentes :

* recommandations ;
* précautions ;
* adaptations ;
* vigilance ;
* supervision ;
* éducation thérapeutique.

ÉVOLUTION CIBLE FUTURE :
Migration progressive vers structure normalisée :

```javascript
{
  recommandations: [],
  precautions: [],
  adaptations: [],
  vigilance: [],
  education: [],
  supervision: []
}
```

ARCHITECTURE CIBLE FUTURE :

```text
INPUTS CLINIQUES
↓
computeClinicalContext()
↓
computeCRCContext()
↓
OUTPUTS STRUCTURÉS
↓
RENDERERS SPÉCIFIQUES
```

DESTINATION FUTURE ENVISAGÉE :

* computeClinicalContext()
* computeCRCContext()
* renderCRC()
* renderPatientCRC()
* renderMedicalCRC()
* suppression lecture DOM directe ;
* séparation RULES / STATE / RENDERERS ;
* compatibilité moteur médicaments ;
* compatibilité moteur orientation ;
* compatibilité moteur limitations locomotrices ;
* compatibilité moteur supervision HAS ;
* compatibilité future logique vigilance/précautions/adaptations.

NIVEAU PRIORITÉ AUDIT / REFACTOR :
TRÈS ÉLEVÉ

```
```

````text
FUNCTION : buildClinicalModel()

buildClinicalModel() = fonction centrale de construction du state clinique PAP ; point de convergence majeur entre UI, logique métier, prescription structurée, orientation APA, limitations, objectifs, activités physiques et génération documentaire ; future candidate noyau STATE du moteur clinique transversal ; priorité critique audit architecture.

ROLE :
Construit le modèle clinique complet utilisé par les renderers et moteurs documentaires ; collecte les données UI ; initialise prescriptionModel ; transforme les données DOM en structure clinique ; centralise les activités AP ; construit orientation APA ; alimente recommandations/adaptations ; retourne le modèle clinique global final.

INPUTS :
- DOM complet consultation
- champs aérobie
- champs renforcement
- champs souplesse
- champs équilibre
- objectifs AP
- limitations
- précautions
- orientation APA
- consentement partage
- bilan souhaité
- PATHO_DATA
- CRC indirect
- therapeutic_plan
- motivation
- évaluation
- décision

STATE LU :
- DOM actif
- prescriptionModel
- PATHO_DATA
- checkbox pathologies
- checkbox limitations
- checkbox précautions
- checkbox orientation
- champs activités physiques
- champs motivation
- champs décision
- champs évaluation
- champs patient

STATE MODIFIÉ :
- prescriptionModel.activites
- prescriptionModel.objectifs
- prescriptionModel.limitations
- prescriptionModel.recommandations
- prescriptionModel.orientationAPA
- prescriptionModel.duree_prescription

EFFETS DE BORD IDENTIFIÉS :
- reset direct prescriptionModel ;
- mutation globale prescriptionModel ;
- dépendance massive DOM live ;
- dépendance structure HTML ;
- dépendance conventions PATHO_DATA ;
- dépendance UI active ;
- appels markPrescriptionDirty() ;
- mélange collecte données + logique métier + structuration state.

OUTPUTS :
- modèle clinique complet
- meta
- patient
- evaluation
- motivation
- therapeutic_plan
- prescription
- decision
- prescriptionModel enrichi indirectement

DÉPENDANCES :
- PATHO_DATA
- prescriptionModel global
- markPrescriptionDirty()
- getStadeMotivation()
- conventions DOM/UI
- conventions noms inputs HTML

SOUS-BLOCS IDENTIFIÉS :
- initialisation prescriptionModel ;
- récupération données aérobie ;
- récupération données endurance/pas ;
- récupération renforcement ;
- récupération souplesse ;
- récupération équilibre ;
- récupération objectifs ;
- récupération limitations ;
- récupération précautions ;
- récupération orientation APA ;
- récupération consentement partage ;
- récupération bilan souhaité ;
- récupération recommandations/adaptations pathologies ;
- récupération motivation ;
- récupération évaluation ;
- récupération décision ;
- construction therapeutic_plan ;
- construction patient ;
- construction evaluation ;
- construction prescription legacy ;
- construction activités structurées modernes.

POINTS IDENTIFIÉS :
- coexistence ancien modèle prescription + nouveau prescriptionModel ;
- mutation globale prescriptionModel ;
- logique métier directement dans constructeur state ;
- lecture DOM massive ;
- dépendance UI très forte ;
- mélange STATE + RULES + UI ;
- logique recommandations déjà intégrée ;
- logique orientation déjà intégrée ;
- logique limitations déjà intégrée ;
- logique activités AP déjà intégrée ;
- logique supervision implicite déjà présente ;
- double architecture legacy/moderne ;
- buildClinicalModel() agit déjà comme pseudo moteur clinique transversal.

TYPE :
HYBRIDE CRITIQUE (STATE + RULES + UI)

RISQUES :
- “god function” critique ;
- accumulation future moteurs ;
- dette technique élevée ;
- dépendance globale prescriptionModel ;
- propagation bugs difficile ;
- difficulté test unitaire ;
- difficulté découplage ;
- difficulté maintenance ;
- couplage très fort DOM/STATE ;
- duplication future logique clinique ;
- risque incohérences legacy/moderne ;
- risque dépendances cachées ;
- difficulté évolution moteur clinique transversal.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement le futur cœur STATE du moteur clinique transversal PAP ; elle centralise déjà implicitement :
- activités physiques ;
- limitations ;
- recommandations ;
- adaptations ;
- objectifs ;
- orientation ;
- supervision ;
- motivation ;
- décision ;
- therapeutic_plan.

LIMITATION ARCHITECTURE ACTUELLE :
Le modèle actuel mélange :
- collecte UI ;
- mutation state ;
- règles métier ;
- structuration clinique ;
- normalisation données ;
- logique recommandations ;
- logique orientation ;
- logique supervision ;
- logique documentaire implicite.

ARCHITECTURE IMPLICITE ACTUELLE :
```text
DOM/UI
↓
buildClinicalModel()
↓
prescriptionModel global mutable
↓
renderers
````

ARCHITECTURE CIBLE FUTURE :

```text
DOM/UI
↓
extractFormState()
↓
normalizeClinicalState()
↓
computeClinicalContext()
↓
OUTPUTS STRUCTURÉS
↓
RENDERERS
```

ÉVOLUTION CIBLE FUTURE :

* suppression lecture DOM directe dans logique clinique ;
* séparation extraction UI / normalisation / règles métier ;
* suppression mutation globale implicite ;
* séparation STATE / RULES / RENDERERS ;
* migration complète vers modèle structuré unique ;
* compatibilité moteur médicaments ;
* compatibilité moteur orientation ;
* compatibilité moteur limitations locomotrices ;
* compatibilité moteur vigilance/précautions/adaptations ;
* compatibilité moteur supervision HAS.

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE

```
```

````text id="f2q9mv"
FUNCTION : initUI()

initUI() = fonction centrale d’initialisation UI PAP ; point de convergence majeur des comportements dynamiques interface ; initialise modules cliniques ; configure listeners ; configure affichages conditionnels ; gère toggles ; initialise moteurs UI ; future candidate “god function” UI ; priorité élevée audit architecture.

ROLE :
Initialise le comportement dynamique global de l’interface consultation ; configure modules UI ; initialise listeners ; initialise sous-groupes ; initialise toggles ; configure comportements conditionnels ; relie plusieurs moteurs UI et logiques cliniques.

INPUTS :
- DOM complet consultation
- orientation_ap_toggle
- orientation_ap
- consentement_partage_block
- bilan_condition_block
- subgroup containers
- pathologies
- modules UI divers

STATE LU :
- DOM actif
- état checkboxes
- état orientation APA
- état sous-groupes
- état pathologies

STATE MODIFIÉ :
- affichage sous-groupes ;
- affichage orientation APA ;
- affichage consentement partage ;
- affichage bilan souhaité ;
- classes CSS hidden ;
- listeners DOM ;
- état visuel interface.

EFFETS DE BORD IDENTIFIÉS :
- ajout listeners dynamiques ;
- mutation DOM directe ;
- dépendance massive structure HTML ;
- dépendance IDs HTML ;
- dépendance noms inputs ;
- dépendance moteurs init externes ;
- dépendance ordre chargement UI ;
- logique UI dispersée ;
- logique conditionnelle directement dans initUI().

OUTPUTS :
- interface interactive initialisée
- listeners actifs
- sous-groupes configurés
- toggles configurés
- moteurs UI activés

DÉPENDANCES :
- initIMC()
- initAge()
- initGrossesse()
- initSymptomes()
- initRespiratoire()
- initHandicap()
- initActivitePhysique()
- initCRCModeToggle()
- initAerobieMode()
- initObjectifAutre()
- initPrecautionsAucune()
- updateOrientationHelp()
- toggleSubgroup()
- updateNiveauButtons()
- updatePathoHelp()

SOUS-BLOCS IDENTIFIÉS :
- initialisation modules UI ;
- initialisation moteurs UI ;
- initialisation CRC ;
- initialisation activité physique ;
- initialisation orientation APA ;
- gestion affichage sous-groupes ;
- gestion listeners orientation ;
- gestion consentement partage ;
- gestion bilan souhaité ;
- gestion classes hidden ;
- gestion pathologies ;
- gestion aide orientation.

POINTS IDENTIFIÉS :
- énorme point de convergence UI ;
- forte centralisation listeners ;
- logique conditionnelle directement dans initUI ;
- dépendance structure DOM très forte ;
- mélange initialisation modules + logique métier UI ;
- logique orientation APA intégrée ;
- logique consentement intégrée ;
- logique bilan intégrée ;
- logique affichage conditionnel intégrée ;
- couplage fort UI/HTML ;
- absence séparation orchestrateur/comportements ;
- logique dynamique distribuée entre initUI() et autres fonctions.

TYPE :
HYBRIDE UI MAJEUR

RISQUES :
- future “god function” UI ;
- accumulation futurs listeners ;
- duplication logique affichage ;
- dépendances cachées ;
- difficulté maintenance ;
- difficulté debugging ;
- couplage fort structure HTML ;
- propagation bugs UI ;
- listeners multiples ;
- dette UI cumulative ;
- difficulté modularisation future ;
- dépendance ordre exécution.

POINT STRATÉGIQUE MAJEUR :
Cette fonction agit déjà comme orchestrateur UI central PAP ; elle contrôle implicitement :
- affichage dynamique ;
- comportement orientation ;
- comportement supervision ;
- comportements conditionnels ;
- comportement CRC ;
- visibilité blocs sécurité ;
- interaction moteurs UI.

LIMITATION ARCHITECTURE ACTUELLE :
Le modèle actuel mélange :
- orchestration UI ;
- logique conditionnelle ;
- gestion listeners ;
- affichage dynamique ;
- logique orientation ;
- logique supervision ;
- règles métier UI ;
- comportement modules.

ARCHITECTURE IMPLICITE ACTUELLE :
```text
initUI()
↓
initialise modules
↓
attache listeners
↓
modifie DOM directement
↓
déclenche logique UI conditionnelle
````

ARCHITECTURE CIBLE FUTURE :

```text id="h7v3ke"
initUI()
↓
registerUIModules()
↓
registerListeners()
↓
UIControllers spécialisés
↓
state-driven rendering
```

ÉVOLUTION CIBLE FUTURE :

* séparation orchestration UI / logique métier ;
* séparation listeners spécialisés ;
* suppression logique métier dans initUI ;
* création modules UI indépendants ;
* centralisation state UI ;
* compatibilité moteur clinique transversal ;
* compatibilité architecture modulaire ;
* compatibilité tests UI futurs ;
* réduction dépendances DOM directes.

NIVEAU PRIORITÉ AUDIT / REFACTOR :
ÉLEVÉ

```
```

````text id="k7p4mv"
FUNCTION : renderActiveMode()

renderActiveMode() = orchestrateur principal du pipeline documentaire PAP ; point de convergence critique entre clinicalModel, renderers spécialisés, output UI, export texte, édition documentaire et modes documentaires ; future candidate chef d’orchestre rendering transversal ; priorité critique audit architecture.

ROLE :
Détermine le mode documentaire actif ; appelle le renderer correspondant ; injecte le rendu HTML ; génère la version texte ; synchronise preview/UI ; gère visibilité PDF ; gère édition documentaire ; centralise le pipeline final rendu consultation.

INPUTS :
- activeMode
- clinicalModel
- prescriptionModel
- renderedOutput
- outputContainer
- finalTextContainer
- finalTextOutput
- downloadPdf
- options.scroll

STATE LU :
- clinicalModel
- activeMode
- prescriptionModel
- renderedOutput
- DOM output
- état édition

STATE MODIFIÉ :
- outputContainer.innerHTML
- renderedOutput.html
- renderedOutput.text
- renderedOutput.edited
- visibilité PDF
- visibilité édition texte
- opacity/fade UI
- scroll UI
- isEditingOutput
- savedScrollPosition

EFFETS DE BORD IDENTIFIÉS :
- mutation DOM directe ;
- mutation globale renderedOutput ;
- mutation globale état édition ;
- dépendance massive renderers ;
- dépendance activeMode ;
- dépendance clinicalModel global ;
- dépendance prescriptionModel global ;
- logique export texte intégrée ;
- logique ordonnance spéciale intégrée ;
- logique UI fade intégrée ;
- logique PDF intégrée.

OUTPUTS :
- rendu HTML final ;
- rendu texte final ;
- preview consultation ;
- export texte ;
- ordonnance ;
- courrier ;
- dossier ;
- version patient.

DÉPENDANCES :
- renderLongLetterV2()
- renderParagraphVersion()
- renderMedicalRecord()
- renderPatientVersion()
- renderOrdonnanceAP()
- generatePrescriptionDPI()
- clinicalModel global
- prescriptionModel global
- renderedOutput global

SOUS-BLOCS IDENTIFIÉS :
- sélection renderer ;
- orchestration rendering ;
- injection HTML ;
- gestion fade animation ;
- gestion visibilité PDF ;
- gestion mode ordonnance ;
- extraction texte brut ;
- synchronisation textarea ;
- reset édition ;
- gestion scroll ;
- synchronisation preview.

POINTS IDENTIFIÉS :
- chef d’orchestre documentaire principal ;
- centralisation pipeline rendering ;
- logique rendering + UI + export fusionnées ;
- dépendance massive globals ;
- mode ordonnance spécial-case ;
- logique texte brut intégrée ;
- logique preview intégrée ;
- logique export intégrée ;
- logique UI intégrée ;
- renderers spécialisés bien identifiés ;
- début architecture renderer-based déjà présent ;
- clinicalModel utilisé comme state documentaire principal.

TYPE :
ORCHESTRATEUR DOCUMENTAIRE CRITIQUE

RISQUES :
- future “god orchestrator” ;
- accumulation nouveaux modes ;
- accumulation logique export ;
- accumulation logique UI ;
- accumulation exceptions documentaires ;
- dépendance globals élevée ;
- couplage rendering/UI/export ;
- difficulté modularisation ;
- difficulté tests unitaires ;
- propagation bugs rendering ;
- duplication future renderers ;
- difficulté pipeline multi-format.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente déjà le pipeline documentaire central PAP :
- sélection mode ;
- rendering ;
- preview ;
- export ;
- synchronisation texte ;
- édition ;
- UI documentaire.

ARCHITECTURE IMPLICITE ACTUELLE :
```text
clinicalModel global
↓
renderActiveMode()
↓
renderer spécialisé
↓
HTML final
↓
texte brut
↓
preview/export/UI
````

LIMITATION ARCHITECTURE ACTUELLE :
Le modèle actuel fusionne :

* orchestration ;
* rendering ;
* export ;
* synchronisation texte ;
* UI ;
* animation ;
* édition ;
* logique ordonnance spécifique.

POINT POSITIF MAJEUR :
Architecture renderer-based déjà identifiable :

* renderLongLetterV2()
* renderParagraphVersion()
* renderMedicalRecord()
* renderPatientVersion()
* renderOrdonnanceAP()

=> excellent point d’appui futur découplage.

ARCHITECTURE CIBLE FUTURE :

```text id="n9v4qs"
clinicalState
↓
documentPipeline()
↓
rendererRegistry
↓
renderer spécialisé
↓
HTML/TEXT/PDF outputs
↓
UI adapters
```

ÉVOLUTION CIBLE FUTURE :

* séparation orchestration / rendering / export ;
* suppression globals implicites ;
* renderer registry ;
* normalisation outputs ;
* séparation preview/UI ;
* séparation extraction texte ;
* suppression special-cases ordonnance ;
* compatibilité multi-formats ;
* compatibilité export structuré ;
* compatibilité moteur clinique transversal.

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE

```
```

````text id="v8q3ms"
FUNCTION : generatePrescriptionCRC()

generatePrescriptionCRC() = nouveau moteur moderne de génération prescription AP structurée ; transforme prescriptionModel en texte clinique final ; centralise activités physiques structurées, supervision/orientation APA, consentement, bilan souhaité et rendu linguistique ; futur noyau moteur prescription clinique PAP ; priorité critique audit architecture. :contentReference[oaicite:0]{index=0}

ROLE :
Transforme prescriptionModel structuré en prescription textuelle finale ; génère formulation AP ; agrège activités ; construit logique supervision/orientation ; génère texte ordonnance/document clinique ; adapte formulation selon catégories AP ; centralise rendu linguistique prescription moderne.

INPUTS :
- prescriptionModel
- model.activites
- orientationAPA
- formatDuree()
- formatFrequence()
- validatePrescriptionModel()

STATE LU :
- prescriptionModel global
- model.activites
- orientationAPA.active
- orientationAPA.orientations
- orientationAPA.bilanSouhaite
- orientationAPA.consentementPartage
- orientationAPA.commentaire

STATE MODIFIÉ :
- aucun direct ;
- génération pure texte final.

EFFETS DE BORD IDENTIFIÉS :
- dépendance prescriptionModel global ;
- dépendance formatters ;
- dépendance conventions activites[] ;
- dépendance catégories AP ;
- dépendance mapping supervision ;
- dépendance structure orientationAPA ;
- logique linguistique directement intégrée.

OUTPUTS :
- texte prescription final ;
- formulation ordonnance ;
- formulation supervision ;
- formulation consentement ;
- formulation bilan souhaité ;
- formulation activités AP.

DÉPENDANCES :
- validatePrescriptionModel()
- formatDuree()
- formatFrequence()
- prescriptionModel global
- structure activites[]
- structure orientationAPA

SOUS-BLOCS IDENTIFIÉS :
- validation modèle ;
- validation activités ;
- génération endurance ;
- génération pas/jour ;
- génération renforcement ;
- génération souplesse ;
- génération équilibre ;
- gestion intensité ;
- gestion durée ;
- gestion fréquence ;
- agrégation activités ;
- logique liste linguistique ;
- mapping supervision/orientation ;
- logique encadrement ;
- logique consentement ;
- logique bilan souhaité ;
- logique commentaire libre ;
- génération texte final.

POINTS IDENTIFIÉS :
- véritable nouveau moteur prescription moderne ;
- prescription structurée déjà présente ;
- modèle activités normalisé ;
- supervision déjà structurée ;
- logique HAS supervision implicite ;
- logique orientation intégrée ;
- logique consentement intégrée ;
- logique bilan intégrée ;
- séparation catégories AP déjà bonne ;
- architecture prescription orientée données ;
- bien plus propre que legacy buildPrescription() ;
- début architecture moteur clinique moderne déjà visible ;
- logique renderer encore fusionnée avec moteur métier ;
- logique linguistique encore intégrée au moteur.

TYPE :
MOTEUR PRESCRIPTION MODERNE CRITIQUE

POINT POSITIF MAJEUR :
Le modèle moderne est déjà orienté structure clinique :
```javascript id="y7m2qp"
activites[] :
- categorie
- type
- intensite
- duree
- frequence
- mode
````

=> excellente base future moteur transversal.

AUTRE POINT POSITIF MAJEUR :
orientationAPA déjà structuré :

```javascript id="t6k9vs"
orientationAPA : {
  active,
  orientations,
  bilanSouhaite,
  consentementPartage,
  commentaire
}
```

=> architecture supervision déjà amorcée.

RISQUES :

* future “god engine” prescription ;
* accumulation future règles médicales ;
* accumulation adaptations/pathologies ;
* accumulation logique médicaments ;
* accumulation logique limitations ;
* accumulation logique vigilance ;
* logique linguistique fusionnée ;
* dépendance prescriptionModel global ;
* difficulté internationalisation ;
* difficulté multi-renderers ;
* difficulté maintenance future ;
* duplication possible avec buildPrescription legacy.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement le futur noyau prescription clinique PAP :

* activités physiques ;
* supervision ;
* orientation ;
* consentement ;
* bilan ;
* formulation clinique ;
* futur moteur adaptations ;
* futur moteur vigilance ;
* futur moteur médicaments.

LIMITATION ARCHITECTURE ACTUELLE :
Le moteur mélange encore :

* règles métier ;
* structuration clinique ;
* rendu linguistique ;
* formulations ;
* agrégation ;
* logique supervision ;
* logique documentaire.

ARCHITECTURE IMPLICITE ACTUELLE :

```text
prescriptionModel
↓
generatePrescriptionCRC()
↓
texte clinique final
```

ARCHITECTURE CIBLE FUTURE :

```text id="m2s8qa"
clinicalPrescriptionState
↓
computePrescriptionContext()
↓
prescriptionRulesEngine()
↓
structuredPrescriptionOutput
↓
renderPrescription()
```

ÉVOLUTION CIBLE FUTURE :

* séparation RULES / LANGUAGE ;
* séparation moteur clinique / renderer ;
* suppression dépendance globals ;
* compatibilité moteur médicaments ;
* compatibilité moteur limitations locomotrices ;
* compatibilité moteur vigilance ;
* compatibilité moteur supervision HAS ;
* compatibilité multi-renderers ;
* compatibilité export structuré ;
* compatibilité NLP/documentation future.

ÉVOLUTION STRUCTURELLE FUTURE ENVISAGÉE :

```javascript id="p8v4ks"
{
  activites: [],
  adaptations: [],
  limitations: [],
  precautions: [],
  vigilance: [],
  supervision: [],
  education: [],
  medicationsImpact: []
}
```

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE

```
```

````text id="s4m8qp"
FUNCTION : validatePrescriptionModel()

validatePrescriptionModel() = premier garde-fou structurel du moteur prescription moderne PAP ; fonction de validation minimale du state prescription ; embryon actuel validation engine ; priorité stratégique élevée pour futur moteur clinique transversal. :contentReference[oaicite:0]{index=0}

ROLE :
Vérifie la cohérence structurelle minimale du prescriptionModel avant génération documentaire ; contrôle existence structure attendue ; protège les renderers/moteurs contre modèles invalides ; agit comme premier niveau validation state.

INPUTS :
- model

STATE LU :
- model.objectifs
- model.activites
- model.messagesPatient
- model.ordonnanceType

STATE MODIFIÉ :
- aucun ;
- fonction pure.

EFFETS DE BORD IDENTIFIÉS :
- aucun effet DOM ;
- aucune mutation globale ;
- aucune dépendance UI ;
- validation synchrone simple.

OUTPUTS :
- true
- false

DÉPENDANCES :
- conventions prescriptionModel ;
- conventions ordonnanceType ;
- structure activités/objectifs/messagesPatient.

SOUS-BLOCS IDENTIFIÉS :
- validation existence objet ;
- validation type objet ;
- validation objectifs ;
- validation activités ;
- validation messages patient ;
- validation ordonnanceType ;
- validation cohérence structure minimale.

POINTS IDENTIFIÉS :
- fonction très propre ;
- validation pure ;
- aucun couplage DOM ;
- aucun couplage renderer ;
- aucun effet de bord ;
- excellent candidat futur validation layer ;
- premier vrai composant découplé identifié ;
- architecture déjà beaucoup plus saine que legacy ;
- validation structure déjà amorcée ;
- conventions modèle explicites ;
- prémices schema validation PAP.

TYPE :
VALIDATION ENGINE STRUCTUREL

POINT POSITIF MAJEUR :
Fonction déjà :
- pure ;
- testable ;
- découplée ;
- réutilisable ;
- indépendante UI ;
- indépendante rendering ;
- indépendante DOM.

=> excellent modèle architectural futur.

LIMITATION ACTUELLE :
Validation encore très minimale :
- pas validation clinique ;
- pas validation métier ;
- pas validation cohérence supervision ;
- pas validation compatibilité activités ;
- pas validation intensité ;
- pas validation fréquence ;
- pas validation orientation ;
- pas validation limitations ;
- pas validation sécurité clinique ;
- pas validation logique HAS.

RISQUES FUTURS :
- accumulation validations directement dans cette fonction ;
- dérive vers “god validator” ;
- duplication validations ailleurs ;
- mélange validation structure + validation clinique ;
- explosion IF/THEN future.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement :
```text id="r8k2mv"
le futur noyau validation du moteur clinique transversal
````

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="d3v9qs"
prescriptionModel
↓
validatePrescriptionModel()
↓
renderer/moteur prescription
```

ARCHITECTURE CIBLE FUTURE :

```text id="m9q4vs"
extractState()
↓
normalizeState()
↓
validateStructure()
↓
validateClinicalRules()
↓
computeClinicalContext()
↓
renderers
```

ÉVOLUTION CIBLE FUTURE :

* séparation validation structure / validation clinique ;
* compatibilité moteur médicaments ;
* compatibilité moteur supervision ;
* compatibilité moteur vigilance ;
* compatibilité moteur limitations locomotrices ;
* compatibilité moteur orientation HAS ;
* validation activités/frequences/intensités ;
* validation cohérence prescription ;
* validation sécurité clinique ;
* validation compatibilité outputs.

ÉVOLUTION STRUCTURELLE FUTURE ENVISAGÉE :

```javascript id="h2v7kp"
{
  structure: [],
  coherence: [],
  vigilance: [],
  incompatibilites: [],
  alertes: [],
  erreurs: []
}
```

NIVEAU PRIORITÉ AUDIT / REFACTOR :
ÉLEVÉ STRATÉGIQUE

```
```

````text id="r8m4qs"
FUNCTION : renderLongLetterV2()

renderLongLetterV2() = renderer documentaire principal courrier long PAP ; assembleur majeur de blocs cliniques, prescription, CRC, décision, traitements et évaluation ; cœur actuel génération courrier médical structuré ; point critique pipeline documentaire PAP ; priorité critique audit architecture.

ROLE :
Construit le courrier médical complet d’activité physique ; assemble les différents blocs documentaires ; adapte les salutations ; intègre prescription, CRC, traitements, décision et évaluation ; produit le HTML final courrier long.

INPUTS :
- model
- model.patient
- model.meta.destinataire
- model.patient.sexe
- DOM date_courrier
- buildEvaluationAP()
- buildMotivation()
- buildRCV()
- buildDecisionBloc()
- buildPrescription()
- buildCRCPathoBloc()
- buildAntecedentsBloc()
- buildTraitementsBloc()
- buildObjectivesBlock()

STATE LU :
- clinicalModel indirect
- DOM date courrier
- patient
- meta.destinataire
- sexe patient
- outputs autres moteurs/renderers

STATE MODIFIÉ :
- aucun direct ;
- génération HTML finale pure.

EFFETS DE BORD IDENTIFIÉS :
- lecture DOM directe ;
- dépendance massive sous-renderers ;
- dépendance pipeline documentaire ;
- dépendance HTML inline ;
- dépendance logique patient/médecin ;
- dépendance formatage courrier ;
- dépendance outputs blocs externes.

OUTPUTS :
- courrier HTML complet ;
- courrier confraternel ;
- rendu documentaire long ;
- pipeline courrier final.

DÉPENDANCES :
- buildEvaluationAP()
- buildMotivation()
- buildRCV()
- buildDecisionBloc()
- buildPrescription()
- buildCRCPathoBloc()
- buildAntecedentsBloc()
- buildTraitementsBloc()
- buildObjectivesBlock()

SOUS-BLOCS IDENTIFIÉS :
- génération date ;
- génération salutation ;
- génération titre patient ;
- intégration antécédents ;
- intégration traitements ;
- intégration évaluation ;
- intégration motivation ;
- intégration RCV ;
- intégration décision ;
- intégration objectifs ;
- intégration prescription ;
- intégration CRC ;
- conclusion courrier ;
- formule confraternelle.

POINTS IDENTIFIÉS :
- renderer courrier principal ;
- architecture assembleur déjà visible ;
- blocs cliniques relativement séparés ;
- forte dépendance sous-renderers ;
- logique courrier intégrée ;
- logique présentation HTML intégrée ;
- logique destinataire intégrée ;
- logique patient intégrée ;
- pipeline documentaire clairement identifiable ;
- architecture modulaire partiellement amorcée ;
- buildPrescription() et buildCRCPathoBloc() déjà centraux ;
- renderer beaucoup plus propre que moteurs legacy.

TYPE :
RENDERER DOCUMENTAIRE MAJEUR

POINT POSITIF MAJEUR :
Architecture assembleur déjà présente :
```text
renderLongLetterV2()
↓
assemble blocs spécialisés
↓
HTML final
````

=> excellente base future renderer architecture.

AUTRE POINT POSITIF :
Sous-blocs relativement bien séparés :

* évaluation ;
* motivation ;
* RCV ;
* décision ;
* prescription ;
* CRC ;
* traitements ;
* antécédents.

=> vraie modularité émergente.

RISQUES :

* accumulation future blocs ;
* accumulation logique HTML inline ;
* dépendance massive sous-renderers ;
* duplication future templates ;
* difficulté thèmes/templates futurs ;
* difficulté internationalisation ;
* logique présentation fusionnée ;
* dépendance DOM date ;
* couplage renderer/HTML.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente déjà :

```text id="s2v7kp"
le vrai pipeline assembleur documentaire PAP
```

Elle montre que l’architecture future peut probablement devenir :

* state clinique ;
* compute context ;
* blocs spécialisés ;
* renderer assembleur ;
* outputs multiples.

LIMITATION ARCHITECTURE ACTUELLE :
Le renderer mélange encore :

* HTML ;
* template ;
* logique affichage ;
* logique destinataire ;
* logique patient ;
* lecture DOM date ;
* composition documentaire.

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="q4m9vs"
clinicalModel
↓
renderLongLetterV2()
↓
sous-renderers spécialisés
↓
HTML courrier final
```

ARCHITECTURE CIBLE FUTURE :

```text id="d7v3qs"
clinicalContext
↓
documentAssembler()
↓
block renderers registry
↓
template renderer
↓
HTML/PDF/TEXT outputs
```

ÉVOLUTION CIBLE FUTURE :

* séparation template/rendering ;
* suppression HTML inline ;
* suppression lecture DOM date ;
* renderer registry ;
* templates spécialisés ;
* thèmes documentaires ;
* compatibilité PDF native ;
* compatibilité multi-layouts ;
* compatibilité export structuré ;
* compatibilité moteur clinique transversal.

POINT ARCHITECTURE IMPORTANT :
Contrairement à buildPrescription() et buildCRCPathoBloc(), cette fonction est déjà davantage :

```text id="n6q2mv"
un vrai renderer assembleur
```

et moins :

```text id="t8v4ks"
un moteur métier hybride
```

=> excellent signe maturité architecture documentaire.

NIVEAU PRIORITÉ AUDIT / REFACTOR :
ÉLEVÉ STRATÉGIQUE

```
```
````text id="u3m8qs"
FUNCTION : renderMedicalRecord()

renderMedicalRecord() = renderer dossier médical structuré PAP ; assembleur clinique semi-structuré orienté synthèse DPI/dossier ; version documentaire la plus proche du state clinique réel ; point stratégique majeur pour futur export structuré médical ; priorité critique audit architecture.

ROLE :
Construit la synthèse dossier médical d’activité physique ; assemble blocs cliniques structurés ; produit un rendu orienté dossier/DPI ; intègre évaluation, motivation, traitements, prescription, CRC et décisions ; génère la synthèse médicale structurée finale.

INPUTS :
- model
- buildEvaluationAP()
- buildMotivation()
- buildRCV()
- buildPrescription()
- buildCRCPathoBloc()
- buildAntecedentsBloc()
- buildTraitementsBloc()
- buildDecisionBloc()
- buildObjectivesBlock()

STATE LU :
- clinicalModel indirect
- outputs sous-renderers
- données patient indirectes
- prescriptionModel indirect

STATE MODIFIÉ :
- aucun direct ;
- génération HTML structurée pure.

EFFETS DE BORD IDENTIFIÉS :
- dépendance massive sous-renderers ;
- dépendance formatage HTML ;
- dépendance formulations externes ;
- dépendance replace()/post-processing ;
- dépendance logique documentaire existante.

OUTPUTS :
- synthèse dossier médical ;
- rendu DPI ;
- rendu consultation structurée ;
- HTML médical final.

DÉPENDANCES :
- buildEvaluationAP()
- buildMotivation()
- buildRCV()
- buildPrescription()
- buildCRCPathoBloc()
- buildAntecedentsBloc()
- buildTraitementsBloc()
- buildDecisionBloc()
- buildObjectivesBlock()

SOUS-BLOCS IDENTIFIÉS :
- titre consultation ;
- motif ;
- antécédents ;
- traitements ;
- évaluation AP ;
- motivation ;
- RCV ;
- décisions ;
- objectifs ;
- prescription ;
- conseils pathologies ;
- nettoyage formulations replace() ;
- structuration dossier médical.

POINTS IDENTIFIÉS :
- renderer dossier médical spécialisé ;
- architecture assembleur claire ;
- structure semi-standardisée ;
- logique DPI implicite ;
- moins narratif que courrier long ;
- plus proche state clinique réel ;
- orientation “données structurées” déjà visible ;
- forte réutilisation sous-renderers ;
- présence post-processing replace() ;
- dépendance formulations moteurs externes ;
- logique présentation encore fusionnée ;
- architecture export structuré émergente.

TYPE :
RENDERER MÉDICAL STRUCTURÉ

POINT POSITIF MAJEUR :
Ce renderer est actuellement :
```text id="y7m4kp"
le plus proche d’un export DPI structuré
````

car :

* moins narratif ;
* plus modulaire ;
* plus standardisé ;
* plus orienté données cliniques.

AUTRE POINT POSITIF MAJEUR :
Structure documentaire déjà très compatible :

* export DPI ;
* export structuré ;
* export JSON ;
* API futures ;
* templates médicaux ;
* formats institutionnels.

POINT STRATÉGIQUE MAJEUR :
Cette fonction montre que l’architecture cible PAP peut probablement évoluer vers :

```text id="k2v8ms"
clinicalContext structuré
↓
renderers spécialisés
↓
templates médicaux
↓
exports multi-formats
```

LIMITATION ARCHITECTURE ACTUELLE :
Le renderer dépend encore :

* formulations moteurs externes ;
* nettoyage replace() fragile ;
* HTML inline ;
* chaînes textuelles ;
* formulations non normalisées ;
* renderers hybrides externes.

POINT ARCHITECTURE IMPORTANT :
Les lignes :

```javascript id="f4q9vs"
.replace(...)
```

montrent :

```text id="n6m2qp"
une absence actuelle de séparation
entre données cliniques et formulations
```

=> le renderer doit “nettoyer” des phrases déjà générées.

Cela indique :

* dette renderer ;
* dépendance linguistique ;
* absence outputs structurés intermédiaires.

RISQUES :

* accumulation replace() ;
* fragilité formulations ;
* dépendance wording ;
* duplication nettoyage ;
* difficulté internationalisation ;
* difficulté standardisation DPI ;
* difficulté API structurée ;
* dette templates ;
* dette renderer.

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="q8v3ks"
clinicalModel
↓
sous-renderers hybrides
↓
renderMedicalRecord()
↓
post-processing replace()
↓
HTML médical final
```

ARCHITECTURE CIBLE FUTURE :

```text id="d5m7qa"
clinicalContext structuré
↓
structuredClinicalBlocks
↓
medicalTemplateRenderer
↓
DPI / HTML / PDF / JSON outputs
```

ÉVOLUTION CIBLE FUTURE :

* suppression replace() ;
* séparation données/formulations ;
* blocs cliniques structurés ;
* templates DPI ;
* export structuré natif ;
* compatibilité API ;
* compatibilité FHIR future éventuelle ;
* compatibilité multi-layouts ;
* renderer registry médical ;
* outputs cliniques normalisés.

POINT STRATÉGIQUE GLOBAL AUDIT :
renderMedicalRecord() confirme fortement que :

```text id="p9q4mv"
PAP évolue naturellement
vers une architecture :
STATE CLINIQUE STRUCTURÉ
→ BLOCS CLINIQUES
→ RENDERERS SPÉCIALISÉS
→ OUTPUTS MULTI-FORMATS
```

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE STRATÉGIQUE

```
```

````text id="w6m3qs"
FUNCTION : buildDecisionBloc()

buildDecisionBloc() = moteur décisionnel clinique léger PAP ; génère les propositions complémentaires médicales liées à l’activité physique ; premier embryon explicite moteur IF/THEN décisionnel ; point réglementaire stratégique majeur ; priorité critique audit architecture.

ROLE :
Construit le bloc des décisions/préconisations complémentaires ; transforme les choix cliniques du modèle décisionnel en formulations médicales ; gère les propositions complémentaires liées à l’AP ; produit le texte décisionnel final.

INPUTS :
- model
- model.decision.consultation_ap
- model.decision.epreuve_effort

STATE LU :
- model.decision

STATE MODIFIÉ :
- aucun ;
- fonction pure.

EFFETS DE BORD IDENTIFIÉS :
- aucun DOM ;
- aucune mutation globale ;
- aucune dépendance UI ;
- logique purement textuelle/décisionnelle.

OUTPUTS :
- texte décisionnel final ;
- préconisations complémentaires ;
- propositions complémentaires.

DÉPENDANCES :
- structure model.decision
- conventions "oui"
- conventions "peut_etre"

SOUS-BLOCS IDENTIFIÉS :
- décision consultation AP ;
- décision épreuve effort ;
- catégorisation préconisé vs possible ;
- logique listes françaises ;
- logique pluriel/singulier ;
- génération formulations finales.

POINTS IDENTIFIÉS :
- premier vrai moteur décisionnel explicite ;
- logique IF/THEN clairement visible ;
- séparation intéressante préconisé vs possible ;
- logique aide cognitive déjà présente ;
- pas de décision automatique stricte ;
- formulation prudente ;
- moteur encore limité ;
- moteur relativement propre ;
- absence DOM ;
- absence mutation state ;
- architecture beaucoup plus saine que legacy hybrides.

TYPE :
MOTEUR DÉCISIONNEL CLINIQUE LÉGER

POINT POSITIF MAJEUR :
Le moteur utilise :
```text id="z8v4kp"
préconisé
vs
possible
````

et NON :

```text id="j5m2qs"
obligatoire
vs
interdit
```

=> très important réglementairement.

Cela maintient :

* aide cognitive ;
* proposition ;
* décision médicale finale humaine ;
* absence automatisation décisionnelle.

AUTRE POINT POSITIF :
Fonction :

* pure ;
* testable ;
* sans DOM ;
* sans mutation globale ;
* relativement découplée ;
* facilement extensible.

=> excellente direction architecture clinique.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement :

```text id="c4q9mv"
le premier vrai embryon
du futur RULE ENGINE PAP
```

LIMITATION ARCHITECTURE ACTUELLE :
Le moteur reste :

* très textuel ;
* peu structuré ;
* peu normalisé ;
* limité à quelques décisions ;
* non catégorisé cliniquement ;
* fusionné renderer + logique.

RISQUES FUTURS :

* accumulation IF/THEN ;
* accumulation décisions médicales ;
* accumulation règles HAS ;
* accumulation exceptions ;
* dérive vers moteur expert implicite ;
* risque réglementaire ;
* dette logique ;
* difficulté auditabilité.

POINT RÉGLEMENTAIRE MAJEUR :
Cette fonction est probablement :

```text id="f7m3qa"
une future zone réglementaire sensible
```

car elle touche :

* orientation ;
* examens ;
* décisions complémentaires ;
* sécurité AP.

=> nécessité future :

* auditabilité ;
* explicabilité ;
* traçabilité ;
* séparation aide cognitive / décision.

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="l9v2ks"
clinicalDecisionState
↓
buildDecisionBloc()
↓
texte décisionnel
```

ARCHITECTURE CIBLE FUTURE :

```text id="q6m8vp"
decisionInputs
↓
clinicalRulesEngine()
↓
structuredDecisionOutputs
↓
decisionRenderer()
```

ÉVOLUTION CIBLE FUTURE :

* séparation règles/rendu ;
* outputs structurés ;
* justification règles ;
* auditabilité ;
* compatibilité recommandations HAS ;
* compatibilité moteur vigilance ;
* compatibilité moteur supervision ;
* compatibilité moteur médicaments ;
* compatibilité limitations locomotrices ;
* compatibilité moteur sécurité AP.

STRUCTURE CIBLE FUTURE ENVISAGÉE :

```javascript id="n3q7ms"
{
  preconisations: [],
  options: [],
  vigilances: [],
  conditions: [],
  justifications: []
}
```

POINT STRATÉGIQUE GLOBAL AUDIT :
buildDecisionBloc() confirme que :

```text id="d5v4kp"
PAP est en train d’évoluer
d’un générateur documentaire
vers un moteur clinique structuré explicable
```

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE STRATÉGIQUE

```
```

````text id="x4m8qs"
FUNCTION : buildEvaluationAP()

buildEvaluationAP() = moteur d’évaluation clinique activité physique et sédentarité PAP ; transforme les données d’évaluation AP en synthèse clinique contextualisée ; futur noyau logique niveau activité/sédentarité/supervision ; point stratégique majeur moteur clinique transversal ; priorité critique audit architecture.

ROLE :
Construit la synthèse clinique du niveau d’activité physique ; interprète la classification AP ; intègre sédentarité ; contextualise données podomètre/questionnaire ; produit la formulation clinique évaluation AP finale.

INPUTS :
- model
- model.evaluation
- model.patient
- evaluation.classification
- evaluation.sedentarite
- evaluation.questionnaire_source
- patient.questionnaire
- patient.pas_moyens
- patient.heures_assises

STATE LU :
- model.evaluation
- model.patient

STATE MODIFIÉ :
- aucun ;
- fonction pure.

EFFETS DE BORD IDENTIFIÉS :
- aucun DOM ;
- aucune mutation globale ;
- aucune dépendance UI ;
- logique clinique directement intégrée ;
- logique linguistique directement intégrée.

OUTPUTS :
- synthèse évaluation activité physique ;
- synthèse sédentarité ;
- texte clinique final évaluation AP.

DÉPENDANCES :
- structure model.evaluation
- structure model.patient
- conventions classification
- conventions sédentarité

SOUS-BLOCS IDENTIFIÉS :
- validation évaluation disponible ;
- classification activité physique ;
- reformulation clinique ;
- intégration questionnaire ;
- intégration source questionnaire ;
- intégration podométrie ;
- intégration sédentarité ;
- intégration temps assis ;
- gestion statut sédentarité non recherché ;
- génération texte final.

POINTS IDENTIFIÉS :
- premier vrai moteur évaluation AP structuré ;
- logique activité physique explicite ;
- logique sédentarité explicite ;
- logique questionnaire explicite ;
- logique podométrie explicite ;
- moteur relativement propre ;
- absence DOM ;
- absence mutation globale ;
- logique clinique déjà bien identifiable ;
- logique supervision future implicite ;
- logique risque sédentarité implicite ;
- logique orientation future implicite ;
- logique limitations fonctionnelles future possible ;
- classification encore textuelle/non normalisée ;
- logique renderer encore fusionnée.

TYPE :
MOTEUR ÉVALUATION CLINIQUE AP

POINT POSITIF MAJEUR :
Fonction :
- pure ;
- découplée ;
- sans DOM ;
- relativement testable ;
- relativement modulaire ;
- orientée données cliniques.

=> excellente base futur moteur clinique.

AUTRE POINT POSITIF MAJEUR :
Le moteur différencie déjà :
- activité physique ;
- sédentarité ;
- questionnaire ;
- podométrie.

=> architecture clinique cohérente émergente.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement :
```text id="n7v3kp"
le futur noyau évaluation AP/sédentarité PAP
````

et sera probablement centrale pour :

* supervision ;
* vigilance ;
* limitations ;
* orientation ;
* sécurité AP ;
* recommandations.

LIMITATION ARCHITECTURE ACTUELLE :
Le moteur mélange encore :

* interprétation clinique ;
* logique métier ;
* formulation linguistique ;
* contextualisation ;
* rendu documentaire.

LIMITATION STRUCTURELLE IMPORTANTE :
Les classifications restent :

* textuelles ;
* non normalisées ;
* non hiérarchisées ;
* non auditables ;
* difficilement réutilisables analytiquement.

RISQUES FUTURS :

* accumulation IF/THEN ;
* accumulation seuils ;
* accumulation questionnaires ;
* accumulation règles supervision ;
* accumulation règles HAS ;
* dérive vers moteur expert implicite ;
* difficulté auditabilité ;
* difficulté standardisation.

POINT RÉGLEMENTAIRE IMPORTANT :
Le moteur formule actuellement :

```text id="q5m8vs"
une interprétation clinique descriptive
```

et NON :

```text id="f2v4qa"
une décision automatique
```

=> point très favorable réglementairement.

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="k9m2qs"
evaluationState
↓
buildEvaluationAP()
↓
synthèse clinique AP
```

ARCHITECTURE CIBLE FUTURE :

```text id="r4v7kp"
evaluationInputs
↓
activityAssessmentEngine()
↓
structuredEvaluationContext
↓
evaluationRenderer()
```

ÉVOLUTION CIBLE FUTURE :

* séparation règles/rendu ;
* normalisation classifications ;
* normalisation sédentarité ;
* compatibilité supervision HAS ;
* compatibilité limitations locomotrices ;
* compatibilité moteur vigilance ;
* compatibilité moteur orientation ;
* compatibilité moteur sécurité AP ;
* compatibilité analytics/statistiques ;
* compatibilité export structuré.

STRUCTURE CIBLE FUTURE ENVISAGÉE :

```javascript id="z8m4qp"
{
  niveauActivite: {},
  sedentarite: {},
  podometrie: {},
  questionnaires: {},
  limitations: {},
  vigilance: {},
  supervision: {}
}
```

POINT STRATÉGIQUE GLOBAL AUDIT :
buildEvaluationAP() confirme que :

```text id="t6v3ks"
PAP possède déjà implicitement
les bases d’un vrai moteur clinique AP structuré
```

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE STRATÉGIQUE

```
```

````text id="m4v8qs"
FUNCTION : buildMotivation()

buildMotivation() = moteur motivationnel comportemental PAP ; transforme les données motivationnelles en synthèse clinique narrative ; premier noyau explicite approche motivationnelle/adhésion ; futur moteur transversal engagement comportemental ; priorité stratégique critique audit architecture.

ROLE :
Construit la synthèse motivationnelle liée à l’activité physique ; interprète le stade motivationnel ; contextualise importance/confiance ; intègre freins et leviers ; produit le texte motivationnel clinique final.

INPUTS :
- model
- model.motivation
- motivation.stade
- motivation.importance
- motivation.confiance
- motivation.freins
- motivation.leviers

STATE LU :
- model.motivation

STATE MODIFIÉ :
- aucun ;
- fonction pure.

EFFETS DE BORD IDENTIFIÉS :
- aucun DOM ;
- aucune mutation globale ;
- aucune dépendance UI ;
- logique motivationnelle directement intégrée ;
- logique linguistique directement intégrée.

OUTPUTS :
- synthèse motivationnelle ;
- synthèse adhésion AP ;
- texte motivationnel clinique final.

DÉPENDANCES :
- structure model.motivation
- conventions stades motivationnels
- conventions importance/confiance

SOUS-BLOCS IDENTIFIÉS :
- évaluation stade motivationnel ;
- gestion indétermination ;
- intégration importance ;
- intégration confiance ;
- intégration freins ;
- intégration leviers ;
- logique agrégation motivationnelle ;
- génération texte final.

POINTS IDENTIFIÉS :
- premier vrai moteur comportemental explicite ;
- logique entretien motivationnel implicite ;
- logique adhésion implicite ;
- logique readiness implicite ;
- logique TTM implicite ;
- logique barrières/leviers explicite ;
- moteur relativement propre ;
- absence DOM ;
- absence mutation globale ;
- structure clinique déjà identifiable ;
- données motivationnelles déjà semi-structurées ;
- moteur potentiellement très extensible ;
- logique renderer encore fusionnée ;
- pas encore normalisation motivationnelle.

TYPE :
MOTEUR MOTIVATIONNEL COMPORTEMENTAL

POINT POSITIF MAJEUR :
Fonction :
- pure ;
- relativement découplée ;
- sans DOM ;
- facilement extensible ;
- orientée données comportementales.

=> excellente base futur moteur adhésion/comportement.

AUTRE POINT POSITIF MAJEUR :
Le moteur différencie déjà :
- stade motivationnel ;
- importance ;
- confiance ;
- freins ;
- leviers.

=> architecture comportementale cohérente émergente.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement :
```text id="p8q4mv"
le futur noyau motivationnel transversal PAP
````

et pourra probablement alimenter :

* adaptation prescription ;
* supervision ;
* niveau accompagnement ;
* éducation thérapeutique ;
* orientation ;
* suivi longitudinal ;
* relance comportementale.

LIMITATION ARCHITECTURE ACTUELLE :
Le moteur mélange encore :

* interprétation motivationnelle ;
* logique comportementale ;
* formulation linguistique ;
* synthèse clinique ;
* rendu documentaire.

LIMITATION STRUCTURELLE IMPORTANTE :
Les concepts motivationnels restent :

* textuels ;
* non normalisés ;
* non catégorisés ;
* difficilement analysables ;
* difficilement auditables.

RISQUES FUTURS :

* accumulation modèles motivationnels ;
* accumulation questionnaires ;
* accumulation règles coaching ;
* dérive vers coaching automatisé ;
* dérive quasi thérapeutique ;
* difficulté auditabilité ;
* difficulté séparation aide cognitive/comportement ;
* dette logique motivationnelle.

POINT RÉGLEMENTAIRE IMPORTANT :
Le moteur reste actuellement :

```text id="v7m2qs"
descriptif et exploratoire
```

et NON :

```text id="f5v8kp"
prescriptif comportemental automatisé
```

=> point très favorable réglementairement.

POINT STRATÉGIQUE SENSIBLE :
La zone motivationnelle représente probablement :

```text id="k3m9qa"
une future zone sensible réglementaire et éthique
```

car elle touche :

* comportement ;
* adhésion ;
* persuasion ;
* accompagnement ;
* barrières psychologiques ;
* auto-efficacité.

=> nécessité future :

* prudence ;
* explicabilité ;
* non automatisation ;
* maintien décision humaine.

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="q2v7ms"
motivationState
↓
buildMotivation()
↓
synthèse motivationnelle
```

ARCHITECTURE CIBLE FUTURE :

```text id="z4m8kp"
motivationInputs
↓
motivationAssessmentEngine()
↓
structuredMotivationContext
↓
motivationRenderer()
```

ÉVOLUTION CIBLE FUTURE :

* séparation règles/rendu ;
* normalisation motivationnelle ;
* compatibilité TTM ;
* compatibilité entretien motivationnel ;
* compatibilité adaptation supervision ;
* compatibilité moteur adhésion ;
* compatibilité suivi longitudinal ;
* compatibilité analytics ;
* compatibilité export structuré ;
* compatibilité personnalisation non décisionnelle.

STRUCTURE CIBLE FUTURE ENVISAGÉE :

```javascript id="t7q3mv"
{
  stade: {},
  importance: {},
  confiance: {},
  freins: [],
  leviers: [],
  vigilance: [],
  accompagnement: []
}
```

POINT STRATÉGIQUE GLOBAL AUDIT :
buildMotivation() confirme que :

```text id="x6v4qs"
PAP évolue déjà implicitement
vers un moteur clinique comportemental structuré
```

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE STRATÉGIQUE

```
```

````text id="q7m4vs"
FUNCTION : buildRCV()

buildRCV() = moteur minimal d’évaluation risque cardiovasculaire global PAP ; premier noyau explicite logique sécurité cardiovasculaire ; futur point central vigilance/supervision/sécurité AP ; zone réglementaire critique potentielle ; priorité stratégique critique audit architecture.

ROLE :
Construit la synthèse clinique du risque cardiovasculaire global ; transforme le niveau RCV en formulation clinique standardisée ; produit le texte d’évaluation RCV final.

INPUTS :
- model
- model.evaluation.rcv

STATE LU :
- model.evaluation.rcv

STATE MODIFIÉ :
- aucun ;
- fonction pure.

EFFETS DE BORD IDENTIFIÉS :
- aucun DOM ;
- aucune mutation globale ;
- aucune dépendance UI ;
- logique clinique directement intégrée ;
- logique linguistique directement intégrée.

OUTPUTS :
- synthèse risque cardiovasculaire ;
- texte clinique RCV final.

DÉPENDANCES :
- structure model.evaluation
- conventions RCV :
  - faible
  - modere
  - eleve_tres_eleve

SOUS-BLOCS IDENTIFIÉS :
- absence RCV ;
- RCV faible ;
- RCV modéré ;
- RCV élevé/très élevé ;
- génération texte clinique final.

POINTS IDENTIFIÉS :
- premier vrai moteur sécurité cardiovasculaire ;
- logique RCV explicite ;
- structure relativement propre ;
- absence DOM ;
- absence mutation globale ;
- fonction pure ;
- facilement extensible ;
- facilement auditables ;
- début logique supervision implicite ;
- début logique vigilance implicite ;
- début logique examens complémentaires implicite ;
- début logique sécurité AP implicite ;
- renderer et logique encore fusionnés ;
- niveaux RCV encore textuels/non normalisés.

TYPE :
MOTEUR VIGILANCE CARDIOVASCULAIRE

POINT POSITIF MAJEUR :
Fonction :
- pure ;
- simple ;
- découplée ;
- sans DOM ;
- facilement testable ;
- facilement extensible.

=> excellente base futur moteur vigilance/sécurité.

AUTRE POINT POSITIF MAJEUR :
Le moteur reste actuellement :
```text id="n5v8kp"
descriptif
````

et NON :

```text id="f3m2qa"
décisionnel automatisé
```

=> point très favorable réglementairement.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement :

```text id="x8q4mv"
le futur noyau sécurité cardiovasculaire PAP
```

et sera probablement connectée à :

* supervision ;
* orientation ;
* épreuve effort ;
* limitations ;
* vigilance ;
* sécurité AP ;
* adaptations.

LIMITATION ARCHITECTURE ACTUELLE :
Le moteur reste :

* extrêmement simplifié ;
* non contextualisé ;
* non structuré ;
* non justifié ;
* non traçable ;
* non explicable ;
* non hiérarchisé.

LIMITATION STRUCTURELLE IMPORTANTE :
Le modèle actuel ne contient :

* aucune source calcul ;
* aucune justification ;
* aucun facteur risque ;
* aucune règle explicite ;
* aucune logique supervision ;
* aucune vigilance associée.

RISQUES FUTURS :

* accumulation règles RCV ;
* accumulation seuils ;
* accumulation logique HAS ;
* accumulation vigilance ;
* dérive moteur expert implicite ;
* dérive décisionnelle ;
* dette sécurité ;
* difficulté auditabilité ;
* difficulté explicabilité.

POINT RÉGLEMENTAIRE MAJEUR :
Le domaine RCV représente probablement :

```text id="k6m9qs"
une des futures zones réglementaires les plus sensibles PAP
```

car il touche :

* sécurité ;
* examens ;
* contre-indications ;
* supervision ;
* vigilance cardiovasculaire.

=> nécessité future :

* auditabilité ;
* explicabilité ;
* justification ;
* séparation aide cognitive/décision ;
* prudence architecture.

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="v2q7ms"
evaluation.rcv
↓
buildRCV()
↓
texte clinique RCV
```

ARCHITECTURE CIBLE FUTURE :

```text id="t4m8kp"
cardiovascularInputs
↓
cardiovascularRiskEngine()
↓
structuredRiskContext
↓
vigilance/supervision outputs
↓
RCV renderer
```

ÉVOLUTION CIBLE FUTURE :

* séparation règles/rendu ;
* normalisation RCV ;
* justification calculs ;
* compatibilité supervision HAS ;
* compatibilité vigilance ;
* compatibilité limitations ;
* compatibilité examens complémentaires ;
* compatibilité sécurité AP ;
* compatibilité export structuré ;
* compatibilité auditabilité clinique.

STRUCTURE CIBLE FUTURE ENVISAGÉE :

```javascript id="p7v3qa"
{
  niveauRCV: {},
  facteurs: [],
  vigilance: [],
  supervision: [],
  examens: [],
  limitations: [],
  justification: []
}
```

POINT STRATÉGIQUE GLOBAL AUDIT :
buildRCV() confirme fortement que :

```text id="r9m4vs"
PAP commence déjà implicitement
à contenir un vrai moteur vigilance/sécurité clinique
```

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE STRATÉGIQUE

```
```

````text id="u8m4qs"
FUNCTION : buildObjectivesBlock()

buildObjectivesBlock() = moteur objectifs thérapeutiques PAP ; transforme les objectifs structurés du plan thérapeutique en formulation clinique ; premier noyau explicite objectifs AP thérapeutiques ; futur pivot adaptation/suivi/supervision PAP ; priorité stratégique critique audit architecture.

ROLE :
Construit le bloc des objectifs thérapeutiques ; transforme les objectifs structurés du therapeutic_plan en formulation clinique ; génère les objectifs AP personnalisés finaux.

INPUTS :
- model
- model.therapeutic_plan.objectifs

STATE LU :
- therapeutic_plan.objectifs

STATE MODIFIÉ :
- aucun ;
- fonction pure.

EFFETS DE BORD IDENTIFIÉS :
- aucun DOM ;
- aucune mutation globale ;
- aucune dépendance UI ;
- logique objectifs directement intégrée ;
- logique linguistique directement intégrée.

OUTPUTS :
- texte objectifs thérapeutiques ;
- formulation objectifs AP ;
- synthèse objectifs cliniques.

DÉPENDANCES :
- structure therapeutic_plan
- structure objectifs[]
- mappingObjectifs

SOUS-BLOCS IDENTIFIÉS :
- validation objectifs présents ;
- mapping objectifs thérapeutiques ;
- formatage objectifs ;
- fallback objectifs inconnus ;
- agrégation liste finale.

POINTS IDENTIFIÉS :
- premier vrai moteur objectifs thérapeutiques ;
- objectifs déjà structurés ;
- logique AP thérapeutique explicite ;
- logique prévention explicite ;
- logique autonomie explicite ;
- logique capacités physiques explicite ;
- logique qualité vie explicite ;
- logique bien-être explicite ;
- moteur propre ;
- absence DOM ;
- absence mutation globale ;
- facilement extensible ;
- relativement normalisé ;
- excellente base future moteur thérapeutique ;
- logique renderer encore fusionnée.

TYPE :
MOTEUR OBJECTIFS THÉRAPEUTIQUES

POINT POSITIF MAJEUR :
Les objectifs sont déjà :
```javascript id="f6v3kp"
structurés
normalisés
codés
````

via :

```javascript id="q9m2vs"
mappingObjectifs
```

=> énorme point fort architecture.

AUTRE POINT POSITIF MAJEUR :
Les objectifs couvrent déjà :

* activité physique ;
* sédentarité ;
* maladie chronique ;
* capacités cardiorespiratoires ;
* force ;
* équilibre ;
* autonomie ;
* limitations ;
* qualité vie ;
* bien-être.

=> architecture thérapeutique très cohérente.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement :

```text id="r4q8ms"
le futur pivot thérapeutique transversal PAP
```

car les objectifs pourront probablement piloter :

* prescription ;
* supervision ;
* orientation ;
* adaptations ;
* motivation ;
* suivi longitudinal ;
* indicateurs ;
* réévaluation ;
* vigilance.

LIMITATION ARCHITECTURE ACTUELLE :
Le moteur mélange encore :

* objectifs structurés ;
* mapping clinique ;
* formulation linguistique ;
* rendu documentaire.

LIMITATION STRUCTURELLE IMPORTANTE :
Les objectifs restent actuellement :

* plats ;
* non hiérarchisés ;
* non pondérés ;
* non priorisés ;
* non contextualisés ;
* non reliés explicitement aux limitations ;
* non reliés explicitement aux décisions ;
* non reliés explicitement aux activités prescrites.

RISQUES FUTURS :

* accumulation objectifs ;
* accumulation mappings ;
* accumulation règles HAS ;
* accumulation adaptations ;
* dette terminologique ;
* dérive moteur thérapeutique implicite ;
* difficulté auditabilité ;
* difficulté compatibilité suivi longitudinal.

POINT RÉGLEMENTAIRE IMPORTANT :
Le moteur reste actuellement :

```text id="k7v4qa"
orienté objectifs thérapeutiques descriptifs
```

et NON :

```text id="t3m9qp"
plan thérapeutique automatisé
```

=> point très favorable réglementairement.

POINT STRATÉGIQUE GLOBAL :
Les objectifs constituent probablement :

```text id="x5q2mv"
le meilleur futur point d’ancrage
du moteur clinique transversal PAP
```

car ils permettent naturellement :

* structuration clinique ;
* personnalisation ;
* longitudinal ;
* supervision ;
* évaluation ;
* cohérence prescription.

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="n8v3ks"
therapeutic_plan.objectifs
↓
buildObjectivesBlock()
↓
texte objectifs thérapeutiques
```

ARCHITECTURE CIBLE FUTURE :

```text id="p4m7qa"
clinicalGoals
↓
goalEngine()
↓
structuredGoalsContext
↓
prescription/supervision/adaptation engines
↓
goalRenderer()
```

ÉVOLUTION CIBLE FUTURE :

* hiérarchisation objectifs ;
* priorisation objectifs ;
* liens objectifs↔prescription ;
* liens objectifs↔limitations ;
* liens objectifs↔supervision ;
* compatibilité suivi longitudinal ;
* compatibilité réévaluation ;
* compatibilité analytics ;
* compatibilité export structuré ;
* compatibilité moteur thérapeutique transversal.

STRUCTURE CIBLE FUTURE ENVISAGÉE :

```javascript id="v7m8qs"
{
  objectifs: [
    {
      type,
      priorite,
      temporalite,
      limitationsLiees,
      activitesLiees,
      supervisionLiee,
      indicateurs
    }
  ]
}
```

POINT STRATÉGIQUE GLOBAL AUDIT :
buildObjectivesBlock() confirme fortement que :

```text id="d2q9vp"
PAP possède déjà implicitement
une architecture thérapeutique structurée
très avancée
```

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE STRATÉGIQUE

```
```

````text id="q5m8vs"
FUNCTION : buildTraitementsBloc()

buildTraitementsBloc() = embryon actuel moteur traitements/médicaments PAP ; transforme les traitements saisis en synthèse documentaire simple ; futur point critique moteur vigilance médicamenteuse ↔ activité physique ; zone stratégique majeure architecture clinique PAP ; priorité critique audit architecture.

ROLE :
Construit le bloc documentaire des traitements actuels ; récupère les traitements saisis ; nettoie/formate le texte ; génère la formulation clinique traitements finale.

INPUTS :
- DOM traitementsActuels
- cleanTraitementsText()

STATE LU :
- textarea traitementsActuels
- contenu traitements utilisateur

STATE MODIFIÉ :
- aucun ;
- fonction quasi-pure après lecture DOM.

EFFETS DE BORD IDENTIFIÉS :
- dépendance DOM directe ;
- dépendance champ UI ;
- dépendance nettoyage texte ;
- dépendance saisie libre utilisateur ;
- absence structuration médicaments.

OUTPUTS :
- texte traitements actuel ;
- formulation clinique traitements.

DÉPENDANCES :
- traitementsActuels
- cleanTraitementsText()

SOUS-BLOCS IDENTIFIÉS :
- lecture traitements ;
- nettoyage traitements ;
- validation vide ;
- génération phrase finale.

POINTS IDENTIFIÉS :
- moteur extrêmement minimal actuel ;
- totalement textuel ;
- non structuré ;
- non codé ;
- non normalisé ;
- non exploitable analytiquement ;
- aucun raisonnement clinique actuel ;
- aucun moteur vigilance actuel ;
- aucune classification médicamenteuse ;
- aucune interaction AP ;
- aucune supervision liée ;
- aucun moteur sécurité ;
- énorme potentiel architecture future ;
- forte dépendance saisie libre.

TYPE :
EMBRYON MOTEUR TRAITEMENTS / MÉDICAMENTS

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement :
```text id="r7v3kp"
la future porte d’entrée
du moteur médicaments ↔ activité physique
````

=> chantier stratégique majeur futur PAP.

LIMITATION ARCHITECTURE ACTUELLE :
Le modèle actuel repose sur :

```text id="m2q8vs"
texte libre non structuré
```

=> limite majeure pour :

* vigilance ;
* supervision ;
* sécurité ;
* analytics ;
* raisonnement clinique ;
* interactions AP.

LIMITATION STRUCTURELLE CRITIQUE :
Actuellement :

* aucun parsing ;
* aucune classe thérapeutique ;
* aucune logique hypotension ;
* aucune logique hypoglycémie ;
* aucune logique bêtabloquants ;
* aucune logique anticoagulants ;
* aucune logique iatrogénie ;
* aucune logique surveillance.

RISQUES FUTURS :

* dérive moteur expert médicaments ;
* explosion règles vigilance ;
* explosion interactions ;
* explosion exceptions ;
* dette clinique ;
* dette réglementaire ;
* difficulté auditabilité ;
* difficulté explicabilité ;
* difficulté maintenance.

POINT RÉGLEMENTAIRE CRITIQUE :
Le futur moteur médicaments représente probablement :

```text id="x8m4qa"
une des zones réglementaires
les plus sensibles PAP
```

car il touchera :

* sécurité ;
* iatrogénie ;
* hypotension ;
* hypoglycémie ;
* anticoagulants ;
* limitations ;
* surveillance ;
* adaptations.

=> nécessité future ABSOLUE :

* aide cognitive uniquement ;
* explicabilité ;
* auditabilité ;
* absence automatisation décisionnelle ;
* validation humaine systématique.

POINT POSITIF MAJEUR :
Le moteur est actuellement :

```text id="t4v7ks"
strictement descriptif
```

et NON :

```text id="p9m2qs"
interprétatif automatisé
```

=> excellent point réglementaire actuel.

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="k6q3mv"
textarea traitements
↓
cleanTraitementsText()
↓
texte clinique traitements
```

ARCHITECTURE CIBLE FUTURE :

```text id="d5v8kp"
traitements libres
↓
normalisation optionnelle
↓
classes thérapeutiques
↓
moteur vigilance AP
↓
structuredMedicationContext
↓
renderer clinique
```

ÉVOLUTION CIBLE FUTURE :

* parsing médicaments optionnel ;
* classes thérapeutiques ;
* vigilance hypotension ;
* vigilance hypoglycémie ;
* vigilance anticoagulants ;
* vigilance bêtabloquants ;
* limitations AP ;
* supervision suggérée ;
* précautions ;
* surveillance ;
* compatibilité moteur sécurité AP ;
* compatibilité supervision HAS ;
* compatibilité longitudinal.

STRUCTURE CIBLE FUTURE ENVISAGÉE :

```javascript id="w3m9qp"
{
  traitements: [],
  classesTherapeutiques: [],
  vigilance: [],
  precautions: [],
  limitations: [],
  surveillance: [],
  adaptations: [],
  supervision: []
}
```

POINT STRATÉGIQUE GLOBAL AUDIT :
buildTraitementsBloc() confirme que :

```text id="n7v4qs"
le futur moteur médicaments ↔ activité physique
sera probablement
un des plus gros chantiers cliniques PAP
```

et devra probablement rester :

* optionnel ;
* explicable ;
* auditables ;
* non décisionnel ;
* cognitivement assistif.

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE STRATÉGIQUE FUTUR

```
```

````text id="k8m4vs"
FUNCTION : buildAntecedentsBloc()

buildAntecedentsBloc() = moteur contexte clinique et antécédents PAP ; agrège pathologies, ATCD libres et statut pondéral pour construire le contexte clinique global ; futur pivot limitations/supervision/vigilance/sécurité AP ; priorité stratégique critique audit architecture.

ROLE :
Construit la synthèse des antécédents et pathologies ; agrège les pathologies cochées, ATCD libres et statut pondéral ; contextualise le profil clinique ; génère le bloc antécédents final.

INPUTS :
- .patho:checked
- PATHO_DATA
- autresAtcd
- taille_input
- poids_input
- formatFrenchList()

STATE LU :
- pathologies cochées
- ATCD libres
- taille
- poids
- PATHO_DATA

STATE MODIFIÉ :
- aucun ;
- fonction quasi-pure après lecture DOM.

EFFETS DE BORD IDENTIFIÉS :
- dépendance DOM directe ;
- dépendance PATHO_DATA ;
- dépendance IMC calculé ;
- dépendance saisie libre ;
- logique clinique directement intégrée ;
- logique pondérale directement intégrée ;
- logique filtrage métier intégrée.

OUTPUTS :
- synthèse antécédents ;
- synthèse contexte clinique ;
- texte ATCD final.

DÉPENDANCES :
- PATHO_DATA
- formatFrenchList()
- structure .patho
- taille_input
- poids_input
- autresAtcd

SOUS-BLOCS IDENTIFIÉS :
- récupération pathologies ;
- exclusion pseudo-antécédents ;
- mapping labels pathologies ;
- nettoyage cancer ;
- récupération ATCD libres ;
- normalisation ATCD libres ;
- calcul IMC ;
- catégorisation pondérale ;
- fusion ATCD ;
- génération formulation finale ;
- gestion singulier/pluriel.

POINTS IDENTIFIÉS :
- véritable moteur contexte clinique ;
- logique filtrage métier explicite ;
- logique IMC explicite ;
- logique obésité/surpoids explicite ;
- logique pathologies explicite ;
- logique ATCD libres explicite ;
- moteur beaucoup plus riche que prévu ;
- début moteur limitations implicite ;
- début moteur supervision implicite ;
- début moteur vigilance implicite ;
- début moteur fragilité implicite ;
- dépendance DOM encore forte ;
- logique renderer encore fusionnée ;
- logique clinique déjà dense.

TYPE :
MOTEUR CONTEXTE CLINIQUE / ANTÉCÉDENTS

POINT POSITIF MAJEUR :
Le moteur commence déjà à :
```text id="n6v3kp"
contextualiser le patient
````

et NON simplement :

```text id="p2m8qs"
lister des maladies
```

=> évolution architecture clinique majeure.

AUTRE POINT POSITIF MAJEUR :
Présence :

```javascript id="f5q9mv"
EXCLUDED_ANTECEDENTS
```

montre déjà :

* logique métier ;
* catégorisation clinique ;
* distinction contexte vs ATCD ;
* début normalisation clinique.

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement :

```text id="r4m7vs"
le futur noyau contexte clinique transversal PAP
```

car les antécédents pourront probablement piloter :

* supervision ;
* limitations ;
* vigilance ;
* orientation ;
* sécurité AP ;
* adaptations ;
* médicaments ;
* objectifs ;
* suivi longitudinal.

LIMITATION ARCHITECTURE ACTUELLE :
Le moteur mélange encore :

* extraction DOM ;
* logique clinique ;
* calcul IMC ;
* catégorisation pondérale ;
* nettoyage données ;
* rendu documentaire.

LIMITATION STRUCTURELLE IMPORTANTE :
Le modèle actuel reste :

* textuel ;
* peu structuré ;
* non hiérarchisé ;
* non pondéré ;
* non relié explicitement aux limitations ;
* non relié explicitement aux vigilances ;
* non relié explicitement aux décisions.

RISQUES FUTURS :

* accumulation règles cliniques ;
* accumulation exclusions ;
* accumulation catégories ;
* accumulation limitations ;
* accumulation vigilance ;
* dérive moteur expert implicite ;
* difficulté auditabilité ;
* difficulté explicabilité ;
* dette contexte clinique.

POINT RÉGLEMENTAIRE IMPORTANT :
Le moteur reste actuellement :

```text id="t7q3ms"
descriptif/contextualisant
```

et NON :

```text id="x2v8qa"
décisionnel automatisé
```

=> point très favorable réglementairement.

POINT ARCHITECTURE IMPORTANT :
Le calcul IMC intégré montre déjà :

```text id="w8m4kp"
une logique clinique transverse implicite
```

car l’IMC :

* influence contexte ;
* influencera supervision ;
* influencera limitations ;
* influencera sécurité ;
* influencera objectifs.

=> futur pivot moteur clinique.

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="q5m9vs"
DOM clinique
↓
buildAntecedentsBloc()
↓
contexte clinique textuel
```

ARCHITECTURE CIBLE FUTURE :

```text id="d3v7qs"
clinicalInputs
↓
clinicalContextEngine()
↓
structuredClinicalContext
↓
limitations/vigilance/supervision engines
↓
renderers
```

ÉVOLUTION CIBLE FUTURE :

* séparation extraction/règles/rendu ;
* normalisation pathologies ;
* normalisation IMC ;
* compatibilité limitations locomotrices ;
* compatibilité moteur vigilance ;
* compatibilité supervision HAS ;
* compatibilité moteur médicaments ;
* compatibilité sécurité AP ;
* compatibilité longitudinal ;
* compatibilité export structuré.

STRUCTURE CIBLE FUTURE ENVISAGÉE :

```javascript id="m9q4vp"
{
  pathologies: [],
  antecedents: [],
  statutPonderal: {},
  limitations: [],
  vigilance: [],
  supervision: [],
  adaptations: [],
  fragilite: []
}
```

POINT STRATÉGIQUE GLOBAL AUDIT :
buildAntecedentsBloc() confirme fortement que :

```text id="s6v2ks"
PAP possède déjà implicitement
un véritable moteur de contexte clinique transversal
```

et que ce moteur pourrait devenir :

```text id="k3m8qa"
le cœur clinique réel de la plateforme
```

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE STRATÉGIQUE

```
```

````text id="p7m4qs"
FUNCTION : buildClinicalModel()

buildClinicalModel() = cœur architectural majeur PAP ; véritable moteur d’agrégation clinique transversal ; point de convergence global entre DOM, UI, prescriptionModel, logique clinique, supervision, objectifs, limitations, vigilance et outputs documentaires ; véritable STATE ENGINE implicite PAP ; priorité architecture ABSOLUE. :contentReference[oaicite:0]{index=0}

ROLE :
Construit le clinicalModel global à partir du DOM consultation ; agrège toutes les données cliniques ; alimente prescriptionModel ; structure objectifs/activités/limitations/orientations ; initialise état clinique documentaire ; constitue le point central de transformation UI → moteur clinique.

INPUTS :
- DOM complet consultation
- prescriptionModel
- PATHO_DATA
- getStadeMotivation()
- markPrescriptionDirty()

STATE LU :
- totalité UI consultation ;
- totalité inputs AP ;
- totalité pathologies ;
- totalité objectifs ;
- totalité limitations ;
- totalité orientations ;
- totalité motivation ;
- totalité RCV ;
- totalité prescription ;
- totalité décisions ;
- totalité supervision ;
- totalité activités.

STATE MODIFIÉ :
- prescriptionModel.activites
- prescriptionModel.objectifs
- prescriptionModel.limitations
- prescriptionModel.recommandations
- prescriptionModel.orientationAPA
- prescriptionModel.duree_prescription
- dirty state via markPrescriptionDirty()

EFFETS DE BORD IDENTIFIÉS :
- mutation globale massive ;
- dépendance DOM massive ;
- dépendance PATHO_DATA ;
- dépendance UI totale ;
- dépendance prescriptionModel global ;
- logique clinique intégrée ;
- logique supervision intégrée ;
- logique recommandations intégrée ;
- logique adaptations intégrée ;
- logique activités intégrée ;
- logique orientation intégrée ;
- logique limitations intégrée ;
- logique prescription intégrée ;
- logique motivation intégrée ;
- logique RCV intégrée ;
- logique décisions intégrée ;
- logique dirty-state intégrée.

OUTPUTS :
- clinicalModel complet ;
- prescriptionModel enrichi ;
- état clinique transversal ;
- état documentaire ;
- état prescription ;
- état supervision ;
- état objectifs ;
- état limitations ;
- état motivation ;
- état décisionnel.

DÉPENDANCES :
- PATHO_DATA
- getStadeMotivation()
- markPrescriptionDirty()
- prescriptionModel global
- DOM consultation complet

SOUS-BLOCS IDENTIFIÉS :
- extraction endurance ;
- extraction mode pas ;
- extraction FITT ;
- extraction renforcement ;
- extraction souplesse ;
- extraction équilibre ;
- extraction objectifs ;
- extraction limitations ;
- extraction précautions ;
- extraction orientations ;
- extraction supervision ;
- extraction consentement ;
- extraction bilan souhaité ;
- extraction recommandations pathologies ;
- extraction motivation ;
- extraction RCV ;
- extraction décisions ;
- extraction patient ;
- extraction therapeutic_plan ;
- extraction prescription ;
- extraction situation clinique ;
- extraction questionnaire ;
- extraction sédentarité ;
- extraction podométrie ;
- construction activités structurées ;
- construction orientationAPA ;
- construction therapeutic_plan ;
- construction evaluation ;
- construction motivation ;
- construction decision ;
- dirty-state management.

POINTS IDENTIFIÉS :
- véritable cœur clinique global PAP ;
- véritable state engine implicite ;
- véritable pipeline UI → modèle clinique ;
- centralisation majeure logique clinique ;
- centralisation majeure logique prescription ;
- centralisation majeure logique supervision ;
- centralisation majeure logique limitations ;
- centralisation majeure logique orientation ;
- centralisation majeure logique recommandations ;
- centralisation majeure logique motivation ;
- centralisation majeure logique décisionnelle ;
- centralisation majeure logique AP ;
- centralisation majeure logique sécurité implicite ;
- couplage DOM extrêmement fort ;
- mutation globale extrêmement forte ;
- fonction déjà massive ;
- très forte candidate “god function clinique”.

TYPE :
STATE ENGINE CLINIQUE CENTRAL

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement :
```text id="n4v8kp"
le véritable cœur architecture PAP actuel
````

Tout converge ici :

* UI ;
* prescription ;
* supervision ;
* objectifs ;
* motivation ;
* vigilance ;
* décisions ;
* limitations ;
* recommandations ;
* activités ;
* sécurité implicite.

POINT ARCHITECTURE MAJEUR :
Le modèle actuel suit implicitement :

```text id="q8m3vs"
DOM consultation
↓
buildClinicalModel()
↓
clinical state implicite
↓
renderers
↓
documents
```

=> architecture déjà très proche :

```text id="t2v7qa"
d’un vrai moteur clinique structuré
```

POINT POSITIF MAJEUR :
Le clinicalModel est déjà :

* relativement structuré ;
* hiérarchisé ;
* modulaire ;
* réutilisable ;
* séparé par domaines ;
* compatible multi-renderers.

Très gros point fort architecture.

AUTRE POINT POSITIF MAJEUR :
Les grands domaines cliniques sont déjà séparés :

```javascript id="w5m9qp"
meta
patient
evaluation
motivation
therapeutic_plan
prescription
decision
orientationAPA
activites
limitations
recommandations
```

=> excellente base future architecture modulaire.

AUTRE POINT POSITIF MAJEUR :
Les activités AP sont déjà normalisées :

```javascript id="k7v4ms"
categorie
mode
type
intensite
frequence
duree
```

=> énorme avancée architecture clinique.

LIMITATION ARCHITECTURE ACTUELLE :
La fonction mélange actuellement :

* extraction DOM ;
* logique clinique ;
* logique supervision ;
* logique vigilance ;
* logique recommandations ;
* mutation globale ;
* normalisation ;
* structuration ;
* dirty-state ;
* construction modèle ;
* règles métier ;
* logique AP ;
* logique sécurité implicite.

LIMITATION STRUCTURELLE CRITIQUE :
Le moteur dépend encore :

```text id="x3q8mv"
du DOM comme source de vérité
```

et NON :

```text id="r6v2kp"
d’un vrai clinical state central
```

=> dette architecture majeure.

RISQUES FUTURS :

* explosion IF/THEN ;
* explosion règles supervision ;
* explosion limitations ;
* explosion vigilance ;
* explosion médicaments ;
* explosion sécurité ;
* accumulation logique métier ;
* accumulation mutations ;
* accumulation side-effects ;
* accumulation dépendances DOM ;
* dérive “god engine clinique” ;
* dette architecture critique.

POINT RÉGLEMENTAIRE MAJEUR :
Cette fonction est probablement :

```text id="m8v4qs"
la future zone réglementaire centrale PAP
```

car elle pilote implicitement :

* supervision ;
* limitations ;
* vigilance ;
* recommandations ;
* sécurité AP ;
* orientation ;
* décisions.

=> nécessité future ABSOLUE :

* explicabilité ;
* auditabilité ;
* séparation règles/rendu ;
* séparation UI/moteur clinique ;
* absence automatisation décisionnelle ;
* maintien validation humaine.

POINT STRATÉGIQUE CRITIQUE :
Cette fonction confirme clairement que :

```text id="p2m7qa"
PAP n’est déjà plus
un simple générateur documentaire
```

mais :

```text id="f9v3ks"
un moteur clinique structuré implicite
```

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="d7m8vp"
DOM consultation
↓
buildClinicalModel()
↓
clinicalModel implicite
↓
prescriptionModel enrichi
↓
renderers
↓
documents
```

ARCHITECTURE CIBLE FUTURE :

```text id="s4q9mv"
UI Layer
↓
State Extractors
↓
Clinical State Engine
↓
Validation Engine
↓
Rules/Vigilance Engines
↓
Structured Clinical Context
↓
Renderers
↓
Outputs
```

ÉVOLUTION CIBLE FUTURE :

* suppression dépendance DOM directe ;
* séparation extracteurs UI ;
* séparation state clinique ;
* séparation validation ;
* séparation rules engine ;
* séparation vigilance ;
* séparation supervision ;
* séparation renderer ;
* séparation dirty-state ;
* compatibilité longitudinal ;
* compatibilité supervision HAS ;
* compatibilité moteur médicaments ;
* compatibilité limitations locomotrices ;
* compatibilité moteur sécurité AP ;
* compatibilité exports structurés ;
* compatibilité analytics ;
* compatibilité API future.

STRUCTURE CIBLE FUTURE ENVISAGÉE :

```javascript id="h6v4kp"
{
  patient: {},
  contexteClinique: {},
  evaluation: {},
  motivation: {},
  objectifs: {},
  prescription: {},
  supervision: {},
  limitations: {},
  vigilance: {},
  traitements: {},
  recommandations: {},
  decisions: {},
  renderContext: {}
}
```

POINT STRATÉGIQUE GLOBAL AUDIT :
buildClinicalModel() confirme définitivement que :

```text id="u9m2qs"
PAP possède déjà implicitement
une architecture complète
de moteur clinique transversal structuré
```

et que :

```text id="k3v8qa"
la vraie priorité architecture future
est désormais :
DÉCOUPLER
STRUCTURER
AUDITER
EXPLIQUER
et NON “ajouter des features”
```

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE ABSOLUE

```
```

````text id="p4m8qs"
==================================================
AUDIT KNOWLEDGE-BASE CLINIQUE — PATHO_DATA
==================================================

PATHO_DATA = composant stratégique majeur PAP ; véritable knowledge-base clinique structurée ; proto moteur expert déterministe ; proto rules-engine clinique ; proto moteur supervision ; proto moteur vigilance ; proto moteur limitations ; proto moteur sécurité AP ; probablement composant clinique le plus important du projet après buildClinicalModel(). :contentReference[oaicite:0]{index=0}

ROLE :
Centraliser les connaissances métier par pathologie ; fournir contraintes, adaptations, règles IF/THEN, vigilance, supervision implicite, messages patient, CRC et éléments de sécurité ; servir de base unique aux moteurs documentaires et cliniques.

STRUCTURE GÉNÉRALE :
Chaque pathologie contient généralement :
- titre ;
- contraintes ;
- adaptations ;
- situations ;
- regles ;
- crc ;
- crc_default.

ARCHITECTURE IMPLICITE IDENTIFIÉE :
```text id="m7v2pk"
PATHO_DATA
↓
knowledge base clinique
↓
rules engine implicite
↓
moteur vigilance
↓
moteur supervision
↓
moteur limitations
↓
moteur sécurité AP
↓
moteur CRC patient
↓
renderers
↓
documents
````

TYPE ARCHITECTURE :

* knowledge-base structurée ;
* moteur expert déterministe ;
* moteur explicable ;
* moteur audit-able ;
* moteur traçable ;
* moteur non probabiliste ;
* moteur aide cognitive ;
* moteur compatible supervision humaine.

POINT STRATÉGIQUE MAJEUR :
PAP ne repose PAS sur :

* IA opaque ;
* raisonnement probabiliste ;
* boîte noire ;
* décision automatique.

PAP repose déjà implicitement sur :

```text id="n6q4mv"
règles explicites
+
structures cliniques
+
conditions IF/THEN
+
validation humaine
```

=> énorme avantage réglementaire.

==================================================
ANALYSE PAR DOMAINES
====================

1. contraintes
   ROLE :

* CI absolues ;
* CI relatives ;
* limitations ;
* restrictions ;
* signaux sécurité ;
* contre-indications temporaires ;
* risques spécifiques.

EXEMPLES :

* HTA sévère ;
* poussée inflammatoire ;
* hypoglycémie ;
* métastases osseuses ;
* grossesse ;
* risque de chute.

POINT FORT :
Les contraintes sont :

* explicites ;
* contextualisées ;
* non automatisées ;
* compatibles aide cognitive.

LIMITATION :
Les contraintes restent actuellement :

* textuelles ;
* non structurées ;
* non codées ;
* non typées.

RISQUE FUTUR :
Difficulté future :

* filtrage ;
* hiérarchisation ;
* moteur supervision ;
* exports structurés ;
* analytics.

==================================================

2. adaptations
   ROLE :

* adaptations AP ;
* modalités pratiques ;
* progressivité ;
* alternatives ;
* choix activités ;
* stratégies sécurisation ;
* modalités supervision implicites.

POINT FORT :
Très forte richesse clinique réelle ;
niveau expert élevé ;
très proche pratique consultation réelle.

POINT STRATÉGIQUE :
Cette section constitue déjà :

```text id="k3m7pv"
un moteur adaptation AP contextualisé
```

==================================================

3. situations
   ROLE :

* contexte clinique ;
* facteurs aggravants ;
* signaux faibles ;
* facteurs vigilance ;
* éléments supervision ;
* situations complexes ;
* éléments décisionnels implicites.

POINT FORT :
Très compatible médecine réelle ;
raisonnement contextualisé ;
non algorithmique rigide.

LIMITATION :
Mélange actuellement :

* vigilance ;
* contexte ;
* supervision ;
* signaux faibles ;
* aide décisionnelle.

==================================================

4. regles
   ROLE :

* véritable rules-engine clinique implicite ;
* logique IF/THEN ;
* moteur vigilance ;
* moteur sécurité ;
* moteur adaptation ;
* moteur supervision implicite.

EXEMPLES :

```text id="g9v2qa"
SI dyspnée importante
→ ALORS réduire intensité
```

```text id="r5m8qs"
SI hypoglycémie
→ ALORS resucrer avant AP
```

POINT MAJEUR :
Cette section constitue probablement :

```text id="c4v9pk"
le premier vrai moteur expert PAP
```

POINT FORTS :

* explicabilité ;
* auditabilité ;
* traçabilité ;
* logique déterministe ;
* non automatisation ;
* compatibilité HAS ;
* supervision humaine conservée.

POINT RÉGLEMENTAIRE MAJEUR :
Les règles :

* n’imposent pas ;
* n’automatisent pas ;
* proposent ;
* contextualisent ;
* alertent.

=> excellent point réglementaire.

LIMITATION :
Les règles restent :

* textuelles ;
* non typées ;
* non exécutables proprement ;
* non hiérarchisées ;
* non séparées par niveau criticité.

==================================================

5. crc
   ROLE :

* moteur éducation patient ;
* reformulation patient ;
* traduction clinique → langage patient ;
* support entretien motivationnel ;
* aide cognitive patient ;
* sécurité patient.

POINT STRATÉGIQUE :
PAP possède déjà implicitement :

```text id="w2q6mv"
un moteur dual :
médecin
+
patient
```

Très forte valeur clinique.

==================================================

6. crc_default
   ROLE :

* noyau minimal sécurisé ;
* version simplifiée ;
* fallback ;
* base conseil patient minimal.

POINT FORT :
Permet :

* simplification ;
* personnalisation ;
* fallback sécurisé ;
* contrôle charge cognitive.

==================================================
POINTS ARCHITECTURE MAJEURS IDENTIFIÉS
======================================

POINT MAJEUR 1 :
PATHO_DATA constitue déjà :

```text id="t8m4pk"
une base de connaissances médicale structurée
```

POINT MAJEUR 2 :
Les règles sont :

* explicites ;
* déterministes ;
* auditable ;
* compréhensibles ;
* compatibles supervision humaine.

POINT MAJEUR 3 :
Le système reste :

```text id="h6v9qa"
non opaque
```

contrairement :

* IA générative autonome ;
* moteur probabiliste ;
* scoring opaque.

POINT MAJEUR 4 :
Très forte séparation implicite déjà présente :

```text id="u4m7qs"
knowledge-base
≠
UI
≠
renderers
≠
documents
```

=> énorme qualité architecture.

POINT MAJEUR 5 :
PATHO_DATA est déjà compatible :

* supervision ;
* limitations ;
* vigilance ;
* moteur médicaments ;
* moteur sécurité ;
* moteur fragilité ;
* moteur sport ;
* moteur orientation ;
* longitudinal ;
* analytics ;
* exports structurés ;
* API future.

==================================================
RISQUES ARCHITECTURE FUTURS
===========================

RISQUE PRINCIPAL :

```text id="s2q8mv"
monolithe PATHO_DATA
```

Car accumulation future probable :

* traitements ;
* médicaments ;
* fragilité ;
* supervision ;
* limitations ;
* sport ;
* grossesse ;
* neurologie ;
* orthopédie ;
* vigilance ;
* sécurité ;
* règles.

RISQUES :

* explosion volume ;
* dette maintenance ;
* duplication règles ;
* incohérences ;
* difficulté audit ;
* difficulté validation ;
* difficulté versioning ;
* difficulté maintenance scientifique.

==================================================
LIMITATIONS STRUCTURELLES ACTUELLES
===================================

LIMITATION 1 :
Données encore :

* textuelles ;
* non typées ;
* non normalisées.

LIMITATION 2 :
Mélange actuel :

* vigilance ;
* contraintes ;
* supervision ;
* recommandations ;
* adaptation ;
* règles.

LIMITATION 3 :
Absence actuelle :

* criticité ;
* priorité ;
* niveau preuve ;
* source ;
* typage ;
* catégorie ;
* tags ;
* versioning scientifique.

LIMITATION 4 :
Impossible actuellement :

* moteur automatique structuré ;
* analytics avancés ;
* export FHIR ;
* règles exécutables ;
* validation cohérence automatique.

==================================================
ÉVOLUTION ARCHITECTURE CIBLE FUTURE
===================================

STRUCTURE FUTURE POSSIBLE :

```javascript id="v5q2pk"
{
  id: "hta",
  titre: "Hypertension artérielle",

  contraintes: [],
  adaptations: [],
  vigilance: [],
  supervision: [],
  limitations: [],
  situations: [],
  regles: [],
  crc: [],

  metadata: {
    niveauPreuve: "",
    source: "",
    version: "",
    criticite: ""
  }
}
```

==================================================
POINT STRATÉGIQUE GLOBAL
========================

PATHO_DATA confirme définitivement que :

```text id="e7m4qa"
PAP est déjà :
un moteur clinique structuré déterministe
```

et NON :

```text id="x4v8pk"
un simple générateur documentaire
```

==================================================
CONCLUSION AUDIT
================

PATHO_DATA représente probablement :

* le cœur métier clinique PAP ;
* la première vraie knowledge-base PAP ;
* le premier vrai rules-engine PAP ;
* le futur moteur supervision PAP ;
* le futur moteur vigilance PAP ;
* le futur moteur sécurité PAP.

POINT MAJEUR :
L’architecture actuelle est déjà :

* très avancée ;
* cohérente ;
* explicable ;
* compatible aide cognitive ;
* compatible supervision humaine ;
* compatible cadre HAS ;
* compatible non-dispositif médical ;
* compatible séparation UI / moteur clinique.

PRIORITÉ FUTURE :
La priorité architecture n’est probablement plus :

```text id="r9m3vs"
ajouter des fonctionnalités
```

mais :

```text id="k2v6qa"
structurer
normaliser
découpler
typer
auditer
versionner
et sécuriser
la knowledge-base clinique
```

NIVEAU PRIORITÉ ARCHITECTURE :
CRITIQUE ABSOLUE

```
```

````text id="v8m4qs"
FUNCTION : generatePrescriptionCRC()

generatePrescriptionCRC() = orchestrateur central prescription AP PAP ; transforme clinical state structuré en prescription d’activité physique contextualisée ; véritable moteur prescription clinique déterministe ; point de convergence activités/supervision/orientation/sécurité/documentation ; fonction stratégique majeure architecture PAP. :contentReference[oaicite:0]{index=0}

ROLE :
Transformer prescriptionModel structuré en prescription AP lisible ; agréger activités physiques ; contextualiser supervision/orientation ; intégrer consentement/bilan/commentaires ; générer la prescription clinique finale.

INPUTS :
- prescriptionModel
- validatePrescriptionModel()
- model.activites
- orientationAPA
- formatDuree()
- formatFrequence()

STATE LU :
- prescriptionModel global
- activites[]
- orientationAPA
- supervision
- consentement
- bilan
- commentaires

STATE MODIFIÉ :
- aucun ;
- fonction quasi-pure ;
- dépendance globale prescriptionModel.

EFFETS DE BORD IDENTIFIÉS :
- dépendance prescriptionModel global ;
- dépendance validation ;
- logique prescription intégrée ;
- logique supervision intégrée ;
- logique orientation intégrée ;
- logique formulation linguistique intégrée ;
- logique activités intégrée ;
- logique consentement intégrée ;
- logique bilan intégrée.

OUTPUTS :
- prescription AP complète ;
- ordonnance AP ;
- synthèse supervision ;
- synthèse activités ;
- synthèse orientation ;
- synthèse consentement ;
- synthèse bilan souhaité.

DÉPENDANCES :
- validatePrescriptionModel()
- formatDuree()
- formatFrequence()
- prescriptionModel
- orientationAPA

SOUS-BLOCS IDENTIFIÉS :
- validation modèle ;
- validation activités ;
- moteur endurance ;
- moteur objectif pas ;
- moteur FITT ;
- moteur renforcement ;
- moteur souplesse ;
- moteur équilibre ;
- moteur intensité ;
- moteur fréquence ;
- moteur durée ;
- moteur supervision ;
- moteur orientation ;
- moteur encadrement ;
- moteur accompagnement ;
- moteur consentement ;
- moteur bilan ;
- moteur commentaire ;
- moteur agrégation linguistique ;
- moteur ordonnance finale.

POINTS IDENTIFIÉS :
- véritable moteur prescription AP ;
- activités déjà fortement structurées ;
- supervision déjà structurée ;
- orientation déjà structurée ;
- logique sécurité implicite ;
- logique accompagnement implicite ;
- logique supervision implicite ;
- logique limitations implicite ;
- logique adaptations implicite ;
- moteur relativement déterministe ;
- moteur explicable ;
- moteur audit-able ;
- forte séparation prescription vs renderer ;
- dépendance globale prescriptionModel ;
- logique renderer encore fusionnée ;
- logique formulation encore fusionnée ;
- logique supervision déjà avancée.

TYPE :
ORCHESTRATEUR CENTRAL PRESCRIPTION AP

POINT STRATÉGIQUE MAJEUR :
Cette fonction représente probablement :
```text id="q7v3kp"
le vrai moteur prescription PAP
````

car elle orchestre déjà :

* activités ;
* intensité ;
* fréquence ;
* durée ;
* supervision ;
* orientation ;
* accompagnement ;
* sécurité implicite ;
* consentement ;
* bilan.

POINT POSITIF MAJEUR :
Le moteur repose déjà sur :

```javascript id="m2q8vs"
activites structurées
```

et NON :

```text id="x5v4qa"
texte libre monolithique
```

=> énorme qualité architecture.

AUTRE POINT POSITIF MAJEUR :
La supervision est déjà :

* contextualisée ;
* explicite ;
* lisible ;
* déterministe ;
* non automatisée ;
* non opaque.

=> très fort point réglementaire.

POINT STRATÉGIQUE MAJEUR :
Le moteur sépare déjà implicitement :

```text id="r9m3qs"
state clinique
↓
prescription structurée
↓
rendu linguistique
```

=> excellente base future architecture modulaire.

POINT ARCHITECTURE IMPORTANT :
Le modèle activité est déjà remarquablement structuré :

```javascript id="k4v7mp"
categorie
mode
type
intensite
frequence
duree
objectif_pas
consignes_pas
```

=> quasiment déjà :

```text id="t8q2mv"
un vrai DSL clinique AP
```

(domain specific language)

POINT RÉGLEMENTAIRE MAJEUR :
Le moteur reste actuellement :

```text id="d6v8qa"
prescriptif humainement validé
```

et NON :

```text id="w3m9ks"
décisionnel autonome
```

car :

* aucune auto-orientation ;
* aucune auto-supervision ;
* aucune auto-interdiction ;
* aucune prescription automatique cachée.

=> excellent point réglementaire.

LIMITATION ARCHITECTURE ACTUELLE :
Le moteur mélange encore :

* logique prescription ;
* logique supervision ;
* logique orientation ;
* logique rendu ;
* logique linguistique ;
* logique sécurité implicite ;
* logique accompagnement.

LIMITATION STRUCTURELLE IMPORTANTE :
Le moteur dépend encore :

```text id="p5q7mv"
de formulations textuelles finales
```

et NON :

```text id="x2v4kp"
d’un output prescription structuré complet
```

RISQUES FUTURS :

* explosion IF/THEN ;
* explosion supervision ;
* explosion limitations ;
* explosion sécurité ;
* explosion médicaments ;
* explosion adaptations ;
* dette renderer ;
* dette formulation ;
* dette supervision ;
* dette sécurité AP.

POINT STRATÉGIQUE CRITIQUE :
La partie :

```javascript id="g8m4qa"
orientationAPA
```

montre déjà implicitement :

```text id="s6v2ks"
un futur moteur supervision clinique
```

car elle contient :

* accompagnement ;
* encadrement ;
* supervision ;
* consentement ;
* bilan ;
* contextualisation.

=> énorme évolution architecture.

POINT IMPORTANT :
Le moteur est déjà compatible :

* APA ;
* kiné ;
* ergo ;
* psychomot ;
* éducateur sportif ;
* autonomie.

=> architecture supervision très avancée.

ARCHITECTURE IMPLICITE ACTUELLE :

```text id="u4q9mp"
prescriptionModel
↓
generatePrescriptionCRC()
↓
prescription AP textuelle
↓
renderer ordonnance
```

ARCHITECTURE CIBLE FUTURE :

```text id="n7v3qa"
structuredPrescriptionContext
↓
supervision engine
↓
safety/vigilance engine
↓
prescription orchestration
↓
renderers
↓
ordonnance / PDF / DPI / JSON
```

ÉVOLUTION CIBLE FUTURE :

* séparation orchestration/rendu ;
* supervision structurée ;
* vigilance structurée ;
* limitations structurées ;
* adaptations structurées ;
* moteur médicaments ;
* moteur sécurité AP ;
* moteur progressivité ;
* longitudinal ;
* exports structurés ;
* compatibilité API ;
* compatibilité analytics ;
* compatibilité DPI.

STRUCTURE CIBLE FUTURE ENVISAGÉE :

```javascript id="f3m8vs"
{
  activites: [],
  supervision: {},
  limitations: [],
  vigilance: [],
  adaptations: [],
  consentement: {},
  bilan: {},
  commentaires: [],
  renderContext: {}
}
```

POINT STRATÉGIQUE GLOBAL AUDIT :
generatePrescriptionCRC() confirme définitivement que :

```text id="h5v2qp"
PAP possède déjà
un véritable moteur prescription AP structuré
```

et NON :

```text id="r8m4qa"
un simple générateur de texte ordonnance
```

CONCLUSION ARCHITECTURE :
Le pipeline réel PAP apparaît désormais clairement :

```text id="k2v7ms"
knowledge-base clinique
↓
clinicalModel
↓
prescriptionModel
↓
generatePrescriptionCRC()
↓
renderers
↓
documents
```

=> architecture déjà très proche :

* moteur clinique structuré ;
* moteur supervision ;
* moteur sécurité ;
* moteur prescription AP ;
* aide cognitive déterministe.

NIVEAU PRIORITÉ AUDIT / REFACTOR :
CRITIQUE ABSOLUE

```
```

````text id="t8m4qs"
==================================================
AUDIT MOTEUR SUPERVISION DYNAMIQUE — updateOrientationHelp()
==================================================

FUNCTION : updateOrientationHelp()

updateOrientationHelp() = placeholder architecture supervision/vigilance ; stub fonctionnel minimal ; zone d’extension future prévue ; probablement premier point prévu pour moteur aide cognitive temps réel. :contentReference[oaicite:0]{index=0}

CODE ACTUEL :
```javascript id="n4v7kp"
function updateOrientationHelp() {

  const helpContent =
    document.getElementById(
      "orientation_help_content"
    );

  if (!helpContent) return;

  helpContent.innerHTML =
    "Aucun point particulier identifié.";
}
````

==================================================
ROLE ACTUEL
===========

ROLE RÉEL ACTUEL :

* vérifier présence container aide ;
* injecter message neutre ;
* maintenir compatibilité UI ;
* fournir point d’accroche architecture futur.

ACTUELLEMENT :

* aucune logique clinique ;
* aucune supervision ;
* aucune vigilance ;
* aucune contextualisation ;
* aucune analyse ;
* aucune recommandation ;
* aucune adaptation ;
* aucune règle métier ;
* aucune lecture PATHO_DATA ;
* aucune lecture clinicalModel ;
* aucune lecture prescriptionModel.

TYPE ACTUEL :

```text id="u5m2qa"
stub / placeholder architecture
```

==================================================
POINT STRATÉGIQUE MAJEUR
========================

Découverte architecture importante :

```text id="h7v3ms"
la supervision dynamique
n’est PAS encore implémentée
```

Donc actuellement :

* PAS de moteur supervision caché ;
* PAS de moteur décisionnel implicite ;
* PAS de règles automatiques silencieuses ;
* PAS de moteur vigilance opaque ;
* PAS d’aide cognitive dynamique automatique.

=> excellent point réglementaire.

==================================================
CONSÉQUENCE MAJEURE AUDIT
=========================

Cela confirme que :

```text id="x4m8qs"
PAP reste actuellement :
principalement déterministe
et piloté par l’utilisateur
```

et NON :

```text id="r5v2qa"
par un moteur décisionnel automatique caché
```

Très important :

* réglementairement ;
* architecturellement ;
* juridiquement.

==================================================
POINT POSITIF MAJEUR
====================

Le projet possède :

```text id="q8m4vp"
un emplacement architecture déjà prévu
```

pour futur :

* supervision ;
* vigilance ;
* aide cognitive ;
* recommandations contextuelles ;
* limitations ;
* sécurité AP ;
* orientation dynamique.

=> excellente anticipation architecture.

==================================================
POINT STRATÉGIQUE IMPORTANT
===========================

Le bloc UI existe déjà :

```html id="m3v7ks"
orientation_help_block
orientation_help_content
```

Donc :

```text id="w6q2mp"
la future aide cognitive supervision
dispose déjà :
- d’un point d’ancrage UI ;
- d’un pipeline ;
- d’un espace renderer dédié.
```

Très bon point architecture.

==================================================
ARCHITECTURE IMPLICITE FUTURE IDENTIFIÉE
========================================

La fonction semble prévue pour évoluer vers :

```text id="k2v9qa"
PATHO_DATA
+
clinicalModel
+
limitations
+
traitements
+
fragilité
+
symptômes
↓
updateOrientationHelp()
↓
signaux supervision
↓
vigilance
↓
limitations
↓
adaptations
↓
messages aide cognitive UI
```

=> probablement futur moteur supervision temps réel.

==================================================
POINT RÉGLEMENTAIRE TRÈS IMPORTANT
==================================

Le fait que :

```text id="p5m8vs"
la supervision dynamique
ne soit PAS encore automatisée
```

constitue actuellement :

```text id="s7v3kp"
une protection réglementaire majeure
```

car :

* pas d’automatisation décisionnelle ;
* pas de scoring supervision ;
* pas d’orientation automatique ;
* pas de règles invisibles ;
* pas de recommandation imposée ;
* pas de triage automatique.

=> parfaitement cohérent :

* aide cognitive ;
* non-DM ;
* supervision humaine.

==================================================
POINT ARCHITECTURE IMPORTANT
============================

Le projet semble suivre actuellement :

```text id="r4m2qa"
supervision explicite manuelle
```

et NON :

```text id="y8v7mp"
supervision algorithmique implicite
```

Très bon choix stratégique.

==================================================
LIMITATIONS ACTUELLES
=====================

LIMITATION 1 :
Aucune aide dynamique réelle.

LIMITATION 2 :
Aucune contextualisation supervision.

LIMITATION 3 :
Aucune synthèse limitations.

LIMITATION 4 :
Aucune intégration PATHO_DATA.

LIMITATION 5 :
Aucune vigilance traitement/pathologie.

LIMITATION 6 :
Aucune adaptation temps réel.

==================================================
ÉVOLUTION FUTURE POSSIBLE
=========================

La fonction pourrait évoluer vers :

* synthèse limitations ;
* signaux vigilance ;
* supervision suggérée ;
* adaptations proposées ;
* points sécurité ;
* aide contextualisée ;
* recommandations HAS ;
* progressivité ;
* surveillance symptômes ;
* interactions traitements/AP ;
* orientation supervision ;
* synthèse fragilité.

==================================================
IMPORTANT — CONTRAINTE RÉGLEMENTAIRE FUTURE
===========================================

Toute évolution future devra impérativement rester :

```text id="c3m8vp"
explicable
déterministe
audit-able
non automatique
non prescriptive
non opaque
```

La fonction devra :

* proposer ;
* contextualiser ;
* alerter ;
* aider ;

et NON :

* décider ;
* imposer ;
* scorer ;
* automatiser.

==================================================
EXEMPLE D’ÉVOLUTION COMPATIBLE
==============================

COMPATIBLE :

```text id="n7v4qs"
“Présence d’une neuropathie périphérique :
activité à faible risque traumatique à considérer.”
```

NON COMPATIBLE :

```text id="g2m9qa"
“Orientation automatique kinésithérapie obligatoire.”
```

==================================================
POINT STRATÉGIQUE GLOBAL
========================

Cette découverte confirme que :

```text id="u4v8mp"
PAP reste actuellement :
un moteur aide cognitive structuré
et NON
un moteur décisionnel autonome
```

=> énorme point positif stratégique.

==================================================
CONCLUSION AUDIT
================

updateOrientationHelp() est actuellement :

* un placeholder supervision ;
* un stub architecture ;
* une zone d’extension future ;
* un point d’ancrage UI stratégique.

POINT MAJEUR :
La supervision dynamique :

* n’est PAS encore implémentée ;
* n’est PAS cachée ;
* n’est PAS automatisée.

=> excellent point réglementaire et architecture.

POINT STRATÉGIQUE :
Le projet possède néanmoins déjà :

* le point d’ancrage ;
* le pipeline ;
* le renderer ;
* l’espace UI ;
* la logique future potentielle.

=> excellente anticipation architecture.

NIVEAU PRIORITÉ :
IMPORTANT MAIS NON CRITIQUE

```
```

````text id="m8v4qs"
==================================================
AUDIT SCHÉMA DONNÉES PRESCRIPTION — prescriptionModel
==================================================

VARIABLE : prescriptionModel

prescriptionModel = état canonique prescription AP PAP ; modèle clinique central spécialisé prescription ; véritable DSL clinique AP implicite ; noyau structuration activités/supervision/objectifs/limitations ; composant stratégique majeur architecture PAP. :contentReference[oaicite:0]{index=0}

CODE IDENTIFIÉ :
```javascript id="t7m3kp"
let prescriptionModel = createPrescriptionModel();

prescriptionModel.activites.push({
  categorie: "endurance",

  type: "Marche rapide",

  duree: {
    valeur: 20
  },

  frequence: {
    valeur: 4
  }
});
````

==================================================
POINT MAJEUR IMMÉDIAT
=====================

Découverte architecture très importante :

```text id="x4m8qs"
prescriptionModel
n’est PAS un simple objet brut
```

mais :

```text id="r5v2qa"
un modèle construit via factory
```

grâce à :

```javascript id="q8m4vp"
createPrescriptionModel()
```

=> énorme qualité architecture.

==================================================
CONSÉQUENCE ARCHITECTURE MAJEURE
================================

Cela signifie que PAP possède déjà implicitement :

```text id="h7v3ms"
un schéma canonique prescription centralisé
```

et NON :

```text id="u5m2qa"
des objets ad hoc dispersés
```

Très important pour :

* cohérence ;
* validation ;
* évolutivité ;
* migrations ;
* normalisation ;
* compatibilité future.

==================================================
POINT STRATÉGIQUE MAJEUR
========================

Le moteur prescription repose déjà sur :

```text id="w6q2mp"
un state prescription structuré
```

et NON :

```text id="k2v9qa"
du texte libre concaténé
```

=> architecture beaucoup plus avancée que prévu.

==================================================
DSL CLINIQUE AP IDENTIFIÉ
=========================

Le modèle activité :

```javascript id="p5m8vs"
{
  categorie,
  type,
  duree,
  frequence
}
```

constitue déjà implicitement :

```text id="s7v3kp"
un DSL clinique AP
```

(domain specific language)

POINT MAJEUR :
Les activités sont :

* typées ;
* structurées ;
* normalisées ;
* indépendantes du renderer ;
* indépendantes du texte final.

=> énorme point architecture.

==================================================
POINTS FORTS IDENTIFIÉS
=======================

POINT FORT 1 :
Factory centralisée :

```javascript id="r4m2qa"
createPrescriptionModel()
```

=> excellente pratique architecture.

POINT FORT 2 :
Modèle activités structuré.

POINT FORT 3 :
Séparation :

```text id="y8v7mp"
state
≠
renderer
≠
texte final
```

POINT FORT 4 :
Compatible :

* validation ;
* typage ;
* export ;
* analytics ;
* longitudinal ;
* moteur supervision ;
* moteur médicaments futur.

POINT FORT 5 :
Très bonne compatibilité :

```text id="c3m8vp"
future architecture modulaire
```

==================================================
POINT ARCHITECTURE TRÈS IMPORTANT
=================================

Le fait que :

```javascript id="n7v4qs"
createPrescriptionModel()
```

existe déjà signifie probablement :

* initialisation contrôlée ;
* valeurs par défaut ;
* schéma stable ;
* structure canonique ;
* prévention incohérences ;
* point unique évolution modèle.

=> très grosse qualité technique.

==================================================
CONSÉQUENCE AUDIT GLOBALE
=========================

L’architecture réelle PAP apparaît maintenant clairement :

```text id="g2m9qa"
PATHO_DATA
↓
knowledge-base clinique

buildClinicalModel()
↓
state clinique global

prescriptionModel
↓
state prescription structuré

generatePrescriptionCRC()
↓
orchestration prescription

renderers
↓
documents
```

=> architecture déjà très mature.

==================================================
POINT STRATÉGIQUE CRITIQUE
==========================

Le projet possède désormais clairement :

```text id="u4v8mp"
3 couches distinctes
```

1. KNOWLEDGE LAYER

```text id="n6q4mv"
PATHO_DATA
```

2. CLINICAL STATE LAYER

```text id="m7v2pk"
clinicalModel
prescriptionModel
```

3. RENDER LAYER

```text id="k3m7pv"
renderers
documents
CRC
```

=> énorme découverte architecture.

==================================================
LIMITATION AUDIT ACTUELLE
=========================

On ne voit PAS encore :

```javascript id="t8q2mv"
createPrescriptionModel()
```

Donc inconnues restantes :

* structure complète ;
* valeurs défaut ;
* profondeur schéma ;
* orientation ;
* limitations ;
* recommandations ;
* supervision ;
* consentement ;
* bilan ;
* metadata.

==================================================
POINT IMPORTANT
===============

Le fait que :

```javascript id="d6v8qa"
prescriptionModel.activites.push()
```

soit utilisé montre que :

* modèle mutable ;
* state central mutable ;
* absence immutabilité ;
* absence reducer/state manager.

=> classique ;
=> acceptable ;
=> mais future dette possible.

==================================================
RISQUES FUTURS IDENTIFIÉS
=========================

RISQUES :

* mutations multiples ;
* side-effects ;
* dette synchronisation ;
* dette dirty-state ;
* incohérences ;
* dette listeners ;
* dette renderer/state coupling.

RISQUE PRINCIPAL :

```text id="w3m9ks"
mutation globale implicite
```

et NON :

```text id="p5q7mv"
knowledge-base
```

==================================================
ÉVOLUTION FUTURE POSSIBLE
=========================

Architecture cible envisageable :

```javascript id="x2v4kp"
const prescriptionModel = {
  activites: [],
  objectifs: [],
  limitations: [],
  supervision: {},
  vigilance: {},
  adaptations: [],
  consentement: {},
  metadata: {}
};
```

Puis :

```text id="g8m4qa"
validation stricte
+
typing
+
factory
+
versioning
```

==================================================
POINT RÉGLEMENTAIRE IMPORTANT
=============================

Le moteur reste :

```text id="s6v2ks"
structuré mais déterministe
```

et NON :

```text id="u4q9mp"
autonome ou opaque
```

Très important :

* explicabilité ;
* auditabilité ;
* supervision humaine ;
* compatibilité aide cognitive.

==================================================
CONCLUSION AUDIT
================

prescriptionModel confirme définitivement que :

```text id="n7v3qa"
PAP possède déjà
une vraie architecture state-based
```

et NON :

```text id="f3m8vs"
un simple générateur texte
```

POINT MAJEUR :
Le projet possède déjà :

* knowledge-base ;
* state clinique ;
* state prescription ;
* orchestration ;
* renderers ;
* supervision implicite ;
* moteur AP structuré.

=> architecture beaucoup plus avancée que prévu.

POINT IMPORTANT :
La présence de :

```javascript id="h5v2qp"
createPrescriptionModel()
```

constitue probablement :

```text id="r8m4qa"
une des meilleures décisions architecture du projet
```

NIVEAU PRIORITÉ :
CRITIQUE MAIS STRUCTURE SAINE

```
```

````text id="u8m4qs"
==================================================
AUDIT FACTORY PRESCRIPTION — createPrescriptionModel()
==================================================

FUNCTION : createPrescriptionModel()

createPrescriptionModel() = factory canonique prescription PAP ; point central initialisation state prescription ; mécanisme de clonage sécurisé ; composant critique stabilité architecture ; très forte maturité technique implicite. :contentReference[oaicite:0]{index=0}

CODE IDENTIFIÉ :
```javascript id="q7v3kp"
function createPrescriptionModel() {
  return structuredClone(DEFAULT_PRESCRIPTION_MODEL);
}
````

==================================================
DÉCOUVERTE ARCHITECTURE MAJEURE
===============================

Très grosse découverte audit :

```text id="m2q8vs"
PAP possède déjà
un vrai modèle canonique centralisé
```

via :

```javascript id="x5v4qa"
DEFAULT_PRESCRIPTION_MODEL
```

et :

```javascript id="r9m3qs"
structuredClone()
```

=> énorme qualité architecture.

==================================================
POINT STRATÉGIQUE MAJEUR
========================

Le projet possède déjà implicitement :

```text id="k4v7mp"
un schéma prescription maître
```

et NON :

```text id="t8q2mv"
des objets créés dynamiquement au hasard
```

=> très grosse maturité architecture.

==================================================
POINT TECHNIQUE TRÈS IMPORTANT
==============================

Utilisation :

```javascript id="d6v8qa"
structuredClone()
```

=> excellente décision technique.

Cela signifie :

* clonage profond ;
* isolation instances ;
* prévention mutations croisées ;
* stabilité state ;
* sécurité structure ;
* prévention partage références.

Très bon niveau technique.

==================================================
CONSÉQUENCE ARCHITECTURE GLOBALE
================================

L’architecture réelle PAP apparaît désormais clairement :

```text id="w3m9ks"
DEFAULT_PRESCRIPTION_MODEL
↓
createPrescriptionModel()
↓
prescriptionModel
↓
buildClinicalModel()
↓
generatePrescriptionCRC()
↓
renderers
↓
documents
```

=> véritable architecture state-based structurée.

==================================================
POINT MAJEUR AUDIT
==================

Le projet possède maintenant clairement :

* knowledge-base clinique ;
* state clinique ;
* state prescription ;
* factory centralisée ;
* orchestration ;
* renderers ;
* supervision implicite ;
* moteur AP structuré.

=> très loin d’un simple générateur HTML.

==================================================
POINT POSITIF MAJEUR
====================

La séparation :

```text id="p5q7mv"
DEFAULT MODEL
≠
INSTANCE ACTIVE
```

constitue :

```text id="x2v4kp"
une excellente pratique architecture
```

Très forte scalabilité future.

==================================================
POINT STRATÉGIQUE IMPORTANT
===========================

Cela signifie que PAP peut probablement évoluer vers :

* versioning modèles ;
* migrations ;
* validation stricte ;
* persistence ;
* export/import ;
* longitudinal ;
* historique ;
* templates ;
* presets cliniques ;
* compatibilité API.

==================================================
LIMITATION AUDIT ACTUELLE
=========================

Le vrai schéma complet reste encore :

```text id="g8m4qa"
dans DEFAULT_PRESCRIPTION_MODEL
```

Donc :

* structure exacte encore inconnue ;
* profondeur réelle inconnue ;
* champs supervision inconnus ;
* champs limitations inconnus ;
* champs consentement inconnus ;
* champs vigilance inconnus.

Mais :

```text id="s6v2ks"
l’architecture générale est maintenant claire
```

==================================================
POINT RÉGLEMENTAIRE IMPORTANT
=============================

Le moteur reste :

```text id="u4q9mp"
déterministe
explicable
audit-able
non opaque
```

Le state :

* est visible ;
* est structuré ;
* est inspectable ;
* est traçable.

=> énorme avantage réglementaire.

==================================================
POINT TECHNIQUE IMPORTANT
=========================

Le fait que :

```javascript id="n7v3qa"
createPrescriptionModel()
```

soit :

* minuscule ;
* pure ;
* centralisée ;
* dédiée ;

constitue :

```text id="f3m8vs"
une très bonne architecture foundation
```

==================================================
RISQUES FUTURS IDENTIFIÉS
=========================

RISQUE PRINCIPAL FUTUR :

```text id="h5v2qp"
DEFAULT_PRESCRIPTION_MODEL gigantesque
```

avec accumulation future :

* supervision ;
* vigilance ;
* limitations ;
* médicaments ;
* adaptations ;
* sécurité ;
* longitudinal ;
* analytics ;
* métadonnées.

=> risque futur :

```text id="r8m4qa"
monolithe state clinique
```

==================================================
ÉVOLUTION FUTURE POSSIBLE
=========================

Architecture cible envisageable :

```javascript id="k2v7ms"
DEFAULT_PRESCRIPTION_MODEL = {
  patient: {},
  activites: [],
  objectifs: [],
  supervision: {},
  limitations: [],
  vigilance: [],
  traitements: {},
  adaptations: [],
  metadata: {}
}
```

Puis :

* validation stricte ;
* typing ;
* versioning ;
* migrations ;
* exports structurés.

==================================================
POINT STRATÉGIQUE GLOBAL AUDIT
==============================

La combinaison :

```text id="n6q4mv"
PATHO_DATA
+
clinicalModel
+
prescriptionModel
+
createPrescriptionModel()
+
generatePrescriptionCRC()
```

confirme définitivement que :

```text id="m7v2pk"
PAP possède déjà
une architecture clinique state-based complète
```

et NON :

```text id="k3m7pv"
un simple générateur documentaire
```

==================================================
CONCLUSION AUDIT
================

createPrescriptionModel() confirme :

* existence state canonique ;
* existence modèle maître ;
* architecture scalable ;
* architecture modulaire implicite ;
* très bonne base technique ;
* très bonne séparation structure/instance.

POINT MAJEUR :
L’architecture fondamentale PAP est :

```text id="t8m4pk"
beaucoup plus mature
et beaucoup plus saine
que prévu initialement
```

POINT STRATÉGIQUE :
La priorité future n’est probablement plus :

```text id="h6v9qa"
“refaire l’architecture”
```

mais :

```text id="u4m7qs"
structurer
découpler
normaliser
sécuriser
et faire évoluer
une architecture déjà très solide
```

==================================================
FIN AUDIT PROFOND — ARCHITECTURE PAP
====================================

NIVEAU PRIORITÉ :
AUDIT MAJEUR TERMINÉ

```
```
# POST-AUDIT ARCHITECTURE FINDINGS — PHASE 2

## 1. Découverte architecture majeure

L’analyse approfondie des pipelines réels PAP confirme que le système possède déjà implicitement une architecture clinique multi-couches structurée.

Architecture observée :

UI / DOM
↓
buildClinicalModel()
↓
clinicalModel
↓
renderers spécialisés
↓
documents multi-sorties

Les renderers identifiés :

* renderLongLetterV2()
* renderParagraphVersion()
* renderMedicalRecord()
* renderPatientVersion()
* renderOrdonnanceAP()

Le système doit désormais être considéré comme :

* knowledge-driven ;
* state-based ;
* renderer-oriented ;
* multi-output ;
* déterministe ;
* explicable ;
* compatible supervision humaine ;
* compatible aide cognitive structurée.

La PHASE 2 ne correspond donc PAS à une reconstruction architecture mais à une orchestration explicite d’une architecture déjà partiellement émergente.

## 2. Orchestrateur documentaire identifié

renderActiveMode() est désormais identifié comme orchestrateur documentaire central.

Responsabilités observées :

* sélection du renderer actif ;
* orchestration multi-sorties ;
* gestion preview ;
* gestion conversion texte ;
* gestion export ;
* gestion mode actif.

Pipeline observé :

renderActiveMode()
↓
renderer spécialisé
↓
sous-blocs cliniques
↓
HTML / texte

Conséquence architecture :

Les renderers PAP sont déjà spécialisés et relativement découplés.
Le principal problème architecture ne réside pas dans les renderers eux-mêmes mais dans les sous-moteurs hybrides cliniques/documentaires.

## 3. Moteurs hybrides critiques identifiés

Les composants suivants sont désormais identifiés comme moteurs hybrides critiques :

* buildPrescription()
* buildCRCPathoBloc()
* buildDecisionBloc()

Ces composants mélangent actuellement :

* logique clinique ;
* contextualisation ;
* accès knowledge layer ;
* accès DOM ;
* logique ressources ;
* logique patient/médecin ;
* génération documentaire ;
* rendu HTML/texte.

Conséquence :

La dette architecture principale PAP est désormais identifiée comme :

contextualisation clinique/documentaire dispersée.

Et NON :

* monolithe HTML ;
* absence de modularité renderer ;
* absence de framework ;
* absence de composants UI.

## 4. PATHO_DATA reconnu comme knowledge layer implicite

L’analyse de buildCRCPathoBloc() confirme que PATHO_DATA constitue déjà un knowledge layer clinique implicite.

PATHO_DATA contient déjà :

* recommandations contextualisées ;
* ressources CRC ;
* éléments pathologies ;
* contextualisation documentaire.

Conséquence architecture :

La PHASE 2 ne doit PAS recréer un moteur de connaissance clinique.

Le besoin principal est désormais :

computeClinicalContext()

comme couche d’orchestration et de contextualisation centralisée entre :

knowledge layer
↓
renderers

## 5. Positionnement validé de computeClinicalContext()

Positionnement cible validé :

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
documents

computeClinicalContext() doit progressivement centraliser :

* vigilance ;
* adaptations ;
* supervision ;
* recommandations ;
* ressources ;
* documents patients ;
* QR resources ;
* outils médecin ;
* modules formation.

Règle architecture validée :

computeClinicalContext() = orchestration contextuelle.

computeClinicalContext() ≠ moteur décisionnel.

computeClinicalContext() ≠ renderer.

computeClinicalContext() ≠ automatisation clinique.

## 6. Stratégie PHASE 2 validée

La stratégie PHASE 2 validée est :

orchestration progressive
et NON
refonte massive.

Principes validés :

* absence de big rewrite ;
* absence de frameworkisation prématurée ;
* migration incrémentale ;
* préservation pipeline clinique existant ;
* préservation renderers existants ;
* préservation DSR ;
* préservation déterminisme ;
* human-in-the-loop by design.

La migration doit être réalisée sous forme de surcouche progressive et non de remplacement des pipelines existants.

