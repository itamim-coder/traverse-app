import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { AntDesign, Feather } from "@expo/vector-icons";

const TabBarButton = (props) => {
  const { isFocused, label, routeName, color } = props;

  // Define available icons
  const icons = {
    index: (props: any) => <AntDesign name="home" size={26} {...props} />,
    explore: (props: any) => <Feather name="compass" size={26} {...props} />,
    "(home)": (props: any) => (
      <AntDesign name="pluscircleo" size={26} {...props} />
    ),
    profile: (props: any) => <AntDesign name="user" size={26} {...props} />,
  };

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      // styles
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      // styles
      opacity,
    };
  });

  // Fallback icon if routeName is invalid
  const renderIcon =
    icons[routeName] ||
    (() => <AntDesign name="questioncircleo" size={26} {...props} />);

  return (
    <Pressable {...props} style={styles.container}>
      <Animated.View style={[animatedIconStyle]}>
        {renderIcon({
          color,
        })}
      </Animated.View>

      <Animated.Text
        style={[
          {
            color,
            fontSize: 11,
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

export default TabBarButton;
