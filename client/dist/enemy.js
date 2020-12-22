class Enemy {
  constructor(round) {
    this.round = round
    this.type = Math.floor(Math.random() * 5) + 1
    this.stats = {health: 100, attack: 10}
    this.multiplier = Math.floor(Math.random() * this.round) + 1;

    this.updateStats();
  }

  updateStats = () => {

    if (this.type == 1) {
      this.stats["thorns"] =this.multiplier
    } else if (this.type == 2) {
      this.stats["rageBoost"] =this.multiplier
    } else if (this.type == 3) {
      this.stats["defense"] =this.multiplier
    } else if (this.type == 4) {
      this.stats["healing"] =this.multiplier
    } else {
      this.stats.attack = this.stats.attack *this.multiplier
    }
  }
}