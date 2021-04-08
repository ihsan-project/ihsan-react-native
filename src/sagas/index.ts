import { all } from 'redux-saga/effects';
import { logIn } from './authSagas';
import { fetchTodo } from './countSagas';

export default function* rootSaga() {
  yield all([logIn(), fetchTodo()]);
}
