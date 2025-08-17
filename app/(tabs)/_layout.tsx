import useThemeStore from "@/store/theme";
import AntDesign from "@expo/vector-icons/AntDesign";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const { theme, colors } = useThemeStore();
  const currentColors = colors[theme];
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#EE4B6A",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: currentColors.background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
