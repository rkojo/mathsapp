import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./assets/Navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
