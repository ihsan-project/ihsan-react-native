import React from 'react';
import { SafeAreaView, StyleSheet, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logIn } from '../actions/authActions';

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.authContainer}>
        <Button title="Google Login" onPress={() => dispatch(logIn())} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
