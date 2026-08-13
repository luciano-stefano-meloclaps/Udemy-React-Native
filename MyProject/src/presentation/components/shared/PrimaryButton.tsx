import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

// PrimaryButton mínimo usando Pressable
// Props:
// - label: texto
// - onPress: handler pulsación corta
// - onLongPress: handler pulsación larga (opcional)
// - style: estilos externos
type Props = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
  style?: ViewStyle | any;
};

const PrimaryButton: React.FC<Props> = ({ label, onPress, onLongPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      android_ripple={{ color: 'rgba(0,0,0,0.08)' }}
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1976D2',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.95 },
  text: { color: '#fff', fontSize: 14, fontWeight: '600' },
});

export default PrimaryButton;
