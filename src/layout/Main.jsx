import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import Menu from "../components/Menu";

function Main(props) {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sizeBoard, setSizeBoard] = useState(10);
  const [randomCards, setRandomCards] = useState(Array(sizeBoard).fill(null));
  const [visibilityBoard, setVisibilityBoard] = useState(true);
  const [visibilityMenu, setVisibilityMenu] = useState(false);
  const [topic, setTopic] = useState("animal");
  const [activeCard, setActiveCard] = useState([]);
  const [findCard, setFindCard] = useState([]);

  const randomElements = () => {
    const newCards = randomCards
      .map((_, index) => Math.ceil((index + 1) / 2))
      .sort(() => Math.random() - 0.5);
    setRandomCards(newCards);
  };

  const getImg = (topic) => {
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
        }, 500);
        if ((findCard.length + 1) * 2 === sizeBoard) {
          setTimeout(() => {
            alert("You win");
          }, 500);
        }
      } else {
        setTimeout(() => {
          setActiveCard([]);
        }, 500);
      }
    }
  }, [activeCard]);

  useEffect(() => randomElements(sizeBoard), []);

  useEffect(() => getImg(topic), []);

  return (
    <main className="main">
      {loading ? (
        <h2>loading</h2>
      ) : visibilityBoard ? (
        <Board
          randomCards={randomCards}
          photo={photo}
          setActiveCard={setActiveCard}
          activeCard={activeCard}
          findCard={findCard}
        />
      ) : (
        <Menu />
      )}
    </main>
  );
}

export default Main;
