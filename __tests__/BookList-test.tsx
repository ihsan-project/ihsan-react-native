import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BookList from '../src/components/BookList';

const withProviders = (Component) => {
  const initialState = { auth: { isLoggedIn: false } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

it('renders correctly', () => {
  renderer.create(withProviders(BookList));
});
