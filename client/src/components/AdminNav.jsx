import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import LogoutButton from './LogoutButton';

import gcLogo from '../assets/gordoncollege.png';
import helpIcon from '../assets/help.png';
import shoppingCartIcon from '../assets/shopping-cart.png';
import uniformIcon from '../assets/uniform.png';
import writeIcon from '../assets/write.png';

import styles from '../css/nav.module.css';

const Nav = () => {
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === `/admin`) {
    return null;
  }

  return (
    <>
      <nav className={styles['navID']}>
        <div className={styles['nav-branding']}>
          <img className={styles['gc-logo']} src={gcLogo} alt="GC Logo" />
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
            <Link to="/admin/products">Products</Link>
          </li>
          <li
            style={{
              backgroundImage: `url(${writeIcon})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left center'
            }}
          >
            <Link to="/admin/orders">Orders</Link>
          </li>
        </ul>
        <hr />
        <LogoutButton />
      </nav>
    </>
  );
};

export default Nav;
