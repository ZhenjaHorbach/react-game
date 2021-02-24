import React, { useState } from "react";
function NewGame(props) {
  return (
    <div>
      <button onClick={props.createNewGame}>One Player</button>
      <button>Two Player</button>
      <button>Player vs Computer</button>
    </div>
  );
}

export default NewGame;
