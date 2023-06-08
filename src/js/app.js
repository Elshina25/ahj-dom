// TODO: write code here
import GamePlay from "./gameplay/GamePlay";

document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelector(".board");
  const gameplay = new GamePlay(board);
  gameplay.drawField();
  gameplay.onInterval();
  gameplay.onClick();
});
