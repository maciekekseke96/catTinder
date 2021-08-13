import React from 'react';
import './RatingButton.scss';

const RatingButton = ({ icon, description, color, handleVote }) => {
  const Icon = icon;
  return (
    <div className="ratingButton" onClick={() => handleVote()}>
      <Icon />
      <span style={{ color }} className="ratingButton__description">
        {description}
      </span>
    </div>
  );
};

export default RatingButton;
