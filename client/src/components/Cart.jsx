import { useEffect } from 'react';
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
  const cartItems = useSelector((state) => state.cart.items);
  const items = useSelector((state) => state.item.items);

  const filteredItems = items?.filter((item) => cartItems?.find((cartItem) => cartItem.itemId === item._id));
  const newCartItems = cartItems?.map((cartItem, index) => {
    const filteredItem = filteredItems?.find((filteredItem) => filteredItem._id === cartItem.itemId);
    const newCartItem = {
      ...cartItem,
      label: filteredItem.label,
      img: filteredItem.img_url[0],
      price: filteredItem.price
    };

    return newCartItem;
  });
  const totalPrice = newCartItems?.reduce((total, currentCartItem) => total + currentCartItem.price, 0);

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
            <input className="cart-checkbox" type="checkbox" name="" id="" />
            <h2>PRODUCT</h2>
            <h2>QUANTITY</h2>
            <h2 className="price">PRICE</h2>
          </div>
          <CartItem newCartItems={newCartItems} />

          <div className="cart-footer">
            <p className="total">{`\u20B1${totalPrice || `test`}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
