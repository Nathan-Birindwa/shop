import useThemeStore from "@/store/theme";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import "../global.css";

export default function RootLayout() {
  const theme = useThemeStore((s: any) => s.theme);
  const colors = useThemeStore((s: any) => s.colors);

  const themeColor = colors[theme];

  useEffect(() => {
    StatusBar.setBackgroundColor(themeColor.background, true);
  }, [theme]);

  return (
    <>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
      />
      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: themeColor.header,
          },
          headerTintColor: themeColor.text,
          contentStyle: {
            backgroundColor: themeColor.background,
          },
        }}
      >
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="productView"
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack>
      ;
    </>
  );
}
