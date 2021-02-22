import Card from "./Card";
import style from "./Board.module.css";

function Board(props) {
  const { randomCards = [], photo = [], findCard = [] } = props;
  return (
    <div className={style.board}>
      {randomCards.map((el, index) => (
        <Card
          key={`${photo[el].id}${index}`}
          number={el}
          photo={photo[el]}
          setActiveCard={props.setActiveCard}
          activeCard={props.activeCard}
          elementFind={findCard.find((findEl) => findEl === el) ? true : false}
        />
      ))}
    </div>
  );
}
export default Board;
