import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>SHOP</h3>
          <ul>
            <li><Link to="/all-products">All Products</Link></li>
            <li><Link to="/best-sellers">Best Sellers</Link></li>
            <li><Link to="/active-qx">Active QX</Link></li>
            <li><Link to="/artisanal">Artisanal</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>POLICIES</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>CONTACT</h3>
          <p>500 Terry Francine St.</p>
          <p>San Francisco, CA 94158</p>
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
        </div>

        <div className="footer-column">
          <h3>SOCIAL</h3>
          <ul>
            <li><a href="https://www.instagram.com/wixstudio/#">Instagram</a></li>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">X</a></li>
            <li><a href="https://www.tiktok.com">TikTok</a></li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h3>STAY IN THE LOOP</h3>
          <p>Sign up to receive updates and special offers</p>
          <input type="email" placeholder="Email Address *" />
          <div className="checkbox-container">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe">Yes, subscribe me to your newsletter. *</label>
          </div>
          <button>SIGN UP</button>
        </div>
      </div>

      <div className="footer-bottom">
        <h2>QUENX.</h2>
        <p>&copy; 2035 by Quenx. Built on <a href="#">Wix Studio</a></p>
      </div>
    </footer>
  );
};

export default Footer;
