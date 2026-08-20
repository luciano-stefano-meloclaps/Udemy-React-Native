import { useState, useRef, useEffect } from 'react';

// Operadores disponibles para la próxima etapa de evaluación.
enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  // Conserva el operando mostrado al seleccionar una operación.
  const [previousNumber, setPreviousNumber] = useState('0');

  const [formula, setFormula] = useState('');

  // Guarda la operación elegida sin provocar un render adicional.
  const lastOperation = useRef<Operator | undefined>(undefined);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [formula, number]);

  const cleanNumber = () => {
    setNumber('0');
    setPreviousNumber('0');

    lastOperation.current = undefined;
    setFormula('');
  };

  const deleteOperation = () => {
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //Punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      // Evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      //valuar si es diferente de cero, no hay punto, y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      //Evitar 000.00
      if (numberString === '0' && number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }
    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  // Selecciona la división y prepara la entrada del siguiente número.
  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  // Selecciona la multiplicación y prepara la entrada del siguiente número.
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  // Selecciona la resta y prepara la entrada del siguiente número.
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  // Selecciona la suma y prepara la entrada del siguiente número.
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setNumber(result.toString());
    setPreviousNumber('0');
    setFormula(result.toString());

    lastOperation.current = undefined;
  };

  const calculateSubResult = (): number => {
    const [fisrtValue, operation, seconValue] = formula.split(' ');

    const num1 = Number(fisrtValue);
    const num2 = Number(seconValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('Operación no válida');
    }
  };

  return {
    //Properties
    number,
    previousNumber,
    formula,

    //Methods
    buildNumber,
    cleanNumber,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
};
