import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import React from 'react';
import App from '../src/App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const withProviders = (Component) => {
  const initialState = { count: 0 };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

it('renders correctly', () => {
  renderer.create(withProviders(App));
});
