class Fighter {
  constructor({ health, tag, size, currentTileIndex }) {
    this.health = health;
    this.tag = tag;
    this.size = size;
    // Default spawn index position of player
    this.currentTileIndex = currentTileIndex;
  }
}

export default Fighter;
