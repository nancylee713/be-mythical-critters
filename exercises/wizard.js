class Wizard {
  constructor(obj) {
    for (var field in obj) {
      this.bearded = true;
      this.isRested = true;
      this.count = 0;
      this[field] = obj[field];
    }
  }

  incantation(str) {
    return str.toUpperCase();
  }

  cast() {
    this.count += 1;
    if (this.count > 2) {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    } else {
      return 'MAGIC BULLET';
    }
  }
}

module.exports = Wizard;
