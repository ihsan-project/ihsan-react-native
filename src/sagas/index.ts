import { all } from 'redux-saga/effects';
import { logIn } from './authSagas';

export default function* rootSaga() {
  yield all([logIn()]);
}
