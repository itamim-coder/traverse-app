import { useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, FlatList, View, Text } from "react-native";

const Rooms = () => {
  // console.log(useLocalSearchParams(), "function");
  const { id } = useLocalSearchParams();
  const { items } = useLocalSearchParams();
  //   const parsedItems = items ? JSON.parse(items) : [];

  console.log("id:", id); // Debugging
  console.log("items:", items); // Debugging
  //   console.log("Decoded Rooms Data:", parsedItems); // Debugging

  return (
    <SafeAreaView className="flex-1">
      <Text>room</Text>
      {/* <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="p-4 border-b border-gray-300">
            <Text className="text-lg font-bold">{item?.name}</Text>
            <Text className="text-sm text-gray-600">{item?.description}</Text>
            <Text className="text-sm text-orange-500">${item?.price}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text className="p-4 text-center text-gray-500">
            No Rooms Available
          </Text>
        }
      /> */}
    </SafeAreaView>
  );
};

export default Rooms;
