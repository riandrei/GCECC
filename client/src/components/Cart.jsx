import React from 'react';

import CartItem from './CartItem';

import uniformIcon from '../assets/uniformH1.png';
import trashIcon from '../assets/trash.svg';

import '../css/cart.css';

const Cart = () => {
  return (
    <>
      <div className="cart-main-container">
        <div className="cart-header">
          <h1>Cart</h1>
          <button>
            <span>Remove</span>
          </button>
        </div>
        <div className="shopping-cart">
          <div className="cart-label">
            <input className="cart-checkbox" type="checkbox" name="" id="" />
            <h2>PRODUCT</h2>
            <h2>QUANTITY</h2>
            <h2 className="price">PRICE</h2>
          </div>
          <CartItem />

          <div className="cart-footer">
            <p className="total">Subtotal: $50000</p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
