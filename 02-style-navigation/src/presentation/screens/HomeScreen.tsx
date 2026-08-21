import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../components/shared/PrimaryButton';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      {/* <Pressable
        style={globalStyles.primaryButton}
        onPress={() => navigation.navigate('Home' as never)}
      >
        <Text style={globalStyles.buttonText}>Go to Home</Text>
      </Pressable>*/}
      <Text>Home Text Button</Text>
      <PrimaryButton
        label="Go to 8"
        onPress={() => navigation.navigate('HomeWorkScreen8' as never)}
      ></PrimaryButton>
      <PrimaryButton
        label="Go to 7"
        onPress={() => navigation.navigate('HomeWorkScreen7' as never)}
      ></PrimaryButton>
      <PrimaryButton
        label="Go to 6"
        onPress={() => navigation.navigate('HomeWorkScreen6' as never)}
      ></PrimaryButton>
      <PrimaryButton
        label="Go to 5"
        onPress={() => navigation.navigate('HomeWorkScreen5' as never)}
      ></PrimaryButton>
      <PrimaryButton
        label="Go to 4"
        onPress={() => navigation.navigate('HomeWorkScreen4' as never)}
      ></PrimaryButton>
      <PrimaryButton
        label="Go to 3"
        onPress={() => navigation.navigate('HomeWorkScreen3' as never)}
      ></PrimaryButton>
      <PrimaryButton
        label="Go to 2"
        onPress={() => navigation.navigate('HomeWorkScreen2' as never)}
      ></PrimaryButton>
      <PrimaryButton
        label="Go to 1"
        onPress={() => navigation.navigate('HomeWorkScreen' as never)}
      ></PrimaryButton>
      <PrimaryButton
        label="Go to Product"
        onPress={() => navigation.navigate('ProductScreen' as never)}
      ></PrimaryButton>
    </View>
  );
};

export default HomeScreen;
