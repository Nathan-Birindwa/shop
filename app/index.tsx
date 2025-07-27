import useThemeStore from "@/store/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const theme = useThemeStore((s: any) => s.theme);
  const colors = useThemeStore((s: any) => s.colors);

  const themeColor = colors[theme];

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
      >
        <View className=" flex flex-row justify-between items-start rounded-b-3xl p-6">
          {/* Title */}
          <Text
            style={{ color: themeColor.text }}
            className="text-3xl font-medium mt-3"
          >
            Discover
          </Text>

          {/* Icons */}
          <View
            style={{ backgroundColor: themeColor.secBg, borderRadius: 50 }}
            className="flex flex-row gap-2 px-4 py-2 rounded-full mt-2"
          >
            <TouchableOpacity
              style={{ backgroundColor: themeColor.shadeBG }}
              className=" rounded-full p-2"
            >
              <AntDesign
                name="shoppingcart"
                size={24}
                color={themeColor.iconColor}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: themeColor.shadeBG }}
              className=" rounded-full p-2"
            >
              <Ionicons
                name="notifications-outline"
                size={24}
                color={themeColor.iconColor}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="">

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
