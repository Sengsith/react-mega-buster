import React from "react";

import GridComponent from "../Grid/GridComponent";

import styles from "./battlefield.module.scss";

const BattleField = () => {
  return (
    <div className={styles.battlefield}>
      <GridComponent />
    </div>
  );
};

export default BattleField;
