import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CalculatorButton } from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}></View>
      <Text style={styles.mainResult}>1500</Text>
      <Text style={styles.subResult}>15</Text>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton colorTextBlack label="C" color={colors.lightGray} />
        <CalculatorButton colorTextBlack label="+/-" color={colors.lightGray} />
        <CalculatorButton colorTextBlack label="Del" color={colors.lightGray} />
        <CalculatorButton label="/" color={colors.orange} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton label="7" color={colors.darkGray} />
        <CalculatorButton label="8" color={colors.darkGray} />
        <CalculatorButton label="9" color={colors.darkGray} />
        <CalculatorButton label="÷" color={colors.orange} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton label="4" color={colors.darkGray} />
        <CalculatorButton label="5" color={colors.darkGray} />
        <CalculatorButton label="9" color={colors.darkGray} />
        <CalculatorButton label="-" color={colors.orange} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton label="1" color={colors.darkGray} />
        <CalculatorButton label="2" color={colors.darkGray} />
        <CalculatorButton label="3" color={colors.darkGray} />
        <CalculatorButton label="+" color={colors.orange} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton
          flexGrow={10}
          /*width={1}*/
          label="0"
          color={colors.darkGray}
        />
        <CalculatorButton label="." color={colors.darkGray} />
        <CalculatorButton label="=" color={colors.darkGray} />
      </View>
    </View>
  );
};
