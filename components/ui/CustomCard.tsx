import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

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
      <Image width={120} height={150} source={{ uri: image }} />

      <Title className="text-sm my-2 font-semibold text-center">{name}</Title>
      {/* <Paragraph className="mb-4 text-gray-600">{description}</Paragraph> */}
    </Card>
  );
};

export default CustomCard;
