import React, { useState, useEffect } from "react";

import FighterComponent from "../Fighter/FighterComponent";
import AttackComponent from "../Attack/AttackComponent";

import styles from "./tile_component.module.scss";

const TileComponent = ({ tile, player, attacks }) => {
  const [isPlayerOnTile, setIsPlayerOnTile] = useState(false);
  const [isAttacksOnTile, setIsAttacksOnTile] = useState([]);

  useEffect(() => {
    const newIsPlayerOnTile =
      tile.currentTileIndex.i === player.currentTileIndex.i &&
      tile.currentTileIndex.j === player.currentTileIndex.j;
    setIsPlayerOnTile(newIsPlayerOnTile);

    const newIsAttacksOnTile = attacks.map((attack) => {
      return attack.isAttackOnTile;
    });
    setIsAttacksOnTile(newIsAttacksOnTile);
  }, [player, attacks]);

  // Height and width taken from constructor, default = 100px
  const tileStyle = {
    height: `${tile.tileSize}px`,
    width: `${tile.tileSize}px`,
    border: `3px solid ${tile.borderColor}`,
  };

  return (
    <div className={styles.tile} style={tileStyle}>
      {isPlayerOnTile && <FighterComponent player={player} />}
      {isAttacksOnTile && <AttackComponent />}
    </div>
  );
};

export default TileComponent;
