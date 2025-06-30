import React from 'react';
import { Link } from 'react-router-dom'; 
import './ProductCards.css';

const ProductCards = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCards;
