/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, View } from 'react-native';
import { globalStyles } from '../theme/theme';
import { Titles } from '../../components/ui/Titles';
import { MenuItems } from '../../components/ui/MenuItems';
import type { IoniconsIconName } from '@react-native-vector-icons/ionicons/static';
import type { RootStackParams } from '../../../navigator/StackNavigator';

interface MenuItem {
  name: string;
  icon: IoniconsIconName;
  // Tiene que ser el MISMO nombre que le pusimos al <Stack.Screen name="..." />
  component: keyof RootStackParams;
}

export const menuItems: MenuItem[] = [
  // 01-animationMenuItems
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },

  // A medida que crees las pantallas, las registras en el StackNavigator
  // y las agregas aca. Ejemplo:
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  { name: 'Modal', icon: 'copy-outline', component: 'ModalScreen' },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  // { name: 'Slides', icon: 'flower-outline', component: 'SlidesScreen' },
  // { name: 'Themes', icon: 'flask-outline', component: 'ChangeThemeScreen' },
  { name: 'Switches', icon: 'toggle-outline', component: 'SwitchScreen' },
  { name: 'Alerts', icon: 'alert-circle-outline', component: 'AlertScreen' },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

export const HomeScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Titles marginTop={80} text="Home" safe />

          {menuItems.map((item, index) => (
            <MenuItems
              key={item.name}
              {...item}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
            />
          ))}

          <View style={globalStyles.bottomSpacer} />
        </ScrollView>
      </View>
    </View>
  );
};
