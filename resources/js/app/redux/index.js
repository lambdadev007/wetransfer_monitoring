import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { isdev } from "@/config";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import indexSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeSetup = isdev ? composeWithDevTools : compose;

const initialState = {};
const middleware = [sagaMiddleware];
const store = createStore(
    rootReducer,
    initialState,
    composeSetup(applyMiddleware(...middleware))
);

sagaMiddleware.run(indexSaga);

export default store;
