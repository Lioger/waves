import { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import { getChillHop } from './data';

const songs = getChillHop();

const App = () => {
  const [isLibraryOpened, setIsLibraryOpened] = useState(false);
  const isDarkThemeActive = useSelector((state) => state.isDarkThemeActive);
  const currentTheme = useMemo(() => (isDarkThemeActive ? 'dark' : 'light'), [isDarkThemeActive]);

  useEffect(() => {
    const bodyClassList = document.querySelector('body').classList;
    isDarkThemeActive ? bodyClassList.add('dark') : bodyClassList.remove('dark');
  }, [isDarkThemeActive]);

  return (
    <div className={`App ${isLibraryOpened ? 'library-opened' : ''} ${currentTheme}`}>
      <Nav isLibraryOpened={isLibraryOpened} setIsLibraryOpened={setIsLibraryOpened} currentTheme={currentTheme} />
      <Song />
      <Player songs={songs} />
      <Library isLibraryOpened={isLibraryOpened} songs={songs} currentTheme={currentTheme} />
    </div>
  );
};

export default App;
