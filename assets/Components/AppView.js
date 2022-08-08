import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import AppColor from "./AppColor";

//ensures consistency with all screens to ensure that the components are not over the status bar etc.
function AppView({ children, style }) {
  return (
    <View style={styles.background}>
      <View style={[styles.screen, style]}>{children}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColor.fifthColor,
    flex: 1,
    padding: 0,
  },
  screen: {
    flex: 1,
    padding: 0,
    marginTop: Constants.statusBarHeight,
    backgroundColor: AppColor.fifthColor,
    marginLeft: "1%",
    marginRight: "1%",
  },
});
export default AppView;
