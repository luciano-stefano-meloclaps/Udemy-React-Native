import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({ duration = 700, toValue = 1, callback = () => {} }) => {
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();

    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({ duration = 700, toValue = 0, callback = () => {} }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const startMovingPosition = ({
    initialPosition = 0,
    duration = 700,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callback);
  };

  return {
    //Methods
    fadeIn,
    fadeOut,
    startMovingPosition,

    //Properties
    animatedOpacity,
    animatedTop,
  };
};
