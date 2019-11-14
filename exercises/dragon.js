class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true
    this.count = 0;
  }

  eat() {
    this.count += 1;
    if (this.count > 2) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
