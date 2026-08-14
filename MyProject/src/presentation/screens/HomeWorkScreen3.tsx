import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HomeWorkScreen3 = () => {
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
    backgroundColor: '#3e66b0',
    justifyContent: 'center',
  },
  box: {
    display: 'flex',
    borderColor: 'white',
    borderWidth: 10,
  },
  purpleBox: {
    alignSelf: 'flex-end',
    width: 100,
    height: 100,
    display: 'flex',
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    width: 100,
    height: 100,
    display: 'flex',
    backgroundColor: '#F0A23B',
  },
  blueBox: {
    height: 100,
    width: 100,
    backgroundColor: '#21d7f3',
    alignSelf: 'center',
  },
});
