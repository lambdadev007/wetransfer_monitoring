import { GOALS, GOALS_LIST, GOALS_ADD_EDIT, GOALS_DELETE } from "./types";

export const goalsListLoading = () => {
    return {
        type: GOALS_LIST.LOADING
    };
};
export const goalsAddEdit = (payload, onSuccess) => {
    return {
        type: GOALS_ADD_EDIT.REQUESTING,
        payload,
        onSuccess
    };
};
export const goalsAddEditRemoveValidation = payload => {
    return {
        type: GOALS_ADD_EDIT.VALIDATION_REMOVE,
        payload
    };
};
export const goalsAddEditReset = () => {
    return {
        type: GOALS_ADD_EDIT.RESET
    };
};
export const goalsRemove = (payload, onSuccess) => {
    return {
        type: GOALS_DELETE.REQUESTING,
        payload,
        onSuccess
    };
};
export const goalsReset = () => {
    return {
        type: GOALS.RESET
    };
};
