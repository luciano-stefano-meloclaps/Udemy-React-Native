import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../presentation/screens/home/HomeScreen';
import { Animation101Screen } from '../presentation/screens/animations/Animation101Screen';
import { Animation102Screen } from '../presentation/screens/animations/Animation102Screen';
import { SwitchScreen } from '../presentation/components/ui/SwitchScreen';
import { AlertScreen } from '../presentation/components/ui/AlertScreen';
import { TextInputScreen } from '../presentation/screens/inputs/TextInputScreen';
// Aca se declaran TODAS las rutas de la app y los parametros que reciben.
// undefined = esa pantalla no recibe parametros.
export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
  TextInputScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* El Home dibuja su propio titulo, por eso le escondemos el header */}
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
    </Stack.Navigator>
  );
};
