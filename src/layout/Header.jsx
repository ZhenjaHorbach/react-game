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
  const [seeHeader, setSeeHeader] = useState(true);
  const [activeLang, setActiveLang] = useState("english");
  props.setCallBack(clickMB);
  return (
    <div>
      <header className={`${style.header} ${seeHeader ? "" : style.notVisib}`}>
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
        <div className={style.language}>
          <div
            onClick={() => {
              props.setLang("russian");
              setActiveLang("russian");
            }}
            className={`${style.country} ${
              activeLang === "russian" ? style.activeLang : ""
            }`}
          >
            <img src="https://sun9-4.userapi.com/impg/3SGW8xOs2yRZ932JAveYNiNHJziTWz5M2obD-A/fKiVtg-UhL8.jpg?size=512x512&quality=96&sign=e90b86ef40a785454af6899c39e7d4f5&type=album" />
          </div>
          <div
            onClick={() => {
              props.setLang("english");
              setActiveLang("english");
            }}
            className={`${style.country} ${
              activeLang === "english" ? style.activeLang : ""
            }`}
          >
            <img src="https://sun9-12.userapi.com/impg/jehttGPrTcLPVVk9U-nxQnDtMLQBfJj-dQ9Y5Q/QkwlUr3FsiU.jpg?size=512x512&quality=96&sign=33a8e57dd478462829dc7981ebe801ad&type=album" />
          </div>
          <div
            onClick={() => {
              props.setLang("german");
              setActiveLang("german");
            }}
            className={`${style.country} ${
              activeLang === "german" ? style.activeLang : ""
            }`}
          >
            <img src="https://sun9-38.userapi.com/impg/QlcE0s3QZCmIHSRCEyYn0QxVhFCgVAxmX8vH0w/YEi-xvZMoxA.jpg?size=512x512&quality=96&sign=08a927808136b73d89f09e5144fae335&type=album" />
          </div>
          <div
            onClick={() => {
              props.setLang("italian");
              setActiveLang("italian");
            }}
            className={`${style.country} ${
              activeLang === "italian" ? style.activeLang : ""
            }`}
          >
            <img src="https://sun9-27.userapi.com/impg/kyjqiz-P_ahZSSFvg4q5GMFvcnQv73RPpioofA/i5jOV2vI1nw.jpg?size=512x512&quality=96&sign=1babb97af894359e842b1a96adeac0df&type=album" />
          </div>
          <div
            onClick={() => {
              props.setLang("belorussian");
              setActiveLang("belorussian");
            }}
            className={`${style.country} ${
              activeLang === "belorussian" ? style.activeLang : ""
            }`}
          >
            <img src="https://sun9-36.userapi.com/impg/e5yWjrwPEjrq1cFp7Gn4Mj6pUromOR8iHa8-3w/DMIX9wEeRAg.jpg?size=512x512&quality=96&sign=01a6137171883340244ed82b63348584&type=album" />
          </div>
        </div>
      </header>
      {seeHeader ? (
        <div className={`${style.scroll} ${style.scroll_up}`}>
          <img
            src="https://img.icons8.com/ultraviolet/32/000000/chevron-up.png"
            onClick={() => setSeeHeader(!seeHeader)}
          />
        </div>
      ) : (
        <div className={`${style.scroll} ${style.scroll_down}`}>
          <img
            src="https://img.icons8.com/ultraviolet/32/000000/chevron-down.png"
            onClick={() => setSeeHeader(!seeHeader)}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
