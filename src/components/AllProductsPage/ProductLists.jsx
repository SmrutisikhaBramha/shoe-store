import React, { useState } from 'react';
import ProductCards from './ProductCards';
import LoadMoreButton from './LoadMoreButton';
import './ProductLists.css';

const ProductLists = ({ products }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount(products.length);
  };

  return (
    <div className="product-list-container">
      <h6>12 products</h6>
      <div className="product-grid">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>

      {visibleCount < products.length && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default ProductLists;
