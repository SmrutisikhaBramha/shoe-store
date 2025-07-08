import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import activeQXProducts from '../data/ActiveQX';
import { MdOutlineWhatsapp, MdFacebook } from 'react-icons/md';
import { FaPinterest, FaXTwitter } from 'react-icons/fa6';
import { IoMdHeartEmpty } from 'react-icons/io';
import './ActiveQXProductDetail.css'; 

const ActiveQXProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id);
  const product = activeQXProducts.find((p) => p.id === productId);
  const index = activeQXProducts.findIndex((p) => p.id === productId);

  if (!product) return <div>Product not found!</div>;

  const goToPrevious = () => {
    if (index > 0) {
      const prevProduct = activeQXProducts[index - 1];
      navigate(`/active-qx/product/${prevProduct.id}`);
    }
  };

  const goToNext = () => {
    if (index < activeQXProducts.length - 1) {
      const nextProduct = activeQXProducts[index + 1];
      navigate(`/active-qx/product/${nextProduct.id}`);
    }
  };

  return (
    <div className="activeqx-detail-container">
      <div className="activeqx-top-navigation">
        <div className="activeqx-breadcrumb">
          <Link to="/">Home</Link> &gt;{" "}
          <Link to="/active-qx">Active QX</Link> &gt; {product.name}
        </div>

        <div className="activeqx-navigation-buttons">
          <button onClick={goToPrevious} disabled={index === 0}>
            &lt; Prev
          </button>
          <button onClick={goToNext} disabled={index === activeQXProducts.length - 1}>
            Next &gt;
          </button>
        </div>
      </div>

      <div className="activeqx-detail-content">
        <div className="activeqx-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="activeqx-detail-info">
          <h2>{product.name}</h2>
          <p className="activeqx-product-price">${product.price}</p>

          <div className="activeqx-quantity-section">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" defaultValue="1" min="1" />
          </div>

          <div className="activeqx-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
            <button className="wishlist">
              <IoMdHeartEmpty />
            </button>
          </div>

          <div className="activeqx-social-icons">
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

export default ActiveQXProductDetail;
