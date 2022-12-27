import {
    REPORTS,
    REPORTS_LIST,
    REPORTS_GENERATE,
    REPORTS_DELETE,
    REPORTS_FILTER_DATA,
    REPORTS_DOWNLOAD
} from "../actions/types";
import { createRow } from "@/pages/Statistics/tableDataHelpers";
import * as c from "@/constants";

const initialState = {
    loading: true,
    data: null,
    totalPages: 1,
    filterData: {},
    filterDataLoading: true,
    generating: false,
    deleting: false,
    beingDownloadedId: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REPORTS_LIST.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case REPORTS_LIST.SUCCESS: {
            if (payload && payload.data && payload.data.length > 0) {
                return {
                    ...state,
                    loading: false,
                    data: payload.data.map(
                        el =>
                            createRow({
                                id: el[c.id],
                                report_name: el[c.file][c.name],
                                date_created: el[c.created_at],
                                fileUrl: el[c.file][c.file]
                            }) // note in redux dev tools you won't see any functions created
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
        case REPORTS_LIST.ERROR: {
            return {
                ...state,
                loading: false,
                data: null,
                totalPages: 1
            };
        }
        case REPORTS_FILTER_DATA.LOADING: {
            return {
                ...state,
                filterDataLoading: true
            };
        }
        case REPORTS_FILTER_DATA.SUCCESS: {
            return {
                ...state,
                filterData: payload,
                filterDataLoading: false
            };
        }
        case REPORTS_FILTER_DATA.ERROR: {
            return {
                ...state,
                filterData: {},
                filterDataLoading: false
            };
        }
        case REPORTS_GENERATE.REQUESTING: {
            return {
                ...state,
                generating: true
            };
        }
        case REPORTS_GENERATE.SUCCESS:
        case REPORTS_GENERATE.ERROR: {
            return {
                ...state,
                generating: false
            };
        }
        case REPORTS_DOWNLOAD.REQUESTING: {
            return {
                ...state,
                beingDownloadedId: payload
            };
        }
        case REPORTS_DOWNLOAD.SUCCESS:
        case REPORTS_DOWNLOAD.ERROR: {
            return {
                ...state,
                beingDownloadedId: null
            };
        }
        case REPORTS_DELETE.REQUESTING: {
            return {
                ...state,
                deleting: true
            };
        }
        case REPORTS_DELETE.SUCCESS:
        case REPORTS_DELETE.ERROR: {
            return {
                ...state,
                deleting: false
            };
        }
        case REPORTS.RESET: {
            return {
                ...initialState
            };
        }
        default: {
            return state;
        }
    }
}
