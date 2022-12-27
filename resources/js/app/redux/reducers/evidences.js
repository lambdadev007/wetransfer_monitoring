import {
    EVIDENCES,
    EVIDENCES_LIST,
    EVIDENCES_ADD_EDIT,
    EVIDENCES_DELETE
} from "../actions/types";
import convertValidations from "@/helpers/convertValidations";
import { createRow } from "@/pages/Evidences/tableDataHelpers";
import * as c from "@/constants";

const initialState = {
    loading: true,
    data: null,
    indicators: null,
    requesting: false,
    validations: {},
    deleting: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case EVIDENCES_LIST.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case EVIDENCES_LIST.SUCCESS: {
            let newData = {
                data: null,
                indicators: null
            };
            if (payload && payload.data && payload.data.length > 0) {
                newData.data = payload.data.map(
                    el =>
                        createRow({
                            id: el[c.id],
                            indicator_id: el[c.indicator][c.id],
                            indicator: el[c.indicator][c.name],
                            name: el[c.name]
                        }) // note in redux dev tools you won't see any functions created
                );
            }
            if (payload && payload[c.previous]) {
                newData.indicators = payload[c.previous];
            }

            return {
                ...state,
                ...newData,
                loading: false
            };
        }
        case EVIDENCES_LIST.ERROR: {
            return {
                ...state,
                loading: false,
                data: null,
                indicators: null
            };
        }
        case EVIDENCES_ADD_EDIT.REQUESTING: {
            return {
                ...state,
                requesting: true,
                validations: {}
            };
        }
        case EVIDENCES_ADD_EDIT.SUCCESS: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case EVIDENCES_ADD_EDIT.ERROR: {
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
        case EVIDENCES_ADD_EDIT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case EVIDENCES_ADD_EDIT.RESET: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case EVIDENCES_DELETE.REQUESTING: {
            return {
                ...state,
                deleting: true
            };
        }
        case EVIDENCES_DELETE.SUCCESS:
        case EVIDENCES_DELETE.ERROR: {
            return {
                ...state,
                deleting: false
            };
        }
        case EVIDENCES.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
