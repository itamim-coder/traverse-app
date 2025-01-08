import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const BackNavigation = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View className="w-full h-12 relative">
      <TouchableOpacity
        className="absolute top-3 left-3 h-10 w-10 bg-orange-400 justify-center items-center rounded-full"
        onPress={handleGoBack}
        style={{
          marginVertical: 6, // Ensure equal top and bottom spacing
        }}
      >
        <Ionicons name={"arrow-back-outline"} color={"white"} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default BackNavigation;
