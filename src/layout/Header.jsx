import style from "./Header.module.css";
import React, { useState, useEffect } from "react";

function Header(props) {
  const [clickMB, setclickMB] = useState(false);
  props.setCallBack(clickMB);
  return (
    <header className={style.header}>
      <div className={style.name}>
        <h1>Memory game</h1>
      </div>
      <div className={style.volume}>volume</div>
      <div className={style.menu}>
        <button onClick={() => setclickMB(!clickMB)}>Menu</button>
      </div>
      <div className={style.language}>language</div>
    </header>
  );
}

export default Header;
