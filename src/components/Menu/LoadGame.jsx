import React, { useState } from "react";
import LoadElement from "./LoadElement";

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
};

function LoadGame(props) {
  return (
    <div>
      <div>
        <div>№</div>
        <div>{allLang.size[props.lang]}</div>
        <div>{allLang.move[props.lang]}</div>
        <div>{allLang.time[props.lang]}</div>
        <div>{allLang.findCard[props.lang]}</div>
        <div>{allLang.theme[props.lang]}</div>
        <div>{allLang.score[props.lang]}</div>
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
