import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionSection.css';

import activeQx from '../../assets/images/active-qx.jpg';
import kids from '../../assets/images/kids.jpg';
import artisanal from '../../assets/images/artisanal.jpg';

const collections = [
  {
    title: 'ACTIVE QX',
    image: activeQx,
    path: '/active-qx',
  },
  {
    title: 'KIDS',
    image: kids,
    path: '/kids',
  },
  {
    title: 'ARTISANAL',
    image: artisanal,
    path: '/artisanal', // ✅ Corrected here
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
