import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SPACINGS } from '../../constants';

const Task = () => {
  const task = useSelector(state => state.task);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Task</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACINGS.container,
  },
});

export default Task;
