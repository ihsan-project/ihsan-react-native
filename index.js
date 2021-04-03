import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/App';
import { name as appName } from './app.json';

import configureStore from './src/store/configureStore';

const ReduxApp = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
