import React, { useState } from "react";
import LoadElement from "./LoadElement";
import style from "./LoadGame.module.css";

const allLang = {
  size: {
    russian: "Количество карт",
    english: "Number of cards",
    german: "Anzahl der Karten",
    italian: "Numero di carte",
    belorussian: "Колькасць карт",
  },
  time: {
    russian: "Время",
    english: "Time",
    german: "Zeit",
    italian: "Tempo",
    belorussian: "Час",
  },
  move: {
    russian: "Шаги",
    english: "Move",
    german: "Bewegung",
    italian: "Mossa",
    belorussian: "Крокі",
  },
  findCard: {
    russian: "Меню",
    english: "Menu",
    german: "Speisekarte",
    italian: "Menù",
    belorussian: "Меню",
  },
  theme: {
    russian: "Тема",
    english: "Theme",
    german: "Thema",
    italian: "Argomento",
    belorussian: "Тэма",
  },
  score: {
    russian: "Количество очков",
    english: "Points",
    german: "Punkte",
    italian: "Punti",
    belorussian: "Колькасць ачкоў",
  },
  load: {
    russian: "Загрузка",
    english: "Load",
    german: "Wird geladen",
    italian: "Caricamento",
    belorussian: "Загрузка",
  },
  delete: {
    russian: "Удаление",
    english: "Delete",
    german: "Löschen",
    italian: "Eliminazione",
    belorussian: "Выдаленне",
  },
};

function LoadGame(props) {
  return (
    <div className={style.loadGame}>
      <div className={style.loadGame_header}>
        <div>№</div>
        <div>{allLang.size[props.lang]}</div>
        <div>{allLang.move[props.lang]}</div>
        <div>{allLang.time[props.lang]}</div>
        <div>{allLang.findCard[props.lang]}</div>
        <div>{allLang.theme[props.lang]}</div>
        <div>{allLang.score[props.lang]}</div>
        <div>{allLang.load[props.lang]}</div>
        <div>{allLang.delete[props.lang]}</div>
      </div>
      {props.saveGames.map((el, index) => (
        <LoadElement
          lang={props.lang}
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
