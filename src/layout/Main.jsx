import React, { useState, useEffect } from "react";
import Board from "../components/Board";
function Main(props) {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sizeBoard, setSizeBoard] = useState(20);
  const [randomCards, setRandomCards] = useState(Array(sizeBoard).fill(null));
  const [visibilityBoard, setVisibilityBoard] = useState(false);
  const [visibilityMenu, setVisibilityMenu] = useState(true);
  const [topic, setTopic] = useState("animal");

  const randomElements = () => {
    const newCards = randomCards
      .map((_, index) => Math.ceil((index + 1) / 2))
      .sort(() => Math.random() - 0.5);
    setRandomCards(newCards);
  };

  const getGoods = (topic) => {
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

  useState(() => {
    randomElements(sizeBoard);
  }, []);

  useEffect(() => getGoods(topic), []);
  return (
    <main className="main">
      {loading ? (
        <h2>loading</h2>
      ) : (
        <Board randomCards={randomCards} photo={photo} />
      )}
    </main>
  );
}

export default Main;
