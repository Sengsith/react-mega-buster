import React from "react";

import Grid from "../../classes/Grid";
import TileComponent from "../Tile/TileComponent";

import styles from "./grid_component.module.scss";

const GridComponent = () => {
  const grid = new Grid();
  grid.initializeField();
  grid.initializePlayer();
  console.log(grid);

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
