import React, { useEffect } from "react";

import Grid from "../../classes/Grid";
import TileComponent from "../Tile/TileComponent";

import styles from "./grid_component.module.scss";

const GridComponent = () => {
  const grid = new Grid();
  grid.initializeField();
  grid.initializePlayer();
  console.log(grid);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "w") {
        grid.player.moveUp();
      } else if (e.key === "a") {
        grid.player.moveLeft();
      } else if (e.key === "s") {
        grid.player.moveDown();
      } else if (e.key === "d") {
        grid.player.moveRight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.grid_wrapper}>
      {grid.field.map((row, index) => {
        return (
          <div key={index} className={styles.grid_row}>
            {row.map((tile, index) => {
              return (
                <TileComponent key={index} tile={tile} player={grid.player} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GridComponent;
