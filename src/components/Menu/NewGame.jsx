import React, { useState } from "react";
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
    <div>
      <button
        onClick={() => {
          props.createNewGame("ng");
        }}
      >
        {allLang.onePlayer[props.lang]}
      </button>
      <button
        onClick={() => {
          props.createNewGame("ag");
        }}
      >
        {allLang.autoGame[props.lang]}
      </button>
      <button>{allLang.playerVsComputer[props.lang]}</button>
    </div>
  );
}

export default NewGame;
