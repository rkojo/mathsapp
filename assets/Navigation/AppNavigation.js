import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import AddMaths from "../Screens/AddMaths";
import SubMaths from "../Screens/SubMaths";
import MulMaths from "../Screens/MulMaths";
import DivMaths from "../Screens/DivMaths";
import RandMaths from "../Screens/RandMaths";
import Settings from "../Screens/SettingsScreen";
import Help from "../Screens/HelpScreen";
const AppStack = createNativeStackNavigator();

const AppNavigation = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Help"
      component={Help}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Addition"
      component={AddMaths}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Subtraction"
      component={SubMaths}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Multiplication"
      component={MulMaths}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Division"
      component={DivMaths}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Random"
      component={RandMaths}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Settings"
      component={Settings}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);
export default AppNavigation;
