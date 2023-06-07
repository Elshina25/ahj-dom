export default class GamePlay {
  constructor(element) {
    this.element = element;
    this.boardSize = 4;
    this.cells = [];
  }

  drawField() {
    const boardsize = Math.pow(this.boardSize, 2);
    for (let i = 0; i < boardsize; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.element.appendChild(cell);
    }
    this.cells = Array.from(this.element.children);
  }
}
