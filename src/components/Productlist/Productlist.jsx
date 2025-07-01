import React from 'react';
import './productlist.css';
import products from '../../data/products';

function ProductList() {
  return (
    <div className="product-section">
     
      <div className="section-header">
        <h2 className="product-title">OUR BEST SELLERS</h2>
        <a href="/best-sellers" className="view-all-link">VIEW ALL →</a>
      </div>

      
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <span className="product-label">{product.label}</span>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <p className="product-name">{product.title}</p>
              <p className="product-price">
                {product.originalPrice && (
                  <span className="original-price">{product.originalPrice}</span>
                )}
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
