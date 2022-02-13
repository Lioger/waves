import LibrarySong from "./LibrarySong";

const Library = ({ isLibraryOpened, songs, currentSong, setCurrentSong, setIsPlaying }) => {
  return (
    <div className={`library ${isLibraryOpened && 'active'}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => 
            <LibrarySong 
              key={song.id}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              song={song}
              setIsPlaying={setIsPlaying}
            />
        )}
      </div>
    </div>
  )
};

export default Library;
