import React from 'react';

import AdminOrder from './AdminOrder';

import hamburgerMenu from '../assets/hamburger-menu.png';

import '../css/adminOrders.css';

const AdminOrders = () => {
  const toggleNav = (e) => {
    const nav = document.querySelector(`nav`);

    if (e.target.className == `hamburger-icon`) {
      nav.className = `show-nav`;
      return;
    }
    nav.className = `hide-nav`;
  };
  return (
    <>
      <div className="order-main-container" onClick={toggleNav}>
        <div className="order-category">
          <button onClick={toggleNav} className="order-menu" id="burger">
            <img className="hamburger-icon" src={hamburgerMenu} alt="" />
          </button>
          <div className="order-header">
            <h1>Orders</h1>
          </div>
        </div>
        <div className="order-contents">
          <div className="order-label">
            <h2>ORDER NUMBER</h2>
            <h2>DATE</h2>
            <h2>EMAIL</h2>
            <h2>ORDER STATUS</h2>
            <h2 className="price">BILL</h2>
          </div>
          <AdminOrder />
        </div>
      </div>
    </>
  );
};

export default AdminOrders;
