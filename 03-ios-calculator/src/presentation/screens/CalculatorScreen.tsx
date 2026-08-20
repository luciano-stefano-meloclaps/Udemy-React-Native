import React from 'react';
import { Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    buildNumber,
    previousNumber,
    cleanNumber,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}></View>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
        {number}
      </Text>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
        {previousNumber !== '0' ? previousNumber : ''}
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton
          onPress={cleanNumber}
          colorTextBlack
          label="C"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={toggleSign}
          colorTextBlack
          label="+/-"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={deleteOperation}
          colorTextBlack
          label="Del"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={divideOperation}
          label="÷"
          color={colors.orange}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton
          onPress={() => buildNumber('7')}
          label="7"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('8')}
          label="8"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('9')}
          label="9"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={multiplyOperation}
          label="x"
          color={colors.orange}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton
          onPress={() => buildNumber('4')}
          label="4"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('5')}
          label="5"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('6')}
          label="6"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={subtractOperation}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton
          onPress={() => buildNumber('1')}
          label="1"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('2')}
          label="2"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('3')}
          label="3"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={addOperation}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton
          flexGrow={10}
          onPress={() => buildNumber('0')}
          /*width={1}*/
          label="0"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('.')}
          label="."
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('=')}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
