document.addEventListener("DOMContentLoaded", function () {

    const resetBtn = document.getElementById("resetConsultationBtn");

    if (!resetBtn) {
        console.log("Bouton reset non trouvé");
        return;
    }

    //----------------------------------
    // OUVERTURE MODAL CONFIRMATION
    //----------------------------------
    resetBtn.addEventListener("click", function () {

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
    });

    //----------------------------------
    // RESET COMPLET
    //----------------------------------
    function executeFullReset() {

        // 1. Reset formulaire
        const form = document.getElementById("consultationForm");

        if (form) {
            form.reset();
        }

        // 2. Sécurité décocher
        document.querySelectorAll(
            'input[type="checkbox"], input[type="radio"]'
        ).forEach(input => {
            input.checked = false;
        });

        // 3. Vider champs
        document.querySelectorAll(`
            input[type="text"],
            input[type="number"],
            input[type="date"],
            textarea
        `).forEach(field => {
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
            "renforcement_musculaire_subgroup",
            "qrScannerContainer",
            "reportOutput",
            "formatTabs",
            "resetSection"
        ];

        dynamicBlocks.forEach(id => {
            const el = document.getElementById(id);

            if (el) {
                el.classList.add("hidden");
                el.style.display = "none";
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

        console.log("Nouvelle consultation prête");
    }

});
