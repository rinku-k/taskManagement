import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Task from '../modules/task';
import TaskEditor from '../modules/task/editor';
import Employee from '../modules/employee';

const Stack = createStackNavigator();

const Screens = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="TaskEditor" component={TaskEditor} />
          <Stack.Screen name="Employee" component={Employee} />
          <Stack.Screen name="Task" component={Task} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Screens;
