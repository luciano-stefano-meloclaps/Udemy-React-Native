import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { HomeWorkScreen } from './src/presentation/screens/HomeWorkScreen';
import { HomeWorkScreen2 } from './src/presentation/screens/HomeWorkScreen2';
import { HomeWorkScreen3 } from './src/presentation/screens/HomeWorkScreen3';
import { HomeWorkScreen4 } from './src/presentation/screens/HomeWorkScreen4';
import { HomeWorkScreen5 } from './src/presentation/screens/HomeWorkScreen5';
import { HomeWorkScreen6 } from './src/presentation/screens/HomeWorkScreen6';
import { HomeWorkScreen7 } from './src/presentation/screens/HomeWorkScreen7';
import { HomeWorkScreen8 } from './src/presentation/screens/HomeWorkScreen8';

export const App = () => {
  return (
    <PaperProvider>
      {/*<SafeAreaView style={styles.container}>
        <CounterScreen />
      </SafeAreaView>*/}
      <HomeWorkScreen8 />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
