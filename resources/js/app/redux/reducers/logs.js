import { LOGS, LOGS_LIST } from "../actions/types";
import { createRow } from "@/pages/Logs/tableDataHelpers";
import * as c from "@/constants";

const initialState = {
    loading: true,
    data: null,
    totalPages: 1
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGS_LIST.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case LOGS_LIST.SUCCESS: {
            if (payload && payload.data && payload.data.length > 0) {
                return {
                    ...state,
                    loading: false,
                    data: payload.data.map(el =>
                        createRow({
                            id: el[c.id],
                            action: el[c.action],
                            model: el[c.model],
                            author: el[c.author],
                            date: el[c.created_at],
                            ip_address: el[c.ip]
                        })
                    ),
                    totalPages: payload[c.total_pages]
                };
            }
            if (payload && payload[c.total_pages]) {
                return {
                    ...state,
                    loading: false,
                    data: null,
                    totalPages: payload[c.total_pages]
                };
            }
            return {
                ...state,
                loading: false,
                data: null,
                totalPages: 1
            };
        }
        case LOGS_LIST.ERROR: {
            return {
                ...state,
                loading: false,
                data: null
            };
        }
        case LOGS.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
