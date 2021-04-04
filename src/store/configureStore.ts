import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from '../reducers/authReducers';
import countReducer from '../reducers/countReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  count: countReducer,
});

// TODO: Add Sagas (as middleware) as parameter to composeWithDevTools()
const configureStore = () => createStore(rootReducer, composeWithDevTools());

export default configureStore;
