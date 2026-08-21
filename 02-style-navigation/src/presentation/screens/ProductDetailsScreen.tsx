import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../routes/StackNavigator';

export const ProductDetailsScreen = () => {
  const params =
    useRoute<RouteProp<RootStackParams, 'ProductDetailsScreen'>>().params;
  const { id, name } = params;
  return (
    <View>
      <Text style={{ fontSize: 20, marginTop: 30, textAlign: 'center' }}>
        {`Product ID: ${id}, Product Name: ${name}`}
      </Text>
      <Text>{/*   {id} - {name}*/}</Text>
    </View>
  );
};
