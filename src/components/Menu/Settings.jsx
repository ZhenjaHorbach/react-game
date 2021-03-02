import style from "./Settings.module.css";
import styleGradient from "../Gradient.module.css";
import React, { useState, useEffect, useRef } from "react";

const topicList = {
  animal: "145939",
  people: "774909",
  family: "1128318",
  game: "1670977",
  car: "5313947",
  nature: "624015",
  sport: "841130",
  food: "1640777",
  space: "110854",
};

const allLang = {
  theme: {
    russian: "Тема",
    english: "Theme",
    german: "Thema",
    italian: "Argomento",
    belorussian: "Тэма",
  },
  BFC: {
    russian: "Найденные карты",
    english: "Found cards",
    german: "Karten gefunden",
    italian: "Carte trovate",
    belorussian: "Знойдзеныя карты",
  },
  BNFC: {
    russian: "Не найденные карты",
    english: "Unidentified cards",
    german: "Nicht identifizierte Karten",
    italian: "Carte non identificate",
    belorussian: "Ня знойдзеныя карты",
  },
  form: {
    russian: "Форма карт",
    english: "Card shape",
    german: "Kartenform",
    italian: "Forma della carta",
    belorussian: "Форма карт",
  },
  numberCard: {
    russian: "Количество карт",
    english: "Number of cards",
    german: "Anzahl der Karten",
    italian: "Numero di carte",
    belorussian: "Колькасць карт",
  },
  sendSetting: {
    russian: "Принять настройки",
    english: "Accept settings",
    german: "Einstellungen akzeptieren",
    italian: "Accetta le impostazioni",
    belorussian: "Прыняць налады",
  },
  animal: {
    russian: "Животные",
    english: "Animals",
    german: "Tiere",
    italian: "Animali",
    belorussian: "Жывёлы",
  },
  people: {
    russian: "Люди",
    english: "People",
    german: "Menschen",
    italian: "Persone",
    belorussian: "Людзі",
  },
  family: {
    russian: "Семья",
    english: "Family",
    german: "Familie",
    italian: "Una famiglia",
    belorussian: "Сям'я",
  },
  game: {
    russian: "Игры",
    english: "Games",
    german: "Spiele",
    italian: "Giochi",
    belorussian: "Гульні",
  },
  car: {
    russian: "Машины",
    english: "Cars",
    german: "Autos",
    italian: "Automobili",
    belorussian: "Машыны",
  },
  nature: {
    russian: "Природа",
    english: "Nature",
    german: "Natur",
    italian: "Natura",
    belorussian: "Прырода",
  },
  sport: {
    russian: "Спорт",
    english: "Sport",
    german: "Sport",
    italian: "Sport",
    belorussian: "Спорт",
  },
  food: {
    russian: "Еда",
    english: "Food",
    german: "Essen",
    italian: "Cibo",
    belorussian: "Ежа",
  },
  space: {
    russian: "Космос",
    english: "Space",
    german: "Raum",
    italian: "Spazio",
    belorussian: "Космас",
  },
};

function Settings(props) {
  const colorCard = props.backgroundColor.slice(4, -1).split(",");
  const [numberCards, setNumberCards] = useState(props.sizeBoard / 2);
  const [radiusCards, setRadiusCards] = useState(props.formCard);
  const [redColor, setRedColor] = useState(+colorCard[0]);
  const [greenColor, setGreenColor] = useState(+colorCard[1]);
  const [blueColor, setBlueColor] = useState(+colorCard[2]);
  const [backgroundImg, setBackgroundImg] = useState(props.backgroundGradient);
  const [topicName, setTopicName] = useState(props.topic);

  const keys = Object.keys(styleGradient);
  const keysTopic = Object.keys(topicList);

  const sendSetting = () => {
    props.setBackgroundColor(`rgb(${redColor},${greenColor},${blueColor})`);
    props.setFormCard(+radiusCards);
    props.setSizeBoard(+numberCards * 2);
    props.setNewSettings(true);
    props.setTopic(topicName);
    props.setBackgroundGradient(backgroundImg);
    localStorage.setItem(
      "backgroundColor",
      `rgb(${redColor},${greenColor},${blueColor})`
    );
    localStorage.setItem("formCard", +radiusCards);
    localStorage.setItem("sizeBoard", +numberCards * 2);
    localStorage.setItem("topic", topicName);
    localStorage.setItem("backgroundImg", backgroundImg);
  };

  const colorNow = {
    background: `rgb(${redColor},${greenColor},${blueColor})`,
    borderRadius: `${radiusCards}%`,
  };

  const radiusNow = {
    borderRadius: `${radiusCards}%`,
  };

  const changeRange = (event) => {
    setNumberCards(event.target.value);
  };

  const changeRadius = (event) => {
    setRadiusCards(event.target.value);
  };

  const changeRed = (event) => {
    setRedColor(event.target.value);
  };
  const changeGreen = (event) => {
    setGreenColor(event.target.value);
  };
  const changeBlue = (event) => {
    setBlueColor(event.target.value);
  };
  return (
    <div className={style.settings}>
      <div className={style.theme}>
        <h2>{allLang.theme[props.lang]}</h2>
        <div className={style.blockNotFind}>
          {keysTopic.map((el) => {
            return (
              <div
                className={style.blockNotFindEl}
                onClick={() => setTopicName(el)}
              >
                <img
                  className={style.colorSee}
                  src={`http://images.pexels.com/photos/${topicList[el]}/pexels-photo-${topicList[el]}.jpeg?auto=compress&cs=tinysrgb&h=350`}
                />
                <h2>{allLang[el][props.lang]}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.find}>
        <div>
          <h2>{allLang.BFC[props.lang]}</h2>
          <input
            className={style.redRange}
            type="range"
            min="0"
            max="255"
            value={redColor}
            onChange={changeRed}
          ></input>
          <input
            className={style.greenRange}
            type="range"
            min="0"
            max="255"
            value={greenColor}
            onChange={changeGreen}
          ></input>
          <input
            className={style.blueRange}
            type="range"
            min="0"
            max="255"
            value={blueColor}
            onChange={changeBlue}
          ></input>
        </div>
        <div>
          <h2>{allLang.form[props.lang]}</h2>
          <input
            type="range"
            min="0"
            max="50"
            value={radiusCards}
            class={style.slider}
            onChange={changeRadius}
          ></input>
        </div>
      </div>
      <div className={style.notFind}>
        <div>
          <h2>{allLang.BNFC[props.lang]}</h2>
          <div className={style.blockNotFind}>
            {keys.map((el) => {
              return (
                <div
                  className={style.blockNotFindEl}
                  onClick={() => setBackgroundImg(el)}
                >
                  <div
                    className={`${style.colorSee} ${styleGradient[el]}`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.numberCards}>
        <h2>{allLang.numberCard[props.lang]}</h2>
        <input
          type="range"
          min="2"
          max="14"
          value={numberCards}
          class={style.slider}
          onChange={changeRange}
        ></input>
        <h5>{numberCards}</h5>
        <div className={style.blockCardSee}>
          <div
            className={`${style.colorSee} ${styleGradient[backgroundImg]}`}
            style={radiusNow}
          ></div>
          <div className={style.colorSee} style={colorNow}>
            <img
              style={radiusNow}
              className={style.colorSee}
              src={`http://images.pexels.com/photos/${topicList[topicName]}/pexels-photo-${topicList[topicName]}.jpeg?auto=compress&cs=tinysrgb&h=350`}
            />
          </div>
          <div className={style.colorSee} style={colorNow}></div>
        </div>
      </div>
      <button className={style.button_menu} onClick={sendSetting}>
        <span>{allLang.sendSetting[props.lang]}</span>
      </button>
    </div>
  );
}

export default Settings;
