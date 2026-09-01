import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { colors, globalStyles } from '../../screens/theme/theme';

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  label?: string;
}

export const Button = ({ text, style, onPress, label }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
          label: label ? label : 'Button',
        },
        style,
      ]}
    >
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};
