import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SPACINGS } from '../../constants';

const TaskEditor = () => {
  const task = useSelector(state => state.task);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Task Editor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACINGS.container,
  },
});

export default TaskEditor;
