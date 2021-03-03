import style from "./Statistics.module.css";
import StatisticsElement from "./StatisticsElement";

const allLang = {
  size: {
    russian: "Количество карт",
    english: "Number of cards",
    german: "Anzahl der Karten",
    italian: "Numero di carte",
    belorussian: "Колькасць карт",
  },
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
  findCard: {
    russian: "Меню",
    english: "FindCard",
    german: "Speisekarte",
    italian: "Menù",
    belorussian: "Меню",
  },
  theme: {
    russian: "Тема",
    english: "Theme",
    german: "Thema",
    italian: "Argomento",
    belorussian: "Тэма",
  },
  score: {
    russian: "Количество очков",
    english: "Points",
    german: "Punkte",
    italian: "Punti",
    belorussian: "Колькасць ачкоў",
  },
  load: {
    russian: "Загрузка",
    english: "Load",
    german: "Wird geladen",
    italian: "Caricamento",
    belorussian: "Загрузка",
  },
  delete: {
    russian: "Удаление",
    english: "Delete",
    german: "Löschen",
    italian: "Eliminazione",
    belorussian: "Выдаленне",
  },
  mode: {
    russian: "Режим",
    english: "Mode",
    german: "Modus",
    italian: "Modalità",
    belorussian: "Рэжым",
  },
};

function Statistics(props) {
  const body = props.winGamesS
    .sort(function (a, b) {
      return b.score - a.score;
    })
    .slice(0, 10);
  return (
    <div className={style.loadGame}>
      <div className={style.loadGame_header}>
        <div>№</div>
        <div>{allLang.size[props.lang]}</div>
        <div>{allLang.move[props.lang]}</div>
        <div>{allLang.time[props.lang]}</div>
        <div>{allLang.theme[props.lang]}</div>
        <div>{allLang.score[props.lang]}</div>
        <div>{allLang.mode[props.lang]}</div>
      </div>
      {body.map((el, index) => (
        <StatisticsElement
          lang={props.lang}
          key={index}
          info={el}
          index={index}
        />
      ))}
    </div>
  );
}

export default Statistics;
