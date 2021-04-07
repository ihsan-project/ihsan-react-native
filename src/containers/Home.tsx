import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, logOut } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  booksContainer: {
    flex: 1,
  },
});

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => (state as any).count.todo);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.detailContainer}>
          <Text>Home Screen, only visible once logged in.</Text>
          <Text>Todo: {todo}</Text>
          <Button title="Fetch Todo" onPress={() => dispatch(fetchTodos())} />
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.booksContainer}>
          <Button title="Log Out" onPress={() => dispatch(logOut())} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
