import useThemeStore from "@/store/theme";
import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from "react-native"
export default function SignUp() {
  const { theme, colors } = useThemeStore();
  const currentColors = colors[theme];
    const [isSelected, setSelection] = useState(false);


  return (
    <SafeAreaView style={{ backgroundColor: currentColors.background, flex: 1 }}>
      <View className="px-4">
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
              placeholderTextColor={currentColors.text + '80'}
              style={{ 
                color: currentColors.text,
                fontSize: 14
              }}
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
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
              placeholderTextColor={currentColors.text + '80'}
              style={{ 
                color: currentColors.text,
                fontSize: 14
              }}
              placeholder="Full Name"
              autoCapitalize="words"
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
              placeholderTextColor={currentColors.text + '80'}
              style={{ 
                color: currentColors.text,
                fontSize: 14
              }}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <Ionicons 
              name="eye-off-outline" 
              size={20} 
              color={currentColors.iconColor} 
            />
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
              placeholderTextColor={currentColors.text + '80'}
              style={{ 
                color: currentColors.text,
                fontSize: 14
              }}
              placeholder="Confirm Password"
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <Ionicons 
              name="eye-off-outline" 
              size={20} 
              color={currentColors.iconColor} 
            />
          </View>
        </View>

        {/* Terms and Conditions */}
        <View className="flex-row items-start mx-3 mt-6">
          <CheckBox 
          value={isSel}
           />

        
          <Text 
            style={{ color: currentColors.text }}
            className="flex-1 text-xs leading-5"
          >
            I agree to the{" "}
            <Text style={{ color: currentColors.primary }}>Terms of Service</Text>
            {" "}and{" "}
            <Text style={{ color: currentColors.primary }}>Privacy Policy</Text>
          </Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity 
          className="mx-3 mt-8 py-4 rounded-2xl items-center"
          style={{ backgroundColor: currentColors.primary }}
        >
          <Text className="text-white font-semibold text-base">
            Create Account
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center mx-3 mt-8">
          <View 
            className="flex-1 h-px" 
            style={{ backgroundColor: currentColors.iconColor + '30' }}
          />
          <Text 
            style={{ color: currentColors.text }}
            className="mx-4 text-xs opacity-60"
          >
            Or continue with
          </Text>
          <View 
            className="flex-1 h-px" 
            style={{ backgroundColor: currentColors.iconColor + '30' }}
          />
        </View>

        {/* Social Login Buttons */}
        <View className="flex-row justify-center mt-6 space-x-4">
          <TouchableOpacity 
            className="w-12 h-12 rounded-full items-center justify-center"
            style={{ backgroundColor: currentColors.secBg }}
          >
            <Ionicons 
              name="logo-google" 
              size={24} 
              color={currentColors.iconColor} 
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="w-12 h-12 rounded-full items-center justify-center ml-4"
            style={{ backgroundColor: currentColors.secBg }}
          >
            <Ionicons 
              name="logo-apple" 
              size={24} 
              color={currentColors.iconColor} 
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="w-12 h-12 rounded-full items-center justify-center ml-4"
            style={{ backgroundColor: currentColors.secBg }}
          >
            <Ionicons 
              name="logo-facebook" 
              size={24} 
              color={currentColors.iconColor} 
            />
          </TouchableOpacity>
        </View>

        {/* Sign In Link */}
        <View className="flex-row justify-center mt-8 mb-4">
          <Text 
            style={{ color: currentColors.text }}
            className="text-sm opacity-70"
          >
            Already have an account?{" "}
          </Text>
          <TouchableOpacity>
            <Text 
              style={{ color: currentColors.primary }}
              className="text-sm font-semibold"
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}