import React from "react";

import "../../classes/Fighter";

import styles from "./fighter.module.scss";

const FighterComponent = ({ player }) => {
  const playerStyle = {
    height: `${player.size}px`,
    width: `${player.size}px`,
    backgroundColor: "orange",
  };

  return <div className={styles.fighter} style={playerStyle}></div>;
};

export default FighterComponent;
