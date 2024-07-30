import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import CustomCard from "../ui/CustomCard";

const TourPackage = ({ item }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: `(tour)/(details)/${item?.id}`,
      params: item,
    });
  };

  return (
    <View className="rounded bg-white flex-1 p-2 mb-2">
      <TouchableOpacity className="flex-1" onPress={handlePress}>
        <Image
          className="w-full h-40"
          source={{ uri: `${item?.images[0]}` }}
          resizeMode="cover"
        />
        <View className="mt-3">
          <Text className="text-md font-semibold">{item?.title}</Text>
          <Text className="text-xs">Price starts from (per person)</Text>
          <Text className="text-md font-semibold text-orange-600">
            BDT {item?.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TourPackage;
