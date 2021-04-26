import {
  LOADING_HIDE,
  LOADING_SHOW,
  APP_DID_LOAD,
  HYDRATE_APP_UNAUTH,
} from '../constants';

export const showLoading = () => ({
  type: LOADING_SHOW,
});

export const hideLoading = () => ({
  type: LOADING_HIDE,
});

export const appDidLoad = () => ({
  type: APP_DID_LOAD,
});

export const hydrateAppUnauth = () => ({
  type: HYDRATE_APP_UNAUTH,
});
