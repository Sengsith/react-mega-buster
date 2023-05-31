import React from "react";

import styles from "./game_over.module.scss";

const GameOver = ({ GAME_STATES, setGameState }) => {
  const onStartMenuClick = () => {
    setGameState(GAME_STATES.START);
  };

  const onBattleAgainClick = () => {
    setGameState(GAME_STATES.BATTLE);
  };

  return (
    <div className={styles.game_over_wrapper}>
      <h2 className="title">Game Over!</h2>
      <button onClick={onStartMenuClick}>Main Menu</button>
      <button onClick={onBattleAgainClick}>Battle Again</button>
    </div>
  );
};

export default GameOver;
