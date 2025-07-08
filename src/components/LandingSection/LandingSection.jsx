import React from 'react';
import './LandingSection.css';
import backgroundImage from '../../assets/images/background.jpg'; 

const LandingSection = () => {
  return (
    <section className="landing-section">
      <img src={backgroundImage} alt="Background" className="bg-shoe" />

      <div className="landing-heading">
        <h1>STEP INTO <br /> SUSTAINABILITY</h1>
      </div>

      <div className="landing-paragraph">
        <p>
          This is the space to introduce visitors to the business or brand. Briefly explain who’s behind it, what it does and what makes it unique. Share its core values and what this site has to Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ullam laudantium blanditiis quis omnis, nesciunt et deserunt a placeat dolor provident explicabo, odit, quod quasi numquam porro officiis voluptas? Vitae laboriosam unde soluta deleniti est.
        </p>
      </div>
    </section>
  );
};

export default LandingSection;