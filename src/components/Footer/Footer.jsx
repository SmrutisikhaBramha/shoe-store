import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>SHOP</h3>
          <ul>
            <li>All products</li>
            <li>Best Sellers</li>
            <li>Active QX</li>
            <li>Artisanal</li>
            <li>Kids</li>
            <li>About Us</li>
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
            <li>Instagram</li>
            <li>Facebook</li>
            <li>X</li>
            <li>Tik Tok</li>
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
