(function () {
  "use strict";

  // T4.4d : aide operationnelle locale, sur base T4.4c. Les messages ne selectionnent aucun cadre.
  // L'appreciation Q2a du medecin est independante de la documentation T3.
  // Les formulations complementaires ci-dessous proviennent de l'arbre remis
  // par le medecin le 02/11/2026 ; distinguer les etats documentaires.
  const M2_INSUFFICIENT_NO_EVIDENCE =
    "Aucun repère APA spécifique identifié. L'autonomie étant insuffisante, discuter un accompagnement adapté, notamment le niveau 3 si une pratique encadrée est possible en sécurité. Proposer des conseils simples pour augmenter progressivement l'activité physique et réduire la sédentarité. Explorer les freins, renforcer progressivement l'autonomie et mobiliser les ressources disponibles.";
  const M2_INSUFFICIENT_ALTERNATIVE =
    "L'autonomie étant insuffisante, discuter un accompagnement adapté, notamment le niveau 3 si une pratique encadrée est possible en sécurité. Proposer des conseils simples pour augmenter progressivement l'activité physique et réduire la sédentarité. Explorer les freins, renforcer progressivement l'autonomie et mobiliser les ressources disponibles.";
  const M2_PROGRAM_CONTEXT =
    "Un programme APA accompagné présente un bénéfice documenté dans cette situation. Discuter sa faisabilité et l'accord du patient.";
  const M2_PROGRAM_NO_ASSERTION =
    "Discuter la faisabilité d'un programme d'APA et l'accord du patient, sans présumer d'un bénéfice spécifique documenté dans les données disponibles.";
  const M2_Q2D_NO =
    "Le patient ne souhaite pas actuellement suivre un programme d’APA. Discuter d'un autre accompagnement adapté à ses capacités et à sa sécurité, notamment une activité physique ordinaire encadrée si elle est envisageable. Explorer les freins, proposer une progression adaptée et réévaluer les possibilités d'accompagnement lors du suivi.";
  const M2_Q2D_YES =
    "Le patient paraît en mesure de suivre le programme et l'accepte. Examiner les conditions pratiques de sa mise en œuvre et les autres critères cliniques avant de retenir éventuellement le niveau 2.";
  const M2_Q2C_NO =
    "Les conditions d'un programme APA ne paraissent pas actuellement réunies. Proposer une augmentation progressive et sûre de l'activité physique et une réduction de la sédentarité. Explorer les freins, renforcer l'autonomie et mobiliser les ressources disponibles.";
  const M3_PARTIAL_LEVELS_234 =
    "Discuter les niveaux 2, 3 ou 4 selon les besoins d'accompagnement, la faisabilité et les préférences du patient.";
  const M4_PARTIAL_LEVELS_34 =
    "Discuter le niveau 3 si un encadrement paraît utile ; le niveau 4 reste envisageable pour les activités que le patient peut gérer de façon autonome et sûre. Tenir compte de ses préférences et des possibilités d'accompagnement.";
  const M6_HIGH_LEVELS_34 =
    "Le niveau 4 peut être envisagé si le patient peut augmenter et maintenir son activité physique de façon autonome et sûre : adapter sa progression (durée, intensité), reconnaître les signes d'alerte et réagir de façon appropriée. Le niveau 3 peut être préférable si un encadrement est nécessaire ou fortement souhaité par le patient.";
  const M6_HAS_REMINDER =
    "Un programme APA présente un intérêt dans cette situation clinique. Toutefois, selon les critères HAS, le niveau 2 concerne notamment les patients ne pouvant augmenter leur activité physique de façon autonome, adaptée et sûre. Si le patient en est capable, discuter les niveaux 3 ou 4.";
  const M_CHECK_AUTONOMY =
    "Autonomie à vérifier : apprécier si le patient peut augmenter et maintenir son activité physique de façon adaptée et sûre, compte tenu des risques et adaptations nécessaires.";

  const LOCATIONS = Object.freeze({
    apa: ["orientationLocalApaT44a", "orientationLocalApaListT44a"],
    ordinary: ["orientationLocalOrdinaryT44a", "orientationLocalOrdinaryListT44a"],
    transversal: ["orientationSynthesisPreviewT44", "orientationSynthesisPreviewListT44"]
  });

  // Fonction pure, testable : q2c/q2d sont les reponses effectives du medecin.
  // Le rendu les lit au moment de la mise a jour ; jamais depuis l'etat documentaire.
  function selectOrientationLocalMessagesT44a(draft, physicianQ2a, q2cAnswer, q2dAnswer) {
    const result = { apa: [], ordinary: [], transversal: [] };
    if (!draft || draft.status !== "ready") return result;
    const benefit = draft.existing?.apaBenefit?.status ?? null;
    const autonomy = draft.existing?.autonomyDiscussion?.status === "ready"
      ? draft.existing.autonomyDiscussion.autonomy : null;
    const approvedMain = draft.mainMessage;

    // SI autonomie insuffisante : parcours sequentiel Q2a -> Q2c -> Q2d.
    if (autonomy === "insufficient") {
      if (physicianQ2a === "yes") {
        if (q2cAnswer === "no") {
          // Q2c non : le message d'echec de faisabilite remplace le message favorable.
          result.apa.push(M2_Q2C_NO);
        } else if (q2cAnswer === "yes" && q2dAnswer === "no") {
          // Refus du patient : alternative et jamais de message favorable APA.
          result.ordinary.push(M2_Q2D_NO);
        } else if (q2cAnswer === "yes" && q2dAnswer === "yes") {
          // Accord explicite : verifier encore les conditions cliniques et pratiques.
          result.apa.push(M2_Q2D_YES);
        } else {
          result.apa.push(benefit === "applicable" ? M2_PROGRAM_CONTEXT : M2_PROGRAM_NO_ASSERTION);
        }
      } else if (physicianQ2a === "no") {
        // Ne jamais traduire un Non medical en "aucun repere" si T3 en trouve.
        result.ordinary.push(benefit === "noneIdentified"
          ? M2_INSUFFICIENT_NO_EVIDENCE : M2_INSUFFICIENT_ALTERNATIVE);
      }
      // Q2a absente ou a verifier : attendre l'appreciation du medecin.
      // Ne pas afficher de message alternatif ni de lien anticipe vers 3/4.
    } else if (autonomy === "partial") {
      if (physicianQ2a === "yes" || physicianQ2a == null) {
        if (q2cAnswer === "no") {
          result.apa.push(M2_Q2C_NO);
          result.ordinary.push(M4_PARTIAL_LEVELS_34);
        } else if (q2dAnswer === "no") {
          result.ordinary.push(M4_PARTIAL_LEVELS_34);
        } else {
          // Bascule 2/3/4 meme sans pathologie, sans annoncer de preuve non verifiee.
          const discussed = draft.existing?.autonomyDiscussion?.message;
          if (physicianQ2a === "yes" && benefit === "applicable" &&
              typeof discussed === "string" && discussed.includes("Discuter les niveaux 2, 3 ou 4")) {
            result.apa.push(discussed);
          } else {
            result.apa.push(M3_PARTIAL_LEVELS_234);
          }
        }
      } else {
        // Q2a Non ou A verifier : la discussion 3/4 n'exclut pas un reevaluation.
        result.ordinary.push(M4_PARTIAL_LEVELS_34);
      }
    } else if (autonomy === "high") {
      if (physicianQ2a === "yes" && benefit === "applicable") {
        result.ordinary.push(M6_HAS_REMINDER);
      }
      result.ordinary.push(M6_HIGH_LEVELS_34);
    } else if (autonomy === "check") {
      result.ordinary.push(M_CHECK_AUTONOMY);
    }

    // La reserve documentaire reste distincte de l'appreciation du medecin.
    // Ne jamais la reproduire si le medecin ecarte Q2a.
    if (physicianQ2a === "yes" && autonomy !== "high" &&
        !(q2cAnswer === "no" || q2dAnswer === "no" ||
          (autonomy === "insufficient" && q2cAnswer === "yes" && q2dAnswer === "yes")) &&
        approvedMain?.origin === "approved.conditionalQ2a" &&
        typeof approvedMain.text === "string" && approvedMain.text.trim()) {
      result.apa.push(approvedMain.text);
    }

    for (const message of Array.isArray(draft.additionalMessages) ? draft.additionalMessages : []) {
      if (!message || typeof message.text !== "string" || !message.text.trim()) continue;
      if (message.id === "otherApaCriteria" && message.origin === "approved.otherQ2aCriteria") {
        if (physicianQ2a === "yes") result.apa.push(message.text);
      } else if (["cost", "transport", "support"].includes(message.id) &&
          message.origin === "approved.feasibility") {
        result.transversal.push(message.text);
      }
    }
    return result;
  }

  function drawMessages(hostId, listId, messages) {
    const host = document.getElementById(hostId);
    const list = document.getElementById(listId);
    if (!host || !list) return;
    list.replaceChildren();
    for (const message of messages) {
      const item = document.createElement("li");
      item.textContent = message;
      item.style.marginBottom = "4px";
      list.appendChild(item);
    }
    host.hidden = messages.length === 0;
  }

  function renderOrientationLocalAidT44a(draft, physicianQ2a) {
    const q2c = document.querySelector('input[name="orientation_apa_program_followup"]:checked')?.value ?? null;
    const q2d = document.querySelector('input[name="orientation_apa_program_acceptance"]:checked')?.value ?? null;
    const grouped = selectOrientationLocalMessagesT44a(draft, physicianQ2a, q2c, q2d);
    for (const key of Object.keys(LOCATIONS)) {
      drawMessages(...LOCATIONS[key], grouped[key]);
    }
    // T4.4d : repere non bloquant pour U elevee, sans masquer Q2a ni les cadres.
    const autonomy = draft?.existing?.autonomyDiscussion?.status === "ready"
      ? draft.existing.autonomyDiscussion.autonomy : null;
    const highMemo = document.getElementById("orientationHighAutonomyMemoT44d");
    if (highMemo) {
      highMemo.hidden = autonomy !== "high";
      highMemo.style.display = autonomy === "high" ? "block" : "none";
    }
    // La navigation reste volontaire. Ne jamais defiler sur changement de reponse.
    const gotoOrdinary = document.getElementById("orientationGotoOrdinaryT44d");
    if (gotoOrdinary) {
      const show = grouped.ordinary.length > 0;
      gotoOrdinary.hidden = !show;
      gotoOrdinary.style.display = show ? "inline-block" : "none";
    }
    syncOrientationLocalButtonsT44a();
  }

  function syncOrientationLocalButtonsT44a() {
    document.querySelectorAll("[data-pap-orientation-retain]").forEach(button => {
      const value = button.getAttribute("data-pap-orientation-retain");
      const input = document.querySelector('input[name="orientation_framework"][value="' + value + '"]');
      if (!input) return;
      const number = button.getAttribute("data-pap-level-number");
      button.textContent = input.checked ? "Niveau " + number + " retenu — retirer" : "Retenir niveau " + number;
      button.setAttribute("aria-pressed", String(input.checked));
    });
  }

  function initOrientationLocalButtonsT44a() {
    const nav = document.getElementById("orientationGotoOrdinaryT44d");
    if (nav) nav.addEventListener("click", function () {
      const target = document.getElementById("orientationOrdinaryPanelT44d");
      if (target && typeof target.scrollIntoView === "function") {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    document.querySelectorAll("[data-pap-orientation-retain]").forEach(button => {
      button.addEventListener("click", function () {
        const value = button.getAttribute("data-pap-orientation-retain");
        const input = document.querySelector('input[name="orientation_framework"][value="' + value + '"]');
        if (input && !input.disabled) input.click(); // Evenement normal, dont relais EAPA/ES.
        syncOrientationLocalButtonsT44a();
      });
    });
    document.querySelectorAll('input[name="orientation_framework"]').forEach(input => {
      input.addEventListener("change", syncOrientationLocalButtonsT44a);
    });
    syncOrientationLocalButtonsT44a();
  }

  window.selectOrientationLocalMessagesT44a = selectOrientationLocalMessagesT44a;
  window.renderOrientationLocalAidT44a = renderOrientationLocalAidT44a;
  window.syncOrientationLocalButtonsT44a = syncOrientationLocalButtonsT44a;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initOrientationLocalButtonsT44a, {once:true});
  } else {
    initOrientationLocalButtonsT44a();
  }
})();
