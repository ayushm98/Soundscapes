import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./MusicPlayerCard.css";

const MusicPlayerCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // State for progress bar
  const audioRef = useRef(null);
  const [lyrics, setLyrics] = useState("Please just look into my eyes...");

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Simulate fetching lyrics from an API
    setLyrics(
      "Please just look into my eyes, and say we'll be alright, as the lights go down..."
    );
  }, []);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    const progress = (audio.currentTime / audio.duration) * 100;
    setProgress(progress); // Update the progress bar
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="music-player-card">
      {/* Album Art */}
      <img
        src={require("../clip_art.jpeg")}
        className={`album-art ${isPlaying ? "playing" : ""}`}
        alt="Clip Art"
      />

      {/* Play/Pause Controls */}
      <div className="controls">
        <button className="play-pause-button" onClick={togglePlayPause}>
          {isPlaying ? <FaPause color="white" /> : <FaPlay color="white" />}
        </button>
      </div>

      {/* Lyrics */}
      <div className={`lyrics-container ${isPlaying ? "scrolling" : ""}`}>
        <div className="lyrics-text">{lyrics}</div>
      </div>

      {/* Song Info */}
      <div className="song-info">
        <h3>Paranoya</h3>
        <p>Koorosh</p>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ></audio>
    </div>
  );
};

export default MusicPlayerCard;
