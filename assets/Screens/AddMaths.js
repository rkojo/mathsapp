import React, { useState } from "react";
import { StyleSheet, FlatList, Alert, TextInput } from "react-native";
import AppSquares from "../Components/AppSquares";
import AppView from "../Components/AppView";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";
import data from "../Settings/Data";
import score from "../Settings/Score";

function AddMaths({ route, navigation }) {
  const [input, setinput] = useState(data.showinput());
  const [text, settext] = useState(score.showscore());
  const [total, settotal] = useState(data.showTotal());
  const [value, setvalue] = useState(data.showfirst());
  const [displayinput, setdisplay] = useState("???");

  const compare = () => {
    if (data.addvalues() == true) {
      Alert.alert("Correct", "Nice Job!");
      score.add();
      data.new();
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
      <AppText>score = {text}</AppText>
      <AppText style={styles.total}>{total}</AppText>
      <AppText style={styles.maths}>
        {value} + {displayinput}
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

export default AddMaths;
