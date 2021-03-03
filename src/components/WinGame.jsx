import React, { useState, useEffect, useRef } from "react";
import style from "./WinGame.module.css";

const allLang = {
  win: {
    russian: "Отличная игра !!!",
    english: "Good game !!!",
    german: "Gute Partie !!!",
    italian: "Bel gioco !!!",
    belorussian: "Выдатная гульня !!!",
  },
  time: {
    russian: "Время: ",
    english: "Time: ",
    german: "Zeit: ",
    italian: "Tempo: ",
    belorussian: "Час: ",
  },
  move: {
    russian: "Количество шагов: ",
    english: "Number of steps: ",
    german: "Anzahl der Schritte: ",
    italian: "Numero di passaggi: ",
    belorussian: "Колькасць крокаў: ",
  },
  score: {
    russian: "Количество очков: ",
    english: "Points: ",
    german: "Punkte: ",
    italian: "Punti: ",
    belorussian: "Колькасць ачкоў: ",
  },
};

function WinGame(props) {
  new Audio(
    "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1nHU1MTJ6T88y9ZT2dW8Qv0Q0hsI2K-7o"
  ).autoplay = true;
  const [styles, setStyles] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const newArr = { ...styles };
      newArr["opacity"] = "1";
      setStyles(newArr);
    }, 200);
  }, []);

  return (
    <div className={style.newGame} style={styles}>
      <h1 className={style.win}>{allLang.win[props.lang]}</h1>
      <button
        className={style.button_menu}
        onClick={() => {
          props.setActiveKeyBoard(null);
          props.setNumberKeyBoard(null);
          props.setActiveKeyBoard(false);
          props.setClickEnter(false);
          props.createNewGame("ng");
        }}
      >
        <span>Новая игра</span>
      </button>
      <div className={style.info}>
        <p>
          {allLang.time[props.lang]} {props.timeMove}
        </p>
        <p>
          {allLang.move[props.lang]} {props.scoreMove}
        </p>
        <p>
          {allLang.score[props.lang]}
          {Math.floor(
            props.sizeBoard * 200 - props.timeMove * 15 + props.scoreMove * 50
          )}
        </p>
      </div>
    </div>
  );
}
export default WinGame;
