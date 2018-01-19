import { delay } from 'redux-saga';
import { put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";

/**
 * SAGAS
 */

export function* setValueSaga({ payload: value }) {
  yield delay(1000)
 console.log("asdasasdasdasd")
  yield put({ type: 'SET_VALUE', payload: { value: 3 } });
}


/**
 * WATCHERS
 */

export function* watchSetValueAsync() {
  yield takeLatest(actionTypes.SET_VALUE_ASYNC, setValueSaga);
}