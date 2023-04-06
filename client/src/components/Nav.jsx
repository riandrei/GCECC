// import React from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// import gcLogo from '../assets/gordoncollege.png';
// import helpIcon from '../assets/help.png';
// import logoutIcon from '../assets/logout.png';
// import shoppingCartIcon from '../assets/shopping-cart.png';
// import uniformIcon from '../assets/uniform.png';
// import writeIcon from '../assets/write.png';

// import '../css/nav.css';

// const Nav = () => {
//   const location = useLocation();

//   if (location.pathname === '/') {
//     return null;
//   }

//   return (
//     <nav id="navID">
//       <div className="nav-branding">
//         <img className="gc-logo" src={gcLogo} alt="GC Logo" />
//         <p title="Student's Online Marketplace">GCECC SOMP</p>
//       </div>
//       <hr />
//       <ul>
//         <li
//           style={{
//             backgroundImage: `url(${uniformIcon})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'left center'
//           }}
//         >
//           <Link to="/store">GCECC</Link>
//         </li>
//         <li
//           style={{
//             backgroundImage: `url(${writeIcon})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'left center'
//           }}
//         >
//           <Link to="/market">Student Market</Link>
//         </li>
//         <li
//           style={{
//             backgroundImage: `url(${shoppingCartIcon})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'left center'
//           }}
//         >
//           <Link to="/cart">Cart</Link>
//         </li>
//         <li
//           style={{
//             backgroundImage: `url(${helpIcon})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'left center'
//           }}
//         >
//           <Link to="/seller">Be A Seller</Link>
//         </li>
//       </ul>
//       <hr />
//       <button>
//         <img src={logoutIcon} alt="Logout button" title="Logout" />
//       </button>
//     </nav>
//   );
// };

// export default Nav;

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import gcLogo from '../assets/gordoncollege.png';
import helpIcon from '../assets/help.png';
import logoutIcon from '../assets/logout.png';
import shoppingCartIcon from '../assets/shopping-cart.png';
import uniformIcon from '../assets/uniform.png';
import writeIcon from '../assets/write.png';

import styles from '../css/nav.module.css';

const Nav = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
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
          <Link to="/store">GCECC</Link>
        </li>
        <li
          style={{
            backgroundImage: `url(${writeIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center'
          }}
        >
          <Link to="/market">Student Market</Link>
        </li>
        <li
          style={{
            backgroundImage: `url(${shoppingCartIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center'
          }}
        >
          <Link to="/cart">Cart</Link>
        </li>
        <li
          style={{
            backgroundImage: `url(${helpIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center'
          }}
        >
          <Link to="/seller">Be A Seller</Link>
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
