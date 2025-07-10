import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import artisanalProducts from '../data/Artisanal'; 
import { MdOutlineWhatsapp, MdFacebook } from 'react-icons/md';
import { FaPinterest, FaXTwitter } from 'react-icons/fa6';
import { IoMdHeartEmpty } from 'react-icons/io';
import './ArtisanalProductDetail.css';  

const ArtisanalProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id);
  const product = artisanalProducts.find((p) => p.id === productId);
  const index = artisanalProducts.findIndex((p) => p.id === productId);

  if (!product) return <div>Product not found!</div>;

  const goToPrevious = () => {
    if (index > 0) {
      const prevProduct = artisanalProducts[index - 1];
      navigate(`/artisanal/product/${prevProduct.id}`);
    }
  };

  const goToNext = () => {
    if (index < artisanalProducts.length - 1) {
      const nextProduct = artisanalProducts[index + 1];
      navigate(`/artisanal/product/${nextProduct.id}`);
    }
  };

  return (
    <div className="artisanal-detail-container">
      <div className="artisanal-top-navigation">
        <div className="artisanal-breadcrumb">
          <Link to="/">Home</Link> &gt;{" "}
          <Link to="/artisanal">Artisanal</Link> &gt; {product.name}
        </div>

        <div className="artisanal-navigation-buttons">
          <button onClick={goToPrevious} disabled={index === 0}>
            &lt; Prev
          </button>
          <button onClick={goToNext} disabled={index === artisanalProducts.length - 1}>
            Next &gt;
          </button>
        </div>
      </div>

      <div className="artisanal-detail-content">
        <div className="artisanal-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="artisanal-detail-info">
          <h2>{product.name}</h2>
          <p className="artisanal-product-price">${product.price}</p>

          <div className="artisanal-quantity-section">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" defaultValue="1" min="1" />
          </div>

          <div className="artisanal-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
            <button className="wishlist">
              <IoMdHeartEmpty />
            </button>
          </div>

          <div className="artisanal-social-icons">
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

export default ArtisanalProductDetail;
