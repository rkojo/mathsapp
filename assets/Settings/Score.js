class Score {
  constructor() {
    this.score = 0;
  }

  add() {
    this.score = this.score + 1;
  }
  delete() {
    this.score = this.score - 1;
  }

  showscore() {
    return this.score;
  }

  reset() {
    this.score = 0;
  }
}
const score = new Score();
export default score;
