class Attack {
  constructor({ damage = 1, size = 25, timePerTile = 200, currentTileIndex }) {
    this.damage = damage;
    this.size = size;
    this.timePerTile = timePerTile;
    this.currentTileIndex = currentTileIndex;
  }

  move() {
    // Movement logic of the projectile
    // Update currentTileIndex based on the movement direction
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
