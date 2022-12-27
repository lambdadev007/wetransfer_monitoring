import { all, fork } from "redux-saga/effects";
import { createLoadingSaga, createRequestingSaga } from "@/helpers/createSaga";
import {
    REPORTS_LIST,
    REPORTS_FILTER_DATA,
    REPORTS_GENERATE,
    REPORTS,
    REPORTS_DELETE,
    REPORTS_DOWNLOAD
} from "@/redux/actions/types";

function* rootWatcher() {
    yield all([
        fork(
            createLoadingSaga({
                sagaName: "reports",
                handlerName: "get filters",
                apiUrl: "/reports/filters",
                responseExtractor: res => res,
                watchType: REPORTS_FILTER_DATA.LOADING,
                successType: REPORTS_FILTER_DATA.SUCCESS,
                errorType: REPORTS_FILTER_DATA.ERROR,
                resetTypes: [REPORTS.RESET]
            })
        ),
        fork(
            createLoadingSaga({
                sagaName: "reports",
                handlerName: "get list",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: query => `/reports?${query}`,
                watchType: REPORTS_LIST.LOADING,
                successType: REPORTS_LIST.SUCCESS,
                errorType: REPORTS_LIST.ERROR,
                resetTypes: [REPORTS.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "reports",
                handlerName: "generate",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: query => `/reports/generate?${query}`,
                method: "get",
                watchType: REPORTS_GENERATE.REQUESTING,
                successType: REPORTS_GENERATE.SUCCESS,
                errorType: REPORTS_GENERATE.ERROR,
                resetTypes: [REPORTS.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "reports",
                handlerName: "delete",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/reports/delete/${param}`,
                method: "delete",
                watchType: REPORTS_DELETE.REQUESTING,
                successType: REPORTS_DELETE.SUCCESS,
                errorType: REPORTS_DELETE.ERROR,
                resetTypes: [REPORTS.RESET, REPORTS_DELETE.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "reports",
                handlerName: "download",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/reports/download/${param}`,
                isBlob: true,
                watchType: REPORTS_DOWNLOAD.REQUESTING,
                successType: REPORTS_DOWNLOAD.SUCCESS,
                errorType: REPORTS_DOWNLOAD.ERROR,
                resetTypes: [REPORTS.RESET]
            })
        )
    ]);
}

export default rootWatcher;
