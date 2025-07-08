import React from 'react';
import { Link } from 'react-router-dom';
import './ArtisanalGrid.css'; 

const ArtisanalProductList = ({ products }) => {
  return (
    <div className="artisanal-products-grid">
      {products.map((product) => (
        <div key={product.id} className="artisanal-product-card">
          <Link to={`/artisanal/product/${product.id}`}>
            <div className="artisanal-product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="artisanal-product-image"
              />
              {product.label && (
                <span className="artisanal-product-label">{product.label}</span>
              )}
            </div>
          </Link>
          <div className="artisanal-product-info">
            <h3 className="artisanal-product-title">{product.name}</h3>
            <div className="artisanal-product-price">
              <span className="artisanal-current-price">${product.price}</span>
              {product.originalPrice && (
                <span className="artisanal-original-price">
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

export default ArtisanalProductList;
