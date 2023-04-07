import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import uniformIcon from '../assets/uniformH1.png';
import sampleProductImage from '../assets/products/smp-sample-product.jpg';
import hamburgerMenu from '../assets/hamburger-menu.png';

import '../css/studentmarketplace.css';

const StudentMarket = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/`);
    }
  }, [isAuthenticated, navigate]);

  const toggleNav = (e) => {
    const nav = document.querySelector(`nav`);

    if (e.target.className == `hamburger-icon`) {
      nav.className = `show-nav`;
      return;
    }
    nav.className = `hide-nav`;
  };
  return (
    <div className="market-main-container" onClick={toggleNav}>
      <div className="market-category">
        <button onClick={toggleNav} className="store-menu" id="burger">
          <img className="hamburger-icon" src={hamburgerMenu} alt="" />
        </button>
        <div className="market-category-title">
          <h1>Student Marketplace</h1>
        </div>
        <div className="market-category-contents">
          <a className="marketplace-item" href="#">
            <div class="product">
              <figure>
                <img
                  src={sampleProductImage}
                  alt="Product Image"
                  className="product-image"
                  width="300px"
                  height="400px"
                />
              </figure>
              <div className="product-description">
                <div className="info">
                  <h1>Sapatos ko</h1>
                  <p>Bilihin niyo na tapon ko to size 40 need lang pera ASAP</p>
                  <p>Posted by: Riandrei Casanas</p>
                </div>

                <div className="price">₱300</div>
              </div>
            </div>
          </a>
          <a className="marketplace-item" href="#">
            <div class="product">
              <figure>
                <img
                  src={sampleProductImage}
                  alt="Product Image"
                  className="product-image"
                  width="300px"
                  height="400px"
                />
              </figure>
              <div className="product-description">
                <div className="info">
                  <h1>Sapatos ko</h1>
                  <p>Bilihin niyo na tapon ko to size 40 need lang pera ASAP</p>
                  <p>Posted by: Riandrei Casanas</p>
                </div>

                <div className="price">₱300</div>
              </div>
            </div>
          </a>
          <a className="marketplace-item" href="#">
            <div class="product">
              <figure>
                <img
                  src={sampleProductImage}
                  alt="Product Image"
                  className="product-image"
                  width="300px"
                  height="400px"
                />
              </figure>
              <div className="product-description">
                <div className="info">
                  <h1>Sapatos ko</h1>
                  <p>Bilihin niyo na tapon ko to size 40 need lang pera ASAP</p>
                  <p>Posted by: Riandrei Casanas</p>
                </div>

                <div className="price">₱300</div>
              </div>
            </div>
          </a>
          <a className="marketplace-item" href="#">
            <div class="product">
              <figure>
                <img
                  src={sampleProductImage}
                  alt="Product Image"
                  className="product-image"
                  width="300px"
                  height="400px"
                />
              </figure>
              <div className="product-description">
                <div className="info">
                  <h1>Sapatos ko</h1>
                  <p>Bilihin niyo na tapon ko to size 40 need lang pera ASAP</p>
                  <p>Posted by: Riandrei Casanas</p>
                </div>

                <div className="price">₱300</div>
              </div>
            </div>
          </a>
          <a className="marketplace-item" href="#">
            <div class="product">
              <figure>
                <img
                  src={sampleProductImage}
                  alt="Product Image"
                  className="product-image"
                  width="300px"
                  height="400px"
                />
              </figure>
              <div className="product-description">
                <div className="info">
                  <h1>Sapatos ko</h1>
                  <p>Bilihin niyo na tapon ko to size 40 need lang pera ASAP</p>
                  <p>Posted by: Riandrei Casanas</p>
                </div>

                <div className="price">₱300</div>
              </div>
            </div>
          </a>
          <a className="marketplace-item" href="#">
            <div class="product">
              <figure>
                <img
                  src={sampleProductImage}
                  alt="Product Image"
                  className="product-image"
                  width="300px"
                  height="400px"
                />
              </figure>
              <div className="product-description">
                <div className="info">
                  <h1>Sapatos ko</h1>
                  <p>Bilihin niyo na tapon ko to size 40 need lang pera ASAP</p>
                  <p>Posted by: Riandrei Casanas</p>
                </div>

                <div className="price">₱300</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentMarket;
