import style from "./Header.module.css";
import React, { useState, useEffect } from "react";
import Volume from "../components/Volume";

const allLang = {
  name: {
    russian: "Игра на запоминание",
    english: "Memory game",
    german: "Memory-Spiel",
    italian: "Gioco di memoria",
    belorussian: "Гульня на памяць",
  },
};

function Header(props) {
  const [clickMB, setclickMB] = useState(false);
  props.setCallBack(clickMB);
  return (
    <header className={style.header}>
      <div className={style.name}>
        <h1>{allLang.name[props.lang]}</h1>
      </div>
      <div className={style.volume}>
        <Volume
          music={props.music}
          setClick={props.setClick}
          setVolumeClick={props.setVolumeClick}
        />
      </div>
      <div className={style.menu}></div>
      <div className={style.language}>
        <button onClick={() => props.setLang("russian")}>Russian</button>
        <button onClick={() => props.setLang("english")}>English</button>
        <button onClick={() => props.setLang("german")}>German</button>
        <button onClick={() => props.setLang("italian")}>Italian</button>
        <button onClick={() => props.setLang("belorussian")}>
          Belorussian
        </button>
      </div>
    </header>
  );
}

export default Header;
