(function () {
  "use strict";

  // T3.6b.2b : projet structure de restitution, SANS HTML.
  // Reutilise les textes existants et deux libelles approuves par le medecin.
  // Jamais de nouvelle evaluation de connaissances, de U, ni de niveau 1–4.
  const CONDITIONAL_APA_TEXT = "Intérêt d'un programme d'APA à préciser : critères cliniques à vérifier.";
  const OTHER_CONDITIONS_TEXT = "Autres critères cliniques à vérifier.";
  const COST_TEXT = "Examiner le reste à charge, les aides financières et les alternatives accessibles.";
  const TRANSPORT_TEXT = "Examiner proximité, transport adapté, aides ou accompagnement aux déplacements, pratique à domicile.";
  const SUPPORT_TEXT = "Ressource potentielle pour la faisabilité et le maintien de l'activité.";

  function asObject(value) {
    return value && typeof value === "object" && !Array.isArray(value) ? value : null;
  }

  function slot(structure, sectionId, entryId) {
    const section = structure.sections.find(function (s) { return s?.id === sectionId; });
    const item = Array.isArray(section?.entries)
      ? section.entries.find(function (e) { return e?.id === entryId; }) : null;
    return item ? item.value : null;
  }

  // Grouper uniquement les repetitions rigoureusement equivalentes AU SEIN
  // D'UNE MEME FONCTION ; les occurrences originales restent toutes presentes.
  // Les conditions documentaires font partie de la cle de regroupement.
  function safeText(item) {
    return typeof item?.messages?.clinician === "string" ? item.messages.clinician : null;
  }

  function groupingKey(item) {
    const semanticId = typeof item?.semanticConceptId === "string" && item.semanticConceptId.trim()
      ? item.semanticConceptId : null;
    const knowledgeId = typeof item?.knowledgeItemId === "string" && item.knowledgeItemId.trim()
      ? item.knowledgeItemId : null;
    // Sans identifiant ET sans texte clinique, ne jamais supprimer un repere.
    if ((!semanticId && !knowledgeId) || !safeText(item)) return null;
    return JSON.stringify([
      semanticId ? "semantic" : "knowledge", semanticId || knowledgeId,
      item.category ?? null, item.clinicalFunction ?? null,
      item.condition ?? null, safeText(item)
    ]);
  }

  function groupExisting(items) {
    const groups = [];
    const keys = new Map();
    (Array.isArray(items) ? items : []).forEach(function (item) {
      if (!asObject(item)) return;
      const key = groupingKey(item);
      const existing = key === null ? null : keys.get(key);
      if (existing) {
        existing.occurrences.push(item);
      } else {
        const group = {
          semanticConceptId: item.semanticConceptId ?? null,
          clinicalFunction: item.clinicalFunction ?? null,
          category: item.category ?? null,
          condition: item.condition ?? null,
          text: safeText(item),
          // Jamais supprimer les conditions, matchedContext ou les sources
          // des occurrences : accessibles lors du futur rendu detaille.
          occurrences: [item]
        };
        groups.push(group);
        if (key !== null) keys.set(key, group);
      }
    });
    return groups;
  }

  function sharedQ1Q2aConcepts(q1, q2a) {
    const related = [];
    const used = new Set();
    q1.forEach(function (left) {
      const concept = left.semanticConceptId;
      if (typeof concept !== "string" || !concept.trim() || used.has(concept)) return;
      const right = q2a.filter(function (x) { return x.semanticConceptId === concept; });
      if (!right.length) return;
      used.add(concept);
      related.push({
        semanticConceptId: concept,
        // Rapprochement documentaire uniquement : Q1 et Q2a distincts.
        rehabilitationQ1: q1.filter(function (x) { return x.semanticConceptId === concept; }),
        apaQ2a: right
      });
    });
    return related;
  }

  function buildOrientationSynthesisDraftV1(structure) {
    const source = asObject(structure);
    const ready = source?.status === "ready" && Array.isArray(source.sections);
    const empty = {
      version: "1.0.0",
      status: ready ? "ready" : "unavailable",
      mainMessage: null,
      additionalMessages: [],
      knowledge: { rehabilitationQ1: [], apaQ2a: [], sharedConcepts: [] },
      // Valeurs originales, NON des ordres de presentation/visibilite.
      existing: {
        generalOrientation: [], ordinaryActivity: [], apaBenefit: null,
        autonomyDiscussion: null, apaQuestions: null,
        functionalContext: null, functionalQualification: null,
        severeRegulatoryMemo: null, feasibility: null,
        multiprofessionalProgram: null
      },
      pendingMapping: ["preferenceEncadrement"],
      // true = source documentaire de programme multiprofessionnel a etablir.
      pendingMultiprofessionalEvidence: true
    };
    if (!ready) return empty;

    const benefit = asObject(slot(source, "discussion", "apaBenefitQ2a"));
    const autonomy = asObject(slot(source, "discussion", "autonomyDiscussion"));
    const feasibility = asObject(slot(source, "feasibility", "feasibilityContext"));
    const q1 = groupExisting(slot(source, "transversal", "rehabilitationQ1"));
    const q2a = groupExisting(slot(source, "discussion", "apaProjectionQ2a"));
    empty.knowledge = {
      rehabilitationQ1: q1,
      apaQ2a: q2a,
      sharedConcepts: sharedQ1Q2aConcepts(q1, q2a)
    };
    empty.existing = {
      generalOrientation: slot(source, "transversal", "generalOrientation") ?? [],
      ordinaryActivity: slot(source, "discussion", "ordinaryActivity") ?? [],
      apaBenefit: benefit,
      autonomyDiscussion: autonomy,
      apaQuestions: slot(source, "discussion", "apaQuestions"),
      functionalContext: slot(source, "transversal", "functionalContext"),
      functionalQualification: slot(source, "transversal", "functionalQualification"),
      severeRegulatoryMemo: slot(source, "transversal", "severeRegulatoryMemo"),
      feasibility,
      multiprofessionalProgram: slot(source, "transversal", "multiprofessionalProgram")
    };
    empty.pendingMultiprofessionalEvidence = empty.existing.multiprofessionalProgram === null;

    // Textes A et B : deux situations distinctes validees le 30/10.
    // 'conditional' n'est jamais transforme en 'applicable'.
    if (benefit?.status === "conditional" && benefit.hasApplicable !== true) {
      empty.mainMessage = { text: CONDITIONAL_APA_TEXT, origin: "approved.conditionalQ2a" };
    } else if ((benefit?.status === "applicable" || benefit?.status === "noneIdentified") &&
      autonomy?.status === "ready" && typeof autonomy.message === "string" && autonomy.message.trim() &&
      autonomy.apaEvidenceState === benefit.status) {
      // Le libelle est celui du module U x Q2a deja valide, sans modification.
      empty.mainMessage = {
        text: autonomy.message, origin: "existing.autonomyDiscussion", branchId: autonomy.branchId ?? null
      };
    }
    if (benefit?.status === "applicable" &&
      (benefit.hasToVerify === true || Array.isArray(benefit.toVerify) && benefit.toVerify.length > 0)) {
      empty.additionalMessages.push({
        id: "otherApaCriteria", text: OTHER_CONDITIONS_TEXT,
        origin: "approved.otherQ2aCriteria"
      });
    }

    // Aides pratiques approuvees. Les absences / non explores ne sont
    // jamais traitees comme des difficultes ou des ressources disponibles.
    const practical = asObject(feasibility?.practical);
    if (practical?.cost === "difficulty") {
      empty.additionalMessages.push({ id: "cost", text: COST_TEXT, origin: "approved.feasibility" });
    }
    if (practical?.accessTransport === "difficulty") {
      empty.additionalMessages.push({ id: "transport", text: TRANSPORT_TEXT, origin: "approved.feasibility" });
    }
    if (practical?.support === "available") {
      empty.additionalMessages.push({ id: "support", text: SUPPORT_TEXT, origin: "approved.feasibility" });
    }
    // Pas de message sur la preference d'encadrement tant que son champ
    // exact n'est pas confirme ; ne pas deduire cela de socialModes/settings.
    return empty;
  }

  window.buildOrientationSynthesisDraftV1 = buildOrientationSynthesisDraftV1;
})();
