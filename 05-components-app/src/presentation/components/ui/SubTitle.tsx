/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { colors, globalStyles } from '../../screens/theme/theme';

interface Props {
  text: string;
  backgroundColor?: string;
}

export const SubTitle = ({ text, backgroundColor = colors.background }: Props) => {
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        backgroundColor,
        padding: 5,
      }}
    >
      {text}
    </Text>
  );
};
