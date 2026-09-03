/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../screens/theme/theme';
import { slides } from '../../data/slides';
import { SlideItem } from './SlideItem';
import { Button } from './Button';

// SlidesScreen: le pasa el arreglo `slides` (definido en data/slides.ts)
// al FlatList mediante la prop `data`. Por cada elemento, `renderItem`
// llama a SlideItem pasandole ese elemento como prop `item`
// (SlideItem lo recibe y desestructura { title, img, desc } para pintarlo).
// `horizontal` + `pagingEnabled` hacen que el scroll se sienta como
// un carrusel, pasando de slide en slide.
export const SlidesScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  // Se ejecuta en cada scroll del FlatList: calcula, segun cuanto se
  // desplazo (contentOffset.x) contra el ancho de cada pagina
  // (layoutMeasurement.width), en que slide estamos parados.
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };

  // Mueve el FlatList a un indice puntual usando la referencia (flatListRef).
  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        // scrollEnabled={false}
        onScroll={onScroll}
      />

      {currentSlideIndex === slides.length - 1 ? (
        <Button
          text="Finalizar"
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
        />
      ) : (
        <Button
          text="Siguiente"
          style={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
        />
      )}
    </View>
  );
};
