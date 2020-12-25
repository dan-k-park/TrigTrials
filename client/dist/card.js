class Card {
  constructor() {
    this.type = Math.floor(Math.random() * 3) + 1
    this.stats = {attack: Math.floor(Math.random() * 15) + 1}
    this.cardObject = {}

    this.makeCard();
  }

  createDiv = () => {
    return document.createElement(div)
  }

  makeCard = () => {
    let cardDiv = this.createDiv()
    let cardBody = this.createDiv()
    cardDiv.classList.add('card')
    cardDiv.classList.add('h-100')
    cardDiv.classList.add('bg-gradient')
    cardBody.classList.add('card-body')
    switch (this.type) {
      case 1:
        this.stats["defense"] = Math.floor(Math.random() * 5) + 1
        cardDiv.classList.add('block-card')
        break
      case 2:
        this.stats["healing"] = Math.floor(Math.random() * 6) + 1
        cardDiv.classList.add('healing-card')
      case 3:
        this.stats["thorns"] = Math.floor(Math.random() * 3) + 1
        cardDiv.classList.add('thorn-card')
      case 4:
        this.stats["poison"] = Math.floor(Math.random() * 5) + 1;
        cardDiv.classList.add('poison-card')
      default:
        this.stats["attack"] = this.stats["attack"] * 2
        cardDiv.classList.ad('attack-card')
        return
    }
    
    

  }
}