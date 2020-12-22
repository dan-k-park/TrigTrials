class Card {
  constructor() {
    this.type = Math.floor(Math.random() * 3) + 1
    this.stats = {attack: Math.floor(Math.random() * 15) + 1}

    this.updateStats();
  }

  updateStats = () => {
    switch (this.type) {
      case 1:
        this.stats["defense"] = Math.floor(Math.random() * 5) + 1
        break
      case 2:
        this.stats["healing"] = Math.floor(Math.random() * 6) + 1
      case 3:
        this.stats["thorns"] = Math.floor(Math.random() * 3) + 1
      default:
        return
    }
  }
}