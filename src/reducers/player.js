import { PLAY_MUSIC, STOP_MUSIC } from '../actions/player';

export const isPlaying = (state = false, action) => {
  switch (action.type) {
    case PLAY_MUSIC:
      return true;
    case STOP_MUSIC:
      return false;
    default:
      return state;
  }
};
