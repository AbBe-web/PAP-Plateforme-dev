PROTOCOLE DE STABILITÉ CLINIQUE PAP
Projet : Plateforme de Pré-consultation Activité Physique (PAP). Version : v2.0 — Architecture modulaire
1/ Objectif du contrat : Garantir : stabilité clinique, cohérence des données échangées, fiabilité technique de la plateforme ; Tout en permettant : les améliorations UX, les améliorations techniques, l’évolution du modèle de données. Ce contrat s’applique à toute modification du projet PAP.
2/ Architecture actuelle du projet : Le projet est constitué de modules indépendants. Structure de référence :
PAP-Plateforme/
├── assets/
│   └── icons/
│       ├── .gitkeep
│       ├── icon-192.png
│       └── icon-512.png
│
├── core/
│   ├── clinical-context/
│   │   ├── computeClinicalContext.js
│   │   ├── context-schema.js
│   │   ├── context-utils.js
│   │   ├── README.md
│   │   └── resource-registry.js
│   │
│   ├── prescriptionModel.js
│   ├── prescriptionRenderer.js
│   ├── prescriptionSync.js
│   └── prescriptionUtils.js
│
├── css/
│   └── style-global.css
│
├── docs/
│   ├── ARCHITECTURE_AUDIT_2026.md
│   ├── ARCHITECTURE_REFERENCE.md
│   ├── PAP_ARCHITECTURE_MAP_V1.md
│   ├── PAP_PHASE2_TECHNICAL_ROADMAP.md
│   ├── PAP_PRODUCT_ARCHITECTURE_V2.md
│   └── PAP_SPRINT1_IMPLEMENTATION_MAP.md
│
├── medecin/
│   └── generateur-crc/
│       ├── index.html
│       ├── premiere-utilisation.html
│       ├── referentiel-clinique-pap.pdf
│       └── reset.js
│
├── patient/
│   └── auto-evaluation/
│       ├── index.html
│       ├── print.html
│       └── politique-confidentialite.html
│
├── shared/
│   ├── pap-data-model.js
│   └── pap-json-utils.js
│
├── ARCHITECTURE.md
├── LICENSE
├── PAP_CLINICAL_LOGIC_FOUNDATIONS.md
├── PROTOCOLE_DSR_PAP.md
├── README.md
├── index.html
├── manifest.json
└── sw.js

Modules
Module patient : Auto-évaluation d’activité physique. patient/auto-evaluation/
Module médecin : Générateur de compte-rendu de consultation. medecin/generateur-crc/
Ressource partagée : CSS/style-global.css
3/ Principe d’indépendance des modules : Les deux modules sont fonctionnellement indépendants. Flux prévu : Patient → auto-évaluation → JSON, JSON → transfert (QR / mail / copier), Médecin → générateur CRC. Aucun échange technique direct n’est requis entre les modules. Toute évolution vers une intégration directe devra faire l’objet d’une décision explicite.
4/ Éléments STRICTEMENT GELÉS : Les éléments suivants ne peuvent être modifiés sans demande explicite.
4A. Logique clinique : Les principes suivants sont considérés comme validés.
Questionnaires utilisés : GPAQ (OMS), Questionnaire de Marshall, Comptage de pas (si disponible)
Calculs : MET-minutes/semaine pour GPAQ, classification du niveau d’activité : Classification GPAQ (très actif, moyennement actif, insuffisamment actif), Classification Marshall (suffisamment actif, insuffisamment actif), Stade motivationnel (Logique : actif → action ou consolidation, inactif → préparation / intention / indétermination), Évaluation motivationnelle complémentaires : Deux EVA : importance (0–10), confiance (0–10).
4B. Ordre logique des étapes (auto-évaluation) : L’ordre suivant est intangible : 1 Évaluation activité physique, 2 Stade motivationnel, 3 EVA importance, 4 EVA confiance
4C. Données cliniques fondamentales : Les données suivantes doivent toujours être présentes dans les résultats : niveau d’activité, MET-minutes/semaine (si GPAQ), nombre de pas (si disponible), stade motivationnel, EVA importance, EVA confiance, commentaires éventuels. La manière dont elles sont stockées peut évoluer, mais **leur présence ne peut être supprimée**.
4D. Intention fonctionnelle : L’outil patient respecte les principes suivants : aucune création de compte, aucune base de données, aucune conservation de données, données conservées uniquement localement pendant la session. Les résultats sont destinés à être : apportés en consultation, transférés volontairement par le patient.
4E. Statut RGPD de la plateforme : La plateforme PAP est conçue comme un outil sans traitement de données personnelles au sens du RGPD. Aucune donnée n’est : stockée, transmise automatiquement, conservée sur serveur. Les données générées sont sous le contrôle exclusif de l’utilisateur. En cas de transmission à un professionnel de santé, ce dernier devient responsable du traitement au sens du RGPD.Les données patient ne sont pas conservées.
Les coordonnées médecin peuvent être enregistrées uniquement localement sur l’appareil de l’utilisateur, si celui-ci l’active, afin de préremplir les documents. Aucune donnée n’est transmise à un serveur. Une option de suppression/réinitialisation doit être prévue.
NB : Interdiction : aucun cookie de tracking, aucun outil d’analyse tiers (Google Analytics, etc.), aucun appel externe collectant des données. Les fonctionnalités de transfert (QR code, export JSON, copie, mail) sont déclenchées uniquement à l’initiative explicite de l’utilisateur. La plateforme n’effectue aucun envoi automatique. L’installation de la plateforme comme application (PWA) ne modifie pas les principes de non-stockage et de non-transmission des données.
5/ Éléments NON GELÉS (évolution autorisée) : Les éléments suivants peuvent évoluer librement tant que la logique clinique reste intacte.
5A. Architecture technique : Peuvent évoluer : structure des fichiers, organisation du code, modularisation, factorisation, ajout de scripts, ajout de bibliothèques.
5B. Interface utilisateur (UX) : Sont autorisés : amélioration des écrans, amélioration des textes, amélioration de la navigation, amélioration de la lisibilité.
5C. CSS : Le CSS commun peut évoluer pour : corriger des bugs d’affichage, améliorer l’ergonomie, améliorer la compatibilité mobile. 
5D. Modèle de données : La structure exacte du JSON peut évoluer. Cependant : les données cliniques fondamentales doivent rester présentes. L’évolution du **clinicalModel du générateur CRC** est autorisée.
6/ Règle spécifique — CSS partagé. Le fichier CSS partagé (CSS/style-global.css) constitue une dépendance globale.. Toute anomalie d’interface doit vérifier dans cet ordre : 1 CSS commun, 2 CSS local, 3 HTML, 4 JavaScript. Une modification JS ne doit pas être réalisée si la cause provient du CSS.
7/ Interdictions sans validation explicite. Sont interdits : modification des seuils GPAQ, modification des calculs MET, modification de la logique motivationnelle, suppression d’une donnée clinique fondamentale, suppression d’une étape du parcours patient, ajout de stockage de données persistantes.
8/ Livraison du code : Lorsqu’une modification est réalisée : le code fourni doit : être complet, être exécutable, remplacer entièrement le fichier précédent. Les extraits partiels peuvent être fournis uniquement pour indiquer la modification à réaliser, mais la version finale livrée doit toujours permettre de reconstruire un fichier complet fonctionnel.: par exemple, zone de code exacte à supprimer, zones précédente et suivante de cette zone indiquées pour faciliter le repérage. 
8 bis/ Règle d’ancrage obligatoire : Toute modification doit être fournie avec un repère exact dans le fichier afin d’éviter toute ambiguïté. Chaque modification doit obligatoirement indiquer : le fichier concerné, un repère unique présent dans le code (ligne ou fragment exact), le code avant modification, le code après modification. Toute instruction du type : « ajouter dans DOMContentLoaded », 
« ajouter plus bas dans le script », « placer après le bouton » est considérée comme insuffisante.
8 ter/ Principe de modification minimale. Lorsqu’une modification est proposée : ne pas réécrire le fichier entier, ne modifier que les lignes strictement nécessaires, ne jamais déplacer des blocs existants sauf instruction explicite.
8 quater/ Obligation d’indication de position exacte : Toute modification doit préciser explicitement : « Ajouter AVANT la ligne :  » ou « Ajouter APRÈS la ligne :  » ou « Remplacer le bloc suivant :  » avec le code exact à rechercher. Toute réponse ne respectant pas cette structure est considérée comme non conforme au contrat de gel.
9/ Intégrité d’exécution. Tout code livré doit respecter :aucune fonction manquante, aucun bouton inactif, aucun écran sans sortie, aucune erreur console bloquante. 
10/ Validation incrémentale : Chaque modification est réalisée « une par une », Processus : 1 modification, 2 test, 3 validation utilisateur, 4 modification suivante. Aucune modification supplémentaire n’est intégrée avant validation.
11/ Version de référence : Toute modification doit partir de la dernière version validée. La livraison doit contenir : la version complète, uniquement la modification demandée.
12/ Règle fondamentale. Principe cardinal : Si ce n’est pas explicitement demandé, ce n’est pas modifié.
13/ Compatibilité avec le protocole DSR : Le présent contrat est compatible avec le : PROTOCOLE DSR PAP (Debug Sans Régression). Toute correction de bug doit respecter simultanément : le DSR, le présent contrat de gel.
14/ addendum 23/4/2026
• Architecture future officiellement multi-entrée : (1) générateur CRC complet, (2) consultation rapide, (3) plateforme ressources, (4) formation.
•	Architecture modulaire renforcée : chaque mode doit pouvoir évoluer sans casser les autres modules.
•	Logique import/export JSON étendue : QR patient + futur import JSON manuel + futur import JSON IA facultatif.
•	Pré-remplissage automatique autorisé uniquement pour données d’entrée (jamais décision clinique automatique).
•	Stockage local navigateur autorisé uniquement pour préférences utilisateur non cliniques (localStorage).
•	Bouton reset consultation = fonctionnalité standard autorisée.
•	Bloc ordonnance automatisée éventuel = module séparé activable/désactivable sans impacter le cœur PAP.
# 15/ Addendum — Architecture applicative et gestion d’état
## 15A. Principe de source unique de vérité
Toute consultation active doit reposer sur une source d’état identifiable et cohérente. Les données du formulaire constituent la source de vérité clinique de la consultation en cours. Le compte-rendu généré (CRC) ne constitue jamais une source de vérité indépendante. Toute donnée affichée dans le CRC doit pouvoir être reconstruite à partir des données cliniques courantes. 
## 15B. Synchronisation CRC
Toute modification des données du formulaire après génération du CRC doit :
* soit invalider explicitement le CRC généré,
* soit déclencher une régénération contrôlée du CRC.
Un CRC ne doit jamais rester affiché comme valide après modification des données sources sans mécanisme explicite de synchronisation.
## 15C. Interdiction des états dupliqués implicites
La duplication non contrôlée des données cliniques est interdite. Une même donnée clinique ne doit pas être stockée simultanément dans plusieurs variables indépendantes sans mécanisme explicite de synchronisation. Les états implicites, cachés ou dépendants uniquement du DOM doivent être évités.
## 15D. Architecture des modules JavaScript
Tout nouveau module dynamique doit idéalement pouvoir fournir :
* une logique d’initialisation,
* une logique de reset,
* une logique de synchronisation d’état,
* une logique de nettoyage.
Les listeners doivent être :
* centralisés,
* nommés,
* attachés une seule fois à l’initialisation.
Les listeners imbriqués ou recréés à répétition doivent être évités sauf nécessité documentée.
## 15D bis/ Cycle de vie UI et stabilité des renderers
Toute fonction JavaScript doit être explicitement identifiable comme appartenant à l’une des catégories suivantes : initialisation unique (bootstrap) ; rendu/rerender ; synchronisation d’état ; interaction utilisateur ; logique documentaire ; logique clinique. Les fonctions d’initialisation unique ne doivent être exécutées qu’une seule fois au chargement de l’application. Les fonctions de rendu/rerender doivent pouvoir être rappelées sans : duplication de listeners ; accumulation d’états UI implicites ; création d’effets secondaires non contrôlés ; réinitialisation involontaire d’états documentaires. Les listeners JavaScript doivent être : attachés une seule fois lorsque possible ; explicitement rerender-safe si recréés ; centralisés et identifiables. Les fonctions de rendu ne doivent pas : réattacher silencieusement des listeners globaux ; déclencher des mutations cliniques implicites ; modifier des états applicatifs non liés au rendu ; provoquer des boucles indirectes de rerender. Les états documentaires, états UI et états cliniques doivent rester séparés autant que possible. Les composants documentaires éditables (textarea documentaire, exports, versions imprimables) ne doivent jamais devenir des sources de vérité clinique.
Toute correction de bug impliquant : rerender ; listeners ; synchronisation UI ; gestion documentaire ; affichage dynamique ; doit privilégier : 1. identification du cycle d’appel réel ; 2. cartographie des listeners concernés ; 3. validation des responsabilités des fonctions impliquées ; avant toute correction incrémentale.
## 15E. Règles de génération du CRC
Le CRC doit être généré à partir des données cliniques courantes via une fonction de génération identifiable. Les modifications incrémentales directes du texte généré (append, concaténation partielle non reconstruite, patch DOM localisé) doivent être évitées. La reconstruction complète du CRC est privilégiée.
## 15F. Règles CSS et affichage dynamique
Les mécanismes d’affichage dynamique doivent privilégier les classes CSS dédiées. L’utilisation simultanée de plusieurs mécanismes concurrents de visibilité (display inline + classes hidden + styles JS multiples) doit être évitée. Les sélecteurs CSS fortement couplés à la structure DOM (nth-of-type complexes, dépendances implicites profondes) doivent être limités.
## 15G. Compatibilité évolutive
Toute évolution technique doit préserver la compatibilité future avec :
* import/export JSON,
* préremplissage de consultation,
* architecture multi-entrée,
* consultation rapide,
* modules optionnels indépendants,
* IA facultative non décisionnelle.
Aucune évolution ne doit rendre obligatoire :
* un backend,
* une base de données,
* une authentification utilisateur,
* un stockage clinique persistant.
16/ Toute modification du contenu CRC doit préciser explicitement :
* les versions concernées :
  * courrier long,
  * paragraphe,
  * dossier médical,
  * version patient ;
* l’ordre narratif attendu ;
* si le comportement doit être homogène ou spécifique selon les versions.
Aucune propagation implicite à toutes les versions ne doit être supposée.
Conclusion : Ce contrat vise à : protéger la validité clinique, éviter les régressions invisibles, permettre les évolutions techniques nécessaires, maintenir une architecture stable de la plateforme PAP. 
17/ Addendum — Architecture documentaire, contenus et modules optionnels
17A/ Principe général de séparation des couches : La plateforme PAP repose sur une architecture modulaire séparant explicitement : (1) moteur clinique ; (2) interface utilisateur ; (3) modèle de données ; (4) contenus documentaires ; (5) ressources pédagogiques ; (6) modules optionnels ; (7) services externes éventuels. Ces couches doivent pouvoir évoluer indépendamment sans imposer de modification structurelle du cœur clinique PAP.
17B/ Définition du CORE PAP : Le CORE PAP désigne l’ensemble des composants fondamentaux nécessaires au fonctionnement clinique minimal de la plateforme. Le CORE comprend notamment : logique clinique ; questionnaires ; calculs ; structures IF/THEN ; moteur CRC ; modèle JSON clinique ; synchronisation d’état ; composants UI fondamentaux ; mécanismes import/export JSON ; règles DSR ; mécanismes de stabilité clinique ; architecture modulaire centrale. Le CORE constitue la base de référence de compatibilité du projet.
17C/ Principe d’indépendance des contenus : Les contenus documentaires, pédagogiques ou bibliographiques ne constituent pas des dépendances obligatoires du CORE PAP. Les ressources peuvent être : ajoutées ; supprimées ; remplacées ; mises à jour ; désactivées ; versionnées ; distribuées séparément ; sans modification obligatoire du moteur clinique principal.
17D/ Architecture documentaire : L’architecture documentaire future peut comprendre notamment : fiches patients ; fiches médecins ; documents institutionnels ; recommandations ; questionnaires ; ressources externes ; vidéos ; supports pédagogiques ; cas cliniques ; bibliothèques de liens ; contenus de formation ; ressources scientifiques ; documents générés ; contenus partenaires. Ces contenus doivent idéalement reposer sur une structure organisée, maintenable et versionnable.
17E/ Compatibilité avec bibliothèques externes : Le moteur PAP peut charger, lire, exploiter ou référencer des ressources externes structurées sans que ces ressources deviennent automatiquement des composants du CORE PAP. Les contenus externes doivent idéalement utiliser des formats standardisés, interopérables et découplés du moteur clinique.
17F/ Principe de modularité documentaire : Toute future bibliothèque documentaire doit idéalement respecter : séparation contenu/moteur ; compatibilité évolutive ; possibilité d’activation/désactivation indépendante ; maintenance indépendante ; compatibilité import/export ; compatibilité mode hors-ligne partiel ; compatibilité PWA ; absence de dépendance obligatoire à un backend clinique.
17G/ Règle de non-dépendance clinique : Aucune ressource documentaire additionnelle ne doit rendre impossible : l’utilisation du moteur clinique principal ; la génération CRC ; l’auto-évaluation patient ; l’import/export JSON ; le fonctionnement hors-ligne fondamental ; l’architecture sans compte utilisateur ; l’absence de stockage clinique persistant.
17H/ Modules optionnels : Les modules suivants peuvent exister sous forme indépendante, activable ou désactivable sans impact obligatoire sur le CORE PAP : consultation rapide ; mode ressources ; mode formation ; ordonnance automatisée ; pré-remplissage ; outils IA facultatifs ; connecteurs ; export avancé ; génération documentaire ; modules pédagogiques ; modules institutionnels ; modules partenaires.
17I/ Compatibilité future des ressources : Toute évolution technique doit préserver la compatibilité future avec : ressources locales ; bundles documentaires ; contenus versionnés ; ressources externes ; import documentaire ; export documentaire ; synchronisation manuelle ; fonctionnement partiellement déconnecté ; architecture multi-source ; architecture multi-entrée.
17J/ Gouvernance documentaire : Toute ressource intégrée doit idéalement pouvoir comporter des métadonnées de maintenance comprenant notamment : nom ; type ; cible ; source ; version ; date de mise à jour ; statut actif ; niveau de maintenance ; caractère stable/externe/temporaire ; nécessité de révision ; compatibilité clinique ; statut de validation éventuel.
17K/ Principe de stabilité du CORE : Les évolutions documentaires, pédagogiques ou modulaires ne doivent pas introduire de régression dans : logique clinique ; calculs ; questionnaires ; stabilité du JSON ; synchronisation d’état ; mécanismes DSR ; fonctionnement hors-ligne ; architecture sans backend obligatoire ; absence de stockage clinique persistant.
17L/ Compatibilité avec philosophie PAP : Toute évolution documentaire, pédagogique ou modulaire doit rester compatible avec les principes fondamentaux PAP : aide cognitive structurée ; absence d’automatisation décisionnelle ; transparence ; décision médicale finale conservée au professionnel ; IA facultative et non décisionnelle ; architecture orientée consultation réelle ; stabilité clinique prioritaire.
17M/ Principe de découplage évolutif : Toute future extension documentaire, pédagogique, institutionnelle ou partenariale doit idéalement pouvoir être ajoutée, retirée ou remplacée avec impact minimal sur : architecture centrale ; moteur clinique ; modèle JSON ; logique CRC ; compatibilité DSR ; compatibilité multi-modules ; compatibilité consultation rapide ; compatibilité PWA.
17N/ Compatibilité licence et distribution : Le présent addendum n’impose aucun modèle unique de distribution, de licence ou de diffusion des contenus additionnels. Le CORE PAP, les contenus documentaires, les ressources pédagogiques, les bundles externes et les modules optionnels peuvent relever de modalités de distribution distinctes sous réserve de préserver : stabilité clinique ; cohérence architecturale ; compatibilité DSR ; indépendance fonctionnelle du CORE PAP.
18/ addendum : INTERDICTION :
- de considérer tout événement input/change comme modification utilisateur réelle ;
- de déclencher dirty-state pendant : import JSON ; reset consultation ; sync UI ; render technique ; setup formulaire.
OBLIGATION : distinguer explicitement : USER EVENT vs PROGRAMMATIC UPDATE.
IMPORTANT : Les listeners globaux doivent être considérés comme potentiellement dangereux tant qu’ils ne filtrent pas clairement les événements documentaires métier.
19/ Avant toute correction :
- cartographier complètement le cycle :
  USER EVENT → STATE → RENDER → UI → LISTENERS → SIDE EFFECTS
- identifier explicitement : a) source de vérité métier ; b)  source UI ; c) synchronisations ; d) fallback éventuels.
- ne jamais corriger un symptôme avant validation de la source réelle du problème.
- tout fallback doit être considéré comme potentiellement masquant un défaut structurel.
20/ Addendum — Gouvernance architecture et invariants système
20A/ Nature du système PAP : PAP est désormais considéré comme une plateforme clinique déterministe orientée aide cognitive structurée. L’architecture du système repose sur : knowledge-base clinique ; moteurs IF/THEN déterministes ; orchestration state-based ; renderers spécialisés ; supervision humaine implicite ; séparation connaissance/rendu ; séparation état/UI ; architecture explicable et audit-able.
20B/ Compatibilité aide cognitive et non automatisation décisionnelle : PAP constitue une aide cognitive structurée et non un moteur décisionnel autonome. Le système peut : structurer ; contextualiser ; rappeler ; suggérer ; organiser ; générer des contenus documentaires. Le système ne peut pas : diagnostiquer ; arbitrer ; conclure ; imposer une décision ; hiérarchiser automatiquement ; remplacer le raisonnement clinique humain.
20C/ Human-in-the-loop by design : La supervision humaine constitue une propriété structurelle du système. Toute sortie clinique nécessite : interprétation humaine ; validation humaine ; supervision humaine. Toute évolution future doit préserver explicitement : supervision humaine ; explicabilité ; déterminisme ; auditabilité ; traçabilité.
20D/ Invariants architecture obligatoires : Les principes suivants constituent des invariants système : toute logique clinique doit rester déterministe ; toute sortie clinique doit être explicable ; toute règle clinique doit être traçable ; aucune logique clinique ne doit dépendre du DOM ; aucun renderer ne doit décider cliniquement ; aucune automatisation décisionnelle opaque ne doit être introduite ; toute séparation knowledge/render doit être maintenue ; toute mutation state doit être identifiable ; toute supervision doit rester humaine.
20E/ Séparation Recommendation Layer vs Decision Layer : Le système peut produire des recommandations, contextualisations, adaptations, vigilances et aides cognitives. Le système ne doit jamais devenir un moteur décisionnel autonome. Toute évolution future doit préserver explicitement la séparation : Recommendation Layer ≠ Decision Layer.
20F/ Gouvernance des états et synchronisations : Toute évolution technique doit préserver explicitement : source unique de vérité clinique ; séparation state/DOM ; synchronisations explicites ; mutations traçables ; renderers rerender-safe ; absence de mutation clinique implicite via mécanismes UI ; séparation états cliniques / états documentaires / états UI.
20G/ Gouvernance renderers : Les renderers ne doivent jamais : porter logique clinique complexe ; modifier les règles métier ; générer de décision clinique implicite ; devenir des sources de vérité clinique. Les renderers doivent rester orientés : affichage ; transformation state → vue ; synchronisation documentaire.
20H/ Protection contre dérive réglementaire : Toute évolution future doit être évaluée selon : impact supervision humaine ; impact explicabilité ; impact déterminisme ; impact automatisation ; impact réglementaire ; impact architecture clinique. Sont interdits sans validation explicite : scoring autonome ; priorisation opaque ; moteur probabiliste décisionnel ; automatisation décisionnelle ; logique clinique opaque.
20I/ Compatibilité architecture évolutive : Toute évolution doit préserver la compatibilité future avec : supervision clinique ; validation explicite ; vigilance contextuelle ; moteur médicaments déterministe ; longitudinal ; architecture modulaire ; modules optionnels indépendants ; architecture multi-entrée ; exports structurés ; analytics descriptifs non décisionnels.
20J/ Références architecture officielles : Les documents suivants constituent désormais les références officielles de gouvernance architecture PAP :
- docs/PAP_ARCHITECTURE_MAP_V1.md
- docs/PAP_PHASE2_TECHNICAL_ROADMAP.md
- docs/ARCHITECTURE_AUDIT_2026.md
20K/ Gouvernance ressources et contextualisation documentaire :
Toute ressource clinique/documentaire doit rester :
- contextualisable ;
- traçable ;
- déterministe ;
- compatible supervision humaine ;
- compatible multi-sorties ;
- non décisionnelle.
Les ressources doivent pouvoir être utilisées de manière cohérente dans :
- ordonnance ;
- QR ;
- CRC ;
- consultation ;
- formation ;
- documents patient ;
- outils médecin.
Toute duplication documentaire non gouvernée doit être évitée.
Toute modification technique majeure, refactorisation, évolution structurelle ou nouveau moteur clinique doit rester compatible avec ces documents de gouvernance.
