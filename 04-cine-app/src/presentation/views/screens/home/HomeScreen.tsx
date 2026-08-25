import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import {
  PopularMoviesView,
  TopRatedMoviesView,
  UpcomingMoviesView,
} from '../../components/movies';

/**
 * Pantalla principal que muestra todas las secciones de películas.
 *
 * View Screen (Pantalla Principal) - Layer Vista.
 *
 * Estructura:
 * - Películas populares: Las más vistas en este momento
 * - Películas mejor calificadas: Las mejor valoradas de todos los tiempos
 * - Películas próximas: Las que se estrenarán en breve
 */
export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Título principal */}
        <Text style={styles.mainTitle}>Películas</Text>

        {/* Sección: Películas Populares */}
        <Text style={styles.sectionTitle}>Populares ahora</Text>
        <PopularMoviesView />

        {/* Sección: Películas Mejor Calificadas */}
        <Text style={styles.sectionTitle}>Mejor calificadas</Text>
        <TopRatedMoviesView />

        {/* Sección: Películas Próximas */}
        <Text style={styles.sectionTitle}>Próximas a estrenarse</Text>
        <UpcomingMoviesView />
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * Estilos que siguen Material Design 3.
 * Incluye espaciados consistentes, jerarquía visual y colores adaptados.
 */
const styles = StyleSheet.create({
  // Contenedor principal
  screen: {
    backgroundColor: '#101827',
    flex: 1,
  },

  // Contenedor de scroll
  scrollContent: {
    paddingBottom: 24,
  },

  // Título principal de la pantalla
  mainTitle: {
    color: '#f5f7fa',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 24,
    paddingHorizontal: 20,
    letterSpacing: -0.5,
  },

  // Títulos de secciones
  sectionTitle: {
    color: '#e2e8f0',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 14,
    marginTop: 24,
    paddingHorizontal: 20,
  },
});
