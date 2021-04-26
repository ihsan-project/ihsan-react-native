import { LOADING_SHOW, LOADING_HIDE, APP_DID_LOAD } from '../constants';

export const initialState = {
  displayLoading: false,
  didLoad: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SHOW:
      return {
        ...state,
        displayLoading: true,
      };
    case LOADING_HIDE:
      return {
        ...state,
        displayLoading: false,
      };
    case APP_DID_LOAD:
      return {
        ...state,
        didLoad: true,
      };
    default:
      return state;
  }
};
