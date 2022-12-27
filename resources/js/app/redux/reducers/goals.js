import {
    GOALS,
    GOALS_LIST,
    GOALS_ADD_EDIT,
    GOALS_DELETE
} from "../actions/types";
import convertValidations from "@/helpers/convertValidations";
import { createRow } from "@/pages/Goals/tableDataHelpers";
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
        case GOALS_LIST.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case GOALS_LIST.SUCCESS: {
            if (payload && payload.data && payload.data.length > 0) {
                return {
                    ...state,
                    loading: false,
                    data: payload.data.map(
                        el => createRow({ id: el[c.id], name: el[c.name] }) // note in redux dev tools you won't see any functions created
                    )
                };
            }
            return {
                ...state,
                loading: false,
                data: null
            };
        }
        case GOALS_LIST.ERROR: {
            return {
                ...state,
                loading: false,
                data: null
            };
        }
        case GOALS_ADD_EDIT.REQUESTING: {
            return {
                ...state,
                requesting: true,
                validations: {}
            };
        }
        case GOALS_ADD_EDIT.SUCCESS: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case GOALS_ADD_EDIT.ERROR: {
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
        case GOALS_ADD_EDIT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case GOALS_ADD_EDIT.RESET: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case GOALS_DELETE.REQUESTING: {
            return {
                ...state,
                deleting: true
            };
        }
        case GOALS_DELETE.SUCCESS:
        case GOALS_DELETE.ERROR: {
            return {
                ...state,
                deleting: false
            };
        }
        case GOALS.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
