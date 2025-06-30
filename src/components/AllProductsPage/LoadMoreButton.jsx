import React from 'react';
import './LoadMoreButton.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className="load-more-container">
      <button className="load-more-button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
