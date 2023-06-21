import React from "react";

import "../../classes/Fighter";

import styles from "./fighter.module.scss";

const FighterComponent = ({ player, enemy }) => {
  const fighterStyle = {
    height: player ? `${player?.size}px` : `${enemy?.size}px`,
    width: player ? `${player?.size}px` : `${enemy?.size}px`,
    backgroundColor: player ? "orange" : "green",
  };

  return <div className={styles.fighter} style={fighterStyle}></div>;
};

export default FighterComponent;
