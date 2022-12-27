import { LOGIN, LOGIN_PASSWORD_CHANGE } from "./types";

export const loginRequesting = (payload, onSuccess) => {
    return {
        type: LOGIN.REQUESTING,
        payload,
        onSuccess
    };
};
export const loginPasswordChangeRequesting = (payload, onSuccess) => {
    return {
        type: LOGIN_PASSWORD_CHANGE.REQUESTING,
        payload,
        onSuccess
    };
};
export const loginValidationRemove = payload => {
    return {
        type: LOGIN.VALIDATION_REMOVE,
        payload
    };
};
export const loginReset = () => {
    return {
        type: LOGIN.RESET
    };
};
