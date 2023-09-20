import React from 'react';

function StarRating({ stars }) {
  const starIcons = [...Array(Math.round(stars <= 5 ? stars : 0)).keys()].map((_, index) => (
    <div key={index} className="star"></div>
  ));

  return (
    <div className="star-rating">
      {starIcons}
    </div>
  );
}

export default StarRating;
