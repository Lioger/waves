import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import ColorTheme from "./ColorTheme";

const Nav = ({
  setIsLibraryOpened,
  isLibraryOpened,
  isDarkActive,
  setIsDarkActive,
  currentTheme,
}) => {
  return (
    <nav>
      <h1 className={currentTheme}>Waves</h1>
      <ColorTheme
        isDarkActive={isDarkActive}
        setIsDarkActive={setIsDarkActive}
      />
      <button
        className={currentTheme}
        onClick={() => setIsLibraryOpened(!isLibraryOpened)}
      >
        <FontAwesomeIcon icon={faMusic} /> Library
      </button>
    </nav>
  );
};

export default Nav;
