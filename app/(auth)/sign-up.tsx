import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const SignUp = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button title="Sign Up" onPress={() => router.push('/explore')} />
    </View>
  );
};

export default SignUp;
