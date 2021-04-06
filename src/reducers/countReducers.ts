import { ADD_NUMBER, GET_TODO } from '../constants';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case GET_TODO:
      return {
        ...state,
        todo: `fake todo. ${Math.random()}`,
      };
    default:
      return state;
  }
};
