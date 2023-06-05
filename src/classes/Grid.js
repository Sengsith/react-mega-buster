// rows and cols to determine how big the grid will be
// import tile class, create a tile for each grid slot

import Tile from "./Tile";
import Fighter from "./Fighter";

class Grid {
  constructor(rows = 3, cols = 6) {
    this.rows = rows;
    this.cols = cols;
    this.field = [];
    this.player = {};
  }

  // Initialize player in here
  initializePlayer() {
    this.player = new Fighter({
      health: 100,
      tag: "player",
      size: { width: 50, height: 50 },
      currentTileIndex: { i: 1, j: 1 },
    });
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
