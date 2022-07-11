import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen";
import AddMaths from "../Screens/AddMaths";
const AppStack = createNativeStackNavigator();

const AppNavigation = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Add"
      component={AddMaths}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);
export default AppNavigation;
