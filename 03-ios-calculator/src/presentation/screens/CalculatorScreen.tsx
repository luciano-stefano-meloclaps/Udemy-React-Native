import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  /*const { number, buildNumber } = useCalculator();*/

  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}></View>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
        {/*number*/}
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton
          onPress={() => console.log('C')}
          colorTextBlack
          label="C"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('+/-')}
          colorTextBlack
          label="+/-"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('Del')}
          colorTextBlack
          label="Del"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('/')}
          label="/"
          color={colors.orange}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton
          onPress={() => console.log('7')}
          label="7"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('8')}
          label="8"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('9')}
          label="9"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('÷')}
          label="÷"
          color={colors.orange}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton
          onPress={() => console.log('4')}
          label="4"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('5')}
          label="5"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('6')}
          label="6"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('-')}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton
          onPress={() => console.log('1')}
          label="1"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('2')}
          label="2"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('3')}
          label="3"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('+')}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CalculatorButton
          flexGrow={10}
          onPress={() => console.log('0')}
          /*width={1}*/
          label="0"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('.')}
          label="."
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('=')}
          label="="
          color={colors.darkGray}
        />
      </View>
    </View>
  );
};
