import useThemeStore from "@/store/theme";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const router = useRouter();
  const { theme, colors } = useThemeStore();
  const currentColors = colors[theme];

  const [error, setError] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 NEW loading state

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(name: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  async function handleSubmit() {
    setLoading(true); // start loading
    setError(""); // clear any old error

    try {
      const res = await axios.post(
        "http://192.168.1.9:3000/api/signup",
        formData
      );
      console.log("User created:", res.data);

      // maybe navigate after success
      router.push("/signin");
    } catch (err: any) {
      console.error("Error submitting data:", err.data.message);
      setError("Could not submit your information, try again");
    } finally {
      setLoading(false); // stop loading
    }
  }

  return (
    <SafeAreaView
      style={{ backgroundColor: currentColors.background, flex: 1 }}
    >
      <View className="px-4 mt-10">
        <Text
          style={{ color: currentColors.text }}
          className="text-center text-4xl font-extrabold mt-9"
        >
          Create an account
        </Text>
        <Text
          style={{ color: currentColors.text }}
          className="text-[12px] text-center opacity-70 mt-2"
        >
          Create an account to access additional features
        </Text>

        {/* Email Input */}
        <View className="mt-8">
          <View
            className="flex-row items-center mx-3 px-4 py-3 rounded-2xl"
            style={{ backgroundColor: currentColors.secBg }}
          >
            <Ionicons
              name="mail-outline"
              size={20}
              color={currentColors.iconColor}
            />
            <TextInput
              className="flex-1 ml-3"
              placeholderTextColor={currentColors.text}
              style={{ color: currentColors.text, fontSize: 14 }}
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(text) => handleChange("email", text)}
            />
          </View>
        </View>

        {/* Full Name Input */}
        <View className="mt-4">
          <View
            className="flex-row items-center mx-3 px-4 py-3 rounded-2xl"
            style={{ backgroundColor: currentColors.secBg }}
          >
            <Ionicons
              name="person-outline"
              size={20}
              color={currentColors.iconColor}
            />
            <TextInput
              className="flex-1 ml-3"
              placeholderTextColor={currentColors.text}
              style={{ fontSize: 14 }}
              placeholder="Full Name"
              autoCapitalize="words"
              value={formData.fullName}
              onChangeText={(text) => handleChange("fullName", text)}
            />
          </View>
        </View>

        {/* Password Input */}
        <View className="mt-4">
          <View
            className="flex-row items-center mx-3 px-4 py-3 rounded-2xl"
            style={{ backgroundColor: currentColors.secBg }}
          >
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={currentColors.iconColor}
            />

            <TextInput
              className="flex-1 ml-3"
              placeholderTextColor={currentColors.text}
              style={{ color: currentColors.text, fontSize: 14 }}
              placeholder="Password"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              value={formData.password}
              onChangeText={(text) => handleChange("password", text)}
            />
            <TouchableOpacity onPress={handleShowPassword}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color={currentColors.iconColor}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password Input */}
        <View className="mt-4">
          <View
            className="flex-row items-center mx-3 px-4 py-3 rounded-2xl"
            style={{ backgroundColor: currentColors.secBg }}
          >
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={currentColors.iconColor}
            />
            <TextInput
              className="flex-1 ml-3"
              placeholderTextColor={currentColors.text}
              style={{ color: currentColors.text, fontSize: 14 }}
              placeholder="Confirm Password"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              value={formData.confirmPassword}
              onChangeText={(text) => handleChange("confirmPassword", text)}
            />
            <TouchableOpacity onPress={handleShowPassword}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color={currentColors.iconColor}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Terms and Conditions */}
        <View className="flex-row items-start mx-3 gap-2 mt-6">
          <Checkbox
            value={isChecked}
            color={currentColors.primary}
            onValueChange={setChecked}
          />
          <Text
            style={{ color: currentColors.text }}
            className="flex-1 text-xs leading-5"
          >
            I agree to the{" "}
            <Text style={{ color: currentColors.primary }}>
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text style={{ color: currentColors.primary }}>Privacy Policy</Text>
          </Text>
        </View>

        {/* Error message */}
        <Text
          className={
            error
              ? "text-[12px] text-white bg-red-600 mt-5 p-2 rounded-sm"
              : "bg-none p-0 text-transparent"
          }
        >
          {error}
        </Text>

        {/* Sign Up Button */}
        <TouchableOpacity
          onPress={handleSubmit}
          disabled={loading} // disable while loading
          className="mx-3 mt-8 py-4 rounded-2xl items-center"
          style={{
            backgroundColor: loading
              ? currentColors.iconColor
              : currentColors.primary,
          }}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-semibold text-base">
              Create Account
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
