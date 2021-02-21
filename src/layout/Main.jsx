import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import Menu from "../components/Menu";

function Main(props) {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sizeBoard, setSizeBoard] = useState(20);
  const [randomCards, setRandomCards] = useState(Array(sizeBoard).fill(null));
  const [visibilityBoard, setVisibilityBoard] = useState(true);
  const [visibilityMenu, setVisibilityMenu] = useState(false);
  const [topic, setTopic] = useState("apple");

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

  useEffect(() => randomElements(sizeBoard), []);

  useEffect(() => getImg(topic), []);

  return (
    <main className="main">
      {loading ? (
        <h2>loading</h2>
      ) : visibilityBoard ? (
        <Board randomCards={randomCards} photo={photo} />
      ) : (
        <Menu />
      )}
    </main>
  );
}

export default Main;
