import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import products from '../data/products'; // Your Best Seller product list
import { MdOutlineWhatsapp, MdFacebook } from 'react-icons/md';
import { FaPinterest, FaXTwitter } from 'react-icons/fa6';
import { IoMdHeartEmpty } from 'react-icons/io';
import './BestSellerProductDetail.css';

const BestSellerProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);
  const index = products.findIndex((p) => p.id === productId);

  if (!product) return <div>Product not found!</div>;

  const goToPrevious = () => {
    if (index > 0) {
      const prevProduct = products[index - 1];
      navigate(`/best-sellers/product/${prevProduct.id}`);
    }
  };

  const goToNext = () => {
    if (index < products.length - 1) {
      const nextProduct = products[index + 1];
      navigate(`/best-sellers/product/${nextProduct.id}`);
    }
  };

  return (
    <div className="bestseller-detail-container">
      <div className="bestseller-top-navigation">
        <div className="bestseller-breadcrumb">
          <Link to="/">Home</Link> &gt;{" "}
          <Link to="/best-sellers">Best Sellers</Link> &gt; {product.name || product.title}
        </div>

        <div className="bestseller-navigation-buttons">
          <button onClick={goToPrevious} disabled={index === 0}>
            &lt; Prev
          </button>
          <button onClick={goToNext} disabled={index === products.length - 1}>
            Next &gt;
          </button>
        </div>
      </div>

      <div className="bestseller-detail-content">
        <div className="bestseller-detail-image">
          <img src={product.image} alt={product.name || product.title} />
        </div>

        <div className="bestseller-detail-info">
          <h2>{product.name || product.title}</h2>
          <p className="bestseller-product-price">{product.price}</p>

          <div className="bestseller-quantity-section">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" defaultValue="1" min="1" />
          </div>

          <div className="bestseller-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
            <button className="wishlist">
              <IoMdHeartEmpty />
            </button>
          </div>

          <div className="bestseller-social-icons">
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

export default BestSellerProductDetail;
