import React, { useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../screens/theme/theme';
import { Titles } from './Titles';

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'orange', 'green']}
          onRefresh={onRefresh}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}
    >
      <Titles text="Pull to refresh" safe />
    </ScrollView>
  );
};
