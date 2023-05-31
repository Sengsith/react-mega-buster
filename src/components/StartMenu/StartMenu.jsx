import React from "react";

import styles from "./start_menu.module.scss";

const StartMenu = ({ GAME_STATES, setGameState }) => {
  const onStartClick = () => {
    setGameState(GAME_STATES.BATTLE);
  };

  return (
    <div className={styles.start_menu_wrapper}>
      <h1 className="title">Mega Buster React Demo</h1>
      <p className={styles.instructions}>
        WASD to move around on the grid!
        <br />
        Space Bar to fire a projectile at the enemy!
      </p>
      <button onClick={onStartClick}>Start Game</button>
    </div>
  );
};

export default StartMenu;
