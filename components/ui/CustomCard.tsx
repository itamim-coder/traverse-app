import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { Image } from "expo-image";
interface CustomCardProps {
  name: string;
  description?: string;
  image?: string;
  className?: string;
  onViewPress?: () => void;
  onBookPress?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  name,
  description,
  image,
  className,
  onViewPress,
  onBookPress,
}) => {
  return (
    <Card className={`rounded-lg   shadow-lg ${className}`}>
      {/* <Image width={120} height={150} source={{ uri: image }} /> */}
      <Image
        // width={120}
        // height={150}
        className="w-36 h-40"
        source={image}
        // placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Title className="text-sm my-2 font-semibold text-center">{name}</Title>
      {/* <Paragraph className="mb-4 text-gray-600">{description}</Paragraph> */}
    </Card>
  );
};

export default CustomCard;
