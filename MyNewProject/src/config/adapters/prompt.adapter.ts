import React from 'react';
import { Alert } from 'react-native';

export const showPromptAlert = () => {
  prompt(
    Alert.prompt(
      'Enter your email',
      'Please enter your email address:',
      valor => {
        console.log('Email entered:', valor);
      },
    ),
  );
};
