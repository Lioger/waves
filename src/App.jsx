import { useState } from "react";
// Importing styles
import "./styles/app.scss";
// Importing components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// Importing initial data
import data from "./data";

function App() {
  // Creating state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryOpened, setIsLibraryOpened] = useState(false);
  const [isDarkActive, setIsDarkActive] = useState(false);

  const currentTheme = isDarkActive ? "dark" : "light";

  return (
    <div
      className={`App ${isLibraryOpened && "library-opened"} ${currentTheme}`}
    >
      <Nav
        isLibraryOpened={isLibraryOpened}
        setIsLibraryOpened={setIsLibraryOpened}
        isDarkActive={isDarkActive}
        setIsDarkActive={setIsDarkActive}
        currentTheme={currentTheme}
      />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
      />
      <Library
        isLibraryOpened={isLibraryOpened}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        currentTheme={currentTheme}
      />
    </div>
  );
}

export default App;
