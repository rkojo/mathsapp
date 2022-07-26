import React, { useState } from "react";
import { StyleSheet, FlatList, Alert, TextInput } from "react-native";
import AppView from "../Components/AppView";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";
import data from "../Settings/Data";
import score from "../Settings/Score";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppColor from "../Components/AppColor";

function SubMaths({ route, navigation }) {
  const getdata = async () => {
    try {
      const value = await AsyncStorage.getItem("SubHS");
      console.log("value = " + parseInt(value));
      if (value !== null) {
        let test = parseInt(value);
        console.log("test = " + test);
        sethighscore(test);
      } else {
        setdata(0);
        value = await AsyncStorage.getItem("SubHS");
        sethighscore(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setdata = async (value) => {
    try {
      await AsyncStorage.setItem("SubHS", JSON.stringify(value));
      console.log("SCORE: " + AsyncStorage.getItem("SubHS"));
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
    if (data.subvalues() == true) {
      Alert.alert("Correct", "Nice Job!");
      score.add();
      setscore(score.showscore());
      checkScore(score.showscore());
      data.newminus();
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
      <AppText style={styles.scores}>Highscore = {highscore}</AppText>
      <AppText>Score = {currentscore}</AppText>
      <AppText style={styles.maths}>
        {value} - {zero}
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

export default SubMaths;
