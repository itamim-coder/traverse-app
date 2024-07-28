import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useNavigation, useRouter } from "expo-router";
import TVTextInput from "@/components/common/TVTextInput";
import TVButton from "@/components/common/TVButton";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const router = useRouter();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const toggleSecure = () => {
    setSecure((prevSecure) => !prevSecure);
  };
  const handleSignup = () => {
    // Handle login logic here
    router.push("/(tabs)");
  };
  const navigateToLogin = () => {
    router.push("/(auth)/sign-in"); //
  };

  return (
    <SafeAreaView className="flex-1  p-4 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          className="h-10 w-10  bg-orange-400 justify-center items-center rounded-full"
          onPress={handleGoBack}
        >
          <Ionicons name={"arrow-back-outline"} color={"white"} size={25} />
        </TouchableOpacity>
        <View className="my-8 space-y-4">
          <Text className="text-3xl font-bold">Let's Get</Text>
          <Text className="text-3xl font-bold text-orange-400">Started</Text>
        </View>

        <TVTextInput
          label="Name"
          value={name}
          onChangeText={setName}
          mode="outlined"
          activeOutlineColor="orange"
          className="mb-4"
          left={<TextInput.Icon icon={"account"} size={20} />}
        />
        <TVTextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          activeOutlineColor="orange"
          className="mb-4"
          left={<TextInput.Icon icon={"email"} size={20} />}
        />
        <TVTextInput
          label="Phone"
          value={phone}
          onChangeText={setPhone}
          mode="outlined"
          activeOutlineColor="orange"
          className="mb-4"
          left={<TextInput.Icon icon={"phone"} size={20} />}
        />
        <TVTextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secure}
          mode="outlined"
          activeOutlineColor="orange"
          className=""
          left={<TextInput.Icon icon={"key"} size={20} />}
          right={
            <TextInput.Icon
              icon={secure ? "eye" : "eye-off"}
              onPress={toggleSecure}
            />
          }
        />

        <View className="flex-1 items-center space-y-4 mt-4">
          <TVButton
            mode="contained"
            onPress={handleSignup}
            className="mt-2 p-1 bg-orange-500 w-full"
          >
            Sign up
          </TVButton>
          <Text>or continue with</Text>
          <TVButton
            mode="outlined"
            textColor="black"
            // onPress={handleLogin}
            className="mt-2 p-1 border-2 border-orange-400 bg-white w-full"
            icon={"google"}
          >
            Google
          </TVButton>
          <View className="flex-row space-x-2 items-center ">
            <Text>Already have any account?</Text>
            <TouchableOpacity onPress={navigateToLogin}>
              <Text className="text-orange-600 font-bold">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
