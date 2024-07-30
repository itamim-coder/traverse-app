import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  const isLogged = false;

  if (isLogged) return <Redirect href="/(tabs)" />;

  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;
