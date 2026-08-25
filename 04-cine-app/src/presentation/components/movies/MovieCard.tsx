import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../../../infra/api/movies/movies.types';

type MovieCardProps = {
  movie: Movie;
};

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieCard = ({ movie }: MovieCardProps) => {
  const posterImageUrl = movie.poster_path
    ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
    : undefined;

  return (
    <View style={styles.container}>
      {posterImageUrl ? (
        <Image source={{ uri: posterImageUrl }} style={styles.poster} />
      ) : (
        <View style={[styles.poster, styles.posterPlaceholder]}>
          <Text style={styles.placeholderText}>Sin poster</Text>
        </View>
      )}
      <Text numberOfLines={2} style={styles.title}>
        {movie.title}
      </Text>
      <Text style={styles.rating}>★ {movie.vote_average.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    marginRight: 14,
  },
  poster: {
    width: 140,
    height: 210,
    borderRadius: 8,
    backgroundColor: '#263244',
  },
  posterPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  placeholderText: {
    color: '#b7c2d1',
    textAlign: 'center',
  },
  title: {
    color: '#f5f7fa',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 8,
  },
  rating: {
    color: '#f4c95d',
    fontSize: 13,
    marginTop: 5,
  },
});
