import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../../../data/movies';

/**
 * Props para el componente MovieCard.
 * Contiene la información de la película a mostrar.
 */
type MovieCardProps = {
  /** Objeto Movie con todos los datos de la película */
  movie: Movie;
};

/**
 * URL base de TMDB para construir las rutas de imágenes.
 * Se utiliza el tamaño w500 que es óptimo para dispositivos móviles.
 */
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

/**
 * Componente que renderiza una tarjeta individual de película.
 *
 * View Component (Presentacional) - Layer Vista.
 *
 * Muestra:
 * - Poster de la película (con placeholder si no existe)
 * - Título de la película (máximo 2 líneas)
 * - Calificación con estrella
 *
 * Diseño: Tarjeta vertical optimizada para listas horizontales.
 * Material Design 3: Incluye sombras, bordes redondeados y tipografía jerárquica.
 *
 * @param movie - Objeto Movie con los datos a mostrar
 *
 * @example
 * ```typescript
 * <MovieCard movie={movieObject} />
 * ```
 */
export const MovieCard = ({ movie }: MovieCardProps) => {
  // Construye la URL del póster si existe, undefined si no
  const posterImageUrl = movie.poster_path
    ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
    : undefined;

  return (
    <View style={styles.container}>
      {/* Sección: Poster o Placeholder */}
      {posterImageUrl ? (
        <Image source={{ uri: posterImageUrl }} style={styles.poster} />
      ) : (
        <View style={[styles.poster, styles.posterPlaceholder]}>
          <Text style={styles.placeholderText}>Sin póster</Text>
        </View>
      )}

      {/* Sección: Información de la película */}
      {/* Título - máximo 2 líneas */}
      <Text numberOfLines={2} style={styles.title}>
        {movie.title}
      </Text>

      {/* Calificación - formato: ★ 8.5 */}
      <Text style={styles.rating}>★ {movie.vote_average.toFixed(1)}</Text>
    </View>
  );
};

/**
 * Estilos que siguen Material Design 3.
 * Incluye:
 * - Sombras para profundidad
 * - Bordes redondeados
 * - Jerarquía tipográfica clara
 * - Colores adaptados al tema oscuro
 */
const styles = StyleSheet.create({
  // Contenedor principal de la tarjeta
  container: {
    width: 140,
    marginRight: 14,
  },

  // Imagen del póster
  poster: {
    width: 140,
    height: 210,
    borderRadius: 8,
    backgroundColor: '#263244',
    // Sombra para profundidad (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Sombra para profundidad (Android)
    elevation: 4,
  },

  // Placeholder cuando no hay póster disponible
  posterPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },

  // Texto del placeholder
  placeholderText: {
    color: '#b7c2d1',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },

  // Título de la película
  title: {
    color: '#f5f7fa',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 8,
    lineHeight: 20,
  },

  // Calificación con estrella
  rating: {
    color: '#f4c95d',
    fontSize: 13,
    marginTop: 5,
    fontWeight: '500',
  },
});
