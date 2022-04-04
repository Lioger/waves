import { combineReducers } from 'redux';
import { isDarkThemeActive } from './theme';
import { currentSong } from './song';
import { isPlaying } from './player';

export default combineReducers({
  isDarkThemeActive,
  currentSong,
  isPlaying,
});
