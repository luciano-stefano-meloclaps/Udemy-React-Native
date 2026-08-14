import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { CounterScreen } from './src/presentation/screens/CounterScreen';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
