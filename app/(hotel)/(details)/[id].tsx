import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import {
  Link,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "pinar";
import { useSingleTourQuery } from "@/app/redux/api/tourApi";
import { AntDesign, Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";
import Accordion from "@/components/common/TVAccordion";
import { useHotelDetailsQuery } from "@/app/redux/api/hotelApi";

const HotelDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: hotelData, isLoading: loading } = useHotelDetailsQuery(id);

  console.log(hotelData, "hotel Data");
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const router = useRouter();
  console.log("Rooms Data:", hotelData?.rooms);
  const arrayData = ["Apple", "Banana", "Orange"];
  const handlePress = (item) => {
    if (!loading) {
      router.push({
        pathname: `(rooms)/${item.id}`,
        params: { items: JSON.stringify(item.rooms) },
      });
    }
  };
  return (
    <SafeAreaView className="flex-1 ">
      <ScrollView className="flex-1">
        <View className="w-full h-60">
          <TouchableOpacity
            className="h-10 m-4 w-10 z-10 absolute bg-orange-400 justify-center items-center rounded-full"
            onPress={handleGoBack}
          >
            <Ionicons name={"arrow-back-outline"} color={"white"} size={25} />
          </TouchableOpacity>

          <Carousel
            autoplay={true}
            autoplayInterval={2000}
            loop={true}
            showsControls={false}
            dotStyle={{
              width: 30,
              height: 3,
              backgroundColor: "silver",
              marginHorizontal: 3,
              borderRadius: 3,
            }}
            activeDotStyle={{
              width: 30,
              height: 3,
              marginHorizontal: 3,
              borderRadius: 3,
              backgroundColor: "white",
            }}
          >
            {hotelData?.photos?.map((img, index) => (
              <Image
                className="w-full h-full"
                source={{ uri: img }}
                key={index}
                resizeMode="cover"
              />
            ))}
          </Carousel>
        </View>

        <View className="p-4">
          <View className="flex-row">
            {Array.from({ length: hotelData?.average_rating }, (_, index) => (
              //   <star key={index} className="text-yellow-500" />
              <AntDesign
                name="star"
                size={24}
                color="orange"
                className="text-yellow-500"
              />
            ))}
            {Array.from(
              { length: 5 - hotelData?.average_rating },
              (_, index) => (
                <AntDesign name="staro" size={24} color="orange" />
              )
            )}
          </View>
          <Text className="text-xl font-semibold text-orange-600">
            {hotelData?.name}
          </Text>

          <View className="flex-row space-x-2 my-2 items-center">
            <Entypo name="location-pin" size={24} color="orange" />
            <Text className="text-md font-semibold">{hotelData?.address}</Text>
          </View>
          <View className="space-y-2">
            <Text className="text-xl font-semibold text-orange-600">
              Overview
            </Text>
            <Text>
              Tour and travel refer to the activities related to planning,
              organizing, and experiencing trips to various destinations for
              leisure, exploration, adventure, or relaxation.Choose your
              destination based on your interests and preferences, whether it's
              a cultural experience, a natural adventure, historical
              exploration, or a beach vacation. Book suitable accommodation,
              which can range from hotels, resorts, hostels, vacation rentals,
              or even camping depending on your travel style and
              destination.Arrange transportation to and within your destination.
              This can include flights, trains, buses, rental cars, or even
              cruises.
            </Text>
          </View>

          <View className="my-4"></View>
        </View>
      </ScrollView>
      <View className=" rounded-lg m-3 bg-gray-800/50">
        <View className="flex-row items-center justify-between p-3">
          <Text className="text-center font-semibold text-white text-lg">
            Starts From ${hotelData?.cheapest_price}
          </Text>
          <TouchableOpacity
            onPress={() => handlePress(hotelData)}
            className="text-center rounded bg-orange-500 p-3 font-semibold text-white text-lg"
          >
            <Text>See All Rooms</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HotelDetails;
