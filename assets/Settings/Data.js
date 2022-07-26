class Data {
  constructor() {
    this.data = [0, 0, 0];
  }
  changezero(number) {
    this.data[0] = number;
  }
  changefirst(number) {
    this.data[1] = number;
  }
  changeinput(number) {
    this.data[2] = number;
  }
  showzero() {
    return this.data[0];
  }
  showfirst() {
    return this.data[1];
  }
  showinput() {
    return this.data[2];
  }
  reset() {
    for (i = 0; i < this.data.length; i++) {
      this.data[1] = 0;
    }
  }

  clearInput() {
    this.data[2] = 0;
  }

  addvalues() {
    //add randomised values. if equal to user input, return true.
    const sum = this.data[1] + this.data[0];
    if (sum == this.data[2]) {
      return true;
    } else {
      return false;
    }
  }
  subvalues() {
    const value = this.data[1] - this.data[0];
    if (value == this.data[2]) {
      return true;
    } else {
      return false;
    }
  }

  mulvalues() {
    const value = this.data[0] * this.data[1];
    if (value == this.data[2]) {
      return true;
    } else {
      return false;
    }
  }

  divvalues() {
    const value = this.data[0] / this.data[1];
    if (value == this.data[2]) {
      return true;
    } else {
      return false;
    }
  }

  newminus() {
    this.data[0] = Math.floor(Math.random() * 1000 + 1);
    this.data[1] = Math.floor(
      Math.random() * (10000 - this.data[0]) + this.data[0]
    );
    this.data[2] = 0;
  }

  newadd() {
    //add data[0] and data[1]. data[2] used to add them up.
    this.data[0] = Math.floor(Math.random() * 1000 + 1);
    this.data[1] = Math.floor(Math.random() * 1000 + 1);
    this.data[2] = 0;
  }

  newmul() {
    //random value
    this.data[1] = Math.floor(Math.random() * 30 + 1);
    //random value multiplied by a random value of 30.
    this.data[0] = Math.floor(Math.random() * 30 + 1);
    this.data[2] = 0;
  }

  newdiv() {
    this.data[1] = Math.floor(Math.random() * 30 + 1);
    this.data[0] = Math.floor(this.data[1] * Math.floor(Math.random() * 30));
    this.data[2] = 0;
  }
}
const currentdata = new Data();
export default currentdata;
