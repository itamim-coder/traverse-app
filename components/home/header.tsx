import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

const Header = () => {
  return (
    <View>
      <View className="bg-orange-300 p-4 h-40">
        <View className="flex-row items-center space-x-4">
          <View>
            <Avatar.Image
              size={54}
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
              }}
            />
          </View>
          <View>
            <Text className="text-xl font-bold">Hello, Imtiaz</Text>
          </View>
        </View>
      </View>
      <View className="flex-row p-4 justify-evenly mt-[-64]">
        <TouchableOpacity className="bg-white rounded p-4 flex items-center space-y-2">
          <Image
            source={require("../../assets/images/hotel.png")}
            className="w-12 h-12"
          />
          <Text className="font-bold">Hotel</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white rounded p-4 flex items-center space-y-2">
          <Image
            source={require("../../assets/images/suitcase.png")}
            className="w-12 h-12"
          />
          <Text className="font-bold">Tour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
