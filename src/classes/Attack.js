class Attack {
  constructor({ damage = 1, size = 25, timePerTile = 200, currentTileIndex }) {
    this.damage = damage;
    this.size = size;
    this.timePerTile = timePerTile;
    this.currentTileIndex = currentTileIndex;
  }

  // setState(func)
  async move(setState) {
    // Movement logic of the projectile
    // Update currentTileIndex based on the movement direction

    // Delay function for the projectile
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    for (let i = this.currentTileIndex.j; i <= 5; i++) {
      await delay(this.timePerTile);
      const newCurrentTileIndex = {
        i: this.currentTileIndex.i,
        j: this.currentTileIndex.j + 1,
      };
      this.currentTileIndex = newCurrentTileIndex;
      setState(newCurrentTileIndex);
    }
  }

  isExpired() {
    // Check if projectile has reached the end of row/lifespan
    return this.currentTileIndex.j >= 5;
  }

  isAttackOnCurrentTile(currentTileIndex) {
    return (
      currentTileIndex.i === this.currentTileIndex.i &&
      currentTileIndex.j === this.currentTileIndex.j
    );
  }
}

export default Attack;
