import React, { useState } from 'react';
import { CustomView } from './CustomView';
import { Card } from '../../components/ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <CustomView style={{ marginTop: 20 }}>
      <Card>
        <CustomSwitch
          isOn={isEnabled}
          text="Switch 1"
          onChange={value => toggleSwitch()}
        />
      </Card>
    </CustomView>
  );
};
