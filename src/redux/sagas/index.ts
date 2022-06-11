import { all, Effect } from "redux-saga/effects";
import { watcherTasksSaga } from "./TaskSaga";
import { watcherAuthSaga } from './AuthSaga';

export default function* rootSaga(): Generator<Effect, void> {
  yield all([
    watcherTasksSaga(),
    watcherAuthSaga(),
  ]);
}