import {
    REPORTS,
    REPORTS_FILTER_DATA,
    REPORTS_LIST,
    REPORTS_GENERATE,
    REPORTS_DELETE,
    REPORTS_DOWNLOAD
} from "./types";

export const reportsFilterDataLoading = () => {
    return {
        type: REPORTS_FILTER_DATA.LOADING
    };
};
export const reportsListLoading = query => {
    return {
        type: REPORTS_LIST.LOADING,
        payload: query
    };
};
export const reportsGenerate = (payload, onSuccess) => {
    return {
        type: REPORTS_GENERATE.REQUESTING,
        payload,
        onSuccess
    };
};
export const reportsRemove = (payload, onSuccess) => {
    return {
        type: REPORTS_DELETE.REQUESTING,
        payload,
        onSuccess
    };
};
export const reportsDownload = (payload, onSuccess) => {
    return {
        type: REPORTS_DOWNLOAD.REQUESTING,
        payload,
        onSuccess
    };
};
export const reportsReset = () => {
    return {
        type: REPORTS.RESET
    };
};
