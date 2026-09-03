/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { CustomView } from './CustomView';
import { Card } from './Card';
import { Titles } from './Titles';
import { colors, globalStyles } from '../../screens/theme/theme';

const PAGE_SIZE = 10;

const ListHeader = () => <Titles text="Infinite Scroll" safe />;

const ListFooter = ({ isLoading }: { isLoading: boolean }) =>
  isLoading ? (
    <ActivityIndicator
      style={{ marginVertical: 10 }}
      color={colors.primary}
      size={30}
    />
  ) : null;

export const InfiniteScrollScreen = () => {
  const [items, setItems] = useState(
    Array.from({ length: PAGE_SIZE }, (_, i) => i + 1),
  );
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setItems(current => [
        ...current,
        ...Array.from(
          { length: PAGE_SIZE },
          (_, i) => current.length + i + 1,
        ),
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <FlatList
        data={items}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 10 }}>
            <Text style={{ color: colors.text }}>Item numero {item}</Text>
          </Card>
        )}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={<ListFooter isLoading={isLoading} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
    </CustomView>
  );
};
