import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppColor from "../Components/AppColor";
import AppButton from "../Components/AppButton";
import AppView from "../Components/AppView";
import AppText from "../Components/AppText";
import data from "../Settings/Data";
import score from "../Settings/Score";

function HomeScreen({ navigation }) {
  return (
    <AppView>
      <AppText style={styles.title}> Welcome to</AppText>
      <AppText style={styles.title2}>(samplename)! </AppText>
      <AppText style={styles.subtitle}> What do you want to play? </AppText>
      <AppButton
        style={styles.button}
        title={"Addition"}
        onPress={() => {
          data.newadd(), navigation.navigate("Add"), score.reset();
        }}
        testID="AddButton"
      />
      <AppButton
        style={styles.button}
        title={"Subtraction"}
        onPress={() => {
          data.newminus(), navigation.navigate("Sub"), score.reset();
        }}
        testID="SubButton"
      />
      <AppButton
        style={styles.button}
        title={"Multiplication"}
        onPress={() => {
          data.newmul(), navigation.navigate("Mul"), score.reset();
        }}
        testID="MulButton"
      />
    </AppView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "normal",
    textAlign: "left",
    marginBottom: 0,
  },
  title2: {
    fontSize: 50,
    fontWeight: "normal",
    textAlign: "left",
  },
  subtitle: {
    marginTop: "5%",
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    color: "yellow",
    marginBottom: "3%",
  },
});
export default HomeScreen;
