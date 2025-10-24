import React, { useRef, useState } from 'react';
import { View, Image, ScrollView, Pressable } from 'react-native';
import { Text } from 'react-native';

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
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const screenWidth = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(scrollPosition / screenWidth);
    setCurrentIndex(index);
  };

  const scrollToIndex = (index: number) => {
    const scrollView = scrollViewRef.current;
    if (scrollView) {
      scrollView.scrollTo({
        x: index * (scrollView as any)._scrollViewRef?._scrollMetrics?.visibleLength || 0,
        animated: true,
      });
    }
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

  return (
    <View className="w-full h-96">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        decelerationRate="fast"
        className="flex-1"
      >
        {destinations.map((destination) => (
          <View key={destination.id} className="w-screen h-96">
            <Image
              source={{ uri: destination.imageUrl }}
              className="w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute bottom-0 left-0 right-0 bg-black/40 p-6">
              <Text className="text-white text-3xl font-bold">
                {destination.title}
              </Text>
              <Text className="text-white/90 text-lg">
                {destination.location}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Navigation Arrows */}
      <Pressable
        onPress={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-5 bg-black/50 w-10 h-10 rounded-full justify-center items-center"
      >
        <Text className="text-white text-2xl font-bold">‹</Text>
      </Pressable>

      <Pressable
        onPress={goToNext}
        className="absolute right-4 top-1/2 -translate-y-5 bg-black/50 w-10 h-10 rounded-full justify-center items-center"
      >
        <Text className="text-white text-2xl font-bold">›</Text>
      </Pressable>

      {/* Pagination dots */}
      <View className="absolute bottom-2 left-0 right-0 flex-row justify-center gap-2">
        {destinations.map((_, index) => (
          <Pressable
            key={index}
            onPress={() => scrollToIndex(index)}
            className={`h-2 rounded ${index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
          />
        ))}
      </View>
    </View>
  );
}
