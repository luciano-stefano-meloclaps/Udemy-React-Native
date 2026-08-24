import React from 'react';
import { Text, View } from 'react-native';
import { usePopularMovies } from '../../hooks/usePopularMovies';

export const HomeScreen = () => {
  usePopularMovies();

  return (
    <View>
      <Text>Home Screen Components</Text>
    </View>
  );
};
