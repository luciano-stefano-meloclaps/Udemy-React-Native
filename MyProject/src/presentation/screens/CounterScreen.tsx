import React from 'react';
import { Pressable, Text, View } from 'react-native';

export const CounterScreen = () => {
  const [count, setCount] = React.useState(5);

  return (
    <View style={{ borderStyle: 'solid', borderWidth: 1, padding: 80 }}>
      <Text style={{ fontSize: 20 }}>Counter: {count}</Text>
      <Pressable onPress={() => setCount(count + 1)}>
        <Text style={{ fontSize: 20 }}>Increment</Text>
      </Pressable>
      <Pressable onPress={() => setCount(count - 1)}>
        <Text style={{ fontSize: 20 }}>Decrement</Text>
      </Pressable>
    </View>
  );
};
