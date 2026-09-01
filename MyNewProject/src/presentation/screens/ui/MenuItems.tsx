import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { colors } from '../theme/theme';
import {
  Ionicons,
  type IoniconsIconName,
} from '@react-native-vector-icons/ionicons/static';
import type { RootStackParams } from '../../../navigator/StackNavigator';

interface Props {
  name: string;
  icon: IoniconsIconName;
  component: keyof RootStackParams;

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
  // useNavigation nos da el "control remoto" para movernos entre pantallas.
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <Pressable onPress={() => navigation.navigate(component)}>
      <View
        style={[
          styles.container,
          isFirst && styles.first,
          isLast && styles.last,
        ]}
      >
        <Ionicons name={icon} size={24} color={colors.primary} />
        <Text style={styles.text}>{name}</Text>
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
    paddingHorizontal: 10,
    backgroundColor: colors.cardBackground,
  },
  first: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  last: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    flex: 1,
    color: colors.text,
    fontSize: 18,
    marginLeft: 10,
  },
});
