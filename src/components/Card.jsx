import style from "./Card.module.css";
import styleGradient from "./Gradient.module.css";
import React, { useState, useEffect } from "react";

function Card(props) {
  const { photo, number, elementFind } = props;

  const [active, setActive] = useState(false);

  const styleCard = {
    background: elementFind ? `${props.styleCards.background}` : "",
    borderRadius: `${props.formCard}%`,
  };
  const styleImg = {
    borderRadius: `${props.formCard}%`,
  };

  useEffect(() => {
    if (props.activeCard.length === 0) {
      setActive(false);
    }
  }, [props.activeCard]);

  useEffect(() => {
    if (props.activeKeyBoard) {
      props.setActiveCardKeyBoard(!active);
      props.setNumberKeyBoard(props.index);
    }
  }, [props.activeKeyBoard]);

  useEffect(() => {
    if (props.nowCardAuto) {
      props.setNowCardAutoActive(active);
    }
  }, [active]);

  useEffect(() => {
    if (props.activeKeyBoard && !elementFind) {
      props.click.volume = +props.volumeClick;
      props.click.play();
      setActive(!active);
      props.changeCard(active, props.randomCards[props.index]);
    }
  }, [props.clickEnter]);

  return (
    <div
      style={styleCard}
      className={`${style.card_body} ${
        styleGradient[props.backgroundGradient]
      } ${elementFind ? style.card_body_elementFind : ""} ${
        props.activeKeyBoard ? style.keyActive : ""
      }`}
      key={photo.id}
      onClick={() => {
        props.click.volume = +props.volumeClick;
        props.click.play();
        setActive(!active);
        props.changeCard(active, props.randomCards[props.index]);
      }}
    >
      <h1 className={style.card_name}>{number}</h1>
      <img
        style={styleImg}
        className={`${style.card_image} ${
          active || props.autoGame ? style.card_image_active : ""
        }`}
        src={photo.src.medium}
        alt={photo.id}
      />
    </div>
  );
}

export default Card;
