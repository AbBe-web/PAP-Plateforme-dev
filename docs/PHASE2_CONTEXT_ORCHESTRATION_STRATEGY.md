# PHASE2_CONTEXT_ORCHESTRATION_STRATEGY

Statut : CANONIQUE PHASE 2
Objectif : formaliser la stratégie d’orchestration clinique/documentaire progressive PAP.

Références :

* PROTOCOLE_STABILITE_CLINIQUE_PAP.md
* PROTOCOLE_DSR_PAP.md
* docs/ARCHITECTURE_REFERENCE.md
* docs/ARCHITECTURE_AUDIT_2026.md
* docs/PAP_ARCHITECTURE_MAP_V1.md
* docs/PAP_PHASE2_TECHNICAL_ROADMAP.md
* docs/PAP_PRODUCT_ARCHITECTURE_V2.md

---

# 1. OBJECTIF PHASE 2

La PHASE 2 PAP correspond à une migration progressive vers une orchestration clinique/documentaire explicite, déterministe et contextualisée.

La PHASE 2 ne correspond PAS à :

* une réécriture massive ;
* une frameworkisation ;
* une refonte renderer ;
* une refonte UI ;
* une automatisation clinique ;
* un moteur décisionnel autonome.

La PHASE 2 correspond à :

* centralisation progressive de la contextualisation clinique ;
* réduction des IF/THEN dispersés ;
* réduction de la logique clinique renderer ;
* gouvernance des ressources ;
* préparation architecture multi-sorties ;
* préparation supervision future ;
* préparation longitudinal futur.

---

# 2. DÉCOUVERTE ARCHITECTURE MAJEURE

L’analyse des pipelines réels PAP confirme que le système possède déjà implicitement :

* un knowledge layer ;
* un state layer ;
* une orchestration documentaire ;
* des renderers spécialisés ;
* une architecture multi-sorties.

Architecture actuellement observée :

UI / DOM
↓
buildClinicalModel()
↓
clinicalModel
↓
renderers spécialisés
↓
documents multi-sorties

Renderers identifiés :

* renderLongLetterV2()
* renderParagraphVersion()
* renderMedicalRecord()
* renderPatientVersion()
* renderOrdonnanceAP()

La PHASE 2 doit donc être considérée comme :

orchestration
et NON
reconstruction.

---

# 3. DETTE ARCHITECTURE PRINCIPALE IDENTIFIÉE

La dette architecture principale PAP est désormais identifiée comme :

contextualisation clinique/documentaire dispersée.

Cette dispersion concerne :

* vigilance ;
* précautions ;
* adaptations ;
* supervision ;
* recommandations ;
* ressources ;
* documents patient ;
* QR resources ;
* contextualisation patient/médecin ;
* recommandations pathologies.

---

# 4. MOTEURS HYBRIDES IDENTIFIÉS

Les composants suivants sont identifiés comme moteurs hybrides critiques :

* buildPrescription()
* buildCRCPathoBloc()
* buildDecisionBloc()

Ces composants mélangent actuellement :

* logique clinique ;
* accès DOM ;
* accès knowledge layer ;
* contextualisation documentaire ;
* logique ressources ;
* logique patient/médecin ;
* génération documentaire ;
* rendu HTML/texte.

Ces composants constituent les cibles prioritaires de migration progressive.

---

# 5. KNOWLEDGE LAYER

PATHO_DATA est désormais reconnu comme knowledge layer clinique/documentaire implicite.

PATHO_DATA contient déjà :

* recommandations contextualisées ;
* ressources CRC ;
* éléments pathologies ;
* contextualisation documentaire.

Conséquence :

La PHASE 2 ne doit PAS recréer un moteur de connaissance clinique.

Le besoin principal devient :

computeClinicalContext()

comme couche d’orchestration et de contextualisation.

---

# 6. computeClinicalContext()

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
* clinician tools ;
* QR resources ;
* training modules.

Exemple cible :

```js
{
  vigilance: [],
  precautions: [],
  adaptations: [],
  supervision: [],
  recommandations: [],

  resources: [],
  patientDocuments: [],
  clinicianTools: [],
  trainingModules: [],
  qrResources: []
}
```

---

# 7. CONTRAINTES ARCHITECTURE OBLIGATOIRES

Le moteur computeClinicalContext() doit respecter :

* déterminisme ;
* explicabilité ;
* supervision humaine ;
* human-in-the-loop by design ;
* recommendation layer ≠ decision layer ;
* absence automatisation décisionnelle ;
* absence prescription automatique ;
* absence validation/invalidation automatique.

Le moteur doit produire :

* aides cognitives ;
* contextualisation ;
* suggestions ;
* vigilance.

Le moteur ne doit jamais produire :

* décisions automatiques ;
* validations ;
* interdictions ;
* obligations ;
* scoring autonome.

---

# 8. RESPONSABILITÉS RENDERERS

Les renderers PAP doivent progressivement devenir des consommateurs de contexte clinique/documentaire.

Responsabilités conservées :

* génération HTML ;
* structuration documentaire ;
* adaptation patient/médecin ;
* contextualisation linguistique ;
* export documentaire.

Responsabilités progressivement externalisées :

* vigilance ;
* supervision ;
* adaptations ;
* recommandations ;
* ressources ;
* contextualisation clinique.

---

# 9. RESOURCE GOVERNANCE

Les ressources PAP sont désormais considérées comme composant architecture stratégique.

Objectifs :

* éviter duplication documentaire ;
* éviter duplication QR ;
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

Exemple cible :

```js
{
  id: "hta-auto-surveillance",
  type: "patient-document",

  audience: ["patient"],

  tags: [
    "hta",
    "endurance"
  ],

  contexts: {
    pathologies: ["hta"]
  },

  outputs: [
    "patient",
    "crc",
    "qr"
  ]
}
```

---

# 10. STRATÉGIE DE MIGRATION VALIDÉE

La migration PHASE 2 doit être réalisée sous forme de surcouche progressive.

Règles impératives :

* absence de big rewrite ;
* absence de rupture pipeline clinique ;
* absence de rupture renderers ;
* absence de rupture DSR ;
* absence de rupture buildClinicalModel() ;
* absence de rupture prescriptionModel ;
* absence de frameworkisation prématurée.

Ordre de migration cible :

1. création computeClinicalContext() minimal ;
2. introduction resource registry minimal ;
3. migration vigilance ;
4. migration supervision ;
5. migration adaptations ;
6. migration ressources ;
7. migration QR/document ;
8. migration formation ;
9. suppression progressive duplications anciennes.

---

# 11. SPRINT TECHNIQUE INITIAL RECOMMANDÉ

Objectifs Sprint initial :

* créer /core/clinical-context/ ;
* créer computeClinicalContext.js ;
* préparer structure vigilance/resources/adaptations ;
* préserver pipeline actuel ;
* préserver renderers existants ;
* préserver stabilité clinique.

Hors périmètre :

* refonte renderer ;
* refonte UI ;
* migration complète ;
* moteur décisionnel ;
* réécriture PATHO_DATA ;
* optimisation globale.

---

# 12. ARCHITECTURE CIBLE LONG TERME

Architecture cible :

knowledge layer
↓
context orchestration layer
↓
renderers spécialisés
↓
documents multi-sorties
↓
consultation / patient / QR / formation / longitudinal

La contextualisation clinique/documentaire doit progressivement devenir :

la source commune de cohérence clinique PAP.
