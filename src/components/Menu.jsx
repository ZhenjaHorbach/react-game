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
  saveGameEnd: {
    russian: "Игра сохранена!!!",
    english: "Game saved !!!",
    german: "Spiel gespeichert !!!",
    italian: "Gioco salvato !!!",
    belorussian: "Гульня захавана !!!",
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
  const [menuElActive, setMenuElActive] = useState(false);
  const [addStyle, setAddStyle] = useState({});
  const [addStyleEl, setAddStyleEl] = useState({});
  const [newGame, setNewGame] = useState(false);
  const [saveGame, setSaveGame] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [settings, setSettings] = useState(false);
  const [loadGame, setLoadGame] = useState(false);
  const [seeBoard, setSeeBoard] = useState(false);

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

  useEffect(() => {
    if (!props.visibilityBoard) {
      setTimeout(() => {
        setSeeBoard(true);
      }, 500);
    }
  }, [props.visibilityBoard]);

  useEffect(() => {
    if (menuElActive) {
      setTimeout(() => {
        const newArr = { ...addStyle };
        const newArrEl = { ...addStyleEl };
        newArr["opacity"] = "0";
        newArr["margin-top"] = `-${
          getComputedStyle(document.querySelector("#menu")).height
        }`;

        setAddStyle(newArr);
        setAddStyleEl(newArrEl);
      });
      setTimeout(() => {
        const newArr = { ...addStyle };
        const newArrEl = { ...addStyleEl };
        newArr["display"] = "none";
        newArrEl["top"] = "0";
        setAddStyle(newArr);
        setAddStyleEl(newArrEl);
      }, 1000);
    }
  }, [menuElActive]);
  return (
    <div className={style.menu_Top}>
      <div className={`${style.menu} ${seeBoard ? style.visibility : ""}`}>
        <h1 className={style.name}>
          {menuElActive
            ? allLang[menuElActive][props.lang]
            : allLang.menu[props.lang]}
        </h1>
        <div className={`${style.menuList}`} style={addStyle} id="menu">
          <div
            className={style.glitch_btn}
            onClick={() => {
              clickElemMenu("NG");
              setMenuElActive("newGame");
            }}
          >
            <div className={style.text}>{allLang.newGame[props.lang]}</div>
            <div className={style.mask}>
              <span>{allLang.newGame[props.lang]}</span>
            </div>
          </div>
          <div
            className={style.glitch_btn}
            onClick={() => {
              clickElemMenu("SG");
              props.saveGame();
              setMenuElActive("saveGame");
            }}
          >
            <div className={style.text}>{allLang.saveGame[props.lang]}</div>
            <div className={style.mask}>
              <span>{allLang.saveGame[props.lang]}</span>
            </div>
          </div>

          <div
            className={style.glitch_btn}
            onClick={() => {
              clickElemMenu("LG");
              setMenuElActive("loadGame");
            }}
          >
            <div className={style.text}>{allLang.loadGame[props.lang]}</div>
            <div className={style.mask}>
              <span>{allLang.loadGame[props.lang]}</span>
            </div>
          </div>

          <div
            className={style.glitch_btn}
            onClick={() => {
              clickElemMenu("ST");
              setMenuElActive("statistics");
            }}
          >
            <div className={style.text}>{allLang.statistics[props.lang]}</div>
            <div className={style.mask}>
              <span>{allLang.statistics[props.lang]}</span>
            </div>
          </div>

          <div
            className={style.glitch_btn}
            onClick={() => {
              clickElemMenu("SE");
              setMenuElActive("settings");
            }}
          >
            <div className={style.text}>{allLang.settings[props.lang]}</div>
            <div className={style.mask}>
              <span>{allLang.settings[props.lang]}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.elemMenu} style={addStyleEl}>
        {newGame ? (
          <NewGame createNewGame={props.createNewGame} lang={props.lang} />
        ) : saveGame ? (
          <h1 className={style.SaveGameEnd}>
            {allLang.saveGameEnd[props.lang]}
          </h1>
        ) : loadGame ? (
          <LoadGame
            lang={props.lang}
            saveGames={props.saveGames}
            loadGame={props.loadGame}
            deleteSave={props.deleteSave}
          />
        ) : statistics ? (
          <Statistics lang={props.lang} winGamesS={props.winGamesS} />
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
    </div>
  );
}

export default Menu;
