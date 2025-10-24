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
      style={{
        backgroundColor: 'white',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        marginBottom: 16,
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
      />
      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1a1a1a', flex: 1 }}>
            {title}
          </Text>
        </View>
        <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
          {location}
        </Text>
        <Text style={{ fontSize: 14, color: '#666', marginBottom: 12 }}>
          {days}
        </Text>
        <Text style={{ fontSize: 14, color: '#444', lineHeight: 20 }}>
          {description}
        </Text>
      </View>
    </Pressable>
  );
}
