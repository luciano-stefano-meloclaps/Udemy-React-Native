/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaProvider,
  //useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { StackNavigator } from './navigator/StackNavigator';
import React from 'react';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
/*
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});*/

export default App;
