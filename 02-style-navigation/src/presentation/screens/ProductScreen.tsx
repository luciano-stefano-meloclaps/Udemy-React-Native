import { FlatList, Text, View } from 'react-native';
import PrimaryButton from '../components/shared/PrimaryButton';
import { globalStyles } from '../theme/theme';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { type NavigationProp } from '@react-navigation/native';
import { type RootStackParams } from '../routes/StackNavigator';

const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
  { id: 4, name: 'Producto 4' },
  { id: 5, name: 'Producto 5' },
  { id: 6, name: 'Producto 6' },
];

export const ProductScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const params = useRoute<RouteProp<RootStackParams, 'ProductScreen'>>().params;

  return (
    <View style={globalStyles.container}>
      <Text>Productos</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() =>
              navigation.navigate('ProductDetailsScreen', {
                id: item.id,
                name: item.name,
              })
            }
            label={item.name}
          />
        )}
      />

      <Text style={{ marginBottom: 20, fontSize: 30, textAlign: 'center' }}>
        Ajustes
      </Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Ajustes')}
        label="Ajustes"
      />
    </View>
  );
};
ProductScreen;
