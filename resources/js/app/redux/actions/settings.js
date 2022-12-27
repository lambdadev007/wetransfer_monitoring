import { SETTINGS, SETTINGS_SUBMIT } from "./types";

export const settingsLoading = () => {
    return {
        type: SETTINGS.LOADING
    };
};
export const settingsSubmit = (payload, onSuccess) => {
    return {
        type: SETTINGS_SUBMIT.REQUESTING,
        payload,
        onSuccess
    };
};
export const settingsSubmitRemoveValidation = payload => {
    return {
        type: SETTINGS_SUBMIT.VALIDATION_REMOVE,
        payload
    };
};
export const settingsReset = () => {
    return {
        type: SETTINGS.RESET
    };
};
