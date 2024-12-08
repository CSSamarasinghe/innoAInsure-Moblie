import { Image, StyleSheet, Platform, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-purple-400">
      <Text className="text-white text-[24px]">Welcome to InnoAIsure !!!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
