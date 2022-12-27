import {
    DEPARTMENTS,
    DEPARTMENTS_LIST,
    DEPARTMENTS_ADD_EDIT,
    DEPARTMENTS_DELETE
} from "../actions/types";
import convertValidations from "@/helpers/convertValidations";
import { createRow } from "@/pages/ManageDepartments/tableDataHelpers";
import * as c from "@/constants";

const initialState = {
    loading: true,
    data: null,
    requesting: false,
    validations: {},
    deleting: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case DEPARTMENTS_LIST.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case DEPARTMENTS_LIST.SUCCESS: {
            if (payload && payload.data && payload.data.length > 0) {
                return {
                    ...state,
                    loading: false,
                    data: payload.data.map(
                        el =>
                            createRow({
                                id: el[c.id],
                                name: el[c.name],
                                status: el[c.is_active] === 1
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
        case DEPARTMENTS_LIST.ERROR: {
            return {
                ...state,
                loading: false,
                data: null
            };
        }
        case DEPARTMENTS_ADD_EDIT.REQUESTING: {
            return {
                ...state,
                requesting: true,
                validations: {}
            };
        }
        case DEPARTMENTS_ADD_EDIT.SUCCESS: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case DEPARTMENTS_ADD_EDIT.ERROR: {
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
        case DEPARTMENTS_ADD_EDIT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case DEPARTMENTS_ADD_EDIT.RESET: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case DEPARTMENTS_DELETE.REQUESTING: {
            return {
                ...state,
                deleting: true
            };
        }
        case DEPARTMENTS_DELETE.SUCCESS:
        case DEPARTMENTS_DELETE.ERROR: {
            return {
                ...state,
                deleting: false
            };
        }
        case DEPARTMENTS.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
