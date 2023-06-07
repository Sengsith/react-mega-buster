// rows and cols to determine how big the grid will be
// import tile class, create a tile for each grid slot

import Tile from "./Tile";

class Grid {
  constructor(rows = 3, cols = 6) {
    this.rows = rows;
    this.cols = cols;
    this.field = [];
  }

  // Initialize a grid based on how many rows and cols
  initializeField() {
    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.cols; j++) {
        const currentTileIndex = { i: i, j: j };
        row.push(
          new Tile({
            borderColor: j >= 3 ? "red" : "blue",
            currentTileIndex: currentTileIndex,
          })
        );
      }
      this.field.push(row);
    }
  }
}

export default Grid;
