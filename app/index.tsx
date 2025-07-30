import useThemeStore from "@/store/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Brand = {
  id: number;
  name: string;
  img: string;
};

type ItemProps = {
  title: string;
  image: string;
};

export default function Home() {
  const country = "Uganda, Kampala";
  const { theme, colors } = useThemeStore();
  const currentColors = colors[theme];

  const brands: Brand[] = [
    {
      id: 1,
      name: "Nike",
      img: "https://img.icons8.com/?size=100&id=16647&format=png&color=000000",
    },
    {
      id: 2,
      name: "Adidas",
      img: "https://img.icons8.com/?size=100&id=16713&format=png&color=000000",
    },
    {
      id: 3,
      name: "Puma",
      img: "https://img.icons8.com/?size=100&id=85487&format=png&color=000000",
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const filteredBrands = selectedBrand
    ? brands.filter((brand) => brand.name === selectedBrand)
    : brands;

  const Item = ({ title, image }: ItemProps) => (
    <View className="items-center p-3">
      <Image
        source={{ uri: image }}
        className="w-16 h-16 mb-2"
        resizeMode="contain"
      />
      <Text style={{ color: currentColors.text }}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1">
      {/* Nav with search bar */}
      <View>
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
                name="chatbubble-outline"
                size={24}
                color={currentColors.text}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="cart-outline"
                size={24}
                color={currentColors.text}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search bar */}
        <View className="flex items-center justify-center">
          <View className="flex-row items-center bg-[#1B212FFF]/20 w-[95%] rounded-xl px-4 py-2">
            <Ionicons
              name="search"
              size={22}
              color={currentColors.text}
              className="mr-2"
            />
            <TextInput
              placeholder="Find your outfit or shoes"
              placeholderTextColor={currentColors.text}
              className="flex-1 text-[17px] text-white"
            />
          </View>
        </View>
      </View>

      {/* Category buttons */}
      <View className="mt-5 px-5">
        <FlatList
          horizontal
          data={brands}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                setSelectedBrand((prev) =>
                  prev === item.name ? null : item.name
                )
              }
              className={`mr-3 px-4 py-2 rounded-full border ${
                selectedBrand === item.name
                  ? "bg-white border-white"
                  : "border-gray-400"
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  selectedBrand === item.name ? "text-black" : "text-white"
                }`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Filtered Brand Items */}
      <View className="mt-5 px-5">
        <FlatList
          horizontal
          data={filteredBrands}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Item title={item.name} image={item.img} />}
        />
      </View>
    </SafeAreaView>
  );
}
