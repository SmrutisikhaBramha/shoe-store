import React from 'react';
import './PromoBanner.css';
import { Link } from 'react-router-dom';
import hero1Shoe from '../../assets/images/hero1-shoe.png';

const PromoBanner = () => {
  return (
    <section className="promo-section">
      <div className="promo-left">
        <h1>KIDS COLLECTION<br />20% OFF SALE</h1>
        <p>Exclusive, one-time offer</p>
        <Link to="/kids">
          <button>SHOP NOW</button>
        </Link>
      </div>
      <div className="promo-right">
        <img src={hero1Shoe} alt="Sneakers" />
      </div>
    </section>
  );
};

export default PromoBanner;
