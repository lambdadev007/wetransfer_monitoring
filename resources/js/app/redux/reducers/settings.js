import isArray from "lodash/isArray";

import { SETTINGS, SETTINGS_SUBMIT } from "../actions/types";
import convertValidations from "@/helpers/convertValidations";
import * as c from "@/constants";

const fields = [c.name, c.description, c.email, c.phone];

const initialState = {
    loading: true,
    data: {},
    requesting: false,
    validations: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SETTINGS.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case SETTINGS.SUCCESS: {
            let newData = {};
            if (isArray(payload)) {
                fields.forEach(field => {
                    const found = payload.find(el => el.key === field);
                    if (found) {
                        newData[field] = found.value;
                    }
                });
            }
            return {
                ...state,
                loading: false,
                data: newData
            };
        }
        case SETTINGS.ERROR: {
            return {
                ...state,
                loading: false,
                data: {}
            };
        }
        case SETTINGS_SUBMIT.REQUESTING: {
            return {
                ...state,
                requesting: true,
                validations: {}
            };
        }
        case SETTINGS_SUBMIT.SUCCESS: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case SETTINGS_SUBMIT.ERROR: {
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
        case SETTINGS_SUBMIT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case SETTINGS.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
