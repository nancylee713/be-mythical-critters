class Stark {
  constructor(name, location) {
    this.name = name;
    this.location = location || 'Winterfell';
    this.safe = false;
  }

  houseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }
}

module.exports = Stark;
