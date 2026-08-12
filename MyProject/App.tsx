import React from 'react';
import { Text, View } from 'react-native';
import { HellowWorldScreen } from './src/presentation/screens/HellowWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';

export const App = () => {
  return (
    <View>
      <Text>Hello World</Text>
      <HellowWorldScreen />
      <CounterScreen />
    </View>
  );
};
