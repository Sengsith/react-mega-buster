import React from "react";

import "../../classes/Fighter";

import styles from "./fighter.module.scss";

const FighterComponent = ({ player, enemy }) => {
  const playerStyle = {
    height: `${player.size}px`,
    width: `${player.size}px`,
    backgroundColor: "orange",
  };

  const enemyStyle = {
    height: `${enemy.size}px`,
    width: `${enemy.size}px`,
    backgroundColor: "green",
  };

  return <div className={styles.fighter} style={playerStyle}></div>;
};

export default FighterComponent;
