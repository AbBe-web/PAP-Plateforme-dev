(function () {
    "use strict";

    const ALLOWED_CRITERIA_KEYS = new Set([
        "domainId",
        "roleId"
    ]);


    function normalizeOptionalStringCriterion(
        value
    ) {
        if (
            value === undefined ||
            value === null
        ) {
            return {
                valid: true,
                present: false,
                value: ""
            };
        }

        if (
            typeof value !==
            "string"
        ) {
            return {
                valid: false,
                present: false,
                value: ""
            };
        }

        const normalizedValue =
            value.trim();

        if (!normalizedValue) {
            return {
                valid: true,
                present: false,
                value: ""
            };
        }

        return {
            valid: true,
            present: true,
            value: normalizedValue
        };
    }


    function selectClinicalUsesV2(
        clinicalUses,
        criteria = {}
    ) {
        if (!Array.isArray(clinicalUses)) {
            return [];
        }

        if (
            criteria === undefined ||
            criteria === null
        ) {
            return [...clinicalUses];
        }

        if (
            typeof criteria !==
                "object" ||
            Array.isArray(criteria)
        ) {
            return [];
        }

        const criteriaKeys =
            Object.keys(criteria);

        const hasUnsupportedCriterion =
            criteriaKeys.some(
                function (key) {
                    return !ALLOWED_CRITERIA_KEYS
                        .has(key);
                }
            );

        if (hasUnsupportedCriterion) {
            return [];
        }

        const domainCriterion =
            normalizeOptionalStringCriterion(
                criteria.domainId
            );

        const roleCriterion =
            normalizeOptionalStringCriterion(
                criteria.roleId
            );

        if (
            !domainCriterion.valid ||
            !roleCriterion.valid
        ) {
            return [];
        }

        if (
            !domainCriterion.present &&
            !roleCriterion.present
        ) {
            return [...clinicalUses];
        }

        return clinicalUses.filter(
            function (clinicalUse) {
                if (
                    !clinicalUse ||
                    typeof clinicalUse !==
                        "object"
                ) {
                    return false;
                }

                if (
                    domainCriterion.present &&
                    clinicalUse.domainId !==
                        domainCriterion.value
                ) {
                    return false;
                }

                if (
                    roleCriterion.present &&
                    clinicalUse.roleId !==
                        roleCriterion.value
                ) {
                    return false;
                }

                return true;
            }
        );
    }


    window.selectClinicalUsesV2 =
        selectClinicalUsesV2;
})();