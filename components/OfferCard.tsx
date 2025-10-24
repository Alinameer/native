import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { Text } from 'react-native';

interface OfferCardProps {
  title: string;
  location: string;
  days: string;
  description: string;
  imageUrl: string;
  onPress?: () => void;
}

export default function OfferCard({
  title,
  location,
  days,
  description,
  imageUrl,
  onPress,
}: OfferCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-52"
        resizeMode="cover"
      />
      <View className="p-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text className="text-xl font-bold text-gray-900 flex-1">
            {title}
          </Text>
        </View>
        <Text className="text-sm text-gray-600 mb-1">
          {location}
        </Text>
        <Text className="text-sm text-gray-600 mb-3">
          {days}
        </Text>
        <Text className="text-sm text-gray-700 leading-5">
          {description}
        </Text>
      </View>
    </Pressable>
  );
}
