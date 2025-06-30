import React from 'react';
import './LandingSection.css';
import backgroundImage from '../../assets/images/background.jpg'; // make sure this path is correct

const LandingSection = () => {
  return (
    <section className="landing-section">
      <img src={backgroundImage} alt="Background" className="bg-shoe" />

      <div className="landing-heading">
        <h1>STEP INTO <br /> SUSTAINABILITY</h1>
      </div>

      <div className="landing-paragraph">
        <p>
          This is the space to introduce visitors to the business or brand. Briefly explain who’s behind it, what it does and what makes it unique. Share its core values and what this site has to offer.
        </p>
      </div>
    </section>
  );
};

export default LandingSection;