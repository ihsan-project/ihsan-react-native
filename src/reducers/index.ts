import { combineReducers } from 'redux';
import authReducers, {
  initialState as initialAuthState
} from './authReducers';
import countReducers, {
  initialState as initialCountState,
} from './countReducers';
import appReducers, {
  initialState as initialAppState,
} from './appReducers'

export const initialState = {
  auth: { ...initialAuthState },
  count: { ...initialCountState },
  app: { ...initialAppState }
};

export default combineReducers({
  app: appReducers,
  auth: authReducers,
  count: countReducers,
});
