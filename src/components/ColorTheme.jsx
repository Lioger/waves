const ColorTheme = ({ isDarkActive, setIsDarkActive }) => {
  const changeThemeHandler = () => {
    setIsDarkActive(!isDarkActive);
  };

  return (
    <div className="color-theme-block" onClick={changeThemeHandler}>
      <div
        className={`active-pointer ${isDarkActive ? "dark" : "light"}`}
      ></div>
      <div className="light">☀️</div>
      <div className="dark">🌙</div>
    </div>
  );
};

export default ColorTheme;
