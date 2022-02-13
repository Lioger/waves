import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying, songs }) => {
  // Refs
  const audioRef = useRef(null);
  // Effects
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, isPlaying, currentSong])
  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  // Event handlers
  const timeUpdateHandler = (e) => {
    const { currentTime, duration } = e.target;
    setSongInfo({ ...songInfo, currentTime, duration });
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipHandler = (direction) => {
    const indexOfCurrent = songs.findIndex(song => song.id === currentSong.id);
    if (direction === 'back' && songs[indexOfCurrent - 1]) {
      setCurrentSong(songs[indexOfCurrent - 1]);
    } else if (direction === 'forward') {
      currentSong.id === songs[songs.length - 1].id && setIsPlaying(false);
      setCurrentSong(songs[(indexOfCurrent + 1) % songs.length]);
    }
  };
  const getTime = (time) => Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2);
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}>
          <input 
            min={0} 
            max={songInfo.duration || 0} 
            value={songInfo.currentTime} 
            onChange={dragHandler}
            type="range" 
          />
          <div
            className="animate-track"
            style={{ transform: `translateX(${songInfo.currentTime / songInfo.duration * 100}%)` }}
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
        <FontAwesomeIcon
          onClick={() => setIsPlaying(!isPlaying)}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
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
      >
      </audio>
    </div>
  )
}
  
export default Player;
  