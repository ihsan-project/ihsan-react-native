import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from './containers/Home';
import LoginContainer from './containers/Login';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginContainer}
          options={{ title: 'Ihsan React Native' }}
        />
        <Stack.Screen name="Home" component={HomeContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default App;
