import React, {useState, useRef} from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, Animated } from 'react-native';
import NextButton from './NextButton';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import slides from './slides';

const OnboardingScreen = () => {

  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef(null);


  return (
    <View style={styles.container} >
      <View style={{ flex: 3 }}>
      <FlatList 
        data={slides} 
        renderItem={({item}) => <OnboardingItem item={item} />} 
        bounces={false} 
        horizontal 
        showsHorizontalScrollIndicator={false}
        pagingEnabled 
        keyExtractor={(item) => item.id }
        onScroll = {Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef} />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})

