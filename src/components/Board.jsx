import Card from "./Card";
import style from "./Board.module.css";

function Board(props) {
  const { randomCards = [], photo, findCard = [] } = props;
  const styleCards = {
    background: props.backgroundColor,
  };
  return (
    <div className={style.board} id="mainPage">
      {randomCards.map((el, index) => (
        <Card
          clickEnter={props.clickEnter}
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
