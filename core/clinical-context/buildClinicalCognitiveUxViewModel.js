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
                    "Endurance",
                    []
                ),
                createSection(
                    "strength",
                    "Renforcement musculaire",
                    []
                ),
                createSection(
                    "otherActivity",
                    "Autres activités",
                    []
                ),
                createSection(
                    "orientation",
                    "Orientation et encadrement",
                    []
                )
            ],

            patient: createSection(
                "patientInformation",
                "Informations à transmettre",
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
                "Endurance",
                prescription.endurance
            ),
            createSection(
                "strength",
                "Renforcement musculaire",
                prescription.strength
            ),
            createSection(
                "otherActivity",
                "Autres activités",
                prescription.otherActivity
            ),
            createSection(
                "orientation",
                "Orientation et encadrement",
                cognitiveUxProjection.orientation
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
