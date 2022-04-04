import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../actions/theme';

const ColorTheme = () => {
  const isDarkThemeActive = useSelector((state) => state.isDarkThemeActive);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="color-theme-block" onClick={handleThemeChange}>
      <div className={`active-pointer ${isDarkThemeActive ? 'dark' : 'light'}`}></div>
      <div className="light">☀️</div>
      <div className="dark">🌙</div>
    </div>
  );
};

export default ColorTheme;
