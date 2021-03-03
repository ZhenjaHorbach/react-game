import React, { useState, useEffect, useRef } from "react";
import style from "./Volume.module.css";

function Volume(props) {
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [volumeClick, setVolumeClick] = useState(0.5);
  const [numMusic, setNumMusic] = useState(0);
  const [urlmusic, setUrlMusic] = useState(
    props.music[numMusic].hub.actions[1].uri
  );
  const [music, setMusic] = useState(new Audio(urlmusic));
  const [click, setClick] = useState(
    new Audio("https://my-files.su/Save/127467/click.mp3")
  );
  const timeMoveRef = useRef(0);
  const timeBody = useRef(null);
  const [timeMove, setTimeMove] = useState(0);
  props.setClick(click);

  const changeVolume = (event) => {
    setVolume(+event.target.value);
    music.volume = +volume / 100;
  };
  const changeVolumeClick = (event) => {
    setVolumeClick(+event.target.value);
    props.setVolumeClick(+event.target.value / 100);
  };

  const pauseClip = () => {
    music.pause();
  };
  const playClip = () => {
    music.play();
  };

  const previousMusic = () => {
    const num = numMusic - 1;
    if (num < 0) {
      setNumMusic(19);
    } else {
      setNumMusic(num);
    }
  };

  const nextMusic = () => {
    const num = numMusic + 1;
    if (num > 19) {
      setNumMusic(0);
    } else {
      setNumMusic(num);
    }
  };

  useEffect(() => {
    play ? playClip() : pauseClip();
  }, [play]);

  useEffect(() => {
    if (+volume === 0) {
      music.pause();
      setPlay(false);
    }
  }, [volume]);

  useEffect(() => {
    music.src = props.music[numMusic].hub.actions[1].uri;
    music.load();
    play ? music.play() : music.pause();
  }, [numMusic]);

  music.onended = () => {
    nextMusic();
  };

  const styleDisc = {
    backgroundImage: `url(${props.music[numMusic].share["image"]})`,
    transform: `rotate(${timeMove}deg)`,
  };

  const changeRadius = () => {
    clearInterval(timeBody.current);
    if (play) {
      timeBody.current = setInterval(() => {
        timeMoveRef.current = timeMoveRef.current + 20;
        setTimeMove(timeMoveRef.current);
        localStorage.setItem("timeMove", timeMoveRef.current);
      }, 2000);
    } else {
      timeBody.current = setInterval(() => {
        timeMoveRef.current = timeMoveRef.current + 0;
        setTimeMove(timeMoveRef.current);
        localStorage.setItem("timeMove", timeMoveRef.current);
      }, 2000);
    }
  };

  useEffect(() => changeRadius(), []);

  useEffect(() => changeRadius(), [play]);

  return (
    <div className={style.volume}>
      <div className={style.music}>
        <div className={style.music_top}>
          <img
            className={style.music_AB}
            src="https://img.icons8.com/ultraviolet/40/000000/back.png"
            onClick={() => previousMusic()}
          />
          <div className={style.music_play} style={styleDisc}>
            {play ? (
              <img
                className={style.music_SP}
                src="https://img.icons8.com/ultraviolet/40/000000/pause.png"
                onClick={() => setPlay(!play)}
              />
            ) : (
              <img
                className={style.music_SP}
                src="https://img.icons8.com/ultraviolet/40/000000/play--v1.png"
                onClick={() => setPlay(!play)}
              />
            )}
          </div>
          <img
            className={style.music_AB}
            src="https://img.icons8.com/ultraviolet/40/000000/forward--v2.png"
            onClick={() => nextMusic()}
          />
        </div>
        <div className={style.music_bottom}>
          <p>
            {props.music[numMusic].subtitle}-{props.music[numMusic].title}
          </p>
          <input
            type="range"
            min="0"
            max="100"
            value={+volume}
            onChange={changeVolume}
          ></input>
        </div>
      </div>
      <div className={style.click}>
        <input
          type="range"
          min="0"
          max="100"
          value={+volumeClick}
          onChange={changeVolumeClick}
        ></input>
      </div>
    </div>
  );
}
export default Volume;
