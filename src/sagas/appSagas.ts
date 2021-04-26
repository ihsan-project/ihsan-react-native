import { takeEvery } from 'redux-saga/effects';
import { APP_DID_LOAD } from '../constants';

export function* appDidLoad() {
  yield takeEvery(APP_DID_LOAD, hydrateApp);
}

export function* hydrateApp() {
  yield console.log('hydrating app...');
}