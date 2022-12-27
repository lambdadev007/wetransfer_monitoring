import {
    INDICATORS,
    INDICATORS_LIST,
    INDICATORS_ADD_EDIT,
    INDICATORS_DELETE
} from "../actions/types";
import convertValidations from "@/helpers/convertValidations";
import { createRow } from "@/pages/Indicators/tableDataHelpers";
import * as c from "@/constants";

const initialState = {
    loading: true,
    data: null,
    tasks: null,
    requesting: false,
    validations: {},
    deleting: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case INDICATORS_LIST.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case INDICATORS_LIST.SUCCESS: {
            let newData = {
                data: null,
                tasks: null
            };
            if (payload && payload.data && payload.data.length > 0) {
                newData.data = payload.data.map(
                    el =>
                        createRow({
                            id: el[c.id],
                            task_id: el[c.task][c.id],
                            task: el[c.task][c.name],
                            name: el[c.name]
                        }) // note in redux dev tools you won't see any functions created
                );
            }
            if (payload && payload[c.previous]) {
                newData.tasks = payload[c.previous];
            }

            return {
                ...state,
                ...newData,
                loading: false
            };
        }
        case INDICATORS_LIST.ERROR: {
            return {
                ...state,
                loading: false,
                data: null,
                tasks: null
            };
        }
        case INDICATORS_ADD_EDIT.REQUESTING: {
            return {
                ...state,
                requesting: true,
                validations: {}
            };
        }
        case INDICATORS_ADD_EDIT.SUCCESS: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case INDICATORS_ADD_EDIT.ERROR: {
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
        case INDICATORS_ADD_EDIT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case INDICATORS_ADD_EDIT.RESET: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case INDICATORS_DELETE.REQUESTING: {
            return {
                ...state,
                deleting: true
            };
        }
        case INDICATORS_DELETE.SUCCESS:
        case INDICATORS_DELETE.ERROR: {
            return {
                ...state,
                deleting: false
            };
        }
        case INDICATORS.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
