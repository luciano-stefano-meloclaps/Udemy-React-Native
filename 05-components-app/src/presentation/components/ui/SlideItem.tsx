/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { colors, globalStyles } from '../../screens/theme/theme';
import type { Slide } from '../../data/slides';

interface Props {
  item: Slide;
}

export const SlideItem = ({ item: { title, img, desc } }: Props) => {
  // Cada item ocupa el ancho completo de la pantalla, asi el FlatList
  // horizontal + pagingEnabled hace que quede "una slide por pantalla".
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
        width: width,
      }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />

      <Text style={[globalStyles.title, { color: colors.primary }]}>
        {title}
      </Text>
      <Text style={[globalStyles.subTitle, { color: colors.text }]}>
        {desc}
      </Text>
    </View>
  );
};
