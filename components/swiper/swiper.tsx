import React, { useRef, useState } from 'react';
import { ScrollView, View, Dimensions, StyleSheet, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

const { width } = Dimensions.get('window');

interface SwiperProps {
  children: React.ReactNode[];
  showIndicators?: boolean;
   style?: object;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const CustomSwiper: React.FC<SwiperProps> = ({ children, showIndicators = true, style }) => {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  return (
    <View style={[styles.container, style]}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollRef}
        style={styles.swiperContainer}
      >
        {children.map((child, index) => (
          <View key={index} style={styles.slide}>
            {child}
          </View>
        ))}
      </ScrollView>
      
      {showIndicators && (
        <View style={styles.indicatorContainer}>
          {children.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentIndex && styles.activeIndicator
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomSwiper;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#aaa',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#fff',
  },
    swiperContainer: {
    width: screenWidth,
    height: screenHeight, // Swiper takes full screen height
  },
  slide: {
    width: screenWidth,
    height: screenHeight, // Each slide takes full screen height
  },
});
