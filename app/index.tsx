// src/app/onboarding.tsx
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { Redirect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const router = useRouter();

  const isLogged = false; // Replace with actual authentication check

  if (isLogged) return <Redirect href="/(tabs)" />;
  const navigateToLogin = () => {
    router.push("/(auth)/sign-in"); // 
  };
  const navigateToSignup = () => {
    router.push("/(auth)/sign-up"); // 
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-white p-4">
      <View className="my-8">
        <Text className="text-2xl font-bold">Traverse </Text>
      </View>
      <Image
        source={require("../assets/images/Hotel Booking-pana.png")}
        // Replace with your image URL
        className="mb-8 w-60 h-60"
      />
      <View className="my-8 flex-1 flex-col justify-between">
        <View>
          <Text className="text-2xl font-bold text-center mb-4 text-orange-600">
            Explore the World with Traverse
          </Text>
          <Text className="text-center text-gray-600 mb-8">
            Find the best deals on hotels and plan your dream vacation.
          </Text>
        </View>
        <View className="flex-row border-2 border-orange-400 rounded-lg h-12">
          <TouchableOpacity
            onPress={navigateToLogin}
            className="justify-center items-center w-1/2 bg-orange-600 rounded-md"
          >
            <Text className="text-lg font-bold text-white">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToSignup}
            className="justify-center items-center w-1/2"
          >
            <Text className="text-lg font-bold">Sign-up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
