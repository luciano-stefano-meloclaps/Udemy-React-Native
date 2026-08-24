import React from 'react';
import { Text, View } from 'react-native';
import { useMovie } from '../../hooks/useMovie';

export const HomeScreen = () => {
  useMovie();

  return (
    <View>
      <Text>Home Screen Components</Text>
    </View>
  );
};
