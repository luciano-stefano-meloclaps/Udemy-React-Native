import React from 'react';
import { View, ViewStyle } from 'react-native';
import { globalStyles } from '../../screens/theme/theme';

interface Props {
  style?: ViewStyle | undefined;
  children?: React.ReactNode;
}

export const CustomView = ({ style, children }: Props) => {
  return <View style={[globalStyles.mainContainer, style]}>{children}</View>;
};
