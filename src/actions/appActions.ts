import { LOADING_HIDE, LOADING_SHOW, APP_DID_LOAD } from '../constants';

export const showLoading = () => ({
  type: LOADING_SHOW,
});

export const hideLoading = () => ({
  type: LOADING_HIDE,
});

export const appDidLoad = () => ({
  type: APP_DID_LOAD,
});
