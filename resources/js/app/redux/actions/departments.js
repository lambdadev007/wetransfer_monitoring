import {
    DEPARTMENTS,
    DEPARTMENTS_LIST,
    DEPARTMENTS_ADD_EDIT,
    DEPARTMENTS_DELETE
} from "./types";

export const departmentsListLoading = () => {
    return {
        type: DEPARTMENTS_LIST.LOADING
    };
};
export const departmentsAddEdit = (payload, onSuccess, isEdit) => {
    return {
        type: DEPARTMENTS_ADD_EDIT.REQUESTING,
        payload,
        onSuccess,
        isEdit
    };
};
export const departmentsAddEditRemoveValidation = payload => {
    return {
        type: DEPARTMENTS_ADD_EDIT.VALIDATION_REMOVE,
        payload
    };
};
export const departmentsAddEditReset = () => {
    return {
        type: DEPARTMENTS_ADD_EDIT.RESET
    };
};
export const departmentsRemove = (payload, onSuccess) => {
    return {
        type: DEPARTMENTS_DELETE.REQUESTING,
        payload,
        onSuccess
    };
};
export const departmentsReset = () => {
    return {
        type: DEPARTMENTS.RESET
    };
};
