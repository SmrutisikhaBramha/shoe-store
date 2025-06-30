import React from 'react';
import './BannerMarquee.css';

const BannerMarquee = () => {
  return (
    <div className="marquee-container">
  <div className="marquee">
    <span> * Limited Edition * Freshly Arrived , Limited Edition * Freshly Arrived , </span>
    <span>Limited Edition * Freshly Arrived , Limited Edition * Freshly Arrived , </span>
  </div>
  <div className="marquee">
    <span> * Limited Edition * Freshly Arrived * Limited Edition * Freshly Arrived * </span>
    <span>Limited Edition * Freshly Arrived * Limited Edition * Freshly Arrived * </span>
  </div>
</div>
  );
};

export default BannerMarquee;
