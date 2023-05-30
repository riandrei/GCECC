import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import AdminProductPost from './AdminProductPost';

import { getItems, deleteItem } from '../actions/itemActions';
import { getCategories } from '../actions/categoryActions';

import hamburgerMenu from '../assets/hamburger-menu.png';

import '../css/adminproduct.css';

const AdminProduct = (props) => {
  const items = useSelector((state) => state.item.items);
  const categories = useSelector((state) => state.category.categories);
  const token = sessionStorage.getItem('token');

  const handleItemDelete = (itemId) => {
    props.deleteItem({ itemId, token });
  };

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

  return !items ? (
    <p> Loading... </p>
  ) : (
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
                      <h4>{item.label.length > 17 ? `${item.label.slice(0, 14)}...` : item.label}</h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        onClick={() => handleItemDelete(item._id)}
                      >
                        <path
                          fill="crimson"
                          d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                        />
                      </svg>
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

const mapDispatchToProps = { getItems, getCategories, deleteItem };

export default connect(null, mapDispatchToProps)(AdminProduct);
