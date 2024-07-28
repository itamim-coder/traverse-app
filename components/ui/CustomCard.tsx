import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

interface CustomCardProps {
  name: string;
  description: string;
  image?: string;
  onViewPress: () => void;
  onBookPress: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  name,
  description,
  image,
  onViewPress,
  onBookPress,
}) => {
  return (
    <Card className="my-4 rounded-lg overflow-hidden shadow-lg">
      <Image source={{ uri: image }} className="w-full h-48" />
      <Card.Content>
        <Title className="mt-4 mb-2 text-lg font-bold">{name}</Title>
        <Paragraph className="mb-4 text-gray-600">{description}</Paragraph>
      </Card.Content>
      <Card.Actions className="flex flex-row justify-end px-4 py-2">
        <TouchableOpacity
          onPress={onViewPress}
          className="mr-2 px-4 py-2 rounded bg-blue-500 text-white"
        >
          <Text>View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onBookPress}
          className="px-4 py-2 rounded border border-blue-500 text-blue-500"
        >
          <Text>Book</Text>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
};

export default CustomCard;
