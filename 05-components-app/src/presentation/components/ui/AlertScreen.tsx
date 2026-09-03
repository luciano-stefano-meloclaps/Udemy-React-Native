/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Alert, View } from 'react-native';
import { CustomView } from './CustomView';
import { globalStyles } from '../../screens/theme/theme';
import { Titles } from './Titles';
import { Button } from './Button';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const showEmailAlert = () => {
    Alert.prompt(
      'Enter your email',
      'Please enter your email address:',
      valor => {
        console.log('Email entered:', valor);
      },
    );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Titles safe={true} text="Alerts" />

      <View style={{ marginTop: 15 }}></View>
      <Button text="Show Alert 1" onPress={showEmailAlert} />
      <View style={{ marginTop: 15 }}></View>
      <Button text="Show Alert 2" onPress={createTwoButtonAlert} />
      <View style={{ marginTop: 15 }}></View>
      <Button text="Show Alert 3" onPress={createThreeButtonAlert} />
    </CustomView>
  );
};
