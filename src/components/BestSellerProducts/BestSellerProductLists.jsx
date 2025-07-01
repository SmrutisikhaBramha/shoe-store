import React from 'react';
import { Link } from 'react-router-dom';
import './BestSellerGrid.css'; 
const BestSellerProductList = ({ products }) => {
  return (
    <div className="bestseller-products-grid">
      {products.map((product) => (
        <div key={product.id} className="bestseller-product-card">
          
          <Link to={`/best-sellers/product/${product.id}`}>
            <div className="bestseller-product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="bestseller-product-image"
              />
              {product.label && (
                <span className="bestseller-product-label">{product.label}</span>
              )}
            </div>
</Link>
            <div className="bestseller-product-info">
              <h3 className="bestseller-product-title">{product.name}</h3>
              <div className="bestseller-product-price">
                <span className="bestseller-current-price">{product.price}</span>
                {product.originalPrice && (
                  <span className="bestseller-original-price">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          
        </div>
      ))}
    </div>
  );
};

export default BestSellerProductList;
