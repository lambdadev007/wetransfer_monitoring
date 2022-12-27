import { defaultErrorText, isdev } from "@/config";
import { alertAdd } from "@/redux/actions/alerts";
import { clientUnset } from "@/redux/actions/client";
import { takeLatest, call, put, cancelled, all } from "redux-saga/effects";
import axios from "axios";

export function createLoadingSaga({
    sagaName,
    handlerName,
    apiUrl,
    watchType,
    successType,
    errorType,
    resetTypes = [],
    paramsExtractor,
    apiUrlExtractor,
    responseExtractor,
    logoutOn401 = true,
    logRes = true
}) {
    function* api({ params, cancelToken }) {
        try {
            const url = apiUrlExtractor ? apiUrlExtractor(params) : apiUrl;
            const res = yield axios.get(`/api${url}`, { cancelToken });

            isdev &&
                logRes &&
                console.log(`res from ${sagaName} ${handlerName} api`, res);
            return res.data;
        } catch (err) {
            throw err;
        }
    }

    function* handler(action) {
        if (resetTypes.includes(action.type)) {
            return;
            // do nothing, just stop current loading
        }

        const cancelSource = axios.CancelToken.source();
        try {
            const params = paramsExtractor ? paramsExtractor(action) : null;

            const response = yield call(api, {
                params,
                cancelToken: cancelSource.token
            });

            yield put({
                type: successType,
                payload: responseExtractor
                    ? responseExtractor(response)
                    : response.payload
            });
        } catch (err) {
            isdev &&
                console.log(`err from ${sagaName} ${handlerName} handler`, err);

            if (err && err.message && !err.response) {
                isdev &&
                    console.error(
                        `err.message from ${sagaName} ${handlerName} handler!`
                    );

                yield all([
                    put({
                        type: errorType
                    }),
                    put(
                        alertAdd({
                            message: err.message,
                            options: {
                                variant: "error"
                            }
                        })
                    )
                ]);
                return;
            }

            if (!err || !err.response) {
                isdev &&
                    console.error(
                        `no err or err.response from ${sagaName} ${handlerName} handler!`
                    );

                yield all([
                    put({
                        type: errorType
                    }),
                    put(
                        alertAdd({
                            message: defaultErrorText,
                            options: {
                                variant: "error"
                            }
                        })
                    )
                ]);
                return;
            }

            isdev &&
                console.log(
                    `err.response from ${sagaName} ${handlerName} api`,
                    err.response
                );

            switch (err.response.status) {
                case 401: {
                    let errorActions = [];
                    errorActions.push(
                        put({
                            type: errorType
                        })
                    );

                    if (err.response.data.message) {
                        errorActions.push(
                            put(
                                alertAdd({
                                    message: err.response.data.message,
                                    options: {
                                        variant: "error"
                                    }
                                })
                            )
                        );
                    }

                    if (logoutOn401) {
                        errorActions.push(put(clientUnset()));
                    }

                    yield all(errorActions);
                    break;
                }
                default: {
                    yield all([
                        put({
                            type: errorType
                        }),
                        put(
                            alertAdd({
                                message:
                                    err.response.data.error || defaultErrorText,
                                options: {
                                    variant: "error"
                                }
                            })
                        )
                    ]);
                    break;
                }
            }
        } finally {
            if (yield cancelled()) {
                yield call(cancelSource.cancel);
            }
        }
    }

    return function* watcher() {
        yield takeLatest([watchType, ...resetTypes], handler);
    };
}

// REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING
// REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING
// REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING REQUESTING

export function createRequestingSaga({
    sagaName,
    handlerName,
    method = "post",
    methodExtractor,
    apiUrl,
    watchType,
    successType,
    errorType,
    resetTypes = [],
    paramsExtractor,
    apiUrlExtractor,
    withValidation,
    validationFunction,
    logoutOn401 = true,
    logRes = true,
    isFormData,
    isBlob,
    modifyPayload
}) {
    function* api({ payload, params, cancelToken }) {
        try {
            const url = apiUrlExtractor ? apiUrlExtractor(params) : apiUrl;
            const _method = methodExtractor ? methodExtractor(params) : method;
            let res;
            if (["delete", "get"].includes(_method)) {
                res = yield axios[_method](`/api${url}`, { cancelToken });
            } else {
                res = yield axios[_method](`/api${url}`, payload, {
                    cancelToken,
                    ...(isFormData && {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }),
                    ...(isBlob && { responseType: "blob" })
                });
            }

            isdev &&
                logRes &&
                console.log(`res from ${sagaName} ${handlerName} api`, res);
            return isBlob ? res : res.data;
        } catch (err) {
            throw err;
        }
    }

    function* handler(action) {
        if (resetTypes.includes(action.type)) {
            return;
            // do nothing, just stop current loading
        }

        const cancelSource = axios.CancelToken.source();
        try {
            if (withValidation && validationFunction) {
                const localValidations = validationFunction(
                    action.payload,
                    action
                );

                if (localValidations) {
                    yield put({
                        type: errorType,
                        payload: {
                            validations: localValidations
                        }
                    });
                    return;
                }
            }

            const params = paramsExtractor ? paramsExtractor(action) : null;

            const response = yield call(api, {
                payload: modifyPayload
                    ? modifyPayload(action.payload)
                    : action.payload,
                params,
                cancelToken: cancelSource.token
            });

            yield put({
                type: successType,
                payload: isBlob ? response : response.payload
            });
            if (yield cancelled()) {
                return;
            }
            action.onSuccess && action.onSuccess(response);
        } catch (err) {
            isdev &&
                console.log(`err from ${sagaName} ${handlerName} handler`, err);

            if (err && err.message && !err.response) {
                isdev &&
                    console.error(
                        `err.message from ${sagaName} ${handlerName} handler!`
                    );

                yield all([
                    put({
                        type: errorType
                    }),
                    put(
                        alertAdd({
                            message: err.message,
                            options: {
                                variant: "error"
                            }
                        })
                    )
                ]);
                return;
            }

            if (!err || !err.response) {
                isdev &&
                    console.error(
                        `no err or err.response from ${sagaName} ${handlerName} handler!`
                    );

                yield all([
                    put({
                        type: errorType
                    }),
                    put(
                        alertAdd({
                            message: defaultErrorText,
                            options: {
                                variant: "error"
                            }
                        })
                    )
                ]);
                return;
            }

            isdev &&
                console.log(
                    `err.response from ${sagaName} ${handlerName} api`,
                    err.response
                );

            switch (err.response.status) {
                case 422: {
                    let errorActions = [];
                    errorActions.push(
                        put({
                            type: errorType,
                            payload: {
                                ...(withValidation && {
                                    validations: err.response.data.errors
                                })
                            }
                        })
                    );

                    if (err.response.data.message) {
                        errorActions.push(
                            put(
                                alertAdd({
                                    message: err.response.data.message,
                                    options: {
                                        variant: "error"
                                    }
                                })
                            )
                        );
                    }

                    yield all(errorActions);
                    break;
                }
                case 401: {
                    let errorActions = [];
                    errorActions.push(
                        put({
                            type: errorType
                        })
                    );

                    if (err.response.data.message) {
                        errorActions.push(
                            put(
                                alertAdd({
                                    message: err.response.data.message,
                                    options: {
                                        variant: "error"
                                    }
                                })
                            )
                        );
                    }

                    if (logoutOn401) {
                        errorActions.push(put(clientUnset()));
                    }

                    yield all(errorActions);
                    break;
                }
                case 403: {
                    yield all([
                        put({
                            type: errorType
                        }),
                        put(
                            alertAdd({
                                message:
                                    err.response.data.message ||
                                    defaultErrorText,
                                options: {
                                    variant: "error"
                                }
                            })
                        )
                    ]);
                    break;
                }
                default: {
                    yield all([
                        put({
                            type: errorType
                        }),
                        put(
                            alertAdd({
                                message:
                                    err.response.data.error || defaultErrorText,
                                options: {
                                    variant: "error"
                                }
                            })
                        )
                    ]);
                    break;
                }
            }
        } finally {
            if (yield cancelled()) {
                yield call(cancelSource.cancel);
            }
        }
    }

    return function* watcher() {
        yield takeLatest([watchType, ...resetTypes], handler);
    };
}
