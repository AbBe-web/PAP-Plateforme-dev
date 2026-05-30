PROTOCOLE_DSR_PAP.md
Version 2.1. Dernière mise à jour : mai 2026. Intégration des références architecturales (16C)
0/ Statut du document. Ce protocole constitue la **référence technique officielle pour le débogage du projet PAP**.
Il est compatible avec : le Contrat de gel PAP, les invariants cliniques du projet. Principe cardinal : Aucune correction locale ne doit dégrader un invariant global.
1/ Architecture concernée. Le protocole s’applique à une architecture multi-modules. Structure de référence : ```id="qkbhb0"
PAP-Plateforme
├── assets/icons
│       ├── .gitkeep
│       ├── icon-192.png
│       ├── icon-512.png
├── core
│       ├── prescriptionModel.js
│       ├── prescriptionRenderer.js
│       ├── prescriptionSync.js
│       ├── prescriptionUtils.js
├── CSS/
│   └── style-global.css
├── medecin/
│   └── generateur-crc/
│       └── index.html
│       └── privacy.html
│       └── reset.html
├── patient/
│   └── auto-evaluation/
│       ├── index.html
│       ├── politique-confidentialite.html
│       ├── print.html
├── shared/
│   └── pap-data-model.js
│   └── pap-json-utils.js
├── docs/
│   └── ARCHITECTURE_REFERENCE.md
│   └── ARCHITECTURE_AUDIT_2026.md
├── LICENCE
├── PROTOCOLE_DSR_PAP.md
├── PROTOCOLE_STABILITE_CLINIQUE_PAP.md
├── README.md
├── index.html
├── manifest.json
├── sw.js
Modules : auto-évaluation patient, générateur de compte-rendu médecin
Ressource partagée : ```id="l9gwca" : css/style-global.css
2/ Principe fondamental du DSR. Toute correction doit respecter simultanément : ```id="mykkbb" : logique clinique, structure du parcours, données cliniques fondamentales, architecture modulaire. Aucune correction ne doit introduire : perte de données, perte de navigation, modification clinique involontaire.
3/ Activation du protocole : Le protocole est activé par la mention : « DSR activé — diagnostic ». Tant que la phase de diagnostic n’est pas terminée : aucune modification du code ne doit être réalisée.
3B : Diagnostic rapide : Avant d’entrer dans la phase complète de diagnostic, effectuer la vérification rapide suivante.
Objectif : identifier immédiatement la couche probable du bug.
3B1. Vérification console navigateur : Ouvrir la console (F12) et vérifier : erreur JavaScript, ressource manquante, erreur JSON. Si une erreur apparaît, noter : message d’erreur, fichier concerné, ligne indiquée
3B2. Vérification du CSS global : Vérifier si le problème peut venir de : CSS/style-global.css. Exemples : bouton invisible, double clic apparent, élément masqué, décalage d’affichage. Si oui → bug probable CSS.
3B3. Vérification du module concerné : Identifier rapidement le module touché : patient/auto-evaluation, medecin/generateur-crc
Si le bug est présent dans plusieurs modules → suspicion CSS global ou logique partagée.
3B4. Vérification du type de bug : Classer rapidement le bug : interface (CSS / HTML), interaction (JavaScript), données (JSON), navigation
3B5. Décision : Si la couche semble évidente : → passer directement au diagnostic DSR ciblé. Sinon : → appliquer le protocole DSR complet
4/ Phase obligatoire de diagnostic : Avant toute correction, les éléments suivants doivent être établis.
4A — Description factuelle du bug. Décrire : (id="5usqqp") : ce que l’utilisateur fait, ce qui est attendu, ce qui se produit réellement, Sans interprétation.
4B — Reproduction : Décrire précisément : (``id="tuskn9") : 1 action, 2 action, 3 action, … Le bug doit être **reproductible**.
4C — Environnement. Identifier : (```id="g6t6au") : navigateur, appareil, système. Exemple : (```id="4n61cf") : Chrome desktop, Safari mobile, Firefox
5/ Diagnostic par couche (obligatoire) : Tout bug doit être classé dans une couche technique : 
Couche 1 — CSS commun. Exemples : bouton invisible, bouton double clic apparent, élément masqué, mauvaise position. Fichier concerné : (```id="tczl4f") : CSS/style-global.css. Le CSS commun doit être vérifié **avant toute modification JS**.
Couche 2 — HTML du module. Exemples : structure DOM incorrecte, bouton mal déclaré, attribut manquant.
Couche 3 — JavaScript du module. Exemples : gestion d’événement, fonction incorrecte, variable mal initialisée.
Couche 4 — interaction entre modules. Exemples : import JSON, mapping des données, compatibilité avec le clinicalModel.
6/ Identification du module concerné. Chaque bug doit être classé dans un module. patient/auto-evaluation, medecin/generateur-crc, CSS global, interaction JSON
Modules possibles : (```id="nuf84b") : patient/auto-evaluation
medecin/generateur-crc
CSS global
interaction JSON
7/ Règle critique : CSS avant JS. Tout bug d’interface doit suivre l’ordre de vérification : (```id="hoq4uh") : 1 CSS commun, 2 CSS local, 3 HTML, 4 JavaScript. Aucune modification JS ne doit être réalisée si la cause provient du CSS.
8/ Typologie des écrans. Avant toute correction, identifier le type d’écran.
Type A — écrans DOM dépendants. Caractéristiques : (```id="pif3pr") : inputs utilisateur, formulaire, navigation locale, Exemple : questionnaires.
Type B — écrans reconstruits. Caractéristiques : (```id="3je9a0") : résultats : résumé, écran de transition. Ces écrans peuvent être reconstruits à partir de l’état.
9/ Règles de correction. Une correction doit être : (```id="88rprv") : locale, minimale, réversible. Interdits : (```id="p7skqs") : refactorisation globale, changement d’architecture, réécriture complète, sauf décision explicite.
10/ Livraison d’une correction. Toute correction doit fournir : un fichier complet, exécutable immédiatement, remplaçant le fichier précédent. Les extraits de code sont autorisés mais doivent être fournis avec des indications très précises sur quelle zone de code exacte ils remplacent : zone avant et/ou après, zone exacte à supprimer. Cependant la version finale doit toujours permettre de reconstruire un fichier complet fonctionnel.
11/ Checklist de non-régression : Après correction, vérifier : (```id="z4x18r") : navigation avant, navigation retour, aucun écran blanc, aucune perte d’input, aucun bouton inactif, aucune erreur console bloquante. Si un test échoue : rollback immédiat.
12/ Bugs structurels. Un bug est considéré comme **structurel** si : (```id="aypbn1") : le bug revient après correction, le bug change d’endroit, le bug touche plusieurs modules, la navigation globale est affectée. Dans ce cas : (```id="z74jru") : arrêt des corrections locales, diagnostic architecture, analyse globale. 
13/ 
13A : Protocole d’escalade. Si le bug persiste après deux corrections locales : (```id="3ukqro") : 1 arrêt des corrections, 2 analyse console, 3 analyse structure, 4 décision patch ou refonte
13B : Une correction ne doit pas être appliquée uniquement sur le symptôme observé sans validation préalable de :
• la source réelle des données ;
• le cycle de synchronisation ;
• la responsabilité du composant concerné.
Toute correction de type :
• fallback ;
• reconstruction HTML ;
• duplication d’état ;
• copie indirecte ;
• synchronisation secondaire ;
doit être considérée comme potentiellement masquant un défaut structurel.
14/ Post-mortem. Après correction : identifier : id="6u5cb1" : cause réelle, hypothèse initiale, garde-fou manquant. Cela permet d’éviter la répétition du bug.
15/ Règle fondamentale : Principe cardinal du DSR : (id="pbkl1s") : Diagnostiquer avant de corriger. Corriger sans diagnostic augmente fortement le risque de régression.
16/A addendum (23/4/26) : 
•	Ajouter une nouvelle couche de diagnostic : 'state / moteur CRC' avant refonte complète.
•	Identifier bugs multi-modes (accueil → mode rapide → ressources → formation).
•	Ajouter vérification import/export JSON.
•	Ajouter vérification localStorage (précochage / mémoire locale).
•	En cas de bug structurel répété → envisager découplage UI / moteur CRC.
16B/ Addendum — Cycle de vie UI / Renderers / Listeners
16B1. Classification obligatoire des fonctions : Toute fonction JavaScript doit être explicitement identifiable comme appartenant à l’une des catégories suivantes : initialisation unique (bootstrap) ; rendu/rerender ; synchronisation d’état ; interaction utilisateur ; logique documentaire ; logique clinique.
16B2. Distinction INIT UNIQUE / RERENDER SAFE : Toute fonction doit être explicitement classée :
• INIT UNIQUE : ne doit être exécutée qu’une seule fois au chargement de l’application.
• RERENDER SAFE : peut être rappelée plusieurs fois sans duplication de listeners, accumulation d’état implicite ni effet secondaire non contrôlé.
16B3. Règle de stabilité des listeners : Aucun addEventListener ne doit être recréé dans une fonction de render/rerender sans stratégie explicite de stabilité. Les listeners doivent être :
• attachés une seule fois lorsque possible ;
• explicitement rerender-safe si recréés ;
• centralisés et identifiables.
16B4. Règle de séparation des responsabilités : Les fonctions de rendu ne doivent pas :
• réattacher silencieusement des listeners globaux ;
• modifier des états cliniques implicites ;
• déclencher des effets secondaires non documentaires ;
• provoquer des boucles indirectes de rerender ;
• réinitialiser involontairement des états documentaires.
16B5A. Séparation des états : Les états cliniques, états UI et états documentaires doivent rester séparés autant que possible. Les composants documentaires éditables (textarea documentaire, export texte, version imprimable) ne doivent jamais devenir des sources de vérité clinique.
16B5B. Identification obligatoire des sources de vérité
Avant toute correction impliquant :
• textarea éditable ;
• rendu documentaire ;
• export ;
• import ;
• synchronisation UI ;
• copie presse-papiers ;
• rendu HTML ;
• état documentaire ;
Il est obligatoire d’identifier explicitement :
• la source de vérité métier ;
• la source UI ;
• les éventuels fallback ;
• les synchronisations implicites ;
• les responsabilités exactes des renderers.
Aucun fallback ne doit masquer silencieusement un défaut structurel de synchronisation.
Une fonction UI secondaire (ex : bouton “Modifier”) ne doit jamais devenir implicitement responsable d’une synchronisation métier critique.
16B6. Règle de diagnostic architecturel : Tout bug impliquant :
• rerender ;
• listeners ;
• synchronisation UI ;
• gestion documentaire ;
• textarea éditable ;
• affichage dynamique ;
• duplication d’actions ;
• doubles clics ;
• comportements intermittents ;
doit déclencher avant correction :
1 diagnostic du cycle d’appel réel ;
2 cartographie des listeners concernés ;
3 identification des fonctions INIT UNIQUE ;
4 identification des fonctions RERENDER SAFE ;
5 analyse des effets secondaires potentiels avant toute correction incrémentale.
6 analyse explicite du cycle complet : USER EVENT → STATE → RENDER → UI → LISTENERS → SIDE EFFECTS
7 identification des synchronisations implicites et dépendances cachées.
16B7. Règle de protection des renderers : Les fonctions de type render* doivent idéalement limiter leur responsabilité à :
• génération documentaire ;
• reconstruction DOM contrôlée ;
• synchronisation documentaire ;
et éviter autant que possible :
• initialisation UI globale ;
• réattachement de handlers ;
• logique clinique ;
• logique de navigation ;
• logique de bootstrap.
Les renderers doivent également être identifiés comme :
• producteurs d’état ;
• consommateurs d’état ;
• synchronisateurs UI ;
ou simples reconstructeurs documentaires. Toute synchronisation documentaire critique doit être explicitement localisée et documentée.
16B8. Escalade architecture UI : Un bug doit être considéré comme potentiellement structurel si :
• un même symptôme réapparaît après plusieurs corrections locales ;
• plusieurs composants UI deviennent instables ;
• des listeners multiples sont suspectés ;
• des rerenders involontaires sont observés ;
• des états documentaires sont réinitialisés involontairement ;
• des actions nécessitent plusieurs clics ;
• les comportements deviennent intermittents.
Dans ce cas :
• arrêt des micro-corrections successives ;
• activation obligatoire du diagnostic architecturel UI ;
• cartographie render/listeners/state avant nouvelle modification.
ADDENDUM : PHASE DSR ACTUELLE : stabilisation architecturelle des cycles événements/render/state.
OBJECTIF : réduction des rerenders implicites ; clarification des responsabilités ; distinction :
- rendu documentaire ;
- mise à jour UI ;
- initialisation listeners ;
- synchronisation technique ;
- modification utilisateur réelle.
IMPORTANT : Toute correction doit désormais être précédée d’une cartographie du cycle d’appel réel : trigger → listener → state → render → rerender.
## 16C/ Addendum — Références architecturales
Avant toute correction impliquant :
* synchronisation d’état ;
* listeners ;
* import/export JSON ;
* génération documentaire ;
* renderers ;
* architecture multi-modules ;
* prescription AP ;
* consultation rapide ;
* modules futurs ;
la documentation suivante doit être consultée :
* PROTOCOLE_STABILITE_CLINIQUE_PAP.md
* docs/ARCHITECTURE_REFERENCE.md
Lorsque le bug est considéré comme structurel ou implique plusieurs couches techniques, la consultation de :
* docs/ARCHITECTURE_AUDIT_2026.md
est recommandée afin d’identifier :
* les sources de vérité concernées ;
* les événements concernés ;
* les dépendances concernées ;
* les responsabilités des modules impliqués.
Les documents d’architecture ne remplacent pas le diagnostic DSR mais constituent une aide préalable à l’analyse.
Ce protocole s’applique à tout fichier du dépôt PAP-Plateforme.
