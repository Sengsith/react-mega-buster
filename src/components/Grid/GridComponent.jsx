import React, { useState, useEffect, useRef } from "react";

import Grid from "../../classes/Grid";
import Fighter from "../../classes/Fighter";
import Attack from "../../classes/Attack";
import TileComponent from "../Tile/TileComponent";

import styles from "./grid_component.module.scss";

const GridComponent = () => {
  const [playerCurrentTileIndex, setPlayerCurrentTileIndex] = useState(null);
  const [busterCurrentTileIndex, setBusterCurrentTileIndex] = useState(null);
  const [enemyCurrentTileIndex, setEnemyCurrentTileIndex] = useState(null);

  const grid = new Grid();
  grid.initializeField();

  const player = new Fighter({
    health: 100,
    tag: "player",
    size: 75,
    currentTileIndex: { i: 1, j: 1 },
  });
  // Use useRef to update objects instead of accessing directly. Accessing directly caused unexpected behavior like returning and updating wrong values
  const playerRef = useRef(player);

  const enemy = new Fighter({
    health: 200,
    tag: "enemy",
    size: 75,
    currentTileIndex: { i: 1, j: 4 },
  });
  const enemyRef = useRef(enemy);

  const handleKeyDown = (e) => {
    if ((e.key === "w" || e.key === "W") && !e.repeat) {
      // Decrement player.currentTileIndex.i
      player.currentTileIndex = player.moveUp();
      setPlayerCurrentTileIndex(player.currentTileIndex);
    } else if ((e.key === "a" || e.key === "A") && !e.repeat) {
      // Decrement player.currentTileIndex.j
      player.currentTileIndex = player.moveLeft();
      setPlayerCurrentTileIndex(player.currentTileIndex);
    } else if ((e.key === "s" || e.key === "S") && !e.repeat) {
      // Increment player.currentTileIndex.i
      player.currentTileIndex = player.moveDown();
      setPlayerCurrentTileIndex(player.currentTileIndex);
    } else if ((e.key === "d" || e.key === "D") && !e.repeat) {
      // Increment player.currentTileIndex.j
      player.currentTileIndex = player.moveRight();
      setPlayerCurrentTileIndex(player.currentTileIndex);
    } else if (e.key === " " && !playerRef.current.isFiring) {
      playerRef.current.isFiring = true;
      const busterProjectile = new Attack({
        damage: player.buster.damage,
        size: player.buster.size,
        timePerTile: player.buster.timePerTile,
        currentTileIndex: {
          i: player.currentTileIndex.i,
          j: player.currentTileIndex.j + 1,
        },
      });
      // Update state for buster projectile
      setBusterCurrentTileIndex(busterProjectile.currentTileIndex);
      // Move the projectile forward
      busterProjectile.move(setBusterCurrentTileIndex);
    }
  };

  useEffect(() => {
    setPlayerCurrentTileIndex(player.currentTileIndex);
    setEnemyCurrentTileIndex(enemy.currentTileIndex);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // When projectile reaches end, set firing back to false
    if (busterCurrentTileIndex?.j > 5) {
      playerRef.current.isFiring = false;
    }
  }, [busterCurrentTileIndex]);

  return (
    <div className={styles.grid_wrapper}>
      {grid &&
        player &&
        grid.field.map((row, index) => {
          return (
            <div key={index} className={styles.grid_row}>
              {row.map((tile, index) => {
                return (
                  <TileComponent
                    key={index}
                    tile={tile}
                    player={player}
                    enemy={enemy}
                    playerCurrentTileIndex={playerCurrentTileIndex}
                    busterCurrentTileIndex={busterCurrentTileIndex}
                  />
                );
              })}
            </div>
          );
        })}
      <div>
        Player:{" "}
        {playerCurrentTileIndex &&
          `${playerCurrentTileIndex.i}, ${playerCurrentTileIndex.j}`}
        <br />
        Buster:{" "}
        {busterCurrentTileIndex &&
          `${busterCurrentTileIndex.i}, ${busterCurrentTileIndex.j}`}
      </div>
    </div>
  );
};

export default GridComponent;
