import { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';

import { updateCartQuantity } from '../actions/cartActions';

import noImg from '../assets/no-image.jpg';

import '../css/cartItem.css';

const CartItem = (props) => {
  const userId = useSelector((state) => state.auth.user.id);
  const token = useSelector((state) => state.auth.token);

  const handleButtonClick = (cartItem, purpose) => {
    const { itemId, size } = cartItem;

    props.newCartItems.forEach((cartItem) => {
      if (cartItem.itemId === itemId && cartItem.size === size) {
        const updatedCartItem = { ...cartItem };

        if (purpose === 'increment') {
          updatedCartItem.quantity += 1;
        }

        if (purpose === 'decrement' && updatedCartItem.quantity > 1) {
          updatedCartItem.quantity -= 1;
        }

        props.updateCartQuantity({ token, userId, updatedCartItem });
      }
    });
  };

  const handleCheckbox = (e, cartItem) => {
    const existingItemCheckbox = [...props.checkedItems];
    const cartItemIndex = existingItemCheckbox?.findIndex((existingItem) => existingItem._id === cartItem._id);

    if (e.target.checked) {
      if (cartItemIndex < 0) {
        existingItemCheckbox.push({
          _id: cartItem._id,
          itemId: cartItem.itemId,
          quantity: cartItem.quantity,
          size: cartItem.size
        });
      }
    } else {
      if (cartItemIndex >= 0) {
        existingItemCheckbox.splice(cartItemIndex, 1);
      }
    }

    props.setCheckedItems(existingItemCheckbox);
  };

  return !props.newCartItems ? (
    <p>No Items</p>
  ) : (
    <>
      {props.newCartItems.map((cartItem) => (
        <div key={cartItem._id} className="item">
          <input
            className="cart-checkbox"
            type="checkbox"
            name=""
            checked={props.checked(cartItem)}
            onChange={(e) => {
              handleCheckbox(e, cartItem);
            }}
          />
          <div className="cart-item">
            <img src={cartItem.img || noImg} alt="" />
            <div className="item-details">
              <h3 className="item-label">{cartItem.label}</h3>
              <p>{cartItem.size}</p>
            </div>
          </div>
          <div className="quantity">
            <button
              onClick={() => {
                handleButtonClick(cartItem, `decrement`);
              }}
            >
              &#8854;
            </button>
            <input value={cartItem.quantity} type="number" readOnly />
            <button
              onClick={() => {
                handleButtonClick(cartItem, `increment`);
              }}
            >
              &oplus;
            </button>
          </div>
          <p className="item-price">{`\u20B1${cartItem.price * cartItem.quantity}`}</p>
        </div>
      ))}
    </>
  );
};

const mapDispatchToProps = { updateCartQuantity };

export default connect(null, mapDispatchToProps)(CartItem);
