import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import CustomCard from "../ui/CustomCard";
import { Image } from "expo-image";

const PopularLocation = ({ item, index, length }) => {
  return (
    <View
      className={`rounded bg-white p-2 ${index !== length - 1 ? "mr-2" : ""}`}
    >
      <Link key={item?.id} href={`(home)/(details)/${item?.id}`}>
        <CustomCard
          className=""
          key={item?.id}
          name={item?.name}
          image={item?.image}
        />
      </Link>
    </View>
  );
};

export default PopularLocation;
