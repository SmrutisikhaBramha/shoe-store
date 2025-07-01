import React from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css';

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    title, 
    price,
    originalPrice,
    image,
    label
  } = product;

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <div className="product-image-wrapper">
          <img src={image} alt={name || title} className="product-image" />
          {label && <span className="product-label">{label}</span>}
        </div>
        <div className="product-info">
          <h3 className="product-title">{name || title}</h3>
          <div className="product-price">
            <span className="current-price">
              {typeof price === 'string' ? price : `$${price}`}
            </span>
            {originalPrice && (
              <span className="original-price">{originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
