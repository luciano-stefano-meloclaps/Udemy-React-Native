/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Animated, Easing, Pressable, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '../theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    fadeIn,
    fadeOut,
    startMovingPosition,
    animatedOpacity,
    animatedTop,
  } = useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [{ translateY: animatedTop }],
          },
        ]}
      />

      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingPosition({ initialPosition: -100 });
        }}
        style={{
          marginTop: 10,
          backgroundColor: 'skyblue',
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          fadeOut({});
          startMovingPosition({
            initialPosition: 100,
            easing: Easing.elastic(1),
            duration: 700,
          });
        }}
        style={{
          marginTop: 10,
          backgroundColor: 'lightcoral',
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 100,
    height: 100,
  },
});
