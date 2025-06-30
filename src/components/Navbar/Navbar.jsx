import React, { useState } from "react";
import "./Navbar.css";
import { FaUserCircle, FaHeart, FaShoppingBag } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
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
                        ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶
                    </div>
                    <div className="scroll-text">
                        ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶
                    </div>
                </div>
            </div>

            <div className="navbar-main">
                <div className="navbar-brand">QUENX.</div>

                <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
                    <Link to="/all-products">Shop All</Link>
                    <Link to="/">Best Sellers</Link>
                    <Link to="/">Active QX</Link>
                    <Link to="/">Artisanal</Link>
                    <Link to="/kids">Kids</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/">Log In</Link>

                </div>

                <div className="navbar-icons">
                    <div className="navbar-search">
                        <CiSearch />
                        <span>Search</span>
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
