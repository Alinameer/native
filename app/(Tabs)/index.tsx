import { ScrollView } from "react-native";
import TravelCarousel from "@/components/TravelCarousel";
import SpecialOffers from "@/components/SpecialOffers";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <TravelCarousel />
      <SpecialOffers />
    </ScrollView>
  );
}
