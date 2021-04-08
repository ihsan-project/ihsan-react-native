import { ADD_NUMBER, LOADED_TODO } from '../constants';

const initialState = {
  count: 0,
  todo: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case LOADED_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
};
