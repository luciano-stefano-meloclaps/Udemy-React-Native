import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  onPress: () => void;
  style?: ViewStyle | any;
};

/**
 * FloatingIcon: botón circular flotante usado para acciones rápidas (ej. reset)
 */
const FloatingIcon: React.FC<Props> = ({ onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, style]}
      android_ripple={{ color: 'rgba(255,255,255,0.2)', borderless: true }}
      accessibilityLabel="floating-action-reset"
    >
      <Text style={styles.icon}>⟲</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1976D2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  icon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
});

export default FloatingIcon;
