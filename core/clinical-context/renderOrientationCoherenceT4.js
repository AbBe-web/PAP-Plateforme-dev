(function () {
  "use strict";

  // Guide PAP — T4_COHERENCE_20261103.
  // Les quatre rappels sont strictement explicatifs et non bloquants.
  // Ce module ne touche jamais aux valeurs, aux cases ni aux documents.
  const CONDITIONS = Object.freeze([
    {
      id: "autonomie-insuffisante-niveau4",
      title: "Autonomie et niveau 4",
      text: "L'autonomie a été jugée insuffisante. Si le niveau 4 est retenu, vérifier les activités réalisables de façon autonome, adaptée et sûre.",
      when: state => state.autonomy === "insufficient" && state.level4
    },
    {
      id: "autonomie-elevee-niveau2",
      title: "Autonomie et niveau 2 — repère HAS",
      text: "Une autonomie élevée oriente vers les niveaux 3 ou 4. Si le niveau 2 est retenu, réexaminer l'appréciation de l'autonomie et les besoins d'accompagnement.",
      when: state => state.autonomy === "high" && state.level2
    },
    {
      id: "suivi-programme-niveau2",
      title: "Capacité à suivre le programme APA",
      text: "Le patient ne paraît pas actuellement en mesure de suivre régulièrement un programme APA jusqu'à son terme. Si le niveau 2 est retenu, réexaminer sa faisabilité et les moyens de lever les freins identifiés.",
      when: state => state.q2c === "no" && state.level2
    },
    {
      id: "accord-programme-niveau2",
      title: "Accord du patient",
      text: "Le patient ne souhaite pas actuellement suivre le programme APA. Si le niveau 2 est retenu, rediscuter son acceptabilité et les autres modalités d'accompagnement possibles.",
      when: state => state.q2d === "no" && state.level2
    }
  ]);

  function readOrientationCoherenceStateT4() {
    const selected = name => document.querySelector('input[name="' + name + '"]:checked')?.value ?? null;
    const retained = value => Boolean(document.querySelector('input[name="orientation_framework"][value="' + value + '"]')?.checked);
    return {
      autonomy: selected("orientation_autonomy_u"),
      q2c: selected("orientation_apa_program_followup"),
      q2d: selected("orientation_apa_program_acceptance"),
      level2: retained("apa"),
      level4: retained("autonomousOrdinaryAP")
    };
  }

  function selectOrientationCoherenceMessagesT4(state) {
    if (!state || typeof state !== "object") return [];
    return CONDITIONS.filter(condition => condition.when(state))
      .map(({ id, title, text }) => ({ id, title, text }));
  }

  // Le conteneur des quatre cases de niveau est notre ancrage, hors aide facultative.
  // Si la structure HTML a changé, ne rien injecter à un emplacement hasardeux.
  function findOrientationChoicesContainerT4() {
    const last = document.querySelector('input[name="orientation_framework"][value="autonomousOrdinaryAP"]');
    let node = last?.parentElement ?? null;
    for (let depth = 0; node && depth < 8; depth++, node = node.parentElement) {
      if (typeof node.querySelectorAll !== "function") continue;
      if (node.querySelectorAll('input[name="orientation_framework"]').length !== 4) continue;
      // Éviter de prendre tout le panneau d'orientation ou le formulaire.
      if (node.querySelectorAll('input[name="orientation_autonomy_u"]').length) continue;
      if (typeof node.insertAdjacentElement === "function") return node;
    }
    return null;
  }

  function createOrientationCoherencePanelT4(anchor) {
    const panel = document.createElement("section");
    panel.id = "orientationCoherencePanelT4";
    panel.hidden = true;
    panel.setAttribute("role", "note");
    panel.style.cssText = "margin:8px 0 10px;padding:9px 11px;border:1px solid #dbe4ee;border-left:3px solid #94a3b8;border-radius:7px;background:#f8fafc;color:#334155;line-height:1.4;";
    const heading = document.createElement("strong");
    heading.textContent = "Points de cohérence à vérifier";
    heading.style.cssText = "display:block;font-size:0.9rem;margin-bottom:4px;";
    const list = document.createElement("ul");
    list.id = "orientationCoherenceListT4";
    list.style.cssText = "font-size:0.88rem;margin:0;padding-left:19px;";
    panel.appendChild(heading);
    panel.appendChild(list);
    anchor.insertAdjacentElement("afterend", panel);
    return panel;
  }

  // T4_COHERENCE_DEDOUBLON_20261103 : le message Q2c Non figure déjà dans l'aide APA ouverte.
  function orientationDetailedHelpOpenT4() {
    const detail = document.getElementById("orientation_ap_subgroup");
    return detail?.style?.display === "block";
  }

  function renderOrientationCoherenceT4() {
    const allMessages = selectOrientationCoherenceMessagesT4(readOrientationCoherenceStateT4());
    const messages = orientationDetailedHelpOpenT4()
      ? allMessages.filter(message => message.id !== "suivi-programme-niveau2")
      : allMessages;
    let panel = document.getElementById("orientationCoherencePanelT4");
    // Aucune création ni élément visible si aucune discordance n'est identifiée.
    if (!panel && messages.length === 0) return;
    if (!panel) {
      const anchor = findOrientationChoicesContainerT4();
      if (!anchor) return;
      panel = createOrientationCoherencePanelT4(anchor);
    }
    const list = document.getElementById("orientationCoherenceListT4");
    if (!list) return;
    list.replaceChildren();
    for (const message of messages) {
      const li = document.createElement("li");
      li.style.marginBottom = "4px";
      const title = document.createElement("strong");
      title.textContent = message.title + " : ";
      const body = document.createElement("span");
      body.textContent = message.text;
      li.appendChild(title);
      li.appendChild(body);
      list.appendChild(li);
    }
    panel.hidden = messages.length === 0;
    panel.style.display = messages.length ? "block" : "none";
  }

  // Les changements de cases sont explicites ; aucune sélection ni correction automatique.
  document.addEventListener("change", function (event) {
    const name = event?.target?.name;
    if (!["orientation_autonomy_u", "orientation_framework",
          "orientation_apa_program_followup", "orientation_apa_program_acceptance",
          "orientation_ap_toggle"].includes(name)) return;
    renderOrientationCoherenceT4();
  });
  // Le gestionnaire du bouton actualise d'abord le panneau, puis l'événement remonte ici.
  document.addEventListener("click", function (event) {
    if (event?.target?.id === "orientationApaToggleButton" ||
        event?.target?.closest?.("#orientationApaToggleButton")) {
      renderOrientationCoherenceT4();
    }
  });
  window.readOrientationCoherenceStateT4 = readOrientationCoherenceStateT4;
  window.selectOrientationCoherenceMessagesT4 = selectOrientationCoherenceMessagesT4;
  window.renderOrientationCoherenceT4 = renderOrientationCoherenceT4;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderOrientationCoherenceT4, { once: true });
  } else {
    renderOrientationCoherenceT4();
  }
})();
