class Fighter {
  constructor({ health, tag, size, currentTileIndex }) {
    this.health = health;
    this.tag = tag;
    this.size = size;
    // Default spawn index position of player
    this.currentTileIndex = currentTileIndex;
    // information about player's buster
    this.buster = {
      damage: 1,
      size: 25,
      timePerTile: 25,
      currentTileIndex: {},
    };
    this.isFiring = false;
  }

  moveUp() {
    const newCurrentTileIndex = {
      i: this.currentTileIndex.i <= 0 ? 0 : this.currentTileIndex.i - 1,
      j: this.currentTileIndex.j,
    };
    return newCurrentTileIndex;
  }
  moveLeft() {
    const newCurrentTileIndex = {
      i: this.currentTileIndex.i,
      j: this.currentTileIndex.j <= 0 ? 0 : this.currentTileIndex.j - 1,
    };
    return newCurrentTileIndex;
  }
  moveDown() {
    const newCurrentTileIndex = {
      i: this.currentTileIndex.i >= 2 ? 2 : this.currentTileIndex.i + 1,
      j: this.currentTileIndex.j,
    };
    return newCurrentTileIndex;
  }
  moveRight() {
    const newCurrentTileIndex = {
      i: this.currentTileIndex.i,
      j: this.currentTileIndex.j >= 2 ? 2 : this.currentTileIndex.j + 1,
    };
    return newCurrentTileIndex;
  }
}

export default Fighter;
