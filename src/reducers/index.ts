import { combineReducers } from 'redux';
import authReducers from './authReducers';
import countReducers from './countReducers';

export default combineReducers({
  auth: authReducers,
  count: countReducers,
});
