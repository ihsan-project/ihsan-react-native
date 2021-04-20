import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { ProgressBar, Colors } from 'react-native-paper';
import HomeContainer from './containers/Home';
import LoginContainer from './containers/Login';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const isLoggedIn = useSelector((state) => (state as any).auth.isLoggedIn);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ProgressBar color={Colors.red800} indeterminate={true} />
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <Stack.Screen name="Home" component={HomeContainer} />
          ) : (
            <Stack.Screen
              name="Login"
              component={LoginContainer}
              options={{ title: 'Ihsan React Native' }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
