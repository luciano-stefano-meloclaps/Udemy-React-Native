/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, Text, View } from 'react-native';
import { styles } from './src/config/theme/app-theme';
import { CalculatorScreen } from './src/presentation/screens/CalculatorScreen';

function App() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} />

      <CalculatorScreen />
    </View>
  );
}

export default App;
