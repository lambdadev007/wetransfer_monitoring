import {
    all,
    call,
    put,
    takeLatest,
    cancelled,
    fork
} from "redux-saga/effects";
import axios from "axios";
import { LOGIN, LOGIN_PASSWORD_CHANGE } from "../actions/types";
import { clientSet } from "../actions/client";
import { alertAdd } from "../actions/alerts";
import { isdev, defaultErrorText } from "@/config";
import { validateLogin, validateLoginPasswordChange } from "@/helpers/validate";

function* loginApi(payload, cancelToken) {
    try {
        const res = yield axios.post("/api/auth/login", payload, {
            cancelToken
        });

        return res.data;
    } catch (err) {
        throw err;
    }
}

function* loginPasswordChangeApi(payload, cancelToken) {
    try {
        const res = yield axios.post("/api/auth/change-password", payload, {
            cancelToken
        });

        return res.data;
    } catch (err) {
        throw err;
    }
}

function* loginHandler(action) {
    const { type, payload, onSuccess } = action;

    if (type === LOGIN.RESET) {
        // just cancel current requesting
        return;
    }

    const cancelSource = axios.CancelToken.source();
    try {
        const localValidations = validateLogin(payload);

        if (localValidations) {
            yield put({
                type: LOGIN.ERROR,
                payload: {
                    validations: localValidations
                }
            });
            return;
        }

        const response = yield call(loginApi, payload, cancelSource.token);
        isdev && console.log("response from loginApi", response);

        const token = response.payload.access_token;

        yield all([
            put({ type: LOGIN.SUCCESS }),
            put(
                clientSet({
                    token,
                    userInfo: { ...response.payload.user }
                })
            )
        ]);
        if (yield cancelled()) {
            return;
        }
        onSuccess && onSuccess();
    } catch (err) {
        isdev && console.log(`err from login saga`, err);

        if (err && err.message && !err.response) {
            isdev && console.error(`err.message from login saga`);

            yield all([
                put({
                    type: LOGIN.ERROR
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
            isdev && console.error(`no err or err.response from login saga!`);

            yield all([
                put({
                    type: LOGIN.ERROR
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

        isdev && console.log(`err.response from login saga`, err.response);

        switch (err.response.status) {
            // our validations response code is 422, instead of 400
            case 422: {
                let errorActions = [];
                errorActions.push(
                    put({
                        type: LOGIN.ERROR,
                        payload: {
                            validations: err.response.data.errors
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
                        type: LOGIN.ERROR
                    })
                );

                if (err.response.data.payload.message) {
                    errorActions.push(
                        put(
                            alertAdd({
                                message: err.response.data.payload.message,
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
            default: {
                yield all([
                    put({
                        type: LOGIN.ERROR
                    }),
                    put(
                        alertAdd({
                            message:
                                err.response.data.message || defaultErrorText,
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
function* loginPasswordChangeHandler(action) {
    const { type, payload, onSuccess } = action;

    if (type === LOGIN.RESET) {
        // just cancel current requesting
        return;
    }

    const cancelSource = axios.CancelToken.source();
    try {
        const localValidations = validateLoginPasswordChange(payload);

        if (localValidations) {
            yield put({
                type: LOGIN_PASSWORD_CHANGE.ERROR,
                payload: {
                    validations: localValidations
                }
            });
            return;
        }

        const response = yield call(
            loginPasswordChangeApi,
            payload,
            cancelSource.token
        );
        isdev && console.log("response from loginPasswordChangeApi", response);

        yield all([
            put({ type: LOGIN_PASSWORD_CHANGE.SUCCESS }),
            put(
                clientSet({
                    userInfo: { ...response.payload }
                })
            )
        ]);
        if (yield cancelled()) {
            return;
        }
        onSuccess && onSuccess();
    } catch (err) {
        isdev && console.log(`err from loginPasswordChange saga`, err);

        if (err && err.message && !err.response) {
            isdev && console.error(`err.message from loginPasswordChange saga`);

            yield all([
                put({
                    type: LOGIN_PASSWORD_CHANGE.ERROR
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
                    `no err or err.response from loginPasswordChange saga!`
                );

            yield all([
                put({
                    type: LOGIN_PASSWORD_CHANGE.ERROR
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
                `err.response from loginPasswordChange saga`,
                err.response
            );

        switch (err.response.status) {
            // our validations response code is 422, instead of 400
            case 422: {
                let errorActions = [];
                errorActions.push(
                    put({
                        type: LOGIN_PASSWORD_CHANGE.ERROR,
                        payload: {
                            validations: err.response.data.errors
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
                        type: LOGIN_PASSWORD_CHANGE.ERROR
                    })
                );

                if (err.response.data.payload.message) {
                    errorActions.push(
                        put(
                            alertAdd({
                                message: err.response.data.payload.message,
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
            default: {
                yield all([
                    put({
                        type: LOGIN_PASSWORD_CHANGE.ERROR
                    }),
                    put(
                        alertAdd({
                            message:
                                err.response.data.message || defaultErrorText,
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

function* loginWatcher() {
    yield takeLatest([LOGIN.REQUESTING, LOGIN.RESET], loginHandler);
}
function* loginPasswordChangeWatcher() {
    yield takeLatest(
        [LOGIN_PASSWORD_CHANGE.REQUESTING, LOGIN.RESET],
        loginPasswordChangeHandler
    );
}

function* rootWatcher() {
    yield all([fork(loginWatcher), fork(loginPasswordChangeWatcher)]);
}

export default rootWatcher;
