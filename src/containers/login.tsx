import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View
} from 'react-native';
import { add } from '../actions/countActions';
import { useDispatch, useSelector } from 'react-redux';
import 'react-native-gesture-handler';

const LoginContainer: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => (state as any).count.count);
  console.log('count = ', count);

  const loginButtonStyles = {
    justifyContent: 'center'
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.authContainer}>
          <Button
            title="Google Login"
            onPress={() => {
              navigation.navigate('Home', { name: 'Jane' })
            }}
          />
        </View>
      </SafeAreaView>
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
});

export default LoginContainer;
