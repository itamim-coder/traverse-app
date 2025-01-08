import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StatusBar,
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
import { Image } from "expo-image";

export default function HomeScreen() {
  const router = useRouter();
  const { data: locationData, isLoading } = useGetLocationQuery(undefined);
  const [isDelayedLoading, setIsDelayedLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDelayedLoading(isLoading);
    }, 2000); // 2-second delay

    // Clear timeout if the component unmounts or if loading state changes
    return () => clearTimeout(timeoutId);
  }, [isLoading]);

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
          renderItem={({ item, index }) => (
            <PopularLocation
              item={item}
              index={index}
              key={index}
              length={Locations.length}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <Text className="text-xl font-bold my-3">Available Tours</Text>
        <FlatList
          data={isDelayedLoading ? Array.from({ length: 3 }) : tourData}
          // horizontal={true}
          // showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TourPackage item={item} isLoading={isDelayedLoading} />
          )}
          keyExtractor={(item, index) =>
            isDelayedLoading ? `skeleton-${index}` : item.id.toString()
          }
        />
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
}
