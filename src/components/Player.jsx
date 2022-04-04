import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { nextSong, prevSong } from '../actions/song';
import { stopMusic, playMusic } from '../actions/player';

const Player = ({ songs }) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const currentSong = useSelector((state) => state.currentSong);
  const isPlaying = useSelector((state) => state.isPlaying);
  const audioRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, isPlaying, currentSong]);

  const playClickHandler = () => (isPlaying ? dispatch(stopMusic()) : dispatch(playMusic()));
  const timeUpdateHandler = (e) => {
    const { currentTime, duration } = e.target;
    setSongInfo({ ...songInfo, currentTime, duration });
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipHandler = (direction) => {
    if (direction === 'back') {
      dispatch(prevSong());
    } else if (direction === 'forward') {
      if (songs[songs.length - 1].id === currentSong.id) dispatch(stopMusic());
      dispatch(nextSong());
    }
  };
  const getTime = (time) => Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div
            className="animate-track"
            style={{
              transform: `translateX(${(songInfo.currentTime / songInfo.duration) * 100}%)`,
            }}
          ></div>
        </div>

        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className={`skip-back ${currentSong.id === songs[0].id && 'disabled'}`}
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipHandler('back')}
        />
        <FontAwesomeIcon onClick={playClickHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
        <FontAwesomeIcon
          className={`skip-forward ${currentSong.id === songs[songs.length - 1].id && 'disabled'}`}
          size="2x"
          icon={faAngleRight}
          onClick={() => skipHandler('forward')}
        />
      </div>
      <audio
        onEnded={() => skipHandler('forward')}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
