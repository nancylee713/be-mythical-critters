class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length === 3) {
      this.riddles.shift();
    }

    this.riddles.push(riddle);
  }

  attemptAnswer(str) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === str) {
        this.riddles.splice(i, 1);
        if (this.riddles.length === 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${str}"???`
        }
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      }
    }

    this.heroesEaten = 1;
  }
}

module.exports = Sphinx;
