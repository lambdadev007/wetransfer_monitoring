import {
    USERS,
    USERS_LIST,
    USERS_ADD_EDIT,
    USERS_DELETE,
    USERS_SELECT_DATA
} from "./types";

export const usersListLoading = () => {
    return {
        type: USERS_LIST.LOADING
    };
};
export const usersSelectDataLoading = () => {
    return {
        type: USERS_SELECT_DATA.LOADING
    };
};
export const usersAddEdit = (payload, onSuccess, isEdit) => {
    return {
        type: USERS_ADD_EDIT.REQUESTING,
        payload,
        onSuccess,
        isEdit
    };
};
export const usersAddEditRemoveValidation = payload => {
    return {
        type: USERS_ADD_EDIT.VALIDATION_REMOVE,
        payload
    };
};
export const usersAddEditReset = () => {
    return {
        type: USERS_ADD_EDIT.RESET
    };
};
export const usersRemove = (payload, onSuccess) => {
    return {
        type: USERS_DELETE.REQUESTING,
        payload,
        onSuccess
    };
};
export const usersReset = () => {
    return {
        type: USERS.RESET
    };
};
