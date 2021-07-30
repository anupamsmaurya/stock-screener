import { all, fork } from "redux-saga/effects";
import stocksSaga from "./stocksSaga";

export function* rootSaga() {
  yield all([fork(stocksSaga)]);
}
