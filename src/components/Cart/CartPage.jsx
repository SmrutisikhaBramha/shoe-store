import React, { useState } from 'react';
import './CartPage.css';
import cardShoe from '../../assets/images/card-shoe.png';
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiNoteBlankDuotone } from "react-icons/pi";
import { IoPricetagOutline } from "react-icons/io5";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 99;
  const totalPrice = quantity * unitPrice;


  const increaseQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2>My cart</h2>

        <div className="cart-item">
          <img src={cardShoe} alt="Bio Runner" className="product-img" />

          <div className="item-details">
            <p className="item-name">Bio Runner</p>
            <p>
              <span className="old-price">$119.00</span>{' '}
              <span className="new-price">${unitPrice.toFixed(2)}</span>
            </p>
          </div>
<div className="item-controls">
          <div className="quantity">
            <button onClick={decreaseQty}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQty}>+</button>
          </div>
          <div className="price">${totalPrice.toFixed(2)}</div>
          <div className="delete"> <RiDeleteBin5Line size={20} /></div>
        </div>
</div>
        <div className="extras">
          <p><IoPricetagOutline  /><a href="/">Enter a promo code</a></p>
          <p><PiNoteBlankDuotone  />  <a href="/">Add a note</a></p>
        </div>
      </div>

      <div className="cart-right">
        <h3>Order summary</h3>
        <div className="summary">
          <div className="row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="row">
            <a href="/">Estimate Delivery</a>
          </div>
          <div className="row total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <hr />
          <button className="checkout-btn">Checkout</button>
          <p className="secure">🔒 Secure Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
