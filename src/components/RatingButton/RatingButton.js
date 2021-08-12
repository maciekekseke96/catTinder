import React from 'react';
import './RatingButton.scss';

const RatingButton = ({ icon, description, color }) => {
  const Icon = icon;
  return (
    <div className="ratingButton">
      <Icon />
      <span style={{color}} className="ratingButton__description">{description}</span>
    </div>
  );
};

export default RatingButton;
