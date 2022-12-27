import { isdev } from "@/config";

const convertValidations = validations => {
    try {
        let convertedValidations = {};
        for (const entry in validations) {
            // server gives us array of strings for each validation, however
            // we need only first element anyway
            convertedValidations[entry] = validations[entry][0];
        }
        return convertedValidations;
    } catch (err) {
        isdev &&
            console.error(
                "Error occured while converting validations! error => ",
                err
            );
        return {};
    }
};

export default convertValidations;
