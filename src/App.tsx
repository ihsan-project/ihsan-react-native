import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import { add } from './actions/countActions';
import { useDispatch, useSelector } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => (state as any).count.count);
  console.log('count = ', count);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});

export default App;
