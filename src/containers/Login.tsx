import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Button, View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { logIn } from '../actions';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

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
  // const [loggedIn, setloggedIn] = useState(false);
  // const [userInfo, setuserInfo] = useState([]);

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
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      // webClientId: '418977770929-g9ou7r9eva1u78a3anassoqreas466p0.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
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
