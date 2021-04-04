import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { logOut } from '../actions';

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

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.detailContainer}>
          <Text>Home Screen, only visible once logged in.</Text>
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
