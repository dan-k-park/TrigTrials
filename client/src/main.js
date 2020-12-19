const get = (id) => document.getElementById(id)

const currentRound = 1;
const health = 100;

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
    newRound(currentRound, gameDiv);
  });
})

const newRound = () => {
  const numEnemies = Math.floor(Math.random() * 5) + 1
  const enemyLineup = get('enemy-lineup')  
  console.log(numEnemies)
  for (let i = 1; i <= numEnemies; i++) {
    let enemy = new Enemy(currentRound);
    const enemyCard = get(`${i}`)
  }
}