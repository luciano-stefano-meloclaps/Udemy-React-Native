import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { colors } from '../theme/theme';
import {
  Ionicons,
  type IoniconsIconName,
} from '@react-native-vector-icons/ionicons/static';

interface Props {
  name: string;
  icon: IoniconsIconName;
  component: string;

  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItems = ({
  name,
  icon,
  component,
  isFirst,
  isLast,
}: Props) => {
  return (
    <Pressable onPress={() => console.log('Pressed')}>
      <View
        style={{
          ...styles.container,
          backgroundColor: colors.cardBackground,
          ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10 }),
          ...(isLast && {
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }),
        }}
      >
        <Ionicons name={icon} size={24} color={colors.primary} />
        <Text style={{ color: colors.text }}>{name}</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={colors.primary}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
});
