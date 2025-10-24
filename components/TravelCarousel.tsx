import React, { useRef, useState, useEffect } from 'react';
import { View, Image, Dimensions, ScrollView, Platform, Pressable } from 'react-native';
import { Text } from 'react-native';

const getWidth = () => {
  if (Platform.OS === 'web') {
    return typeof window !== 'undefined' ? window.innerWidth : 375;
  }
  return Dimensions.get('window').width;
};

interface TravelDestination {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
}

const destinations: TravelDestination[] = [
  {
    id: 1,
    title: 'Santorini',
    location: 'Greece',
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
  },
  {
    id: 2,
    title: 'Bali',
    location: 'Indonesia',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  },
  {
    id: 3,
    title: 'Paris',
    location: 'France',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
  },
  {
    id: 4,
    title: 'Maldives',
    location: 'Indian Ocean',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  },
  {
    id: 5,
    title: 'Tokyo',
    location: 'Japan',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
  },
  {
    id: 6,
    title: 'Iceland',
    location: 'Nordic',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
];

export default function TravelCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(getWidth());
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (Platform.OS === 'web') {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentIndex(index);
  };

  const scrollToIndex = (index: number) => {
    scrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : destinations.length - 1;
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex < destinations.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  const containerHeight = Platform.OS === 'web' ? 500 : 384;
  const imageHeight = Platform.OS === 'web' ? 500 : 384;

  return (
    <View style={{ height: containerHeight, width: '100%' }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        snapToInterval={width}
        decelerationRate="fast"
        style={{ flex: 1 }}
      >
        {destinations.map((destination) => (
          <View key={destination.id} style={{ width, height: imageHeight }}>
            <Image
              source={{ uri: destination.imageUrl }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.4)',
                padding: 24
              }}
            >
              <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
                {destination.title}
              </Text>
              <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 18 }}>
                {destination.location}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Navigation Arrows */}
      <Pressable
        onPress={goToPrevious}
        style={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: [{ translateY: -20 }],
          backgroundColor: 'rgba(0,0,0,0.5)',
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>‹</Text>
      </Pressable>

      <Pressable
        onPress={goToNext}
        style={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: [{ translateY: -20 }],
          backgroundColor: 'rgba(0,0,0,0.5)',
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>›</Text>
      </Pressable>

      {/* Pagination dots */}
      <View
        style={{
          position: 'absolute',
          bottom: 8,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 8
        }}
      >
        {destinations.map((_, index) => (
          <Pressable
            key={index}
            onPress={() => scrollToIndex(index)}
            style={{
              height: 8,
              width: index === currentIndex ? 32 : 8,
              borderRadius: 4,
              backgroundColor: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
            }}
          />
        ))}
      </View>
    </View>
  );
}
