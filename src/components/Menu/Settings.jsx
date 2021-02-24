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

function Settings(props) {
  const colorCard = props.backgroundColor.slice(4, -1).split(",");
  console.log(colorCard);
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
    props.setTopic("animal");
    props.setNewSettings(true);
    props.setTopic(topicName);
    props.setBackgroundGradient(backgroundImg);
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
    <div>
      <div>
        <h2>Theme</h2>
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
                <h2>{el}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Background find card</h2>
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
        <h2>Form</h2>
        <input
          type="range"
          min="0"
          max="50"
          value={radiusCards}
          class={style.slider}
          onChange={changeRadius}
        ></input>
      </div>
      <div>
        <h2>Background not find card</h2>
        <div className={style.blockNotFind}>
          {keys.map((el) => {
            return (
              <div
                className={style.blockNotFindEl}
                onClick={() => setBackgroundImg(el)}
              >
                <div className={`${style.colorSee} ${styleGradient[el]}`}></div>
                <h2>{el}</h2>
              </div>
            );
          })}
        </div>
      </div>

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
      <div>
        <h2>Number of cards</h2>
        <input
          type="range"
          min="2"
          max="14"
          value={numberCards}
          class={style.slider}
          onChange={changeRange}
        ></input>
        <h5>{numberCards}</h5>
      </div>
      <button onClick={sendSetting}>Принять настройки</button>
    </div>
  );
}

export default Settings;
