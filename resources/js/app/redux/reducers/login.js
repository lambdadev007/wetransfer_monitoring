import { LOGIN, LOGIN_PASSWORD_CHANGE } from "../actions/types";
import convertValidations from "@/helpers/convertValidations";

const initialState = {
    requesting: false,
    validations: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN.REQUESTING:
        case LOGIN_PASSWORD_CHANGE.REQUESTING: {
            return {
                ...state,
                requesting: true,
                validations: {}
            };
        }
        case LOGIN.SUCCESS:
        case LOGIN_PASSWORD_CHANGE.SUCCESS: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case LOGIN.ERROR:
        case LOGIN_PASSWORD_CHANGE.ERROR: {
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
        case LOGIN.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case LOGIN.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
