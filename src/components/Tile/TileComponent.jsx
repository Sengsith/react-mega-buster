import React, { useState, useEffect } from "react";

import FighterComponent from "../Fighter/FighterComponent";
import AttackComponent from "../Attack/AttackComponent";

import styles from "./tile_component.module.scss";

const TileComponent = ({
  tile,
  player,
  playerCurrentTileIndex,
  busterCurrentTileIndex,
}) => {
  const [isPlayerOnTile, setIsPlayerOnTile] = useState(false);
  const [isBusterOnTile, setIsBusterOnTile] = useState(null);

  useEffect(() => {
    // Use playerCurrentTileIndex state to work against stale closures(?)
    const newIsPlayerOnTile =
      tile.currentTileIndex.i === playerCurrentTileIndex?.i &&
      tile.currentTileIndex.j === playerCurrentTileIndex?.j;
    setIsPlayerOnTile(newIsPlayerOnTile);
  }, [playerCurrentTileIndex]);

  // useEffect(() => {
  //   // Check each element in attacks array if they are on a tile
  //   const newIsAttacksOnTile = attacks.some((attack) => {
  //     return attack.isAttackOnCurrentTile(tile.currentTileIndex);
  //   });
  //   setIsAttacksOnTile(newIsAttacksOnTile);
  // }, [attacks]);

  useEffect(() => {
    const newIsBusterOnTile =
      tile.currentTileIndex.i === busterCurrentTileIndex?.i &&
      tile.currentTileIndex.j === busterCurrentTileIndex?.j;
    setIsBusterOnTile(newIsBusterOnTile);
  }, [busterCurrentTileIndex]);

  // Height and width taken from constructor, default = 100px
  const tileStyle = {
    height: `${tile.tileSize}px`,
    width: `${tile.tileSize}px`,
    border: `3px solid ${tile.borderColor}`,
  };

  // If the currentTileIndex of attack and the currentTileIndex of the tile is the same, then we render out the attack
  return (
    <div className={styles.tile} style={tileStyle}>
      {isPlayerOnTile && <FighterComponent player={player} />}
      {isBusterOnTile && <AttackComponent />}
    </div>
  );
};

export default TileComponent;
