import React, { useState } from "react";
import style from "./NewGame.module.css";
const allLang = {
  onePlayer: {
    russian: "Один игрок",
    english: "One Player",
    german: "Ein Spieler",
    italian: "Un giocatore",
    belorussian: "Адзін гулец",
  },
  autoGame: {
    russian: "Авто игра",
    english: "Auto Game",
    german: "Auto-Spiel",
    italian: "Gioco automatico",
    belorussian: "Аўтаматычная гульня",
  },
  playerVsComputer: {
    russian: "Игрок против Компьютера",
    english: "Player vs Computer",
    german: "Spieler gegen Computer",
    italian: "Giocatore vs Computer",
    belorussian: "Гулец супраць Кампутара",
  },
};

function NewGame(props) {
  return (
    <div className={style.NewGame}>
      <button
        className={style.button_menu}
        onClick={() => {
          props.createNewGame("ng");
        }}
      >
        <span>{allLang.onePlayer[props.lang]}</span>
      </button>
      <button
        className={style.button_menu}
        onClick={() => {
          props.createNewGame("ag");
        }}
      >
        <span>{allLang.autoGame[props.lang]}</span>
      </button>
      <button className={style.button_menu}>
        <span>{allLang.playerVsComputer[props.lang]}</span>
      </button>
    </div>
  );
}

export default NewGame;
