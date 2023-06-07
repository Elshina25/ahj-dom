export default class GamePlay {
  constructor(element) {
    this.element = element;
    this.boardSize = 4;
    this.cells = [];
    this.onClick = this.onClick.bind(this);
    this.interval = null;
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

  getRandom() {
    return Math.floor(Math.random() * gameplay.cells.length)
  }

  onInterval() {
    this.interval = setInterval(() => {
      let oneRandom = this.getRandom();
      this.cells.forEach((el, i, arr) => {
        if (i === oneRandom) {
          if (el === arr[i]) {
            el.classList.add("cell-with-goblin");
          }
        } else {
          el.classList.remove("cell-with-goblin");
        }
      });
    }, 800);
  
  }

  onClick() {
    let deadCount = 0;
    let lostCount = 0;
    let dead = document.querySelector(".dead-number");
    let lost = document.querySelector(".lost-number");
    this.cells.forEach((el) =>
    el.addEventListener("click", () => {
      if (el.classList.contains("cell-with-goblin")) {
        deadCount += 1;
        dead.textContent = deadCount;
        if (deadCount >= 10) {
          clearInterval(this.interval);
          alert("Вы забодали гоблина!");
          dead.textContent = 0;
          lost.textContent = 0;
        }
      } else {
        lostCount += 1;
        lost.textContent = lostCount;
        if (lostCount >= 10) {
          clearInterval(this.interval);
          alert("Гоблин не забодан!");
          dead.textContent = 0;
          lost.textContent = 0;
        }
      }
    })
  );
  }
}
