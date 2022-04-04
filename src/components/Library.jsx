import LibrarySong from './LibrarySong';

const Library = ({ isLibraryOpened, songs, currentTheme }) => (
  <div className={`library ${isLibraryOpened && 'active'} ${currentTheme}`}>
    <h2>Library</h2>
    <div className="library-songs">
      {songs.map((song) => (
        <LibrarySong key={song.id} song={song} />
      ))}
    </div>
  </div>
);

export default Library;
