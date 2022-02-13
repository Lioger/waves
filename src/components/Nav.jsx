import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setIsLibraryOpened, isLibraryOpened }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setIsLibraryOpened(!isLibraryOpened)}>
        <FontAwesomeIcon icon={faMusic} /> Library
      </button>
    </nav>
  )
}

export default Nav;
