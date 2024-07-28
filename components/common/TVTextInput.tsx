import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';

interface TVTextInputProps extends TextInputProps {
  className?: string;
}

const TVTextInput: React.FC<TVTextInputProps> = ({ className, style, ...props }) => {
  return (
    <TextInput {...props} style={[style, { className }]} />
  );
};

export default TVTextInput;
