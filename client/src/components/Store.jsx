import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Header from './Header';

import hamburgerMenu from '../assets/hamburger-menu.png';
import noImg from '../assets/no-image.jpg';

import '../css/store.css';

const Store = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const categories = useSelector((state) => state.category.categories);
  const items = useSelector((state) => state.item.items);

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

  const { pathname } = location;
  sessionStorage.setItem('path', pathname);

  return (
    <div className="store-main-container" onClick={toggleNav}>
      {categories.map((category) => (
        <div key={category._id} className="store-category">
          <Header />
          <div className="store-category-title">
            <h1>{category.category_name}</h1>
          </div>

          <div className="store-category-contents">
            {items.map(
              (item) =>
                category._id == item.category && (
                  <Link key={item._id} to={`/user/store/${item._id}`} className="product-contents">
                    <div className="uni-card male reflect" style={{ backgroundImage: `url(${item.img_url})` }}>
                      <h1>Gordon College</h1>
                      <img src={item.img_url} className="backdrop-image" alt="" />
                      <p>{item.label}</p>
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
