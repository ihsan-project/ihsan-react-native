import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Button, View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { logIn } from '../actions';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import env from '../../.env'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();

      // setloggedIn(true);
      console.log('accessToken', accessToken)
      console.log('idToken', idToken)
      dispatch(logIn())
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        Alert.alert('Signin Error', error.message);
      }
    }
  };


  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: env.googleWebClientId,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.authContainer}>
        {/* <Button title="Google Login" onPress={() => dispatch(logIn())} /> */}
        <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={googleSignIn}
              />
      </View>
    </SafeAreaView>
  );
};

export default Login;
