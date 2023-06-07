// TODO: write code here
import GamePlay from "./gameplay/GamePlay";

document.addEventListener("DOMContentLoaded", () => {
  const gameplay = new GamePlay(board);
  gameplay.drawField();
  gameplay.onInterval()
  gameplay.onClick();
})
