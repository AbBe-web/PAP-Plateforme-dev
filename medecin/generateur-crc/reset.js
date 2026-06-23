document.addEventListener("DOMContentLoaded", function () {

    //----------------------------------
    // OUVERTURE MODAL CONFIRMATION
    //----------------------------------
    function openResetModal() {

        const resetModal = document.getElementById("resetConfirmModal");
        const confirmBtn = document.getElementById("confirmResetBtn");
        const cancelBtn = document.getElementById("cancelResetBtn");

        if (!resetModal || !confirmBtn || !cancelBtn) return;

        resetModal.classList.remove("hidden");

        // Annuler
        cancelBtn.onclick = function () {
            resetModal.classList.add("hidden");
        };

        // Confirmer
        confirmBtn.onclick = function () {
            resetModal.classList.add("hidden");
            executeFullReset();
        };
    }

    //----------------------------------
    // BOUTONS NOUVELLE CONSULTATION
    //----------------------------------
    document.addEventListener("click", function (e) {

        const resetTrigger = e.target.closest(
            "#resetConsultationBtn, #resetConsultationBtnTop, .reset-consultation-btn, [data-reset-consultation]"
        );

        if (!resetTrigger) return;

        e.preventDefault();
        e.stopPropagation();

        openResetModal();
    });

    // Compatibilité éventuelle avec un ancien appel global
    window.openResetConsultationModal = openResetModal;

    //----------------------------------
    // RESET COMPLET
    //----------------------------------
    function executeFullReset() {

        // 1. Reset formulaire
        const form = document.getElementById("consultationForm");

        if (form) {
            form.reset();
        }

// 1 bis. Reset identité temporaire du patient
// Ces variables sont utilisées par la modale impression / copie.
if (typeof lastPrenom !== "undefined") {
    lastPrenom = "";
}

if (typeof lastNom !== "undefined") {
    lastNom = "";
}

if (typeof identityAction !== "undefined") {
    identityAction = null;
}

const modalPrenom =
    document.getElementById("modalPrenom");

const modalNom =
    document.getElementById("modalNom");

const prenomPreview =
    document.getElementById("prenomPreview");

const nomPreview =
    document.getElementById("nomPreview");

if (modalPrenom) {
    modalPrenom.value = "";
}

if (modalNom) {
    modalNom.value = "";
}

if (prenomPreview) {
    prenomPreview.textContent = "";
}

if (nomPreview) {
    nomPreview.textContent = "";
}

        // 2. Sécurité décocher
        document.querySelectorAll(
            'input[type="checkbox"], input[type="radio"]'
        ).forEach(input => {
            input.checked = false;
        });

// 3. Vider les champs liés à la consultation patient
// Les coordonnées médecin sont conservées séparément et disposent
// de leur propre bouton de réinitialisation.
document.querySelectorAll(`
    input[type="text"],
    input[type="number"],
    input[type="date"],
    textarea
`).forEach(field => {

    if (field.closest("#physicianIdentityBlock")) {
        return;
    }

    field.value = "";
});

        // 4. Reset selects
        document.querySelectorAll("select").forEach(select => {
            select.selectedIndex = 0;
        });

        // 5. Reset IMC
        const imcResult = document.getElementById("imc_result");
        if (imcResult) {
            imcResult.innerHTML = "";
        }

        // 6. Masquer blocs dynamiques
        const dynamicBlocks = [
            "symptomes_alert",
            "qrScannerContainer",
            "reportOutput",
            "formatTabs",
            "resetSection"
        ];

       dynamicBlocks.forEach(id => {
    const el = document.getElementById(id);

    if (el) {
        el.classList.add("hidden");

        // uniquement pour les blocs qui utilisent display inline
        if (
            id === "symptomes_alert" ||
            id === "renforcement_musculaire_subgroup" ||
            id === "qrScannerContainer"
        ) {
            el.style.display = "none";
        }
    }
});

        // Réafficher bouton générer
        const generateBtn = document.getElementById("generateReport");
        if (generateBtn) {
            generateBtn.classList.remove("hidden");
        }

        // 7. Fermer popup courte
        const popup = document.getElementById("infoPopup");

        if (popup) {
            popup.style.display = "none";
            popup.dataset.anchor = "";
        }

        // 8. Fermer modal info
        const modal = document.getElementById("infoModal");

        if (modal) {
            modal.classList.add("hidden");
        }

        // 9. Nettoyer output
        const outputContainer = document.getElementById("outputContainer");

        if (outputContainer) {
            outputContainer.innerHTML = "";
        }

        // 10. Reset onglets
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        const firstTab = document.querySelector(
            '.tab-btn[data-mode="long"]'
        );

        if (firstTab) {
            firstTab.classList.add("active");
        }

        // Reset état JS
        if (typeof activeMode !== "undefined") {
            activeMode = "long";
        }

        if (typeof crcMode !== "undefined") {
            crcMode = "long";
        }

// Reset des sorties documentaires temporaires
if (typeof renderedOutput !== "undefined") {
    renderedOutput.html = "";
    renderedOutput.text = "";
    renderedOutput.edited = false;
}

if (typeof isEditingOutput !== "undefined") {
    isEditingOutput = false;
}

const finalTextContainer =
    document.getElementById("finalTextContainer");

const finalTextOutput =
    document.getElementById("finalTextOutput");

const browserPrintOutput =
    document.getElementById("browserPrintOutput");

if (finalTextContainer) {
    finalTextContainer.style.display = "none";
}

if (finalTextOutput) {
    finalTextOutput.value = "";
}

if (browserPrintOutput) {
    browserPrintOutput.innerHTML = "";
}

        // 11. Reset import JSON
        const importFile = document.getElementById("importJSONFile");

        if (importFile) {
            importFile.value = "";
        }

        // 12. Scroll haut
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

       if (typeof consultationState !== "undefined") {

  consultationState.reportGenerated = false;
  consultationState.reportDirty = false;

  console.log(
    "RESET CONSULTATION STATE",
    consultationState
  );

}

const crcWarning =
  document.getElementById("crcDirtyWarning");

if (crcWarning) {
  crcWarning.classList.add("hidden");
} 

// Reset complet du mode aérobie : FITT et Pas/jour
const aerobieFittBlock =
    document.getElementById("ordonnance_aerobie_subgroup");

const aerobieIntensityBlock =
    document.getElementById("intensite_aerobie_block");

const aerobieStepsBlock =
    document.getElementById("aerobie_pas_subgroup");

if (aerobieFittBlock) {
    aerobieFittBlock.style.display = "none";
}

if (aerobieIntensityBlock) {
    aerobieIntensityBlock.style.display = "none";
}

if (aerobieStepsBlock) {
    aerobieStepsBlock.style.display = "none";
}

toggleSubgroup(
  "renforcement_musculaire",
  "renforcement_musculaire_subgroup"
);

toggleSubgroup(
  "souplesse_mobilite",
  "souplesse_mobilite_subgroup"
);

updatePathoHelp();
updatePathoRules();

// 13. Resynchronisation UI body-map locomotrice
// Important : reset.js décoche bien les checkboxes,
// mais la silhouette doit être réalignée visuellement.
if (typeof updateBodyMapFromCheckboxes === "function") {
    updateBodyMapFromCheckboxes();
}

if (typeof updateAPALimitationsCompactText === "function") {
    updateAPALimitationsCompactText();
}

const selectedZones =
    document.getElementById("bodyMapSelectedZones");

if (selectedZones) {
    selectedZones.textContent = "Aucune";
}

if (typeof closeAPALimitationsPanelAfterReset === "function") {
    closeAPALimitationsPanelAfterReset();
}

if (typeof updateMedicationApaPanel === "function") {
    updateMedicationApaPanel();
}

if (typeof updateMedicationOtherField === "function") {
    updateMedicationOtherField();
}

// 14. Reset bloc tests physiques / condition physique
if (typeof resetPhysicalTestsPanelAfterReset === "function") {
    resetPhysicalTestsPanelAfterReset();
}

if (typeof updatePhysicalTestsPanel === "function") {
    updatePhysicalTestsPanel();
}

// 15. Reset orientation / encadrement APA
if (typeof resetOrientationPanelAfterReset === "function") {
    resetOrientationPanelAfterReset();
}

}

});
