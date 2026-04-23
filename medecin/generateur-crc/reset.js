document.addEventListener("DOMContentLoaded", function () {

    const resetBtn = document.getElementById("resetConsultationBtn");

    if (!resetBtn) {
        console.log("Bouton reset non trouvé");
        return;
    }

    resetBtn.addEventListener("click", function () {

        const confirmReset = confirm(
            "Voulez-vous démarrer une nouvelle consultation ?"
        );

        if (!confirmReset) return;

        //----------------------------------
        // 1. Reset du formulaire principal
        //----------------------------------
        const form = document.getElementById("consultationForm");

        if (form) {
            form.reset();
        }

        //----------------------------------
        // 2. Sécurité : décocher tout
        //----------------------------------
        document.querySelectorAll(
            'input[type="checkbox"], input[type="radio"]'
        ).forEach(input => {
            input.checked = false;
        });

        //----------------------------------
        // 3. Vider champs texte/nombre/date
        //----------------------------------
        document.querySelectorAll(`
            input[type="text"],
            input[type="number"],
            input[type="date"],
            textarea
        `).forEach(field => {
            field.value = "";
        });

        //----------------------------------
        // 4. Reset selects
        //----------------------------------
        document.querySelectorAll("select").forEach(select => {
            select.selectedIndex = 0;
        });

        //----------------------------------
        // 5. Reset IMC affiché
        //----------------------------------
        const imcResult = document.getElementById("imc_result");
        if (imcResult) {
            imcResult.innerHTML = "";
        }

        //----------------------------------
        // 6. Masquer blocs dynamiques ouverts
        //----------------------------------
        const dynamicBlocks = [
            "symptomes_alert",
            "renforcement_musculaire_subgroup",
            "qrScannerContainer",
            "reportOutput",
            "formatTabs"
        ];

        dynamicBlocks.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.display = "none";
            }
        });

        //----------------------------------
        // 7. Fermer popup info courte
        //----------------------------------
        const popup = document.getElementById("infoPopup");

        if (popup) {
            popup.style.display = "none";
            popup.dataset.anchor = "";
        }

        //----------------------------------
        // 8. Fermer modal longue
        //----------------------------------
        const modal = document.getElementById("infoModal");

        if (modal) {
            modal.classList.add("hidden");
        }

        //----------------------------------
        // 9. Nettoyer contenu généré
        //----------------------------------
        const outputContainer = document.getElementById("outputContainer");

        if (outputContainer) {
            outputContainer.innerHTML = "";
        }

        //----------------------------------
        // 10. Reset onglets format
        //----------------------------------
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        const firstTab = document.querySelector(
            '.tab-btn[data-mode="long"]'
        );

        if (firstTab) {
            firstTab.classList.add("active");
        }

        //----------------------------------
        // 11. Reset import JSON file
        //----------------------------------
        const importFile = document.getElementById("importJSONFile");

        if (importFile) {
            importFile.value = "";
        }

        //----------------------------------
        // 12. Scroll haut
        //----------------------------------
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        console.log("Nouvelle consultation prête");
    });

});
