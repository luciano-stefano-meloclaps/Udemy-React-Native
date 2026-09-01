import React from 'react';
import { CustomView } from './CustomView';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const SwitchScreen = () => {
  return (
    <CustomView style={{ marginTop: 20 }}>
      <Card>
        <Button text="Switch 1" onPress={() => {}} />
      </Card>
    </CustomView>
  );
};
