import React from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css';

const ProductLists = ({ products }) => {
  return (
    <div className="products-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              {product.label && (
                <span className="product-label">{product.label}</span>
              )}
            </div>
 </Link>
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <div className="product-price">
                <span className="current-price">{product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">{product.originalPrice}</span>
                )}
              </div>
            </div>
          
        </div>
      ))}
    </div>
  );
};

export default ProductLists;
