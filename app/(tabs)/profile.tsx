import TVButton from "@/components/common/TVButton";
import TVTextInput from "@/components/common/TVTextInput";
import React, { useState } from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const saveProfile = () => {
    // Handle save logic here
    alert(`Profile Saved!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView className=" bg-gray-100 p-4">
        <Text className="text-3xl font-bold text-center mb-6">Profile</Text>
        <TVTextInput
          label="Name"
          value={name}
          onChangeText={setName}
          mode="outlined"
          className="mb-4"
        />
        <TVTextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          className="mb-4"
        />
        <TVTextInput
          label="Phone"
          value={phone}
          onChangeText={setPhone}
          mode="outlined"
          keyboardType="phone-pad"
          className="mb-6"
        />
        <TVButton mode="contained" onPress={saveProfile} className="mt-2">
          Save Profile
        </TVButton>
      </ScrollView>
    </SafeAreaView>
  );
}
