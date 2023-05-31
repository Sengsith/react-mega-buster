class Tile {
  constructor(width = 100, height = 100) {
    this.width = width;
    this.height = height;
    this.gameObjs = {
      playerObj: {},
      enemyObj: {},
      attackObjs: [],
    };
  }
}

export default Tile;
