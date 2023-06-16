import React, { useState, useEffect } from "react";

import Grid from "../../classes/Grid";
import Fighter from "../../classes/Fighter";
import Attack from "../../classes/Attack";
import TileComponent from "../Tile/TileComponent";

import styles from "./grid_component.module.scss";

const GridComponent = () => {
  const [attacks, setAttacks] = useState([]);
  const [playerCurrentTileIndex, setPlayerCurrentTileIndex] = useState(null);

  const grid = new Grid();
  grid.initializeField();

  const player = new Fighter({
    health: 100,
    tag: "player",
    size: 75,
    currentTileIndex: { i: 1, j: 1 },
  });

  useEffect(() => {
    setPlayerCurrentTileIndex(player.currentTileIndex);

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
      } else if (e.key === " " && !e.repeat) {
        const projectile = new Attack({
          damage: player.buster.damage,
          size: player.buster.size,
          timePerTile: player.buster.timePerTile,
          currentTileIndex: {
            i: player.currentTileIndex.i,
            j: player.currentTileIndex.j + 1,
          },
        });
        // setAttacks((prevAttacks) => [...prevAttacks, projectile]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
                    playerCurrentTileIndex={playerCurrentTileIndex}
                    attacks={attacks}
                  />
                );
              })}
            </div>
          );
        })}
      <div>
        {playerCurrentTileIndex &&
          `${playerCurrentTileIndex.i}, ${playerCurrentTileIndex.j}`}
      </div>
    </div>
  );
};

export default GridComponent;
