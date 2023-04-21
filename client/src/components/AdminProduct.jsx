import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import AdminProductPost from './AdminProductPost';

import { getItems } from '../actions/itemActions';

import hamburgerMenu from '../assets/hamburger-menu.png';

import '../css/adminproduct.css';

const AdminProduct = (props) => {
  const items = useSelector((item) => item.items);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    props.getItems(token);
    console.log(`called`);
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

        <div className="admin-product-category">
          <div className="admin-product-category-header">
            <h3>Uniforms</h3>
          </div>
          <div className="admin-product-category-contents">
            <div className="admin-product">
              <h4>Female Blouse</h4>
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
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = { getItems };

export default connect(null, mapDispatchToProps)(AdminProduct);
