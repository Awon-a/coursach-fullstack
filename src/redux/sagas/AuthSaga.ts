import { call, Effect, put, takeEvery } from "redux-saga/effects";
import AuthService from "../../services/AuthService";
import { AuthActions, requestAuthFailed, requestAuthSuccess, SignInDtoResponse, SignUpAction, SignUpDtoResponse, SingInAction } from "../actions/auth";

function* signUpSaga(action: SignUpAction): Generator<Effect, void, SignUpDtoResponse> {
  try {
    const signUpDtoResponse = yield call(AuthService.registration, action.payload);
    
    localStorage.setItem('access_token', signUpDtoResponse.access_token);
    localStorage.setItem('user', JSON.stringify(signUpDtoResponse.user));

    yield put(requestAuthSuccess(AuthActions.SUCCESS_SIGN_UP, action.payload));
  } catch {
    yield put(requestAuthFailed());
  }
}

function* signInSaga(action: SingInAction): Generator<Effect, void, SignInDtoResponse> {
  try {
    const signInDtoResponse = yield call(AuthService.login, action.payload);
    localStorage.setItem('access_token', signInDtoResponse.access_token);
    localStorage.setItem('user', JSON.stringify(signInDtoResponse.user));

    yield put(requestAuthSuccess(AuthActions.SUCCSESS_SIGN_IN))
  } catch {
    yield put(requestAuthFailed());
  }
}

export function* watcherAuthSaga(): Generator<Effect, void> {
  yield takeEvery(AuthActions.SIGN_UP, signUpSaga);
  yield takeEvery(AuthActions.SIGN_IN, signInSaga);
}