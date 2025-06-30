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
    path: '/active-qx', // You can update this later
  },
  {
    title: 'KIDS',
    image: kids,
    path: '/kids', // ✅ Route to Kids Shoes Page
  },
  {
    title: 'ARTISANAL',
    image: artisanal,
    path: '/', // You can update this later
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
        {collections.map((item, index) => {
          const content = (
            <div className="collection-card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title} →</h3>
            </div>
          );

          return item.path ? (
            <Link to={item.path} key={index} className="collection-link">
              {content}
            </Link>
          ) : (
            content
          );
        })}
      </div>
    </div>
  );
};

export default CollectionSection;
