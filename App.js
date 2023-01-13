import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./assets/Navigation/AppNavigation";
import { registerRootComponent } from "expo";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

registerRootComponent(App);
