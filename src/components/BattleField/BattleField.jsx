import React from "react";

import TileComponent from "../Tile/TileComponent.jsx";

const BattleField = () => {
  // Questions:
  // Do we want EVERYTHING to be interacting with the grid?
  // Do we want an attack to be it's own object? Or should player and enemy have their own default abilities that is only inside the class
  // Whenever a projectile is shot, does it iterate through the columns 1 at a time?
  // Grid will be 3x6 2D array
  // Each grid spot will be a Tile object
  // Tile object will have an object that will hold various data (fighters, attacks)
  // Fighter:
  // Move around on the field (function)
  // Clear out previous space's fighter obj so we don't draw multiple entities (function)
  // Shoot a projectile (function)

  return (
    <div>
      <TileComponent />
    </div>
  );
};

export default BattleField;
