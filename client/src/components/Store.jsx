import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import uniformIcon from '../assets/uniformH1.png';
import femaleBlouse from '../assets/products/uniform/female-blouse.png';
import sampleLace from '../assets/products/ID/ID-BSEMC.png';
import sampleShirt from '../assets/products/sportsfest-shirt-sample.png';
import hamburgerMenu from '../assets/hamburger-menu.png';
import noImg from '../assets/no-image.jpg';

import '../css/store.css';

const Store = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const categories = useSelector((state) => state.category.categories);
  const items = useSelector((state) => state.item.items);
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
      <button onClick={toggleNav} className="store-menu" id="burger">
        <img className="hamburger-icon" src={hamburgerMenu} alt="" />
      </button>
      {categories.map((category) => (
        <div key={category._id} className="store-category">
          <div className="store-category-title">
            <h1>{category.category_name}</h1>
          </div>

          <div className="store-category-contents">
            {items.map(
              (item) =>
                category._id == item.category && (
                  <Link key={item._id} to={`/user/store/${item._id}`} className="product-contents">
                    <div className="box-up">
                      {/* PULL FROM THE DATABASE */}
                      <img src={item.img_url[0] ? item.img_url[0] : noImg} height="300px" className="img" alt="" />
                      <div className="img-info">
                        <div className="info-inner">
                          <span className="p-name">{item.label}</span>
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
                        <span className="price">{`₱${item.price}`}</span>
                        <span className="add-to-cart">
                          <span className="txt">Add in cart</span>
                        </span>
                      </p>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Store;
