import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import OfferCard from './OfferCard';

interface Offer {
  id: number;
  title: string;
  location: string;
  days: string;
  description: string;
  imageUrl: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: 'Trabzon & Istanbul',
    location: 'Turkey',
    days: '8 days - 7 nights',
    description: 'This exclusive offer was carefully designed for your most amazing and wonderful vacation.',
    imageUrl: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
  },
  {
    id: 2,
    title: 'Maldives Paradise',
    location: 'Maldives',
    days: '5 days - 4 nights',
    description: 'Experience luxury overwater villas and pristine beaches in this tropical paradise.',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  },
  {
    id: 3,
    title: 'Dubai Explorer',
    location: 'UAE',
    days: '6 days - 5 nights',
    description: 'Discover the modern marvels and traditional souks of this magnificent desert city.',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  },
  {
    id: 4,
    title: 'Bali Adventure',
    location: 'Indonesia',
    days: '7 days - 6 nights',
    description: 'Immerse yourself in Balinese culture, temples, and stunning rice terraces.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  },
];

export default function SpecialOffers() {
  return (
    <View style={{ padding: 20, backgroundColor: '#f9fafb' }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 8 }}>
          Special Offers
        </Text>
        <Text style={{ fontSize: 16, color: '#666', lineHeight: 24 }}>
          Explore the best offers we have and greatest experiences for your next adventure
        </Text>
      </View>

      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          title={offer.title}
          location={offer.location}
          days={offer.days}
          description={offer.description}
          imageUrl={offer.imageUrl}
          onPress={() => console.log(`Offer ${offer.id} pressed`)}
        />
      ))}
    </View>
  );
}
