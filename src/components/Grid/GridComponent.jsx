import React, { useState, useEffect } from "react";

import Grid from "../../classes/Grid";
import Fighter from "../../classes/Fighter";
import TileComponent from "../Tile/TileComponent";

import styles from "./grid_component.module.scss";

const GridComponent = () => {
  const [player, setPlayer] = useState(null);
  const [attacks, setAttacks] = useState([]);

  const grid = new Grid();
  grid.initializeField();

  useEffect(() => {
    const player = new Fighter({
      health: 100,
      tag: "player",
      size: 75,
      currentTileIndex: { i: 1, j: 1 },
    });
    setPlayer(player);

    const handleKeyDown = (e) => {
      if ((e.key === "w" || e.key === "W") && !e.repeat) {
        // Decrement player.currentTileIndex.i
        setPlayer((prevPlayer) => prevPlayer.moveUp());
      } else if ((e.key === "a" || e.key === "A") && !e.repeat) {
        // Decrement player.currentTileIndex.j
        setPlayer((prevPlayer) => prevPlayer.moveLeft());
      } else if ((e.key === "s" || e.key === "S") && !e.repeat) {
        // Increment player.currentTileIndex.i
        setPlayer((prevPlayer) => prevPlayer.moveDown());
      } else if ((e.key === "d" || e.key === "D") && !e.repeat) {
        // Increment player.currentTileIndex.j
        setPlayer((prevPlayer) => prevPlayer.moveRight());
      } else if (e.key === " " && !e.repeat) {
        // user hits space bar
        // call the fire function
        // spawn a projectile in tile in front of the player
        // create an object using the attack class
        // after a certain amount of time, iterate through row, delete at the end of tile
        // projectile may have to be a class and component, and render on tile if it exists
        const projectile = new Attack({
          damage: player.buster.damage,
          size: player.buster.size,
          timePerTile: player.buster.timePerTile,
          currentTileIndex: { ...player.buster.currentTileIndex },
        });
        setAttacks((prevAttacks) => [...[prevAttacks, projectile]]);
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
        attacks &&
        grid.field.map((row, index) => {
          return (
            <div key={index} className={styles.grid_row}>
              {row.map((tile, index) => {
                return (
                  <TileComponent
                    key={index}
                    tile={tile}
                    player={player}
                    attacks={attacks}
                  />
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default GridComponent;
