import React, { useState } from "react";
import { StyleSheet, FlatList, Alert, TextInput } from "react-native";
import AppSquares from "../Components/AppSquares";
import AppView from "../Components/AppView";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";
import data from "../Settings/Data";
import score from "../Settings/Score";
import AsyncStorage from "@react-native-async-storage/async-storage";

function MulMaths({ route, navigation }) {
  const getdata = async () => {
    try {
      const value = await AsyncStorage.getItem("MulHS");
      console.log("value = " + parseInt(value));
      if (value !== null) {
        let test = parseInt(value);
        console.log("test = " + test);
        sethighscore(test);
      } else {
        setdata(0);
        value = await AsyncStorage.getItem("MulHS");
        sethighscore(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setdata = async (value) => {
    try {
      await AsyncStorage.setItem("MulHS", JSON.stringify(value));
      console.log("SCORE: " + AsyncStorage.getItem("MulHS"));
    } catch (e) {
      console.log(e);
    }
  };

  getdata();

  const [input, setinput] = useState(data.showinput());
  const [text, settext] = useState(score.showscore());
  const [total, settotal] = useState(data.showTotal());
  const [value, setvalue] = useState(data.showfirst());
  const [displayinput, setdisplay] = useState("???");
  const [highscore, sethighscore] = useState();

  const compare = () => {
    if (data.mulvalues() == true) {
      Alert.alert("Correct", "Nice Job!");
      score.add();
      data.newmul();
      setinput("");
      setdisplay("???");
      settext(score.showscore()),
        settotal(data.showTotal()),
        setvalue(data.showfirst());
    } else {
      Alert.alert("Incorrect", "try Again!");
    }
  };

  const textin = (value) => {
    data.changeinput(parseInt(value));
  };
  return (
    <AppView>
      <AppText style={styles.scores}>highscore = {highscore}</AppText>
      <AppText>score = {text}</AppText>
      <AppText style={styles.total}>{total}</AppText>
      <AppText style={styles.maths}>
        {value} X {displayinput}
      </AppText>
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
});

export default MulMaths;
