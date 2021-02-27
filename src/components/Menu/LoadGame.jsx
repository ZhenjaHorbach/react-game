import React, { useState } from "react";
import LoadElement from "./LoadElement";
function LoadGame(props) {
  return (
    <div>
      <div>
        <div>№</div>
        <div>Size</div>
        <div>Score Move</div>
        <div>Time Move</div>
        <div>Find Card</div>
        <div>Topic</div>
        <div>Score</div>
      </div>
      {props.saveGames.map((el, index) => (
        <LoadElement
          key={index}
          info={el}
          index={index}
          loadGame={props.loadGame}
          deleteSave={props.deleteSave}
        />
      ))}
    </div>
  );
}

export default LoadGame;
