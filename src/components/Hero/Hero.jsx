import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import heroShoe from '../../assets/images/hero-shoe.png';
import cardShoe from '../../assets/images/card-shoe.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/cart');
  };

  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>
          WALKING<br />
          WITH<br />
          PURPOSE.
        </h1>
        <p>Premium Vegan Sneakers</p>
      </div>
      <div className="hero-right">
         <img src={heroShoe} alt="Hero Shoe" className="hero-bg-shoe" />
        <div className="productcard">
          <div className="sale-tag">Sale</div>
          <img src={cardShoe} alt="Bio Runner" className="productimage" />
          <div className="productsinfo">
            <h4>Bio Runner</h4>
            <p><span className="old-price">$119.00</span> <span className="new-price">$99.00</span></p>
             <button className="add-to-cart" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;