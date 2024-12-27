import { useLocationBasedHotelQuery } from "@/app/redux/api/locationsApi";
import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const { data: hotelData, isLoading } = useLocationBasedHotelQuery(id);
  console.log(hotelData);
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <View className="w-full h-10">
          <TouchableOpacity
            className="h-10 m-4 w-10 z-10 absolute bg-orange-400 justify-center items-center rounded-full"
            onPress={handleGoBack}
          >
            <Ionicons name={"arrow-back-outline"} color={"white"} size={25} />
          </TouchableOpacity>
        </View>
        <View className="p-4 pt-8">
          {hotelData?.Hotel?.map((data) => (
            <View className="flex-row bg-white rounded-xl p-2">
              <Image
                source={{ uri: `${data.photos[0]}` }}
                className="w-40 h-32 rounded-xl"
              />
              <View className="flex-1 flex-col justify-between pl-4">
                <Text className="text-base font-semibold">{data.name}</Text>
                <TouchableOpacity className="p-3 bg-orange-600 rounded-md">
                  <Link key={data?.id} href={`(hotel)/(details)/${data?.id}`}>
                    <Text className="text-white text-center font-semibold">
                      Check Availability
                    </Text>
                  </Link>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
