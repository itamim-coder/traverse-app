import React from 'react';
import { Button, ButtonProps } from 'react-native-paper';

interface TVButtonProps extends ButtonProps {
  className?: string;
}

const TVButton: React.FC<TVButtonProps> = ({ className, style, ...props }) => {
  return (
    <Button {...props} style={[style, { className }]} />
  );
};

export default TVButton;
