/* eslint-disable react-native/no-inline-styles */
import { PropsWithChildren } from 'react';

import { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { colors } from '../../screens/theme/theme';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({ style, children }: Props) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
