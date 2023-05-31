import { useState } from "react";
import StartMenu from "../StartMenu/StartMenu.jsx";
import Battlefield from "../BattleField/BattleField.jsx";
import GameOver from "../GameOver/GameOver.jsx";
import styles from "./app.module.scss";

// Keep track of the state of the game between start, battle, and game over.
const GAME_STATES = {
  START: "start",
  BATTLE: "battle",
  GAME_OVER: "gameOver",
};

const App = () => {
  // Initialize gameState to start, a simple start menu for the player
  const [gameState, setGameState] = useState(GAME_STATES.BATTLE);

  return (
    <div className={styles.app}>
      {gameState === "start" && (
        <StartMenu GAME_STATES={GAME_STATES} setGameState={setGameState} />
      )}
      {gameState === "battle" && (
        <Battlefield GAME_STATES={GAME_STATES} setGameState={setGameState} />
      )}
      {gameState === "gameOver" && (
        <GameOver GAME_STATES={GAME_STATES} setGameState={setGameState} />
      )}
    </div>
  );
};

export default App;
