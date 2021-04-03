import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from './containers/home'
import LoginContainer from './containers/login'

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  booksContainer: {
    flex: 1,
  },
});

export default App;
