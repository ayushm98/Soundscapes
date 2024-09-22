import React from 'react';
import './ArtistBioCard.css'; // Ensure you style it with CSS

const ArtistBioCard = () => {
  const artistBio = {
    name: "Koorosh",
    genre: "Hip-Hop, Rap",
    bio: "Koorosh is an influential Iranian rapper and producer known for his socially conscious lyrics and powerful music. He emerged in the Persian music scene with his unique blend of modern beats and traditional Persian influences.",
    socialMediaLink: "https://www.instagram.com/koorosh.music",
    
  };

  return (
    <div className="artist-bio-card">
      <div className="artist-image">
        <img src={require('./ayush.jpeg')} alt={`${artistBio.name}`} />
      </div>
      <div className="artist-info">
        <h2>{artistBio.name}</h2>
        <p><strong>Genre:</strong> {artistBio.genre}</p>
        <p>{artistBio.bio}</p>
        <a href={artistBio.socialMediaLink} target="_blank" rel="noopener noreferrer">
          Follow on Instagram
        </a>
      </div>
    </div>
  );
};

export default ArtistBioCard;
