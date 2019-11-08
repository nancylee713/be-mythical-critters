class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.starksToProtect.length < 2) {
      if (this.home === stark.location) {
        stark.safe = true;
        this.huntsWhiteWalkers = false;
        this.starksToProtect.push(stark);
      }
    }
  }

  leave(stark) {
    var index = this.starksToProtect.indexOf(stark);
    if (index.length !== 0) { this.starksToProtect.splice(index, 1) }
    stark.safe = false;
  }
}

module.exports = Direwolf;
