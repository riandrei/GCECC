import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import hamburgerMenu from '../assets/hamburger-menu.png';
import uniformIcon from '../assets/uniformH1.png';

import '../css/seller.css';

const Seller = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/`);
    }
  }, [isAuthenticated, navigate]);

  const toggleNav = (e) => {
    const nav = document.querySelector(`nav`);
    const tos = document.querySelector(`.tos`);

    if (e.target.className == `hamburger-icon`) {
      nav.className = `show-nav`;
      return;
    }
    if (e.target.className == `tos-close`) {
      tos.className = `tos hide`;
    }
    nav.className = `hide-nav`;
  };

  const showTerms = (e) => {
    const tos = document.querySelector(`.tos`);
    if (e.target.className === `sell-terms` && tos.className === `tos hide`) {
      tos.className = `tos show`;
      return;
    }
  };

  return (
    <div className="seller-main-container" onClick={toggleNav}>
      <div className="seller-category">
        <button onClick={toggleNav} className="seller-menu" id="burger">
          <img className="hamburger-icon" src={hamburgerMenu} alt="" />
        </button>
        <div className="seller-category-title">
          <h1>School Uniforms</h1>
        </div>
      </div>
      <div className="seller-category-contents">
        <form action="">
          <label id="sell-product-name">
            Product Name:
            <input type="text" placeholder="Enter your product name here..." />
          </label>
          <label id="sell-product-price">
            Product Price:
            <input type="number" placeholder="Enter your desire price here..." min="1" />
          </label>
          <label id="sell-product-contact">
            Contact:
            <input type="text" placeholder="123456789@gordoncollege.edu.ph / 09123456789" />
          </label>
          <label id="sell-product-upload">
            <button>Upload Image</button>
            <input type="file" />
          </label>
          <label id="sell-product-description">
            Description:
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
          <label id="sell-terms">
            <input className="terms-checkbox" type="checkbox" id="regulation" name="regulation" />I agree to the{' '}
            <span className="sell-terms" onClick={showTerms}>
              {' '}
              rules and regulations
            </span>
          </label>
          <button>Submit</button>
        </form>
        <div className="tos hide">
          <h3 className="tos-close">X</h3>
          <h2>Rules and Regulation</h2>
          <ol>
            <li>Kumain ka sa tamang oras.</li>
            <li>Wag ka papalipas ng gutom.</li>
            <li>Do not post inappropriate or malicious content</li>
            <li>Matulog nang maaga</li>
            <li>Ako nalang pls</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Seller;
