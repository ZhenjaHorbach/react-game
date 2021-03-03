import style from "./Score.module.css";

const allLang = {
  time: {
    russian: "Время",
    english: "Time",
    german: "Zeit",
    italian: "Tempo",
    belorussian: "Час",
  },
  move: {
    russian: "Шаги",
    english: "Move",
    german: "Bewegung",
    italian: "Mossa",
    belorussian: "Крокі",
  },
};

function Score(props) {
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }
  return (
    <div className={style.score}>
      <h2 className={style.text}>
        {allLang.time[props.lang]}:
        <span>{`${addZero(Math.floor(props.timeMove / 60))}:${addZero(
          props.timeMove % 60
        )}`}</span>
      </h2>
      <h2 className={style.text}>
        {allLang.move[props.lang]}: <span>{props.scoreMove}</span>
      </h2>
    </div>
  );
}
export default Score;
