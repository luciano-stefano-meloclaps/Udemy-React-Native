import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HomeWorkScreen5 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#253759',
    flexDirection: 'row',
  },
  box: {
    display: 'flex',
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: 'red',
    flex: 1,
  },
  purpleBox: {
    display: 'flex',
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    display: 'flex',
    backgroundColor: '#F0A23B',
    marginHorizontal: 50,
  },
  blueBox: {
    display: 'flex',
    backgroundColor: '#21d7f3',
  },
});
