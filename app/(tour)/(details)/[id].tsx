import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "pinar";
import { useSingleTourQuery } from "@/app/redux/api/tourApi";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import Accordion from "@/components/common/TVAccordion";

const tourTimeline = [
  {
    day: 1,
    name: "Arrival and City Tour",
    activities: [
      {
        time: "09:00",
        activity: "Departure from Origin City",
      },
      {
        time: "12:00",
        activity: "Arrival at Destination City",
      },
      {
        time: "14:00",
        activity: "Check-in at Hotel",
      },
      {
        time: "18:00",
        activity: "Guided City Tour",
      },
      {
        time: "20:00",
        activity: "Dinner at Local Restaurant",
      },
    ],
  },
  {
    day: 2,
    name: "Historical Sites and Cultural Experience",
    activities: [
      {
        time: "09:00",
        activity: "Breakfast at Hotel",
      },
      {
        time: "10:00",
        activity: "Visit to Historical Site",
      },
      {
        time: "13:00",
        activity: "Lunch at Traditional Eatery",
      },
      {
        time: "15:00",
        activity: "Shopping at Local Market",
      },
      {
        time: "19:00",
        activity: "Cultural Performance",
      },
      {
        time: "21:00",
        activity: "Free Time",
      },
    ],
  },
  {
    day: 3,
    name: "Adventure and Nature Exploration",
    activities: [
      {
        time: "08:00",
        activity: "Breakfast at Hotel",
      },
      {
        time: "09:00",
        activity: "Adventure Activity (Optional)",
      },
      {
        time: "12:00",
        activity: "Lunch",
      },
      {
        time: "14:00",
        activity: "Explore Nature Reserve",
      },
      {
        time: "18:00",
        activity: "Farewell Dinner",
      },
    ],
  },
];
const TourDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: tourData, isLoading } = useSingleTourQuery(id);
  const navigation = useNavigation();
  console.log(tourData);

  const handleGoBack = () => {
    navigation.goBack();
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
            {tourData?.images?.map((img, index) => (
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
          <Text className="text-2xl font-semibold text-orange-600">
            {tourData?.title}
          </Text>
          <View className="flex-row space-x-2 my-2 items-center">
            <FontAwesome6 name="calendar-days" size={24} color="black" />
            <Text>{tourData?.duration} days</Text>
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
          <View>
            {tourTimeline.map((data, index) => (
              <Accordion key={index} data={data} />
            ))}
          </View>
          <View className="my-4"></View>
        </View>
      </ScrollView>
      <View className=" rounded-md">
        <TouchableOpacity className="bg-orange-400 p-4">
          <Text className="text-center font-semibold text-white text-lg">
            Book
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TourDetails;
