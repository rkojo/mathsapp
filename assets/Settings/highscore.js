import * as db from "../../www/highscore.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

class highscore {
  // db = SQLite.openDatabase();

  getdata = async () => {
    try {
      const value = await AsyncStorage.getItem("AddHS");
      console.log("value = " + parseInt(value));
      if (value == null) {
        this.setdata(0);
        const value = await AsyncStorage.getItem("AddHS");
        return value;
      }
      let test = parseInt(value);
      console.log("test = " + test);
      return test;
    } catch (e) {
      console.log(e);
    }
  };

  setdata = async (value) => {
    try {
      await AsyncStorage.setItem("AddHS", JSON.stringify(value));
      console.log("SCORE: " + AsyncStorage.getItem("AddHS"));
    } catch (e) {
      console.log(e);
    }
  };
}

const HighScore = new highscore();
export default HighScore;
