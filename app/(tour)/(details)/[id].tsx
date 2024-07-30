import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const TourDetails = () => {
  console.log("det",useLocalSearchParams());
  const { id, title } = useLocalSearchParams();
  console.log("tou",title);
  return (
    <SafeAreaView>
      <Text>{id}</Text>
      <Text>{title}</Text>
    </SafeAreaView>
  );
};

export default TourDetails;
