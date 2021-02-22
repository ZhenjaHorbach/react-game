import style from "./Card.module.css";
import React, { useState, useEffect } from "react";

function Card(props) {
  const { photo, number, elementFind } = props;

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (props.activeCard.length === 0) {
      setActive(false);
    }
  }, [props.activeCard]);
  return (
    <div
      className={`${style.card_body} ${
        elementFind ? style.card_body_elementFind : ""
      }`}
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
        className={`${style.card_image} ${
          active ? style.card_image_active : ""
        }`}
        src={photo.src.portrait}
        alt={photo.id}
      />
    </div>
  );
}

export default Card;
