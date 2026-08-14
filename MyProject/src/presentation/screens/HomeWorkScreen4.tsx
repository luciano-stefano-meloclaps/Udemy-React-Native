import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HomeWorkScreen4 = () => {
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
    justifyContent: 'space-between',
  },
  box: {
    display: 'flex',
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    backgroundColor: 'red',
    flex: 1,
  },
  purpleBox: {
    width: 100,
    maxHeight: 100,
    alignSelf: 'flex-end',
    display: 'flex',
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    width: 100,
    maxHeight: 100,
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: '#F0A23B',
  },
  blueBox: {
    maxHeight: 100,
    width: 100,
    display: 'flex',
    backgroundColor: '#21d7f3',
    alignSelf: 'flex-start',
  },
});
