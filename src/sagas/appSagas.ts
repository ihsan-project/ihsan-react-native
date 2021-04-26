import { takeEvery, put } from 'redux-saga/effects';
import { APP_DID_LOAD, HYDRATE_APP_UNAUTH } from '../constants';
import { hydrateAppUnauth as hydrateAction } from '../actions'

export function* appDidLoad() {
  yield takeEvery(APP_DID_LOAD, beginUnauthHydration);
}

function* beginUnauthHydration() {
  yield put(hydrateAction())
}

export function* unAuthHydrating() {
  yield takeEvery(HYDRATE_APP_UNAUTH, downloadSettings);
  yield console.log("do other unauthenticated hydration here");
}

function * downloadSettings() {
  console.log("begin downloading settings...");
}