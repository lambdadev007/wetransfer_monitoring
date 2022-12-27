import { all, fork } from "redux-saga/effects";
import { createLoadingSaga, createRequestingSaga } from "@/helpers/createSaga";
import { validateUser } from "@/helpers/validate";
import {
    USERS_LIST,
    USERS_ADD_EDIT,
    USERS,
    USERS_DELETE,
    USERS_SELECT_DATA
} from "@/redux/actions/types";

function* rootWatcher() {
    yield all([
        fork(
            createLoadingSaga({
                sagaName: "users",
                handlerName: "get list",
                apiUrl: "/positions",
                watchType: USERS_LIST.LOADING,
                successType: USERS_LIST.SUCCESS,
                errorType: USERS_LIST.ERROR,
                resetTypes: [USERS.RESET]
            })
        ),
        fork(
            createLoadingSaga({
                sagaName: "users",
                handlerName: "get departments",
                apiUrl: "/positions/select-data",
                watchType: USERS_SELECT_DATA.LOADING,
                successType: USERS_SELECT_DATA.SUCCESS,
                errorType: USERS_SELECT_DATA.ERROR,
                resetTypes: [USERS.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "users",
                handlerName: "add/edit",
                paramsExtractor: action => action,
                apiUrlExtractor: params =>
                    params.isEdit
                        ? `/positions/update/${params.payload.id}`
                        : `/positions/store`,
                watchType: USERS_ADD_EDIT.REQUESTING,
                successType: USERS_ADD_EDIT.SUCCESS,
                errorType: USERS_ADD_EDIT.ERROR,
                resetTypes: [USERS.RESET, USERS_ADD_EDIT.RESET],
                withValidation: true,
                validationFunction: validateUser
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "users",
                handlerName: "delete",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/positions/delete/${param}`,
                method: "delete",
                watchType: USERS_DELETE.REQUESTING,
                successType: USERS_DELETE.SUCCESS,
                errorType: USERS_DELETE.ERROR,
                resetTypes: [USERS.RESET, USERS_DELETE.RESET]
            })
        )
    ]);
}

export default rootWatcher;
