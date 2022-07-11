class Data {
  constructor() {
    this.data = [0, 0, 0];
  }
  changeTotal(number) {
    this.data[0] = number;
  }
  changefirst(number) {
    this.data[1] = number;
  }
  changeinput(number) {
    console.log(number);
    this.data[2] = number;
  }
  showTotal() {
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
    const sum = this.data[1] + this.data[2];
    console.log(sum);
    if (sum == this.data[0]) {
      return true;
    } else {
      return false;
    }
  }
  new() {
    this.data[0] = Math.floor(Math.random() * 1000 + 1);
    this.data[1] = Math.floor(Math.random() * this.data[0]);
    this.data[2] = 0;
  }
}
const currentdata = new Data();
export default currentdata;
