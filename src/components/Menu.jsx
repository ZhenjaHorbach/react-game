import React, { useState, useEffect } from "react";
import style from "./Menu.module.css";
import NewGame from "./Menu/NewGame";
import SaveGame from "./Menu/SaveGame";
import Settings from "./Menu/Settings";
import Statistics from "./Menu/Statistics";

function Menu(props) {
  const [newGame, setNewGame] = useState(false);
  const [saveGame, setSaveGame] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [settings, setSettings] = useState(false);

  const clickElemMenu = (el) => {
    return el === "NG"
      ? setNewGame(!newGame) ||
          setSaveGame(false) ||
          setStatistics(false) ||
          setSettings(false)
      : el === "SG"
      ? setSaveGame(!saveGame) ||
        setNewGame(false) ||
        setStatistics(false) ||
        setSettings(false)
      : el === "ST"
      ? setStatistics(!statistics) ||
        setNewGame(false) ||
        setSaveGame(false) ||
        setSettings(false)
      : el === "SE"
      ? setSettings(!settings) ||
        setNewGame(false) ||
        setSaveGame(false) ||
        setStatistics(false)
      : "";
  };
  return (
    <div className={style.menu}>
      <h1 className={style.name}>Menu</h1>
      <div className={style.menuList}>
        <button onClick={() => clickElemMenu("NG")}>New Game</button>
        <button onClick={() => clickElemMenu("SG")}>Save Game</button>
        <button onClick={() => clickElemMenu("ST")}>Statistics</button>
        <button onClick={() => clickElemMenu("SE")}>Settings</button>
      </div>
      {newGame ? (
        <NewGame />
      ) : saveGame ? (
        <SaveGame />
      ) : statistics ? (
        <Settings />
      ) : settings ? (
        <Statistics />
      ) : (
        ""
      )}
    </div>
  );
}

export default Menu;
