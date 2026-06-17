// core/clinical-context/medication-vigilance-registry.js

/*
 * Registre minimal de vigilances médicamenteuses liées à l’activité physique.
 *
 * Rôle :
 * - aide mnésique médecin ;
 * - détection indicative à partir du texte libre "Traitement actuel" ;
 * - aucune décision automatique ;
 * - aucune prescription automatique ;
 * - aucune conclusion fermée.
 */

const MEDICATION_VIGILANCE_REGISTRY = [

  {
    id: "insuline",
    label: "Insuline",
    category: "métabolique",
    keywords: [
      "insuline",
      "lantus",
      "toujeo",
      "abasaglar",
      "levemir",
      "tresiba",
      "novorapid",
      "humalog",
      "apidra",
      "fiasp",
      "lyumjev",
      "insulatard",
      "actrapid"
    ],
    message:
      "Risque d’hypoglycémie à l’effort : vérifier autosurveillance, collation disponible et adaptations habituelles selon le protocole médical."
  },

  {
    id: "sulfamides-glinides",
    label: "Sulfamides hypoglycémiants / glinides",
    category: "métabolique",
    keywords: [
      "gliclazide",
      "diamicron",
      "glimepiride",
      "glimépiride",
      "amarel",
      "glibenclamide",
      "daonil",
      "repaglinide",
      "répaglinide",
      "novonorm",
      "nateglinide",
      "natéglinide"
    ],
    message:
      "Risque d’hypoglycémie à l’effort : vérifier autosurveillance, collation disponible et adaptation au contexte d’activité."
  },

  {
    id: "bradycardisants",
    label: "Bêtabloquants / traitements bradycardisants",
    category: "cardiovasculaire",
    keywords: [
      "bisoprolol",
      "cardensiel",
      "tenormine",
      "atenolol",
      "aténolol",
      "metoprolol",
      "métoprolol",
      "seloken",
      "propranolol",
      "avlocardyl",
      "nebivolol",
      "nébivolol",
      "temerit",
      "carvedilol",
      "carvédilol",
      "kredex",
      "sotalol",
      "diltiazem",
      "tildiem",
      "verapamil",
      "vérapamil",
      "isoptine",
      "ivabradine",
      "procoralan"
    ],
    message:
      "Fréquence cardiaque moins fiable pour guider l’intensité : privilégier Borg, ressenti d’effort et tolérance clinique."
  },

  {
    id: "antihypertenseurs-vasodilatateurs",
    label: "Antihypertenseurs / vasodilatateurs",
    category: "cardiovasculaire",
    keywords: [
      "ramipril",
      "triatec",
      "perindopril",
      "périndopril",
      "coversyl",
      "enalapril",
      "énalapril",
      "lisinopril",
      "captopril",
      "candesartan",
      "candésartan",
      "valsartan",
      "irbesartan",
      "irbésartan",
      "losartan",
      "telmisartan",
      "olmésartan",
      "olmesartan",
      "amlodipine",
      "lercanidipine",
      "lercan",
      "nicardipine",
      "loxen",
      "rilmenidine",
      "rilménidine",
      "hyperium",
      "moxonidine",
      "urapidil",
      "eupressyl",
      "prazosine",
      "minipress",
      "nitrate",
      "trinitrine",
      "risordan",
      "monicor"
    ],
    message:
      "Vigilance hypotension, vertiges ou malaise, notamment au lever, après effort ou en ambiance chaude ; progression prudente."
  },

  {
    id: "diuretiques",
    label: "Diurétiques",
    category: "cardiovasculaire",
    keywords: [
      "furosemide",
      "furosémide",
      "lasilix",
      "bumetanide",
      "burinex",
      "hydrochlorothiazide",
      "esidrex",
      "indapamide",
      "fludex",
      "spironolactone",
      "aldactone",
      "eplerenone",
      "éplérénone",
      "inspra"
    ],
    message:
      "Vigilance hydratation, chaleur, hypotension et troubles ioniques, surtout si effort prolongé ou sujet âgé."
  },

  {
    id: "anticoagulants-antiagregants",
    label: "Anticoagulants / antiagrégants",
    category: "hémostase",
    keywords: [
      "apixaban",
      "eliquis",
      "rivaroxaban",
      "xarelto",
      "dabigatran",
      "pradaxa",
      "edoxaban",
      "lixiana",
      "warfarine",
      "coumadine",
      "fluindione",
      "previscan",
      "préviscan",
      "acenocoumarol",
      "acénocoumarol",
      "sintrom",
      "aspirine",
      "kardegic",
      "cardegic",
      "clopidogrel",
      "plavix",
      "prasugrel",
      "efient",
      "ticagrelor",
      "brilique"
    ],
    message:
      "Prudence pour activités à risque de chute, choc ou traumatisme ; adapter l’activité et l’encadrement au contexte."
  },

  {
    id: "psychotropes-sedatifs",
    label: "Psychotropes sédatifs / hypotenseurs",
    category: "neuropsychique",
    keywords: [
      "alprazolam",
      "xanax",
      "bromazepam",
      "bromazépam",
      "lexomil",
      "diazepam",
      "diazépam",
      "valium",
      "lorazepam",
      "lorazépam",
      "temesta",
      "oxazepam",
      "oxazépam",
      "seresta",
      "zolpidem",
      "stilnox",
      "zopiclone",
      "imovane",
      "quetiapine",
      "quétiapine",
      "xeroquel",
      "olanzapine",
      "zyprexa",
      "risperidone",
      "rispéridone",
      "risperdal",
      "clozapine",
      "leponex",
      "amisulpride",
      "solian",
      "cyamemazine",
      "cyamémazine",
      "tercian",
      "levomepromazine",
      "lévomépromazine",
      "nozinan",
      "amitriptyline",
      "laroxyl",
      "mirtazapine",
      "norset",
      "paroxetine",
      "paroxétine",
      "deroxat"
    ],
    message:
      "Vigilance somnolence, ralentissement, hypotension orthostatique et risque de chute ; adapter horaires, intensité et environnement."
  },

  {
    id: "antalgiques-palier2-gabapentinoides",
    label: "Antalgiques palier 2 / opioïdes faibles / gabapentinoïdes",
    category: "douleur",
    keywords: [
      "tramadol",
      "ixprim",
      "topalgic",
      "contramal",
      "codeine",
      "codéine",
      "dafalgan codeine",
      "dafalgan codéiné",
      "klipal",
      "lamaline",
      "opium",
      "oxycodone",
      "oxycontin",
      "oxynorm",
      "morphine",
      "skenan",
      "actiskenan",
      "pregabaline",
      "prégabaline",
      "lyrica",
      "gabapentine",
      "neurontin"
    ],
    message:
      "Vigilance somnolence, vertiges, trouble de l’équilibre et risque de chute ; adapter type d’activité et encadrement."
  },

  {
    id: "statines",
    label: "Statines",
    category: "métabolique",
    keywords: [
      "atorvastatine",
      "tahor",
      "rosuvastatine",
      "crestor",
      "simvastatine",
      "zocor",
      "pravastatine",
      "elisor",
      "fluvastatine",
      "lescol",
      "pitavastatine",
      "livazo"
    ],
    message:
      "Si myalgies, faiblesse ou douleurs musculaires inhabituelles : vérifier tolérance et contexte clinique, sans arrêt automatique de l’activité."
  },

  {
    id: "corticotherapie-generale",
    label: "Corticothérapie générale",
    category: "fragilité",
    keywords: [
      "prednisone",
      "prednisolone",
      "cortancyl",
      "solupred",
      "medrol",
      "médrol",
      "methylprednisolone",
      "méthylprednisolone",
      "corticoide",
      "corticoïde",
      "corticotherapie",
      "corticothérapie"
    ],
    message:
      "Vigilance fragilité tendineuse, musculaire ou osseuse si corticothérapie prolongée ; progressivité du renforcement et prudence sur charges."
  }

];

function normalizeMedicationText(text) {

  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function computeMedicationVigilanceFromText(rawText) {

  const normalizedText =
    normalizeMedicationText(rawText);

  if (!normalizedText) {
    return [];
  }

  return MEDICATION_VIGILANCE_REGISTRY
    .filter(item => {

      return item.keywords.some(keyword => {

        const normalizedKeyword =
          normalizeMedicationText(keyword);

        return normalizedText.includes(
          normalizedKeyword
        );
      });

    })
    .map(item => ({
      id: item.id,
      label: item.label,
      category: item.category,
      message: item.message,
      source: "medication-vigilance-registry"
    }));
}

window.MEDICATION_VIGILANCE_REGISTRY =
  MEDICATION_VIGILANCE_REGISTRY;

window.normalizeMedicationText =
  normalizeMedicationText;

window.computeMedicationVigilanceFromText =
  computeMedicationVigilanceFromText;