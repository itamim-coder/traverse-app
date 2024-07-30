import React from "react";
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Link, useRouter } from "expo-router";

import CustomCard from "@/components/ui/CustomCard";
import TVButton from "@/components/common/TVButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUsersQuery } from "@/app/redux/api/usersApi";
import { Avatar } from "react-native-paper";
import Header from "@/components/home/header";
import { useGetLocationQuery } from "@/app/redux/api/locationsApi";
import PopularLocation from "@/components/home/PopularLocation";
import TourPackage from "@/components/home/TourPackage";
import { useGetAvailableTourQuery } from "@/app/redux/api/tourApi";

const hotels = [
  {
    id: 1,
    name: "Hotel Sunshine",
    description:
      "Enjoy your stay at the heart of the city with luxury amenities.",
    image: "https://example.com/hotel-sunshine.jpg",
  },
  {
    id: 2,
    name: "Ocean View Resort",
    description: "A perfect place to relax with a stunning ocean view.",
    image: "https://example.com/ocean-view-resort.jpg",
  },
  {
    id: 3,
    name: "Mountain Retreat",
    description: "Escape to the tranquility of the mountains.",
    image:
      "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcHi24sFxm+TFZ5/yA+MYIRt6NpNOjjaAVLi1UwRhfhOIbLYx6ho8BmHpgS+VGCvTsA==",
  },
];

export default function HomeScreen() {
  const router = useRouter();

  const { data: locationData, isLoading } = useGetLocationQuery(undefined);
  const Locations = locationData?.data.result;
  // console.log(Locations);
  const { data: tourData } = useGetAvailableTourQuery(undefined);
  console.log(tourData);
  const navigateToProfile = () => {
    router.push("/profile");
  };

  return (
    <SafeAreaView className="min-h-screen">
      <Header />
      <ScrollView className="flex-1   p-4">
        <Text className="text-xl font-bold mb-3">Popular Cities</Text>
        <FlatList
          data={Locations}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <PopularLocation item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
        <Text className="text-xl font-bold my-3">Available Tours</Text>
        <FlatList
          data={tourData}
          // horizontal={true}
          // showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <TourPackage item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
        <View className="h-12" />
      </ScrollView>
    </SafeAreaView>
  );
}
