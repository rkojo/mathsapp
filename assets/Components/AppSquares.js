import React from "react";
import { View, StyleSheet, Text } from "react-native";
function AppSquares({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});

export default AppSquares;
