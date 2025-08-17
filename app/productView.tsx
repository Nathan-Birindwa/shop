import useThemeStore from "@/store/theme";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductView: React.FC = () => {
  const { theme, colors } = useThemeStore();
  const router = useRouter();
  const currentColors = colors[theme];

  return (
    <SafeAreaView
      style={{ backgroundColor: currentColors.header }}
      className="flex-1"
    >
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="p-4 flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
              name="chevron-back"
              size={28}
              color={currentColors.iconColor}
            />
          </TouchableOpacity>

          <Text
            style={{ color: currentColors.text }}
            className="text-lg font-semibold"
          >
            Leather Jacket
          </Text>

          <View className="flex flex-row gap-3">
            <TouchableOpacity>
              <MaterialIcons
                name="favorite-border"
                size={24}
                color={currentColors.iconColor}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                name="more-vertical"
                size={24}
                color={currentColors.iconColor}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Product Image */}
        <View className="items-center">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
            }}
            className="w-full h-72"
            resizeMode="cover"
          />
        </View>

        {/* Product Info */}
        <View
          style={{ backgroundColor: currentColors.background }}
          className="rounded-t-2xl  py-4 px-5 "
        >
          <View className="flex-row justify-between items-center">
            <View>
              <Text
                style={{ color: currentColors.text }}
                className="text-2xl font-bold"
              >
                Chocolate Leather Jacket
              </Text>
              <View className="flex-row items-center gap-2">
                <Text
                  className="text-lg font-bold"
                  style={{ color: currentColors.text }}
                >
                  $180
                </Text>
                <Text className="line-through text-gray-400">$210</Text>
                <View
                  style={{ backgroundColor: currentColors.primary }}
                  className=" px-2 py-0.5 rounded-md"
                >
                  <Text className="text-white text-xs">20% off</Text>
                </View>
              </View>
            </View>

            {/* Quantity selector */}
            <View className="flex-row items-center gap-2 mt-9">
              <TouchableOpacity
                style={{ backgroundColor: currentColors.secBg }}
                className="px-4 py-1 rounded-full"
              >
                <Text
                  style={{ color: currentColors.text }}
                  className="text-lg font-bold"
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{ color: currentColors.text }}
                className="text-lg font-semibold"
              >
                1
              </Text>
              <TouchableOpacity
                style={{ backgroundColor: currentColors.secBg }}
                className="px-4 py-1 rounded-full"
              >
                <Text
                  style={{ color: currentColors.text }}
                  className="text-lg font-bold"
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Description */}
          <View className="mt-4">
            <Text
              style={{ color: currentColors.text }}
              className="font-semibold text-base"
            >
              Description
            </Text>
            <Text className="mt-1" style={{ color: currentColors.text }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </Text>
          </View>

          {/* Details Grid */}
          <View className="mt-6 flex-row flex-wrap justify-between">
            <View className="w-[48%] mb-4">
              <Text className="text-gray-500">Type</Text>
              <Text
                style={{ color: currentColors.text }}
                className="font-semibold"
              >
                Yellow honey
              </Text>
            </View>
            <View className="w-[48%] mb-4">
              <Text className="text-gray-500">Weight</Text>
              <Text
                style={{ color: currentColors.text }}
                className="font-semibold"
              >
                500gm
              </Text>
            </View>
            <View className="w-[48%] mb-4">
              <Text className="text-gray-500">Organic</Text>
              <Text className="font-semibold text-green-600">✔ Yes</Text>
            </View>
            <View className="w-[48%] mb-4">
              <Text className="text-gray-500">Local Bee keeper</Text>
              <Text className="font-semibold text-green-600">✔ Yes</Text>
            </View>
            <View className="w-[48%] mb-4">
              <Text className="text-gray-500">Brand</Text>
              <Text
                style={{ color: currentColors.text }}
                className="font-semibold"
              >
                Addidas
              </Text>
            </View>
            <View className="w-[48%] mb-4">
              <Text className="text-gray-500">Color</Text>
              <Text
                style={{ color: currentColors.text }}
                className="font-semibold"
              >
                Chocolate
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductView;
