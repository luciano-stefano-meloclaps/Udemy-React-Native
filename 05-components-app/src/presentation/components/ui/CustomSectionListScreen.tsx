/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { CustomView } from './CustomView';
import { Card } from './Card';
import { Titles } from './Titles';
import { SubTitle } from './SubTitle';
import { houses } from '../../data/houses';
import { colors, globalStyles } from '../../screens/theme/theme';

const Separator = () => (
  <View style={{ height: 1, backgroundColor: colors.background }} />
);

const ListHeader = () => <Titles text="Personajes" />;

const ListFooter = () => <Titles text={`Secciones: ${houses.length}`} />;

export const CustomSectionListScreen = () => {
  return (
    <CustomView style={globalStyles.globalMargin}>
      <Titles text="Lista de personajes" safe />

      <Card style={{ flex: 1, marginTop: 10 }}>
        <SectionList
          sections={houses}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Text style={{ marginVertical: 2 }}>{item}</Text>
          )}
          renderSectionHeader={({ section }) => (
            <SubTitle text={section.title} backgroundColor={colors.cardBackground} />
          )}
          stickySectionHeadersEnabled
          SectionSeparatorComponent={Separator}
          ListHeaderComponent={ListHeader}
          ListFooterComponent={ListFooter}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      </Card>
    </CustomView>
  );
};
