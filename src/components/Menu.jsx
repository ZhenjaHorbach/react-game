import React, { useState, useEffect } from "react";
import style from "./Menu.module.css";
import NewGame from "./Menu/NewGame";
import LoadGame from "./Menu/LoadGame";
import SaveGame from "./Menu/SaveGame";
import Settings from "./Menu/Settings";
import Statistics from "./Menu/Statistics";

const allLang = {
  menu: {
    russian: "Меню",
    english: "Menu",
    german: "Speisekarte",
    italian: "Menù",
    belorussian: "Меню",
  },
  newGame: {
    russian: "Новая игра",
    english: "New Game",
    german: "Neues Spiel",
    italian: "Nuovo Gioco",
    belorussian: "Новая гульня",
  },
  saveGame: {
    russian: "Сохранить игру",
    english: "Save Game",
    german: "Spiel Speichern",
    italian: "Salva il Gioco",
    belorussian: "Захаваць гульню",
  },
  loadGame: {
    russian: "Загрузить игру",
    english: "Load Game",
    german: "Spiel Laden",
    italian: "Carica Gioco",
    belorussian: "Загрузіць гульню",
  },
  statistics: {
    russian: "Статистика",
    english: "Statistics",
    german: "Statistiken",
    italian: "Statistiche",
    belorussian: "Статыстыка",
  },
  settings: {
    russian: "Настройки",
    english: "Settings",
    german: "Einstellungen",
    italian: "Impostazioni",
    belorussian: "Налады",
  },
};

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
      <h1 className={style.name}>{allLang.menu[props.lang]}</h1>
      <div className={style.menuList}>
        <button onClick={() => clickElemMenu("NG")}>
          {allLang.newGame[props.lang]}
        </button>
        <button
          onClick={() => {
            clickElemMenu("SG");
            props.saveGame();
          }}
        >
          {allLang.saveGame[props.lang]}
        </button>
        <button onClick={() => clickElemMenu("LG")}>
          {allLang.loadGame[props.lang]}
        </button>
        <button onClick={() => clickElemMenu("ST")}>
          {allLang.statistics[props.lang]}
        </button>
        <button onClick={() => clickElemMenu("SE")}>
          {allLang.settings[props.lang]}
        </button>
      </div>
      {newGame ? (
        <NewGame createNewGame={props.createNewGame} lang={props.lang} />
      ) : saveGame ? (
        <SaveGame lang={props.lang} />
      ) : loadGame ? (
        <LoadGame
          lang={props.lang}
          saveGames={props.saveGames}
          loadGame={props.loadGame}
          deleteSave={props.deleteSave}
        />
      ) : statistics ? (
        <Statistics lang={props.lang} />
      ) : settings ? (
        <Settings
          lang={props.lang}
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
