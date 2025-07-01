import React from 'react';
import { Link } from 'react-router-dom';
import './BestSellerGrid.css';

const BestSellerProductCard = ({ product }) => {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    label
  } = product;

  return (
    <div className="bestseller-product-card">
     
      <Link to={`/best-sellers/product/${id}`}>
        <div className="bestseller-product-image-wrapper">
          <img src={image} alt={name} className="bestseller-product-image" />
          {label && <span className="bestseller-product-label">{label}</span>}
        </div>
        <div className="bestseller-product-info">
          <h3 className="bestseller-product-title">{name}</h3>
          <div className="bestseller-product-price">
            <span className="bestseller-current-price">${price}</span>
            {originalPrice && (
              <span className="bestseller-original-price">{originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BestSellerProductCard;
