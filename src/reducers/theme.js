import { TOGGLE_THEME } from './../actions/theme';

import { getCookie, setCookie } from '../helpers/cookie';

const initialState = getCookie('darkTheme') ? getCookie('darkTheme') === 'true' : setCookie('darkTheme', false);

export const isDarkThemeActive = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      setCookie('darkTheme', !state);
      return !state;
    default:
      return state;
  }
};
