import React from "react";

import Tile from "../../classes/Tile";

import styles from "./tile_component.module.scss";

const TileComponent = () => {
  const tile = new Tile();

  // Height and width taken from constructor, default = 100px
  const tileStyle = {
    height: `${tile.height}px`,
    width: `${tile.width}px`,
  };

  return (
    <>
      <div className={styles.tile} style={tileStyle}></div>
    </>
  );
};

export default TileComponent;
