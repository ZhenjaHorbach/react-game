import React, { useState, useEffect } from "react";

function Volume(props) {
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(50);
  const [numMusic, setNumMusic] = useState(0);
  const [urlmusic, setUrlMusic] = useState(
    props.music[numMusic].hub.actions[1].uri
  );
  const [music, setMusic] = useState(new Audio(urlmusic));

  const changeVolume = (event) => {
    setVolume(event.target.value);
    music.volume = +volume / 100;
    if (+volume === 0) {
      music.pause();
      setPlay(false);
    }
  };

  const pauseClip = (media) => {
    media.pause();
  };
  const playClip = (media) => {
    media.play();
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
    play ? playClip(music) : pauseClip(music);
  }, [play]);
  return (
    <div>
      <img
        src="https://img.icons8.com/flat-round/32/000000/left--v1.png"
        onClick={() => previousMusic()}
      />
      <div>
        {play ? (
          <img
            src="https://img.icons8.com/office/48/000000/circled-pause.png"
            onClick={() => setPlay(!play)}
          />
        ) : (
          <img
            src="https://img.icons8.com/office/48/000000/circled-play.png"
            onClick={() => setPlay(!play)}
          />
        )}
      </div>
      <img
        src="https://img.icons8.com/flat-round/32/000000/right--v1.png"
        onClick={() => nextMusic()}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={changeVolume}
      ></input>
    </div>
  );
}
export default Volume;
