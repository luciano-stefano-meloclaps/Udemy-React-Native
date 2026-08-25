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

/**
 * Props para el componente MoviesSection.
 * Define toda la información necesaria para renderizar una sección de películas.
 */
type MoviesSectionProps = {
  /** Lista de películas a mostrar */
  movies: Movie[];
  /** Indica si se está cargando la información */
  isLoading: boolean;
  /** Mensaje de error si algo falló, null si todo está bien */
  errorMessage: string | null;
  /** Función a ejecutar cuando el usuario presiona reintentar */
  onRetry: () => Promise<void>;
};

/**
 * Componente genérico que renderiza una sección horizontal de películas.
 *
 * Maneja tres estados:
 * 1. Cargando: Muestra spinner
 * 2. Error: Muestra mensaje de error y botón para reintentar
 * 3. Éxito: Muestra lista horizontal de películas
 *
 * @param movies - Array de películas a mostrar
 * @param isLoading - Estado de carga
 * @param errorMessage - Mensaje de error (si lo hay)
 * @param onRetry - Callback para reintentar la carga
 *
 * @example
 * ```typescript
 * <MoviesSection
 *   movies={topRatedMovies}
 *   isLoading={isLoading}
 *   errorMessage={errorMessage}
 *   onRetry={retryFetch}
 * />
 * ```
 */
export const MoviesSection = ({
  movies,
  isLoading,
  errorMessage,
  onRetry,
}: MoviesSectionProps) => {
  // Estado: Cargando
  if (isLoading) {
    return (
      <View style={styles.stateContainer}>
        <ActivityIndicator
          color={styles.loadingIndicator.color}
          size="large"
        />
        <Text style={styles.stateText}>Cargando películas...</Text>
      </View>
    );
  }

  // Estado: Error
  if (errorMessage) {
    return (
      <View style={styles.stateContainer}>
        <Text style={styles.errorText}>{errorMessage}</Text>
        <Pressable onPress={onRetry} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  // Estado: Éxito - Renderiza la lista horizontal
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

// Alias para compatibilidad retroactiva
export const PopularMoviesSection = MoviesSection;

/**
 * Estilos que siguen Material Design 3.
 * Se utilizan colores y espaciados consistentes con la paleta del diseño.
 */
const styles = StyleSheet.create({
  // Contenedor para estados (cargando, error)
  stateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 250,
    paddingHorizontal: 24,
  },

  // Lista horizontal de películas
  listContent: {
    paddingRight: 20,
  },

  // Texto para estado de carga
  stateText: {
    color: '#cbd5e1',
    fontSize: 15,
    marginTop: 12,
    textAlign: 'center',
  },

  // Texto para estado de error
  errorText: {
    color: '#f87171',
    fontSize: 15,
    marginTop: 12,
    textAlign: 'center',
  },

  // Indicador de carga (spinner)
  loadingIndicator: {
    color: '#f4c95d',
  },

  // Botón para reintentar
  retryButton: {
    backgroundColor: '#f4c95d',
    borderRadius: 8,
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  // Texto del botón reintentar
  retryButtonText: {
    color: '#172033',
    fontWeight: '600',
    fontSize: 14,
  },
});

