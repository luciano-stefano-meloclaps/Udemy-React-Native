import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../views/screens';
import { DetailsScreen } from '../views/screens/details/DetailsScreen';

export type RootStackParams = {
  Home: undefined;
  Details: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
