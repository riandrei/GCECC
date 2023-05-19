import { useLocation } from 'react-router-dom';

import Order from './Order';

import hamburgerMenu from '../assets/hamburger-menu.png';

import '../css/orders.css';

const Orders = () => {
  const location = useLocation();

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
      <div className="user-order-main-container" onClick={toggleNav}>
        <div className="user-order-category">
          <button onClick={toggleNav} className="user-order-menu" id="burger">
            <img className="hamburger-icon" src={hamburgerMenu} alt="" />
          </button>
          <div className="user-order-header">
            <h1>Orders</h1>
          </div>
        </div>
        <div className="user-order-contents">
          <div className="user-order-label">
            <h2>ORDER NUMBER</h2>
            <h2>DATE</h2>
            <h2>EMAIL</h2>
            <h2>ORDER STATUS</h2>
            <h2 className="price">BILL</h2>
          </div>
          <Order />
        </div>
      </div>
    </>
  );
};

export default Orders;
