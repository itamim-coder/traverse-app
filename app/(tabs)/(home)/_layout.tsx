import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const HomeLayout = () => {
  const isLogged = false;

  if (isLogged) return <Redirect href="/(tabs)" />;

  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default HomeLayout;
