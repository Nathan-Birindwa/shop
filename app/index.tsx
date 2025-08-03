import useThemeStore from "@/store/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const country = "Uganda, Kampala";
  const { theme, toggleTheme, colors } = useThemeStore();

  const currentColors = colors[theme];
  const brands = [
    {
      id: 1,
      name: "Nike",
      img: `https://img.icons8.com/?size=100&id=16647&format=png&color=${currentColors.brandIcons}`,
    },
    {
      id: 2,
      name: "Adidas",
      img: `https://img.icons8.com/?size=100&id=xvG0XAGwZarY&format=png&color=${currentColors.brandIcons}`,
    },
    {
      id: 3,
      name: "Gucci",
      img: `https://img.icons8.com/?size=100&id=25272&format=png&color=${currentColors.brandIcons}`,
    },
    {
      id: 4,
      name: "Jordan",
      img: `https://img.icons8.com/?size=100&id=45774&format=png&color=${currentColors.brandIcons}`,
    },
    {
      id: 5,
      name: "Jordan",
      img: `https://img.icons8.com/?size=100&id=45774&format=png&color=${currentColors.brandIcons}`,
    },
    {
      id: 6,
      name: "Jordan",
      img: `https://img.icons8.com/?size=100&id=45774&format=png&color=${currentColors.brandIcons}`,
    },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: currentColors.background }}
    >
      {/* Header */}
      <View className="flex flex-row justify-between p-5">
        <Text
          style={{ color: currentColors.text }}
          className="font-medium mt-2 text-[16px]"
        >
          {country}
        </Text>
        <View className="flex flex-row gap-3">
          <TouchableOpacity>
            <Ionicons
              style={{ color: currentColors.text }}
              name="chatbubble-outline"
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={{ color: currentColors.text }}
              name="cart-outline"
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View className="flex items-center  justify-center mb-6">
        <View className="flex-row items-center bg-black/10 w-[95%] rounded-2xl px-4 py-2">
          <Ionicons
            name="search"
            size={22}
            color={currentColors.text}
            className="mr-2"
          />
          <TextInput
            placeholder="Find your outfit or shoes"
            placeholderTextColor={currentColors.text}
            className="flex-1 text-[17px]"
            style={{ color: currentColors.text }}
          />
        </View>
      </View>

      {/* Brands Section */}
      <View className="px-5">
        <Text
          style={{ color: currentColors.text }}
          className="font-bold text-xl mb-4"
        >
          Shop by Brand
        </Text>

        {/* Brands Grid */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 12,
            paddingRight: 12,
            alignItems: "center",
          }}
        >
          {brands.map((brand, idx) => (
            <TouchableOpacity
              key={brand.id}
              style={{
                minWidth: 100,
                marginRight: idx === brands.length - 1 ? 0 : 16,
              }}
              className="bg-black/10 rounded-2xl mb-4"
            >
              <View
                className="items-center p-3 rounded-xl"
                style={{ backgroundColor: currentColors.surface }}
              >
                <Image
                  className="h-12 w-12 mb-2"
                  source={{ uri: brand.img }}
                  resizeMode="contain"
                />
                <Text
                  style={{ color: currentColors.text }}
                  className="text-xs font-medium text-center"
                  numberOfLines={1}
                >
                  {brand.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          <View style={{ width: 8 }} />
        </ScrollView>
        <View>
          <Tou
        </View>
      </View>
    </SafeAreaView>
  );
}
