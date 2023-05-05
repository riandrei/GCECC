import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import CartItem from './CartItem';

import uniformIcon from '../assets/uniformH1.png';
import trashIcon from '../assets/trash.svg';
import hamburgerMenu from '../assets/hamburger-menu.png';

import '../css/cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const bill = useSelector((state) => state.cart.bill);
  const [mainCheckbox, setMainCheckbox] = useState(false);

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

  const handleCheckbox = (e) => {
    setMainCheckbox(e.target.checked);
  };

  const { pathname } = location;
  sessionStorage.setItem('path', pathname);

  return (
    <>
      <div className="cart-main-container" onClick={toggleNav}>
        <div className="cart-category">
          <button onClick={toggleNav} className="cart-menu" id="burger">
            <img className="hamburger-icon" src={hamburgerMenu} alt="" />
          </button>
          <div className="cart-header">
            <h1>Cart</h1>
            <div className="actions-wrapper">
              <button className="teal">
                <span>Checkout</span>
              </button>
              <button className="crimson">
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
              onChange={(e) => {
                handleCheckbox(e);
              }}
            />
            <h2>PRODUCT</h2>
            <h2>QUANTITY</h2>
            <h2 className="price">PRICE</h2>
          </div>
          <CartItem mainCheckbox={mainCheckbox} />

          <div className="cart-footer">
            <p className="total">{`\u20B1${bill || `0`}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
