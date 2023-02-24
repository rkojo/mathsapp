import React, { useState } from "react";
import { StyleSheet, Alert, TextInput, View, Modal } from "react-native";
import AppView from "../Components/AppView";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";
import data from "../Settings/Data";
import score from "../Settings/Score";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppColor from "../Components/AppColor";

function DivMaths({ route, navigation }) {
  const getdata = async () => {
    try {
      const value = await AsyncStorage.getItem("DivHS");
      console.log("value = " + parseInt(value));
      if (value !== null) {
        let test = parseInt(value);
        console.log("test = " + test);
        sethighscore(test);
      } else {
        setdata(0);
        value = await AsyncStorage.getItem("DivHS");
        sethighscore(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setdata = async (value) => {
    try {
      await AsyncStorage.setItem("DivHS", JSON.stringify(value));
      console.log("SCORE: " + AsyncStorage.getItem("DivHS"));
    } catch (e) {
      console.log(e);
    }
  };

  getdata();

  const [input, setinput] = useState();
  const [currentscore, setscore] = useState(score.showscore());
  const [zero, setzero] = useState(data.showzero());
  const [value, setvalue] = useState(data.showfirst());
  const [displayinput, setdisplay] = useState("???");
  const [highscore, sethighscore] = useState();
  const [colour, setcolour] = useState(AppColor.white);
  const [result, setresult] = useState("         ");
  const [modalvisible, setmodalvisible] = useState(false);
  const [errors, seterrors] = useState(0);

  const resultcorrect = () => {
    setresult("  Correct");
    setcolour(AppColor.green);
  };

  const resultincorrect = () => {
    setresult("Incorrect");
    setcolour(AppColor.red);
  };

  function compare() {
    if (data.divvalues() == true) {
      resultcorrect();
      //Alert.alert("Correct", "Nice Job!", "", { cancelable: true });
      score.add();
      setscore(score.showscore());
      checkScore(score.showscore());
    } else {
      resultincorrect();
      seterrors((errors) => errors + 1);
    }
    if (errors > 1) {
      setmodalvisible(true);
    }
    data.newdiv();
    setinput("");
    setdisplay("???");
    setzero(data.showzero());
    setvalue(data.showfirst());
  }

  const gameEnd = () => {
    data.reset();
    data.newdiv();
    seterrors(0);
    score.reset();
    setzero(data.showzero());
    setvalue(data.showfirst());
    setcolour(AppColor.white);
    navigation.push("Div");
  };

  const gameLeave = () => {
    setscore(score.reset());
    seterrors(0);
    setcolour(AppColor.white);
    setzero(data.showzero());
    setvalue(data.showfirst());
    navigation.push("Home");
  };

  //checks if highscore is met.
  const checkScore = (value) => {
    console.log("currentscore = " + value);
    console.log("d " + highscore);
    if (highscore < value) {
      setdata(value);
      sethighscore(value);
    }
  };

  const textin = (value) => {
    data.changeinput(parseInt(value));
  };
  return (
    <AppView>
      <Modal visible={modalvisible} style={styles.modal}>
        <View style={styles.modalview}>
          <AppText style={styles.modaltext}>GAME OVER</AppText>
          <AppButton
            style={styles.modalbutton}
            title="Try Again"
            onPress={() => [setmodalvisible(!modalvisible), gameEnd()]}
          />
          <AppButton
            style={styles.modalbutton}
            title="Return Home!"
            onPress={() => [setmodalvisible(!modalvisible), gameLeave()]}
          />
        </View>
      </Modal>
      <View style={styles.spaces}>
        <AppButton
          style={styles.return}
          title={"return"}
          onPress={() => {
            navigation.push("Home");
          }}
          testID="SubButton"
        />
        <AppText style={styles.scores}> Highscore = {highscore} </AppText>
        <AppText style={styles.scores}> Score = {currentscore} </AppText>
        <AppText style={{ color: colour, fontSize: 35 }}> {result}</AppText>
      </View>
      <AppText style={styles.scores}>Errors = {errors}</AppText>
      <AppText style={styles.maths}>
        {value} / {zero}
      </AppText>
      <AppText style={styles.addvalue}> = </AppText>
      <View style={styles.view}>
        <AppText style={styles.zero}>{displayinput}</AppText>
        <View style={styles.viewbutton}>
          <AppButton
            title="Check Answer"
            style={styles.button}
            onPress={() => {
              data.changeinput(parseInt(input)), compare();
            }}
          />
        </View>
      </View>
      <AppText style={styles.addvalue}>What is the answer?</AppText>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="Enter your Value"
        keyboardType="numeric"
        autoFocus="true"
        blurOnSubmit={modalvisible}
        onChangeText={(textinput) => [
          setinput(textinput),
          textin(textinput),
          setdisplay(textinput),
        ]}
        onSubmitEditing={() => {
          data.changeinput(parseInt(input)), compare();
        }}
      />
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
  zero: {
    marginTop: "1%",
    textAlign: "center",
    fontSize: 100,
    fontWeight: "bold",
    color: AppColor.primaryColor,
  },
  maths: {
    textAlign: "center",
    fontSize: 60,
  },
  addvalue: {
    textAlign: "center",
    fontSize: 35,
    marginBottom: "1%",
    marginTop: "2%",
  },
  input: {
    marginBottom: "3%",
    backgroundColor: "#E0E0DF",
    borderRadius: 25,
    padding: 15,
    alignContent: "space-around",
    width: "100%",
    marginBottom: "3%",
  },
  scores: {
    fontSize: 20,
  },
  button: {
    width: 120,
  },
  view: {
    height: "20%",
    length: 30,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  viewbutton: {
    marginTop: "3.5%",
    marginLeft: "5%",
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
    width: "20%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  modaltext: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
    textAlign: "center",
  },
  modalbutton: {
    marginTop: "4%",
    alignSelf: "center",
  },
});

export default DivMaths;
