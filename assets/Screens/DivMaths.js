import React, { useState } from "react";
import { StyleSheet, FlatList, Alert, TextInput } from "react-native";
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

  const [input, setinput] = useState(data.showinput());
  const [currentscore, setscore] = useState(score.showscore());
  const [zero, setzero] = useState(data.showzero());
  const [value, setvalue] = useState(data.showfirst());
  const [displayinput, setdisplay] = useState("???");
  const [highscore, sethighscore] = useState();

  const compare = () => {
    if (data.divvalues() == true) {
      Alert.alert("Correct", "Nice Job!");
      score.add();
      setscore(score.showscore());
      checkScore(score.showscore());
      data.newdiv();
      setinput("");
      setdisplay("???");
      setzero(data.showzero());
      setvalue(data.showfirst());
    } else {
      Alert.alert("Incorrect", "Score Reset!");
      setscore(score.reset());
    }
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
      <AppText style={styles.scores}>highscore = {highscore}</AppText>
      <AppText>score = {currentscore}</AppText>
      <AppText style={styles.maths}>
        {zero} / {value}
      </AppText>
      <AppText style={styles.addvalue}> = </AppText>
      <AppText style={styles.zero}>{displayinput}</AppText>
      <AppText style={styles.addvalue}>What is the answer?</AppText>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="Enter your Value"
        keyboardType="numeric"
        onChangeText={(textinput) => [
          setinput(textinput),
          textin(textinput),
          setdisplay(textinput),
        ]}
        onSubmitEditing={() => {
          data.changeinput(parseInt(input)), compare();
        }}
      />
      <AppButton
        title="Check"
        onPress={() => {
          data.changeinput(parseInt(input)), compare();
        }}
      />
    </AppView>
  );
}

const styles = StyleSheet.create({
  zero: {
    textAlign: "center",
    fontSize: 100,
    fontWeight: "bold",
    color: AppColor.primaryColor,
  },
  maths: {
    textAlign: "center",
    fontSize: 50,
  },
  addvalue: {
    textAlign: "center",
    fontSize: 35,
    marginBottom: "1%",
    marginTop: "2%",
  },
  input: {
    marginBottom: "5%",
    backgroundColor: "#E0E0DF",
    borderRadius: 25,
    padding: 15,
    alignContent: "space-around",
    width: "100%",
    marginBottom: "5%",
  },
});

export default DivMaths;
