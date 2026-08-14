import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HomeWorkScreen = () => {
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
    backgroundColor: '#c1bd78',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    borderColor: '#f7f7f7',
    borderWidth: 5,
    display: 'flex',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    display: 'flex',
    backgroundColor: '#F0A23B',
    flexGrow: 1,
  },
  blueBox: {
    backgroundColor: '#2196F3',
  },
});
