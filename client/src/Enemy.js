class Enemy {
  constructor(round) {
    this.round = round
    this.type = Math.floor(Math.random() * 5) + 1
    this.attributes = this.createAttributes()
  }

  createAttributes = () => {
    // Types
    // 1: thorn guys
    // 2: rage guys
    // 3: defense guys
    // 4: healers
    // 5: strong guy
    // default regular guys

    let attributes = { 
      health: Math.ceil(this.round * (Math.random())), 
      attack: Math.ceil(this.round * (Math.random())),
      defense: 0, 
      rageBoost: 0,
      thorns: 0,
      healing: 0
    } 

    const multiplier = Math.floor(Math.random() * this.round) + 1;

    switch (this.type) {
      case 1:
        attributes.thorns = multiplier
        break;
      case 2:
        attributes.rageBoost = multiplier
        break;
      case 3:
        attributes.defense = multiplier
        break;
      case 4:
        attributes.healing = multiplier
        break;
      case 5:
        attributes.attack = attributes.attack * multiplier
      default:
        break;
    }
  }

}