class Tile {
  constructor({ borderColor, currentTileIndex }) {
    this.borderColor = borderColor;
    this.currentTileIndex = currentTileIndex;

    this.tileSize = 150;
    // this.gameObjs = {
    //   playerObj: {},
    //   enemyObj: {},
    //   attackObjs: [],
    // };
  }
}

export default Tile;
