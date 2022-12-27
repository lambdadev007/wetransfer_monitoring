import { PLAN_NAME } from "../actions/types";
import * as c from "@/constants";

const initialState = {
    loading: true,
    data: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case PLAN_NAME.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case PLAN_NAME.SUCCESS: {
            return {
                ...state,
                loading: false,
                data: payload[c.data][c.name]
            };
        }
        case PLAN_NAME.ERROR: {
            return {
                ...state,
                loading: false,
                data: null
            };
        }
        default: {
            return state;
        }
    }
}
