import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SidebarFilter.css';

const categories = [
  { name: 'All Products', path: '/all-products' },
  { name: 'Active QX', path: '/' }, // placeholder
  { name: 'Artisanal', path: '/' }, // placeholder
  { name: 'Best Sellers', path: '/best-sellers' },
  { name: 'Kids Shoes', path: '/kids' },
];

const SidebarFilter = ({ priceRange, setPriceRange }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handlePriceChange = (e) => {
    const newValue = parseInt(e.target.value);
    setPriceRange([64, newValue]);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleCategoryClick = (path) => {
    navigate(path);
    setIsMobileOpen(false); // close sidebar on mobile after click
  };

  return (
    <>
      <div className="filter-toggle" onClick={toggleMobileSidebar}>
        Filter & Sort
      </div>

      <div className={`sidebar-filter ${isMobileOpen ? 'open' : ''}`}>
        <h3 className="section-heading">Browse by</h3>
        <hr />
        <ul className="category-list">
          {categories.map((category, index) => (
            <li
              key={index}
              className="category-item"
              onClick={() => handleCategoryClick(category.path)}
            >
              {category.name}
            </li>
          ))}
        </ul>

        <h4 className="section-heading">Filter by</h4>
        <hr />
        <div className="price-filter">
          <div className="price-label">Price</div>
          <input
            type="range"
            min="64"
            max="129"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="price-slider"
          />
          <div className="price-range">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {isMobileOpen && <div className="overlay" onClick={toggleMobileSidebar}></div>}
    </>
  );
};

export default SidebarFilter;
