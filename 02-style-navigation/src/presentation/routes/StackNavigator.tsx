import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { HomeWorkScreen8 } from '../screens/HomeWorkScreen8';
import { HomeWorkScreen7 } from '../screens/HomeWorkScreen7';
import { HomeWorkScreen } from '../screens/HomeWorkScreen';
import { HomeWorkScreen2 } from '../screens/HomeWorkScreen2';
import { HomeWorkScreen3 } from '../screens/HomeWorkScreen3';
import { HomeWorkScreen4 } from '../screens/HomeWorkScreen4';
import { HomeWorkScreen5 } from '../screens/HomeWorkScreen5';
import { HomeWorkScreen6 } from '../screens/HomeWorkScreen6';
import { ProductScreen } from '../screens/ProductScreen';
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen';
import { Ajustes } from '../screens/Ajustes';

export type RootStackParams = {
  HomeScreen: undefined;
  HomeWorkScreen8: undefined;
  HomeWorkScreen7: undefined;
  HomeWorkScreen6: undefined;
  HomeWorkScreen5: undefined;
  HomeWorkScreen4: undefined;
  HomeWorkScreen3: undefined;
  HomeWorkScreen2: undefined;
  HomeWorkScreen: undefined;
  ProductScreen: undefined;
  Ajustes: undefined;
  ProductDetailsScreen: { id: number; name: string };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        options={{ freezeOnBlur: true }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen name="HomeWorkScreen8" component={HomeWorkScreen8} />
      <Stack.Screen name="HomeWorkScreen7" component={HomeWorkScreen7} />
      <Stack.Screen name="HomeWorkScreen6" component={HomeWorkScreen6} />
      <Stack.Screen name="HomeWorkScreen5" component={HomeWorkScreen5} />
      <Stack.Screen name="HomeWorkScreen4" component={HomeWorkScreen4} />
      <Stack.Screen name="HomeWorkScreen3" component={HomeWorkScreen3} />
      <Stack.Screen name="HomeWorkScreen2" component={HomeWorkScreen2} />
      <Stack.Screen name="HomeWorkScreen" component={HomeWorkScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="Ajustes" component={Ajustes} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};
