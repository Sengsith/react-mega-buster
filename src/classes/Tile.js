class Tile {
  constructor(borderColor) {
    this.tileSize = 150;
    this.borderColor = borderColor;
    this.gameObjs = {
      playerObj: {},
      enemyObj: {},
      attackObjs: [],
    };
  }
}

export default Tile;
