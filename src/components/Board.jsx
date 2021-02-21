import Card from "./Card";
import style from "./Board.module.css";

function Board(props) {
  const { randomCards = [], photo = [] } = props;
  return (
    <div className={style.board}>
      {randomCards.map((el) => (
        <Card key={photo[el].id} number={el} photo={photo[el]} />
      ))}
    </div>
  );
}

export default Board;
