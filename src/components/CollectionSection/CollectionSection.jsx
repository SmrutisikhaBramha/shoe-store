import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionSection.css';

import artisanal from '../../assets/images/artisanal.jpg';

const collections = [
  {
    title: 'ACTIVE QX',
    image: "https://i.pinimg.com/originals/15/66/27/15662754a4d5f449a245ba7863bbd22e.jpg",
    path: '/active-qx',
  },
  {
    title: 'KIDS',
    image: "https://i.pinimg.com/originals/9d/40/a1/9d40a1920808e0a44b7810731970b245.jpg",
    path: '/kids',
  },
  {
    title: 'ARTISANAL',
    image: artisanal,
    path: '/artisanal', 
  },
];

const CollectionSection = () => {
  return (
    <div className="collection-container">
      <div className="collection-header">
        <h2>SHOP BY COLLECTION</h2>
        <Link to="/all-products" className="view-all">
          VIEW ALL →
        </Link>
      </div>
      <div className="collection-grid">
        {collections.map((item, index) => (
          <Link to={item.path} key={index} className="collection-link">
            <div className="collection-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title} →</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;
