import LibrarySong from "./LibrarySong";

const Library = ({
  isLibraryOpened,
  songs,
  currentSong,
  setCurrentSong,
  setIsPlaying,
  currentTheme,
}) => {
  return (
    <div className={`library ${isLibraryOpened && "active"} ${currentTheme}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            song={song}
            setIsPlaying={setIsPlaying}
            currentTheme={currentTheme}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
