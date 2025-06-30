import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/productsData';
import { MdOutlineWhatsapp, MdFacebook } from 'react-icons/md';
import { FaPinterest, FaXTwitter } from 'react-icons/fa6';
import { IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';

import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find((item) => item.id === productId);
  const navigate = useNavigate();

  // 🛠 Correct navigation using index
  const currentIndex = products.findIndex((p) => p.id === productId);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const prevProduct = products[currentIndex - 1];
      navigate(`/product/${prevProduct.id}`);
    }
  };

  const goToNext = () => {
    if (currentIndex < products.length - 1) {
      const nextProduct = products[currentIndex + 1];
      navigate(`/product/${nextProduct.id}`);
    }
  };

  if (!product) return <div>Product not found!</div>;

  return (
    <div className="product-detail-container">
      <div className="top-navigation">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt;
          <Link to={product.label === 'Kids' ? "/kids" : "/all-products"}>
            {product.label === 'Kids' ? 'Kids Shoes' : 'All Products'}
          </Link> &gt; {product.name}
        </div>

        <div className="navigation-buttons">
          <button onClick={goToPrevious} disabled={currentIndex === 0}>
            &lt; Previous
          </button>
          <button onClick={goToNext} disabled={currentIndex === products.length - 1}>
            Next &gt;
          </button>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h2 className="product-names">{product.name}</h2>
          <p className="product-price">${product.price}</p>

          <div className="quantity-section">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              min="1"
              max="100"
              defaultValue="1"
              className="quantity-input"
            />
          </div>

          <div className="buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
            <button className="wishlist">
              <IoMdHeartEmpty />
            </button>
          </div>

          <div className="social-icons">
            <MdOutlineWhatsapp className="social-icon" />
            <MdFacebook className="social-icon" />
            <FaPinterest className="social-icon" />
            <FaXTwitter className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
