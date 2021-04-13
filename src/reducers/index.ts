import { combineReducers } from 'redux';
import authReducers, { initialState as initialAuthState } from './authReducers';
import countReducers, {
  initialState as initialCountState,
} from './countReducers';

export const initialState = {
  auth: { ...initialAuthState },
  count: { ...initialCountState },
};

export default combineReducers({
  auth: authReducers,
  count: countReducers,
});
