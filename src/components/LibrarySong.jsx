const LibrarySong = ({ audioRef, song, currentSong, setCurrentSong, setIsPlaying }) => {
  const chooseSongHandler = async () => {
    await setCurrentSong(song);
    setIsPlaying(true);
  };
  return (
    <div className={`library-song ${song.id === currentSong.id && 'active'}`} onClick={chooseSongHandler}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
};
  
export default LibrarySong;
  