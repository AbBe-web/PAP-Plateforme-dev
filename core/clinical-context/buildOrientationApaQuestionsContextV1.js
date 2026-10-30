(function () {
  "use strict";

  // T3.4 — Visibilite theorique des questions APA, donnees uniquement.
  // Consomme le resultat de T3.3; ne calcule pas U ni Q2a.
  // Ne lit/reecrit pas le DOM, les reponses du patient ni les niveaux.
  // Les libelles ci-dessous ont ete approuves le 30/10/2026.
  const QUESTION_Q2C =
    "Le patient paraît-il suffisamment motivé et en mesure de suivre régulièrement un programme APA jusqu'à son terme ?";
  const QUESTION_Q2D_INSUFFICIENT =
    "Le patient accepte-t-il de suivre ce programme APA ?";
  const QUESTION_Q2D_PARTIAL =
    "Si un programme APA est proposé au patient, le patient accepterait-il de le suivre ?";

  function buildOrientationApaQuestionsContextV1(discussionContext, q2cAnswer) {
    const source = discussionContext && typeof discussionContext === "object"
      ? discussionContext
      : null;
    const autonomy = source?.status === "ready" ? source.autonomy : null;
    const apaState = source?.apaEvidenceState ?? null;

    // Une condition a verifier, seule, n'est pas une indication APA confirmee.
    // Un repere applicable peut coexister avec un autre a verifier : garder ce signal.
    const applicable = apaState === "applicable";
    const isSequential = applicable && autonomy === "insufficient";
    const isParallel = applicable && autonomy === "partial";
    const q2cVisible = isSequential || isParallel;
    const q2dVisible = isParallel || (isSequential && q2cAnswer === "yes");

    return {
      version: "1.0.0",
      status: !source ? "unavailable" : (source.status !== "ready" ? source.status : "ready"),
      mode: isSequential ? "sequential" : (isParallel ? "parallel" : "none"),
      q2c: {
        visible: q2cVisible,
        text: q2cVisible ? QUESTION_Q2C : null
      },
      q2d: {
        visible: q2dVisible,
        text: q2dVisible
          ? (isSequential ? QUESTION_Q2D_INSUFFICIENT : QUESTION_Q2D_PARTIAL)
          : null,
        // Si invisible, une reponse anterieure ne devra pas etre interpretee.
        answerApplicable: q2dVisible
      },
      // Conserver l'incertitude issue de T3.3, meme si une Q2a est applicable.
      hasOtherApaConditionsToVerify: source?.hasOtherApaConditionsToVerify === true,
      // Aucune action automatique sur les reponses, le DOM ou les choix.
    };
  }

  window.buildOrientationApaQuestionsContextV1 =
    buildOrientationApaQuestionsContextV1;
})();
