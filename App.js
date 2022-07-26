import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./assets/Navigation/AppNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
