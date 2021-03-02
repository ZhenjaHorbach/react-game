import React, { useState, useEffect, useRef } from "react";
import Board from "../components/Board";
import Menu from "../components/Menu";
import Score from "../components/Score";

const allLang = {
  menu: {
    russian: "Меню",
    english: "Menu",
    german: "Speisekarte",
    italian: "Menù",
    belorussian: "Меню",
  },
  board: {
    russian: "Доска",
    english: "Board",
    german: "Tafel",
    italian: "Tavola",
    belorussian: "Дошка",
  },
};
function Main(props) {
  const saveArray = JSON.parse(localStorage.getItem("randomCards")) || [];

  //Logic
  const [saveGames, setSaveGames] = useState(
    JSON.parse(localStorage.getItem("saveGames")) || []
  );
  const [randomCards, setRandomCards] = useState(saveArray);
  const [visibilityBoard, setVisibilityBoard] = useState(true);
  const [activeCard, setActiveCard] = useState([]);

  const [findCard, setFindCard] = useState(
    JSON.parse(localStorage.getItem("findCard")) || []
  );

  //Settings
  const [sizeBoard, setSizeBoard] = useState(
    +localStorage.getItem("sizeBoard") || 10
  );
  const [backgroundGradient, setBackgroundGradient] = useState(
    localStorage.getItem("backgroundGradient") || "one"
  );
  const [backgroundColor, setBackgroundColor] = useState(
    localStorage.getItem("backgroundColor") || "rgb(122,122,122)"
  );
  const [formCard, setFormCard] = useState(
    localStorage.getItem("formCard") || 0
  );
  const [newSettings, setNewSettings] = useState(false);

  //Score
  const [scoreMove, setScoreMove] = useState(
    +localStorage.getItem("scoreMove") + 1 || 0
  );
  const [timeMove, setTimeMove] = useState(
    +localStorage.getItem("timeMove") || 0
  );

  //WinGame
  const [winGame, setWinGame] = useState(false);

  //KeyBoard Move
  const [activeKeyBoard, setActiveKeyBoard] = useState(null);
  const [numberKeyBoard, setNumberKeyBoard] = useState(null);
  const [numberFirstKeyBoard, setNumberFirstKeyBoard] = useState(null);
  const [activeCardKeyBoard, setActiveCardKeyBoard] = useState(false);
  const [clickEnter, setClickEnter] = useState(false);

  //AutoGame
  const [autoGame, setAutoGame] = useState(false);
  const [nowCardAuto, setNowCardAuto] = useState(0);
  const [nowCardAutoActive, setNowCardAutoActive] = useState(false);
  const [findCardAuto, setFindCardAuto] = useState(1);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    if (findCard.find((el) => el === randomCards[nowCardAuto])) {
      setNowCardAuto(nowCardAuto + 1);
    }
    if (winGame) {
      setAutoGame(false);
      setActiveKeyBoard(null);
      setNumberKeyBoard(null);
      setActiveCardKeyBoard(false);
      setClickEnter(false);
    }
    if (autoGame) {
      setActiveKeyBoard(+findCardAuto % sizeBoard);
      changeCard(nowCardAutoActive, randomCards[nowCardAuto]);
      setClickEnter(false);
      changeCard(activeCardKeyBoard, activeKeyBoard);
      setClickEnter(true);
      setTimeout(() => {
        setFindCardAuto(+findCardAuto + 1);
      }, 500);
    } else {
      setFindCardAuto(findCardAuto);
    }
  }, 500);

  useInterval(() => {
    if (visibilityBoard) {
      setTimeMove(+timeMove + 1);
      localStorage.setItem("timeMove", timeMove);
    } else {
      setTimeMove(timeMove);
    }
  }, 1000);

  const randomElements = (size, load) => {
    const newCards = Array(size)
      .fill(null)
      .map((_, index) => Math.ceil((index + 1) / 2))
      .sort(() => Math.random() - 0.5);

    const array = JSON.parse(localStorage.getItem("randomCards"));
    if (load) {
      setRandomCards(newCards);
      localStorage.setItem("randomCards", JSON.stringify(newCards));
    } else {
      if (array === null || array.length === 0) {
        setRandomCards(newCards);
        localStorage.setItem("randomCards", JSON.stringify(newCards));
      } else {
        setRandomCards(array);
        localStorage.setItem("randomCards", JSON.stringify(array));
      }
    }
  };

  const createNewGameF = () => {
    props.getImg(props.topic);
    randomElements(sizeBoard, true);
    setVisibilityBoard(true);
    setFindCard([]);
    setScoreMove(0);
    setTimeMove(0);
    setWinGame(false);
    setNewSettings(false);
    localStorage.setItem("findCard", JSON.stringify([]));
    setFindCardAuto(0);
    setAutoGame(false);
    setActiveKeyBoard(null);
    setNumberKeyBoard(null);
    setActiveCardKeyBoard(false);
    setClickEnter(false);
    setNowCardAuto(0);
  };

  const createNewGame = (args) => {
    if (newSettings || args === "ng") {
      createNewGameF();
    } else if (args === "ag") {
      createNewGameF();
      setAutoGame(true);
    }
  };

  const deleteSave = (index) => {
    const newSave = saveGames.filter((_, indexEl) => {
      return index !== indexEl;
    });
    setSaveGames(newSave);
    localStorage.setItem("saveGames", JSON.stringify(newSave));
  };

  const loadGame = (index) => {
    props.getImg(saveGames[index].topic);
    setRandomCards(saveGames[index].randomCards);
    setVisibilityBoard(true);
    setFindCard(saveGames[index].findCards);
    setScoreMove(saveGames[index].scoreMove);
    setTimeMove(saveGames[index].timeMove);
    setWinGame(false);
    setNewSettings(false);
    setBackgroundGradient(saveGames[index].backgroundGradient);
    setBackgroundColor(saveGames[index].backgroundColor);
    setFormCard(saveGames[index].formCard);
    setTimeout(() => {
      localStorage.setItem(
        "randomCards",
        JSON.stringify(saveGames[index].randomCards)
      );
      localStorage.setItem("timeMove", timeMove);
      localStorage.setItem(
        "findCard",
        JSON.stringify(saveGames[index].findCards)
      );
      localStorage.setItem("scoreMove", scoreMove);
      localStorage.setItem("topic", saveGames[index].topic);
      localStorage.setItem("formCard", saveGames[index].formCard);
      localStorage.setItem("backgroundColor", saveGames[index].backgroundColor);
      localStorage.setItem(
        "backgroundGradient",
        saveGames[index].backgroundGradient
      );
    }, 100);
    setFindCardAuto(0);
    setAutoGame(false);
    setActiveKeyBoard(null);
    setNumberKeyBoard(null);
    setActiveCardKeyBoard(false);
    setClickEnter(false);
    setNowCardAuto(0);
  };

  const saveGame = () => {
    const nowArray = saveGames;
    const nowSave = {
      randomCards: randomCards,
      findCards: findCard,
      sizeBoard: sizeBoard,
      backgroundGradient: backgroundGradient,
      backgroundColor: backgroundColor,
      formCard: formCard,
      scoreMove: scoreMove,
      timeMove: timeMove,
      topic: props.topic,
    };
    nowArray.push(nowSave);
    setSaveGames(nowArray);
    localStorage.setItem("saveGames", JSON.stringify(nowArray));
  };

  const changeCard = (active, number) => {
    !active
      ? setActiveCard(activeCard.slice().concat([number]))
      : setActiveCard([]);
  };

  useEffect(() => {
    if (activeCard.length >= 2) {
      if (activeCard[0] === activeCard[1]) {
        setTimeout(() => {
          const newArray = findCard.slice().concat(activeCard[0]);
          setFindCard(newArray);
          setActiveCard([]);
          setScoreMove(scoreMove + 1);
          localStorage.setItem("findCard", JSON.stringify(newArray));
          localStorage.setItem("scoreMove", scoreMove);
        }, 500);
        if ((findCard.length + 1) * 2 === sizeBoard) {
          setTimeout(() => {
            setWinGame(true);
          }, 500);
        }
      } else {
        setTimeout(() => {
          setActiveCard([]);
          setScoreMove(scoreMove + 1);
          localStorage.setItem("scoreMove", scoreMove);
        }, 500);
      }
    }
  }, [activeCard]);
  const elemRow = () => {
    if (visibilityBoard) {
      return Math.floor(
        parseInt(getComputedStyle(document.querySelector("#mainPage")).width) /
          parseInt(
            getComputedStyle(document.querySelector("#mainPage").firstChild)
              .width
          )
      );
    }
  };
  useEffect(() => randomElements(+sizeBoard, false), []);

  useEffect(() => createNewGame(), [newSettings]);

  useEffect(() => {
    const onKeypress = (e) => {
      if (e.code === "KeyD" || e.code === "ArrowRight") {
        if (activeKeyBoard === null) {
          setActiveKeyBoard(0);
        } else {
          if (activeKeyBoard === randomCards.length - 1) {
            setActiveKeyBoard(0);
          } else {
            setActiveKeyBoard(activeKeyBoard + 1);
          }
        }
      } else if (e.code === "KeyA" || e.code === "ArrowLeft") {
        if (activeKeyBoard === null) {
          setActiveKeyBoard(randomCards.length - 1);
        } else {
          if (activeKeyBoard === 0) {
            setActiveKeyBoard(randomCards.length - 1);
          } else {
            setActiveKeyBoard(activeKeyBoard - 1);
          }
        }
      } else if (e.code === "KeyS" || e.code === "ArrowDown") {
        if (activeKeyBoard === null) {
          setActiveKeyBoard(0);
        } else {
          if (
            Math.ceil(randomCards.length / elemRow()) >
              Math.ceil((activeKeyBoard + 1) / elemRow()) &&
            activeKeyBoard + 1 + elemRow() > randomCards.length
          ) {
            setActiveKeyBoard(
              (activeKeyBoard + 1) % 2
                ? Math.ceil(elemRow() / 2) + 1 + activeKeyBoard
                : Math.ceil(elemRow() / 2) + activeKeyBoard
            );
          } else if (
            Math.ceil(randomCards.length / elemRow()) ===
            Math.ceil((activeKeyBoard + 1) / elemRow())
          ) {
            setActiveKeyBoard(Math.floor(elemRow() / 2));
          } else {
            setActiveKeyBoard(activeKeyBoard + elemRow());
          }
        }
      } else if (e.code === "KeyW" || e.code === "ArrowUp") {
        if (activeKeyBoard === null) {
          setActiveKeyBoard(randomCards.length - 1);
        } else {
          if (activeKeyBoard <= elemRow() - 1) {
            setActiveKeyBoard(randomCards.length - Math.floor(elemRow() / 2));
          } else {
            setActiveKeyBoard(activeKeyBoard - elemRow());
          }
        }
      } else if (e.code === "Enter" || e.code === "Space") {
        if (numberFirstKeyBoard === null) {
          setClickEnter(true);
          changeCard(activeCardKeyBoard, numberKeyBoard);
          setNumberFirstKeyBoard(numberKeyBoard);
        } else if (numberFirstKeyBoard === numberKeyBoard) {
          setClickEnter(false);
          changeCard(activeCardKeyBoard, numberKeyBoard);
          setNumberFirstKeyBoard(null);
        } else {
          setClickEnter(false);
          changeCard(activeCardKeyBoard, numberKeyBoard);
          setNumberFirstKeyBoard(null);
        }
      }
    };

    document.addEventListener("keyup", onKeypress);

    return () => {
      document.removeEventListener("keyup", onKeypress);
    };
  }, [activeKeyBoard]);

  return (
    <main className="main">
      <Score scoreMove={scoreMove} timeMove={timeMove} lang={props.lang} />
      <button
        onClick={() => {
          setVisibilityBoard(!visibilityBoard);
          setActiveKeyBoard(null);
        }}
      >
        {!visibilityBoard
          ? allLang.board[props.lang]
          : allLang.menu[props.lang]}
      </button>
      {visibilityBoard ? (
        <Board
          autoGame={autoGame}
          setNowCardAutoActive={setNowCardAutoActive}
          nowCardAuto={nowCardAuto}
          setClickEnter={setClickEnter}
          lang={props.lang}
          clickEnter={clickEnter}
          setActiveCardKeyBoard={setActiveCardKeyBoard}
          setNumberKeyBoard={setNumberKeyBoard}
          randomCards={randomCards}
          photo={props.photo}
          setActiveCard={setActiveCard}
          activeCard={activeCard}
          findCard={findCard}
          backgroundColor={backgroundColor}
          backgroundGradient={backgroundGradient}
          formCard={formCard}
          click={props.click}
          volumeClick={props.volumeClick}
          activeKeyBoard={activeKeyBoard}
          changeCard={changeCard}
        />
      ) : (
        <Menu
          lang={props.lang}
          saveGames={saveGames}
          saveGame={saveGame}
          topic={props.topic}
          setTopic={props.setTopic}
          backgroundColor={backgroundColor}
          formCard={formCard}
          sizeBoard={sizeBoard}
          createNewGame={createNewGame}
          setSizeBoard={setSizeBoard}
          setBackgroundColor={setBackgroundColor}
          setFormCard={setFormCard}
          setNewSettings={setNewSettings}
          setBackgroundGradient={setBackgroundGradient}
          backgroundGradient={backgroundGradient}
          loadGame={loadGame}
          deleteSave={deleteSave}
        />
      )}
      {winGame ? (
        <button
          onClick={() => {
            setActiveKeyBoard(null);
            setNumberKeyBoard(null);
            setActiveKeyBoard(false);
            setClickEnter(false);
            createNewGame("ng");
          }}
        >
          Новая игра
        </button>
      ) : (
        ""
      )}
    </main>
  );
}

export default Main;
