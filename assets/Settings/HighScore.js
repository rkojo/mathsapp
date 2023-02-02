import AsyncStorage from "@react-native-async-storage/async-storage";
class HighScore {
  Constructor() {
    this.HighScore = 0;
  }

  async getdata(gameMode) {
    try {
      const value = await AsyncStorage.getItem(gameMode);
      console.log("value = " + parseInt(value));
      if (value !== null) {
        let test = parseInt(value);
        console.log("test = " + test);
        this.HighScore = value;
      } else {
        setdata(0);
        value = await AsyncStorage.getItem(gameMode);
        this.HighScore = value;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async setdata(value) {
    try {
      await AsyncStorage.setItem("MulHS", JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  }

  getHighScore() {
    return this.HighScore;
  }
}

export default HighScore;
