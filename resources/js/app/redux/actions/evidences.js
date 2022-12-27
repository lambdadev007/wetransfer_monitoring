import {
    EVIDENCES,
    EVIDENCES_LIST,
    EVIDENCES_ADD_EDIT,
    EVIDENCES_DELETE
} from "./types";

export const evidencesListLoading = () => {
    return {
        type: EVIDENCES_LIST.LOADING
    };
};
export const evidencesAddEdit = (payload, onSuccess) => {
    return {
        type: EVIDENCES_ADD_EDIT.REQUESTING,
        payload,
        onSuccess
    };
};
export const evidencesAddEditRemoveValidation = payload => {
    return {
        type: EVIDENCES_ADD_EDIT.VALIDATION_REMOVE,
        payload
    };
};
export const evidencesAddEditReset = () => {
    return {
        type: EVIDENCES_ADD_EDIT.RESET
    };
};
export const evidencesRemove = (payload, onSuccess) => {
    return {
        type: EVIDENCES_DELETE.REQUESTING,
        payload,
        onSuccess
    };
};
export const evidencesReset = () => {
    return {
        type: EVIDENCES.RESET
    };
};
