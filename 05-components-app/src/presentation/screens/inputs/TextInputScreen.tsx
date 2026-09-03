/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { globalStyles } from '../theme/theme';
import { Titles } from '../../components/ui/Titles';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableWithoutFeedback } from 'react-native';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <CustomView style={globalStyles.globalMargin}>
            <Titles text="Text Inputs" safe={true} />
            <Card>
              <TextInput
                style={globalStyles.input}
                placeholder="Nombre"
                autoCapitalize="words"
                onChangeText={value => setForm({ ...form, name: value })}
              />

              <TextInput
                style={globalStyles.input}
                placeholder="Correo electrónico"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={value => setForm({ ...form, email: value })}
              />

              <TextInput
                style={globalStyles.input}
                placeholder="Teléfono"
                keyboardType="phone-pad"
                onChangeText={value => setForm({ ...form, phone: value })}
              />
            </Card>

            <View style={{ height: 10 }} />

            <Card>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
            </Card>
            <View style={{ height: 10 }} />
            <Card>
              <TextInput
                style={globalStyles.input}
                placeholder="Nombre"
                keyboardType="default"
                onChangeText={value => setForm({ ...form, name: value })}
              />
            </Card>
            <View style={{ height: 20 }} />
          </CustomView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
