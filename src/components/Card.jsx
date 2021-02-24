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
  return (
    <div
      style={styleCard}
      className={`${style.card_body} ${
        styleGradient[props.backgroundGradient]
      } ${elementFind ? style.card_body_elementFind : ""}`}
      key={photo.id}
      onClick={() => {
        setActive(!active);
        !active
          ? props.setActiveCard(props.activeCard.slice().concat([number]))
          : props.setActiveCard([]);
      }}
    >
      <h1 className={style.card_name}>{number}</h1>
      <img
        style={styleImg}
        className={`${style.card_image} ${
          active ? style.card_image_active : ""
        }`}
        src={photo.src.medium}
        alt={photo.id}
      />
    </div>
  );
}

export default Card;
