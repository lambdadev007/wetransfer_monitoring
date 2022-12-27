import { TASKS, TASKS_LIST, TASKS_ADD_EDIT, TASKS_DELETE } from "./types";

export const tasksListLoading = () => {
    return {
        type: TASKS_LIST.LOADING
    };
};
export const tasksAddEdit = (payload, onSuccess) => {
    return {
        type: TASKS_ADD_EDIT.REQUESTING,
        payload,
        onSuccess
    };
};
export const tasksAddEditRemoveValidation = payload => {
    return {
        type: TASKS_ADD_EDIT.VALIDATION_REMOVE,
        payload
    };
};
export const tasksAddEditReset = () => {
    return {
        type: TASKS_ADD_EDIT.RESET
    };
};
export const tasksRemove = (payload, onSuccess) => {
    return {
        type: TASKS_DELETE.REQUESTING,
        payload,
        onSuccess
    };
};
export const tasksReset = () => {
    return {
        type: TASKS.RESET
    };
};
