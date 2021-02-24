import React, { useState, useEffect } from "react";
import style from "./Menu.module.css";
import NewGame from "./Menu/NewGame";
import LoadGame from "./Menu/LoadGame";
import SaveGame from "./Menu/SaveGame";
import Settings from "./Menu/Settings";
import Statistics from "./Menu/Statistics";

function Menu(props) {
  const [newGame, setNewGame] = useState(false);
  const [saveGame, setSaveGame] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [settings, setSettings] = useState(false);
  const [loadGame, setLoadGame] = useState(false);

  const clickElemMenu = (el) => {
    return el === "NG"
      ? setNewGame(!newGame) ||
          setSaveGame(false) ||
          setStatistics(false) ||
          setSettings(false) ||
          setLoadGame(false)
      : el === "SG"
      ? setSaveGame(!saveGame) ||
        setNewGame(false) ||
        setStatistics(false) ||
        setSettings(false) ||
        setLoadGame(false)
      : el === "LG"
      ? setLoadGame(!loadGame) ||
        setNewGame(false) ||
        setStatistics(false) ||
        setSaveGame(false) ||
        setSettings(false)
      : el === "ST"
      ? setStatistics(!statistics) ||
        setNewGame(false) ||
        setSaveGame(false) ||
        setSettings(false) ||
        setLoadGame(false)
      : el === "SE"
      ? setSettings(!settings) ||
        setNewGame(false) ||
        setSaveGame(false) ||
        setStatistics(false) ||
        setLoadGame(false)
      : "";
  };
  return (
    <div className={style.menu}>
      <h1 className={style.name}>Menu</h1>
      <div className={style.menuList}>
        <button onClick={() => clickElemMenu("NG")}>New Game</button>
        <button onClick={() => clickElemMenu("SG")}>Save Game</button>
        <button onClick={() => clickElemMenu("LG")}>Load Game</button>
        <button onClick={() => clickElemMenu("ST")}>Statistics</button>
        <button onClick={() => clickElemMenu("SE")}>Settings</button>
      </div>
      {newGame ? (
        <NewGame createNewGame={props.createNewGame} />
      ) : saveGame ? (
        <SaveGame />
      ) : loadGame ? (
        <LoadGame />
      ) : statistics ? (
        <Statistics />
      ) : settings ? (
        <Settings
          topic={props.topic}
          setTopic={props.setTopic}
          backgroundColor={props.backgroundColor}
          formCard={props.formCard}
          sizeBoard={props.sizeBoard}
          createNewGame={props.createNewGame}
          setSizeBoard={props.setSizeBoard}
          setBackgroundColor={props.setBackgroundColor}
          setFormCard={props.setFormCard}
          setNewSettings={props.setNewSettings}
          setBackgroundGradient={props.setBackgroundGradient}
          backgroundGradient={props.backgroundGradient}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Menu;
