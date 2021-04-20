import { LOADING_SHOW, LOADING_HIDE } from '../constants';

export const initialState = {
  displayLoading: false,
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
    default:
      return state;
  }
};
