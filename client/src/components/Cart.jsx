import { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import CartItem from './CartItem';
import Header from './Header';
import { deleteCartItems } from '../actions/cartActions.js';

import hamburgerMenu from '../assets/hamburger-menu.png';

import '../css/cart.css';

const Cart = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mainCheckbox, setMainCheckbox] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.user.id);
  const token = useSelector((state) => state.auth.token);
  const bill = useSelector((state) => state.cart.bill);
  const items = useSelector((state) => state.item.items);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/`);
    }
  }, [isAuthenticated]);

  const toggleNav = (e) => {
    const nav = document.querySelector(`nav`);

    if (e.target.className == `hamburger-icon`) {
      nav.className = `show-nav`;
      return;
    }
    nav.className = `hide-nav`;
  };

  const handleMainCheckbox = (e) => {
    const existingItemCheckbox = [...checkedItems];

    cartItems.forEach((cartItem) => {
      const cartItemIndex = existingItemCheckbox?.findIndex((existingItem) => existingItem._id === cartItem._id);

      if (e.target.checked) {
        if (cartItemIndex < 0) {
          existingItemCheckbox.push(cartItem);
        }
      } else {
        existingItemCheckbox.splice(0, cartItems.length);
      }
    });

    setCheckedItems(existingItemCheckbox);
  };

  const checked = (cartItem) => {
    const { _id } = cartItem;
    const check = checkedItems?.some((item) => item._id === _id);

    return check;
  };

  const removeItem = () => {
    props.deleteCartItems({ token, userId, checkedItems });

    checkedItems.splice(0, cartItems.length);
  };

  const checkoutItems = () => {
    if (checkedItems.length === 0) {
      return;
    }
    navigate('/user/checkout', { state: { checkedItems } });
  };

  const { pathname } = location;
  sessionStorage.setItem('path', pathname);

  return !cartItems ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="cart-main-container" onClick={toggleNav}>
        <div className="cart-category">
          <Header />
          <div className="cart-header">
            <h1>Cart</h1>
            <div className="actions-wrapper">
              <button className="teal">
                <span onClick={checkoutItems}>Checkout</span>
              </button>
              <button className="crimson" onClick={removeItem}>
                <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
        <div className="shopping-cart">
          <div className="cart-label">
            <input
              className="cart-checkbox"
              type="checkbox"
              name=""
              id=""
              checked={checkedItems.length === cartItems.length}
              onChange={(e) => {
                handleMainCheckbox(e);
              }}
            />
            <h2>PRODUCT</h2>
            <h2>QUANTITY</h2>
            <h2 className="price">PRICE</h2>
          </div>
          <CartItem
            cartItems={cartItems}
            checked={checked}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />

          <div className="cart-footer">
            <p className="total">{`\u20B1${bill || `0`}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = { deleteCartItems };

export default connect(null, mapDispatchToProps)(Cart);
