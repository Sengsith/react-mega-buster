class Fighter {
  constructor({ health, tag, size, currentTileIndex }) {
    this.health = health;
    this.tag = tag;
    this.size = size;
    // Default spawn index position of player
    this.currentTileIndex = currentTileIndex;
  }

  moveUp() {
    console.log("up");
    this.currentTileIndex = {
      ...this.currentTileIndex,
      i: this.currentTileIndex.i - 1,
    };
    console.log(this.currentTileIndex);
  }
  moveLeft() {
    console.log("left");
    this.currentTileIndex = {
      ...this.currentTileIndex,
      j: this.currentTileIndex.j - 1,
    };
    console.log(this.currentTileIndex);
  }
  moveDown() {
    console.log("down");
    this.currentTileIndex = {
      ...this.currentTileIndex,
      i: this.currentTileIndex.i + 1,
    };
    console.log(this.currentTileIndex);
  }
  moveRight() {
    console.log("right");
    this.currentTileIndex = {
      ...this.currentTileIndex,
      j: this.currentTileIndex.j + 1,
    };
    console.log(this.currentTileIndex);
  }
}

export default Fighter;
