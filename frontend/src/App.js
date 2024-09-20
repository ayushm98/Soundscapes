// src/App.js

import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    const progress = (audio.currentTime / audio.duration) * 100;
    setProgress(progress);
  };

  return (
    <div className="player-container">
      <div className="player">
        <div className="artwork">
          <img src="https://via.placeholder.com/150" alt="Album art" />
        </div>
        <div className="controls">
          <h3>Song Title</h3>
          <p>Artist Name</p>
          <audio
            ref={audioRef}
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            onTimeUpdate={handleTimeUpdate}
          ></audio>
          <div className="progress-container">
            <progress value={progress} max="100"></progress>
          </div>
          <button className="play-pause" onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
