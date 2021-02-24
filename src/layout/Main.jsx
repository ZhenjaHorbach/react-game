import React, { useState, useEffect, useRef } from "react";
import Board from "../components/Board";
import Menu from "../components/Menu";
import Score from "../components/Score";

function Main(props) {
  //Logic
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomCards, setRandomCards] = useState([]);
  const [visibilityBoard, setVisibilityBoard] = useState(true);
  const [visibilityMenu, setVisibilityMenu] = useState(false);
  const [activeCard, setActiveCard] = useState([]);
  const [findCard, setFindCard] = useState([]);

  //Settings
  const [sizeBoard, setSizeBoard] = useState(10);
  const [topic, setTopic] = useState("animal");
  const [backgroundGradient, setBackgroundGradient] = useState("one");
  const [backgroundColor, setBackgroundColor] = useState("rgb(122,122,122)");
  const [formCard, setFormCard] = useState(0);
  const [newSettings, setNewSettings] = useState(false);

  //Score
  const [scoreMove, setScoreMove] = useState(0);
  const [timeMove, setTimeMove] = useState(0);
  const timeMoveRef = useRef(0);
  const timeBody = useRef(null);

  //WinGame
  const [winGame, setWinGame] = useState(false);

  const randomElements = (size) => {
    const newCards = Array(size)
      .fill(null)
      .map((_, index) => Math.ceil((index + 1) / 2))
      .sort(() => Math.random() - 0.5);
    setRandomCards(newCards);
  };

  const createNewGame = () => {
    getImg(topic);
    randomElements(sizeBoard);
    setVisibilityBoard(true);
    setVisibilityMenu(false);
    setFindCard([]);
    setScoreMove(0);
    setTimeMove(0);
    timeMoveRef.current = 0;
    setWinGame(false);
    setNewSettings(false);
  };

  const getImg = (topic) => {
    setLoading(true);
    fetch(`https://api.pexels.com/v1/search?query=${topic}`, {
      headers: {
        Authorization:
          "563492ad6f917000010000016b056dce0fdf4c658a743a4b7a818706",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.photos && setPhoto(data.photos);
        setLoading(false);
      });
  };

  const changeTimer = () => {
    clearInterval(timeBody.current);
    if (visibilityBoard) {
      timeBody.current = setInterval(() => {
        timeMoveRef.current = timeMoveRef.current + 1;
        setTimeMove(timeMoveRef.current);
      }, 1000);
    } else {
      timeBody.current = setInterval(() => {
        timeMoveRef.current = timeMoveRef.current + 0;
        setTimeMove(timeMoveRef.current);
      }, 1000);
    }
  };

  useEffect(() => {
    setVisibilityBoard(!visibilityBoard);
    setVisibilityMenu(!visibilityMenu);
  }, [props.callBack]);

  useEffect(() => {
    if (activeCard.length >= 2) {
      if (activeCard[0] === activeCard[1]) {
        setTimeout(() => {
          const newArray = findCard.slice().concat(activeCard[0]);
          setFindCard(newArray);
          setActiveCard([]);
          setScoreMove(scoreMove + 1);
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
        }, 500);
      }
    }
  }, [activeCard]);

  useEffect(() => randomElements(sizeBoard), []);

  useEffect(() => changeTimer(), []);

  useEffect(() => changeTimer(), [visibilityBoard]);

  useEffect(() => createNewGame(), [newSettings]);

  useEffect(() => getImg(topic), []);

  return (
    <main className="main">
      <Score scoreMove={scoreMove} timeMove={timeMove} />
      {loading ? (
        <h2>loading</h2>
      ) : visibilityBoard ? (
        <Board
          randomCards={randomCards}
          photo={photo}
          setActiveCard={setActiveCard}
          activeCard={activeCard}
          findCard={findCard}
          backgroundColor={backgroundColor}
          backgroundGradient={backgroundGradient}
          formCard={formCard}
        />
      ) : (
        <Menu
          topic={topic}
          setTopic={setTopic}
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
        />
      )}
      {winGame ? (
        <button
          onClick={() => {
            createNewGame();
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
