import { useDispatch, useSelector } from 'react-redux';
import { playMusic } from '../actions/player';
import { setCurrentSong } from '../actions/song';

const LibrarySong = ({ song }) => {
  const currentSong = useSelector((state) => state.currentSong);
  const dispatch = useDispatch();

  const chooseSongHandler = async () => {
    await dispatch(setCurrentSong(song));
    playMusic();
  };

  return (
    <div className={`library-song ${song.id === currentSong.id && 'active'}`} onClick={chooseSongHandler}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
