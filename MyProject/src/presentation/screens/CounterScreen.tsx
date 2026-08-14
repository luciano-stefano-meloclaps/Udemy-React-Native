import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/shared/PrimaryButton';

export const CounterScreen = () => {
  // Estado local del contador. Inicializamos en 5 por ejemplo.
  // `count` se renderiza en la pantalla y `setCount` lo actualiza.
  const [count, setCount] = useState<number>(0);

  // Incrementa en 1
  const increment = () => setCount(c => c + 1);

  // Decrementa en 1, pero nunca por debajo de 0.
  // Usamos Math.max para asegurar el límite inferior.
  const decrement = () => setCount(c => Math.max(0, c - 1));

  // Ejemplo de acción de pulsación larga: resetear el contador a 0.
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      {/* Mostramos el valor actual del contador */}
      <Text style={styles.counter}>Contador: {count}</Text>

      <View style={styles.row}>
        {/*
          Pasamos las props al componente `PrimaryButton`:
          - `label`: texto que se muestra
          - `onPress`: función ejecutada en pulsación corta
          - `onLongPress`: (opcional) función para pulsación larga
        */}
        <PrimaryButton
          label="Sumar"
          onPress={increment}
          style={styles.button}
        />

        {/* Aquí añadimos `onLongPress` para resetear el contador si se pulsa largo */}
        <PrimaryButton
          label="Restar"
          onPress={decrement}
          onLongPress={reset}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  counter: { fontSize: 20, marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'center' },
  button: { marginHorizontal: 6 },
  decreaseButton: { backgroundColor: '#FF4D4F' },
});
