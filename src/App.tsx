import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { ProgressBar, Colors } from 'react-native-paper';
import HomeContainer from './containers/Home';
import LoginContainer from './containers/Login';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    opacity: 0.4,
  },
});

const Stack = createStackNavigator();

const App: React.FC = () => {
  const isLoggedIn = useSelector((state) => (state as any).auth.isLoggedIn);
  const displayLoading = useSelector(
    (state) => (state as any).app.displayLoading,
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {displayLoading && <ProgressBar color={Colors.red800} indeterminate />}
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
      {displayLoading && <View style={styles.overlay} />}
    </>
  );
};

export default App;
