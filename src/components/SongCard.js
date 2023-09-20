import React from 'react';
import PropTypes from 'prop-types';

function SongCard({ data }) {
  const { thumb, title, artist, rating } = data;

  return (
    <div className="song-card">
      <img src={thumb} alt={title} />
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

SongCard.propTypes = {
  data: PropTypes.shape({
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default SongCard;
