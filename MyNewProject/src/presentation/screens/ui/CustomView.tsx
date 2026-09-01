import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../theme/theme';

interface Props {
  style?: ViewStyle | undefined;
  children?: React.ReactNode;
}

export const CustomView = ({ style, children }: Props) => {
  return (
    <View style={[globalStyles.mainContainer, style]}>
      <Text>Custom View</Text>
      {children}
    </View>
  );
};
