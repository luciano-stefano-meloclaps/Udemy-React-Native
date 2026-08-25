import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Movie } from '../../../infra/api/movies/movies.types';
import { MovieCard } from './MovieCard';

type PopularMoviesSectionProps = {
  movies: Movie[];
  isLoading: boolean;
  errorMessage: string | null;
  onRetry: () => Promise<void>;
};

export const PopularMoviesSection = ({
  movies,
  isLoading,
  errorMessage,
  onRetry,
}: PopularMoviesSectionProps) => {
  if (isLoading) {
    return (
      <View style={styles.stateContainer}>
        <ActivityIndicator color="#f4c95d" />
        <Text style={styles.stateText}>Cargando peliculas populares...</Text>
      </View>
    );
  }

  if (errorMessage) {
    return (
      <View style={styles.stateContainer}>
        <Text style={styles.stateText}>{errorMessage}</Text>
        <Pressable onPress={onRetry} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.listContent}
      data={movies}
      horizontal
      keyExtractor={movie => movie.id.toString()}
      renderItem={({ item }) => <MovieCard movie={item} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingRight: 20,
  },
  stateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 250,
    paddingHorizontal: 24,
  },
  stateText: {
    color: '#cbd5e1',
    fontSize: 15,
    marginTop: 12,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#f4c95d',
    borderRadius: 6,
    marginTop: 16,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  retryButtonText: {
    color: '#172033',
    fontWeight: '700',
  },
});
