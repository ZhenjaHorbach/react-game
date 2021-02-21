import style from "./Card.module.css";

function Card(props) {
  const { photo, number } = props;
  return (
    <div className={style.card_body} key={photo.id}>
      <h1 className={style.card_name}>{number}</h1>
      <img
        className={style.card_image}
        src={photo.src.portrait}
        alt={photo.id}
      />
    </div>
  );
}

export default Card;
