import React from "react";

import styles from "./tile_component.module.scss";

const TileComponent = ({ tile }) => {
  // Height and width taken from constructor, default = 100px
  const tileStyle = {
    height: `${tile.tileSize}px`,
    width: `${tile.tileSize}px`,
    borderColor: `${tile.borderColor}`,
  };

  return <div className={styles.tile} style={tileStyle}></div>;
};

export default TileComponent;
