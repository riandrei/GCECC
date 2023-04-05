import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import gcLogo from '../assets/gordoncollege.png';
import helpIcon from '../assets/help.png';
import logoutIcon from '../assets/logout.png';
import shoppingCartIcon from '../assets/shopping-cart.png';
import uniformIcon from '../assets/uniform.png';
import writeIcon from '../assets/write.png';

import '../css/nav.css';

const Nav = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav id="navID">
      <div className="nav-branding">
        <img className="gc-logo" src={gcLogo} alt="GC Logo" />
        <p title="Student's Online Marketplace">GCECC SOMP</p>
      </div>
      <hr />
      <ul>
        <li
          style={{
            backgroundImage: `url(${uniformIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center'
          }}
        >
          <a href="home.html">GCECC</a>
        </li>
        <li
          style={{
            backgroundImage: `url(${writeIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center'
          }}
        >
          <a href="student-market.html">Student Market</a>
        </li>
        <li
          style={{
            backgroundImage: `url(${shoppingCartIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center'
          }}
        >
          <a href="cart.html">Cart</a>
        </li>
        <li
          style={{
            backgroundImage: `url(${helpIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center'
          }}
        >
          <a href="seller.html">Be a Seller</a>
        </li>
      </ul>
      <hr />
      <button>
        <img src={logoutIcon} alt="Logout button" title="Logout" />
      </button>
    </nav>
  );
};

export default Nav;
