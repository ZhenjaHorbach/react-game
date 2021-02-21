import Card from "./Card";

function Board(props) {
  const { randomCards = [], photo = [] } = props;
  return (
    <div className="Board">
      {randomCards.map((el) => (
        <Card key={photo[el].id} number={el} photo={photo[el]} />
      ))}
    </div>
  );
}

export default Board;
