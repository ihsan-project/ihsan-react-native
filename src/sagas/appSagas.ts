import { takeEvery, put } from 'redux-saga/effects';
import { APP_DID_LOAD, HYDRATE_APP_UNAUTH } from '../constants';
import { hydrateAppUnauth as hydrateAction } from '../actions'

import axios from 'react-native-axios';
import config from 'react-native-config';

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

function* downloadSettings() {
  console.log("begin downloading settings...");

  var instance = axios.create({
    baseURL: config.API_BASE_URL,
    timeout: 10000,
    headers: { 'x-api-key': config.API_KEY }
  });

  // TODO: Abstract this into some helper class
  instance.get('settings').then((res) => {
    // TODO: Load this into redux
    console.log("settings", res.data);
  }).catch((err) => {
    console.log("settings error:", err);
  })
}