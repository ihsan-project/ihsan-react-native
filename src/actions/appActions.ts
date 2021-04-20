import { LOADING_HIDE, LOADING_SHOW } from '../constants';

export const showLoading = () => ({
  type: LOADING_SHOW,
});

export const hideLoading = () => ({
  type: LOADING_HIDE,
});
