import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  UIManager,
  Platform,
  LayoutAnimation,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Accordion = ({ data }) => {
  console.log(data);
  const [opened, setOpened] = useState(false);

//   if (
//     Platform.OS === "android" &&
//     UIManager.setLayoutAnimationEnabledExperimental
//   ) {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
//   }

  function toggleAccordion() {
    LayoutAnimation.configureNext({
      duration: 300,
      create: { type: "easeIn", property: "opacity" },
      update: { type: "linear", springDamping: 0.3, duration: 250 },
    });
    setOpened(!opened);
  }

  return (
    <View className="bg-white mt-3 rounded-md">
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View className="p-3 flex-row justify-between">
          <View className="flex-row">
            <Text className="font-semibold text-orange-600">
              Days {data?.day} :{" "}
            </Text>
            <Text className="font-semibold">{data?.name}</Text>
          </View>
          <AntDesign name={opened ? "caretup" : "caretdown"} size={16} />
        </View>
      </TouchableWithoutFeedback>

      {opened && (
        <View className="px-3 pb-2">
          {data.activities.map((activity) => (
            <Text>
              • {activity.time} : {activity.activity}
            </Text>
          ))}
          {/* <Text style={styles.details}>{details}</Text> */}
        </View>
      )}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  details: {
    opacity: 0.65,
  },
  title: {
    textTransform: "capitalize",
  },
  content: {
    marginTop: 8,
  },
  container: {
    margin: 10,

    backgroundColor: "white",
    borderRadius: 6,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
