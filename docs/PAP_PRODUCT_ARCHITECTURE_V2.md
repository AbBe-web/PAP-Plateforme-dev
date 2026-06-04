Document de référence produit.
Toute évolution fonctionnelle majeure (CmAP, CMAP, Ordonnance APA,
Condition physique, Cognitive Layer, nouveaux modules)
doit être cohérente avec cette architecture sauf décision explicite
documentée.

PAP PRODUCT ARCHITECTURE V2
Statut : VALIDÉ (phase produit)
Objectif : référence fonctionnelle avant Sprint 1

====================================================================
PRINCIPES FONDATEURS
====================================================================

PAP = aide cognitive structurée.
PAP ≠ dispositif médical.
PAP ≠ moteur décisionnel.
PAP ≠ système expert.

Principes :
- aucune automatisation décisionnelle ;
- aucune prescription automatique ;
- aucune orientation automatique ;
- aucune validation / invalidation de décision ;
- le médecin reste décisionnaire final.

Architecture cible :
Données → Aide cognitive → Productions documentaires.

====================================================================
ARCHITECTURE FONCTIONNELLE V2
====================================================================

1. Motif AP
2. Profil AP et motivation
3. Situation médicale
4. Condition physique
5. Aide HAS pré-prescription
6. Investigations complémentaires
7. Stratégie de prescription AP
    7A Objectifs thérapeutiques
    7B Précautions / limitations
    7C Prescription AP
    7D Recommandations
        7D1 Recommandations contextuelles
        7D2 Recommandations libres médecin
    7E Orientation AP
8. Productions PAP

====================================================================
CONSULTATION RAPIDE / CMAP / CONSULTATION APPROFONDIE
====================================================================

Validation :

CMAP ≠ mode de consultation distinct.

CMAP = approfondissement progressif de certains blocs.

Conséquence :

Le médecin peut :
- commencer par une consultation rapide ;
- poursuivre en CmAP ;
- approfondir progressivement certains blocs ;
- réaliser des investigations complémentaires ;
- prescrire une AP ;
- prescrire une APA ;
- demander des avis spécialisés ;

sans changer de mode.

Aucune variable :
"Mode CMAP".

Aucune détection automatique :
"Cette consultation est une CMAP".

CMAP = niveau d'approfondissement de la consultation.

====================================================================
ARCHITECTURE UI V1
====================================================================

Principes :
- page unique ;
- navigation rapide ;
- aucun changement d'écran ;
- accès libre à tous les blocs ;
- possibilité de scroller rapidement.

Commandes globales :
- Tout ouvrir ;
- Tout réduire ;
- Ouvrir blocs avancés.

Navigation rapide :
- Motif ;
- AP ;
- Médical ;
- HAS ;
- Prescription ;
- Documents.

Blocs ouverts par défaut :
1 Motif AP ;
2 Profil AP ;
3 Situation médicale ;
5 Aide HAS ;
7 Stratégie de prescription AP ;
8 Productions PAP.

Blocs fermés par défaut :
4 Condition physique ;
6 Investigations complémentaires ;
7B Précautions ;
7D Recommandations ;
7E Orientation.

====================================================================
BLOC 4 – CONDITION PHYSIQUE
====================================================================

Statut :
Architecture validée.

4A Anthropométrie :
- poids ;
- taille ;
- IMC ;
- tour de taille.

4B Fonctionnalité / autonomie :
- autonomie ;
- marche ;
- escaliers ;
- transferts ;
- aide technique.

4C Condition physique :
Noyau :
- TM6 ;
- 5STS ;
- appui unipodal.

Compléments possibles :
- TUG ;
- vitesse de marche ;
- handgrip ;
- push-up ;
- curl-up ;
- tandem ;
- sit-and-reach ;
- autres.

4D Synthèse fonctionnelle :
- synthèse automatique possible ;
- toujours modifiable par le médecin.

Validation :
Les données brutes restent visibles.
La synthèse ne remplace jamais les données.

====================================================================
BLOC 7 – STRATÉGIE DE PRESCRIPTION AP
====================================================================

Question clinique globale :

Pourquoi ?
↓
Objectifs

Quelles contraintes ?
↓
Précautions

Que prescrire ?
↓
Prescription

Quelles consignes ?
↓
Recommandations

Avec qui ?
↓
Orientation

--------------------------------------------------
7A OBJECTIFS THÉRAPEUTIQUES
--------------------------------------------------

Sélection multiple autorisée.

Objectifs retenus :

□ Augmenter le niveau global d'activité physique
□ Réduire la sédentarité
□ Améliorer le contrôle d'une maladie chronique
□ Améliorer la condition physique
□ Améliorer les capacités cardiorespiratoires
□ Renforcer la force musculaire
□ Améliorer l'équilibre / prévenir les chutes
□ Préserver ou restaurer l'autonomie
□ Réduire une limitation fonctionnelle
□ Améliorer la qualité de vie / le bien-être psychologique
□ Autre

Pas d'objectif principal obligatoire.

--------------------------------------------------
7B PRÉCAUTIONS / LIMITATIONS
--------------------------------------------------

Précautions générales :

□ Cardio-vasculaires
□ Respiratoires
□ Métaboliques
□ Neurologiques
□ Psychiques / cognitives
□ Risque de chute
□ Autres
□ Aucune

Limitations locomotrices :

Schéma corporel interactif :

- Cervical
- Dorsal
- Lombaire
- Epaule D/G
- Coude D/G
- Main-poignet D/G
- Bassin
- Hanche D/G
- Genou D/G
- Cheville D/G
- Pied D/G

Décision :
réutilisation maximale du schéma corporel PAP existant.

--------------------------------------------------
7C PRESCRIPTION AP
--------------------------------------------------

Bloc existant.

Contenu actuel :

- Endurance ;
- FITT ;
- Pas/jour ;
- Renforcement ;
- Souplesse ;
- Equilibre.

Validation :
Pas de modification conceptuelle majeure.

--------------------------------------------------
7D RECOMMANDATIONS
--------------------------------------------------

7D1 Recommandations contextuelles :

Issues :
- des fiches pathologies ;
- des repères HAS ;
- des adaptations de prescription ;
- des points de vigilance.

Exemples :
HTA ;
Coronaropathie ;
IC ;
Diabète ;
etc.

Réutilisation maximale du contenu existant.

7D2 Recommandations libres :

Champ libre médecin.

--------------------------------------------------
7E ORIENTATION AP
--------------------------------------------------

Décision :
Bloc 8 fusionné dans Bloc 7.

Orientation AP = élément de la stratégie de prescription.

Question d'aide cognitive :

"Le patient nécessite-t-il un encadrement spécifique pour pratiquer l'activité physique en sécurité ?"

Critères d'aide :

□ Risque de chute
□ Trouble équilibre
□ Faiblesse musculaire importante
□ Limitation articulaire importante
□ Aide technique
□ Trouble cognitif
□ Handicap
□ Perte autonomie
□ Autre

Orientations possibles :

□ Kinésithérapeute
□ Ergothérapeute
□ Psychomotricien
□ Enseignant APA
□ Maison Sport Santé
□ Educateur sportif
□ Activité autonome
□ Autre

Sélection multiple autorisée.

====================================================================
ORDONNANCE APA
====================================================================

Validation :

Ordonnance APA ≠ ordonnance indépendante.

Ordonnance APA = ordonnance AP enrichie + document de coordination.

Réutilisation maximale des données PAP.

Sources principales :
Bloc 3 ;
Bloc 4 ;
Bloc 7.

Paramètres documentaires spécifiques possibles :
- accord patient pour partage ;
- bilan condition physique souhaité ;
- certificat AP / APA ;
- classes thérapeutiques interférant avec AP.

====================================================================
COGNITIVE LAYER V1
====================================================================

Objectif :
réduire la charge cognitive sans automatiser la décision.

Règles :
- jamais bloquant ;
- jamais obligatoire ;
- jamais prescriptif ;
- jamais décisionnel.

Familles validées :

1. Objectifs ↔ Prescription
2. Objectifs ↔ Orientation
3. Précautions ↔ Prescription
4. Précautions ↔ Orientation
5. Aide HAS ↔ Décisions médicales
6. Pathologies ↔ Recommandations

Familles différées :

7. Condition physique ↔ Prescription
8. Condition physique ↔ Orientation

(après développement du Bloc 4)

Formulation :

"Point à considérer"

ou

"Repère HAS"

jamais :

"Vous devez"

jamais :

"Erreur"

jamais :

"Prescription impossible"

====================================================================
ROADMAP VALIDÉE
====================================================================

Sprint 1 :
- Bloc 7A ;
- Bloc 7B ;
- Bloc 7D ;
- Bloc 7E.

Sprint 2 :
- Ordonnance APA V1.

Sprint 3 :
- Bloc 4 complet ;
- enrichissements CMAP ;
- enrichissements ordonnance APA.

=====================================================
# PHASE 2 — MULTI-OUTPUT CONTEXTUALIZED PLATFORM

Le projet PAP doit désormais être considéré comme :

une plateforme clinique documentaire contextualisée orientée aide cognitive structurée.

Le système possède désormais :

* une architecture multi-sorties ;
* une orchestration documentaire centrale ;
* des renderers spécialisés ;
* une contextualisation clinique progressive ;
* une gouvernance ressources/documentation.

Sorties actuellement identifiées :

* courrier médecin ;
* paragraphe synthétique ;
* dossier médical ;
* document patient ;
* ordonnance d’activité physique.

Sorties futures préparées :

* QR resources ;
* consultation augmentée ;
* modules formation ;
* exports contextualisés ;
* longitudinal clinique ;
* ressources patient contextualisées ;
* ressources médecin contextualisées.

La PHASE 2 introduit progressivement une orchestration clinique/documentaire centralisée via :

computeClinicalContext()

Objectif stratégique :

faire émerger une source commune de contextualisation clinique/documentaire multi-sorties.

===============
FIN DOCUMENT
====================================================================