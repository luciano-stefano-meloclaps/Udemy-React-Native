import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { useCalculator } from '../src/presentation/hooks/useCalculator';

const HookHarness = ({
  onUpdate,
}: {
  onUpdate: (number: string, buildNumber: (value: string) => void) => void;
}) => {
  const { number, buildNumber } = useCalculator();
  onUpdate(number, buildNumber);
  return null;
};

describe('useCalculator', () => {
  it('replaces the initial zero with the first non-zero digit', () => {
    let currentNumber = '';
    let buildNumber = (_value: string) => {};
    let renderer: ReactTestRenderer.ReactTestRenderer;

    ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(
        <HookHarness
          onUpdate={(number, build) => {
            currentNumber = number;
            buildNumber = build;
          }}
        />,
      );
    });

    ReactTestRenderer.act(() => buildNumber('7'));

    expect(currentNumber).toBe('7');
    ReactTestRenderer.act(() => renderer!.unmount());
  });

  it('appends following digits', () => {
    let currentNumber = '';
    let buildNumber = (_value: string) => {};
    let renderer: ReactTestRenderer.ReactTestRenderer;

    ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(
        <HookHarness
          onUpdate={(number, build) => {
            currentNumber = number;
            buildNumber = build;
          }}
        />,
      );
    });

    ReactTestRenderer.act(() => buildNumber('7'));
    ReactTestRenderer.act(() => buildNumber('5'));

    expect(currentNumber).toBe('75');
    ReactTestRenderer.act(() => renderer!.unmount());
  });
});
