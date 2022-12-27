import { PROFILE_SUBMIT } from "../actions/types";
import convertValidations from "@/helpers/convertValidations";
import * as c from "@/constants";

const initialState = {
    requesting: false,
    validations: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case PROFILE_SUBMIT.REQUESTING: {
            return {
                ...state,
                requesting: true,
                validations: {}
            };
        }
        case PROFILE_SUBMIT.SUCCESS: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case PROFILE_SUBMIT.ERROR: {
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
        case PROFILE_SUBMIT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case PROFILE_SUBMIT.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
