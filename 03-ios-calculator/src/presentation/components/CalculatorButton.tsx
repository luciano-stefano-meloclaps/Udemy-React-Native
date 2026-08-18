import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  flexGrow?: number;
  colorTextBlack?: boolean;

  /*width?: number;*/
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  flexGrow,
  colorTextBlack = false,
}: /*width*/
Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        flexGrow: flexGrow ?? flexGrow,
        /*width: width ?? width,*/
      })}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: colorTextBlack ? 'black' : 'white',
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
