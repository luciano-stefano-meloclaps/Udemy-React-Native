import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { PopularMoviesView } from '../../components/movies/PopularMoviesView';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Peliculas populares</Text>
      <PopularMoviesView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#101827',
    flex: 1,
    paddingTop: 24,
  },
  title: {
    color: '#f5f7fa',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 18,
    paddingHorizontal: 20,
  },
});
