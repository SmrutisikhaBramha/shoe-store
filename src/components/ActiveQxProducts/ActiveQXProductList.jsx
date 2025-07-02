import React from 'react';
import { Link } from 'react-router-dom';
import './ActiveQXGrid.css'; 

const ActiveQXProductList = ({ products }) => {
  return (
    <div className="activeqx-products-grid">
      {products.map((product) => (
        <div key={product.id} className="activeqx-product-card">
          <Link to={`/active-qx/product/${product.id}`}>
            <div className="activeqx-product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="activeqx-product-image"
              />
              {product.label && (
                <span className="activeqx-product-label">{product.label}</span>
              )}
            </div>
          </Link>
          <div className="activeqx-product-info">
            <h3 className="activeqx-product-title">{product.name}</h3>
            <div className="activeqx-product-price">
              <span className="activeqx-current-price">${product.price}</span>
              {product.originalPrice && (
                <span className="activeqx-original-price">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveQXProductList;
