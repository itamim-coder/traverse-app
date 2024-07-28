import React from "react";
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router";

import CustomCard from "@/components/ui/CustomCard";
import TVButton from "@/components/common/TVButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUsersQuery } from "@/app/redux/api/usersApi";
import { Avatar } from "react-native-paper";

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
  const { data: userData, isLoading } = useUsersQuery(undefined);
  console.log(userData);
  const navigateToProfile = () => {
    router.push("/profile");
  };

  return (
    <SafeAreaView className="h-full ">
      <View className="bg-orange-300 p-4 h-40">
        <View className="flex-row items-center space-x-4">
          <View>
            <Avatar.Image
              size={54}
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
              }}
            />
          </View>
          <View>
            <Text className="text-xl font-bold">Hello, Imtiaz</Text>
          </View>
        </View>
      </View>
      <View className="flex-row justify-evenly mt-[-40]">
        <TouchableOpacity className="bg-white rounded p-4 flex items-center space-y-2">
          <Image
            source={require("../../../assets/images/hotel.png")}
            className="w-12 h-12"
          />
          <Text className="font-bold ">Hotel</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white rounded p-4 flex items-center space-y-2">
          <Image
            source={require("../../../assets/images/suitcase.png")}
            className="w-12 h-12"
          />
          <Text className="font-bold ">Tour</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="flex-1 bg-gray-100 p-4">
        <Text className="text-3xl font-bold text-center mb-6">Home</Text>
        <View className="mb-6">
          {userData?.map((data) => (
            <Link key={data.id} href={`/(details)/${data.id}`}>
              <CustomCard
                key={data.id}
                name={data.name}
                description={data.phone}
                onViewPress={() => alert(`More about ${hotel.name}`)}
                onBookPress={() => alert(`Booked ${hotel.name}`)}
              />
            </Link>
          ))}
        </View>
        <TVButton mode="contained" onPress={navigateToProfile} className="mt-2">
          Go to Profile
        </TVButton>
      </ScrollView>
    </SafeAreaView>
  );
}
