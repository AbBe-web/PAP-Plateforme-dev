(function () {
    "use strict";

    function cloneItems(items) {
        return Array.isArray(items)
            ? [...items]
            : [];
    }

    function createSection(
        id,
        title,
        items
    ) {
        return {
            id,
            title,
            items: cloneItems(items)
        };
    }

    function createEmptyClinicalCognitiveUxViewModel() {
        return {
            clinician: [
                createSection(
                    "general",
                    "Repères généraux",
                    []
                ),
                createSection(
                    "endurance",
                    "Repères de prescription — Endurance",
                    []
                ),
                createSection(
                    "strength",
                    "Repères de prescription — Renforcement musculaire",
                    []
                ),
                createSection(
                    "otherActivity",
                    "Repères de prescription — Autres activités",
                    []
                ),
                createSection(
                    "orientation",
                    "Repères — Orientation et encadrement",
                    []
                ),
                createSection(
                    "objectiveDiscussion",
                    "Éléments cliniques / fonctionnels à considérer",
                    []
                )
            ],

            patient: createSection(
                "patientInformation",
                "Messages à transmettre pendant la consultation",
                []
            ),

            reference: createSection(
                "referenceOnly",
                "Référence détaillée",
                []
            ),

            unassigned: []
        };
    }

    function buildClinicalCognitiveUxViewModel(
        cognitiveUxProjection
    ) {
        const viewModel =
            createEmptyClinicalCognitiveUxViewModel();

        if (
            !cognitiveUxProjection ||
            typeof cognitiveUxProjection !== "object"
        ) {
            return viewModel;
        }

        const prescription =
            cognitiveUxProjection.prescription || {};

        viewModel.clinician = [
            createSection(
                "general",
                "Repères généraux",
                prescription.general
            ),
            createSection(
                "endurance",
                "Repères de prescription — Endurance",
                prescription.endurance
            ),
            createSection(
                "strength",
                "Repères de prescription — Renforcement musculaire",
                prescription.strength
            ),
            createSection(
                "otherActivity",
                "Repères de prescription — Autres activités",
                prescription.otherActivity
            ),
            createSection(
                "orientation",
                "Repères — Orientation et encadrement",
                cognitiveUxProjection.orientation
            ),
            createSection(
                "objectiveDiscussion",
                "Éléments cliniques / fonctionnels à considérer",
                cognitiveUxProjection.objectiveDiscussion
            )
        ];

        viewModel.patient =
            createSection(
                "patientInformation",
                "Informations à transmettre",
                cognitiveUxProjection
                    .patientInformation
            );

        viewModel.reference =
            createSection(
                "referenceOnly",
                "Référence détaillée",
                cognitiveUxProjection.referenceOnly
            );

        viewModel.unassigned =
            cloneItems(
                cognitiveUxProjection.unassigned
            );

        return viewModel;
    }

    window.createEmptyClinicalCognitiveUxViewModel =
        createEmptyClinicalCognitiveUxViewModel;

    window.buildClinicalCognitiveUxViewModel =
        buildClinicalCognitiveUxViewModel;
})();
