import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import ColorTheme from './ColorTheme';

const Nav = ({ setIsLibraryOpened, isLibraryOpened, currentTheme }) => (
  <nav>
    <h1 className={currentTheme}>Waves</h1>
    <ColorTheme />
    <button className={currentTheme} onClick={() => setIsLibraryOpened(!isLibraryOpened)}>
      <FontAwesomeIcon icon={faMusic} /> Library
    </button>
  </nav>
);

export default Nav;
