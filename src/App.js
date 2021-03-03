import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Loading from "./components/Loading";

function App() {
  const [callBack, setCallBack] = useState();
  const [photo, setPhoto] = useState([]);
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingM, setLoadingM] = useState(true);
  const [topic, setTopic] = useState(localStorage.getItem("topic") || "animal");
  const [lang, setLang] = useState("english");
  const [click, setClick] = useState("");
  const [volumeClick, setVolumeClick] = useState(0.5);

  const getImg = (topic) => {
    fetch(`https://api.pexels.com/v1/search?query=${topic}`, {
      headers: {
        Authorization:
          "563492ad6f917000010000016240acba163843fa98c1844f0d2b4295",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.photos && setPhoto(data.photos) && setLoading(false);
        return data.photos;
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        });
      });
  };

  const getMusic = () => {
    fetch(
      "https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "4228228f19msha45a049da87e372p1394eajsn6d7c98d0f99d",
          "x-rapidapi-host": "shazam.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        data.tracks && setMusic(data.tracks) && setLoadingM(false);
        return data.tracks;
      })
      .then(() => {
        setTimeout(() => {
          setLoadingM(false);
        });
      });
  };

  useEffect(() => getImg(topic), []);

  useEffect(() => getMusic(), []);

  return (
    <div>
      {loading || loadingM ? (
        <Loading />
      ) : (
        <div className="App">
          <Header
            lang={lang}
            setCallBack={setCallBack}
            music={music}
            setLang={setLang}
            setClick={setClick}
            setVolumeClick={setVolumeClick}
          />
          <Main
            lang={lang}
            volumeClick={volumeClick}
            click={click}
            photo={photo}
            callBack={callBack}
            setMusic={setMusic}
            setLoading={setLoading}
            setLoadingM={setLoadingM}
            topic={topic}
            setTopic={setTopic}
            getImg={getImg}
          />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
