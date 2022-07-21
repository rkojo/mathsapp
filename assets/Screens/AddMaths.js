import React, { useState } from "react";
import { StyleSheet, Alert, TextInput } from "react-native";
import AppView from "../Components/AppView";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";
import data from "../Settings/Data";
import score from "../Settings/Score";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AddMaths({ route, navigation }) {
  //gets data from asyncstorage
  const getdata = async () => {
    try {
      const value = await AsyncStorage.getItem("AddHS");
      console.log("value = " + parseInt(value));
      if (value !== null) {
        let test = parseInt(value);
        console.log("test = " + test);
        sethighscore(test);
      } else {
        //if no data, it asks to set data and retreive and then sets high score.
        setdata(0);
        value = await AsyncStorage.getItem("AddHS");
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
      await AsyncStorage.setItem("AddHS", JSON.stringify(value));
      console.log("SCORE: " + AsyncStorage.getItem("AddHS"));
    } catch (e) {
      console.log(e);
    }
  };

  const [input, setinput] = useState(data.showinput());
  const [currentscore, setscore] = useState(score.showscore());
  const [total, settotal] = useState(data.showTotal());
  const [value, setvalue] = useState(data.showfirst());
  const [displayinput, setdisplay] = useState("???");
  const [highscore, sethighscore] = useState();

  //compares by calling data. If correct, it adds to score, checks if highscore, resets screen.
  const compare = () => {
    if (data.addvalues() == true) {
      Alert.alert("Correct", "Nice Job!");
      score.add();
      data.newadd();
      setinput("");
      setdisplay("???");
      setscore(score.showscore());
      settotal(data.showTotal());
      setvalue(data.showfirst());
      checkScore(score.showscore());
    } else {
      Alert.alert("Incorrect", "try Again!");
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
      <AppText style={styles.scores}>highscore = {highscore}</AppText>
      <AppText style={styles.scores}>score = {currentscore}</AppText>
      <AppText style={styles.total}>{total}</AppText>
      <AppText style={styles.maths}>
        {value} + {displayinput}
      </AppText>
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
  total: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 100,
    fontWeight: "bold",
    color: "#3535BA",
  },
  maths: {
    textAlign: "center",
    fontSize: 50,
  },
  addvalue: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: "3%",
    marginTop: "3%",
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
});

export default AddMaths;
