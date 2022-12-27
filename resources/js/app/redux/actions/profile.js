import { PROFILE_SUBMIT } from "./types";

export const profileSubmit = (payload, onSuccess) => {
    return {
        type: PROFILE_SUBMIT.REQUESTING,
        payload,
        onSuccess
    };
};
export const profileSubmitRemoveValidation = payload => {
    return {
        type: PROFILE_SUBMIT.VALIDATION_REMOVE,
        payload
    };
};
export const profileReset = () => {
    return {
        type: PROFILE_SUBMIT.RESET
    };
};
