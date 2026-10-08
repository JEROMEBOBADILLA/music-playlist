import './style.css'

function App() {
  const songs = [
    {
      title: "Ikot",
      artist: "Over October",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150",
    },
    {
      title: "Tayong dalawa",
      artist: "Harmonica Band, Monica",
    },
    {
      title: "Palagi",
      artist: "TJ Monterde",
    },
    {
      title: "Bawat Daan",
      artist: "Ebe Dancel",
    },
    {
      title: "kalapastanganan",
      artist: "fitterkarma",
    },
    {
      title: "Dream Girl",
      artist: "kolohe Kai",
    },
    {
      title: "Mahika",
      artist: "Adie & Janine Teñoso",
    },
  ]

  return (
    <div className="phone">

      {/* Header */}
      <div className="header">
        <span className="back">◀</span>
        <span className="header-title">ALBUM TRACKS</span>
        <span className="menu">☰</span>
      </div>

      {/* Album Name */}
      <div className="album-info">
        <h2>912 Album</h2>
        <p>Lorem ft. Ipsum</p>
      </div>

      {/* Album Cover */}
      <div className="album">
        <div className="cd">
          <div className="cd-hole"></div>
        </div>

        <div className="cover">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
        </div>
      </div>

      {/* Track List */}
      <div className="track-list">
        {songs.map((song, index) => (
          <div className="track" key={index}>

            <div className="track-info">

              {/* Picture ng naka-play na Ikot */}
              {song.title === "Ikot" && (
                <img
                  src={song.image}
                  alt={song.title}
                  className="track-picture"
                />
              )}

              <div>
                <b>{song.title}</b>
                <small>{song.artist}</small>
              </div>

            </div>

            <div className="icons">
              <span>☆</span>
              <span>⊘</span>
              <span>≡</span>
            </div>

          </div>
        ))}
      </div>

      {/* Music Progress */}
      <div className="music-bar">
        <div className="line">
          <div className="progress"></div>
          <div className="circle"></div>
        </div>
      </div>

      {/* Android Bottom Navigation */}
      <div className="bottom">

        {/* Back */}
        <span className="back"></span>

        {/* Home */}
        <span className="home"></span>

        {/* Recent */}
        <span className="recent"></span>

      </div>

    </div>
  )
}

export default App
