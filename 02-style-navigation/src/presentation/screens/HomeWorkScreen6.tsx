import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HomeWorkScreen6 = () => {
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    borderColor: 'white',
    borderWidth: 10,
    width: 100,
    height: 100,
  },
  purpleBox: {
    display: 'flex',
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    display: 'flex',
    backgroundColor: '#F0A23B',
  },
  blueBox: {
    display: 'flex',
    backgroundColor: '#21d7f3',
  },
});
