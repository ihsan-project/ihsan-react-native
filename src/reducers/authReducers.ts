import { LOG_IN } from '../constants/actionConstants';

const initialState = {
  isLoggedIn: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
