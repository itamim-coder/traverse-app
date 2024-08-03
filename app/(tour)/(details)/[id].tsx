import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "pinar";
import { useSingleTourQuery } from "@/app/redux/api/tourApi";
import { Image } from "react-native";
const TourDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: tourData, isLoading } = useSingleTourQuery(id);
  console.log(tourData);
  console.log("tou", tourData);
  return (
    <SafeAreaView className="flex-1">
      <View className="w-full h-1/3">
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
          {tourData?.images?.map((img) => (
            <Image
              className="w-full h-full"
              source={{ uri: img }}
              key={img.name}
              resizeMode="cover"
            />
          ))}
        </Carousel>
      </View>
      <Text>{tourData?.id}</Text>
      <Text>{tourData?.title}</Text>
    </SafeAreaView>
  );
};

export default TourDetails;
