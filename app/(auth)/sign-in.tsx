import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useRouter } from "expo-router";
import TVTextInput from "@/components/common/TVTextInput";
import TVButton from "@/components/common/TVButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Handle login logic here
    router.push("/(tabs)");
  };

  return (
    <View className="flex-1 justify-center p-4 ">
      <Text className="text-3xl font-bold text-center mb-6">Login</Text>
      <TVTextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        className="mb-4"
      />
      <TVTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        className="mb-6"
      />
      <TVButton mode="contained" onPress={handleLogin} className="mt-2">
        Login
      </TVButton>
    </View>
  );
}
