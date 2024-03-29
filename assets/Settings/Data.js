class Data {
  constructor() {
    this.data = [0, 0, 0];
    this.notation = null;
    this.mode = 0;
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
    //value / zero
    const value = this.data[1] / this.data[0];
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
    //needed for random - value needs to be higher.
    const temp = this.data[1];
    this.data[1] = this.data[0];
    this.data[0] = temp;
    this.data[2] = 0;
  }
  rand() {
    const rand = Math.random();
    if (rand >= 0 && rand < 0.25) {
      this.notation = "+";
      this.mode = 0;
    }
    if (rand >= 0.25 && rand < 0.5) {
      this.notation = "-";
      this.mode = 1;
    }
    if (rand >= 0.5 && rand < 0.75) {
      this.notation = "X";
      this.mode = 2;
    }
    if (rand >= 0.75) {
      this.notation = "/";
      this.mode = 3;
    }
  }

  randnew() {
    if (this.mode == 0) {
      this.newadd();
    }
    if (this.mode == 1) {
      this.newminus();
    }
    if (this.mode == 2) {
      this.newmul();
    }
    if (this.mode == 3) {
      this.newdiv();
    }
  }

  randcheck() {
    if (this.mode == 0) {
      return this.addvalues();
    }
    if (this.mode == 1) {
      return this.subvalues();
    }
    if (this.mode == 2) {
      return this.mulvalues();
    }
    if (this.mode == 3) {
      return this.divvalues();
    }
  }

  randret() {
    return this.mode;
  }

  randnot() {
    return this.notation;
  }
}

const currentdata = new Data();
export default currentdata;
