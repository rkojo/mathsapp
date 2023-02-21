import React, { useState } from "react";
import { StyleSheet, View, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppButton from "../Components/AppButton";
import AppView from "../Components/AppView";
import AppText from "../Components/AppText";
import AppColor from "../Components/AppColor";
import data from "../Settings/Data";

function SettingsScreen({ route, navigation }) {
  const reset = async () => {
    try {
      await AsyncStorage.setItem("MulHS", 0);
      await AsyncStorage.setItem("AddHS", 0);
      await AsyncStorage.setItem("SubHS", 0);
      await AsyncStorage.setItem("DivHS", 0);
      await AsyncStorage.setItem("RandHS", 0);
    } catch (e) {
      console.log(e);
    }
  };

  function confirmDifficulty(diff) {
    data.changeDifficulty(diff);
  }
  function easymode() {
    return "Addition and Multiplication values 0-10, Division and Multiplication values 0-10";
  }
  function mediummode() {
    return "Addition and Multiplication values 0-500, Division and Multiplication values 0-20";
  }
  function hardmode() {
    return "Addition and Multiplication values 0-1000, Division and Multiplication values 0-30";
  }

  const [modalvisible, setmodalvisible] = useState(false);
  const [difmodalvisible, setdefmodalvisible] = useState(false);
  const [text, setText] = useState("");
  const [difficulty, setDifficulty] = useState("hard");
  const [colour, setcolour] = useState(AppColor.white);
  const [currentdiff, setcurdiff] = useState(data.showdiff());

  return (
    <AppView>
      <Modal visible={modalvisible} style={styles.modal}>
        <View style={styles.modalview}>
          <AppText style={styles.modaltext}>
            Are you sure you want to reset scores?
          </AppText>
          <AppText style={styles.modaltext}>This is not reversable!</AppText>
          <View style={styles.modalbuttonview}>
            <AppButton
              style={styles.modalbutton1}
              title="Yes"
              onPress={() => [setmodalvisible(false), reset()]}
            />
            <AppButton
              style={styles.modalbutton2}
              title="No"
              onPress={() => [setmodalvisible(false)]}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={difmodalvisible} style={styles.modal}>
        <View style={styles.modalview}>
          <AppText>Change Difficulty </AppText>
          <AppButton
            title="Easy"
            onPress={() => [
              setText(easymode()),
              setDifficulty("easy"),
              setcolour(AppColor.primaryColor),
            ]}
          />
          <AppButton
            title="Medium"
            onPress={() => [
              setText(mediummode()),
              setDifficulty("medium"),
              setcolour(AppColor.primaryColor),
            ]}
          />
          <AppButton
            title="Hard"
            onPress={() => [
              setText(hardmode()),
              setDifficulty("hard"),
              setcolour(AppColor.primaryColor),
            ]}
          />
          <AppText>{text}</AppText>
          <AppButton
            title="Confirm"
            onPress={() => [
              confirmDifficulty(difficulty),
              setdefmodalvisible(false),
              setcurdiff(data.showdiff()),
              data.reset(),
              setText(""),
            ]}
            style={{ color: colour, backgroundColor: colour }}
          />
          <AppText>Current Difficulty : {currentdiff}</AppText>
        </View>
      </Modal>
      <View style={styles.space}>
        <AppButton
          style={styles.return}
          title={"return"}
          onPress={() => {
            navigation.push("Home");
          }}
          testID="return"
        />
      </View>
      <View style={styles.spaces}>
        <AppButton
          style={styles.button}
          title={"Reset All Scores"}
          onPress={() => {
            setmodalvisible(true);
          }}
        />
        <AppButton
          style={styles.button}
          title={"Set Difficulty"}
          onPress={() => {
            setdefmodalvisible(true);
          }}
        />
      </View>
    </AppView>
  );
}

const styles = StyleSheet.create({
  space: {
    flex: 1,
    flexDirection: "row-reverse",
    width: "100%",
    height: "5%",
    alignSelf: "flex-end",
    marginTop: "0.5%",
    justifyContent: "space-between",
  },
  spaces: {
    marginBottom: "25%",
    justifyContent: "space-between",
  },
  modalview: {
    flex: 1,
    width: "25%",
    height: "25%",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignSelf: "center",
  },
  modal: {
    backgroundColor: "blue",
    width: "40%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginBottom: "1%",
  },
  modaltext: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    textAlign: "center",
  },
  modalbutton1: {
    backgroundColor: AppColor.red,
    alignSelf: "center",
  },
  modalbutton2: {
    backgroundColor: AppColor.green,
    alignSelf: "center",
  },
  modalbuttonview: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    height: "20%",
    marginTop: "5%",
  },
});
export default SettingsScreen;
