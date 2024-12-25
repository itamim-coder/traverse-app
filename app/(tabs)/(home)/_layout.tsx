import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const HomeLayout = () => {
  // const isLogged = false;

  // if (isLogged) return <Redirect href="/(tabs)" />;

  return (
    <>
      <Stack
        screenOptions={{
          // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
    
      </Stack>
    </>
  );
};

export default HomeLayout;
