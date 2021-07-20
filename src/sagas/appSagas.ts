import { takeEvery, put, call } from 'redux-saga/effects';

import { APP_DID_LOAD, HYDRATE_APP_UNAUTH } from '../constants';
import {
  hydrateAppUnauth as hydrateAction,
  fetchSettings as fetchSettingsAction,
} from '../actions';

function* beginUnauthHydration() {
  yield put(hydrateAction());
}

function* downloadSettings() {
  console.log('begin downloading settings...');

  yield put(fetchSettingsAction());

  console.log('done downloading settings...');
}

export function* appDidLoad() {
  yield takeEvery(APP_DID_LOAD, beginUnauthHydration);
}

export function* unAuthHydrating() {
  yield takeEvery(HYDRATE_APP_UNAUTH, downloadSettings);
  yield console.log('do other unauthenticated hydration here');
}
