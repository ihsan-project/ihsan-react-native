import { takeEvery } from 'redux-saga/effects';
import { LOG_IN } from '../constants';

export function* attemptToLogin() {
  yield console.log('authSaga: attemptToLogin');
}

export function* logIn() {
  yield takeEvery(LOG_IN, attemptToLogin);
}
