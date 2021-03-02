import Card from "./Card";
import style from "./Board.module.css";
import React, { useState, useEffect, useRef } from "react";

function Board(props) {
  const { randomCards = [], photo, findCard = [] } = props;
  const [seeBoard, setSeeBoard] = useState(false);
  const styleCards = {
    background: props.backgroundColor,
  };

  useEffect(() => {
    if (props.visibilityBoard) {
      setTimeout(() => {
        setSeeBoard(true);
      }, 500);
    }
  }, [props.visibilityBoard]);
  return (
    <div
      className={`${style.board} ${seeBoard ? style.visibility : ""}`}
      id="mainPage"
    >
      {randomCards.map((el, index) => (
        <Card
          autoGame={props.autoGame}
          nowCardAuto={props.nowCardAuto === index ? true : false}
          setNowCardAutoActive={props.setNowCardAutoActive}
          clickEnter={props.clickEnter}
          setClickEnter={props.setClickEnter}
          setActiveCardKeyBoard={props.setActiveCardKeyBoard}
          setNumberKeyBoard={props.setNumberKeyBoard}
          randomCards={randomCards}
          index={index}
          changeCard={props.changeCard}
          activeKeyBoard={props.activeKeyBoard === index ? true : false}
          click={props.click}
          volumeClick={props.volumeClick}
          key={`${photo[el].id}${index}`}
          number={el}
          photo={photo[el]}
          setActiveCard={props.setActiveCard}
          activeCard={props.activeCard}
          elementFind={findCard.find((findEl) => findEl === el) ? true : false}
          styleCards={styleCards}
          backgroundGradient={props.backgroundGradient}
          formCard={props.formCard}
        />
      ))}
    </div>
  );
}
export default Board;
