import React from "react";

import FighterComponent from "../Fighter/FighterComponent";

import styles from "./tile_component.module.scss";

const TileComponent = ({ tile, player }) => {
  // Height and width taken from constructor, default = 100px
  const tileStyle = {
    height: `${tile.tileSize}px`,
    width: `${tile.tileSize}px`,
    border: `3px solid ${tile.borderColor}`,
  };

  // Check each tile if it has a player on it, if it does, then render it
  const isPlayerOnTile =
    tile.currentTileIndex.i === player.currentTileIndex.i &&
    tile.currentTileIndex.j === player.currentTileIndex.j;

  return (
    <div className={styles.tile} style={tileStyle}>
      {isPlayerOnTile && <FighterComponent player={player} />}
    </div>
  );
};

export default TileComponent;
