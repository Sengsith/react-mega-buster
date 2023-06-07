class Fighter {
  constructor({ health, tag, size, currentTileIndex }) {
    this.health = health;
    this.tag = tag;
    this.size = size;
    // Default spawn index position of player
    this.currentTileIndex = currentTileIndex;
  }

  moveUp() {
    const newFighter = new Fighter({
      ...this,
      currentTileIndex: {
        ...this.currentTileIndex,
        i: this.currentTileIndex.i <= 0 ? 0 : this.currentTileIndex.i - 1,
      },
    });
    return newFighter;
  }
  moveLeft() {
    const newFighter = new Fighter({
      ...this,
      currentTileIndex: {
        ...this.currentTileIndex,
        j: this.currentTileIndex.j <= 0 ? 0 : this.currentTileIndex.j - 1,
      },
    });
    return newFighter;
  }
  moveDown() {
    const newFighter = new Fighter({
      ...this,
      currentTileIndex: {
        ...this.currentTileIndex,
        i: this.currentTileIndex.i >= 2 ? 2 : this.currentTileIndex.i + 1,
      },
    });
    return newFighter;
  }
  moveRight() {
    const newFighter = new Fighter({
      ...this,
      currentTileIndex: {
        ...this.currentTileIndex,
        j: this.currentTileIndex.j >= 2 ? 2 : this.currentTileIndex.j + 1,
      },
    });
    return newFighter;
  }
}

export default Fighter;
