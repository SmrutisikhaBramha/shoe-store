import React from 'react';
import { Link } from 'react-router-dom';
import './ArtisanalGrid.css'; 

const ArtisanalProductCard = ({ product }) => {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    label
  } = product;

  return (
    <div className="artisanal-product-card">
      <Link to={`/artisanal/product/${id}`}>
        <div className="artisanal-product-image-wrapper">
          <img src={image} alt={name} className="artisanal-product-image" />
          {label && <span className="artisanal-product-label">{label}</span>}
        </div>
        <div className="artisanal-product-info">
          <h3 className="artisanal-product-title">{name}</h3>
          <div className="artisanal-product-price">
            <span className="artisanal-current-price">${price}</span>
            {originalPrice && (
              <span className="artisanal-original-price">${originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArtisanalProductCard;
