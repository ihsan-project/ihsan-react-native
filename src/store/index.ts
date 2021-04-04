import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// TODO: Add Sagas (as middleware) as parameter to composeWithDevTools()
const store = createStore(rootReducer, composeWithDevTools());

export default store;
