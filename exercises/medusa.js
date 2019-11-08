class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(person) {
    person.stoned = true;

    if (this.statues.length === 3) {
      this.statues[0].stoned = false;
      return this.statues
    }
    
    this.statues.push(person)
  }
}

module.exports = Medusa;
