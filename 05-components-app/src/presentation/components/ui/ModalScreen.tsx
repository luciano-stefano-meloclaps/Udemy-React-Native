/* eslint-disable react-native/no-inline-styles */
import { Modal, Platform, Text, View } from 'react-native';
import { CustomView } from './CustomView';
import { Titles } from './Titles';
import { Button } from './Button';
import { useState } from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView margin>
      <Titles text="Modal" safe />

      <Button text="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Titles text="Modal Content" safe />
          </View>

          <View style={{ flex: 1 }} />

          <Button
            text="Cerrar Modal"
            onPress={() => setIsVisible(false)}
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
