import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  StatusBar,
  View
} from 'react-native';
import { add } from './actions/countActions';
import { useDispatch, useSelector } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => (state as any).count.count);
  console.log('count = ', count);

  const loginButtonStyles = {
    justifyContent: 'center'
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.authContainer}>
          <Button
            title="Google Login"
            onPress={() => {
              dispatch(add(1));
            }}
          />
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.booksContainer}
        >
          <Text>Hello world</Text>
          <Text>{count}</Text>
          <Button
            title="Press Me"
            onPress={() => {
              dispatch(add(1));
            }}
          />
        </ScrollView>
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
  booksContainer: {
    flex: 1,
  },
});

export default App;
