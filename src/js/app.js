// TODO: write code here
import GamePlay from "./gameplay/GamePlay";

document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelector(".board");
  let deadCount = 0;
  let lostCount = 0;
  let dead = document.querySelector(".dead-number");
  let lost = document.querySelector(".lost-number");
  const gameplay = new GamePlay(board);
  gameplay.drawField();

  const getRandom = () => Math.floor(Math.random() * gameplay.cells.length);
  const interval = setInterval(() => {
    let oneRandom = getRandom();
    gameplay.cells.forEach((el, i, arr) => {
      if (i === oneRandom) {
        if (el === arr[i]) {
          el.classList.add("cell-with-goblin");
        }
      } else {
        el.classList.remove("cell-with-goblin");
      }
    });
  }, 800);

  gameplay.cells.forEach((el) =>
    el.addEventListener("click", () => {
      if (el.classList.contains("cell-with-goblin")) {
        deadCount += 1;
        dead.textContent = deadCount;
        if (deadCount >= 10) {
          clearInterval(interval);
          alert("Вы забодали гоблина!");
          dead.textContent = 0;
          lost.textContent = 0;
        }
      } else {
        lostCount += 1;
        lost.textContent = lostCount;
        if (lostCount >= 10) {
          clearInterval(interval);
          alert("Гоблин не забодан!");
          dead.textContent = 0;
          lost.textContent = 0;
        }
      }
    })
  );
});
