import { LOGS, LOGS_LIST } from "./types";

export const logsListLoading = query => {
    return {
        type: LOGS_LIST.LOADING,
        payload: query
    };
};
export const logsReset = () => {
    return {
        type: LOGS.RESET
    };
};
