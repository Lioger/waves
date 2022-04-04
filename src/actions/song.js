export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const PREV_SONG = 'PREV_SONG';
export const NEXT_SONG = 'NEXT_SONG';

export const setCurrentSong = async (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

export const prevSong = () => ({
  type: PREV_SONG,
});

export const nextSong = () => ({
  type: NEXT_SONG,
});
