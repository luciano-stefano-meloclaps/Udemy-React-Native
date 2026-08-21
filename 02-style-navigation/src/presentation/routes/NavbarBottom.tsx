import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Ajustes } from '../screens/Ajustes';
import { ProductScreen } from '../screens/ProductScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductScreen} />
      <Tab.Screen name="Settings" component={Ajustes} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
