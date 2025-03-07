import { useLocationBasedHotelQuery } from "@/app/redux/api/locationsApi";
import BackNavigation from "@/components/navigation/BackNavigation";
import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailsScreen = () => {
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
        <BackNavigation />

        <FlatList
          data={hotelData?.Hotel}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View className="flex-row bg-white rounded-xl p-2">
              <Image
                source={{ uri: `${item.photos[0]}` }}
                className="w-40 h-32 rounded-xl"
              />
              <View className="flex-1 flex-col justify-between pl-4">
                <Text className="text-base font-semibold">{item.name}</Text>
                <TouchableOpacity className="p-3 bg-orange-600 rounded-md">
                  <Link key={item?.id} href={`(hotel)/(details)/${item?.id}`}>
                    <Text className="text-white text-center font-semibold">
                      Check Availability
                    </Text>
                  </Link>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ padding: 10, paddingTop: 20 }}
          ItemSeparatorComponent={() => <View className="h-4" />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailsScreen;
