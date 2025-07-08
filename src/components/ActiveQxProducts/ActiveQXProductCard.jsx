import React from 'react';
import { Link } from 'react-router-dom';
import './ActiveQXGrid.css'; 

const ActiveQXProductCard = ({ product }) => {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    label
  } = product;

  return (
    <div className="activeqx-product-card">
      <Link to={`/active-qx/product/${id}`}>
        <div className="activeqx-product-image-wrapper">
          <img src={image} alt={name} className="activeqx-product-image" />
          {label && <span className="activeqx-product-label">{label}</span>}
        </div>
        <div className="activeqx-product-info">
          <h3 className="activeqx-product-title">{name}</h3>
          <div className="activeqx-product-price">
            <span className="activeqx-current-price">${price}</span>
            {originalPrice && (
              <span className="activeqx-original-price">${originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ActiveQXProductCard;
