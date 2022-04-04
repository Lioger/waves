import { NEXT_SONG, PREV_SONG, SET_CURRENT_SONG } from '../actions/song';
import { getChillHop } from './../data';

const songs = getChillHop();

export const currentSong = (state = songs[0], action) => {
  const indexOfCurrent = songs.findIndex((song) => song.id === state.id);
  switch (action.type) {
    case SET_CURRENT_SONG:
      return action.payload;
    case PREV_SONG:
      return !songs[indexOfCurrent - 1] ? state : songs[indexOfCurrent - 1];
    case NEXT_SONG:
      return songs[(indexOfCurrent + 1) % songs.length];
    default:
      return state;
  }
};
