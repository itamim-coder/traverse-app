import { Redirect, Stack } from "expo-router";


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
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;
