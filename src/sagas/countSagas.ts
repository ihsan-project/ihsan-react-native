import { put, takeEvery } from 'redux-saga/effects';
import { loadedTodos } from '../actions';
import { FETCH_TODO } from '../constants';

export function* attemptToFetchTodo() {
  const apiResponse = yield fetch(
    'https://jsonplaceholder.typicode.com/todos/1',
  ).then((response) => response.json());

  yield put(loadedTodos(JSON.stringify(apiResponse)));
}

export function* fetchTodo() {
  yield takeEvery(FETCH_TODO, attemptToFetchTodo);
}
