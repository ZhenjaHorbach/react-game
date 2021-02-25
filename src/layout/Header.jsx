import style from "./Header.module.css";
import React, { useState, useEffect } from "react";
import Volume from "../components/Volume";

function Header(props) {
  const [clickMB, setclickMB] = useState(false);
  props.setCallBack(clickMB);
  return (
    <header className={style.header}>
      <div className={style.name}>
        <h1>Memory game</h1>
      </div>
      <div className={style.volume}>
        <Volume music={props.music} />
      </div>
      <div className={style.menu}>
        <button onClick={() => setclickMB(!clickMB)}>Menu</button>
      </div>
      <div className={style.language}>language</div>
    </header>
  );
}

export default Header;
