import useThemeStore from "@/store/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const theme = useThemeStore((s: any) => s.theme);
  const colors = useThemeStore((s: any) => s.colors);

  const themeColor = colors[theme];

  return (
    <SafeAreaView>
      {/* Navbar */}
      <View className="flex flex-row justify-between p-6">
        <Text style={{ color: themeColor }} className="text-3xl">
          Discover
        </Text>
        <TouchableOpacity>
          <AntDesign name="shoppingcart" size={24} color={themeColor.text} />
        </TouchableOpacity>
      </View>
      <View className="bg-blue-600 h-40 w-50 absolute top-100"></View>
    </SafeAreaView>
  );
}
