import { useDispatch, useSelector } from 'react-redux';
import { useSwipeable } from 'react-swipeable';

import { nextSong, prevSong } from '../actions/song';
import { stopMusic } from '../actions/player';
import { getChillHop } from '../data';

const songs = getChillHop();

const Song = () => {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.currentSong);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (songs[songs.length - 1].id === currentSong.id) dispatch(stopMusic());
      dispatch(nextSong());
    },
    onSwipedRight: () => dispatch(prevSong()),
  });

  return (
    <div className="song-container" {...swipeHandlers}>
      <img src={currentSong.cover} alt={currentSong.name} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
