import React from 'react';
import { Link } from 'react-router-dom';
import './productlist.css';
import products from '../../data/products';

function ProductList() {
  return (
    <div className="product-section">
      <div className="section-header">
        <h2 className="product-name">OUR BEST SELLERS</h2>
        <Link to="/best-sellers" className="view-all-link">VIEW ALL →</Link>
      </div>

<div className="product-grids">
  {products.map(product => (
    <div key={product.id} className="products-cards">
      <Link to={`/best-sellers/product/${product.id}`}>
        {product.label && <span className="products-label">{product.label}</span>} 
        <img src={product.image} alt={product.name} className="products-image" />
      </Link>
      <div className="products-info">
        <h2 className="products-names">{product.name}</h2>
        <p className="products-price">
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
