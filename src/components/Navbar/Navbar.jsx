import React, { useState } from "react";
import "./Navbar.css";
import { FaUserCircle, FaHeart, FaShoppingBag } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <div className="navbar-logo">
          <img
            src="https://wixmp-cca7fdc52d9b9ae8ca79a86d.wixmp.com/marketplace/partners/e199f9c4-fccd-4017-bc4a-1ee4471308b0/profile-image/1692852445044/wix-black.jpg"
            alt="Wix Studio Logo"
          />
          <span>WIX STUDIO</span>
        </div>
      </div>

      <div className="navbar-banner">
        <div className="scroll-wrapper">
          <div className="scroll-text">
            ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶
          </div>
          <div className="scroll-text">
           FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶
          </div>
        </div>
      </div>

      <div className="navbar-main">
        <div className="navbar-brand">QUENX.</div>

        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <Link to="/all-products" onClick={toggleMobileMenu}>Shop All</Link>
          <Link to="/best-sellers" onClick={toggleMobileMenu}>Best Sellers</Link>
          <Link to="/active-qx" onClick={toggleMobileMenu}>Active QX</Link>
          <Link to="/artisanal" onClick={toggleMobileMenu}>Artisanal</Link>
          <Link to="/kids" onClick={toggleMobileMenu}>Kids</Link>
          <Link to="/about" onClick={toggleMobileMenu}>About Us</Link>
        </div>

        <div className="navbar-icons">
          <div className="navbar-search">
            <CiSearch size={20} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          <FaUserCircle />
          <FaHeart />
          <div className="navbar-cart">
            <FaShoppingBag />
          </div>
          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            <RxHamburgerMenu size={24} color="#000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
