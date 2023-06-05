// TODO: write code here

import GamePlay from "./gameplay/GamePlay";

document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('.board');
  const positions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let deadCount = 0;
  let lostCount = 0;
  let dead = document.querySelector('.dead-number');
  let lost = document.querySelector('.lost-number');
  const gameplay = new GamePlay(board);
  gameplay.drawField();

  const randomMove = (positions) => {
   return positions[Math.floor(Math.random() * positions.length)]
  }

  Array.from(board.children).forEach(el => {
    el.classList.remove('cell-with-goblin');
    setInterval(() => {
      el.classList.add('cell-with-goblin')
    }, 2000)
  })

  const interval = setInterval(() => {
    randomMove(positions)
  }, 2000);


  board.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell-with-goblin')) {
      deadCount += 1;
      dead.textContent = deadCount;
    } else {
      lostCount += 1;
      lost.textContent = lostCount;
    }
  })
})


