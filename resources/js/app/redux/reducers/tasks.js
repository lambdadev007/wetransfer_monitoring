import {
    TASKS,
    TASKS_LIST,
    TASKS_ADD_EDIT,
    TASKS_DELETE
} from "../actions/types";
import convertValidations from "@/helpers/convertValidations";
import { createRow } from "@/pages/Tasks/tableDataHelpers";
import * as c from "@/constants";

const initialState = {
    loading: true,
    data: null,
    goals: null,
    requesting: false,
    validations: {},
    deleting: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case TASKS_LIST.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case TASKS_LIST.SUCCESS: {
            let newData = {
                data: null,
                goals: null
            };
            if (payload && payload.data && payload.data.length > 0) {
                newData.data = payload.data.map(
                    el =>
                        createRow({
                            id: el[c.id],
                            goal_id: el[c.goal][c.id],
                            goal: el[c.goal][c.name],
                            name: el[c.name]
                        }) // note in redux dev tools you won't see any functions created
                );
            }
            if (payload && payload[c.previous]) {
                newData.goals = payload[c.previous];
            }

            return {
                ...state,
                ...newData,
                loading: false
            };
        }
        case TASKS_LIST.ERROR: {
            return {
                ...state,
                loading: false,
                data: null,
                goals: null
            };
        }
        case TASKS_ADD_EDIT.REQUESTING: {
            return {
                ...state,
                requesting: true,
                validations: {}
            };
        }
        case TASKS_ADD_EDIT.SUCCESS: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case TASKS_ADD_EDIT.ERROR: {
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
        case TASKS_ADD_EDIT.VALIDATION_REMOVE: {
            const updatedValidations = { ...state.validations };
            updatedValidations[payload] && delete updatedValidations[payload];
            return { ...state, validations: updatedValidations };
        }
        case TASKS_ADD_EDIT.RESET: {
            return {
                ...state,
                requesting: false,
                validations: {}
            };
        }
        case TASKS_DELETE.REQUESTING: {
            return {
                ...state,
                deleting: true
            };
        }
        case TASKS_DELETE.SUCCESS:
        case TASKS_DELETE.ERROR: {
            return {
                ...state,
                deleting: false
            };
        }
        case TASKS.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
