import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Skeleton } from "moti/skeleton";

import Animated, { FadeIn, Layout } from "react-native-reanimated";

const TourPackage = ({ item, isLoading }) => {
  const router = useRouter();

  const handlePress = () => {
    if (!isLoading) {
      router.push({
        pathname: `(tour)/(details)/${item?.id}`,
        params: { item: JSON.stringify(item) },
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`rounded bg-white flex-1 p-2 mb-2 ${
        isLoading && "opacity-50"
      }`}
      disabled={isLoading}
    >
      <Skeleton.Group show={isLoading}>
        <Skeleton colorMode="light" radius={"square"} backgroundColor="#D4D4D4">
          <Animated.View
            entering={FadeIn.duration(1500)}
            className="w-full h-40"
          >
            <ImageBackground
              className="w-full h-full rounded-md"
              source={{ uri: item?.images?.[0] }}
              resizeMode="cover"
            >
              {!isLoading && (
                <LinearGradient
                  colors={["#16222A", "transparent", "#3A6073"]}
                  start={[0, 1]}
                  end={[1, 0]}
                  className="w-full h-full rounded"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    borderRadius: 10,
                  }}
                >
                  <View className="p-3 flex-1 justify-end">
                    <Text className="text-white text-lg font-bold">
                      {item?.title}
                    </Text>
                  </View>
                </LinearGradient>
              )}
            </ImageBackground>
          </Animated.View>
        </Skeleton>

        <Animated.View entering={FadeIn.duration(1500)} className="mt-3">
          <Skeleton show={isLoading} colorMode="light">
            <Text className="text-md font-semibold">
              {item?.title || "Loading title..."}
            </Text>
          </Skeleton>

          <Skeleton show={isLoading} colorMode="light">
            <Text className="text-xs">
              {!isLoading
                ? "Price starts from (per person)"
                : "Loading price..."}
            </Text>
          </Skeleton>

          <Skeleton show={isLoading} colorMode="light">
            <Text className="text-md font-semibold text-orange-600">
              {!isLoading ? `BDT ${item?.price}` : "Loading price..."}
            </Text>
          </Skeleton>
        </Animated.View>
      </Skeleton.Group>
    </TouchableOpacity>
  );
};

export default TourPackage;
