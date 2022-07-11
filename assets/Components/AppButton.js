import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import AppColor from "./AppColor";

function AppButton({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={styles.text}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColor.primaryColor,
    borderRadius: 20,
    padding: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: AppColor.white,
  },
});

export default AppButton;
