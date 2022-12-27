import {
    USERS,
    USERS_LIST,
    USERS_ADD_EDIT,
    USERS_DELETE,
    USERS_SELECT_DATA
} from "../actions/types";
import convertValidations from "@/helpers/convertValidations";
import { createRow } from "@/pages/ManageUsers/tableDataHelpers";
import * as c from "@/constants";

const initialState = {
    loading: true,
    data: null,
    departmentsLoading: true,
    departments: null,
    requesting: false,
    validations: {},
    deleting: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USERS_LIST.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case USERS_LIST.SUCCESS: {
            if (payload && payload.users && payload.users.length > 0) {
                return {
                    ...state,
                    loading: false,
                    data: payload.users.map(
                        el =>
                            createRow({
                                id: el[c.id],
                                name: el[c.name],
                                is_active: el[c.is_active] === 1,
                                email: el[c.email],
                                phone: el[c.phone],
                                job_id: el[c.job_id],
                                department: el[c.job],
                                role: el[c.role_name]
                            }) // note in redux dev tools you won't see any functions created
                    )
                };
            }
            return {
                ...state,
                loading: false,
                data: null
            };
        }
        case USERS_LIST.ERROR: {
            return {
                ...state,
                loading: false,
                data: null
            };
        }
        case USERS_SELECT_DATA.LOADING: {
            return {
                ...state,
                departmentsLoading: true
            };
        }
        case USERS_SELECT_DATA.SUCCESS: {
            return {
                ...state,
                departmentsLoading: false,
                departments: payload
            };
        }
        case USERS_SELECT_DATA.ERROR: {
            return {
                ...state,
                departmentsLoading: false,
                departments: null
            };
        }
        case USERS_ADD_EDIT.REQUESTING: {
            return {
                ...state,
                requesting: true,
                validations: {}
            };
        }
        case USERS_ADD_EDIT.SUCCESS: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case USERS_ADD_EDIT.ERROR: {
            if (payload && payload.validations) {
                return {
                    ...state,
                    requesting: false,
                    validations: convertValidations(payload.validations)
                };
            }
            return {
                ...state,
                requesting: false
            };
        }
        case USERS_ADD_EDIT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case USERS_ADD_EDIT.RESET: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case USERS_DELETE.REQUESTING: {
            return {
                ...state,
                deleting: true
            };
        }
        case USERS_DELETE.SUCCESS:
        case USERS_DELETE.ERROR: {
            return {
                ...state,
                deleting: false
            };
        }
        case USERS.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
