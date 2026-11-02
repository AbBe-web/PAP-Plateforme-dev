(function () {
  "use strict";

  // T4.4 : presentation seule des messages deja composes par T3.
  // Les donnees documentaires ne remplacent jamais l'appreciation medicale Q2a.
  function selectOrientationSynthesisPreviewT44(draft, physicianQ2a) {
    if (!draft || draft.status !== "ready") return [];
    const items = [];
    const benefitStatus = draft.existing?.apaBenefit?.status ?? null;
    const main = draft.mainMessage;

    if (main && typeof main.text === "string" && main.text.trim()) {
      if (main.origin === "approved.conditionalQ2a") {
        // Une incertitude documentaire peut etre evoquee sauf si le medecin a dit Non.
        if (physicianQ2a !== "no") items.push(main.text);
      } else if (main.origin === "existing.autonomyDiscussion") {
        // Eviter un message d'interet APA si la preuve documentaire ou l'avis medical manque.
        if (physicianQ2a === "yes" && benefitStatus === "applicable") {
          items.push(main.text);
        }
      }
    }

    for (const message of Array.isArray(draft.additionalMessages) ? draft.additionalMessages : []) {
      if (!message || typeof message.text !== "string" || !message.text.trim()) continue;
      if (message.id === "otherApaCriteria" && physicianQ2a !== "yes") continue;
      // Seuls les messages explicitement approuves dans T3.6b.2b sont restitues.
      if (message.origin !== "approved.otherQ2aCriteria" &&
          message.origin !== "approved.feasibility") continue;
      items.push(message.text);
    }
    return items;
  }

  function renderOrientationSynthesisPreviewT44(draft, physicianQ2a) {
    const host = document.getElementById("orientationSynthesisPreviewT44");
    if (!host) return;
    const list = document.getElementById("orientationSynthesisPreviewListT44");
    if (!list) return;
    const items = selectOrientationSynthesisPreviewT44(draft, physicianQ2a);
    list.replaceChildren();
    for (const message of items) {
      const item = document.createElement("li");
      item.textContent = message; // Ne jamais injecter du HTML depuis les donnees cliniques.
      item.style.marginBottom = "4px";
      list.appendChild(item);
    }
    host.hidden = items.length === 0;
  }

  window.selectOrientationSynthesisPreviewT44 = selectOrientationSynthesisPreviewT44;
  window.renderOrientationSynthesisPreviewT44 = renderOrientationSynthesisPreviewT44;
})();
