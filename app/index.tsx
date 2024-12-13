import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Index() {
  const { theme } = useTheme();

  return (
    <ThemedView className="flex-1 justify-center items-center">
      <ThemedText type="title" className="mb-4">
        Welcome to NativeWind Theming
      </ThemedText>
      <ThemedText type="subtitle" className="mb-2">
        Explore the power of dynamic themes
      </ThemedText>
      <ThemedText className="mb-4">
        This example demonstrates how to use NativeWind v4 with Expo for theming
        your app.
      </ThemedText>
      <ThemedText>Current theme: {theme}</ThemedText>
      <ThemeSwitcher />
    </ThemedView>
  );
}
