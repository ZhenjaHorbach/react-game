import style from "./LoadElement.module.css";

const allLang = {
  animal: {
    russian: "Животные",
    english: "Animals",
    german: "Tiere",
    italian: "Animali",
    belorussian: "Жывёлы",
  },
  people: {
    russian: "Люди",
    english: "People",
    german: "Menschen",
    italian: "Persone",
    belorussian: "Людзі",
  },
  family: {
    russian: "Семья",
    english: "Family",
    german: "Familie",
    italian: "Una famiglia",
    belorussian: "Сям'я",
  },
  game: {
    russian: "Игры",
    english: "Games",
    german: "Spiele",
    italian: "Giochi",
    belorussian: "Гульні",
  },
  car: {
    russian: "Машины",
    english: "Cars",
    german: "Autos",
    italian: "Automobili",
    belorussian: "Машыны",
  },
  nature: {
    russian: "Природа",
    english: "Nature",
    german: "Natur",
    italian: "Natura",
    belorussian: "Прырода",
  },
  sport: {
    russian: "Спорт",
    english: "Sport",
    german: "Sport",
    italian: "Sport",
    belorussian: "Спорт",
  },
  food: {
    russian: "Еда",
    english: "Food",
    german: "Essen",
    italian: "Cibo",
    belorussian: "Ежа",
  },
  space: {
    russian: "Космос",
    english: "Space",
    german: "Raum",
    italian: "Spazio",
    belorussian: "Космас",
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
};

function LoadElement(props) {
  return (
    <div className={style.loadGame_body}>
      <div>{props.index + 1}</div>
      <div>{props.info.sizeBoard}</div>
      <div>{props.info.scoreMove}</div>
      <div>{props.info.timeMove}</div>
      <div>{props.info.findCards.length}</div>
      <div>{allLang[props.info.topic][props.lang]}</div>
      <div>110</div>
      <div>
        <button onClick={() => props.loadGame(props.index)}>
          {allLang.load[props.lang]}
        </button>
      </div>
      <div>
        <button onClick={() => props.deleteSave(props.index)}>
          {allLang.delete[props.lang]}
        </button>
      </div>
    </div>
  );
}

export default LoadElement;
