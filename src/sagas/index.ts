import { all } from 'redux-saga/effects';

import { appDidLoad } from './appSagas';
import { logIn } from './authSagas';
import { fetchTodo } from './countSagas';

export default function* rootSaga() {
  yield all([logIn(), fetchTodo(), appDidLoad()]);
}
