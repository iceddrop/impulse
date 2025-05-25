// components/CustomerSwiper.tsx

import React from 'react';
import {
  FlatList,
  View,
  Dimensions,
  StyleSheet,
  ViewStyle,
  ListRenderItem,
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 230;
const SPACING = 12;

interface CustomSliderProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  cardStyle?: ViewStyle;
}

const CustomSlider = <T,>({ data, renderItem, cardStyle }: CustomSliderProps<T>) => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + SPACING}
      decelerationRate="fast"
      bounces={false}
      contentContainerStyle={{ paddingHorizontal: SPACING }}
      renderItem={({ item, index }) => (
        <View style={[styles.cardContainer, cardStyle]}>
          {renderItem({ item, index, separators: { highlight: () => {}, unhighlight: () => {}, updateProps: () => {} } })}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    marginRight: SPACING,
  },
});

export default CustomSlider;
