import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../actions';

const styles = StyleSheet.create({
  booksContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => (state as any).count?.todo);

  return (
    <View style={styles.booksContainer}>
      <Text>Home Screen, only visible once logged in.</Text>
      <Text>Todo: {todo}</Text>
      <Button title="Fetch Todo" onPress={() => dispatch(fetchTodos())} />
    </View>
  );
};

export default BookList;
