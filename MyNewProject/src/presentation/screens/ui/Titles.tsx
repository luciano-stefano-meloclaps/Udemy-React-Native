/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { colors, globalStyles } from '../theme/theme';
import { Text } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export const Titles = ({ text, safe = false, white = false }: Props) => {
  const { top } = useSafeArea();

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? 'white' : colors.text,
      }}
    >
      {text}
    </Text>
  );
};
