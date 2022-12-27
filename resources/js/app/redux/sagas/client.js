import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import { CLIENT_SET, CLIENT_UNSET, CLIENT_LOAD } from "../actions/types";
import { clientSet, clientUnset } from "../actions/client";
import { setAxiosToken, setLocalStorageToken } from "@/helpers/auth";
import { isdev } from "@/config";

function* logout() {
    try {
        const res = yield axios.get("/api/auth/logout");
    } catch (err) {
        throw err;
    }
}

function* clientApi(payload) {
    try {
        const res = yield axios.get("/api/auth/user");
        isdev && console.log("res from client saga api/auth/user", res);

        return res.data;
    } catch (err) {
        throw err;
    }
}

function* clientHandler(action) {
    const { type, withoutRequest, tokenAlreadyExists } = action;

    switch (type) {
        case CLIENT_SET: {
            const token = action.payload.token;

            if (!token) {
                break;
            }
            setLocalStorageToken(token);
            setAxiosToken(token);
            break;
        }
        case CLIENT_LOAD: {
            try {
                let token;
                if (!tokenAlreadyExists) {
                    token = action.payload.token;
                    setLocalStorageToken(token);
                    setAxiosToken(token);
                }
                const response = yield call(clientApi);
                yield put(
                    clientSet({
                        ...(!tokenAlreadyExists && { token }),
                        userInfo: { ...response }
                    })
                );
            } catch (error) {
                isdev && console.log("was error in client load", error);

                // remove token
                setLocalStorageToken();
                setAxiosToken();
                yield put(clientUnset());
                break;
            }

            break;
        }
        case CLIENT_UNSET: {
            try {
                if (localStorage.token && !withoutRequest) yield call(logout);
            } catch (error) {
                // do nothing
            }
            // remove token
            setLocalStorageToken();
            setAxiosToken();
            break;
        }
        default: {
        }
    }
}

function* clientWatcher() {
    yield takeLatest([CLIENT_SET, CLIENT_LOAD, CLIENT_UNSET], clientHandler);
}

export default clientWatcher;
