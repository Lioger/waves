import { useSelector, useDispatch } from 'react-redux';
import { useSwipeable } from 'react-swipeable';

import { toggleTheme } from '../actions/theme';

const ColorTheme = () => {
  const isDarkThemeActive = useSelector((state) => state.isDarkThemeActive);
  const dispatch = useDispatch();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (isDarkThemeActive) dispatch(toggleTheme());
    },
    onSwipedRight: () => {
      if (!isDarkThemeActive) dispatch(toggleTheme());
    },
  });

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="color-theme-block" onClick={handleThemeChange}>
      <div className={`active-pointer ${isDarkThemeActive ? 'dark' : 'light'}`} {...swipeHandlers}></div>
      <div className="light">☀️</div>
      <div className="dark">🌙</div>
    </div>
  );
};

export default ColorTheme;
