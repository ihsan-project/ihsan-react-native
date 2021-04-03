import React from 'react';
import { SafeAreaView, StyleSheet, Button, View } from 'react-native';
import { useSelector } from 'react-redux';

const LoginContainer: React.FC = ({ navigation }) => {
  const count = useSelector((state) => (state as any).count.count);
  console.log('count = ', count);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.authContainer}>
          <Button
            title="Google Login"
            onPress={() => {
              navigation.navigate('Home', { name: 'Jane' });
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
