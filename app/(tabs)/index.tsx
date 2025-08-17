import useThemeStore from "@/store/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const products = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
  },
  {
    id: "2",
    name: "Blue Denim Dress",
    price: 55,
    image:
      "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Women dressing",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "Hoddies",
    price: 35,
    image:
      "https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const categories = [
  { id: "c1", name: "Men", icon: "man-outline" },
  { id: "c2", name: "Women", icon: "woman-outline" },
  { id: "c3", name: "Kids", icon: "happy-outline" },
  { id: "c4", name: "Accessories", icon: "watch-outline" },
  { id: "c5", name: "Shoes", icon: "walk-outline" },
];

export default function Home() {
  const country = "Uganda, Kampala";
  const { theme, colors } = useThemeStore();
  const currentColors = colors[theme];
  const [wishlist, setWishlist] = useState<string[]>([]);
  const router = useRouter();

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: currentColors.background }}
      className="flex-1"
    >
      {/* HEADER */}
      <View className="px-4 py-3 flex-row justify-between items-center">
        <View>
          <Text
            style={{ color: currentColors.text }}
            className="text-lg font-bold"
          >
            NathWear
          </Text>
          <Text style={{ color: currentColors.accent }} className="text-xs">
            {country}
          </Text>
        </View>
        <View className="flex-row items-center gap-3">
          <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              size={25}
              color={currentColors.iconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity className="relative">
            <Ionicons
              name="cart-outline"
              size={25}
              color={currentColors.iconColor}
            />
            <View className="absolute -top-2 -right-2 bg-red-500 rounded-full px-1">
              <Text className="text-white text-[10px] font-bold">3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* SEARCH BAR */}
      <View className="px-4 mt-3 mb-2">
        <View
          style={{ backgroundColor: currentColors.secBg }}
          className="flex-row items-center px-3 py-2 rounded-xl"
        >
          <Ionicons
            name="search-outline"
            size={20}
            color={currentColors.iconColor}
          />
          <TextInput
            placeholder="Search for clothes..."
            placeholderTextColor={theme === "dark" ? "#9CA3AF" : "#6B7280"}
            className="flex-1 ml-2"
            style={{ color: currentColors.text }}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-4">
        {/* CATEGORIES */}
        <View className="mt-2 mb-4">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-4"
            contentContainerStyle={{ gap: 3 }}
          >
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={{
                  backgroundColor: currentColors.secBg,
                  minWidth: 80,
                  width: 100,
                  marginRight: 15,
                }}
                className="px-3 py-3 rounded-xl flex-col items-center justify-center"
              >
                <Ionicons
                  name={cat.icon as any}
                  size={20}
                  color={currentColors.iconColor}
                />
                <Text
                  style={{ color: currentColors.text }}
                  className="text-xs mt-1 text-center"
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* PRODUCT LIST */}

        <Text
          style={{ color: currentColors.text }}
          className="text-2xl font-bold mt-2 mb-3"
        >
          Featured Products
        </Text>

        <View className="flex-row flex-wrap justify-between">
          {products.map((item) => (
            <TouchableOpacity
              onPress={() => router.push("/productView")}
              key={item.id}
              className="w-[48%] mb-4 rounded-xl overflow-hidden"
              style={{ backgroundColor: currentColors.secBg }}
            >
              {/* Product Image */}
              <View className="relative">
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-40"
                  resizeMode="cover"
                />
                {/* Like Button */}
                <TouchableOpacity
                  onPress={() => toggleWishlist(item.id)}
                  className="absolute top-2 right-2 p-1 rounded-full"
                  style={{ backgroundColor: `${currentColors.background}AA` }}
                >
                  <Ionicons
                    name={
                      wishlist.includes(item.id) ? "heart" : "heart-outline"
                    }
                    size={20}
                    color={currentColors.primary}
                  />
                </TouchableOpacity>
              </View>

              {/* Info Section */}
              <View className="p-2">
                <Text
                  style={{ color: currentColors.text }}
                  className="font-semibold"
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
                <Text
                  style={{ color: currentColors.primary }}
                  className="font-bold mb-2"
                >
                  ${item.price}
                </Text>

                {/* Add to Cart Button */}
                <TouchableOpacity
                  className="flex-row items-center justify-center py-2 px-3 rounded-lg"
                  style={{ backgroundColor: currentColors.primary }}
                >
                  <Ionicons name="cart-outline" size={16} color="#fff" />
                  <Text className="text-white ml-1 text-xs font-semibold">
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
