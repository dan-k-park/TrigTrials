const get = (id) => document.getElementById(id)
const create = (element) => document.createElement(element)

const currentRound = 1;
const health = 100;
const poison = 0;

const enemies = []
const deck = []

document.addEventListener('DOMContentLoaded', () => {
  const menuBtns = get('menu-buttons')
  const gameDiv = get('game-div')
  const playBtn = get('play')
  const instructions = get('instructions');
  const leaderboard = get('leaderboard');

  playBtn.addEventListener('click', () => {
    menuBtns.classList.add('d-none');
    gameDiv.classList.remove('hidden');
    gameDiv.classList.add('container');
    gameDiv.classList.add('overflow-hidden')
    newRound(currentRound, gameDiv);
  });
})

const newRound = () => {
  const numEnemies = Math.floor(Math.random() * 5) + 1
  for (let i = 1; i <= numEnemies; i++) {
    const enemy = new Enemy(currentRound);
    enemies.push(enemy)
  }
  for (let i = 0; i < 10; i++) {
    const card = new Card(currentRound);
    deck.push(card)
  }
  makeEnemyCards();
  makePlayerCards();
}

// No images yet
const makeEnemyCards = () => {
  const enemyLineup = get('enemy-lineup')
  
  enemies.forEach(enemy => {
    let stats = enemy.stats;
    let enemyCard = get(`enemy-slot-${enemies.indexOf(enemy) + 1}`);
    let cardBodyDiv = create('div')
    let img = create('img')
    let statDiv = create('div')

    switch(enemy.type) {
      case 1:
        img.src = './assets/Thorn-Enemy.png'
      break;
      case 2:
        img.src = './assets/Enraged-Enemy.png'
      break;
      case 3:
        img.src = './assets/Block-Enemy.png'
      break;
      case 4:
        img.src = './assets/Healing-Enemy.png'
      break;
      default:
        img.src = './assets/Strong-Enemy.png'
      break;
    }
    for (let i = 0; i < Object.values(stats).length; i++) {
      let h6 = create('h6')
      h6.innerText = `${Object.keys(stats)[i].toUpperCase()}: ${Object.values(stats)[i]}`
      statDiv.appendChild(h6)
    }
    cardBodyDiv.classList.add('card-body')
    cardBodyDiv.appendChild(statDiv)
    enemyCard.appendChild(img)
    enemyCard.appendChild(cardBodyDiv)
  })
  enemyLineup.appendChild(enemyCard)
}

const getPlayerCards = () => {
  const playerDeck = get('player-deck');

  // Create 5 random indexes to choose from the deck array
  let randomFive = []
  for (let i = 0; i < 5; i++) {
    let n = Math.floor(Math.random() * deck.length) + 1
    while (randomFive.includes(n)) {
      n = Math.floor(Math.random() * deck.length) + 1
    }
    randomFive.push(n)
  }

  for (let i = 0; i < 5; i++) {
    let cardBodyDiv = get(`card-slot-${i + 1}`)
    
  }

}