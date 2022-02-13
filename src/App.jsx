import { useState } from 'react';
// Importing styles
import './styles/app.scss';
// Importing components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
// Importing initial data
import data from './data';

function App() {
  // Creating state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryOpened, setIsLibraryOpened] = useState(false);

  return (
    <div className={`App ${isLibraryOpened && 'library-opened'}`}>
      <Nav isLibraryOpened={isLibraryOpened} setIsLibraryOpened={setIsLibraryOpened} />
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
      />
    </div>
  );
}

export default App;
