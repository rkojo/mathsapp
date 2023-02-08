import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppView from "../Components/AppView";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";
//rsf, rnss, imrn
function HelpScreen({ navigation }) {
  return (
    <AppView>
      <View style={styles.spaces}>
        <AppButton
          style={styles.return}
          title={"return"}
          onPress={() => {
            navigation.push("Home");
          }}
        />
        <AppText>Help</AppText>
      </View>
      <Image
        source={require("../Images/homepage.png")}
        style={styles.homepage}
      />
      <AppText>Select one of the gamemodes</AppText>
      <Image
        source={require("../Images/gamepage.png")}
        style={styles.homepage}
      />
      <AppText>To Reset your score</AppText>
      <AppText>On the homepage, press the settings button</AppText>
      <AppText>Press the reset all scores and press Yes</AppText>
    </AppView>
  );
}
const styles = StyleSheet.create({
  spaces: {
    flex: 1,
    flexDirection: "row-reverse",
    width: "100%",
    height: "5%",
    alignSelf: "flex-end",
    marginTop: "0.5%",
    justifyContent: "space-between",
  },
  homepage: {
    width: "40%",
    height: "40%",
    backgroundColor: "blue",
  },
});
export default HelpScreen;
