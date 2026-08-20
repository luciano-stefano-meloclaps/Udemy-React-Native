import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { HomeWorkScreen8 } from './src/presentation/screens/HomeWorkScreen8';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

export const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <HomeWorkScreen8 />
        <View>
          <Text>Hello, React Native!</Text>
        </View>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
