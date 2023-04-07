import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import uniformIcon from '../assets/uniformH1.png';
import femaleBlouse from '../assets/products/uniform/female-blouse.png';
import sampleLace from '../assets/products/ID/ID-BSEMC.png';
import sampleShirt from '../assets/products/sportsfest-shirt-sample.png';
import hamburgerMenu from '../assets/hamburger-menu.png';

import '../css/store.css';

const Store = () => {
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
    <div className="store-main-container" onClick={toggleNav}>
      <div className="store-category">
        <button onClick={toggleNav} className="store-menu" id="burger">
          <img className="hamburger-icon" src={hamburgerMenu} alt="" />
        </button>
        <div className="store-category-title">
          <h1>School Uniforms</h1>
          <img src={uniformIcon} alt="uniform-icon" />
        </div>
        <div className="store-category-contents">
          <a className="product-contents" href="gcecc-products/GC-Uniform-Polo.html">
            <div className="box-up">
              {/* PULL FROM THE DATABASE */}
              <img src={femaleBlouse} height="300px" className="img" alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">Male Polo</span>
                  <span className="p-company">Gordon College</span>
                </div>
                <div className="a-size">
                  Sizes : <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <p className="cart" href="#">
                <span className="price">₱600.00</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </p>
            </div>
          </a>
          <a className="product-contents" href="gcecc-products/GC-Uniform-Polo.html">
            <div className="box-up">
              {/* PULL FROM THE DATABASE */}
              <img src={femaleBlouse} height="300px" className="img" alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">Male Polo</span>
                  <span className="p-company">Gordon College</span>
                </div>
                <div className="a-size">
                  Sizes : <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <p className="cart" href="#">
                <span className="price">₱600.00</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </p>
            </div>
          </a>
          <a className="product-contents" href="gcecc-products/GC-Uniform-Polo.html">
            <div className="box-up">
              {/* PULL FROM THE DATABASE */}
              <img src={femaleBlouse} height="300px" className="img" alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">Male Polo</span>
                  <span className="p-company">Gordon College</span>
                </div>
                <div className="a-size">
                  Sizes : <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <p className="cart" href="#">
                <span className="price">₱600.00</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="store-category">
        <div className="store-category-title">
          <h1>ID Laces</h1>
          <img src={uniformIcon} alt="uniform-icon" />
        </div>
        <div className="store-category-contents">
          <a className="product-contents" href="gcecc-products/GC-Uniform-Polo.html">
            <div className="box-up">
              {/* PULL FROM THE DATABASE */}
              <img src={femaleBlouse} height="300px" className="img" alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">Male Polo</span>
                  <span className="p-company">Gordon College</span>
                </div>
                <div className="a-size">
                  Sizes : <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <p className="cart" href="#">
                <span className="price">₱600.00</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </p>
            </div>
          </a>
          <a className="product-contents" href="gcecc-products/GC-Uniform-Polo.html">
            <div className="box-up">
              {/* PULL FROM THE DATABASE */}
              <img src={femaleBlouse} height="300px" className="img" alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">Male Polo</span>
                  <span className="p-company">Gordon College</span>
                </div>
                <div className="a-size">
                  Sizes : <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <p className="cart" href="#">
                <span className="price">₱600.00</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </p>
            </div>
          </a>
          <a className="product-contents" href="gcecc-products/GC-Uniform-Polo.html">
            <div className="box-up">
              {/* PULL FROM THE DATABASE */}
              <img src={femaleBlouse} height="300px" className="img" alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">Male Polo</span>
                  <span className="p-company">Gordon College</span>
                </div>
                <div className="a-size">
                  Sizes : <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <p className="cart" href="#">
                <span className="price">₱600.00</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="store-category">
        <div className="store-category-title">
          <h1>Sportfest Shirts</h1>
          <img src={uniformIcon} alt="uniform-icon" />
        </div>
        <div className="store-category-contents"></div>
      </div>
    </div>
  );
};

export default Store;
