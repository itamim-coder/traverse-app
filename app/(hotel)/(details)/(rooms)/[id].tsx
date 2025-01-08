import { useGetSingleRoomQuery } from "@/app/redux/api/roomApi";
import BackNavigation from "@/components/navigation/BackNavigation";

import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { Checkbox } from "react-native-paper";

import BottomSheet from "@ahmetaltai/react-native-bottom-sheet";

const Rooms = () => {
  const params = useLocalSearchParams();
  const [checked, setChecked] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const items = params.items ? JSON.parse(params.items) : [];
  const { data: roomData, isLoading: loading } = useGetSingleRoomQuery(
    selectedRoom?.id
  );

  const navigation = useNavigation();
  const BottomSheetRef = useRef<BottomSheetRef>();

  const handleRoomPress = (room) => {
    setSelectedRoom(room); // Set selected room details
    BottomSheetRef.current?.open();
  };
  const OpenBottomSheet = () => {
    BottomSheetRef.current?.open();
  };

  const ExpandBottomSheet = () => {
    BottomSheetRef.current?.expand();
  };

  const SnapBottomSheet = (index: number) => {
    BottomSheetRef.current?.snap(index);
  };

  const OnPressBackdrop = () => {
    console.log("Backdrop Pressed");
  };

  const OnChangePoint = (index: number) => {
    console.log("Present Change: " + index);
  };

  return (
    <SafeAreaView className="flex-1">
      <BackNavigation />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleRoomPress(item)}
            className="p-4 flex-row border-b gap-2 border-gray-300"
          >
            <View>
              <Image
                source={{ uri: item.photos[0] }}
                className="w-32 h-44 rounded-xl"
              />
            </View>
            <View>
              <Text className="text-lg font-bold">{item.name}</Text>
              <Text className="text-sm text-gray-600">
                Max People: {item.maxPeople}
              </Text>
              <Text className="text-sm text-orange-500">
                Price: ${item.price}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text className="p-4 text-center text-gray-500">
            No Rooms Available
          </Text>
        }
      />

      <BottomSheet
        index={0}
        ref={BottomSheetRef}
        points={["80%"]}
        onChangePoint={OnChangePoint}
        // onPressBackdrop={OnPressBackdrop} - By default, pressing the backdrop will close the modal. If a different action is needed, the onPressBackdrop prop can be used to define a custom function.
      >
        {selectedRoom && roomData ? (
          <ScrollView className="p-4 flex-1">
            <View className="flex-1">
              {/* Room Information */}
              <Text className="text-2xl font-bold mb-4">{roomData.name}</Text>

              {/* Room Photos */}
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={roomData.photos}
                keyExtractor={(item, index) => `${selectedRoom.id}-${index}`}
                renderItem={({ item }) => (
                  <Image
                    source={{ uri: item }}
                    className="w-64 h-44 rounded-lg mr-4"
                  />
                )}
              />

              <Text className="text-lg text-gray-600 mb-4">
                Max People: {roomData.maxPeople}
              </Text>
              <Text className="text-lg text-orange-500 mb-4">
                Price: ${roomData.price}
              </Text>
              <Text className="text-base text-gray-700 mb-4">
                Additional Details: Enjoy this luxurious room with modern
                amenities. Please check the room number below for availability.
              </Text>

              <Text className="text-lg font-semibold mb-2">Room Numbers:</Text>

              {/* Room Numbers List */}
              <FlatList
                data={roomData.RoomNumber}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity className="p-2 mb-2 border border-gray-300 rounded-lg">
                    <Text className="text-gray-700">
                      Room Number: {item.number}
                    </Text>
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                  </TouchableOpacity>
                )}
                ListEmptyComponent={
                  <Text className="text-sm text-gray-500">
                    No room numbers available.
                  </Text>
                }
              />

              {/* Spacer to push button to the bottom */}
              <View className="flex-grow" />

              {/* Book Now Button */}
              <TouchableOpacity className="bg-orange-500 py-3 rounded-lg mt-4 mb-8">
                <Text className="text-white text-center text-lg font-bold">
                  BOOK NOW
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          <Text className="text-center mt-10 text-gray-500">
            Loading room details...
          </Text>
        )}
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Rooms;
