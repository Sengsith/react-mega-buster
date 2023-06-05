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

  return (
    <div className={styles.tile} style={tileStyle}>
      {tile.currentTileIndex.i === player.currentTileIndex.i &&
        tile.currentTileIndex.j === player.currentTileIndex.j && (
          <FighterComponent player={player} />
        )}
    </div>
  );
};

export default TileComponent;
