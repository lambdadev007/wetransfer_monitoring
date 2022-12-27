import {
    INDICATORS,
    INDICATORS_LIST,
    INDICATORS_ADD_EDIT,
    INDICATORS_DELETE
} from "./types";

export const indicatorsListLoading = () => {
    return {
        type: INDICATORS_LIST.LOADING
    };
};
export const indicatorsAddEdit = (payload, onSuccess) => {
    return {
        type: INDICATORS_ADD_EDIT.REQUESTING,
        payload,
        onSuccess
    };
};
export const indicatorsAddEditRemoveValidation = payload => {
    return {
        type: INDICATORS_ADD_EDIT.VALIDATION_REMOVE,
        payload
    };
};
export const indicatorsAddEditReset = () => {
    return {
        type: INDICATORS_ADD_EDIT.RESET
    };
};
export const indicatorsRemove = (payload, onSuccess) => {
    return {
        type: INDICATORS_DELETE.REQUESTING,
        payload,
        onSuccess
    };
};
export const indicatorsReset = () => {
    return {
        type: INDICATORS.RESET
    };
};
