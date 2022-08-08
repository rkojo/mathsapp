import React, { useState } from "react";
import { StyleSheet, Alert, TextInput, View } from "react-native";
import AppView from "../Components/AppView";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";
import data from "../Settings/Data";
import score from "../Settings/Score";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppColor from "../Components/AppColor";

function RandMaths({ route, navigation }) {
  //gets data from asyncstorage
  const getdata = async () => {
    try {
      const value = await AsyncStorage.getItem("RandHS");
      console.log("value = " + parseInt(value));
      if (value !== null) {
        let test = parseInt(value);
        console.log("test = " + test);
        sethighscore(test);
      } else {
        //if no data, it asks to set data and retreive and then sets high score.
        setdata(0);
        value = await AsyncStorage.getItem("RandHS");
        sethighscore(value);
      }
    } catch (e) {
      console.log(e);
    }
  };
  //used to give value to Highscore. DO NOT DELETE.
  getdata();

  //sets data if a high score is reached or needs new score.
  const setdata = async (value) => {
    try {
      await AsyncStorage.setItem("RandHS", JSON.stringify(value));
      console.log("SCORE: " + AsyncStorage.getItem("RandHS"));
    } catch (e) {
      console.log(e);
    }
  };

  const [input, setinput] = useState(data.showinput());
  const [currentscore, setscore] = useState(score.showscore());
  const [zero, setzero] = useState(data.showzero());
  const [value, setvalue] = useState(data.showfirst());
  const [displayinput, setdisplay] = useState("???");
  const [highscore, sethighscore] = useState(0);
  const [notation, setnotation] = useState(data.randnot());

  //compares by calling data. If correct, it adds to score, checks if highscore, resets screen.
  const compare = () => {
    if (data.randcheck() == true) {
      Alert.alert("Correct", "Nice Job!", "", { cancelable: true });
      score.add();
      setscore(score.showscore());
      checkScore(score.showscore());
      data.rand();
      data.randnew();
      setinput("");
      setdisplay("???");
      setnotation(data.randnot());
      setzero(data.showzero());
      setvalue(data.showfirst());
    } else {
      Alert.alert("Incorrect", "Score Reset!", "", { cancelable: true });
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

  //makes it into an integer.
  const textin = (value) => {
    data.changeinput(parseInt(value));
  };

  return (
    <AppView>
      <AppText style={styles.scores}>Highscore = {highscore}</AppText>
      <AppText style={styles.scores}>Score = {currentscore}</AppText>
      <AppText style={styles.maths}>
        {value} {notation} {zero}
      </AppText>
      <View style={styles.view}>
        <AppText style={styles.zero}>{displayinput}</AppText>
        <AppButton
          title="Check Answer"
          style={styles.button}
          onPress={() => {
            data.changeinput(parseInt(input)), compare();
          }}
        />
      </View>
      <AppText style={styles.zero}>{displayinput}</AppText>
      <AppText style={styles.addvalue}>What is the answer?</AppText>
      <TextInput
        style={styles.input}
        placeholder="Enter your Value"
        keyboardType="numeric"
        value={input}
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
  zero: {
    marginTop: 10,
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
    marginBottom: "5%",
    backgroundColor: "#E0E0DF",
    borderRadius: 25,
    padding: 15,
    alignContent: "space-around",
    width: "100%",
    marginBottom: "5%",
  },
  scores: {
    fontSize: 20,
  },
  button: {
    marginLeft: "15%",
    width: 120,
    marginTop: "20%",
  },
  view: {
    height: "30%",
    length: 30,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});

export default RandMaths;
