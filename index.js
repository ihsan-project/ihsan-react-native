import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';

const ReduxApp = () => (
    <Provider store={configureStore()}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp);

const amplifyConfig = {
    Auth: {
      identityPoolId: 'us-east-1:8dd26e50-d540-4b5a-aaa5-099a4af9e346',
      region: 'us-east-1'
    }
  }
  //Initialize Amplify
  Auth.configure(amplifyConfig);

  const analyticsConfig = {
    AWSPinpoint: {
          // Amazon Pinpoint App Client ID
          appId: '365afb9cab0244b2ad1af771913cdbdf',
          // Amazon service region
          region: 'us-east-1',
          mandatorySignIn: false,
    }
  }

  Analytics.configure(analyticsConfig)

//   //Record an event
//   Analytics.record('some-event-name');

//   //Record a custom event
//   Analytics.record({
//       name: 'Album',
//       attributes: { genre: 'Rock', year: '1989' }
//   });