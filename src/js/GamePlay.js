class Gameplay {
    constructor() {
        this.boardSize = 4;
        this.cells = [];
        this.boardEl = document.querySelector('.game-container');
    }

    calcCellPosition(index) {
        if (index === 0) {
            return 'top-left';
        } if (index === 3) {
            return 'top-right';
        } if (index >= 1 && index <= 2) {
            return 'top';
        } if (index === 12) {
            return 'bottom-left';
        } if (index === 15) {
            return 'bottom-right';
        } if (index >= 13 && index <= 14) {
            return 'bottom';
        } if (index % 4 === 0) {
            return 'left';
        } if (index % 4 === 3) {
            return 'right';
        }
        return 'center';
    }





    drawGameBoard() {
        for (let i = 0; i < this.boardSize ** 2; i += 1) {
            const cellEl = document.createElement('div');
            cellEl.classList.add('cell', `${this.calcCellPosition(i, this.boardSize)}`);
            this.boardEl.appendChild(cellEl);
        }
        this.cells = Array.from(this.boardEl.children);
    }
}