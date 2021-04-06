import { takeEvery } from 'redux-saga/effects';
import { LOG_IN } from '../constants';

export function* attemptToLogin() {
  yield console.log('authSaga: attemptToLogin');
  const apiResponse = yield fetch(
    'https://jsonplaceholder.typicode.com/todos/1',
  ).then((response) => response.json());
  yield console.log('apiResponse: ', apiResponse);
  // yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* logIn() {
  yield takeEvery(LOG_IN, attemptToLogin);
}
