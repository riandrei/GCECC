import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import AdminProductPost from './AdminProductPost';

import { getItems } from '../actions/itemActions';
import { getCategories } from '../actions/categoryActions';

import hamburgerMenu from '../assets/hamburger-menu.png';

import '../css/adminproduct.css';

const AdminProduct = (props) => {
  const items = useSelector((state) => state.item.items);
  const categories = useSelector((state) => state.category.categories);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    props.getCategories(token);
    props.getItems(token);
  }, []);

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
      <div className="admin-product-main-container" onClick={toggleNav}>
        <button onClick={toggleNav} className="admin-product-menu">
          <img className="hamburger-icon" src={hamburgerMenu} alt="" />
        </button>

        <div className="admin-product-header">
          <h1 className="admin-product-title">Admin Dashboard</h1>
          <AdminProductPost />
        </div>
        {categories.map((category) => (
          <div key={category._id} className="admin-product-category">
            <div className="admin-product-category-header">
              <h3>{category.category_name}</h3>
            </div>
            <div className="admin-product-category-contents">
              {items.map(
                (item) =>
                  category._id == item.category && (
                    <div key={item._id} className="admin-product">
                      <h4>{item.label}</h4>
                      <div className="admin-product-toggle">
                        <div className="toggle">
                          S
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                          </label>
                        </div>
                        <div className="toggle">
                          M
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                          </label>
                        </div>
                        <div className="toggle">
                          L
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                          </label>
                        </div>
                        <div className="toggle">
                          XL
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapDispatchToProps = { getItems, getCategories };

export default connect(null, mapDispatchToProps)(AdminProduct);
