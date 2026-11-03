(function () {
  "use strict";
  // T4 complement 1 : read-only restitution des deux reperes T3.2.
  // Aucun calcul du profil global et aucune selection de niveau/professionnel.
  const REGULATORY_URL = "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047381390";

  function selectOrientationFunctionalRepersT4Comp1(viewModel, level2Checked) {
    const qualification = viewModel?.orientationFunctionalQualificationCueV1;
    const severe = viewModel?.orientationSevereFunctionalRegulatoryCueV1;
    return {
      qualificationVisible: qualification?.applicable === true,
      qualificationText: qualification?.applicable === true && typeof qualification.message === "string"
        ? qualification.message : "",
      severeVisible: severe?.applicable === true,
      severeApaVisible: severe?.applicable === true && level2Checked === true
    };
  }

  function setVisible(id, visible) {
    const el = document.getElementById(id);
    if (!el) return;
    el.hidden = !visible;
    // Eviter qu'un style de l'application masque le repere lorsque requis.
    el.style.display = visible ? "block" : "none";
  }

  function renderOrientationFunctionalRepersT4Comp1(viewModel) {
    const level2 = document.querySelector('input[name="orientation_framework"][value="apa"]');
    const result = selectOrientationFunctionalRepersT4Comp1(viewModel, level2?.checked === true);
    const qualification = document.getElementById("orientationQualificationT4Comp1Text");
    if (qualification) qualification.textContent = result.qualificationText;
    setVisible("orientationQualificationT4Comp1", result.qualificationVisible);
    setVisible("orientationSevereRegulatoryT4Comp1", result.severeVisible);
    setVisible("orientationSevereApaT4Comp1", result.severeApaVisible);
    // Conserver uniquement les donnees T3, pour les changements de niveau 2.
    window.PAP_ORIENTATION_FUNCTIONAL_CUES_T4COMP1 = viewModel || null;
    return result;
  }

  function onRelevantChange(event) {
    const target = event?.target;
    if (!target || typeof target.matches !== "function") return;
    if (target.matches('input[name="orientation_framework"][value="apa"]')) {
      renderOrientationFunctionalRepersT4Comp1(window.PAP_ORIENTATION_FUNCTIONAL_CUES_T4COMP1);
      return;
    }
    if (target.matches('input[data-functional-limitation-radio]')) {
      // Une cotation change les donnees dont T3.2 depend : recalcul par la chaine existante.
      if (typeof renderClinicalCognitiveAidV2 === "function") renderClinicalCognitiveAidV2();
    }
  }

  function onRelevantClick(event) {
    const target = event?.target;
    if (!target || typeof target.closest !== "function") return;
    if (target.closest('[data-functional-clear]')) {
      // Delegation apres l'effacement execute par le handler local du bouton.
      if (typeof renderClinicalCognitiveAidV2 === "function") renderClinicalCognitiveAidV2();
    }
  }

  document.addEventListener("change", onRelevantChange);
  document.addEventListener("click", onRelevantClick);
  window.selectOrientationFunctionalRepersT4Comp1 = selectOrientationFunctionalRepersT4Comp1;
  window.renderOrientationFunctionalRepersT4Comp1 = renderOrientationFunctionalRepersT4Comp1;
  window.PAP_ORIENTATION_T4COMP1_REGULATORY_URL = REGULATORY_URL;
})();
