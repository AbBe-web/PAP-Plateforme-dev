(function () {
  "use strict";

  // T3.3 — Aide cognitive de discussion U × Q2a, sans décision.
  // U est exclusivement déclarée par le médecin : jamais déduite des limitations.
  // La visibilité de Q2c/Q2d appartient à T3.4 et le rendu HTML à T4.
  const AUTONOMY_VALUES = new Set(["insufficient", "partial", "high", "check"]);
  const Q2A_STATES = new Set([
    "applicable", "conditional", "noneIdentified", "unclassified", "unavailable"
  ]);

  const MESSAGES = {
    insufficient: {
      applicable:
        "Un programme APA accompagné présente un intérêt dans cette situation. Discuter sa faisabilité et l’accord du patient.",
      noneIdentified:
        "Aucun repère APA spécifique identifié. L’autonomie étant insuffisante, discuter un accompagnement adapté, notamment le niveau 3 si une pratique encadrée est possible en sécurité. Proposer des conseils simples pour augmenter progressivement l’activité physique et réduire la sédentarité. Explorer les freins, renforcer progressivement l’autonomie et mobiliser les ressources disponibles.",
      pending:
        "Un repère APA spécifique existe, mais ses conditions cliniques restent à vérifier. Dans l’attente, discuter un accompagnement adapté, des conseils progressifs et une pratique encadrée uniquement si elle peut être réalisée en sécurité."
    },
    partial: {
      applicable:
        "Un programme APA présente un intérêt dans cette situation. Discuter les niveaux 2, 3 ou 4 selon les besoins d’accompagnement, la faisabilité et les préférences du patient.",
      noneIdentified:
        "Discuter le niveau 3 si un encadrement paraît utile ; le niveau 4 reste envisageable pour les activités que le patient peut gérer de façon autonome et sûre. Tenir compte de ses préférences et des possibilités d’accompagnement.",
      pending:
        "Le bénéfice spécifique d’un programme APA reste à préciser selon les critères cliniques à vérifier. Discuter les cadres possibles selon les capacités, les besoins d’encadrement et les préférences, sans présumer du niveau 2."
    },
    high: {
      applicable:
        "Un programme APA présente un intérêt dans cette situation clinique. Toutefois, selon les critères HAS, le niveau 2 concerne notamment les patients ne pouvant augmenter leur activité physique de façon autonome, adaptée et sûre. Si le patient en est capable, discuter les niveaux 3 ou 4.",
      noneIdentified:
        "Le niveau 4 peut être envisagé si le patient peut augmenter et maintenir son activité physique de façon autonome et sûre : adapter sa progression (durée, intensité), reconnaître les signes d’alerte et réagir de façon appropriée. Le niveau 3 peut être préférable si un encadrement est nécessaire ou fortement souhaité par le patient.",
      pending:
        "Discuter les niveaux 3 ou 4 selon les besoins d’encadrement et les préférences. Un repère APA spécifique existe mais ses conditions cliniques doivent être vérifiées avant de conclure à son applicabilité."
    },
    check: {
      applicable:
        "Autonomie à vérifier : apprécier si le patient peut augmenter et maintenir son activité physique de façon adaptée et sûre. Un repère APA spécifique est identifié, sans présumer du cadre à retenir.",
      noneIdentified:
        "Autonomie à vérifier : apprécier les capacités, les risques et les possibilités d’encadrement. Aucun repère APA spécifique n’a été identifié dans les données disponibles ; cela n’exclut pas un bénéfice.",
      pending:
        "Autonomie et critères du repère APA à vérifier : ne pas conclure à un cadre de pratique avant discussion clinique."
    }
  };

  function buildOrientationAutonomyDiscussionContextV1(autonomy, apaBenefitContext) {
    const isValidAutonomy = AUTONOMY_VALUES.has(autonomy);
    const isUnassessedAutonomy = autonomy === null || autonomy === undefined || autonomy === "";
    const rawState = apaBenefitContext && typeof apaBenefitContext === "object"
      ? apaBenefitContext.status : null;
    const apaEvidenceState = Q2A_STATES.has(rawState) ? rawState : "unavailable";
    const hasToVerify = Boolean(
      apaBenefitContext &&
      (apaBenefitContext.hasToVerify === true ||
        (Array.isArray(apaBenefitContext.toVerify) && apaBenefitContext.toVerify.length > 0))
    );

    const result = {
      version: "1.0.0",
      status: isUnassessedAutonomy ? "unassessed" : (isValidAutonomy ? "ready" : "invalidAutonomy"),
      autonomy: isValidAutonomy ? autonomy : null,
      apaEvidenceState,
      hasOtherApaConditionsToVerify: hasToVerify,
      branchId: null,
      message: "",
      caution: null
    };

    if (!isValidAutonomy) {
      return result;
    }

    // « Non identifié » n'est jamais utilisé par défaut si la donnée Q2a manque.
    if (apaEvidenceState === "unavailable" || apaEvidenceState === "unclassified") {
      result.branchId = "u." + autonomy + ".q2a." + apaEvidenceState;
      result.message = "Les repères APA ne sont pas suffisamment qualifiés pour cette situation. Conserver une discussion clinique des possibilités d’activité physique sans conclure à une absence de bénéfice APA.";
      result.caution = apaEvidenceState === "unclassified"
        ? "Une condition de connaissance APA n’est pas interprétable par le moteur actuel."
        : "Le contexte documentaire APA est indisponible.";
      return result;
    }

    const messageVariant = apaEvidenceState === "conditional" ? "pending" : apaEvidenceState;
    result.branchId = "u." + autonomy + ".q2a." + apaEvidenceState;
    result.message = MESSAGES[autonomy][messageVariant];
    if (hasToVerify) {
      result.caution = "Un ou plusieurs repères APA comportent encore des critères cliniques à vérifier, même si un autre repère est applicable.";
    }
    return result;
  }

  window.buildOrientationAutonomyDiscussionContextV1 =
    buildOrientationAutonomyDiscussionContextV1;
})();
