/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { colors, globalStyles } from '../../screens/theme/theme';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
  marginTop?: number;
  textAlign?: 'auto' | 'center' | 'left' | 'right' | 'justify' | undefined;
}

export const Titles = ({ text, safe = false, white = false }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? [] : top,
        marginBottom: 5,
        textAlign: 'center',
        color: white ? 'white' : colors.text,
      }}
    >
      {text}
    </Text>
  );
};
