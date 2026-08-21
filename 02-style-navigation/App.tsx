import React from 'react';
import {
  BottomNavigation,
  Provider as PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/presentation/routes/StackNavigator';
import BottomTabNavigator from './src/presentation/routes/NavbarBottom';
export const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        {/*<StackNavigator />*/}
        <BottomTabNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
